import React from "react";
import { pathFromBezierCurve } from "../utils/formulas";

const CannonBase = (props) => {
    const cannonBaseStyle = {
        fill: '#cacaca',
        stroke: '#747474',
        strokeWidth: '2px',
    };

    const baseWidth = 80;
    const halfBase = 40;
    const height = 60;
    const negativeHeight = height * -1;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height,
        },

        initialControlPoint: {
            x: 20,
            y: negativeHeight,
        },

        endingControlPoint: {
            x: 60,
            y: negativeHeight,
        },

        endingAxis: {
            x: baseWidth,
            y: 0,
        },
    };

    return (
        <g>
            <path
                style={cannonBaseStyle}
                d={pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                x1={-halfBase}
                y1={height}
                x2={halfBase}
                y2={height}
                style={cannonBaseStyle}
            />
        </g>
    );
};

export default CannonBase;