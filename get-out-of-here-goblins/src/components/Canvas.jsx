import React from "react";
import Forrest from "./Forrest";

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

    return (
        <svg 
            id="get-out-of-here-goblins-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            <Forrest />
            <circle cx={0} cy={0} r={50} />
        </svg>
    );
};

export default Canvas;