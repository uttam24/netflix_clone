import React,{useState} from 'react';
import SignUp from './SignUp';
import './css/login.css';

const Login =()=>{
	const[signIn, SetSignIn] = useState(false);
	const showSignIn =(e)=>{
		e.preventDefault();
		SetSignIn(true)
	}

	return(
		<div className="login">
			<div className="login__header">
				<img src="/images/Netflix_logo.svg.png" alt="Netflix" className="login__logo"/>

				<button className="login__button">
					Sign In
				</button>
			</div>
			<div className="login__body">
			{signIn ? <SignUp/> : <><h1>Unlimited movies, TV shows and more.</h1>
				<h2>Watch anywhere. Cancel anytime.</h2>
				<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
				
				<form className="login__form" onSubmit={showSignIn}>
					<input type="text" placeholder="Email Address"/>
					<button>Get Started</button>
				</form></>}
				
			</div>
			<div className="login__gradient"></div>
		</div>
	)
}

export default Login