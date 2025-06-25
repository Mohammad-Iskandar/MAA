document.addEventListener('DOMContentLoaded', function() {
    // العناصر الأساسية
    const audio = document.getElementById('main-audio');
    const playPauseBtn = document.querySelector('.play-pause');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const volumeBtn = document.querySelector('.volume-btn');
    const volumeIcon = document.querySelector('.volume-icon');
    const muteIcon = document.querySelector('.mute-icon');
    
    // حالة المدة الزمنية
    let audioDuration = 0;
    let isDurationKnown = false;

    // دالة لتنسيق الوقت
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // تشغيل/إيقاف
    function togglePlayPause() {
        if (audio.paused) {
            audio.play().then(() => {
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }).catch(error => {
                console.error("خطأ في التشغيل:", error);
            });
        } else {
            audio.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    }

    // التحقق من المدة الزمنية
    function checkDuration() {
        if (!isDurationKnown && audio.duration && isFinite(audio.duration)) {
            audioDuration = audio.duration;
            isDurationKnown = true;
            durationEl.textContent = formatTime(audioDuration);
            return true;
        }
        return false;
    }

    // إعداد مستمعي الأحداث
    playPauseBtn.addEventListener('click', togglePlayPause);
    progressBar.addEventListener('input', setProgress);
    volumeBtn.addEventListener('click', toggleMute);

    // الأحداث الصوتية
    audio.addEventListener('timeupdate', function() {
        if (audio.duration) {
            const percent = (audio.currentTime / audio.duration) * 100;
            progressBar.value = percent;
            currentTimeEl.textContent = formatTime(audio.currentTime);
            
            // Debugging:
            console.log(`Time: ${audio.currentTime}, Progress: ${percent}%`);
        }
    });
    audio.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        progressBar.value = 0;
        currentTimeEl.textContent = '0:00';
    });
    audio.addEventListener('loadedmetadata', checkDuration);
    audio.addEventListener('canplay', checkDuration);

    // تهيئة أولية للصوت
    audio.volume = 0.8; // مستوى صوت افتراضي

    // حل بديل للتحقق من المدة
    const durationCheckInterval = setInterval(() => {
        if (checkDuration()) {
            clearInterval(durationCheckInterval);
        }
    }, 500);

    // معالجة الأخطاء
    audio.addEventListener('error', function() {
        console.error("خطأ في تحميل الصوت:", audio.error);
        clearInterval(durationCheckInterval);
    });
});