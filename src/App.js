import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NavBar from "./Components/Navbar";
import ObjectArray from "./Components/ObjectArray";
import ObjectArrayHw from "./Components/ObjectArrayHw";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
// import UseStateEx from "./Components/UseStateEx";
import AddingJS from "./Components/AddingJS";
import Effects from "./Components/Effects";
import Api from "./Components/Api";
import ProductsApi from "./Components/ProductsApi";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Header heading="Home Page" />
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <NavBar />
              <Header heading="About Page" />
              <About />
            </>
          }
        ></Route>
        <Route
          path="/contact"
          element={
            <>
              <NavBar />
              <Header heading="Contact Page" />
              <Contact />
            </>
          }
        ></Route>
        <Route
          path="/example1"
          element={
            <>
              <NavBar />
              <Header heading="Use State Page" />
              <AddingJS />
            </>
          }
        ></Route>
        <Route
          path="/objects"
          element={
            <>
              <NavBar />
              <Header heading="Object Array" />
              <ObjectArray />
            </>
          }
        ></Route>
        <Route
          path="/objectarrayhw"
          element={
            <>
              <NavBar />
              <Header heading="Object Array Hw" />
              <ObjectArrayHw />
            </>
          }
        ></Route>
        <Route
          path="/effects"
          element={
            <>
              <NavBar />
              <Header heading="Use Effects" />
              <Effects />
            </>
          }
        ></Route>
        <Route
          path="/apihw"
          element={
            <>
              <NavBar />
              <Header heading="API HW" />
              <Api />
            </>
          }
        ></Route>
        <Route
          path="/productsapi"
          element={
            <>
              <NavBar />
              <Header heading="Products API" />
              <ProductsApi />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
    // <>
    //   <NavBar />
    //   <Header />
    //   <About />
    //   <UserDefined heading="This is my sub heading" color="crimson" />
    //   <UserDefined heading="This is my 2nd heading" color="grey" />
    // </>
  );
}

export default App;
