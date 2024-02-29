import {
	Box,
	Heading,
	Link,
	ListItem,
	Stack,
	Text,
	UnorderedList,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FC } from "react";

const navItem = [
	{ content: "SkillHubとは", href: "#" },
	{ content: "ニュース", href: "#" },
	{ content: "申し込む", href: "#" },
];

export const Header: FC = () => {
	return (
		<Box
			as={"header"}
			h={"80px"}
			display={"flex"}
			justifyContent={"space-between"}
			alignItems={"center"}
			px={"120px"}
		>
			<Heading as={"h1"} fontSize={"28px"} fontWeight={"500"}>
				SkillHub
			</Heading>
			<nav>
				<Stack as={UnorderedList} direction={"row"} spacing={"32px"}>
					{navItem.map((item) => (
						<ListItem key={item.content} listStyleType={"none"}>
							<Link as={NextLink} href={item.href}>
								{item.content}
							</Link>
						</ListItem>
					))}
				</Stack>
			</nav>
		</Box>
	);
};
