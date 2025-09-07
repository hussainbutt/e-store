import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full items-center flex-wrap gap-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Sony_logo.svg/320px-Sony_logo.svg.png"
          alt="Sony Logo"
          width={150}
          height={60}
          className="w-[150px] h-[60px] object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Dell_Logo.svg/320px-Dell_Logo.svg.png"
          alt="Dell Logo"
          width={150}
          height={60}
          className="w-[150px] h-[60px] object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/LG_logo_%282015%29.svg/320px-LG_logo_%282015%29.svg.png"
          alt="LG Logo"
          width={150}
          height={60}
          className="w-[150px] h-[60px] object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          width={150}
          height={60}
          className="w-[150px] h-[60px] object-contain"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
          alt="Samsung Logo"
          width={150}
          height={60}
          className="w-[150px] h-[60px] object-contain"
        />
      </div>
    </div>
  );
};

export default Sponsored;
