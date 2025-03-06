import React from 'react';
import offersImg1 from "../../assets/offers/01.png"

const Offers: React.FC = () => {
	return (
		<>
			<div className="offers">
				<div className="container">
					<div className="offers__inner">
						<div className="offers__left">
							<div className="offers__block">
								<div className="offers__img">
									<img src={offersImg1} alt="" />
								</div>
								<div className="offers__info">
									<div className="offers__title">choosе
										your look</div>
									<div className="offers__desc">See our clothing collections</div>
									<button className="offers__btn btn">see offers</button>
								</div>
							</div>
						</div>
						<div className="offers__right"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Offers;