import { FiSearch } from 'react-icons/fi'
import PlaylistWatch from '../components/PlaylistWatch'
import { Link } from 'react-router-dom'
import { Modal } from '../components/Modal'
import { useState } from 'react'
const Playlist = () => {
    const [deleteReq, setDeleteReq] = useState(false)


    const handleClose = () => setDeleteReq(false);
    const handleDelete = () => {
        //DB Logic
        //Close modal
        setDeleteReq(false)
    }
  return (
    <div className='flex-1 bg-[#181818] text-[#eef2f7]/80 p-6 flex flex-col overflow-hidden'>
        <div className='flex items-center justify-between'>
            <h3 className='text-2xl'>Created Playlists</h3>
            <Link to='/create-playlist'>
                <button className='bg-[#363739]/80 text-white py-1 px-2 duration-300 ease-linear hover:bg-[#363739] '>
                    Add New Playlist
                </button>
            </Link>
        </div>
        <div className='w-full flex items-center my-2 rounded-sm overflow-hidden'>
            <form className='w-full max-w-[500px] flex items-center bg-[#363739] my-2' role='search'>
                <label htmlFor="search" className='absolute left-[100000px]'>Search playlists</label>
                <input type="text" className='flex-1 p-2' placeholder='Search playlist' />
                <button className='p-2' title='Search'>
                    <FiSearch />
                </button>
            </form>
        </div>
            <div className='flex-1 overflow-y-scroll flex flex-wrap gap-4 form p-2 w-fit'>
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
                <PlaylistWatch setDeleteReq={setDeleteReq} />
            </div>

            {deleteReq && <Modal onClose={() => console.log('Closed')}>
              <div className='bg-[#181818] text-[#eef2f7]/80 flex flex-col gap-2 p-4 rounded-sm'>
                <p>Are you sure you want delete playlist name </p>
                <div className='flex justify-end gap-2 items-center'>
                  <button 
                  onClick={handleClose}
                  className='p-2 bg-[#363739]'>Cancel</button>
                  <button 
                  onClick={handleDelete}
                  className='p-2 bg-[#363739]'>Delete</button>
                </div>
              </div>
          </Modal>}
    </div>
  )
}

export default Playlist