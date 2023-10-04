import React from "react";
import { FaLocationDot, FaIndianRupeeSign} from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { RiBuildingFill } from "react-icons/ri";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner-text">
                <div className="top">
                    <span className="heading-text">find the property</span>
                    <span className="heading-text">perfect for you</span>
                </div>
                <div className="bottom">
                    <p>
                        we will help you find the key to your dream home.
                        experience the joy of homeownership and let us make your
                        home buying journey simple
                    </p>
                </div>
                <div className="input-container">
                    <div className="location-info">
                        <FaLocationDot />
                        <input type="text" placeholder="Type Location" />
                    </div>
                    <div className="date-info">
                        <div className="left">
                            <RiBuildingFill />
                            <input type="text" placeholder="Property Type" />
                        </div>
                        <div className="right">
                            <FaIndianRupeeSign />
                            <input type="number" placeholder="Budget" min="1000" max="20,000" />
                        </div>
                    </div>
                    <div className="guest-info">
                        <button className="search-btn">
                            search <BsSearch />
                        </button>
                    </div>
                </div>
            </div>
            <img src="images/banner.jpg" alt="Banner" />
        </div>
    );
};

export default Banner;
