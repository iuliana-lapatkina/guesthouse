import { useMemo } from "react";

const BenefitItem = ({ img, text, propFlex = null, propWidth = null }) => {
  const loremIpsumDolorStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);


  return (
    <div className="flex gap-[16px] text-left text-sm text-darkslategray font-montserrat">
      <img
        className="flex-shrink-0 overflow-hidden h-[36px]"
        alt=""
        src={img}
      />
      <p
        className="m-0 leading-[20px] font-sm"
        style={loremIpsumDolorStyle}
      >
        {text}
      </p>
    </div>
  );
};

export default BenefitItem;
