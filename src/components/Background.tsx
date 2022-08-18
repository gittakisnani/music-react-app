import { BsFillPlayFill } from 'react-icons/bs'
import { FiShare2 } from 'react-icons/fi'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdOutlinePlaylistAdd } from 'react-icons/md'
import { useState } from 'react'
type BackgroundProps = {
    image: string
    monthlyListeners: string
    followers: string
    title: string
}

const Background = ({ image, monthlyListeners, followers, title } : BackgroundProps) => {
    const [sub, setSub] = useState(false) ;
    const [liked, setLiked] = useState(false)


    const handleLikeButton = () => {
        setLiked(!liked)

        //DB LOGIC HERE
    }


    const handleSub = () => {
        //DB Logic based on sub value
        setSub(!sub)
    }

  return (
    <div className="max-h-[300px] basis-1/2 flex flex-col justify-between p-4 relative">
        <div className='absolute inset-0 bg-contain z-[-1]'>
            <img src={image} alt={title} className='max-h-full max-w-full w-full h-full bg-cover' />
        </div>
        <div className='text-white'>
            <h3 className="title text-3xl font-semibold">{title}</h3>
            <p className="listeners py-4"><span className="font-bold">{monthlyListeners}</span> Monthly Listeners</p>
            <button onClick={handleSub} className="follow-btn p-1 px-8 font-semibold rounded-sm bg-[#181818] border">{!sub ?'Subscribe' : 'Unsubscribe'}</button>
        </div>
        <div className="flex items-center justify-between text-lg">
            <div className="ops flex gap-2 items-center">
                <button title='Play' className='bg-black p-4 rounded-full text-white text-xl grid place-items-center'>
                    <BsFillPlayFill />
                </button>
                <button title='Add To Playlists' className='p-2 bg-white text-[#181818] rounded-full'>
                    <MdOutlinePlaylistAdd />
                </button>
                <button onClick={handleLikeButton} title={liked ? 'Unlike' : 'Like'} className='p-2 bg-white text-[#181818] rounded-full'>
                    {!liked && <AiOutlineHeart />}
                    {liked && <AiFillHeart />}
                    {/* Here we check if it was already liked */}
                </button>
                <button title='Share' className='p-2 bg-white text-[#181818] rounded-full'>
                    <FiShare2 />
                </button>
            </div>
            <div className='followers text-white text-base'>
                <span className='font-semibold'>{followers}</span> Followers
            </div>
        </div>
    </div>
  )
}

export default Background