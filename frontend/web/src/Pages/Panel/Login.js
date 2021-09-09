import React from 'react';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Login = () => {
	const historia = useHistory();
	const recaptchaRef = React.createRef(null);
	const [ email, setEmail ] = React.useState("");
	const [ password, setPassword ] = React.useState("");

	const handleChangeEmail = ({ target: { value } }) => {
		setEmail(value);
	};
	const handleChangePassword = ({ target: { value } }) => {
		setPassword(value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		recaptchaRef.current.execute();
	};
	const onReCAPTCHAChange = (captchaCode) => {
		if(!captchaCode) {
			recaptchaRef.current.reset(); 
		} else {
		axios.get("https://api.trading-op.com/login", {
			email: email,
			password: password,
			rcp: captchaCode
		}).then( res => {
			setEmail("");
			setPassword("");
			recaptchaRef.current.reset();
		}).catch( (error) => {
			console.log(error);
		})
		}
	}

	return (
		<div className="container espacio text-center">
		<center>
		 <form onSubmit={handleSubmit} className="position-relative">
		  <div className="mb-3 w-50">
		    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
		    <input type="email" 
		onChange={handleChangeEmail} value={email}
		className="form-control negro text-white" id="email" aria-describedby="emailHelp" required/>
		    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		  </div>
		  <div className="mb-3 w-50">
		    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
		    <input type="password" 
		onChange={handleChangePassword} value={password}
		className="form-control negro text-white" id="password" required/>
		  </div>
		 
		  
		<ReCAPTCHA
					    ref={recaptchaRef}
				            theme="dark"
					    size="invisible"
					    sitekey="6Ld9d1AcAAAAABrahlh1grOYKWH5KQr20or5KAWe"
				      onChange={onReCAPTCHAChange}
					  />
		<button className="btn btn-outline-danger fw-bold">
		Submit
		</button>
		</form>
		<div className="espacio text-center fw-bold">
		<a 
		className="text-white"
		onClick={
			() => historia.push(`/dash/signup`)
		}>Signup</a>
		</div>
		</center>
		</div>
	)
}

export default Login;
