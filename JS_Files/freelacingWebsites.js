document.addEventListener('DOMContentLoaded', () => 
{
    const elements = document.querySelectorAll('.fWeb');
    const observer = new IntersectionObserver
    ((entries, observer) => 
        {
            entries.forEach(entry => {
                if (entry.isIntersecting) 
                {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, 
        { threshold: 0.1 }
    );
    elements.forEach(element => 
        {
            observer.observe(element);
        }
    );
}
);
/////////////////////////////////////////