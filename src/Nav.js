import React,{useState,useEffect} from 'react';
import './css/nav.css'


const Nav =()=>{
	const [show, handleShow] = useState(false);
	const transitionNavbar=()=>{
		if(window.scrollY>100){
			handleShow(true);
		}
		else
		{
			handleShow(false);
		}

	}

	useEffect(()=>{
		window.addEventListener('scroll', transitionNavbar)

		return()=>{
			window.removeEventListener('scroll', transitionNavbar)
		}

	},[])


	return(
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__content">
				<img src="/images/Netflix_logo.svg.png" alt="Netflix" className="login__logo"/>
				<img src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png" className="avtar_netflix" alt=""/>
			</div>
		</div>
	)
}

export default Nav