import { FollowingEye } from "@/components/nurui/following-eye";
import NavlinkDock from "@/components/NavlinkDock";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";


export default function page() {
  return (
      <div className="relative flex h-full min-h-screen w-full flex-col items-start justify-start ">
              <BackgroundRippleEffect />
      <div className="flex justify-center items-center h-full px-6 ">
        <div className="text-center space-y-3">
          <FollowingEye />
          <span className="uppercase tracking-widest text-xs text-center bg-gradient-to-r from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent  ">
            Magie Web Dynamique
          </span>
          <h1 className="font-bold text-center text-[40px] md:text-5xl lg:text-6xl dark:text-white text-black">
            Transformer les idées en expériences utilisateur fluides
          </h1>
          <h2 className="bg-clip-text 
           dark:bg-gradient-to-r dark:from-white dark:via-violet-500 dark:to-black
           bg-gradient-to-r from-purple-400 via-violet-500 to-red-500  text-transparent">
            Bonjour ! Je m’appelle Soufiane, Développeur web basé en Maroc.
          </h2>
          <div className="flex justify-center items-center gap-4 mt-10">
            <NavlinkDock />
          </div>
        </div>
      </div>
    </div>
  );
}
