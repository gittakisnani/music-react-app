import { BsFillPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
type AlbumProps = {
  img: string
  id: string
  name: string
  label: string
}

const Album = ({ img, id, name, label } : AlbumProps) => {
  return (
    <div className='p-4 rounded-lg transition-all bg-[#181818]/40 cursor-pointer duration-300 ease-in-out hover:bg-[#363739]/70 max-w-[200px] group self-stretch'>
            <div className='w-full overflow-hidden rounded-lg h-[180px] bg-red-400 relative'>
              <img 
              src={img} 
              alt={name}
              className='max-h-full max-w-full bg-cover w-full h-full block'
              />
             <Link to={`/collections/${id}`}>
                <span title='Explore album' className='h-[50px] w-[50px] grid place-items-center bg-[#363739]/80 text-[#eef2f7]/80 absolute bottom-1 right-2 rounded-full transition-all duration-300 ease-in-out group-hover:opacity-100 opacity-0 group-hover:bottom-2'>
                    <BsFillPlayFill />
                </span>
             </Link>
            </div>
            <h3 className='text-lg font-semibold py-1 text-white'>{name || 'Unknown'}</h3>
            <p className='font-light text-sm'>{label?.length > 50 ? label.slice(0, 50) + '...' : label }</p>
    </div>
  )
}

export default Album