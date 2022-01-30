//rafce imports and create a function.
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';
import Button from './Button';
import Bars from '../images/bars.svg';

const Nav = styled.nav`
  height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	z-index: 100;
	position: fixed;
	width: 100%;
  /* background-color: #FFCB05; */
	/* box-shadow: -2px 6px 5px 0px rgba(0,0,0,0.25);
	-webkit-box-shadow: -2px 6px 5px 0px rgba(0,0,0,0.25);
	-moz-box-shadow: -2px 6px 5px 0px rgba(0,0,0,0.25); */
`;

const NavLink = css`
	color: #434142;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled(Link)`
	${NavLink}
	color: #434142;
	font-weight: bold;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const MenuBars = styled.i`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		background-image: url(${Bars});
		background-size: contain;
		height: 30px;
		width: 30px;
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-50%, 50%);
	}
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -48px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLink}
`;

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Navbar = ({ toggle }) => {
  return(
    <Nav>
      <Logo to="/">Queretaro Investments</Logo>
			<MenuBars onClick={toggle}/>
			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks
						to={item.link}
						key={index}
					>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				<Button
					to='/contact'
					primary='true'
				>Escribenos</Button>
			</NavBtn>
		</Nav>
  );
};

export default Navbar;
