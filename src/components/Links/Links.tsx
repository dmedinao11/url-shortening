import React, {
	ChangeEvent,
	FormEvent,
	FormEventHandler,
	useState
} from "react";
import { Button } from "../shared/Buttons";
import { Wrapper } from "../shared/Wrapper";
import Link, { ILink } from "./Link";
import { LinkInput, LinksShorter, LinksWrapper } from "./LinksStyled";
import { shortLink } from "../../services/linkService";

const Links = () => {
	const [userLink, setUserLink] = useState("https://www.google.com/?hl=es");
	const [shorthenLinks, setShorthenLinks] = useState<ILink[]>([]);

	// useEffect(() => {
	// 	shortLink().then((resp) => console.log(resp));
	// });

	const handleUserTypeLink = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setUserLink(event.target.value);
	};

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		shortLink(userLink).then((data) => {
			console.log(data);
			setShorthenLinks([
				...shorthenLinks,
				{ originalLink: data.original_link, shorthenLink: data.full_short_link }
			]);
		});
	};

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
						<LinkInput
							placeholder="Shorten a link here..."
							value={userLink}
							onChange={handleUserTypeLink}
							onInvalid={handleInvalidLink}
							type="url"
						/>
						<Button type="submit" w100 square>
							Shorten It!
						</Button>
					</LinksShorter>
				</form>
				{links}
			</LinksWrapper>
		</Wrapper>
	);
};

export default Links;
