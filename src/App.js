import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
  useNavigate,
} from "react-router-dom";
import { createContext, useContext } from "react";

const dataContext = createContext();
const Home = () => {
  const navigate = useNavigate();
  const dataToSend = {
    name: "Deen Shah Scion",
    data: new Date().toLocaleTimeString(),
  };
  const handleAbout = () => {
    navigate("/about");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleAbout}>Navigate to About</button>
      <dataContext.Provider value={"sai"}>
        <Link to={"/home/single/123456"}>Params</Link>
      </dataContext.Provider>
      <Routes>
        <Route path="/single/:id" element={<HomeInside />}></Route>
      </Routes>
    </>
  );
};
const About = () => {
  return <h1>About</h1>;
};
const HomeInside = () => {
  let data = useContext(dataContext);
  let { id } = useParams();
  console.log(data, "data");
  return (
    <>
      <Link to={"/home"}> Home</Link>

      <h1>Params value is {id}</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  );
};
const LogIN = () => {
  return <h1>Log In</h1>;
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="/log" element={<LogIN />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
