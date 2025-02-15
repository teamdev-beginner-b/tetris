import { renderField } from "./ui.js";
import { generateMino } from "./generateMino.js";
import { checkCollision } from "./collision.js";
import { clearFullRows } from "./collision.js"; // clearFullRows をインポート
     
export function gameLoop(field, canvasContext) {
  let lastTime = 0;
  const interval = 500; // 500msごとにミノを落下
  let gameOver = false;

  function isGameOver(field) {
    for (let x = 0; x < field.cols; x++) {
      if (field.grid[0][x] !== null) {
        return true;
      }
    }
    return false;
  }

  function loop(timestamp) {
    if (timestamp - lastTime > interval) {
      lastTime = timestamp;
      window.currentMino.y++; // ミノを1段下に移動
      
      if (checkCollision(window.currentMino, field)) {
        window.currentMino.y--; // 衝突したら戻す
        lockMino(field, window.currentMino);
        
        // 最初にロックしたミノの後、満杯行を削除する
        clearFullRows(field);
        
        // 新しいミノを生成する
        window.currentMino = generateMino();
        
        if (isGameOver(field)) {
          alert("Game Over");
          gameOver = true;
        }
      }
      renderField(field, window.currentMino, canvasContext);
    }
    if (!gameOver) {
      requestAnimationFrame(loop);
    }
  }
  requestAnimationFrame(loop);
}

function lockMino(field, mino) {
  const shape = mino.shape[mino.rotation];
  for (let [dx, dy] of shape) {
    const x = mino.x + dx;
    const y = mino.y + dy;
    if (y < 0 || y >= field.rows || x < 0 || x >= field.cols) continue;
    field.grid[y][x] = mino.color;
  }
}
