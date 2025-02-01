//stageの横の長さ
const row = 20;
//stageの縦の長さ
const col = 10;
//スコア
let score = 0;

// スコアを画面に表示するための関数
function updateScoreDisplay() {
    const scoreElem = document.getElementById("score"); // HTML要素を取得
    scoreElem.innerText = `Score: ${score}`; // スコアを表示
}

//ミノが横一列に並んだ時に消える機能
export function is_RowFull(stage) {
    for (let y = row - 1; y >= 0; ) {
        let filled = true;
        for (let x = 0; x < col; x++) {
            if (stage[x][y] == null) {
                filled = false;
                break;
            }
        }
        if (filled) {
            score += 100;
            updateScoreDisplay();
            
            for (let y2 = y; y2 > 0; y2--) {
                for (let x = 0; x < col; x++) {
                    stage[x][y2] = stage[x][y2 - 1];
                }
            }
            for (let x = 0; x < col; x++) {
                stage[x][0] = null;
            }
        } else {
            y--;
        }
    }
}
