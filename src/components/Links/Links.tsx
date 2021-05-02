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
	LinkField,
	LinkFieldButton,
	LinkInput,
	LinksShorter,
	LinksWrapper
} from "./LinksStyled";
import { useLinks } from "../../hooks/link";

//TODO: Implementar copiado del link

const Links = () => {
	const [userLink, setUserLink] = useState("https://www.google.com/?hl=es");
	const { shorthenLinks, shortLink } = useLinks();
	const [isShortenIt, setIsShortenIt] = useState(false);

	const handleUserTypeLink = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUserLink(event.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		setIsShortenIt(true);
		shortLink(userLink).then(() => setIsShortenIt(false));
	};

	//TODO: Implementar validaciones
	const handleInvalidLink: FormEventHandler = (event) => {
		event.preventDefault();
		console.log(event);
	};

	const links = shorthenLinks.map((link, key) => (
		<Link
			originalLink={link.originalLink}
			shorthenLink={link.shorthenLink}
			key={key}
		/>
	));

	return (
		<Wrapper gray noRepeat>
			<LinksWrapper>
				<form onSubmit={handleSubmit}>
					<LinksShorter>
						<LinkField>
							<LinkInput
								placeholder="Shorten a link here..."
								value={userLink}
								onChange={handleUserTypeLink}
								onInvalid={handleInvalidLink}
								type="url"
							/>
							<LinkFieldButton
								className="fas fa-times"
								onClick={() => setUserLink("")}
							/>
						</LinkField>

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
