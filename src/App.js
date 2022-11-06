import React, { useState } from "react";
import "./App.css";
import ButtonSection from "./components/ButtonSection";
import ImageSection from "./components/ImageSection";
import html2canvas from "html2canvas";

const assets = require("./assets");

function App() {
  const obj = {
    nose: assets.nose.nose,
    legs: assets.legs.default,
    ears: assets.ears.default,
    accessories: assets.accessories.headphones,
    backgrounds: assets.backgrounds.blue50,
    mouths: assets.mouths.default,
    necks: assets.necks.default,
    eyes: assets.eyes.default,
    hairs: assets.hairs.default,
  };

  const [setUp, setSetUp] = useState(obj);
  const [setting, setSetting] = useState(assets["accessories"]);

  const buttonList = [
    "Accessories",
    "Backgrounds",
    "Ears",
    "Eyes",
    "Hairs",
    "Legs",
    "Mouths",
    "Necks",
  ];

  const handleMain = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const equi = Object.keys(assets).filter((ele) => name === ele);
    setSetting(assets[equi]);
  };

  const handlePart = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const select = Object.keys(assets).filter((sel) => assets[sel] === setting);
    const selected = select.toString();
    setSetUp((prev) => {
      return { ...prev, [selected]: setting[name] };
    });
  };

  const style = {
    backgroundImage: `url('${setUp.backgrounds}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "cover",
    cursor: "pointer",
  };

  const handleRandom = () => {
    Object.keys(assets).map((image) => {
      const randomIndex = Math.floor(
        Math.random() * Object.values(assets[image]).length
      );
      const randomPart = Object.values(assets[image])[randomIndex];
      setSetUp((prev) => {
        return { ...prev, [image]: randomPart };
      });
    });
  };
  const handleDownload = () => {
    html2canvas(document.querySelector(".image_section")).then((canvas) => {
      let image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      window.location.href = image;
    });
  };

  return (
    <div className="page">
      <main className="container" style={style}>
        <ImageSection
          setUp={setUp}
          handleDownload={handleDownload}
          handleRandom={handleRandom}
        />
        <ButtonSection
          setting={setting}
          buttonList={buttonList}
          handlePart={handlePart}
          handleMain={handleMain}
        />
      </main>
    </div>
  );
}

export default App;
