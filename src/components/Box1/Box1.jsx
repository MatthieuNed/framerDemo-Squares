import React, {useState} from 'react';
import { motion } from 'framer-motion'

export default function Box1() {

    const [isAnimating, setIsAnimating] = useState(false)
  return (
  <div className="box-container">
      <motion.div 
      className="box"
      style={{opacity: 0.2}}
      animate={{
          x: isAnimating ? 1750 : 0,
          opacity: isAnimating ? 1 : 0.5,
          backgroundColor:"blue",
          scale: 1,
          rotate: isAnimating ? 360 : 0.5,
      }}
      initial={{
          opacity:0.1,
      }}
      transition={{
          type: "spring",
          stiffness: 60,
          damping: 100,
      }}
      onClick={() => setIsAnimating(!isAnimating)}
      >
      </motion.div>
  </div>
  )
}
