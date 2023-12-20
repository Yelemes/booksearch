import React from "react";
import "./About.css";
import aboutImg from "../../images/books.jpg";
import user1 from "../../images/user-1.jpg";
import user2 from "../../images/user-2.jpg";

const About = () =>{
    return(
        <section className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                </div>

                <div className="about-content grid">
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div className="about-text">
                        <h2 className="about-title fs-26 ls-1">About BookSearch</h2>
                        <p className="fs-17">BookSearch is a web application that helps users find books by part of the book title. This project was created by Yelemes Arystan. The project has the functionality of searching a book by its title, displaying the list of books, displaying the book description.</p>
                    </div>
                    
                    <div className="user-review">
                        <div className="user-img">
                            <img src={user1} alt="user-1" />
                        </div>
                        <div className="user-info">
                            <h3 className="user-name fs-20">Marry Jane</h3>
                            <p className="user-rating fs-18">Rating: 4/5</p>
                            <p className="user-comment text-italic">"BookSearch is amazing! It helped me discover new books easily. I appreciate the simplicity and effectiveness of the search functionality."</p>
                        </div>
                    </div>

                    <div className="user-review">
                        <div className="user-img">
                            <img src={user2} alt="user-2" />
                        </div>
                        <div className="user-info">
                            <h3 className="user-name fs-20">Nick</h3>
                            <p className="user-rating fs-18">Rating: 5/5</p>
                            <p className="user-comment text-italic">"BookSearch is a great tool for book enthusiasts. The interface is user-friendly, and the search results are accurate. I highly recommend it!" </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About