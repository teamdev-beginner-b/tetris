// Blockクラス: テトリスの最小単位である1つのブロックを表現するクラス
class Block {
  // コンストラクタ: ブロックの位置 (x, y) を初期化する
  constructor(x, y) {
    this.x = x; // ブロックの横位置（列番号）
    this.y = y; // ブロックの縦位置（行番号）
  }

  // drawメソッド: ブロックをキャンバス上に描画する
  draw(ctx, blockSize) {
    ctx.fillStyle = "blue"; // ブロックの色を設定
    ctx.fillRect(this.x * blockSize, this.y * blockSize, blockSize, blockSize); // ブロックを描画
  }
}

export default Block;
