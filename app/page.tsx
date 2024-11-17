import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

const Grid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <p>Loading Grid...</p>,
});

const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: false,
  loading: () => <p>Loading Hero...</p>,
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
      </div>
    </main>
  );
}
