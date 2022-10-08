import React, {useState} from "react";
import LengthBtn from "./LengthBtn";

function Header() {
    const [breakLength, setBreakLength] = useState(8)
    const [sessionLength, setSessionLength] = useState(25)
  return (
    <div>
      <h1 className="text-5xl font-bold my-8 text-center">25 + 5 Clock</h1>
      <div className="flex justify-between">
        <LengthBtn text="Break Length" value={breakLength} />
        <LengthBtn text="Session Length" value={sessionLength} />
      </div>
    </div>
  );
}

export default Header;
