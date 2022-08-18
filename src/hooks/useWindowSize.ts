import React, { useState, useEffect } from 'react'

type WindowSize = {
    height: number | null,
    width: number | null
}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        height: null,
        width: null
    })
  

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                height: window.innerHeight | document.body.clientWidth,
                width: window.innerWidth | document.body.clientWidth
            })
        }

        handleResize()

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize