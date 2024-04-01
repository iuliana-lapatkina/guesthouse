import { Link } from "react-router-dom";
import Button from "../../generic/Button";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="flex px-[12px] xl:px-0 py-[12px] w-full text-left text-mini text-white font-montserrat bg-dimgray-200">

      <div className="flex flex-col sm:flex-row justify-between items-center gap-[14px] sm:gap-0 my-0 mx-auto w-[1280px]">
        <Link to="/">
          <img
            className="w-[128px] max-w-full overflow-hidden h-[45px]"
            alt=""
            src="/image.svg"
          />
        </Link>
        <ul className="flex gap-[16px] p-0 m-0 list-none text-sm">
          <Navigation count={3} />
        </ul>
        <Button text="Book now" textColor={"dimgray-200"} bgColor={"white"} />
      </div>
    </header>
  );
};

export default Header;
