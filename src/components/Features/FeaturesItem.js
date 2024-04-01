const FeaturesItem = ({ img, name, text }) => {
  return <>
    <img
      className="w-[38px] flex-shrink-0 overflow-hidden"
      alt=""
      src={img}
    />
    <div>
      <h3 className="m-0 text-sm font-normal">
        {name}
      </h3>
      <p className="m-0 text-sm leading-[20px] text-darkslategray">
        {text}
      </p>
    </div>
  </>
};

export default FeaturesItem;