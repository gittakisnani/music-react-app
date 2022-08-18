import { useRef, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import axios from 'axios'
import { TOKEN } from '../pages/Home'
import SearchResults from './SearchResults'

interface ImageInterface {
    width: number
    height: number
    url: string
}

export interface ArtistsItemInterface {
  followers: {
    total: number
  }
  id: string
  images: ImageInterface[]
  name: string
}


export interface ArtistsInterface {
  items: ArtistsItemInterface[]
}

export interface ItemAlbumInterface {
  id: string
  name: string
  images: ImageInterface[]
}

export interface AlbumsInterface {
  items: ItemAlbumInterface[]
}

export interface TrackItemInterface {
    album: {
      images: ImageInterface[]
    }
    name: string
    id: string
    preview_url: string
    duration_ms: number
}

export interface TracksInterface {
  items: TrackItemInterface[]
}



const SearchBar = () => {
    const[searchQuery, setSearchQuery] = useState('')
    const [artists, setArtists] = useState<ArtistsInterface | null>(null!)
    const [albums, setAlbums] = useState<AlbumsInterface | null>(null!)
    const [tracks, setTracks] = useState<TracksInterface | null>(null!)

    const inputRef = useRef<null | HTMLInputElement>(null);
    const formWrapperRef = useRef<null | HTMLDivElement>(null);

    const handleFocus = () => {
      formWrapperRef.current?.classList.add('!max-w-[400px]')
    }


    const handleBlur = () => {
      formWrapperRef.current?.classList.remove('!max-w-[400px]')
    }

    useEffect(() => {
      
      const getSearchResults = async () => {
        //If empty string
        if(!searchQuery || !TOKEN) {
          console.log('UnAuth')
          setArtists(null!);
          setAlbums(null!);
          setTracks(null!)
          return false
        };
  
  
        try {
          const response = await axios.get("https://api.spotify.com/v1/search", 
          {
            headers: {
              'Content-Type': `application/json`,
              Authorization: `Bearer ${TOKEN}`
            },
            params: {
              q: searchQuery,
              type: "album,artist,track"
            }
          })

          setAlbums(response?.data?.albums)
          setArtists(response?.data?.artists)
          setTracks(response?.data?.tracks)
        } catch(err) {
          console.error(err)
        }
      } 

      getSearchResults()
    }, [searchQuery])



  return (
    <div className='flex-1 flex justify-end mx-4 md:mr-10'>
        <div 
        ref={formWrapperRef} 
        onFocusCapture={handleFocus}
        className='p-2 bg-[#363739] w-full max-w-[250px] rounded-sm transition-all duration-300 ease-in-out relative'>
         {(albums || tracks || artists) &&  <SearchResults artists={artists!} tracks={tracks!} albums={albums!}  />}
        <form 
            onSubmit={(e) => e.preventDefault()} //getTracks(e, searchQuery)
            role='search' 
            className='flex items-center justify-between'>
            <label htmlFor="searchInput" className="absolute left-[100000px]">Music Name</label>
            <input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            id='searchInput'
            ref={inputRef} 
            type="text" 
            role='searchbox' 
            className='flex-1 border-none bg-inherit text-white placeholder:text-white outline-none text-sm '
            placeholder='Search your music here...'
            />
            <button className='text-lg'>
                <FiSearch />
            </button>
        </form>
    </div>
    </div>
  )
}

export default SearchBar

function e(e: any, searchQuery: string) {
  throw new Error('Function not implemented.')
}
