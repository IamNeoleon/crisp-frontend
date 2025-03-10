import React from 'react';
import "./HomePage.scss";
import Brand1 from '../../assets/brands/01.png'
import Brand2 from '../../assets/brands/02.png'
import Brand3 from '../../assets/brands/03.png'
import Brand4 from '../../assets/brands/04.png'
import Brand5 from '../../assets/brands/05.png'
import Brand6 from '../../assets/brands/06.png'
import Brand7 from '../../assets/brands/07.png'


const Brands: React.FC = () => {
	return (
		<>
			<div className="brands">
				<div className="brands__title">
					choose your brand
				</div>
				<div className="brands__list">
					<div className="brands__item">
						<img src={Brand1} alt="" />
					</div>
					<div className="brands__item">
						<img src={Brand2} alt="" />
					</div>
					<div className="brands__item">
						<img src={Brand3} alt="" />
					</div>
					<div className="brands__item">
						<img src={Brand4} alt="" />
					</div>
					<div className="brands__item">
						<img src={Brand5} alt="" />
					</div>
					<div className="brands__item">
						<img src={Brand6} alt="" />
					</div>
					<div className="brands__item">
						<img src={Brand7} alt="" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Brands;