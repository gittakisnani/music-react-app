import { TrackInterface, useTrackContext } from "../context/TrackContext"
import { useState, useRef, useEffect } from "react"
import { BsPlayFill, BsPauseFill, BsFillVolumeUpFill } from 'react-icons/bs'
import UseSpotifyTrack from "../hooks/useSpotifyTrack"
// interface MusicLiProps extends TrackInterface {}

const MusicTrack = () => {
  const { track, setTrack, isPlaying, setIsPlaying } = useTrackContext()
  const { img, name, preview_url, duration_ms} = track!
  const [volume, setVolume] = useState(20)
  return (
    <>
      {preview_url && img && name && duration_ms
      ? 
      <div className='fixed text-white bottom-0 right-0 left-0 p-4 h-[80px] backdrop-blur-md flex items-center gap-2 justify-between'>
          <UseSpotifyTrack volume={volume} setVolume={setVolume} />
          <div className="flex items-center gap-2">
            <div className="h-[60px] w-[60px] overflow-hidden">
              <img src={img} alt={name} className='block bg-cover max-w-full max-h-full w-full h-full' />
            </div>
            <p>{name}</p>
          </div>
          <button 
          onClick={() => setIsPlaying!(!isPlaying)}
          className="controllers border text-xl h-10 w-10 rounded-full flex items-center justify-center">
            {isPlaying 
            ? <span><BsPauseFill /></span>
            : <span><BsPlayFill /></span>
          }
          </button>
          <div className="flex items-center gap-2">
            <span><BsFillVolumeUpFill /></span>
            <div className="flex-1 p-1 bg-[#d1d1d1]/10 rounded-sm overflow-hidden relative w-[100px]">
              <div
              style={{width: `${volume}%`}}
              className="absolute bg-[#d1d1d1]/60 left-0 top-0 bottom-0 rounded-sm">
              </div>
            </div>
          </div>
      </div> 
      : null}
    </>
  )
}

export default MusicTrack
// import {useState, useEffect} from 'react'
// import SpotifyPlayer from 'react-spotify-web-playback'

// type MusicTrackProps = {
//     accessToken: string
//     trackUri: string
// }

// const MusicTrack = ({ accessToken, trackUri } : MusicTrackProps) => {
//     const [play, setPlay] = useState(false);

//     useEffect(() => setPlay(true), [trackUri])
//   return (
//     <SpotifyPlayer 
//     token={accessToken}
//     showSaveIcon
//     uris={trackUri ? [trackUri] : []}
//     callback={state => {
//         if(!state.isPlaying) setPlay(false)
//     }}
//     play={play}
//     />
//   )
// }

// export default MusicTrack