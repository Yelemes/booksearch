import React from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.css";
import HIMG from "../../images/books.jpg";


const Header = () =>{
    return(
        <div className="holder">
            <header className="header">
                <Navbar />
                <div className="header-content flex flex-c flex-center text-white">
                    <br />
                    <Search />
                </div>
                <div className="header-img">
                    <img src={HIMG} alt="" />
                </div>
            </header>
        </div>
    )
}

export default Header