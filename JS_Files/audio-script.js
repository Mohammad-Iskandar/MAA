document.addEventListener('DOMContentLoaded', function() {
    // العناصر الأساسية
    const audio = document.getElementById('main-audio');
    const playPauseBtn = document.querySelector('.custom-audio-player .play-pause');
    const playIcon = document.querySelector('.custom-audio-player .play-icon');
    const pauseIcon = document.querySelector('.custom-audio-player .pause-icon');
    const currentTimeEl = document.querySelector('.custom-audio-player .current-time');
    const durationEl = document.querySelector('.custom-audio-player .duration');
    
    // حالة المدة الزمنية
    let audioDuration = 0;
    let isDurationKnown = false;

    const audioFile = "https://mohammad-iskandar.github.io/MAA/audio/" + 
                              encodeURIComponent("AudioCutter_Best classical music. Music for the soul Beethoven, Mozart, Schubert.mp3");
            audio.src = audioFile;
    
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

    // تحديث الوقت الحالي
    function updateProgress() {
        // تحديث الوقت الحالي دائماً
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }

    // إعداد مستمعي الأحداث
    playPauseBtn.addEventListener('click', togglePlayPause);

    // الأحداث الصوتية
    audio.addEventListener('timeupdate', updateProgress);
    
    audio.addEventListener('ended', function() {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        currentTimeEl.textContent = '0:00';
    });
    
    audio.addEventListener('loadedmetadata', function() {
        checkDuration();
    });
    
    audio.addEventListener('canplay', checkDuration);

    // تهيئة أولية للصوت
    audio.volume = 0.8;

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
