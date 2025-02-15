import { checkCollision } from "./collision.js";

export function handleKeyPress(event, mino, field) {
  const newMino = { ...mino };

  switch (event.key) {
    case "ArrowLeft":
      newMino.x--;
      if (checkCollision(newMino, field)) {
        newMino.x++; // 衝突するなら元に戻す
      }
      break;
    case "ArrowRight":
      newMino.x++;
      if (checkCollision(newMino, field)) {
        newMino.x--; // 衝突するなら元に戻す
      }
      break;
    case "ArrowDown":
      newMino.y++;
      if (checkCollision(newMino, field)) {
        newMino.y--; // 衝突するなら元に戻す
      }
      break;
      case " ":
        // 回転処理：回転状態を進める
        newMino.rotation = (newMino.rotation + 1) % newMino.shape.length;
        if (checkCollision(newMino, field)) {
          // 衝突する場合は回転を元に戻す
          newMino.rotation = (newMino.rotation - 1 + newMino.shape.length) % newMino.shape.length;
        }
        break;
    default:
      return mino;
  }
  return newMino;
}
