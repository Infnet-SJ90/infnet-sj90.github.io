import React, { Component } from 'react';
import './styles/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Home extends Component {
	render() {
		return (<div className="Home">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container">
			<a className="navbar-brand" href="#">Start Bootstrap</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
			<ul className="navbar-nav ml-auto">
			<li className="nav-item active">
			<a className="nav-link" href="#">Home
			<span className="sr-only">(current)</span>
			</a>
			</li>
			<li className="nav-item">
			<a className="nav-link" href="#">About</a>
			</li>
			<li className="nav-item">
			<a className="nav-link" href="#">Services</a>
			</li>
			<li className="nav-item">
			<a className="nav-link" href="#">Contact</a>
			</li>
			</ul>
			</div>
			</div>
			</nav>
			<header>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
			<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
			<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div className="carousel-inner" role="listbox">
			<div className="carousel-item active" style="background-image: url('http://placehold.it/1900x1080')">
			<div className="carousel-caption d-none d-md-block">
			<h3>First Slide</h3>
			<p>This is a description for the first slide.</p>
			</div>
			</div>
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
			<span className="carousel-control-prev-icon" aria-hidden="true"></span>
			<span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
			<span className="carousel-control-next-icon" aria-hidden="true"></span>
			<span className="sr-only">Next</span>
			</a>
			</div>
			</header>
			<section className="py-5">
			<div className="container">
			<h1>Full Slider by Start Bootstrap</h1>
			<p>The background images for the slider are set directly in the HTML using inline CSS. The rest of the styles for this template are contained within the
			<code>full-slider.css</code>
			file.</p>
			</div>
			</section>
			<footer className="py-5 bg-dark">
			<div className="container">
			<p className="m-0 text-center text-white">Copyright &copy; Your Website 2018</p>
			</div>
			</footer>
			</div>
			);
	}
}

export default Home;