"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Lens } from "@/components/ui/lens";
import { AvatarCircles } from "@/components/ui/avatar-circles";
import { infoProjects } from "@/db/infoProjets";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay"

export default function ProjectsCarousel() {

  return (
    <div className="w-full flex flex-col items-center gap-5">
      {/* 🔹 CAROUSEL */}
      <Carousel
        opts={{ align: "start" }}
    plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
        
        className="w-full  bg-transparent overflow-hidden"
      >
        <CarouselContent>
          {infoProjects.map((x, i) => (
            <CarouselItem key={i} className="md:basis-1/2 basic-1/1 flex  mt-10 md:mt-0 ">
              <div className="dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 bg-white/10 w-[80%]   md:w-full ">
                {/* 🔸 Titre + technologies */}
                <div className="flex justify-between items-center mb-3">
                  <h1 className={`text-3xl ${x.colorname}`}>{x.nameProj}</h1>
                  <figure className="flex gap-3 flex-wrap">
                    {x.technologie.map((tech, i) => (
                      <img
                        key={i}
                        src={tech}
                        width={20}
                        height={20}
                        alt="tech"
                      />
                    ))}
                  </figure>
                </div>

                {/* 🔸 Description */}
                <p className="text-sm p-1 text-violet-300 bg-clip-text">{x.description}</p>

                {/* 🔸 Image avec Lens */}
                <figure className="mt-2">
                  <Lens
                    zoomFactor={2}
                    lensSize={150}
                    isStatic={false}
                    ariaLabel="Zoom Area"
                  >
                    <img
                      src={x.photoProj}
                      alt={x.photoProj}
                      className="h-[210px] w-full object-cover rounded-lg"
                    />
                  </Lens>
                </figure>

                {/* 🔸 Avatars */}
                <div className="mt-2 flex justify-between items-center">
                   <a href={x.link} target="_blank">
                      <Button variant="link" className="text-gray-400 w-fit">
                        {x.nameProj}
                      </Button>
                    </a>
                          <AvatarCircles
                    avatarUrls={
                      x.People?.map((p) => ({
                        imageUrl: p.imageUrl,
                        profileUrl: p.profileUrl,
                      })) ?? []
                    }
                  />
            
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* 🔹 Controls */}
      
     <div className="md:flex gap-4  items-center mt-12 hidden ">
         <CarouselPrevious className="text-violet-600" />
        <CarouselNext className="text-violet-500" />
      </div>
    
        
     
   
  
      </Carousel>
    
    </div>
  );
}
