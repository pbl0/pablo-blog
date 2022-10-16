import Image from 'next/image'
import { useState } from 'react';


const options = 5


function handleClick() {
    console.log('click')
}


const Eyes = ()=>{
    /**
     * Silly eyes that move following the mouse cursor
     */

    let [rotateDeg, setRotateDeg] = useState('');

    let [imageIndex, setImageIndex] = useState(Math.floor(Math.random()*options));

    function handleClick() {
        const randomIntClick = Math.floor(Math.random()*options);
        if (imageIndex == randomIntClick){
            if (imageIndex != 0){
                setImageIndex(randomIntClick-1);
            } else{
                setImageIndex(randomIntClick + 1);
            }
        } else {
            setImageIndex(randomIntClick);
        }
        console.log(imageIndex , imageIndex == randomIntClick);
    }

    if (typeof window !== "undefined") {
        let centerX = 0;
        let centerY = 0;
        const face = document.getElementById('face');
        if (face){
            // get center of face
            centerX = face.offsetLeft + face.offsetWidth / 2;
            centerY = face.offsetTop + face.offsetHeight / 2;
        }
        // Event triggered when mouse moves
        addEventListener('mousemove', (event) => {
            let x = event.clientX;
            let y = event.clientY;
            // Get angle in degrees
            let angle = Math.atan2(x - centerX, - (y - centerY) )*(180 / Math.PI);
            // rotate eyes
            setRotateDeg(`rotate(${angle}deg)`)
        });
    }

    return (
<div onClick={handleClick} id="face" className='face'>
    <Image
    src={`/assets/eyes/eyes${imageIndex}.png`}
    alt="Funny eyes"
    width="100px"
    height="100px"
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