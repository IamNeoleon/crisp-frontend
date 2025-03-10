import React from 'react';

const Offers: React.FC = () => {
	return (
		<>
			<div className="offers">
				<div className="container">
					<div className="offers__inner">
						<div className="offers__left">
							<div className="offers__block offers__block--small">
								<div className="offers__info">
									<div className="offers__title">choosе <br />
										your look</div>
									<div className="offers__desc">See our clothing collections</div>
									<button className="offers__btn btn">see offers</button>
								</div>
							</div>
							<div className="offers__block offers__block--small">
								<div className="offers__info">
									<div className="offers__title">brand new style</div>
									<div className="offers__desc">Popular clothing brands</div>
									<button className="offers__btn btn">see offers</button>
								</div>
							</div>
						</div>
						<div className="offers__block offers__block--big">
							<div className="offers__info">
								<div className="offers__title offers__title--big">
									Up to <br />
									40% off
								</div>
								<div className="offers__desc">Special offers and great deals</div>
								<button className="offers__btn btn">see offers</button>
							</div>
							<div className="offers__img">
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Offers;