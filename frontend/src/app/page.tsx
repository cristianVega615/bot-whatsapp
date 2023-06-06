import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Introduce from "../components/Introduce";
import CardOption from "../components/CardsOption";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduce />
      <CardOption />
      <Footer />
    </>
  );
}
