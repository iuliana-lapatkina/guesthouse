import { Link } from "react-router-dom";
import NavigationList from "./NavigationList";


const Navigation = ({ count }) => {
  return (
    <>
      {NavigationList.map((item, i) => {
        if (i < count) {
          return <li key={item.name} className="leading-[20px] inline-block ">
          <Link to={item.path} className="inline-block text-white no-underline">
            {item.name}
          </Link>
        </li>
        }
      })}
    </>
  );
}

export default Navigation;
