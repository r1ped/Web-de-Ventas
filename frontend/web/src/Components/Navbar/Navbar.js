import React from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
	const historia = useHistory();
	return (
		<div>
		<nav className="navbar navbar-expand-lg navbar-light text-white bg-light">
		  <div className="container-fluid">
		    <a className="navbar-brand" 
		onClick={
			() => historia.push(`/`)
		}>
		
		TradeOp</a>
		    
		    <button className="navbar-toggler bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		        <li className="nav-item">
		          <a className="nav-link active text-white" aria-current="page" 
		onClick={() => historia.push(`/`)}
		>Home</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link text-white" 
		onClick={() => historia.push(`/about`)}
		>About</a>
		        </li>
		        <li className="nav-item dropdown">
		          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
		            Info
		          </a>
		          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
		            <li><a className="dropdown-item" 
		onClick={
			() => historia.push(`/etc/about`)
		}
		>About</a></li>
		            <li><a className="dropdown-item"
		onClick={
			() => historia.push(`/tos`)
		}
		>ToS</a></li>
		            <li><hr className="dropdown-divider"></hr></li>
		            <li><a className="dropdown-item"
		onClick={
			() => historia.push(`/tradeop`)
		}
		>TradeOp</a></li>
		          </ul>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">TradeOp Version 0.1</a>
		        </li>
		      </ul>
		      <form className="d-flex">
		        <input className="form-control me-2" type="search" placeholder="Em@il" aria-label="Search" />
		        <button className="btn btn-outline-success" type="submit">Signup</button>
		      </form>
		    </div>
		  </div>
		</nav>
		</div>
	)
}

export default Navbar;
