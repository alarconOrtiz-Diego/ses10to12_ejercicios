import React, { useState } from 'react';

const Cuadrado = () => {

    let boxStyle = {
        backgroundColor: "black",
        width: "255px",
        height: "255px"
    }

    const [boxStyleState, setBoxStyleState] = useState(boxStyle);
    const [colorInterval, setColorInterval] = useState("");

    function randomColors() {
        let red = Math.floor(Math.random() * 255 + 1)
        let green = Math.floor(Math.random() * 255 + 1)
        let blue = Math.floor(Math.random() * 255 + 1)
        boxStyle = {
            backgroundColor: `rgb(${red},${green},${blue})`,
            width: "255px",
            height: "255px"
        }
        setBoxStyleState(boxStyle)
    }

    function colorLoop() {
        setColorInterval(setInterval(randomColors, 200))
        console.log("mouseenter, loop starts");
    }

    function stopColorLoop() {
        setColorInterval(clearInterval(colorInterval))
        console.log("mouseleave or dbclick, loop stops");
    }

    return (
        <div style={boxStyleState}
            onMouseEnter={colorLoop}
            onMouseLeave={stopColorLoop}
            onDoubleClick={stopColorLoop}>
        </div>
    );
}

export default Cuadrado;
