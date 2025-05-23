import localFont from "next/font/local";

const rubikMonoOne = localFont({
  src: "../../../public/fonts/RubikMonoOne-Regular.ttf",
  variable: "--font-rubik-mono-one",
  weight: "400",
});

const caveatRegular = localFont({
  src: "../../../public/fonts/Caveat-Regular.ttf",
  variable: "--font-caveat-regular",
  weight: "400",
});

const ShantellSansRegular = localFont({
  src: "../../../public/fonts/ShantellSans-Regular.ttf",
  variable: "--font-shantell-sans-regular",
  weight: "400",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${rubikMonoOne.variable} ${ShantellSansRegular.variable} ${caveatRegular.variable} antialiased`}>
      {children}
    </div>
  );
}