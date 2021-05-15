import styled from "styled-components";
import { colors, wrapperPadding } from "../../styles/variables";

export const StyledHeader = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 2rem;
	margin-bottom: 1.8rem;

	@media (min-width: 800px) {
		justify-content: start;
		margin-bottom: 2.8rem;
	}
`;

const menuLineHeight = 3;

export const MenuButton = styled.div`
	height: 1.3rem;
	width: 1.8rem;
	border-top: ${menuLineHeight}px solid ${colors.GrayishViolet};
	border-bottom: ${menuLineHeight}px solid ${colors.GrayishViolet};
	position: relative;
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		top: calc(50% - ${menuLineHeight / 2}px);
		height: ${menuLineHeight}px;
		width: 100%;
		background-color: ${colors.GrayishViolet};
	}

	@media (min-width: 800px) {
		display: none;
	}
`;

export const Menu = styled("ul")<{ show: boolean }>`
	position: absolute;
	right: ${wrapperPadding};
	left: ${wrapperPadding};
	top: calc(33px + 2.5rem + ${wrapperPadding});
	background-color: ${colors.DarkViolet};
	border-radius: 10px;
	display: ${(props) => (props.show ? "block" : "none")};
	padding: 1.8rem ${wrapperPadding};
	z-index: 1;
	animation: bounceInDown;
	animation-duration: 1s;

	& li:first-of-type {
		margin-top: 0;
	}

	& hr {
		border: none;
		height: 0.1px;
		background: rgba(256, 256, 256, 0.1);
		margin-bottom: 1.8rem;

		@media (min-width: 800px) {
			display: none;
		}
	}

	@media (min-width: 800px) {
		display: flex;
		position: relative;
		right: unset;
		left: unset;
		top: unset;
		background-color: unset;
		width: 100%;
		padding: 1rem 0;
		animation: unset;
	}
`;

export const MenuSection = styled.div`
	@media (min-width: 800px) {
		display: flex;
		align-items: center;

		&:last-of-type {
			margin-left: auto;
		}
	}
`;

export const NavItem = styled("li")`
	text-align: center;
	list-style: none;
	cursor: pointer;
	color: white;
	font-weight: 700;
	margin: 1.8rem 0;

	&:first-of-type {
		margin-top: 0;
	}

	&:hover {
		color: ${colors.Cyan};
	}

	@media (min-width: 800px) {
		color: ${colors.GrayishViolet};
		margin: 0 1rem;
		font-size: 1rem;

		&:first-of-type {
			margin-left: 2rem;
		}
	}
`;
