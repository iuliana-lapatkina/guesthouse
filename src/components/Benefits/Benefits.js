import { v4 as uuidv4 } from 'uuid';
import BenefitsItem from "./BenefitsItem";
import BenefitsList from "./BenefitsList";
import Line from '../../generic/Line';

const Benefits = () => {

  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] w-full text-13xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] px-[12px] xl:px-0 mx-auto my-0 list-none max-w-[1280px] leading-[36px]">
        <div className="flex flex-col gap-[32px]">
          <Line />
          <div>
            <h2 className="mt-0 mx-0 mb-[12px] text-13xl leading-[36px] font-normal">Come together.</h2>
            <p className="m-0 w-full leading-[24px] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus.
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-[32px] m-0 p-0 list-none">
          {BenefitsList.map(({img, text, propFlex = null, propWidth = null }) => {
            return (
              <li key={uuidv4()}>
                <BenefitsItem
                  img={img}
                  text={text}
                  propFlex={propFlex}
                  propWidth={propWidth}
                />
              </li>)
            })
          }
        </ul>
      </div>
    </section>
    
  );
}

export default Benefits;