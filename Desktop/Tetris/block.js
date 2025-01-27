// Blockクラス: テトリスの最小単位である1つのブロックを表現するクラス
export class Block {
  // コンストラクタ: ブロックの位置 (x, y) を初期化する
  constructor(x, y, color) {
    this.x = x; // ブロックの横位置（列番号）
    this.y = y; // ブロックの縦位置（行番号）
    this.color = color; // ブロックの色
  }

  // drawメソッド: ブロックをキャンバス上に描画する
  draw(ctx, blockSize) {
    ctx.fillStyle = this.color; // ブロックの色を設定
    ctx.fillRect(this.x * blockSize, this.y * blockSize, blockSize, blockSize); // ブロックを描画
  }
}
