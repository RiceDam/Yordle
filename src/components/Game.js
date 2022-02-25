import { useEffect } from 'react';
import easyWordList from '../word-lists/words-easy.txt';
import '../css/Game.css';

function Game() {

    useEffect(() => {
        let index = 0;
        let currentRow = 0;
        let word = "IVERN";
        let guess = [];
        // const pickWord = (list) => {
        //     const random = Math.floor(Math.random() * list.length);
        //     word = list[random].toLowerCase();
        // }
        // const fetchEasyWords = async () => {
        //     fetch(easyWordList)
        //         .then(res => res.text())
        //         .then(text => {
        //             const words = text.split('\r\n');
        //             pickWord(words);
        //             console.log(word);
        //         });
        // }
        // fetchEasyWords();
        const count = (str, find) => {
            return (str.split(find)).length - 1;
        }
        const countOccurences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
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
                } else if (e.key === 'Backspace') {
                    const current = document.getElementById("current");
                    if (index > 0) {
                        index--;
                        current.children[index].innerHTML = "";
                        guess.pop();
                    }
                } else if (e.key === 'Enter') {
                    if (guess.length === 5) {
                        let answer = guess.join('');
                        const game = document.getElementById("game");
                        const row = game.children[currentRow];
                        row.removeAttribute("id");
                        for (let i = 0; i < guess.length; i++) {
                            let letter = guess[i];
                            if (word.includes(letter)) {
                                if (word.charAt(i) === letter) {
                                    row.children[i].style.backgroundColor = "#388e3c";
                                    if (count(answer, letter) > count(word, letter)) {
                                        for (let j = 0; j < row.childNodes.length; j++) {
                                            if (row.children[j].innerText === letter && row.children[j].style.backgroundColor === '#ffab00') {
                                                row.childNodes[j].style.backgroundColor = '#9e9e9e';
                                                let index = guess.indexOf(letter);
                                                if (index !== -1) {
                                                    guess.splice(index, 1);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (countOccurences(guess, letter) <= count(word, letter)) {
                                        row.children[i].style.backgroundColor = '#ffab00';
                                        console.log(countOccurences(guess, letter));
                                    } else {
                                        row.children[i].style.backgroundColor = '#9e9e9e';
                                        console.log('grey');
                                    }
                                }
                            } else {
                                row.children[i].style.backgroundColor = '#9e9e9e';
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
        document.addEventListener('keydown', keyDown);
    }, []);


    return (
        <div>
            <div id="game" >
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