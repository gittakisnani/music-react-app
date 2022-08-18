import { MdKeyboardArrowRight, MdKeyboardArrowDown } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { useState } from 'react'
import MusicPlaylist from './MusicPlaylist'
export const IMAGE_URL = 'https://images.unsplash.com/photo-1660098932832-46272fd158ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'


type PlaylistWatchProps = {
  setDeleteReq: (value: boolean) => void
}
const PlaylistWatch = ({ setDeleteReq }: PlaylistWatchProps) => {
  const [playlist, setPlaylist] = useState(false);
  const handlePlaylist = () => setPlaylist(!playlist)
  return (
    <div className="flex items-center justify-between w-full border border-[#eee]/40 p-2 rounded-sm flex-wrap select-none">
      <h4 className='text-xl font-semibold'>Playlist name</h4>
      <div className='flex items-center gap-2'>
        <div onClick={() => setDeleteReq(true)} title='Delete Playlist' className='flex items-center gap-1 bg-[#363739]/80 p-2 cursor-pointer duration-300 ease-linear hover:bg-[#363739]'>
          <span><FaTrash /></span>
          <p>Delete</p>
        </div>
      {!playlist && <span onClick={handlePlaylist} title='Open playlist' className='cursor-pointer text-2xl'><MdKeyboardArrowRight /></span> }
      { playlist && <span onClick={handlePlaylist} title='Close playlist' className='cursor-pointer text-2xl'><MdKeyboardArrowDown /></span> }
      </div>

      {playlist && <ul className='flex flex-col gap-1 w-full'>
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
      </ul>}
    </div>
  )
}

export default PlaylistWatch