import React, { useEffect, useState } from "react";
import data from "../data";
import Banner from "../components/Banner";
import { BsArrowRight } from "react-icons/bs";
import Card from "../components/Card";

const Homepage = () => {
    const [showMore, setShowMore] = useState(false);

	// by default setting new york city 
	const [defaultCity, setDefaultCity] = useState(null)

	// default city list when page first load 
	const [list, setList] = useState([])
	
	// function to pull out unqie city mentioned in data
	const cityLists = (list) => {
		return new Set(list?.map(item => item?.city))
	}

	// function to filter places based on city clicked
	const filterPlaces = (cityName) => {
		setDefaultCity(cityName)
		const cityBasedData = data?.filter(item => item?.city === cityName)
		setList(cityBasedData);
	}

	const singleCites = [...cityLists(data)]

	useEffect(() => {
		setDefaultCity("new york")
		filterPlaces("new york")
	}, [])

    return (
        <div>
            <Banner />
            <div className="featured-section">
                <div className="featured-heading">
                    <h2>featured listed property</h2>
                    <p>
                        real estate can be bought, sold, lessed or rented, and
                        can be a valuable investment oppurtunity. The value of
                        real estate can be...
                    </p>
                </div>

                <div className="featured-category-link">
                    <div className="left-side">
						{
							singleCites?.map((c, index) => {
								return (
									<span key={index} className={defaultCity === c ? "active" : ""} onClick={() => filterPlaces(c)} >{c}</span>
								)
							})
                        
						}
                    </div>
                    <div className="right-side">
                        <button>
                            view all <BsArrowRight />{" "}
                        </button>
                    </div>
                </div>

                <div className="card-container">
                    {!showMore
                        ? list?.slice(0, 6)?.map((item) => {
                              return <Card key={item?.id} info={item} />;
                          })
                        : list?.map((item) => {
                              return <Card key={item?.id} info={item} />;
                          })}
                </div>

				{
					list?.length > 6 &&
					<button
					onClick={() => setShowMore((prev) => !prev)}
					className="show-more-btn"
					>
						{showMore ? "hide" : "show more"}
					</button>
				}
            </div>
        </div>
    );
};

export default Homepage;
