import React, { useEffect, useState } from "react";
import { data } from "./assets/url";

const Image = () => {
    const handleNext = () => {
        setActiveIdx((activateIdx + 1) % data.length);
    };

    const handlePrev = () => {
        if (activateIdx == 0) {
            setActiveIdx(data.length - 1);
        } else setActiveIdx(activateIdx - 1);
    };

    const [activateIdx, setActiveIdx] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            handleNext();
        }, 5000);
        return () => clearTimeout(timer);
    }, [activateIdx]);

    return (
        <div className="flex justify-center gap-5 p-5 m-4">
            <button onClick={handlePrev}>Prev</button>
            {data.map((url, i) => (
                <img
                    key={i}
                    className={
                        `w-[800px] h-[400px] ` +
                        (activateIdx == i ? "block" : "hidden")
                    }
                    src={url}
                    alt="wallpaper"
                ></img>
            ))}
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default Image;
