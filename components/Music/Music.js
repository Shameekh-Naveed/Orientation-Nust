import React, { useRef,useState } from 'react'
import styles from './Music.module.css'
import music from '../../assets/audio/NMX ON.mp3'

export default function Music() {

  const [isPlaying, setIsPlaying] = useState(false);
  const musicRef = useRef(null);

  const handleMusic = () => {
    setIsPlaying(!isPlaying);

    if(!isPlaying){
      musicRef.current.play();
  }else{
      musicRef.current.pause();
  }
  }
  
  return (
    <div className={styles.music} onClick={handleMusic} >
      <span className='bg-tyrian-purple dark:bg-ultra-red' style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className='bg-ultra-red dark:bg-pale-pink' style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className='bg-tyrian-purple dark:bg-ultra-red' style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className='bg-ultra-red dark:bg-pale-pink' style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <span className='bg-tyrian-purple dark:bg-ultra-red' style={{ animationPlayState: isPlaying ? "running" : "paused" }}></span>
      <audio src={music} ref={musicRef}  loop />
    </div>
  )
}
