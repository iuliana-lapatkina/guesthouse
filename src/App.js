import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [backtop, setBacktop] = useState(false)

  const changeBacktop = (bool) => {
    setBacktop(bool);
  }

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout changeBack={changeBacktop} backtop={backtop} />}>
        <Route path="/" element={<Homepage />} />
      </Route>
    </Routes>
  );
}
export default App;
