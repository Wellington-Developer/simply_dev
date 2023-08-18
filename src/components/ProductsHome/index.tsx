// Styles
import './styles.css';

// React Components
import { ProductHome } from './ProductHome';

// React Hooks
import { useState, useRef, useEffect } from 'react';

// Framer Motion
import { motion } from 'framer-motion'

export const ProductsHome = () => {
  const [ typeResolution, setTypeResolution ] = useState("s");
  const refferenceProductContainer = useRef<any>(null);
  const [ width, setWidth ] = useState<any>()
  
  const getWidtProductContainer = () => {
    setWidth(refferenceProductContainer.current.scrollWidth - refferenceProductContainer.current.offsetWidth)
  }

  useEffect(() => {
    getWidtProductContainer()
  }, [])

  return (
    <div className="container-products" ref={ refferenceProductContainer }>
      <h1>Womans</h1>
      <motion.div 
        whileTap={{cursor: "grabbing"}}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
      >
        <div ref={refferenceProductContainer} className="container-products__home">
        <ProductHome resolutionImage={ typeResolution } widthProduct={width}/>
        <ProductHome resolutionImage={ typeResolution } widthProduct={width}/>
        <ProductHome resolutionImage={ typeResolution } widthProduct={width}/>
        <ProductHome resolutionImage={ typeResolution } widthProduct={width}/>
        <ProductHome resolutionImage={ typeResolution } widthProduct={width}/>
        <ProductHome resolutionImage={ typeResolution } widthProduct={width}/>

        </div>
      </motion.div>
    </div>
  )
}