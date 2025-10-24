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
import { Button } from "@/components/ui/button";
import { infoProjects } from "@/db/infoProjets";

const TECHNOLOGIES = [
  "Vue",
  "React",
  "Next.js"
];

export default function CarouselFilter() {
  const [selectedTech, setSelectedTech] = React.useState<string | null>(null);

  const filteredProjects = selectedTech
    ? infoProjects.filter((proj) =>
        proj.technologieNames?.some(
          (tech: string) =>
            tech.toLowerCase() === selectedTech.toLowerCase()
        )
      )
    : infoProjects;

  return (
    <div className="max-w-[70%] w-full flex flex-col items-center gap-5">
      {/* 🔹 FILTER BAR */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {TECHNOLOGIES.map((tech) => (
          <Button
            key={tech}
            onClick={() =>
              setSelectedTech(selectedTech === tech ? null : tech)
            }
            className={`px-3 py-1 rounded-xl border text-sm transition 
              ${
                selectedTech === tech
                  ? "bg-violet-600 text-white border-violet-600"
                  : "bg-white dark:bg-gray-900 border-gray-300 text-gray-700 hover:bg-violet-100 dark:hover:bg-gray-800"
              }`}
          >
            {tech}
          </Button>
        ))}
      </div>

      {/* 🔹 CAROUSEL */}
      <Carousel
        opts={{ align: "start" }}
        className=" w-full max-w-[60%] bg-amber-100 overflow-hidden"
      >
        <CarouselContent>
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-400 py-8">
              Aucun projet trouvé pour {selectedTech}
            </p>
          ) : (
            filteredProjects.map((x, i) => (
              <CarouselItem key={i} className="md:basis-1/2 flex">
                <div className="dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 bg-white w-full">
                  <div className="flex justify-between items-center mb-3">
                    <h1 className={`text-3xl ${x.colorname}`}>{x.nameProj}</h1>
                    <figure className="flex gap-3 flex-wrap">
                      {x.technologie.map((tech, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 text-xs text-gray-500"
                        >
                          <img src={tech} width={20} height={20} alt="tech" />
                          <span>
                            {x.technologieNames?.[i] || "Tech"}
                          </span>
                        </div>
                      ))}
                    </figure>
                  </div>

                  <p className="text-sm p-1 text-violet-300">
                    {x.description}
                  </p>

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

                  <div className="mt-4 flex justify-between items-center">
                    <a href={x.link} target="_blank">
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
            ))
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
