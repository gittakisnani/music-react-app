import { createContext, useState, useContext, ReactNode, useEffect } from "react";
// import { TrackWithImageInterface } from "../components/MusicLi";


type TrackProviderProps = {
    children: ReactNode
}

export interface TrackInterface {
    name?: string
    preview_url?: string
    duration_ms?: number
    img?: string
}

interface TrackContextInterface {
    track?: TrackInterface
    setTrack?: (value: TrackInterface) => void
    isPlaying?: boolean
    setIsPlaying?: (value: boolean) => void
}
const TrackContext = createContext<TrackContextInterface>({});

export const TrackProvider = ({ children } : TrackProviderProps) => {
    const [track, setTrack] = useState<TrackInterface | any>({});
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        console.log(isPlaying)
        console.log(track)
    }, [isPlaying, track])
    return (
        <TrackContext.Provider value={{track, setTrack, isPlaying, setIsPlaying}}>
            {children}
        </TrackContext.Provider>
    )
}   

export const useTrackContext = () => useContext(TrackContext)

export default TrackContext