import Line from "../../generic/Line";
import RoomContentItem from "./RoomContentItem";
import RoomContentList from "./RoomContentList";

const RoomContent = () => {
  return (
    <div className="py-[60px] sm:py-[80px] md:py-[100px] w-full text-center text-13xl text-dimgray-200 font-montserrat bg-floralwhite">
      <div className="flex flex-col	gap-[32px] items-center px-[12px] xl:px-0 my-0 mx-auto max-w-[1200px]">
        <Line/>
        <div className="w-[100%] sm:w-[75%] lg:w-[50%]">
          <h2 className="mt-0 mx-0 mb-[14px] text-13xl leading-[36px] font-normal">
            Sleeping arrangements.
          </h2>
          <p className="m-0 w-full leading-[24px] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
            quis consectetur.
          </p>
        </div>
        <ul className="flex content-center gap-[20px] lg:gap-[64px] p-0 text-base list-none">
          {RoomContentList.map(item => {
            return (
              <li key={item.name} className="flex-1">
                <RoomContentItem
                  iMAGE={item.iMAGE}
                  beds={item.name}
                  theCabinIsEquippedWith12B={item.theCabinIsEquippedWith12B}
                  propPadding={item.propPadding}
                  propWidth={item.propWidth}
                  propMinWidth={item.propMinWidth}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default RoomContent;
