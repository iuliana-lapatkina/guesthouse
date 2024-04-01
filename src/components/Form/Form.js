import { useState } from "react";
import Modal from "../Modal";

const Form = ({ changeBack, backtop }) => {
  const [showModal, setShowModal] = useState(false)
  const [label, setLabel] = useState('')

  const openModel = (e) => {
    e.preventDefault();
    setShowModal(true);
    setLabel('');
    changeBack(true);
  }

  const close = () => {
    setShowModal(false)
    changeBack(false);
  }

  return (
    <form className="relative flex flex-wrap max-w-[576px]" action="" method="get">
      <label htmlFor="email" className="basis-[100%] block mb-[10px] leading-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse varius enim in eros elementum tristique.
      </label>
      <input
        type="email"
        name="email"
        id="email"
        required
        className="w-[100%] h-[52px] pl-[18px] placeholder-dimgray-200 rounded-lg bg-whitesmoke box-border border-[1px] border-solid border-gainsboro"
        placeholder="Email"
        value={label}
        onChange={(e) => {setLabel(e.target.value)}}
      />
      <button
        onClick={openModel}
        type="submit"
        className="cursor-pointer !absolute right-[10px] bottom-[10px] rounded-[14px] w-[68px] h-[36px] text-base bg-dimgray-200 leading-[20px] text-white"
        >
          Submit
        </button> 
        {showModal && <Modal closeModal={() => close()} backtop={backtop} />}
    </form>
  );
};

export default Form;