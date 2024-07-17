import { useState } from "react";
import "./App.css";
import Image from "./Image";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Image />
        </>
    );
}

export default App;
