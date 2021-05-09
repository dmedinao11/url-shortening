import React, {
	ChangeEvent,
	FormEvent,
	FormEventHandler,
	useState
} from "react";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import Link from "./Link";
import {
	LinkError,
	LinkField,
	LinkFieldButton,
	LinkInput,
	LinksShorter,
	LinksWrapper,
	LinkInputWrapper
} from "./LinksStyled";
import { useLinks } from "../../hooks/link";

const Links = () => {
	const [userLink, setUserLink] = useState("https://www.google.com/?hl=es");
	const [isShortenIt, setIsShortenIt] = useState(false);
	const [isValueMissing, setIsValueMissing] = useState(false);
	const [isTypeMismatch, setIsTypeMismatch] = useState(false);
	const [linkHasError, setLinkHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const { shorthenLinks, shortLink } = useLinks();

	const handleUserTypeLink = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUserLink(event.target.value);
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		setIsShortenIt(true);
		setIsValueMissing(false);
		setIsTypeMismatch(false);
		setLinkHasError(false);

		const isOk = await shortLink(userLink);
		!isOk && setErrorMessage("Link couldn't short");
		setIsShortenIt(false);
		setLinkHasError(!isOk);
	};

	const handleInvalidLink: FormEventHandler<HTMLInputElement> = (event) => {
		event.preventDefault();
		const linkInput = event.target as HTMLInputElement;

		setIsValueMissing(linkInput.validity.valueMissing);
		setIsTypeMismatch(linkInput.validity.typeMismatch);

		if (linkInput.validity.valueMissing)
			return setErrorMessage("Please add a link");
		if (linkInput.validity.typeMismatch) return setErrorMessage("Invalid link");
	};

	const links = shorthenLinks.map((link, key) => (
		<Link
			original_link={link.original_link}
			short_link={link.short_link}
			full_short_link={link.full_short_link}
			key={key}
		/>
	));

	const isInvalid = isValueMissing || isTypeMismatch || linkHasError;

	return (
		<Wrapper gray noRepeat>
			<LinksWrapper>
				<form onSubmit={handleSubmit}>
					<LinksShorter>
						<LinkInputWrapper>
							<LinkField invalid={isInvalid}>
								<LinkInput
									placeholder="Shorten a link here..."
									value={userLink}
									onChange={handleUserTypeLink}
									onInvalid={handleInvalidLink}
									type="url"
									required
								/>
								<LinkFieldButton
									className="fas fa-times"
									onClick={() => setUserLink("")}
								/>
							</LinkField>
							{isInvalid && <LinkError>{errorMessage}</LinkError>}
						</LinkInputWrapper>

						<Button type="submit" w100 square disabled={isShortenIt}>
							{isShortenIt ? (
								<i className="fas fa-sync-alt fa-spin"></i>
							) : (
								"Shorten It!"
							)}
						</Button>
					</LinksShorter>
				</form>
				{links}
			</LinksWrapper>
		</Wrapper>
	);
};

export default Links;
