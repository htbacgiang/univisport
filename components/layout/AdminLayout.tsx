import { FC, ReactNode, useState } from "react";
import AppHead from "../common/AppHead";
import Slidebar from '../backend/Slidebar';
interface Props {
  children: ReactNode;
  title?: string;
}


const AdminLayout: FC<Props> = ({ title, children }): JSX.Element => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <AppHead title={title} />
      <div className="flex">
        <Slidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className={`lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen`}>
        {/* Correctly pass setShowSidebar to Navbar */}
        <main className="bg-white dark:bg-slate-900 min-h-screen">
          {children}
        </main>
      </div>
        {/* create button */}
        {/* <Link href="/admin/posts/create" legacyBehavior>
          <a className="bg-secondary-dark dark:bg-secondary-light text-primary dark:text-primary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full hover:scale-90 shadow-sm transition">
            <AiOutlineFileAdd size={24} />
          </a>
        </Link> */}
      </div>
    </>
  );
};

export default AdminLayout;
