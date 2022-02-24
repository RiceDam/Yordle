import { useEffect } from "react";
import easyWordList from "../word-lists/words-easy.txt";
import "../css/Game.css";

function Game() {
  useEffect(() => {
    let index = 0;
    let currentRow = 0;
    let word = "teeth";
    let guess = [];
    const pickWord = (list) => {
      const random = Math.floor(Math.random() * list.length);
      word = list[random];
    };
    const fetchEasyWords = async () => {
      fetch(easyWordList)
        .then((res) => res.text())
        .then((text) => {
          const words = text.split("\r\n");
          pickWord(words);
          console.log(word);
        });
    };
    fetchEasyWords();
    const keyDown = (e) => {
      if (!e.repeat) {
        const pattern = /[a-zA-Z]+/g;
        if (pattern.test(e.key) && e.key.length === 1) {
          const current = document.getElementById("current");
          if (index < current.children.length) {
            current.children[index].innerHTML = e.key;
            index++;
            guess.push(e.key);
          }
        } else if (e.key === "Backspace") {
          const current = document.getElementById("current");
          if (index > 0) {
            index--;
            current.children[index].innerHTML = "";
            guess.pop();
          }
        } else if (e.key === "Enter") {
          if (guess.length === 5) {
            let temp = guess.join("");
            const game = document.getElementById("game");
            const row = game.children[currentRow];
            row.removeAttribute("id");
            if (word.toLowerCase() === temp) {
              for (let i = 0; i < guess.length; i++) {
                row.children[i].style.backgroundColor = "#388e3c";
              }
              document.removeEventListener("keydown", keyDown);
            } else {
              for (let i = 0; i < guess.length; i++) {
                if (word.toLowerCase().charAt(i) === guess[i]) {
                  row.children[i].style.backgroundColor = "#388e3c";
                } else if (word.toLowerCase().indexOf(guess[i]) !== -1) {
                  row.children[i].style.backgroundColor = "#ffab00";
                } else {
                  row.children[i].style.backgroundColor = "#9e9e9e";
                }
              }
              if (currentRow < game.children.length - 1) {
                currentRow++;
              } else {
                document.removeEventListener("keydown", keyDown);
              }
              const next = game.children[currentRow];
              next.setAttribute("id", "current");
              guess = [];
              index = 0;
            }
          }
        }
      }
    };
    document.addEventListener("keydown", keyDown);
  }, []);

  return (
    <div>
      <div id="game" className="game">
        <div className="row" id="current">
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
        </div>

        <div className="row">
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
        </div>

        <div className="row">
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
        </div>

        <div className="row">
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
        </div>

        <div className="row">
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
        </div>

        <div className="row">
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
          <div className="letter"></div>
        </div>
      </div>
    </div>
  );
}

export default Game;
