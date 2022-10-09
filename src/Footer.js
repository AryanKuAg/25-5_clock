import React, {useState} from "react";

function Footer({reset, start, pause}) {

  return (
    <div className="flex justify-around mt-8 mx-8">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="cursor-pointer" id="start_stop" onClick={() => {
     start();
      }}>
        <path fill="#fff" d="M14.9 39.95V7.75l25.25 16.1Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="cursor-pointer" onClick={() => {
     pause();
      }}>
        <path fill="#fff" d="M26.2 40.1V7.85h13.95V40.1Zm-18.35 0V7.85H21.8V40.1Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" className="cursor-pointer" onClick={()=> {reset(); }} id="reset">
        <path fill="#fff" d="M16.8 38.35q-5.65-2.2-9.15-7.175T4.15 19.95q0-1.3.2-2.525.2-1.225.6-2.475l-2.75 1.6-2.3-3.9 10-5.75 5.75 9.9-3.9 2.3-2.15-3.6q-.45 1.2-.625 2.275T8.8 20.05q0 5.1 2.9 8.975t7.45 5.325ZM30.85 14.3V9.7H35q-2.05-2.4-4.95-3.675Q27.15 4.75 24 4.75q-2.8 0-5.275.975Q16.25 6.7 14.35 8.5L12 4.4q2.4-1.95 5.45-3.1Q20.5.15 23.95.15q3.95 0 7.55 1.55 3.6 1.55 6.35 4.3V2.7h4.6v11.6Zm-.8 30.25-10-5.8 5.8-9.9 3.85 2.25-1.9 3.45q5.05-1.15 8.25-5.175t3.2-9.325q0-.7-.125-1.375T38.9 17.3h4.55q.15.7.275 1.375.125.675.125 1.325 0 6.75-4.025 11.95Q35.8 37.15 29.4 39l2.95 1.65Z" />
      </svg>
    </div>
  );
}

export default Footer;
