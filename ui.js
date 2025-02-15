export function updateNextMinoDisplay(nextMino) {
    const nextMinoElem = document.getElementById("next-mino"); // 次のミノ表示用のHTML要素を取得
    if (!nextMinoElem) {
        console.error("Next mino element not found!");
        return;
    }

    nextMinoElem.innerHTML = ""; // 既存の表示をクリア

    // ミノのブロックを表示
    if (nextMino && nextMino.shape && nextMino.shape[0]) {
        for (let block of nextMino.shape[0]) { // 次のミノは初期回転状態を表示
            const div = document.createElement("div"); // 各ブロック用のdivを作成
            div.style.position = "absolute";
            div.style.width = "20px"; // ブロックサイズ
            div.style.height = "20px"; // ブロックサイズ
            div.style.backgroundColor = nextMino.color; // ミノの色を設定
            div.style.left = `${(block[0] + 2) * 20}px`; // 適切な位置にオフセット
            div.style.top = `${(block[1] + 1) * 20}px`; // 適切な位置にオフセット
            nextMinoElem.appendChild(div); // HTML要素に追加
        }
    } else {
        console.error("Next mino is not properly defined!");
    }
}
export function renderField(field, currentMino, canvasContext) {
    const grid = field && field.grid ? field.grid : field;
    const blockSize = field.blockSize || 30;
  
    if (!grid || !grid[0]) {
      console.error("grid is not properly defined!", grid);
      return;
    }
    const canvasWidth = grid[0].length * blockSize;
    const canvasHeight = grid.length * blockSize;
  
    // キャンバスをクリア
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
  
    // フィールドの固定ブロックを描画
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[y].length; x++) {
        if (grid[y][x] !== null) {
          canvasContext.fillStyle = grid[y][x];
          canvasContext.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
        }
      }
    }
  
    // 現在のミノ（テトリミノ）を描画
    if (currentMino && currentMino.shape) {
      const currentShape = currentMino.shape[currentMino.rotation]; // 現在の回転状態の座標配列
      canvasContext.fillStyle = currentMino.color;
      for (let block of currentShape) {
        // block は [dx, dy] の配列
        const x = currentMino.x + block[0];
        const y = currentMino.y + block[1];
        canvasContext.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
      }
    } else {
      console.error("Current mino is not properly defined!");
    }
  }
