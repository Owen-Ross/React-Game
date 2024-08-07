export const pathFromBezierCurve = (cubicBezierCurve) => {
    const {
        initialAxis, initialControlPoint, endingControlPoint, endingAxis,  
    } = cubicBezierCurve;

    return `
        M${initialAxis.x} ${initialAxis.y}
        c ${initialControlPoint.x} ${initialControlPoint.y}
        ${endingControlPoint.x} ${endingControlPoint.y}
        ${endingAxis.x} ${endingAxis.y} 
    `;
};

export const radiansToDegrees = radians => ((radians * 180) / Math.PI);

/*
For a more in-depth explaination on the code below, click this link: 
https://math.stackexchange.com/questions/714378/find-the-angle-that-creating-with-y-axis-in-degrees
*/
export const calculateAngle = (x1, y1, x2, y2) => {
  if (x2 >= 0 && y2 >= 0) {
    return 90;
  } else if (x2 < 0 && y2 >= 0) {
    return -90;
  }

  const dividend = x2 - x1;
  const divisor = y2 - y1;
  const quotient = dividend / divisor;
  return radiansToDegrees(Math.atan(quotient)) * -1;
};

export const getCanvasPosition = (event) => {
    
    /* 
    For a more in-depth explaination on the code below, click this link:
    https://stackoverflow.com/a/10298843/1232793
    */
    const svg = document.getElementById('aliens-go-home-canvas');
    const point = svg.createSVGPoint();
  
    point.x = event.clientX;
    point.y = event.clientY;
    const { x, y } = point.matrixTransform(svg.getScreenCTM().inverse());
    return {x, y};
  };