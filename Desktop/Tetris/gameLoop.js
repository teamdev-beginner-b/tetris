// ゲームループ管理関数
// 引数:
// - field: フィールドの状態（ブロックの配置情報）
// - currentMino: 現在のミノオブジェクト
import { generateMino } from "./generateMino.js";
import { checkCollision } from "./collision.js";
import { is_RowFull } from "./line_clear.js";

export function gameLoop(field, currentMino) {
  // 一定時間ごとにミノを自動的に落下させる
  setInterval(() => {
    currentMino.y++; // ミノを1段落下

    // 衝突チェック
    if (checkCollision(currentMino, field)) {
      currentMino.y--; // 衝突した場合は1段戻す
      lockMino(field, currentMino); // ミノを固定
      currentMino = generateMino(); // 新しいミノを生成
      is_RowFull(field); // ラインが埋まっている場合は消去
    }
  }, 500); // 500msごとに実行
}

// ミノをフィールドに固定する関数
// 引数:
// - field: フィールドの状態
// - mino: 固定するミノオブジェクト
function lockMino(field, mino) {
  for (let block of mino.blocks) {
    field[block.y][block.x] = mino.color; // ブロックの位置にミノの色を設定
  }
}
