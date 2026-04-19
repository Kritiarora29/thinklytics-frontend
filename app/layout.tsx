import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import AuroraBackground from "./components/AuroraBackground";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <CursorGlow />
        <AuroraBackground />
        {children}
        <Footer />
      </body>
    </html>
  );
}