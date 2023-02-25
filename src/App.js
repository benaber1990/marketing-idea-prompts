import React, { useState } from "react";
import "./App.css";
import ChooseNewDeck from "./components/ChooseNewDeck";
import EX_DATA from "./misc/EX_DATA";

function App() {
  const [currentNum, setCurrentNum] = useState(0);

  const newNumberHandler = () => {
    return setCurrentNum(Math.trunc(Math.random() * 6));
  };

  const cardTitle = EX_DATA[currentNum].title;
  const cardInfo = EX_DATA[currentNum].info;
  const cardCategory = EX_DATA[currentNum].category;
  const cardImage = EX_DATA[currentNum].imageUrl;
  const cardActions = EX_DATA[currentNum].actions;
  const cardQuestion = EX_DATA[currentNum].question;
  const cardDescription = EX_DATA[currentNum].description;

  const deckNameTitle = "Marketing Idea Prompts";

  return (
    <div className="App">
      <div>
        <h1 style={{ color: "#fdfdfd" }}>{deckNameTitle}</h1>
      </div>

      {/* card */}
      <div className="CardContainer">
        <p
          style={{
            fontSize: 14,
            color: "#2f394d",
            marginBottom: "-10px",
          }}
        >
          {cardCategory}
        </p>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {cardTitle}
        </p>

        {/* <img
          src={cardImage}
          style={{
            height: "125px",
            width: "275px",
            borderWidth: "1px",
            borderColor: "#F1DAC4",
            borderStyle: "solid",
            borderRadius: "4px",
            marginTop: "-5px",
            marginBottom: "-5px",
            objectFit: "-moz-initial",
          }}
        /> */}

        <p>💡 {cardInfo}</p>

        <div style={{ textAlign: "center", paddingLeft: "0px" }}>
          <p>
            <i>{cardDescription}</i>
          </p>
          <div
            style={{
              backgroundColor: "#fefae0",
              paddingTop: "5px",
              paddingBottom: "5px",
              borderRadius: "4px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "-15px",
                marginTop: "10px",
              }}
            >
              Action
            </p>
            <p>{cardActions}</p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginBottom: "-15px",
              }}
            >
              Question
            </p>
            <p>{cardQuestion}</p>
          </div>
        </div>
        <div style={{ textAlign: "left" }}>
          <p style={{ fontSize: "12px" }}>002</p>
        </div>
      </div>

      {/* Below Card */}
      <button
        onClick={newNumberHandler}
        style={{
          backgroundColor: "#F4D35E",
          border: "none",
          paddingTop: "5px",
          paddingBottom: "5px",
          paddingRight: "8px",
          paddingLeft: "8px",
          borderRadius: "2px",
          marginBottom: "-10px",
        }}
      >
        Next Card
      </button>
      <p style={{ color: "#fdfdfd" }}>Generate the next prompt</p>

      <div style={{ color: "#fdfdfd", fontWeight: "bold" }}>
        <p style={{ color: "#fdfdfd", fontWeight: "bold" }}>How to Play</p>
      </div>
      <div style={{ width: "450px" }}>
        <p style={{ color: "#fdfdfd", marginTop: "-10px" }}>
          1 Player: Use the prompts on each card to spark ideas. Try to get your
          ideas to build up and follow on with each new card
        </p>
      </div>
      <div style={{ width: "450px" }}>
        <p style={{ color: "#fdfdfd", marginTop: "-10px" }}>
          2+ Players: Each player draws a card. Take it in turns to read out
          your card and discuss ideas, using each turn to stack up ideas from
          the previous person's card
        </p>
      </div>

      <ChooseNewDeck />
    </div>
  );
}

export default App;
