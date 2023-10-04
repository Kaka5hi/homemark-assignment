import React from 'react'

const Footer = () => {
	return (
		<footer>
			<div className="left-side">
				<img src="images/website-logo.svg" alt="logo" />
				<input type="email" placeholder='enter your email'/>
				<button>subscribe to our mail letters</button>
			</div>
			<div className="right-side">
				<p>investing in your futur one home at a time</p>
				<ul>
					<li>home</li>
					<li>services</li>
					<li>property</li>
					<li>contact</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer