import { BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { FiShare2, FiMoreVertical } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { TOKEN } from '../pages/Home'
import { TrackInterface } from './Content'
import { useTrackContext } from '../context/TrackContext'



type MusicLiProps = {
    name: string
    artist: string
    duration_ms: number
    artistId: string
    track_number: number
    musicId: string
}

interface ImageInterface {
    width: number
    height: number
    url: string
}

export interface TrackWithImageInterface extends TrackInterface {
    album: {
        images: ImageInterface[]
    },
    preview_url: string
}

const MusicLi = ({ name, artist, duration_ms, artistId, track_number, musicId }: MusicLiProps) => {
    const [trackLi, setTrackLi] = useState<TrackWithImageInterface | null>(null!);
    const [liked, setLiked] = useState(false)
    const { setTrack, setIsPlaying, track, isPlaying } = useTrackContext();
    const checkTrack = track?.name === name && isPlaying


    const getDuration = (ms: number) => {
        let minutes = ms / 1000 /60 
        return minutes.toFixed(2).replace('.', ":")
    }

    const handleLikeButton = () => {
        setLiked(!liked)
        //DB LOGIC HERE
    }

    useEffect(() => {
        const getTrack = async () => {
            try {
                const response = await axios.get(`https://api.spotify.com/v1/tracks/${musicId}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${TOKEN}`
                    },
                    params: {
                        id: musicId
                    }
                })

                console.log(response?.data)

                setTrackLi(response?.data)
            } catch(err) {
                console.error(err)
            }
        }

        getTrack()
    }, [])

    const handleSetTrack = () => {
        setTrack!({
            img: trackLi?.album.images[0].url || '',
            name,
            duration_ms,
            preview_url: trackLi?.preview_url
        })

        setIsPlaying!(true)
    }
  return (
    <tr 
    style={{backgroundColor: track?.name === name ? 'rgba(209, 209, 209, 0.2)' : ''}}
    className='transition-all duration-300 ease-in-out hover:bg-[#d1d1d1]/10 cursor-pointer'>
        <td colSpan={2} className='max-w-[100px]'>
            <div className='flex items-center p-2 gap-4'>
                <button 
                onClick={handleSetTrack} 
                title={checkTrack ? 'Pause' : 'Play'} className='bg-inherit text-inherit p-2 rounded-full border border-white/50'>
                    {checkTrack 
                        ? <BsFillPauseFill />
                        : <BsFillPlayFill />
                    }
                </button>
                <div className='image-wrapper w-[60px] h-[60px] hidden md:block rounded-sm overflow-hidden'>
                    <img src={trackLi?.album.images[0].url || ''} alt={name} className='h-full w-full block max-h-full max-w-full' />
                </div>
                <div className='infos flex flex-col pl-12'>
                    <p title={name} className='album capitalize'>{name?.length > 20 ? name.slice(0, 17) + '...' : name}</p>
                    <Link to='/'>
                        <p className='font-thin text-[#eef2f7]/80'>{artist}</p>
                    </Link>
                </div>
            </div>
        </td>
        <td>
            <div className='text-center p-2'>
                <p title={name} className='font-light text-[#eef2f7]/80 capitalize'>{name?.length > 20 ? name.slice(1, 17) + '...' : name}</p>
            </div>
        </td>
        <td>
            <div className='text-center p-2'>
                <p className='font-light text-[#eef2f7]/80'>543K</p>
            </div>
        </td>
        <td>
            <div className='text-center p-2'>
                <p className='font-light text-[#eef2f7]/80'>{getDuration(duration_ms)}</p>
            </div>
        </td>
        <td className='max-w-[40px]'>
            <div className='flex items-center justify-between gap-2 p-2 text-[#eef2f7]/80'>
                <button 
                title='Share' 
                className='p-2 border border-[#eef2f7]/80 rounded-full hidden md:flex items-center justify-center'>
                    <FiShare2 />
                </button>
                <button 
                onClick={handleLikeButton} 
                title={liked ? 'Unlike' :'Like'} 
                className='p-2 border border-[#eef2f7]/80 rounded-full hidden md:flex items-center justify-center'>
                    {liked && <AiFillHeart />}
                    {!liked && <AiOutlineHeart />}
                </button>
                <button title='More' className='p-2 border border-[#eef2f7]/80 rounded-full flex items-center justify-center'>
                    <FiMoreVertical />
                </button>
            </div>
        </td>
    </tr>
  )
}

export default MusicLi