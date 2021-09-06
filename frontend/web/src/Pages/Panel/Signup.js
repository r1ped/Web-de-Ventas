import React from 'react';
import { useHistory } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';

const Login = () => {
	const historia = useHistory();
	return (
		<div className="container espacio text-center">
		<center>
		 <form className="position-relative">
		  <div className="mb-3 w-50">
		    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
		    <input type="email" className="form-control negro text-white" id="email" aria-describedby="emailHelp" required/>
		    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
		  </div>
		  <div className="mb-3 w-50">
		    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
		    <input type="password" className="form-control negro text-white" id="password" required/>
		  </div>
		 
		  <button type="submit" className="btn btn-primary">Submit</button>
		</form>
		<div className="espacio text-center fw-bold">
		<a 
		className="text-white"
		onClick={
			() => historia.push(`/login`)
		}>Login</a>
		</div>
		</center>
		</div>
	)
}

export default Login;
