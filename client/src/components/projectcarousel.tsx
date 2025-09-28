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
import { Button } from "./ui/button";
export type IconProps = React.HTMLAttributes<SVGElement>;
import { infoProjects } from "@/db/infoProjets";
export default function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  max-w-[90%]"
    >
      <CarouselContent>
        {infoProjects.map((x, i) => (
          <CarouselItem
            key={i}
            className="md:basis-1/2 lg:basis-1/2  "
          >
            <div className="dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 bg-white  ">
              <div className="flex justify-between items-center mb-3">
                <h1 className={`text-3xl ${x.colorname}`}>{x.nameProj}</h1>
                <figure className="flex gap-3">
                  {x.technologie.map((tech, i) => (
                    <img key={i} src={tech} width={25} height={25} />
                  ))}
                </figure>
              </div>
              <p className="text-sm  p-1 text-violet-300 ">{x.description}</p>
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
                    className="h-[210px] w-full"
                  />
                </Lens>
              </figure>
              <div className="mt-4 flex justify-between items-center ">
                <a href={x.link}>
                  <Button variant="link" className="text-gray-400">
                    {x.linkName}
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
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
