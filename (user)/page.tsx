import Image from "next/image";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import Facilities from "@/components/Facilities";
import ProductList from "@/components/ProductList";
export default function Home() {
  return (
   <Container className="py-10">
    <Banner />
    <Facilities />
    <ProductList />
   </Container>
  );
}
