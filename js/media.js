document.addEventListener('DOMContentLoaded', function() {
    // 视频播放控制（增强版）
    const playButtons = document.querySelectorAll('.play-video');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // 找到对应的视频元素（更健壮的选择方式）
            const mediaContainer = this.closest('.media-container');
            const video = mediaContainer.querySelector('video');
            
            if (!video) {
                console.error('未找到视频元素');
                return;
            }
            
            // 检查视频是否可播放
            if (video.error) {
                handleVideoError(video);
                return;
            }
            
            try {
                if (video.paused) {
                    // 尝试播放视频
                    video.play().then(() => {
                        this.innerHTML = '<i class="fa fa-pause"></i>';
                        this.parentElement.style.opacity = '0';
                    }).catch(error => {
                        console.error('视频播放失败:', error);
                        alert('视频无法播放，请检查文件是否存在或格式是否正确');
                    });
                } else {
                    video.pause();
                    this.innerHTML = '<i class="fa fa-play"></i>';
                    this.parentElement.style.opacity = '1';
                }
            } catch (error) {
                console.error('视频操作出错:', error);
            }
        });
    });
    
    // 视频错误处理函数
    function handleVideoError(video) {
        let errorMessage = '视频加载失败: ';
        switch(video.error.code) {
            case 1:
                errorMessage += '用户取消了播放';
                break;
            case 2:
                errorMessage += '视频格式不支持';
                break;
            case 3:
                errorMessage += '视频加载失败';
                break;
            case 4:
                errorMessage += '视频无法解码';
                break;
            default:
                errorMessage += '未知错误';
        }
        console.error(errorMessage);
        alert(errorMessage);
    }
    
    // 为所有视频添加错误监听
    document.querySelectorAll('video').forEach(video => {
        video.addEventListener('error', () => handleVideoError(video));
        
        // 视频元数据加载完成后检查
        video.addEventListener('loadedmetadata', () => {
            console.log(`视频准备就绪: ${video.src}, 时长: ${video.duration}秒`);
        });
    });
    
    // 下载按钮功能
    const downloadButtons = document.querySelectorAll('.media-overlay button');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const mediaContainer = this.closest('.media-container');
            const mediaElement = mediaContainer.querySelector('img, video');
            
            if (mediaElement) {
                const fileName = mediaElement.src.split('/').pop();
                console.log(`准备下载: ${fileName}`);
                // 实际下载功能
                const link = document.createElement('a');
                link.href = mediaElement.src;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        });
    });
});
