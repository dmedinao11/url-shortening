import styled from "styled-components";
import { colors, wrapperPadding } from "../../styles/variables";

export const Wrapper = styled.div<{ gray?: boolean; noRepeat?: boolean }>`
	padding: 0 ${wrapperPadding};
	overflow-y: hidden;
	${(props) =>
		props.gray &&
		`background-image: linear-gradient(to right, ${colors.BgWrapper}, ${colors.BgWrapper});
	`}

	${(props) =>
		props.noRepeat &&
		"background-position-y: 85px; background-repeat: no-repeat;"}
`;
