import { Box, Button, Text } from "@chakra-ui/react";
import { FC } from "react";

export const HomeContact: FC = () => {
	return (
		<Box mt={"120px"} display={"flex"} flexDir={"column"} alignItems={"center"}>
			<Text fontSize={"2xl"} fontWeight={600}>
				私たちと共に最高のチームを作りませんか？
			</Text>
			<Button mt={"32px"} size={"lg"} colorScheme={"blue"}>
				今すぐ申し込む
			</Button>
		</Box>
	);
};
