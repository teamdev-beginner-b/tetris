const col = 10; // 横の長さ
const row = 20; // 縦の長さ
let score = 0;

export function updateScoreDisplay(newScore) {
  console.log("updateScoreDisplay", newScore);
  const scoreElem = document.getElementById("score");
  scoreElem.innerText = `Score: ${newScore}`;
}

export function is_RowFull(field) {
  const grid = field.grid;
  // 下の行からチェックしていく
  for (let y = row - 1; y >= 0; y--) {
    let filled = true;
    for (let x = 0; x < col; x++) {
      if (grid[y][x] === null) {
        filled = false;
        break;
      }
    }
    if (filled) {
      // スコアを更新し、最新のスコアを渡す
      score += 100;
      updateScoreDisplay(score);
      // 該当行を消去し、上の行を下へシフト
      for (let y2 = y; y2 > 0; y2--) {
        for (let x = 0; x < col; x++) {
          grid[y2][x] = grid[y2 - 1][x];
        }
      }
      // 一番上の行をクリア
      for (let x = 0; x < col; x++) {
        grid[0][x] = null;
      }
      // 行がシフトするため、同じ y 番号の行を再チェック
      y++;
    }
  }
 }
