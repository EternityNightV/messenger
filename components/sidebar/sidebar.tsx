import DeskStopSidebar from "./desktop-sidebar"

async function Sidebar({ children } : { children : React.ReactNode}) {
    return(
        <div className="h-full">
          <DeskStopSidebar/>
          <main className="lg:pl-20 h-full">
            {children}
          </main>
        </div>
    )
}

export default Sidebar