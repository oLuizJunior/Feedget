import { useState } from "react";
import html2canvas from 'html2canvas';
import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({onScreenshotTook, screenshot}: ScreenshotButtonProps){
  const [isTakingScreenshot, setisTakingScreenshot] = useState(false)

  async function handleTakeScreenshot(){
    setisTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTook(base64image)
    setisTakingScreenshot(false);
  }

  if (screenshot){
    return(
      <button
        type="button"
        onClick={() => onScreenshotTook(null)}
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" className=""/>
      </button>
    );
  }

  return (
    <>
    <button 
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" alt="Botão com o icone de uma câmera que tira print da tela."/>}
    </button>
    </>
  )
}