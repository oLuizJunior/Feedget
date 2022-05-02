import { ChatTeardropDots } from 'phosphor-react';
// import { useState } from 'react';
import { Popover } from '@headlessui/react';

export function Widget() {
  // const [ isWidgetOpen, setIsWidgetOpen ] = useState(false)

  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen)
  // }

  return (
   <Popover className="absolute bottom-5 right-5">
     {/* {isWidgetOpen ? <p>Hello World</p> : null }
     {isWidgetOpen && <p>Hello World</p>} */}
     
     <Popover.Panel>Hello World</Popover.Panel>

      <Popover.Button
        // onClick={}
        className="bg-brand-500 rounded-full text-white px-3 h-12 flex items-center group"
      >
        <ChatTeardropDots className="w-6 h-6 " />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>


    </Popover>
  )
}