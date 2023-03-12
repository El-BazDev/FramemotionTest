import './App.css';
import {animate, motion, useAnimationFrame} from 'framer-motion'
import { useRef } from 'react';


function App() {

  const ref = useRef(null)

  useAnimationFrame((time, delta) => {
    time = time/4
    ref.current.style.transform = `rotateY(${time}deg) rotateZ(${time/4}deg) rotateX(${time/2}deg)`
  })
  return (
    <div >
     <motion.div ref={ref} whileTap={{rotateZ:20}} ><img src="https://www.pcworld.com/wp-content/uploads/2022/12/03_shipping_malware-100694090-orig-1.jpg?quality=50&strip=all" alt="" /></motion.div>
    </div>
  );
}

export default App;
