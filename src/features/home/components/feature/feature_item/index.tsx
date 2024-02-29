import { Box, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
	title: string;
	content: string;
};

export const FeatureItem: FC<Props> = ({ title, content }) => {
	return (
		<Flex direction={"column"} alignItems={"center"} flex={"1"} mt={"120px"}>
			<Text fontSize={"24px"} fontWeight={600} color={"blue.400"}>
				{title}
			</Text>
			<Box mt={"32px"} h={"24px"} w={"1px"} bgColor={"gray.800"} />
			<Text mt={"32px"}>{content}</Text>
		</Flex>
	);
};
