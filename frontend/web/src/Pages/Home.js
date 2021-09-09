import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Home = () => {

	const historia = useHistory();
	const [ loading, setLoading ] = React.useState(true);
	const [ products, setProducts ] = React.useState([]);

	useEffect(() => {
		(async () => {
	const res = await axios.get("https://api.trading-op.com/products"); 
		setProducts(res.data);
	        setLoading(false);
				      })();
	}, []);



	return (
		<div className="espacio">

		 <div className="row">

		  <div className="col text-center espacio">

		   <h1 className="text-danger fw-bold"
		   style= {{
			   fontSize: "90px"
		   }}>
		    Trading OP
		   </h1>

		   <h4 className="text-white fw-bold"
		    style={{
			    fontSize: "75px"
		    }}
		    >
		    WTS & WTB
		   </h4>

		   <h1 className="text-muted fw-bold">
		    Buy and sell safely and quickly with Trading OP
		   </h1>
		  
		   <div className="row espacio">

		    <div className="col">
		     <button className="btn btn-outline-danger fw-bold"
		      onClick={() => historia.push(`/dash/signup`)}>
		      Sing Up
		     </button>
		    </div>
		    <div className="col">
		     <button className="btn btn-outline-light fw-bold text-white"
		      onClick={ () => historia.push(`/dash/login`)}>
		      Login
		     </button>
		    </div>

		   </div>
		 </div>

		  <div className="col text-center">
		  <img src ="https://media.discordapp.net/attachments/884243974787854338/884853188447064074/unknown.png"
		  style={{
			  width: "450px"
		  }}
		  className="rounded"
		/>
		   </div> 

	
		   <div className="espacio container-fluid">
		   { loading ? ( 
			   <div className="text-center">
			   <div className="spinner-border text-danger m-5" role="status">
			     <span className="visually-hidden">Loading...</span>
			   </div>
			   </div>
		   ) : ( 

		    <table className="table table-sm table-borderless">
                     <thead className="negro text-muted fw-bold text-center">
		       <tr>
		        <th className="text-white">Selling</th>
		        <th className="text-danger">Stats</th>
		        <th className="text-white">User</th>
		       </tr>
		      </thead>
		      <tbody>
		       <tr>
		        <th className="text-center espacio">
		         <div className="row espacio">
		          <div className="col">
		          <p className="text-white">
		           Selling Early
		          </p>
		          </div>
		          <div className="col">
		          <p className="text-danger">
		          Price 100BTC
		           </p>
		          </div>
		         </div>
		        </th>
		        <th className="text-center text-muted fw-bold">
		          <div className="espacio">
		         <button type="button"
		          onClick={() => historia.push(`/x/product/ID`)}
		          className="btn btn-outline-danger position-relative">
		  View
		  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
		    96
		    <span className="visually-hidden">Views</span>
		  </span>
		</button>
		          </div>
		        </th>
		        <th className="text-center text-muted">
		         <div className="espacio">
		          <p>josh</p>
		         </div>
		         </th>
		       </tr>
		      </tbody>
		    </table>
		   )}
		   </div>
		

		 </div>
		</div>
	)
}
export default Home;
