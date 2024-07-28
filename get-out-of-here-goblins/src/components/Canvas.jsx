import React from "react";
import Forrest from "./Forrest";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";

const Canvas = () => {
    const viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];

    return (
        <svg 
            id="get-out-of-here-goblins-canvas"
            preserveAspectRatio="xMaxYMax none"
            viewBox={viewBox}
        >
            <Forrest />
            <Ground />
            <CannonPipe rotation={45} />
            <CannonBase />
        </svg>
    );
};

export default Canvas;