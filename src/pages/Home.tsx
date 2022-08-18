import Collection from "../components/Collection"
import { useEffect, useState } from "react"
import axios from 'axios'
import Content from "../components/Content"
import MusicTrack from "../components/MusicTrack"
export const TOKEN = localStorage.getItem('token')


interface IconsInterface {
  width: number
  height: number
  url: string
}

type IconsArrayInterface = IconsInterface[]

interface CatInterface {
  href: string
  icons: IconsArrayInterface
  id: string
  name: string
}
const Home = () => {
  const [categories, setCategories] = useState<CatInterface[] | []>([])
  useEffect(() => {
    const getCats = async () => {
      try {
          const response = await axios.get('https://api.spotify.com/v1/browse/categories', {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${TOKEN}`
            },
            params: {
              country: 'US' 
            }
          })

          setCategories(response?.data?.categories?.items)
      } catch(err) {
        console.error(err)
      }
    }


    getCats()
  }, [])

  const renderCols = (cats: CatInterface[]) => {
    return cats.map(cat => (
      <Collection key={cat.id} colName={cat.name} colId={cat.id} href={cat.href} />
    ))
  }
  return (
    <div className="flex-1 py-6 bg-[#181818] text-[#eef2f7]/80  flex flex-col gap-2 overflow-y-scroll form">
      {renderCols(categories)}
    </div>
      // <Content />
  )
}

export default Home