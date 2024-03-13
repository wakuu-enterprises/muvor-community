import { useEffect, useState } from 'react';

interface Point {
    x: number;
    y: number;
}


const Graph = (): string => {
    const [stops, setStops] = useState<string[]>([]);

    useEffect(() => {
        const mvrx: Point[] = [
            {x: 0, y: 0},
            {x: 50, y: 10},
            {x: 100, y: 20},
            {x: 150, y: 30},
            {x: 200, y: 200},
            {x: 250, y: 40},
            {x: 300, y: 100},
            {x: 350, y: 30},
            {x: 400, y: 5},
            {x: 450, y: 150},
            {x: 500, y: 200}
        ];

        const stopArr = stop(mvrx, 100, mvrx.length);
        setStops(stopArr);
    }, []);

    const stop = (pointArr: Point[], totPoints: number, mode: number): string[] => {
        return pointArr.map((p) => {
            // const numPoints = totPoints + i;
            const relMean = p.y / mode;
            const hexVal = `#${Math.floor(relMean * 255).toString(16).padStart(2, '0').repeat(3)}`;
            return hexVal;
        });
    }

    const renderImage = (): string => {
        const canvas = document.createElement('canvas');
        canvas.width = 500;
        canvas.height = 500;
        const ctx = canvas.getContext('2d');

        if (!ctx) return '';

        const squareSize = 6;
        // const squareSpacing = 0;
        const squareHeight = squareSize * 4; // Adjusted height

        for (let i = 0; i < stops.length; i++) {
            const grayscaleValue = Math.floor(i * (255 / stops.length));
            const grayscaleColor = `rgb(${grayscaleValue}, ${grayscaleValue}, ${grayscaleValue})`;

            // Original square
            ctx.fillStyle = grayscaleColor;
            ctx.fillRect(i * squareSize, 246, squareSize, squareSize);

            // Gradient
            const gradient = ctx.createLinearGradient(i * squareSize, 246, i * squareSize, 246 + squareHeight);
            gradient.addColorStop(0, grayscaleColor);
            gradient.addColorStop(1, 'white');
            ctx.fillStyle = gradient;

            // Additional square below with gradient
            ctx.fillRect(i * squareSize, 246 + squareSize, squareSize, squareHeight);
        }

        return canvas.toDataURL();
    }

    return renderImage();
}

export default Graph;
