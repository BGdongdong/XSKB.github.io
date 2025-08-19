document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevButton = document.getElementById('carouselPrev');
    const nextButton = document.getElementById('carouselNext');
    let currentIndex = 0;
    let carouselInterval;
    
    // 检查图片是否加载成功
    function checkImageLoad(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = () => reject(new Error(`图片加载失败: ${src}`));
        });
    }
    
    // 初始化轮播前检查所有图片
    async function initCarousel() {
        // 检查所有轮播图片
        const imageElements = document.querySelectorAll('#carousel img');
        for (let img of imageElements) {
            try {
                await checkImageLoad(img.src);
                console.log(`图片加载成功: ${img.src}`);
            } catch (error) {
                console.error(error);
                // 加载失败时显示占位图
                img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23cccccc'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'/%3E%3C/svg%3E";
            }
        }
        
        showSlide(currentIndex);
        startAutoPlay();
        
        // 绑定事件（添加错误处理）
        prevButton?.addEventListener('click', () => {
            stopAutoPlay();
            prevSlide();
            startAutoPlay();
        });
        
        nextButton?.addEventListener('click', () => {
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
        if (!carouselItems.length) return; // 避免空数组错误
        
        carouselItems.forEach(item => item.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.replace('opacity-100', 'opacity-50'));
        
        carouselItems[index].classList.add('active');
        indicators[index].classList.replace('opacity-50', 'opacity-100');
    }
    
    // 上一张/下一张幻灯片（添加边界检查）
    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }
    
    function goToSlide(index) {
        if (index >= 0 && index < carouselItems.length) {
            currentIndex = index;
            showSlide(currentIndex);
        }
    }
    
    function startAutoPlay() {
        carouselInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoPlay() {
        clearInterval(carouselInterval);
    }
    
    // 初始化轮播
    initCarousel();
});
