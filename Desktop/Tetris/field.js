// Blockクラス: テトリスの最小単位である1つのブロックを表現するクラス
class Block {
  // コンストラクタ: ブロックの位置 (x, y) を初期化する
  constructor(x, y) {
    this.x = x; // ブロックの横位置（列番号）
    this.y = y; // ブロックの縦位置（行番号）
  }

  // drawメソッド: ブロックをキャンバス上に描画する
  draw() {
    push(); // 描画設定を保存（他の描画に影響を与えないようにする）
    let s = width / 12; // ブロックのサイズを計算（キャンバス幅を12で割る）

    // rect関数: キャンバス上に長方形を描画する
　　// rect(x, y, w, h) は、x, y で左上座標を指定し、w と h で幅と高さ（ここでは正方形の一辺の長さ）を設定する

    rect(s * this.x, s * this.y, s, s); // ブロックを描画 

    pop(); // 描画設定を復元
  }f
}
