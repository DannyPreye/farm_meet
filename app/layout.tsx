import "./globals.css";
import { Montserrat, Nunito } from "next/font/google";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";

const nunito = Nunito({ subsets: ["latin"], variable: "--nunito" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata = {
    title: "Farmmeet",
    description: `Welcome to our social e-commerce
        platform connecting farmers, buyers, and suppliers.
        Discover new opportunities and
        form partnerships in the agricultural industry. Join now!`,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${nunito.className} ${montserrat.className}`}>
                {children}
            </body>
        </html>
    );
}
