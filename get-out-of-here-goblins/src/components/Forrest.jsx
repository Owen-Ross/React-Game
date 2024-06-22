import React from "react";

const Forrest = () => {
    const forrestStyle = {
        fill: '#52935a',
    };

    const forrestWidth = 5000;
    const gameHeight = 1200;

    return (
        <rect
            style={forrestStyle}
            x={forrestWidth / -2}
            y={100 - gameHeight}
            width={forrestWidth}
            height={gameHeight}
        />
    );
};

export default Forrest;