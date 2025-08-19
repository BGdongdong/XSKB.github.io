<document.addEventListener('DOMContentLoaded', function() {
    // 视频播放控制
    const playButtons = document.querySelectorAll('.play-video');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const overlay = this.parentElement;
            const video = overlay.nextElementSibling || overlay.previousElementSibling;
            
            if (video && video.tagName === 'VIDEO') {
                if (video.paused) {
                    video.play();
                    this.innerHTML = '<i class="fa fa-pause"></i>';
                    overlay.style.opacity = '0';
                } else {
                    video.pause();
                    this.innerHTML = '<i class="fa fa-play"></i>';
                    overlay.style.opacity = '1';
                }
                
                // 视频结束时恢复状态
                video.addEventListener('ended', function() {
                    button.innerHTML = '<i class="fa fa-play"></i>';
                    overlay.style.opacity = '1';
                });
                
                // 点击视频暂停/播放
                video.addEventListener('click', function() {
                    if (this.paused) {
                        this.play();
                        button.innerHTML = '<i class="fa fa-pause"></i>';
                        overlay.style.opacity = '0';
                    } else {
                        this.pause();
                        button.innerHTML = '<i class="fa fa-play"></i>';
                        overlay.style.opacity = '1';
                    }
                });
            }
        });
    });
    
    // 下载按钮功能
    const downloadButtons = document.querySelectorAll('.media-overlay button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            // 实际项目中这里可以添加下载逻辑
            const mediaContainer = this.closest('.media-container');
            const mediaSrc = mediaContainer.querySelector('img').src;
            alert(`正在下载: ${mediaSrc.split('/').pop()}`);
        });
    });
});
