import Image from 'next/image'
import { useState } from 'react';

const Eyes = ()=>{
    /**
     * Silly eyes that move following the mouse cursor
     */
    let [rotateDeg, setRotateDeg] = useState('');

    if (typeof window !== "undefined") {
        // Event triggered when mouse moves
        addEventListener('mousemove', (event) => {
            let x = event.clientX;
            let y = event.clientY;
            let face = document.getElementById('face');
            let centerX = 0;
            let centerY = 0;
            if (face){
                // get center of face
                centerX = face.offsetLeft + face.offsetWidth / 2;
                centerY = face.offsetTop + face.offsetHeight / 2;
            }
            // Get angle in degrees
            let angle = Math.atan2(x - centerX, - (y - centerY) )*(180 / Math.PI);
            // rotate eyes
            setRotateDeg(`rotate(${angle}deg)`)
        });
    }
    return (
<div id="face" className='face'>
    <Image
    src={'/assets/blog/eyes.png'}
    alt="Funny eyes"
    width="105px"
    height="105px"
    />
        <div className="eye left" style={{
            transform: rotateDeg
        }}>
        </div>
        <div className="eye right" style={{
            transform: rotateDeg
        }}>
        </div>


</div>)
}

export default Eyes;