const Button = ({ text, textColor, bgColor }) => {
  return (
    <button className={`cursor-pointer w-[117px] h-[42px] text-base text-${textColor} bg-${bgColor} rounded-md border-[4px] border-solid border-dimgray-200`}>
      {text}
    </button>
  );
};

export default Button;