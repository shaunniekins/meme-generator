import React, { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageLoaded, setImageLoaded] = React.useState(false);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
    setImageLoaded(false); // reset the imageLoaded state whenever a new image is fetched
  }

  return (
    <main className="content">
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form--input"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="form--input"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img
          src={memeImage}
          alt={memesData.data.memes.name}
          className="meme--img"
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded && (
          <>
            <h2 className="meme--top">{topText}</h2>
            <h2 className="meme--bottom">{bottomText}</h2>
          </>
        )}
      </div>
    </main>
  );
}
