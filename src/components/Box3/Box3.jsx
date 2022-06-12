import React, {useState} from 'react';
import { motion } from 'framer-motion'

export default function Box3() {

const boxVariant = {
    phase1 : {
        x:100,
        scale: 1.5,
        backgroundColor: "yellow"
    },
    phase2 : {
        x:1000,
        scale: 0.3,
        backgroundColor: "green"
    }
}
  return (
  <div className="box-container">
      <motion.div 
      className="box"
      variants ={boxVariant}
      initial="phase1"
      animate="phase2"
     
      >
      </motion.div>
  </div>
  )
}