<document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');
    let currentIndex = 0;
    let carouselInterval;
    
    // 初始化轮播
    function initCarousel() {
        showSlide(currentIndex);
        startAutoPlay();
        
        // 事件监听
        prevButton.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
        
        nextButton.addEventListener('click', () => {
            stopAutoPlay();
            nextSlide();
            startAutoPlay();
        });
        
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                stopAutoPlay();
                goToSlide(index);
                startAutoPlay();
            });
        });
    }
    
    // 显示指定幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        carouselItems.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.replace('opacity-100', 'opacity-50'));
        
        // 显示当前幻灯片
        carouselItems[index].classList.add('active');
        indicators[index].classList.replace('opacity-50', 'opacity-100');
    }
    
    // 上一张幻灯片
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }
    
    // 下一张幻灯片
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }
    
    // 跳转到指定幻灯片
    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }
    
    // 开始自动播放
    function startAutoPlay() {
        carouselInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
    }
    
    // 停止自动播放
    function stopAutoPlay() {
        clearInterval(carouselInterval);
    }
    
    // 初始化轮播
    initCarousel();
});
