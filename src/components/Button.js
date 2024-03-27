import Frame3 from "./Frame3";

const Button = () => {
  return (
    <div className="absolute w-full top-[2378px] right-[0%] left-[0%] h-[530px] text-center text-13xl text-dimgray-200 font-montserrat">
      <div className="absolute w-full top-[0px] right-[0%] left-[0%] bg-floralwhite h-[530px]" />
      <div className="absolute w-[83.33%] top-[100px] right-[8.33%] left-[8.33%] h-[330px]">
        <div className="absolute w-6/12 top-[0px] right-[25%] left-[25%] h-[158px]">
          <div className="absolute w-[7%] top-[0px] right-[46.5%] left-[46.5%] bg-peru h-2" />
          <div className="absolute top-[38px] left-[calc(50%_-_197px)] leading-[36px] inline-block w-[395px]">
            Sleeping arrangements.
          </div>
          <div className="absolute w-full top-[86px] right-[0%] left-[0%] h-[72px] text-base">
            <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[72px]" />
            <div className="absolute top-[2px] left-[calc(50%_-_277px)] leading-[24px] inline-block w-[554px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
            </div>
          </div>
        </div>
        <div className="absolute w-[97.33%] top-[190px] right-[1.33%] left-[1.33%] h-[140px] text-base">
          <Frame3
            iMAGE="/image-3.svg"
            beds="Beds"
            theCabinIsEquippedWith12B="The cabin is equipped with 12 beds, 4 of which are in bunk. The rent includes linens for all beds."
          />
          <Frame3
            iMAGE="/image-4.svg"
            beds="Bedrooms"
            theCabinIsEquippedWith12B="Spread out over two floors, the cabin offers 4 bedrooms. Ranging from 2 to 4 beds per room."
            propPadding="unset"
            propWidth="87px"
            propMinWidth="unset"
          />
          <Frame3
            iMAGE="/image-5.svg"
            beds="Bathrooms"
            theCabinIsEquippedWith12B="The cabin has three bathrooms, all equipped with showers and one with a bath tub,"
            propPadding="unset"
            propWidth="93px"
            propMinWidth="unset"
          />
        </div>
      </div>
    </div>
  );
};

export default Button;
