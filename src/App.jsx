import { useEffect, useState } from "react"
import Controls from "./components/Controls"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import IPhone from "./components/IPhone"
import MacBook from "./components/MacBook"
import Watch from "./components/Watch"
import Imac from "./components/Imac"
import PageTransition from "./components/PageTransition"

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false)
  const [activePage, setActivePage] = useState(0)
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024)
  const [isNavbarOpen, setIsNavbarOpen] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      } else {
        setFrameZoom(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom)
    }
  }

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex)
  }
  const resetPage = () => {
    setActivePage(0)
  }

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }


  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className={`${frameZoom && "min-w-[97vw] min-h-[97vh]"} w-[70vw] h-[80vh] min-w-[70vh] min-h-[85vh] max-w-[80vw] max-h-[90vh] 
      border border-gray-300 roundec-2xl resize overflow-auto relative transition-all duration-100 flex`}>
        <Navbar activePage={activePage} handleNavClick={handleNavClick} toggleNavbar={toggleNavbar} isNavbarOpen={isNavbarOpen}/>
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} resetPage={resetPage} activePage={activePage} />
        <div className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <IPhone />
            <MacBook />
            <Watch />
            <Imac />
          </PageTransition>
        </div>

      </div>
    </div>
  )
}

export default App