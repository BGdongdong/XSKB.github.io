// 主题切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 检查用户偏好的主题
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // 应用保存的主题
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    
    // 主题切换按钮事件
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
    
    // 为所有链接添加新窗口打开功能
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.open(this.href, '_blank');
        });
    });
});
