import React from 'react'

const SubsLi = ({ setUnSubReq }: { setUnSubReq: (value: boolean) => void }) => {
  return (
    <li className='album py-2 duration-300 ease-in-out transition-all hover:bg-[#363739]/60 p-2 cursor-pointer flex justify-between items-center'>
        <p>Album Name</p>
        <button
        onClick={() => setUnSubReq(true)}
        className='p-2 bg-[#363739]'>Unsubscribe</button>
    </li>
  )
}

export default SubsLi