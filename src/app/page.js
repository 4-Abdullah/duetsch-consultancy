import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header/>
   <Card image='/card.png' title="Freelancers" description="Add AI to your toolkit, land premium clients, and future-proof your freelance game."/>
    
    </div>
  );
}
