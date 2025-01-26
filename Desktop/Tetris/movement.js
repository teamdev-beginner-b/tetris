// ミノを移動させる関数
// 引数:
// - mino: 現在のミノオブジェクト（位置と回転情報を保持）
// - direction: "left"（左移動）, "right"（右移動）, "down"（下移動） のいずれかの方向を指定
function moveMino(mino, direction) {
  switch (direction) {
    case "left": // 左に移動
      mino.x -= 1; // ミノの x 座標を -1 減らす
      break;
    case "right": // 右に移動
      mino.x += 1; // ミノの x 座標を +1 増やす
      break;
    case "down": // 下に移動
      mino.y += 1; // ミノの y 座標を +1 増やす
      break;
  }
  return mino; // 更新後のミノオブジェクトを返す
}

// ミノを回転させる関数
// 引数:
// - mino: 現在のミノオブジェクト（位置と回転情報を保持）
// 機能:
// - rotation プロパティを更新し、次の回転状態に変更（0～3の範囲で循環）
function rotateMino(mino) {
  mino.rotation = (mino.rotation + 1) % 4; // rotation を 1 増やし、4で割った余りを設定（90°回転）
  return mino; // 更新後のミノオブジェクトを返す
}

// ユーザーのキー操作を受け取り、操作を反映させる機能（handleKeyPress.js）と連携しています。
// handleKeyPress.js から呼び出され、ミノの移動や回転処理を実行する部分を担当します。

// Exportして他のファイルから利用可能にする
export { moveMino, rotateMino };
