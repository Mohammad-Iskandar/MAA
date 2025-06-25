// DarkMode.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.querySelector('.toggle-input');
    const currentTheme = localStorage.getItem('theme');
    
    // تحقق من الإعدادات المحفوظة
    if (currentTheme) {
        document.body.classList.add('dark-mode');
        if (currentTheme === 'dark-mode') {
            toggleSwitch.checked = true;
        }
    }
    
    // تغيير الوضع عند النقر على التبديل
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', '');
        }
    });
    
    // تطبيق الانتقالات بعد تحميل الصفحة
    setTimeout(() => {
        document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
    }, 500);
});