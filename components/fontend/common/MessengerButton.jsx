// components/MessengerButton.jsx

import FbMess from '../../../public/fbmess.png';
import Image from "next/image";
import styles from "../common/HelpComponent.module.css";

const MessengerButton = () => {
  const openMessenger = () => {
    window.open('https://m.me/147995528391633', '_blank');
  };

  return (
    <div className={styles.helpContainer}>
      <div className={styles.phoneRing}>
        <div className={styles.phoneRingCircle}></div>
        <div className={styles.phoneRingCircleFill}>
          <button onClick={openMessenger}>
            <Image src={FbMess} alt="face-book icon" width={60} height={60} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessengerButton;
