// 次のミノを画面に表示する関数
// 引数:
// - nextMino: 次に登場するミノオブジェクト
export function updateNextMinoDisplay(nextMino) {
  const nextMinoElem = document.getElementById("next-mino"); // 次のミノ表示用のHTML要素を取得
  nextMinoElem.innerHTML = ""; // 既存の表示をクリア

  // ミノのブロックを表示
  for (let block of nextMino.blocks) {
    const div = document.createElement("div"); // 各ブロック用のdivを作成
    div.style.left = `${block.x * 20}px`; // ブロックのX座標を設定
    div.style.top = `${block.y * 20}px`; // ブロックのY座標を設定
    nextMinoElem.appendChild(div); // HTML要素に追加
  }
}
