import { Button } from "@nextui-org/react";

export default function HeadCreate(){
  return (
    <div className="w-[80%] h-[50vh] mt-[5%]">
      <div className="w-[100%] h-[70%] mt-[50px] flex items-start ml-[90px] justify-center flex-col">
        <h3 className="text-white font-bold text-7xl">Melhor hospedagem <br/>brasileira</h3>
        <p className="text-slate-500 font-bold text-[14px] mt-4">Recursos avançados e suporte técnico especializado, <br />pronto para atender as necessidades de sua aplicação.</p>
        <Button className="mt-8 w-[25%] h-[40%] font-bold text-[18px] bg-cyan-500" color="primary">Ver Planos</Button>
      </div>
    </div>
  )
}