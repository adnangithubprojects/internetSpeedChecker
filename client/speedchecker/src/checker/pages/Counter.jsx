import React, { useEffect, useRef, useState } from "react";
import { FaFacebook } from "react-icons/fa";

// "end" parameter should be used as a props in the calling component.
export default function Counter({ start = 0, end, time = 50 }) {
  const [Count, setCount] = useState(500);

  const ref = useRef(start);
  const accumolator = end / 200;

  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumolator);
      if (result > end) return setCount(end);
      setCount(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, time);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end, start]);

  //   console.log(navigator.connection());

  return (
    <div>
      <div className="flex flex-col justify-center bg-black text-white items-center w-44 h-36">
        <h1>
          <FaFacebook />
        </h1>
        <p>{Count}</p>
        <p>couting</p>
      </div>
    </div>
  );
}
