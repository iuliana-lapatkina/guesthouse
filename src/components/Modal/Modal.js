import React from "react";
import Button from "../../generic/Button";

const Modal = ({ closeModal }) => {
    return (
      <div onClick={closeModal} className="z-20 cursor-pointer absolute flex flex-col items-center gap-[10px] p-[26px] w-[330px] bg-white text-dimgray-200 rounded-lg box-border border-[2px] border-solid border-dimgray-300">
          <h2 className="m-0 text-center font-normal tracking-[2px] text-sm leading-[20px] uppercase">Your email has been sent! </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi. Dolorem est
            esse iste perferendis.
          </p>
        <Button text={"Close"} textColor={"white"} bgColor={"dimgray-200"} onClick={closeModal} />
      </div>
    );
};

export default Modal;


// top-[50%] right-[50%] transform translate-x-[-50%]