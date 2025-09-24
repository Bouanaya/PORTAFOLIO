import  ProfileCard  from "./ProfileCard";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white shadow-md p-4 flex flex-col items-center">
      {/* ProfileCard toujours affichée */}
      <ProfileCard />

   
    </aside>
  );
}
