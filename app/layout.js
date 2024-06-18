import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/Navbar";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Star Pro Clean",
  description:
    "Star Pro Clean ofrece servicio de limpieza para tapizeria de interior, vehiculos y muebles, todos los servicios son realizados con la mejor calidad por profesionales altamente capacitados, los servicios son adaptados a sus necesidades. Date la comodidad y elegancia con nuestros srevicio de limpieza de muebles, estamos ubicados en Quito Ecuador ",
  keywords: ["muebles", "limpieza", "automoviles", "tapizeria"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full ">
      <body className="h-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
