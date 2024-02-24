import Navbar from "@/components/navbar";
import Timer from "@/components/timer";
import Todo from "@/components/todo";

export default function Home() {
  return (
    <main>
    <Navbar />
    
    <div className="flex flex-row">
    <div className="w-1/2 border-4 rounded-xl border-muted-foreground m-2 ml-6 h-2/3">
    <Todo />
    </div>
    <div className="flex items-center justify-center w-1/2 m-2 mr-6 border-4 rounded-xl border-muted-foreground h-[720px]">
    <Timer />
    </div>
    </div>
    
    </main>
  );
}
