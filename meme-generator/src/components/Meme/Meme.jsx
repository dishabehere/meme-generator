import "../Meme/Meme.scss";
import { useRef } from "react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";

function Meme({ randomImg, topText, bottomText }) {
  
  const memeRef = useRef(null); // Create a reference to the meme container

  // Function to handle download
  const downloadMeme = () => {
    if (memeRef.current) {
      toPng(memeRef.current) // Convert the meme div to an image
        .then((dataUrl) => {
          saveAs(dataUrl, "meme.png"); // Save the image
        })
        .catch((err) => {
          console.error("Could not download the meme:", err);
        });
    }
  };

  return (
    <div className="meme">
      <div className="meme__img" ref={memeRef}> {/* Add ref to the div */}
        {randomImg === "" ? null : (
          <img className="meme__pic" src={randomImg} alt="meme" />
        )}
        {randomImg === "" ? null : <h2 className="meme__top">{topText}</h2>}
        {randomImg === "" ? null : <h2 className="meme__bottom">{bottomText}</h2>}
      </div>

      {/* Download Button */}
      {randomImg && (
        <button className="meme__download" onClick={downloadMeme}>
          Download Meme
        </button>
      )}
    </div>
  );
}

export default Meme;
