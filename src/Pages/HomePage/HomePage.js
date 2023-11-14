import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ListMovie from "./ListMovie/ListMovie";
import TabsMovie from "./TabsMovie/TabsMovie";
import CarouselHomepage from "./Carousel/CarouselHomePage";

export default function HomePage() {
  return (
    <div className="">
      <div className="space-y-10 flex flex-col items-center">
        <Header />
        <CarouselHomepage />

        <ListMovie />
        <TabsMovie />
      </div>

      <Footer />
    </div>
  );
}
