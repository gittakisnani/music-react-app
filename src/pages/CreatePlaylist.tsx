import { useNavigate } from "react-router-dom";
import { useState, SyntheticEvent, useRef } from "react";
import AddMusicPlaylist from "../components/AddMusicPlaylist";
import { Modal } from "../components/Modal";
import { BsCheckAll } from 'react-icons/bs'

const CreatePlaylist = () => {
    const [playlistName, setPlaylistName] = useState('');
    const navigate = useNavigate()
    const [created, setCreated] = useState(false)
    const timeOutRef = useRef<any>(null!)

    const handleSubmit = (e: SyntheticEvent ) => {
        e.preventDefault();
        if(!playlistName) return;
        setCreated(true)

        timeOutRef.current = setTimeout(() => setCreated(false), 2000)

        return () => {
            clearTimeout(timeOutRef.current)
        }

    }

    const handleClose = () => {
        setCreated(false);
        navigate('/playlists')
    }
  return (
    <div className="flex-1 bg-[#181818] text-[#eef2f7]/80 p-6 flex flex-col overflow-hidden relative gap-10">
        <h3 className="text-xl md:text-2xl">Create new playlist</h3>
        <div className="flex-1 overflow-hidden">

            <form onSubmit={handleSubmit} className="form flex flex-col gap-2 w-full max-w-[400px] h-full overflow-hidden">
                <div className="flex items-center gap-2 bg-[#363739]/80 rounded-sm px-2 duration-300 ease-linear hover:bg-[#363739] border-b border-transparent focus-within:bg-[#363739] focus-within:border-[#eef2f7]/80">
                    <label htmlFor="playlistName" className="absolute right-[100000px]">Playlist name</label>
                    <input 
                        value={playlistName}
                        onChange={e => setPlaylistName(e.target.value)}
                        id="playlistName"
                        type="text" 
                        className="outline-none flex-1 p-3 placeholder:text-white"
                        placeholder="Playlist name..."
                    />
                </div>
                <div className="flex flex-col gap-2 flex-1 overflow-hidden">
                    <h4 className="text-lg">Add musics</h4>
                        <ul className="flex-1 w-full flex flex-col gap-1 overflow-y-scroll form">
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                            <AddMusicPlaylist musicName="Here we go" />
                        </ul>
                </div>
                <button 
                disabled={!playlistName}
                className="w-full bg-[#363739]/80 duration-300 ease-linear hover:bg-[#363739] p-3 font-bold disabled:cursor-not-allowed">Create playlist</button>
            </form>
            {created && <Modal onClose={()  => setCreated(false)}>
                <div className="flex justify-between items-center w-full max-w-[400px] flex-wrap gap-2 p-4 rounded-sm bg-[#181818] text-[#eef2f7]/80">
                    <div className="flex gap-1 items-center">
                        <span className="text-green-500 text-xl"><BsCheckAll /></span>
                        <p className="">Playlist created successfully</p>
                    </div>
                    <button 
                    onClick={handleClose}
                    className='p-2 bg-[#363739]'>
                        Playlists
                    </button>
                </div>
            </Modal>}
        </div>
    </div>
  )
}

export default CreatePlaylist