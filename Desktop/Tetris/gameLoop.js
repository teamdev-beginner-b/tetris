import { generateMino } from "./generateMino.js";
import { checkCollision } from "./collision.js";
import { is_RowFull } from "./line_clear.js";
import { isGameOver } from "./gameOver.js";

export function gameLoop(field) {
  let currentMino = generateMino(); // 最初のミノを生成

  const interval = setInterval(() => {
    currentMino.y++; // ミノを1段落下

    // 衝突チェック
    if (checkCollision(currentMino, field)) {
      currentMino.y--; // 衝突した場合は1段戻す
      lockMino(field, currentMino); // ミノをフィールドに固定

      // ゲームオーバー判定
      if (isGameOver(field)) {
        clearInterval(interval); // ゲームループを停止
        alert("Game Over!"); // ゲームオーバーのメッセージを表示
        location.reload(); // ゲームをリロードして再スタート
      }

      currentMino = generateMino(); // 新しいミノを生成
      is_RowFull(field); // ラインが埋まっている場合は消去
    }
  }, 500); // 500msごとに実行
}

// ミノをフィールドに固定する関数
function lockMino(field, mino) {
  const rotation = mino.shape[mino.rotation];
  for (let block of rotation) {
    const x = block[0] + mino.x;
    const y = block[1] + mino.y;
    field[y][x] = mino.color; // ブロックの位置にミノの色を設定
  }
}
