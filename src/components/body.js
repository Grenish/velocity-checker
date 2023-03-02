import React from "react";
import { useState } from "react";

const Body = () => {
  const [speed, setSpeed] = useState("");

  function testSpeed() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://www.w3.org/StyleSheets/TR/W3C-REC.css"
    );
    xhr.responseType = "blob";
    const start = new Date().getTime();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const end = new Date().getTime();
        const time = end - start;
        const speed = Math.round((((5 / (time / 1000)) * 8) / 1000000) * 10) / 10;
        setSpeed(speed);
        console.log(speed);
        
      }
    };
    xhr.send();
  }
  return (
    <section className="w-full flex justify-center">
      <div className="sm:w-[50%] w-[90%] p-10 bg-[#00000082] backdrop-blur-sm rounded-3xl my-[100px] flex flex-col text-center justify-center">
        <span className="sm:text-2xl text-xl text-Snow-500">
          Test Your Internet Speed
        </span>
        <div className="sm:text-[4rem] text-[3rem] text-Snow-500 p-3">
          <span>
            <p>{speed ? `${speed} Mbps` : null}</p>
          </span>
          {/* <span>Mbps</span> */}
        </div>
        <div className="sm:p-3 p-2">
          <button
            onClick={testSpeed}
            className="bg-Snow-200 hover:bg-Snow-300 p-4 rounded-xl"
          >
            Check Speed
          </button>
        </div>
      </div>
    </section>
  );
};

export default Body;
