// Custom layout for pages using sidebar

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			SIDEBAR
			{children}
		</main>
	);
}
