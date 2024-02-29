import { Avatar, Box, Stack, Text } from "@chakra-ui/react";

export default function HomeQuote() {
	return (
		<Stack
			bg={"gray.50"}
			py={16}
			px={8}
			spacing={{ base: 8, md: 10 }}
			align={"center"}
			direction={"column"}
			mt={"120px"}
			mx={"120px"}
		>
			<Text
				fontSize={"large"}
				textAlign={"center"}
				maxW={"3xl"}
				whiteSpace={"pre-wrap"}
			>
				私たちのe-sportsチームは驚くべき成果を収めました。まず、彼らのオールインワンゲーミングギアは、競技に必要なすべての機器を手に入れるのに非常に便利でした。最新のテクノロジーを駆使したPCから、快適なキーボードやマウス、高品質のヘッドセットまで、すべてが揃っています。
				次に、彼らのプロフェッショナルなゲームスペースは、私たちのチームにとって真に革新的でした。特別に設計されたトレーニングスペースで、戦術会議を行い、チームビルディングを行うことができました。これは、チームのコミュニケーションと連携を改善し、競技力を向上させるのに役立ちました。
				最後に、彼らのカスタマイズ可能なe-sportsソリューションは、私たちのニーズに完璧に合致しました。チームの要求に応じて設備や設計を調整できる柔軟性は素晴らしかったです。これにより、私たちは自分たちの独自性を保ちながら、最高の競技環境を確保することができました。
				総合的に言って、プロのe-sportsチームにとって理想的なパートナーです。彼らのサービスは、私たちのチームの成功に不可欠な要素となっています。これからも彼らとの協力を続け、さらなる成功を目指して努力していきたいと思います。
			</Text>
			<Box textAlign={"center"}>
				<Avatar
					src={
						"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
					}
					mb={2}
				/>

				<Text fontWeight={600}>Hoge Gaming</Text>
				<Text fontSize={"sm"} color={"gray.400"}>
					Hoge Taro
				</Text>
			</Box>
		</Stack>
	);
}
