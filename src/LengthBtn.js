import React from "react";

function LengthBtn({ text, value , set, id, decrementId, incrementId}) {
  return (
    <div className="flex flex-col items-center" >
      <p className="text-2xl font-bold">{text}</p>
      <div className="flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => {
          if(value >= 60) return;
          set(pre => pre + 1)
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" id={incrementId}>
            <path
              fill="#fff"
              d="m14.2 31.8-3.3-3.3L24 15.45l13.1 13-3.25 3.3-9.85-9.9Z"
            />
          </svg>
        </div>
        <p className="font-bold mx-2 text-lg" id={id}>{value}</p>
        <div className="cursor-pointer" onClick={() =>{
          if(value <= 0) return;
          set(pre => pre - 1)
        }}>
          {" "}
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" id={decrementId}>
            <path
              fill="#fff"
              d="M24 31.8 10.9 18.7l3.3-3.25 9.8 9.9 9.85-9.85 3.25 3.25Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LengthBtn;
