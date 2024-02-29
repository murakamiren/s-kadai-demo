import { Box } from "@chakra-ui/react";
import { FC } from "react";
import { HomeContact } from "../components/contact";
import { HomeFeature } from "../components/feature";
import { HomeHero } from "../components/hero";
import HomeQuote from "../components/quote";

export const HomePage: FC = () => {
	return (
		<Box as="main">
			<HomeHero />
			<HomeFeature />
			<HomeQuote />
			<HomeContact />
		</Box>
	);
};
