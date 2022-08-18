import { RiHomeLine, RiPlayList2Fill, RiPlayListLine, RiPlayListAddLine } from 'react-icons/ri'
import { FiMusic } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import { MdOutlineSubscriptions, MdSubscriptions } from 'react-icons/md'
import { Link , useLocation } from'react-router-dom'
import useWindowSize from '../hooks/useWindowSize'
import { BiChevronLeft } from 'react-icons/bi'
type NavBarProps = {
    navBar: boolean
    setNavBar: () => void;
}

const NavBar = ({ navBar, setNavBar }: NavBarProps) => {
    const { pathname } = useLocation();
    const { width } = useWindowSize();
    const active = pathname.slice(1)
  return (
   navBar ? ( <nav className='fixed z-[100] top-0 left-0 bottom-0 md:relative p-4 px-8 bg-[#181818] w-[240px] border-r border-[#eef2f7]/10'>
    <div className='flex justify-between items-center'>
        <Link to='/'>
            <h3 className='text-white text-center p-3 md:ml-10'>MusiCloud</h3>
        </Link>
       {width! <= 768 &&  
            <button 
                onClick={setNavBar}
                title='Close navigation bar'
                className='w-8 h-8 rounded-md grid place-items-center border border-[#eee]/40 text-xl text-[#eef2f7]/80'>
                    {navBar && <BiChevronLeft />}
            </button>
        }
    </div>
   <div className='links pb-10 border-b border-[#eef2f7]/40 text-white'>
       <ul className='w-full flex flex-col font-light text-[#eef2f7]/80'>
            <Link to='/'>
                <li 
                style={{backgroundColor: !active ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                    <span className=''>
                        <RiHomeLine />
                    </span>
                    <p className=''>Home</p>
                </li>
            </Link>
           <Link to='/recently-played'>
                <li 
                style={{backgroundColor: active.includes('recently-played') ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                    <span className=''>
                        <RiPlayList2Fill />
                    </span>
                    <p className=''>Recently Played</p>
                </li>
           </Link>
            <Link to='collections'>
                <li 
                style={{backgroundColor: active.includes('collections') ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                        <span className=''>
                            <FiMusic />
                        </span>
                        <p className=''>Collections</p>
                </li>
            </Link>
            <Link to='/playlists'>
                <li 
                style={{backgroundColor: active.includes('playlists') ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                    <span className=''>
                        <RiPlayListLine />
                    </span>
                    <p className=''>Playlists</p>
                </li>
            </Link>
            <Link to='subscriptions'>
                <li 
                style={{backgroundColor: active.includes('subscriptions') ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                        <span className=''>
                            <MdOutlineSubscriptions />
                        </span>
                        <p className=''>Subscriptions</p>
                </li>
            </Link>
            <Link to='/create-playlist'>
                <li 
                style={{backgroundColor: active.includes('create-playlist') ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                        <span className=''>
                            <RiPlayListAddLine />
                        </span>
                        <p className=''>Create Playlist</p>
                </li>
            </Link>
            <Link to='/liked-musics'>
                <li 
                style={{backgroundColor: active.includes('liked-musics') ? '#363739' : ''}}
                className='w-full flex items-center gap-2 p-2  hover:bg-[#363739]/40 cursor-pointer hover:text-white rounded-sm'>
                    <span className=''>
                        <AiFillHeart />
                    </span>
                    <p className=''>Liked Musics</p>
                </li>
            </Link>
       </ul>
   </div>
   </nav> ) : (<></>)
    )
}

export default NavBar