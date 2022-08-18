import { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { useTrackContext } from '../context/TrackContext'
import { AlbumsInterface, ArtistsInterface, ArtistsItemInterface, ItemAlbumInterface, TrackItemInterface, TracksInterface } from './SearchBar'

type SearchResultsProps = {
    albums?: AlbumsInterface
    artists?: ArtistsInterface
    tracks?: TracksInterface
}

interface FiltersInterface {
    artists: boolean
    albums: boolean
    tracks: boolean
}

const SearchResults = ({albums, artists, tracks}: SearchResultsProps) => {
    const { setTrack, setIsPlaying } = useTrackContext()
    const [filters, setFilters] = useState<FiltersInterface>({
        artists: true,
        albums: true,
        tracks: true
    })

    const handleFilters = (filterKey: "artists" | "albums" | "tracks") => {
        setFilters({
            ...filters,
            [filterKey]: !filters[filterKey]
        })
    }

    const handleSetTrack = ({name, duration_ms, preview_url, album}: TrackItemInterface) => {
        const img = album.images[0].url;
        setTrack!({
          img,
          name, 
          duration_ms,
          preview_url
        })
        setIsPlaying!(true)
      }


  return (
    <div className='absolute top-[100%] left-0 right-0 my-2 bg-inherit p-3 z-[2003002] max-h-[300px] overflow-hidden overflow-y-scroll form'>
            <div className='filters-wrapper my-2 flex items-center flex-wrap gap-2'>
                <div className='flex items-center p-2 gap-2'>
                    <span 
                        onClick={() => handleFilters("albums")} 
                        style={{backgroundColor: filters.albums? '#171718' : ''}}
                        className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#171718] select-none cursor-pointer rounded-sm">
                            {filters.albums && <BsCheckLg />}
                    </span>
                    <p>Albums</p>
                </div>
                <div className='flex items-center p-2 gap-2'>
                    <span 
                        onClick={() => handleFilters("artists")} 
                        style={{backgroundColor: filters.artists? '#171718' : ''}}
                        className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#171718] select-none cursor-pointer rounded-sm">
                            {filters.artists && <BsCheckLg />}
                    </span>
                    <p>Artists</p>
                </div>
                <div className='flex items-center p-2 gap-2'>
                    <span 
                        onClick={() => handleFilters("tracks")} 
                        style={{backgroundColor: filters.tracks? '#171718' : ''}}
                        className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#171718] select-none cursor-pointer rounded-sm">
                            {filters.tracks && <BsCheckLg />}
                    </span>
                    <p>Tracks</p>
                </div>
            </div>
            
            {filters.albums && albums &&
            <>
              <p className='artists underline'>#Albums</p>
              <ul className='list-none flex flex-col gap-1'>
                {albums?.items.map((item: ItemAlbumInterface) => (
                  <li key={item.id} className='flex items-center p-2 gap-2'>
                    <div className='h-16 w-16 overflow-hidden'>
                      <img src={item.images[0].url} alt={item.name} className='block w-full h-full bg-cover' />
                    </div>
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </>}
            {filters.artists && artists && 
              <>
                <p className='artists underline'>#Artists</p>
                <ul className='list-none flex flex-col gap-1'>
                  {artists?.items.map((item: ArtistsItemInterface) => (
                    <li key={item.id} className='flex items-center p-2 gap-2'>
                      <div className='flex gap-2 items-center'>
                        <div className='h-16 w-16 overflow-hidden'>
                          <img src={item.images[0]?.url} alt={item.name} className='block h-full w-full bg-cover' />
                        </div>
                        <p>{item.name}</p>
                      </div>
                    </li>
                  ))}
                </ul>
            </>}
            {filters.tracks && tracks && 
            <>
              <p className='artists underline'>#Tracks</p>
              <ul className='list-none flex flex-col gap-1'>
                {tracks?.items.map((item: TrackItemInterface) => (
                  <li onClick={() => handleSetTrack(item)} key={item.id} className='flex items-center p-2 gap-2'>
                    <div className='flex gap-2 items-center'>
                      <div className='h-16 w-16 overflow-hidden'>
                        <img src={item.album.images[0].url} alt={item.name} className='block h-full w-full bg-cover' />
                      </div>
                      <p>{item.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
            }
          </div>
  )
}

export default SearchResults