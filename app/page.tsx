import Image from "next/image";
import Header from "./Components/UI/Header";
import Products from "./Components/Products";
import { fetchApiData } from "./fetchData/fetchData";

export default async function Home() {

  const data = await fetchApiData('products')

  return (
    <>
      <Products data={data} />
    </>
  );
}
