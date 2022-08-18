import { BsCheckLg } from 'react-icons/bs'
import { useState } from 'react'
type AddMusicPlaylistProps = {
    musicName?: string
}
const AddMusicPlaylist = ({ musicName }: AddMusicPlaylistProps) => {
    const [added, setAdded] = useState(false)
    const toggleAdded = () => setAdded(!added)
    return (
        <div className="flex items-center gap-2 p-2 ">
            <span onClick={toggleAdded} 
            style={{backgroundColor: added? '#363739' : ''}}
            className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#363739] select-none cursor-pointer rounded-sm">
                {added && <BsCheckLg />}
            </span>
            <p className="text-sm">{musicName}</p>
        </div>
    )
}

export default AddMusicPlaylist