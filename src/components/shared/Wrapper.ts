import styled from "styled-components";
import {
	colors,
	wrapperPadding,
	wrapperPaddingDesk
} from "../../styles/variables";

export const Wrapper = styled.div<{ gray?: boolean; noRepeat?: boolean }>`
	--wrapper-padding: ${wrapperPadding};

	padding: 0 var(--wrapper-padding);
	overflow-y: hidden;
	${(props) =>
		props.gray &&
		`background-image: linear-gradient(to right, ${colors.BgWrapper}, ${colors.BgWrapper});
	`}

	${(props) =>
		props.noRepeat &&
		"background-position-y: 85px; background-repeat: no-repeat;"}

	@media (min-width: 950px) {
		--wrapper-padding: ${wrapperPaddingDesk};
	}
`;
