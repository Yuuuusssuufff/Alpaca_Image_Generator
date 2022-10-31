import React, { useState } from "react";
import "./App.css";

const assets = require("../src/assets");

function App() {
  const obj = {
    ears: assets.ears.default,
    nose: assets.nose.nose,
    legs: assets.legs.default,
    accessories: assets.accessories.headphones,
    backgrounds: assets.backgrounds.blue50,
    mouths: assets.mouths.default,
    necks: assets.necks.default,
    eyes: assets.eyes.default,
    hairs: assets.hairs.default,
  };

  const [setUp, setSetUp] = useState(obj);
  const [setting, setSetting] = useState(assets["accessories"]);

  const {
    ears,
    nose,
    legs,
    accessories,
    backgrounds,
    mouths,
    necks,
    eyes,
    hairs,
  } = setUp;

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

  return (
    <div className="page">
      <main
        className="container"
        style={{
          backgroundImage: `url('${backgrounds}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "cover",
          cursor: "pointer",
        }}
      >
        <section className="section">
          <div className="image_section">
            <img className="accessory" src={accessories} alt="accessory" />
            <img className="ear" src={ears} alt="ear" />
            <img className="hair" src={hairs} alt="hair" />
            <img className="eye" src={eyes} alt="eye" />
            <img className="neck" src={necks} alt="neck" />
            <img className="mouth" src={mouths} alt="mouth" />
            <img className="nose" src={nose} alt="noses" />
            <img className="leg" src={legs} alt="leg" />
          </div>
          <div className="button">
            <button onClick={handleRandom}>Random</button>
            <button>Download</button>
          </div>
        </section>
        <section className="section">
          <div className="button_section">
            <div className="button">
              {buttonList.map((button) => (
                <button
                  onClick={handleMain}
                  value={button.toLowerCase()}
                  name={button.toLowerCase()}
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="button">
              {Object.keys(setting).map((but) => (
                <button name={but} value={but} onClick={handlePart}>
                  {but}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
