import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
	return (
		<div className='error-container'>
			<p>404! Page not found</p>
			<Link to={'/'}>Go back home</Link>
		</div>
	)
}

export default Error