"use client"
import Image from "next/image";
import Header from "./(components)/header";
import HeroVideo from "./(components)/herovideo";
import Offer from "./(components)/offer";


export default function Home() {
  return (
    <>
      <Header />
      <HeroVideo />
      <Offer />
    </>
  );
}
