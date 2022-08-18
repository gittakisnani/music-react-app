import useWindowSize from "../hooks/useWindowSize"
import Background from "./Background"
import MusicsList from "./MusicsList"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import { AlbumInterface } from "./Collection"
import { TOKEN } from "../pages/Home"

export interface TrackInterface {
  artists: {name: string, id: string}[]
  duration_ms: number
  id: string
  name: string
  track_number: number
}

export interface TracksInterface {
  items: TrackInterface[]
}

interface AlbumWithTracks extends AlbumInterface {
  tracks: TracksInterface
}

const Content = () => {
  const { id = '' } = useParams()
  const { width } = useWindowSize()
  const [album, setAlbum] = useState<AlbumWithTracks | null>(null!);
  useEffect(() => {
    const getAlbum = async (id: string) => {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/albums/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        params: {
          id,
        }

      })

      setAlbum(response?.data)
      } catch(err) {
        console.error(err)
      }
    }

    getAlbum(id)
  }, []);


  return (
    <div className="flex-1 flex flex-col overflow-hidden">
        {width! && <Background 
            image={album?.images[0]?.url || ''} 
            title={album?.name || 'Unknown'} 
            monthlyListeners='90M'
            followers='22M' 
        />}
        <MusicsList items={album?.tracks.items || []} />
    </div>
  )
}

export default Content