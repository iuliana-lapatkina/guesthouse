import Headline from "../components/Headline";
import Description from "../components/Description";
import ShortDescription from "../components/ShortDescription";
import ImageBlock from "../components/ImageBlock";
import Features from "../components/Features";
import RoomContent from "../components/RoomContent";
import Benefits from "../components/Benefits";
import Reviews from "../components/Reviews";
import Calling from "../components/Calling";

const Homepage = () => {
  return (
    <div className="w-full bg-white overflow-hidden text-left text-sm text-dimgray-200 font-montserrat">
      <Headline />
      <Description />
      <ShortDescription />
      <ImageBlock alt="Kitchen" imgSrc="/image-2@2x.png" />
      <RoomContent />
      <Features />
      <Reviews />
      <ImageBlock alt="Bedroom" imgSrc="/image-14@2x.png" />
      <Benefits />
      <Calling />
    </div>
  );
};

export default Homepage;
