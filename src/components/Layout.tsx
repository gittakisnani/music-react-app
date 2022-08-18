import { Outlet } from "react-router-dom";
import Header from "./Header";
import MusicTrack from "./MusicTrack";
import NavBar from "./NavBar";
type Props = {
    navBar: boolean
    setNavBar: (value: boolean) => void
}

const Layout = ({ navBar, setNavBar }: Props) => {
  return (
    <div className='h-screen w-screen overflow-hidden flex relative'>
      <NavBar navBar={navBar} setNavBar={() => setNavBar(!navBar)} />
      <div className='flex-1 flex flex-col'>
        <Header navBar={navBar} setNavBar={() => setNavBar(!navBar)} />
        <Outlet />
      <MusicTrack  />
      </div>
    </div>
  )
}

export default Layout