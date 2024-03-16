import { FastForward, Rocket, ShoppingCart } from 'lucide-react';

export default function VantagensCreate(){
  return (
    <div className="w-[80vw] h-[12vh] flex items-center justify-center bg-gray-800 ml-[90px] rounded-[12px]">
      <div className="w-[90%] h-[95%] flex justify-between items-center text-white text-[22px]">
        <div className='flex items-center justify-center'>
          <ShoppingCart className='mr-4' color='#0c0a09' size={28}/ >
          <h4 className='text-[18px] font-bold'>Melhorificando o mercado</h4>
        </div>
        <div className='flex items-center justify-center'>
          <Rocket className='mr-4' color='#0c0a09' size={30}/>
          <h4 className='text-[18px] font-bold'>Rapido e eficiente</h4>
        </div>
        <div className='flex items-center justify-center'>
          <FastForward className='mr-4' color='#0c0a09' size={30}/>
          <h4 className='text-[18px] font-bold'>Velocidade e segurança</h4>
        </div>
      </div>
    </div>
  )
}