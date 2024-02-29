import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SocialButton } from "../../common/social_button";

const navItem = [
	{ content: "ホーム", href: "#" },
	{ content: "SkillHubとは", href: "#" },
	{ content: "ニュース", href: "#" },
	{ content: "申し込む", href: "#" },
];

export const Footer = () => {
	return (
		<Box bg={"gray.50"} color={"gray.700"} mt={"120px"}>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				spacing={4}
				justify={"center"}
				align={"center"}
			>
				{/* <Logo /> */}
				<Stack direction={"row"} spacing={6}>
					{navItem.map((item) => (
						<Link as={NextLink} href={item.href}>
							{item.content}
						</Link>
					))}
				</Stack>
			</Container>

			<Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					direction={{ base: "column", md: "row" }}
					spacing={4}
					justify={{ base: "center", md: "space-between" }}
					align={{ base: "center", md: "center" }}
				>
					<Text>© 2024 SkillHub. All rights reserved</Text>
					<Stack direction={"row"} spacing={6}>
						<SocialButton label={"Twitter"} href={"#"}>
							<FaTwitter />
						</SocialButton>
						<SocialButton label={"YouTube"} href={"#"}>
							<FaYoutube />
						</SocialButton>
						<SocialButton label={"Instagram"} href={"#"}>
							<FaInstagram />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
};
