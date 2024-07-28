import React from "react";
import { forrestAndGroundWidth } from "../utils/constants";

const Ground = () => {
    const groundStyle = {
        fill: '#754f3d',
    };

    const division = {
        stroke: '#3e6f43',
        strokeWidth: '3px',
    };

    return (
        <g id="ground">
            <rect 
                id="ground-2"
                data-name="ground"
                style={groundStyle}
                x={forrestAndGroundWidth / -2}
                y={0}
                width={forrestAndGroundWidth}
                height={100}
            />
            <line 
                x1={forrestAndGroundWidth / -2}
                y1={0}
                x2={forrestAndGroundWidth / 2}
                y2={0}
                style={division}
            />
        </g>
    );
};

export default Ground;