import "../css/Keyboard.css";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Keyboard() {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <div className="keyboard-row-letter">Q</div>
        <div className="keyboard-row-letter">W</div>
        <div className="keyboard-row-letter">E</div>
        <div className="keyboard-row-letter">R</div>
        <div className="keyboard-row-letter">T</div>
        <div className="keyboard-row-letter">Y</div>
        <div className="keyboard-row-letter">U</div>
        <div className="keyboard-row-letter">I</div>
        <div className="keyboard-row-letter">O</div>
        <div className="keyboard-row-letter">P</div>
      </div>
      <div className="keyboard-row">
        <div className="keyboard-row-letter">A</div>
        <div className="keyboard-row-letter">S</div>
        <div className="keyboard-row-letter">D</div>
        <div className="keyboard-row-letter">F</div>
        <div className="keyboard-row-letter">G</div>
        <div className="keyboard-row-letter">H</div>
        <div className="keyboard-row-letter">J</div>
        <div className="keyboard-row-letter">K</div>
        <div className="keyboard-row-letter">L</div>
      </div>
      <div className="keyboard-row">
        <div className="keyboard-row-button">ENTER</div>
        <div className="keyboard-row-letter">Z</div>
        <div className="keyboard-row-letter">X</div>
        <div className="keyboard-row-letter">C</div>
        <div className="keyboard-row-letter">V</div>
        <div className="keyboard-row-letter">B</div>
        <div className="keyboard-row-letter">N</div>
        <div className="keyboard-row-letter">M</div>
        <div className="keyboard-row-button">
          <DeleteIcon></DeleteIcon>
        </div>
      </div>
    </div>
  );
}
