import React, { useState } from "react";
import audio from "./asset/Jinsei_wa_Senjou_da.mp3";
import musicback from "./asset/musicback.jpg";

const App = () => {
  const [playerState, setPlayerState] = useState({
    spin: "",
    playing: "Play"
  });

  return (
    <div className="container w-full">
      <div className="flex flex-col items-center justify-center h-screen w-full">
        <h1 className="absolute top-0 mt-16 font-mono text-3xl md:text-5xl text-white subpixel-antialiased">
          MUSIC DON'T LIE.
        </h1>
        <div
          className={`box shadow-custom w-64 h-64 md:w-96 md:h-96 items-center bg-contain ${playerState.spin}`}
          style={{ backgroundImage: `url(${musicback})` }}
        >
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <audio id="audio" src={audio} type="audio/mpeg" />
        <p className="text-white mt-16 text-xl md:text-3xl">
          Kalen Anzai – Jinsei wa Senjou da
        </p>
        <button
          onClick={e => {
            const player = document.querySelector("#audio");
            if (playerState.spin === "") {
              player.play();
              setPlayerState({ spin: "run", playing: "Pause" });
            } else {
              player.pause();
              setPlayerState({ spin: "", playing: "Play" });
            }
          }}
          className="absolute w-20 mx-auto mb-10 bottom-0 shadow w-32 h-12 bg-gray-300 hover:bg-gray-400 text-gray-800 bxld py-2 py-2 px-4 rounded"
        >
          {playerState.playing}
        </button>
      </div>
    </div>
  );
};

export default App;
