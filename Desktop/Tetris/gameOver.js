// ゲームオーバー判定関数
// 引数:
// - field: フィールドの状態（ブロックの配置情報）
export function isGameOver(field) {
  for (let x = 0; x < field[0].length; x++) {
    // フィールドの一番上にブロックが存在する場合、ゲームオーバー
    if (field[0][x] !== null) {
      return true; // ゲームオーバー
    }
  }
  return false; // ゲーム継続
}
