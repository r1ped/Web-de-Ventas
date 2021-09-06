import React from 'react';
import {useHistory} from 'react-router-dom';

const Home = () => {
	const historia = useHistory();
	return ( <>
		<div className="espacio">
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
		    <div className="carousel-indicators">
		      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
		      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
		      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
		    </div>
		    <div className="carousel-inner">
		      <div className="carousel-item active" 
		>
		        <div className="carousel-caption">
		          <h5>TradeOP</h5>
		          <p>Buy or sell safely and quickly</p>
		          <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
		  <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
		</svg></p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <div className="carousel-caption">
		          <h5>Middleman Service</h5>
		          <p>Secure your exchanges with our administrators who are willing to do their job</p>
		<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16">
		  <path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
		  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
		</svg></p>
		        </div>
		      </div>
		      <div className="carousel-item">
		        <div className="carousel-caption">
		          <h5>Warranty?</h5>
		          <p>¡Yes! Our terms and conditions are in accordance with the rules of customer returns</p>
		<p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
		  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
		  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
		</svg></p>
		        </div>
		      </div>
		    </div>
		    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
		      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		      <span className="visually-hidden">Previous</span>
		    </button>
		    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
		      <span className="carousel-control-next-icon" aria-hidden="true"></span>
		      <span className="visually-hidden">Next</span>
		    </button>
		  </div>
		</div>
	       <div className="espacio text-center container px-4">
		<div className="row gx-5">
		 <div className="col">
		  <button className="btn btn-outline-secondary text-white fw-bold"
		    onClick={
			() => historia.push(`/login`)
		     }>!Go! <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
		  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
		</svg></button>
		  </div>
		 </div>
		</div>
		</>
	)
}
export default Home;
