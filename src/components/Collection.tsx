import { Link } from 'react-router-dom'
import Album from './Album'
import { useEffect, useState } from 'react'
import axios from '../api/axios'
import { TOKEN } from '../pages/Home'

type CollectionProps = {
  colName: string
  colId: string 
  href: string
}

interface ImageInterface {
  url: string
  width: string
  height: string
}

export interface AlbumInterface {
  images: ImageInterface[]
  href: string
  id: string
  name: string
  label: string
}



const Collection = ({ colName, colId, href }: CollectionProps) => {
  const [albums, setAlbums] = useState<AlbumInterface[] | []>([]);
  useEffect(() => {
    const getAlbums = async () => {
      try {
        const response = await axios.get('https://api.spotify.com/v1/albums', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
          },
          params: {
            ids: "382ObEPsp2rxGrnsizN5TX,1A2GTWGtFfWp7KSQTwWOyo,2noRn2Aes5aoNVsU6iWThc",
            country: 'US'
          }
        })

        setAlbums(response?.data?.albums)
      } catch(err) {
        console.error(err)
      }
    }

    getAlbums()
  }, [])

  const renderAlbums = (albums: AlbumInterface[]) => {
    return albums.map(album => (
      <Album key={album.id} img={album?.images[0]?.url} name={album.name} label={album.label} id={album.id} />
    ))
  }
  return (
    <div className='bg-[#363739]/80 p-4 text-[#eef2f7]/80'>
        <div className='flex p-1 items-center justify-between'>
            <p className='collection-title text-xl text-[#eef2f7]'>{colName || 'Unknown'}</p>
            <Link to={'/'}>
                <p className=' underline'>See all</p>
            </Link>
        </div>
        <div className='px-1 opacity-80'>{colName}'s Albums</div>
        <div className='flex gap-2 items-center pt-2'>
          {renderAlbums(albums)}
        </div>
    </div>
  )
}

export default Collection