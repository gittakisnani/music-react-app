import { useState, useEffect } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { Modal } from '../components/Modal'
import SubsLi from '../components/SubsLi'

const Subscriptions = () => {
  const [artists, setArtists] = useState(true)
  const [albums, setAlbums] = useState(true)
  const [unsubReq, setUnSubReq] = useState(false);

  const handleClose = () => {
    setUnSubReq(false)
  }


  const handleUnSub = () => {
    //DB
    //Close portal
    setUnSubReq(false)
  }

  return (
    <div className='flex-1 bg-[#181818] text-[#eef2f7]/80 p-6 form overflow-y-scroll flex flex-col '>
      <div className='w-full flex items-center my-4 rounded-sm '>
            <form className='w-full max-w-[500px] flex items-center bg-[#363739]' role='search'>
                <label htmlFor="search" className='absolute left-[100000px]'>Search Subscriptions</label>
                <input type="text" className='flex-1 p-2' placeholder='Search Subscriptions' />
                <button className='p-2' title='Search'>
                    <FiSearch />
                </button>
            </form>
        </div>
        <div className='pb-4 flex items-center gap-2'>
          <div className='flex items-center gap-2 bg-[#363739]/80 text-white py-1 px-2 duration-300 ease-linear hover:bg-[#363739]'>
          <span onClick={() => setArtists(!artists)} 
              style={{backgroundColor: artists? '#363739' : ''}}
              className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#363739] select-none cursor-pointer rounded-sm">
                  {artists && <BsCheckLg />}
          </span>
          <p>Artists</p>
          </div>
          <div className='flex items-center gap-2 bg-[#363739]/80 text-white py-1 px-2 duration-300 ease-linear hover:bg-[#363739]'>
          <span onClick={() => setAlbums(!albums)} 
              style={{backgroundColor: albums? '#363739' : ''}}
              className="h-5 w-5 p-1 flex justify-center items-center text-white border border-[#363739] select-none cursor-pointer rounded-sm">
                  {albums && <BsCheckLg />}
          </span>
          <p>Albums</p>
          </div>
        </div>
        <div className='flex-1 bg-[#363739]/80'>
          {albums && <div className=''>
            <h4 className='opacity-70 p-2'>Albums</h4>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-1'>
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
            </ul>
          </div>}
          {artists && <div className=''>
            <h4 className='opacity-70 p-2'>Artists</h4>
            <ul className='grid grid-cols-1 md:grid-cols-2 gap-1'>
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
              <SubsLi setUnSubReq={setUnSubReq} />
            </ul>
          </div>}
          {unsubReq && <Modal onClose={() => console.log('Closed')}>
              <div className='bg-[#181818] text-[#eef2f7]/80 flex flex-col gap-2 p-4 rounded-sm'>
                <p>Are you sure you want unsubscribe Album/Artist name</p>
                <div className='flex justify-end gap-2 items-center'>
                  <button 
                  onClick={handleClose}
                  className='p-2 bg-[#363739]'>Cancel</button>
                  <button 
                  onClick={handleUnSub}
                  className='p-2 bg-[#363739]'>Unsubscribe</button>
                </div>
              </div>
          </Modal>}
        </div>
    </div>
  )
}

export default Subscriptions