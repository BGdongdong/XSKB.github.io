document.addEventListener('DOMContentLoaded', function() {
    // 初始化主题
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    
    // 主题切换功能优化
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    // 初始化图标状态
    updateThemeIcons();
    
    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcons();
        
        // 添加按钮点击动画
        themeToggle.classList.add('scale-90');
        setTimeout(() => {
            themeToggle.classList.remove('scale-90');
        }, 200);
    });
    
    // 更新图标显示状态
    function updateThemeIcons() {
        const isDark = document.documentElement.classList.contains('dark');
        
        if (isDark) {
            // 暗色模式 - 显示月亮图标
            sunIcon.style.opacity = '0';
            sunIcon.style.transform = 'rotate(90deg) scale(0.8)';
            moonIcon.style.opacity = '1';
            moonIcon.style.transform = 'rotate(0deg) scale(1)';
        } else {
            // 亮色模式 - 显示太阳图标
            sunIcon.style.opacity = '1';
            sunIcon.style.transform = 'rotate(0deg) scale(1)';
            moonIcon.style.opacity = '0';
            moonIcon.style.transform = 'rotate(-90deg) scale(0.8)';
        }
    }
    
    // 返回顶部按钮功能
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 音乐播放按钮功能
    document.querySelectorAll('.fa-play, .fa-pause').forEach(button => {
        button.addEventListener('click', function() {
            // 切换播放/暂停状态
            if (this.classList.contains('fa-play')) {
                this.classList.remove('fa-play');
                this.classList.add('fa-pause');
            } else {
                this.classList.remove('fa-pause');
                this.classList.add('fa-play');
            }
        });
    });
});
