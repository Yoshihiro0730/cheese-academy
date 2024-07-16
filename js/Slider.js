// script.js
document.addEventListener('DOMContentLoaded', () => {
    const sliderTrack = document.querySelector('.middle-img-container');
    const slides = Array.from(sliderTrack.children);
    const slideWidth = slides[0].getBoundingClientRect().width;

    let currentPosition = 0;

    const animate = () => {
        currentPosition -= 1; // スクロール速度を調整
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;

        // 最後の画像がスクロールされたら、最初の画像に戻る
        if (currentPosition <= -slideWidth * slides.length / 2) {
            currentPosition = 0;
        }

        requestAnimationFrame(animate);
    };

    animate();
});
