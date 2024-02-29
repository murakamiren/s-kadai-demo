import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import { FeatureItem } from "./feature_item";

const featureList = [
	{
		title: "ゲーミングPC、ギアの提供",
		content:
			"e-sportsチームの立ち上げや運営に必要なあらゆるギアを揃えています。最新のPCからプロ仕様のマウス、ヘッドセット、キーボードまで、高品質なゲーム機器を提供。また、専用のゲーミングオフィスやトレーニングスペースも完備。プロフェッショナルな環境での競技活動をサポートし、e-sportsの成功に向けた道のりをバックアップします。",
	},
	{
		title: "ゲーム環境",
		content:
			"プロフェッショナルなゲーミング環境を提供しています。e-sportsチーム向けの特別なオフィススペースをご用意し、訓練や戦略会議に最適な環境を提供しています。最新のテクノロジーと快適な設備が、チームの成功に向けた努力をサポートします。",
	},
	{
		title: "ソリューション",
		content:
			"e-sports活動をカスタマイズ可能なソリューションで支援します。チームのニーズに合わせて機器のセットアップやオフィススペースのデザインを調整し、最適な環境を提供します。柔軟性と適応性があり、チームの目標達成に向けた最適な戦略を追求します。",
	},
];

export const HomeFeature: FC = () => {
	return (
		<Flex justifyContent={"space-between"} gap={"32px"} px={"120px"}>
			{featureList.map((feature, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<FeatureItem key={i} title={feature.title} content={feature.content} />
			))}
		</Flex>
	);
};
