import { useState } from "react"
import Controls from "./components/Controls"
import Navbar from "./components/Navbar"

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false)
  const [activePage, setActivePage] = useState(0)

  const toggleZoom = () => {
    setFrameZoom(!frameZoom)
  }

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex)
  }


  return (
    <div className='w-full h-screen grid place-items-center'>
      <div className={`${frameZoom && "min-w-[97vw] min-h-[97vh]"} w-[70vw] h-[80vh] min-w-[70vh] min-h-[85vh] max-w-[80vw] max-h-[90vh] 
      border border-gray-300 roundec-2xl resize overflow-auto relative transition-all duration-100`}>
        <Navbar activePage={activePage} handleNavClick={handleNavClick} />
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
      </div>
    </div>
  )
}

export default App