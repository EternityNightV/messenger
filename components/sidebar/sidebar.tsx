import DeskStopSidebar from "./desktop-sidebar"
import MobileFooter from "./mobile-footer"

async function Sidebar({ children } : { children : React.ReactNode}) {
    return(
        <div className="h-full">
          <DeskStopSidebar/>
          <MobileFooter/>
          <main className="lg:pl-20 h-full">
            {children}
          </main>
        </div>
    )
}

export default Sidebar