import React from "react";
import { BsHeart, BsArrowsMove } from "react-icons/bs";
import {
    MdOutlineLocationOn,
    MdOutlineBedroomParent,
    MdOutlineBed,
    MdOutlineBathtub,
} from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const Card = ({ info }) => {
    const {
        image,
        id,
        name,
        address,
        city,
        price,
        bed_count,
        rooms,
        bathroom,
        sqft,
        isPopular,
    } = info;

    const param = useParams();

    return (
        <div className="card" id={id}>
            <div className="inner-section">
                <div className="img-container">
                    <img src={image} alt={name} />
                    <div className="button-container">
                        <button>for sale</button>
                        <button>
                            <BsHeart />
                        </button>
                    </div>
                    {isPopular && <span className="tag">popular</span>}
                </div>
                <div className="info-container">
                    <span
                        className="property-number"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            fontSize: "16px",
                        }}
                    >
                        <MdOutlineLocationOn /> {name}
                    </span>
                    <span className="property-address">{address}, {city} </span>
                    <div className="property-features">
                        <div className="features">
                            <MdOutlineBedroomParent />
                            <span>{rooms} rooms</span>
                        </div>
                        <div className="features">
                            <MdOutlineBed />
                            <span>{bed_count} bed</span>
                        </div>
                        <div className="features">
                            <MdOutlineBathtub />
                            <span>{bathroom} bath</span>
                        </div>
                        <div className="features">
                            <BsArrowsMove />
                            <span>{sqft} sft</span>
                        </div>
                    </div>
                    <div className="property-price">
                        <div className="price">
                            <span>
                                {" "}
                                <FaIndianRupeeSign /> {price}
                            </span>{" "}
                            /month
                        </div>
                        {param?.id ? (
                            ""
                        ) : (
                            <Link to={`/property/${info?.id}`}>read more</Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
