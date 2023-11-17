'use client'

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";



const DeskStopSidebar = () => {

    const routes = useRoutes();

    const [isOpen, setIsOpen ] = useState(false)


    return ( 
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-white lg:border-r-[1px] lg:flex lg:pb-4 lg:flex-col justify-between">
          <nav className="mt-4 flex flex-col justify-between">
            <ul role="list" className="flex flex-col items-center space-y-1">
              {routes.map((route) => {
                <DesktopItem
                  key={route.label}
                  label={route.label}
                  href={route.href}
                  icon={route.icon}
                  active={route.active}
                  onClick={route.onClick}
                />
              })}
            </ul>
          </nav>
        </div>
     );
}
 
export default DeskStopSidebar;