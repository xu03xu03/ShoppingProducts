// 處理愛心圖標的點擊事件
document.querySelectorAll('.heart-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('red');
    });
});
