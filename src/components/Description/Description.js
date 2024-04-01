import Button from "../../generic/Button";
import Line from "../../generic/Line";

const Description = () => {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[100px] w-full text-left text-sm text-darkslategray font-montserrat bg-floralwhite">
      <h2 className="opacity-0 m-0 p-0 w-0 h-0">Description</h2>
      <div className="flex flex-col	items-center gap-[33px] px-[12px] xl:px-0 mx-auto my-0 max-w-[800px]">
        <Line />
        <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[40px]">
          <div className="sm:flex-1">
            <p className="text-smi leading-[20px]">
                The Guest House is the perfect weekend get-away housing. Located in
                the Norwegian archipelago, Lofoten, it's a great escape from the
                hustle and bustle of the city. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nullam scelerisque aliquam odio et
                faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque
                ex, condimentum dapibus congue et, vulputate ut ligula.
              </p>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:static sm:flex-1">
            <p className="mb-[40px] text-smi leading-[20px]">
              Below you'll find information about the accommodation and what's
              included in the price. Don't hesitate to reach out to us vi the
              contact page if you have any questions around your stay.
            </p>
            <Button text="Book now" textColor={"white"} bgColor={"dimgray-200"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
