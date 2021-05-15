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
	const [userLink, setUserLink] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const { shorthenLinks, shortLink } = useLinks();

	const [flags, setFlags] = useState({
		isShortenIt: false,
		isValueMissing: false,
		isTypeMismatch: false,
		linkHasError: false
	});

	const handleUserTypeLink = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUserLink(event.target.value);
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		setFlags({
			isShortenIt: true,
			isValueMissing: false,
			isTypeMismatch: false,
			linkHasError: false
		});

		const isOk = await shortLink(userLink);
		!isOk && setErrorMessage("Link couldn't short");

		setFlags((currFlags) => ({
			...currFlags,
			isShortenIt: false,
			linkHasError: !isOk
		}));

		setUserLink("");
	};

	const handleInvalidLink: FormEventHandler<HTMLInputElement> = (event) => {
		event.preventDefault();
		const linkInput = event.target as HTMLInputElement;

		setFlags({
			...flags,
			isValueMissing: linkInput.validity.valueMissing,
			isTypeMismatch: linkInput.validity.typeMismatch
		});

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

	const isInvalid =
		flags.isValueMissing || flags.isTypeMismatch || flags.linkHasError;

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

						<Button type="submit" w100 square disabled={flags.isShortenIt}>
							{flags.isShortenIt ? (
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
