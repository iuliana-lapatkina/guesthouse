const ImageBlock = ({ imgSrc }) => {
  return (
    <div className={`w-full h-[400px] lg:h-[600px] overflow-hidden text-darkslategray`}>
      <img
        className={`w-[110%] max-w-full overflow-hidden h-[400px] lg:h-[600px] object-cover`}
        alt=""
        src={imgSrc}
      />
    </div>
  );
}

export default ImageBlock;