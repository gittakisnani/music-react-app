import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { FiMoreVertical, FiMinus, FiShare2 } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { HiMinus } from 'react-icons/hi'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

type MusicPlaylistProps = {
    img?: string
    musicName?: string
    musicAlbum?: string
    musicDuration?: string
}
const MusicPlaylist = ({ img, musicName, musicAlbum, musicDuration }: MusicPlaylistProps) => {
    const [more, setMore] = useState(false);
    const [liked, setLiked] = useState(false)
    const handleMore = () => setMore(!more)


    const handleLikeButton = () => {
      setLiked(!liked)

      //DB LOGIC HERE
    }


  return (
    <li className='w-full p-2 flex items-center gap-2 relative transition-all duration-300 ease-in-out hover:bg-[#eee]/10'>
          <p className='music-number'>
            01
          </p>
          <div className='music-infos flex items-center gap-2'>
            <div className='hidden md:block music-bg h-12 w-12 rounded-sm overflow-hidden'>
              <img src={img} alt="Music name" className='block h-full w-full max-h-full max-w-full bg-cover' />
            </div>
            <div className='flex flex-col'>
              <p className='text-white font-semibold'>{musicName}.</p>
              <p className='font-light'>{musicAlbum}</p>
            </div>
          </div>
            <div className='flex-1 flex justify-end gap-2 items-center'>
              <p className='music-duration font-medium'>{musicDuration}</p>
              <button title='Play music' className='w-10 h-10 border border-[#eee]/40 rounded-md text-xl grid place-items-center'>
                <BsFillPlayFill />
              </button>
              {more && <>
                <button onClick={handleLikeButton} title={liked ? 'Unlike' : 'Like'} className='w-10 h-10 border border-[#eee]/40 rounded-md text-xl grid place-items-center'>
                    {!liked 
                    ? <AiOutlineHeart /> 
                    : <AiFillHeart />
                    }
                </button>
                <button title='Share music' className='w-10 h-10 border border-[#eee]/40 rounded-md text-xl grid place-items-center'>
                    <FiShare2 />
                </button>
                <button title='Remove music from playlist' className='w-10 h-10 border border-[#eee]/40 rounded-md text-xl grid place-items-center'>
                    <HiMinus />
                </button>
              </>}
              {!more && <button onClick={handleMore} title='Show More' className='w-10 h-10 border border-[#eee]/40 rounded-md text-xl grid place-items-center'>
                <FiMoreVertical />
              </button>}
              {more && <button onClick={handleMore} title='Hide' className='w-10 h-10 border border-[#eee]/40 rounded-md text-xl grid place-items-center'>
                <FaTimes />
              </button>}
            </div>
        </li>
  )
}

export default MusicPlaylist