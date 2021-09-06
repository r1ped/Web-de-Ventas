import React from 'react';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Login = () => {
	const historia = useHistory();
	const recaptchaRef = React.createRef(null);
	const [ email, setEmail ] = React.useState("");
	const [ password, setPassword ] = React.useState("");

	const handleChangeTitulo = ({ target: { value } }) => {
				    setEmail(value);
				  };
		const handleChangeDescripcion = ({ target: { value } }) => {
					setPassword(value);
				};

		const handleSubmit = (event) => {
			event.preventDefault();
			recaptchaRef.current.execute();
				};
	const onReCAPTCHAChange = (captchaCode) => {
		if(!captchaCode) {
			recaptchaRef.current.execute(); 
		} else {

		}
	}

	return (
		<div className="container espacio text-center">
		<center>
		 <form onSubmit={handleSubmit} className="position-relative">
		  <div className="mb-3 w-50">
		    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
		    <input type="email" className="form-control negro text-white" id="email" aria-describedby="emailHelp" required/>
		    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		  </div>
		  <div className="mb-3 w-50">
		    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
		    <input type="password" className="form-control negro text-white" id="password" required/>
		  </div>
		 
		  <button className="btn btn-primary">Submit</button>
		<ReCAPTCHA
					    ref={recaptchaRef}
				            theme="dark"
					    size="invisible"
					    sitekey="6Ld23UkcAAAAAJaCFwcD6u1i5IpSTx3l4Tx7QEXv"
				      onChange={onReCAPTCHAChange}
					  />
		</form>
		<div className="espacio text-center fw-bold">
		<a 
		className="text-white"
		onClick={
			() => historia.push(`/signup`)
		}>Signup</a>
		</div>
		</center>
		</div>
	)
}

export default Login;
