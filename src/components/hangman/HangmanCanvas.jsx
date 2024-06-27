import { useContext, useEffect, useRef } from 'react';
import { HangmanContext } from '../../context/HangmanContext';

function HangmanCanvas() {
  const { failCount, setFailCount, setCorrectAlphabets } =
    useContext(HangmanContext);
  const canvasRef = useRef();

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = 450;
    canvas.height = 250;

    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.moveTo(0, 245);
      ctx.lineTo(450, 245);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.beginPath();
      ctx.lineTo(150, 245);
      ctx.lineTo(150, 10);
      ctx.lineTo(240, 10);
      ctx.lineTo(240, 50);
      ctx.stroke();
    }
  };

  useEffect(() => {
    resetCanvas();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (failCount > 0) {
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(240, 70, 20, 0, Math.PI * 2, true);
        ctx.stroke();
      }
      if (failCount > 1) {
        if (canvas.getContext) {
          const ctx = canvas.getContext('2d');
          ctx.beginPath();
          ctx.moveTo(240, 90);
          ctx.lineTo(220, 115);
          ctx.stroke();
        }
        if (failCount > 2) {
          if (canvas.getContext) {
            const ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.moveTo(240, 90);
            ctx.lineTo(260, 115);
            ctx.stroke();
          }
          if (failCount > 3) {
            if (canvas.getContext) {
              const ctx = canvas.getContext('2d');
              ctx.beginPath();
              ctx.moveTo(240, 90);
              ctx.lineTo(240, 170);
              ctx.stroke();
            }
            if (failCount > 4) {
              if (canvas.getContext) {
                const ctx = canvas.getContext('2d');
                ctx.lineTo(220, 195);
                ctx.stroke();
              }
              if (failCount > 5) {
                if (canvas.getContext) {
                  const ctx = canvas.getContext('2d');
                  ctx.beginPath();
                  ctx.moveTo(240, 170);
                  ctx.lineTo(260, 195);
                  ctx.stroke();
                }
                setFailCount(0);
                setCorrectAlphabets([]);
                resetCanvas();
              }
            }
          }
        }
      }
    }
  }, [failCount]);

  return <canvas ref={canvasRef} />;
}

export default HangmanCanvas;
