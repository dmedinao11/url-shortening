import feature1 from "../assets/icon-brand-recognition.svg";
import feature2 from "../assets/icon-detailed-records.svg";
import feature3 from "../assets/icon-fully-customizable.svg";

export interface IFeature {
	title: string;
	img: string;
	desc: string;
}

const features: IFeature[] = [
	{
		title: "Brand Recognition",
		img: feature1,
		desc:
			"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
	},
	{
		title: "Detailed Records",
		img: feature2,
		desc:
			"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
	},
	{
		title: "Fully Customizable",
		img: feature3,
		desc:
			"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
	}
];

export default features;
