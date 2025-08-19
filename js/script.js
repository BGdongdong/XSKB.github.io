// 轮播图逻辑
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// 显示当前轮播项
function showItem(index) {
  carouselItems.forEach(item => item.style.display = 'none');
  carouselItems[index].style.display = 'block';
}

// 初始化
showItem(currentIndex);

// 下一个
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showItem(currentIndex);
});

// 上一个
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showItem(currentIndex);
});
