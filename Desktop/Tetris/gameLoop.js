import {renderField} from "./ui.js"; // UI描画関数をインポート
import {generateMino}　from "./generateMino.js";
import {checkCollision}　from "./collision.js";
import {is_RowFull}　from "./line_clear.js";

export function gameLoop(field, currentMino, canvasContext) {
    let lastTime = 0;
    const interval = 500; // 500msごとにミノを落下

    function loop(timestamp) {
        if (timestamp - lastTime > interval) {
            lastTime = timestamp;

            currentMino.y++; // ミノを1段落下

            // 衝突チェック
            if (checkCollision(currentMino, field)) {
                currentMino.y--; // 衝突した場合は1段戻す
                lockMino(field, currentMino); // ミノを固定
                currentMino = generateMino(); // 新しいミノを生成
                is_RowFull(field); // ラインが埋まっている場合は消去
            }

            // フィールドと現在のミノを描画
            renderField(field, currentMino, canvasContext);
        }

        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
}

function lockMino(field, mino) {
    for (let block of mino.blocks) {
        field[block.y][block.x] = mino.color; // ブロックの位置にミノの色を設定
    }
}
