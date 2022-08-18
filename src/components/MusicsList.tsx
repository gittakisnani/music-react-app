import { FiMusic } from 'react-icons/fi'
import { AiOutlineEye } from 'react-icons/ai'
import { HiOutlineClock } from 'react-icons/hi'
import MusicLi from './MusicLi'
import { TrackInterface } from './Content'

type MusicListProps = {
    items: TrackInterface[]
}

const MusicsList = ({ items }: MusicListProps) => {
    const renderTracks = (items: TrackInterface[]) => {
        return items.map((track: TrackInterface) => (
            <MusicLi 
                key={track.id} 
                name={track.name} 
                musicId={track.id}
                artist={track.artists[0].name} 
                artistId={track.artists[0].id} 
                duration_ms={track.duration_ms} 
                track_number={track.track_number} 
            />
        ))
    }

  return (
    <div className='p-2 bg-[#181818] flex-1 overflow-y-scroll musics-list'>
        <table className='bg-[#181818] text-white w-full'>
        <thead>
            <td colSpan={2}>
                <div className='p-2'>#Title</div>
            </td>
            <td >
                <div title='Music Name' className='flex justify-center items-center p-2 text-lg'><FiMusic /></div>
            </td>
            <td>
                <div title='Plays' className='flex justify-center items-center p-2 text-lg'><AiOutlineEye /></div>
            </td>
            <td>
                <div title='Duration' className='flex justify-center items-center p-2 text-lg'>
                    <HiOutlineClock />
                </div>
            </td>
            <td></td>
        </thead>
        <tbody className='relative border-[#eef2f7]/80 after:top-0 after:absolute after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-[95%] after:bg-[#eef2f7]/80 before:left-0 before:absolute before:top-1/2 before:-translate-y-1/2 before:w-[1px] before:h-[95%] before:bg-[#eef2f7]/80'>
        {renderTracks(items)}
        </tbody>
    </table>
    </div>

  )
}

export default MusicsList