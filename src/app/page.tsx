import { BarChart3, GitGraphIcon, Headphones, Rocket } from "lucide-react";
import Cards from "./components/Cards";
import HeadCreate from "./components/HeadCreate";
import NavbarCreate from "./components/NavbarCreate";
import VantagensCreate from "./components/VantagensCreate";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100%] bg-gray-900">
      <NavbarCreate />
      <HeadCreate />
      <VantagensCreate />
      <div className="flex items-center justify-center mt-[120px] gap-8 w-[100%] h-[40%]">
        <Cards title="Alta Performace" content="Todos servidores são equipados com os melhores equipamentos como SXeon Gold 5120." emoji={<Rocket size={50}/>}/>
        <Cards title="Suporte Ativo" content="Nós da Hyzen priorizamos a rapidez e eficácia do atendimento em qualquer caso." emoji={<Headphones size={50}/>}/>
        <Cards title="Anti Ddos" content="Contamos com uma das proteções mais eficazes do mercado, tendo capacidade de mitigação total ultrapassando os 170 Tb/s." emoji={<BarChart3 size={50} />}/>  
      </div>
    </main>
  );
}
