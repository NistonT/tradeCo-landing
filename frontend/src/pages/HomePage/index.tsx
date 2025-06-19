import { Info } from "@/components/HomePage/Info";
import { Motion } from "@/components/HomePage/Motion";
import { OurAdvantages } from "@/components/HomePage/OurAdvantages";
import { Questions } from "@/components/HomePage/Questions";
import { STA } from "@/components/HomePage/STA";
import { Used } from "@/components/HomePage/Used";
import { Container } from "@/components/ui/_index";

export const HomePage = () => {
	return (
		<>
			<Container>
				<Info />
				<Motion />
				<OurAdvantages />
				<STA />
				<Used />
				<Questions />
			</Container>
		</>
	);
};
