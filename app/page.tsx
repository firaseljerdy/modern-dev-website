import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { Skeleton } from "@/components/ui/skeleton";

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => (
    <div className="w-full space-y-4">
      <Skeleton className="h-[200px] w-full rounded-lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
        ))}
      </div>
    </div>
  ),
});

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => (
    <div className="w-full space-y-4">
      <Skeleton className="h-[400px] w-full rounded-lg" />
    </div>
  ),
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => (
    <div className="w-full space-y-4">
      <Skeleton className="h-[400px] w-full rounded-lg" />
    </div>
  ),
});

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome />,
    },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
      </div>
    </main>
  );
}
