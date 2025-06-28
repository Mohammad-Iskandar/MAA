
// ==== عداد الزيارات وشريط التقدم ====
document.addEventListener('DOMContentLoaded', function() {
    const MAX_VISITS = 1000;
    let visitCount = 0;
    const visitCountElement = document.getElementById('visit-count');
    const progressFill = document.querySelector('.progress-fill');
    
    // محاولة الحصول على عدد الزيارات من API
    fetch('https://api.countapi.xyz/update/maa-site-unique/homepage-visits/?amount=1')
        .then(res => {
            if (!res.ok) throw new Error("فشل الاتصال بالعداد");
            return res.json();
        })
        .then(data => {
            visitCount = data.value;
            visitCountElement.textContent = visitCount.toLocaleString();
            updateProgressBar(visitCount);
        })
        .catch(error => {
            console.error("Error:", error);
            // استخدام النسخة الاحتياطية من localStorage
            let backupCount = localStorage.getItem('backupVisitCount') || 0;
            backupCount = parseInt(backupCount) + 1;
            localStorage.setItem('backupVisitCount', backupCount);
            visitCount = backupCount;
            visitCountElement.textContent = backupCount;
            updateProgressBar(backupCount);
        });
    
    // تحديث شريط التقدم
    function updateProgressBar(count) {
        const percentage = Math.min((count / MAX_VISITS) * 100, 100);
        progressFill.style.width = `${percentage}%`;
        
        // تغيير اللون حسب النسبة المئوية
        if (percentage < 30) {
            progressFill.style.background = 'linear-gradient(90deg, #3498db, #2ecc71)';
        } else if (percentage < 70) {
            progressFill.style.background = 'linear-gradient(90deg, #f1c40f, #f39c12)';
        } else {
            progressFill.style.background = 'linear-gradient(90deg, #e74c3c, #c0392b)';
        }
    }
});