import { useEffect } from "react";
import easyWordList from "../word-lists/words-easy.txt";
import "../css/Game.css";

function Game() {
    useEffect(() => {
        let index = 0;
        let currentRow = 0;
        let word = "";
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
        const findCharPositions = (word, char) => {
            let positions = [];
            let pos = word.indexOf(char);
            while (pos !== -1) {
                positions.push(pos);
                pos = word.indexOf(char, pos + 1);
            }
            return positions;
        }
        const keyDown = (e) => {
            if (!e.repeat) {
                const pattern = /[a-zA-Z]+/g;
                if (pattern.test(e.key) && e.key.length === 1) {
                    const current = document.getElementById("current");
                    if (index < current.children.length) {
                        current.children[index].innerHTML = e.key.toUpperCase();
                        index++;
                        guess.push(e.key.toUpperCase());
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
                        let counted_pos = new Set();
                        const game = document.getElementById("game");
                        const row = game.children[currentRow];
                        row.removeAttribute("id");
                        for (let i = 0; i < row.children.length; i++) {
                            row.children[i].classList.add("grey-overlay");
                        }
                        for (let i = 0; i < guess.length; i++) {
                            if (word.charAt(i) === guess[i]) {
                                row.children[i].classList.replace("grey-overlay", "green-overlay");
                                counted_pos.add(i);
                            }
                        }
                        for (let i = 0; i < guess.length; i++) {
                            if (word.includes(guess[i]) && !row.children[i].classList.contains("green-overlay")) {
                                let positions = findCharPositions(word, guess[i]);
                                for (let pos of positions) {
                                    if (!counted_pos.has(pos)) {
                                        row.children[i].classList.replace("grey-overlay", "yellow-overlay");
                                        counted_pos.add(pos);
                                        break;
                                    }
                                }
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
