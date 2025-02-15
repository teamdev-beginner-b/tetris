import { updateScoreDisplay } from "./line_clear.js";
export function checkCollision(mino, field) {
  // 現在の回転状態に合わせた座標配列を使用する
  const currentShape = mino.shape[mino.rotation];
  const posX = mino.x;
  const posY = mino.y;
  
  // 各ブロックについて衝突判定を行う
  for (const block of currentShape) {
    const x = posX + block[0];
    const y = posY + block[1];
    
    // 横または縦の範囲外の場合
    if (x < 0 || x >= field.cols || y >= field.rows) {
      return true;
    }
    
    // フィールド上にすでにブロックが固定されている場合
    if (field.grid[y][x] !== null) {
      return true;
    }
  }
  return false;
}
export function clearFullRows(field) {
  const initialRowCount = field.rows;
  // 満杯でない行をフィルタリング
  const newGrid = field.grid.filter(row => row.some(cell => cell === null));
  const clearedRows = initialRowCount - newGrid.length;
  // 空の行を上部に追加して、grid の行数を元に戻す
  for (let i = 0; i < clearedRows; i++) {
    newGrid.unshift(Array(field.cols).fill(null));
  }
  // 新しい grid をフィールドに設定
  field.grid = newGrid;
  // スコア更新処理
  if (clearedRows > 0) {
    // 1行につき100点の例
    window.score = 0;
    window.score = (window.score || 0) + clearedRows * 100;
    updateScoreDisplay(window.score);
  }
  return clearedRows;
}
