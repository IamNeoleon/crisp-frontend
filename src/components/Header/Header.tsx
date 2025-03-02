import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import headerLogo from "../../assets/header-logo.png"
import "./Header.scss"

interface IHeaderProps { }

const Header: React.FC = () => {
	return (
		<>
			<header className="header">
				<div className="header__inner">
					<div className="header__burger">
						<span></span>
						<span></span>
						<span></span>
					</div>
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
							{/* <a href="#" className="nav__link nav__link--profile nav__link--favorite">My favorites</a>
							<a href="#" className="nav__link nav__link--profile">Sign in</a>
							<a href="#" className="nav__link nav__link--profile">CREATE AN ACCOUNT</a>
							<a href="#" className="nav__link nav__link--profile">My profile</a> */}
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