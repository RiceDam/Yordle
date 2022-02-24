import './App.css';
import { useEffect } from 'react';
import easyWordList from './word-lists/words-easy.txt';

function App() {

  useEffect(() => {
    let index = 0;
    let currentRow = 0;
    let word = "";
    let guess = [];
    const pickWord = (list) => {
      const random = Math.floor(Math.random() * list.length);
      word = list[random];
    }
    const fetchEasyWords = async () => {
      fetch(easyWordList)
        .then(res => res.text())
        .then(text => {
          const words = text.split('\r\n');
          pickWord(words);
          console.log(word);
        });
    }
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
        } else if (e.key === 'Backspace') {
          const current = document.getElementById("current");
          if (index > 0) {
            index--;
            current.children[index].innerHTML = "";
            guess.pop();
          }
        } else if (e.key === 'Enter') {
          if (guess.length === 5) {
            let temp = guess.join('');
            const game = document.getElementById("game");
            const row = game.children[currentRow];
            row.removeAttribute('id');
            for (let i = 0; i < guess.length; i++) {
              if (word.toLowerCase() === temp) {
                row.children[i].style.backgroundColor = "green";
              }
              else if (word.toLowerCase().indexOf(guess[i]) === i) {
                row.children[i].style.backgroundColor = "green";
              } else if (word.toLowerCase().indexOf(guess[i]) !== -1) {
                row.children[i].style.backgroundColor = "yellow";
              } else {
                row.children[i].style.backgroundColor = "grey";
              }
            }
            if (word.toLowerCase() === temp) {
              document.removeEventListener('keydown', keyDown);
            }
            if (currentRow < game.children.length-1) {
              currentRow++;
            } else {
              document.removeEventListener('keydown', keyDown);
            }
            const next = game.children[currentRow];
            next.setAttribute('id', 'current');
            guess = [];
            index = 0;
          }
        }
      }
    }
    document.addEventListener('keydown', keyDown);
  }, []);


  return (
    <div className="App">
      <div id="game" >
        <div className="row" id="current">
          <div className="letter first"></div>
          <div className="letter second"></div>
          <div className="letter third"></div>
          <div className="letter fourth"></div>
          <div className="letter fifth"></div>
        </div>

        <div className="row">
          <div className="letter first"></div>
          <div className="letter second"></div>
          <div className="letter third"></div>
          <div className="letter fourth"></div>
          <div className="letter fifth"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
