import Line from "../../generic/Line";
import FeaturesItem from "./FeaturesItem";
import FeaturesList from "./FeaturesList";

const Features = () => {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] w-full text-left text-13xl text-dimgray-200 font-montserrat bg-white">
      <div className="flex flex-col items-left gap-[20px] lg:gap-[32px] px-[12px] xl:px-0 my-0 mx-auto max-w-[1200px]">
        <Line/>
        <div className="w-[100%] sm:w-[75%] lg:w-[50%]">
          <h2 className="mt-0 mx-0 mb-[12px] text-13xl leading-[36px] font-normal">
            The perfect escape.
          </h2>
          <p className="m-0 w-full leading-[24px] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] sm:gap-[32px] p-0 list-none text-sm">
          {FeaturesList.map(item => {
            return <li key={item.name} className="flex gap-[16px]">
              <FeaturesItem img={item.img} name={item.name} text={item.text}/>
            </li>
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;

