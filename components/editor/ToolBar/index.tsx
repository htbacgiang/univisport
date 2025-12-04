import { FC } from "react";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { AiFillCaretDown } from "react-icons/ai";
import { RiDoubleQuotesL } from "react-icons/ri";
import {
  BsTypeStrikethrough,
  BsBraces,
  BsCode,
  BsListOl,
  BsListUl,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsImageFill,
} from "react-icons/bs";
import { MdFormatAlignCenter, MdFormatAlignRight, MdFormatAlignLeft } from "react-icons/md";
import { MdTableRows, MdTableView, MdDeleteOutline } from "react-icons/md";

import Button from "./Button";
import { getFocusedEditor } from "../EditorUtils";
import DropdownOptions from "../../common/DropdownOptions";
import InsertLink from "../Link/InsertLink";
import { linkOption } from "../Link/LinkForm";
import EmbedYoutube from "./EmbedYoutube";
import EmbedImage from "./EmbedImage";
import InsertTable from "./InsertTable";
import EmbedFacebookReels from "./EmbedFacebookReels";

interface Props {
  editor: Editor | null;
  onOpenImageClick?(): void;
  onDropdownToggle?(isOpen: boolean): void;
}

const ToolBar: FC<Props> = ({
  editor,
  onOpenImageClick,
  onDropdownToggle,
}): JSX.Element | null => {
  const [textColor, setTextColor] = useState<string>("#000000");

  const handleTextColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!editor) return;
    
    const selectedColor = event.target.value;
    setTextColor(selectedColor);
    getFocusedEditor(editor).setColor(selectedColor).run();
  };

  const options = [
    {
      label: "Đoạn văn",
      onClick: () => {
        if (!editor) return;
        getFocusedEditor(editor).setParagraph().run();
      },
    },
    {
      label: "Tiêu đề 1",
      onClick: () => {
        if (!editor) return;
        getFocusedEditor(editor).toggleHeading({ level: 1 }).run();
      },
    },
    {
      label: "Tiêu đề 2",
      onClick: () => {
        if (!editor) return;
        getFocusedEditor(editor).toggleHeading({ level: 2 }).run();
      },
    },
    {
      label: "Tiêu đề 3",
      onClick: () => {
        if (!editor) return;
        getFocusedEditor(editor).toggleHeading({ level: 3 }).run();
      },
    },
  ];

  const getLabel = (): string => {
    if (!editor) return "Đoạn văn";
    
    if (editor.isActive("heading", { level: 1 })) return "Tiêu đề 1";
    if (editor.isActive("heading", { level: 2 })) return "Tiêu đề 2";
    if (editor.isActive("heading", { level: 3 })) return "Tiêu đề 3";

    return "Đoạn văn";
  };

  const handleLinkSubmit = ({ url, openInNewTab }: linkOption) => {
    if (!editor) return;
    
    const { commands } = editor;
    if (openInNewTab) commands.setLink({ href: url, target: "_blank" });
    else commands.setLink({ href: url });
  };

  const handleEmbedYoutube = (url: string) => {
    if (!editor) return;
    
    editor.chain().focus().setYoutubeVideo({ src: url }).run();
  };

  const handleEmbedFacebookReels = (url: string) => {
    if (!editor) return;

    let normalizedUrl = url.trim();

    if (!normalizedUrl.includes("facebook.com")) {
      alert("Vui lòng nhập URL Facebook Reels hợp lệ");
      return;
    }

    const encodedUrl = encodeURIComponent(normalizedUrl);
    const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&show_text=false&width=500&height=281`;

    const iframeHtml = `<div class="facebook-reel-embed" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin: 20px 0; background: #000;">
  <iframe 
    src="${embedUrl}" 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
    scrolling="no" 
    allowtransparency="true" 
    allow="encrypted-media; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen="true"
    loading="lazy">
  </iframe>
</div>`;

    editor.chain().focus().insertContent(iframeHtml).run();
  };

  const handleEmbedImage = (url: string, altText?: string) => {
    if (!editor) return;
    
    editor.chain().focus().setImage({ src: url, alt: altText || "" }).run();
  };

  const handleInsertTable = (rows: number, cols: number, withHeaderRow: boolean) => {
    if (!editor) return;
    
    editor
      .chain()
      .focus()
      .insertTable({ rows, cols, withHeaderRow })
      .run();
  };

  const Head = () => {
    return (
      <div className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
        <span className="text-sm">{getLabel()}</span>
        <AiFillCaretDown size={12} />
      </div>
    );
  };

  // Early return after all hooks
  if (!editor) return null;

  return (
    <div className="flex items-center gap-1 p-4 bg-white dark:bg-gray-800 border-b border-[#105d97]/20 dark:border-gray-700 min-h-[60px]">
      {/* Text Formatting Group */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <DropdownOptions options={options} head={<Head />} />
        
        <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-1" />
        
        <Button
          active={editor.isActive("bold")}
          onClick={() => getFocusedEditor(editor).toggleBold().run()}
        >
          <BsTypeBold />
        </Button>

        <Button
          active={editor.isActive("italic")}
          onClick={() => getFocusedEditor(editor).toggleItalic().run()}
        >
          <BsTypeItalic />
        </Button>

        <Button
          active={editor.isActive("underline")}
          onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
        >
          <BsTypeUnderline />
        </Button>

        <Button
          active={editor.isActive("strike")}
          onClick={() => getFocusedEditor(editor).toggleStrike().run()}
        >
          <BsTypeStrikethrough />
        </Button>

        {/* Color Picker */}
        <div className="flex items-center gap-1 ml-1">
          <input
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
            title="Chọn màu chữ"
            className="w-6 h-6 p-0 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* Alignment Group */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-1" />
        
        <Button
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <MdFormatAlignLeft />
        </Button>

        <Button
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <MdFormatAlignCenter />
        </Button>

        <Button
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <MdFormatAlignRight />
        </Button>
      </div>

      {/* Content Formatting Group */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-1" />
        
        <Button
          active={editor.isActive("blockquote")}
          onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
        >
          <RiDoubleQuotesL />
        </Button>

        <Button
          active={editor.isActive("code")}
          onClick={() => getFocusedEditor(editor).toggleCode().run()}
        >
          <BsCode />
        </Button>

        <Button
          active={editor.isActive("codeBlock")}
          onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
        >
          <BsBraces />
        </Button>

        <InsertLink onSubmit={handleLinkSubmit} onToggle={onDropdownToggle} />

        <Button
          active={editor.isActive("orderedList")}
          onClick={() => getFocusedEditor(editor).toggleOrderedList().run()}
        >
          <BsListOl />
        </Button>

        <Button
          active={editor.isActive("bulletList")}
          onClick={() => getFocusedEditor(editor).toggleBulletList().run()}
        >
          <BsListUl />
        </Button>
      </div>

      {/* Media & Tools Group */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-1" />
        
        <EmbedYoutube onSubmit={handleEmbedYoutube} onToggle={onDropdownToggle} />
        <EmbedFacebookReels onSubmit={handleEmbedFacebookReels} onToggle={onDropdownToggle} />

        <EmbedImage onSubmit={handleEmbedImage} onToggle={onDropdownToggle} />

        <Button onClick={onOpenImageClick}>
          <BsImageFill />
        </Button>
      </div>

      {/* Table Tools Group */}
      <div className="flex items-center gap-1 flex-shrink-0">
        <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-600 mx-1" />

        {/* Insert table với form chọn số hàng/cột */}
        <InsertTable onSubmit={handleInsertTable} onToggle={onDropdownToggle} />

        {/* Thao tác hàng */}
        <Button
          onClick={() => editor.chain().focus().addRowAfter().run()}
        >
          <MdTableRows title="Thêm hàng bên dưới" />
        </Button>

        {/* Thao tác cột */}
        <Button
          onClick={() => editor.chain().focus().addColumnAfter().run()}
        >
          <MdTableView title="Thêm cột bên phải" />
        </Button>

        {/* Xóa bảng */}
        <Button
          onClick={() => editor.chain().focus().deleteTable().run()}
        >
          <MdDeleteOutline title="Xóa bảng" />
        </Button>
      </div>
    </div>
  );
};

export default ToolBar;
