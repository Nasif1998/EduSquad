import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <section className="hero d-flex flex-column justify-content-center">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1>New World For Education!</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis omnis, mollitia nisi suscipit dolorum praesentium nam magni similique ducimus.
						</p>
						<Link to="/login" href="index.html" className="btn1">All Courses</Link>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Banner;