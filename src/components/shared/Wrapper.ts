import styled from "styled-components";
import { colors, wrapperPadding } from "../../styles/variables";

export const Wrapper = styled.div<{ gray?: boolean }>`
	padding: 0 ${wrapperPadding};
	overflow-y: hidden;
	${(props) =>
		props.gray &&
		`background-image: linear-gradient(to right, ${colors.BgWrapper}, ${colors.BgWrapper});
		background-position-y: 85px;
		background-repeat: no-repeat;
		`}
`;
