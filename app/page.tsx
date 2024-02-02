"use client";
import AdCards from "@/components/ad-cards";
import ArticleCards from "@/components/article-cards";
import HeadCards from "@/components/head-cards";
import Header from "@/components/header";
import StoryCards from "@/components/story-cards";

export default function Home() {
  return (
      <div className="">
        <Header />
        <div className="overflow-hidden px-10">
          <div className="my-8">
              <h2 className="text-md md:text-[35px] font-bold ">
                  Hello Admin,  
              </h2>
              <p className="text-muted-foreground font-light text-[17px]">
                  This is what we got for you today.
              </p>
          </div>
          <HeadCards />
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold">Top Articles</h3>
            </div>
            <div className="">
              <a href="" className="link text-[#9058FF]">See all</a>
            </div>
          </div>
          <ArticleCards />
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold">Top Stories</h3>
            </div>
            <div className="">
              <a href="" className="link text-[#9058FF]">See all</a>
            </div>
          </div>
          <StoryCards />
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold">Advertisement</h3>
            </div>
            <div className="">
              <a href="" className="link text-[#9058FF]">See all</a>
            </div>
          </div>
          <AdCards />
        </div>
      </div>
  );
}
