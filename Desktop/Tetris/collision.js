// ミノが衝突するかを判定する関数
// 引数:
// - mino: 現在のミノオブジェクト（位置とブロック情報を含む）
// - field: フィールドの状態（ブロックの配置情報）
export function checkCollision(mino, field) {
  for (let block of mino.blocks) {
    // ブロックがフィールドの横範囲外または縦範囲外、または他のブロックと衝突しているかを確認
    if (
      block.x < 0 || block.x >= field[0].length || // 横の範囲外チェック
      block.y >= field.length ||                  // 縦の範囲外チェック
      field[block.y][block.x] !== null            // 衝突チェック（ブロックがすでに存在）
    ) {
      return true; // 衝突している場合は true を返す
    }
  }
  return false; // 衝突していない場合は false を返す
}
