import { ChakraProvider } from "@chakra-ui/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={inter.className}>
				<ChakraProvider cssVarsRoot="body">
					<Header />
					{children}
					<Footer />
				</ChakraProvider>
			</body>
		</html>
	);
}
