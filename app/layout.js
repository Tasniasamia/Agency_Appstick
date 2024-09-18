import "./globals.scss";

export const metadata = {
  title: "Agency AppStick",
  description: "Agency AppStick",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
