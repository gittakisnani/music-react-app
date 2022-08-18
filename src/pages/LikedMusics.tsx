import React from 'react'
import { FiSearch } from 'react-icons/fi'
import MusicPlaylist from '../components/MusicPlaylist'
import { IMAGE_URL } from '../components/PlaylistWatch'

const LikedMusics = () => {
  return (
    <div className='flex-1 bg-[#181818] text-[#eef2f7]/80 p-6 flex flex-col overflow-hidden'>
        <div className='flex items-center justify-between'>
            <h3 className='text-2xl'>Liked musics</h3>
        </div>
        <div className='w-full flex items-center my-2 rounded-sm'>
            <form className='w-full max-w-[500px] flex items-center bg-[#363739] my-2' role='search'>
                <label htmlFor="search" className='absolute left-[100000px]'>Search playlists</label>
                <input type="text" className='flex-1 p-2' placeholder='Search playlist' />
                <button className='p-2' title='Search'>
                    <FiSearch />
                </button>
            </form>
        </div>
        <ul className='flex flex-col gap-1 w-full flex-1 form overflow-y-scroll'>
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
        <MusicPlaylist img={IMAGE_URL} musicAlbum='Music album' musicName='Music Name' musicDuration='03:45' />
      </ul>
    </div>
  )
}

export default LikedMusics