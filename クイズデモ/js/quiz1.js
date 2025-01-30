
const buttons = document.querySelectorAll('.quiz_btn button');
const quizAns = document.getElementById('quizAns');
const wrongAns = document.getElementById('wrongAns');
const nextBtnWrap = document.querySelector('.next_btn_wrap');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close');

// 各ボタンにクリックイベントを追加
for (const button of buttons) {
    button.addEventListener('click', () => {
        // 正解ボタンの場合
        if (button.dataset.correct === "true") {
            quizAns.style.display = 'block';
            wrongAns.style.display = 'none';
            modalText.textContent = '稲作は気候の影響を大きく受けます。平均気温が25度くらいで、日光がたくさんある事が重要です。昼夜の寒暖差が大きいとデンプンが米粒に多く残り、大きくて良質なお米が育ちます。雪解け水が豊富な地域では水不足の心配が少なく稲作に適しています。';
        } else {
            wrongAns.style.display = 'block';
            quizAns.style.display = 'none';
            modalText.textContent = '稲作は気候の影響を大きく受けます。平均気温が25度くらいで、日光がたくさんある事が重要です。昼夜の寒暖差が大きいとデンプンが米粒に多く残り、大きくて良質なお米が育ちます。雪解け水が豊富な地域では水不足の心配が少なく稲作に適しています。';
        }
        nextBtnWrap.style.display = 'block';
        modal.style.display = 'block';

        // すべてのボタンを無効化
        for (const btn of buttons) {
            btn.disabled = true;
        }
    }, { once: true }); // 一度だけイベントを実行
}

// モーダルウィンドウを閉じる
closeBtn.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 500); // アニメーションの時間に合わせて遅延を設定
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // アニメーションの時間に合わせて遅延を設定
    }
});