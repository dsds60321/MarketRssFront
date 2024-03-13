import Header from "../components/Layout/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Layout/Footer.jsx";

export default function Layout() {
  return(
    <>
      <Header/>
      <div className="contents">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}