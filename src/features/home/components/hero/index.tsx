import { Button, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const HomeHero = () => {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
						<Text
							as={"span"}
							position={"relative"}
							_after={{
								content: "''",
								width: "full",
								height: "20%",
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "blue.400",
								zIndex: -1,
							}}
						>
							才能あるゲーマーに
						</Text>
						<br />{" "}
						<Text color={"blue.400"} as={"span"}>
							最適な環境を
						</Text>{" "}
					</Heading>
					<Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
						e-sportsチームを立ち上げる企業に必要な全てを提供します。PCやマウス、ゲーミングオフィスなど、プロフェッショナルなゲーミング環境を構築するための機器や施設を豊富に取り揃えています。
						我々のサービスを通じて、e-sports活動を始める企業が効率的に準備を整え、成功を収めるお手伝いをいたします。
					</Text>
					<Stack direction={{ base: "column", md: "row" }} spacing={4}>
						<Button
							rounded={"full"}
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}
						>
							今すぐ申し込む
						</Button>
						<Button rounded={"full"}>SkillHubとは</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Image
					alt={"Hero Image"}
					objectFit={"cover"}
					objectPosition={"center"}
					src={"/assets/hero.jpg"}
				/>
			</Flex>
		</Stack>
	);
};
