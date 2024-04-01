const Headline = () => {
  return (
    <section className="flex items-center w-full h-[500px] sm:h-[650px] xl:h-[800px] text-center text-sm text-white font-montserrat bg-[url('/public/image1@2x.png')] bg-cover">
      <div className="px-[12px] xl:px-0 mx-auto my-0 align-middle max-w-[1280px] ">
        <h1 className="opacity-0 w-0 h-0">Guest House</h1>
        <img
          className="mb-5 h-[50px] lg:h-[90px] overflow-hidden"
          alt=""
          src="/image-1.svg"
        />
        <div className="mb-5 text-13xl lg:text-29xl lg:leading-[52.8px] inline-block">
          Experience the perfect combination of modern housing & natural scenery.
        </div>
        <div className="tracking-[2px] leading-[20px] uppercase inline-block">
          Located in Lofoten, norway
        </div>
      </div>
    </section>
  );
};

export default Headline;
