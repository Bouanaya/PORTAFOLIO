import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { FollowingEye } from "@/components/nurui/following-eye";
import { Button } from "@/components/ui/button";
export default function page() {
  const linkden = "https://www.linkedin.com/in/bouanaya-soufiane-4979121a6/";
  const github = "https://github.com/Bouanaya";
  return (
    <div className="w-full  bagColordark  h-full ">
      <div className="flex justify-center items-center h-full px-6 ">
        <div className="text-center space-y-3">
          <FollowingEye />
          <span className="uppercase tracking-widest text-xs text-center bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent  ">
            Magie Web Dynamique avec Next.js
          </span>
          <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl text-white">
            Transformer les idées en expériences utilisateur fluides
          </h1>
          <h2 className="bg-gradient-to-r from-white via-violet-500 to-black bg-clip-text text-transparent">
            Bonjour ! Je m’appelle Soufiane, Développeur Next.js basé en Maroc.
          </h2>
          <div className="flex justify-center items-center gap-4 mt-10">
            <Button>
              <Link href={linkden}>
                <Linkedin />
              </Link>
            </Button>
            <Button>
              <Link href={github}>
                <Github />
              </Link>
            </Button>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
