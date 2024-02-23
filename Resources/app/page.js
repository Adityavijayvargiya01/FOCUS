import Navbar from "@/components/navbar";
import Timer from "@/components/timer";

export default function Home() {
  return (
    <main>
    <Navbar />
    <div className="flex items-center justify-center ">
    <Timer />
    </div>
    </main>
  );
}
