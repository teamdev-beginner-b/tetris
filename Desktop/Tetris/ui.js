// 次のミノを画面に表示する関数
// 引数:
// - nextMino: 次に登場するミノオブジェクト
export function updateNextMinoDisplay(nextMino) {
    const nextMinoElem = document.getElementById("next-mino"); // 次のミノ表示用のHTML要素を取得
    nextMinoElem.innerHTML = ""; // 既存の表示をクリア

    // ミノのブロックを表示
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
}

// フィールドと現在のミノを描画する関数
export function renderField(field, currentMino, canvasContext) {
    const blockSize = 30; // 各ブロックのサイズ
    const canvasWidth = field[0].length * blockSize; // キャンバスの幅
    const canvasHeight = field.length * blockSize; // キャンバスの高さ

    // キャンバスをクリア
    canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);

    // フィールドを描画
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[y].length; x++) {
            if (field[y][x] !== null) {
                canvasContext.fillStyle = field[y][x];
                canvasContext.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
            }
        }
    }

    // 現在のミノを描画
    canvasContext.fillStyle = currentMino.color;
    for (let block of currentMino.blocks) {
        const x = block.x + currentMino.x;
        const y = block.y + currentMino.y;
        canvasContext.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
    }
}
