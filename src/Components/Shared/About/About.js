import React from "react";
import a_Img from "../../../images/about.jpg";
import './About.css'
const about = () => {
	return (
		<div>
			<div className="about-container">
				<h1>
					{" "}
					<span>About</span> us{" "}
				</h1>
				<div className="abouts">
					<div className="about">
						<img className="a_img" src={a_Img} alt="" />
					</div>
					<div className="about">
						<div>
                                   <h1>We believe in equity<br />We Take Care of your Health</h1>
                                   <p></p>
                                   <button className="btn btn-sm btn-danger text-white " >
                                        learn more <i class="fas fa-angle-right"> </i>
                                   </button>
                              </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default about;
