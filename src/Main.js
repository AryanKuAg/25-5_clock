import React from "react";

function Main({timer, getTime}) {
  return (
    <div className="w-full rounded-full border-8 border-blue-900 p-4 my-4 flex flex-col items-center">
      <p className="text-2xl" id="timer-label">Session</p>
      <p className="text-8xl" id="time-left">{getTime(timer)}</p>
    </div>
  );
}

export default Main;
