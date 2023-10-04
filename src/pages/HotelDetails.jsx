import React, { useEffect, useState } from 'react'
import data from '../data'
import { useParams } from 'react-router-dom'
import Card from '../components/Card'


const HotelDetails = () => {

	const param = useParams()
	const [singleHotelData, setSingleHotelData] = useState(null)

	const filterHotelData = (id) => {
		const newData = data?.filter(item => item.id === id)
		setSingleHotelData(...newData);
	}

	useEffect(()=> {
		filterHotelData(param?.id)
		window.scrollTo(0, 0)
	}, [param?.id])

	if(singleHotelData) {	
		return (
			<div className='hotel-details'>
				<h2>hotel detail</h2>
				<Card info={singleHotelData} />
			</div>
		)
	}
}

export default HotelDetails