import React from 'react'
import img1 from '../../assets/ifi2lbzxeu1hvsqrsip3.webp'
import img2 from '../../assets/ifi2lbzxeu1hvsqrsip3.webp'
import img3 from '../../assets/ifi2lbzxeu1hvsqrsip3.webp'
import img4 from '../../assets/ifi2lbzxeu1hvsqrsip3.webp'
// import img5 from '../../assets/ifi2lbzxeu1hvsqrsip3.webp'

function Caraousel() {
  return (
    <>
        <section className='caraousel'>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        {/* <img src={img5} alt="" /> */}

        </section>
    </>
  )
}

export default Caraousel