import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import headerLogo from "../../assets/header-logo.svg"
import "./header.scss"

interface IHeaderProps { }

const Header: React.FC = () => {
	return (
		<>
			<header className="header">
				<div className="header__inner">
					<div className="header__left">
						<a href='#' className="header__logo">
							<img src={headerLogo} alt="header logo" />
						</a>
					</div>
					<div className="header__menu">
						<nav className="nav">
							<a href="#" className="nav__link">Home</a>
							<a href="#" className="nav__link">Shop</a>
							<a href="#" className="nav__link">Blog</a>
							<a href="#" className="nav__link">Sale</a>
							<a href="#" className="nav__link">Contact us</a>
						</nav>
					</div>
					<div className="header__right">
						<div className="profile-header__link">SIGN IN</div>
						<div className="profile-header__link">CREATE AN ACCOUNT</div>
						<div className="profile-header__favorite">
							<Heart size={18} />
						</div>
						<div className="header__cart">
							<div className="header__cart-icon">
								<ShoppingBag size={18} />
							</div>
							<div className="header__cart-info">
								<div className="header__cart-title">
									Shopping Cart
								</div>
								<div className="header__cart-price">0,00 EUR</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;