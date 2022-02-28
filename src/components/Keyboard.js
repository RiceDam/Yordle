import "../css/Keyboard.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Keyboard() {
  const handleClick = (e) => {
    const key = new KeyboardEvent("keydown", {key: e.target.innerHTML});
    document.dispatchEvent(key);
  }

  const handleDelete = () => {
    const key = new KeyboardEvent("keydown", {key: "Backspace"});
    document.dispatchEvent(key);
  }

  const handleEnter = () => {
    const key = new KeyboardEvent("keydown", {key: "Enter"});
    document.dispatchEvent(key);
  }

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <div className="keyboard-row-letter" id="Q" onClick={handleClick}>Q</div>
        <div className="keyboard-row-letter" id="W" onClick={handleClick}>W</div>
        <div className="keyboard-row-letter" id="E" onClick={handleClick}>E</div>
        <div className="keyboard-row-letter" id="R" onClick={handleClick}>R</div>
        <div className="keyboard-row-letter" id="T" onClick={handleClick}>T</div>
        <div className="keyboard-row-letter" id="Y" onClick={handleClick}>Y</div>
        <div className="keyboard-row-letter" id="U" onClick={handleClick}>U</div>
        <div className="keyboard-row-letter" id="I" onClick={handleClick}>I</div>
        <div className="keyboard-row-letter" id="O" onClick={handleClick}>O</div>
        <div className="keyboard-row-letter" id="P" onClick={handleClick}>P</div>
      </div>
      <div className="keyboard-row">
        <div className="keyboard-row-letter" id="A" onClick={handleClick}>A</div>
        <div className="keyboard-row-letter" id="S" onClick={handleClick}>S</div>
        <div className="keyboard-row-letter" id="D" onClick={handleClick}>D</div>
        <div className="keyboard-row-letter" id="F" onClick={handleClick}>F</div>
        <div className="keyboard-row-letter" id="G" onClick={handleClick}>G</div>
        <div className="keyboard-row-letter" id="H" onClick={handleClick}>H</div>
        <div className="keyboard-row-letter" id="J" onClick={handleClick}>J</div>
        <div className="keyboard-row-letter" id="K" onClick={handleClick}>K</div>
        <div className="keyboard-row-letter" id="L" onClick={handleClick}>L</div>
      </div>
      <div className="keyboard-row">
        <div className="keyboard-row-button" onClick={handleEnter}>ENTER</div>
        <div className="keyboard-row-letter" id="Z" onClick={handleClick}>Z</div>
        <div className="keyboard-row-letter" id="X" onClick={handleClick}>X</div>
        <div className="keyboard-row-letter" id="C" onClick={handleClick}>C</div>
        <div className="keyboard-row-letter" id="V" onClick={handleClick}>V</div>
        <div className="keyboard-row-letter" id="B" onClick={handleClick}>B</div>
        <div className="keyboard-row-letter" id="N" onClick={handleClick}>N</div>
        <div className="keyboard-row-letter" id="M" onClick={handleClick}>M</div>
        <div className="keyboard-row-button" onClick={handleDelete}>
          <DeleteIcon></DeleteIcon>
        </div>
      </div>
    </div>
  );
}
