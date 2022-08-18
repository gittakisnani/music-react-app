import { useState, useRef, useEffect} from 'react'
import { useTrackContext } from '../context/TrackContext'

type UseSpotifyTrackProps = {
    volume: number
    setVolume: any
}
const UseSpotifyTrack = ({volume, setVolume}:UseSpotifyTrackProps) => {
    const audioRef = useRef<null | HTMLAudioElement>(null!)

    const { track, isPlaying } = useTrackContext()
    const [musicSrc, setMusicSrc] = useState<string | undefined>(track?.preview_url)

 useEffect(() => {
  const incrementVolume = () => {
    if(volume >= 95) {
      setVolume(100);
      return
    }

    setVolume((prev: number) => prev + 5)
    
  }


  const decrementVolume = () => {
    if(volume <= 5) {
      setVolume(0);
      return
    }

    setVolume((prev: number) => prev - 5)
    
  }

  const handleVolume = (e: { key: string }) => {
    if(e.key === 'ArrowUp' || e.key === 'ArrowRight') incrementVolume();
    if(e.key === 'ArrowDown' || e.key === 'ArrowLeft') decrementVolume()
  }

  window.addEventListener('keydown', handleVolume);

  return () => {
    window.removeEventListener('keydown', handleVolume)
  }


 }, [])

    useEffect(() => {
    if(isPlaying) {
    audioRef.current?.play()
    } else {
    audioRef.current?.pause()
    }
    }, [isPlaying])

    return (
        <audio ref={audioRef} autoPlay={true}>
            <source src={musicSrc} type="audio/ogg" />
            <source src={musicSrc} type="audio/mpeg" />
        </audio>
    )
}

export default UseSpotifyTrack