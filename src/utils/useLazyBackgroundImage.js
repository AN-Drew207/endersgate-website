import {useState, useEffect} from 'react'

const useLazyBackgroundImage = (src) => {
    const [sourceLoaded, setSourceLoaded] = useState(null)

    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])
  
    return sourceLoaded 
}

export default useLazyBackgroundImage