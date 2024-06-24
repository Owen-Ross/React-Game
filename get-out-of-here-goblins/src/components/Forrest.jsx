import React from "react";
import { forrestAndGroundWidth } from "../utils/constants";

const Forrest = () => {
    const forrestStyle = {
        fill: '#52935a',
    };

    const forrestAndGroundWidth = 5000;
    const gameHeight = 1200;

    return (
        <rect
            style={forrestStyle}
            x={forrestAndGroundWidth / -2}
            y={100 - gameHeight}
            width={forrestAndGroundWidth}
            height={gameHeight}
        />
    );
};

export default Forrest;