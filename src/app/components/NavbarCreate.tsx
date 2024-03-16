import {Button, Link} from "@nextui-org/react";


export default function NavbarCreate(){
  return (
    <div className="w-[100vw] h-[10vh] bg-gray-950 flex items-center justify-center  text-white">
      <div className="w-[50vw] h-full items-start justify-center ">
        <h1 className="mt-6 ml-[95px] font-bold text-1xl">Hyzen Hosting</h1>
      </div>
      <div className="w-[50vw] h-full items-center justify-center">
        <div className="flex gap-12 ml-14 mt-4 text-cyan-100 justify-center items-center">
          <Link className="text-white text-1xl font-bold" href={"#"}>Dedicados</Link>
          <Link className="text-white text-1xl font-bold" href={"#"}>Bots</Link>
          <Link className="text-white text-1xl font-bold" href={"#"}>Minecraft</Link>
          <Link className="text-white text-1xl font-bold" href={"#"}>Contato</Link>
          <Link href="https://discord.gg/qEdZAt2c"><Button className="text-white text-1xl font-bold" color="primary">Contratar</Button></Link> 
        </div>
      </div>
    </div>
  );
}