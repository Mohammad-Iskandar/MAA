document.addEventListener('DOMContentLoaded', function() {
    const techNewsContainer = document.querySelector('.technews .card');
    
    // بيانات الأخبار
    const newsData = [
        {
            title: "صورك عارية ومنتشرة عالسوشال ميديا !! ",
            content: "النائبة النيوزيلندية لورا ماكلور وقفت بالبرلمان ورفعت صورة عارية مولدة بالذكاء الاصطناعي لإلها! الصورة شكلها حقيقي وبتشبهها بشكل مخيف بس هي مزيفة بالكامل! وقالت بالحرف ما أخد الموضوع أكتر من 5 دقايق! فتحت غوغل، لقيت أداة بتولد هيك صور بدون تسجيل ولا اشتراك وبلا اي شي... ببلاش!  الصورة مو حقيقية بس كافية لتدمير سمعة أي شخص! تخيلوا حدا ينشرلكم صورة فاضحة أو فيديو مزيف باسمكم؟ أو يعمل فيكم تريند أو 'مزحة' تخربلكم حياتكم؟ في أطفال حول العالم اتعرضوا لهيك تزييف... بعضهم حتى حاولوا الانتحار 💔 الذكاء الاصطناعي مانو لعبة، تقنية الـ Deepfake صارت سلاح بإيدين ناس فاسدة، والمخاطر حقيقية جداً. انتبهوا لصوركم، ووعّوا يلي حواليكم. من ورا الذكاء الاصطناعي صار كل شي ممكن ولسا الجاي فيه مفاجآت كتير 💥🔜",
            image: "images/TechNews1.jpg",
            date: "15 يونيو 2025"
        },
        {
            title: " الذكاء الصنعي … أداة قوية بس مو دائماً آمنة!",
            content: "كلنا صرنا نستخدم أدوات الذكاء الصنعي لتوليد صور ، صوت ، وحتى نصوص ... بس في شغلة مهمة لازم ننتبهلها : 📸 لما منرفع صورنا لتعديلها على هالأدوات ، غالباً بيتم تخزينها بخوادم الشركة .❗️وين المشكلة؟ وشو الخطر الحقيقي؟ بعض أدوات الذكاء الصنعي ، خاصة المانا مشهورة أو غير خاضعة للرقابة ، ممكن تستخدم صورنا لتوليد محتوى مزيف أو غير أخلاقي باستخدام ملامحنا 😳 💬 حرفياً: صورتك ممكن تتحول لصورة تانية 'أنت فيها' بس بدون إذنك ، وبطريقة مؤذية ( غير اخلاقية ، عارية ) ✋ وهذا الشي صار فعلاً مع موديلات ومواقع معينة.🔐 طيب شو الفرق بين الشركات الكبيرة والباقي؟ شركات مثل: ✅ OpenAI ✅ Google ما بيقدرو يستخدمو بياناتك بدون إذنك، بفضل قوانين صارمة متل: 📜 GDPR (أوروبا) 📜 CCPA (كاليفورنيا) بس !! مو كل الأدوات ملتزمة بهالشي ! في مواقع بتولد صور عالية الدقة، وتخزن صورك، وتستخدمها بدون رقيب، هاد الموقع بولد صور متل يلي حكينا عنن باستخدام مودل FLUX: 🌐 freeai.aihub.ren (الموقع للتوعية فقط) ✅ كيف بتحموا حالكم؟ هي 3 خطوات بسيطة: 1⃣ استخدموا أدوات آمنة متل: Adobe Firefly : بيعتمد ع صور مرخصة من شركة adobe نفسا وما بيسحب من الصور الشخصية Canva : عندن سياسة واضحة انو الصور ما بتنحفظ بعد التعديل PicsArt : (بـ Private Mode) Fotor : بتحذف الصور بعد 24 ساعة 2⃣ اقروا سياسة الخصوصية دائماً اذا شفتوا جمل متل : “We may use your content for training.” “We share data with partners.” كنسلوا وسكروا دغري 3⃣ ضيفوا حماية لصوركم قبل ما ترفعوها 🔧 أدوات مثل Glaze بتضيف تشويش بسيط عالصورة ما بتأثر عالشكل، لكن بتمنع الذكاء الصنعي من استخدامها. بعض الأمثلة الواقعية : 👇✅ 1. فضيحة Stable Diffusion وتضمين صور حساسة (مرضى – صور خاصة) في عام 2023، كشف باحثون من جامعة ستانفورد أن نموذج Stable Diffusion تم تدريبه باستخدام مجموعة بيانات ضخمة تُدعى LAION-5B، والتي احتوت على صور حساسة، من ضمنها: صور طبية لأشخاص حقيقيين (بما فيهم مرضى نفسيين). صور لأطفال أو محتوى غير لائق. كل ذلك دون علم أو موافقة الأشخاص الظاهرين فيها. 📰 المصدر: The Verge - Generative AI trained on sensitive and illegal images (https://www.theverge.com/2023/12/20/24009418/generative-ai-image-laion-csam-google-stability-stanford) ✅ 2. Lensa AI واستخدام أعمال الفنانين دون إذن تطبيق Lensa AI الشهير بتوليد صور سيلفي فنية باستخدام الذكاء الاصطناعي واجه اتهامات مباشرة باستخدام أساليب فنانين دون موافقتهم. التطبيق مبني على نموذج Stable Diffusion، والذي تم تدريبه على بيانات مسروقة من مواقع مثل ArtStation وDeviantArt. عدة دعاوى قضائية تم رفعها ضد شركات مثل Stability AI وMidjourney بتهمة انتهاك حقوق النشر. 📰 المصدر: The Verge - Artists sue Stability AI, Midjourney over AI art (https://www.theverge.com/2023/1/16/23557098/generative-ai-art-copyright-legal-lawsuit-stable-diffusion-midjourney-deviantart) ✅ 3. تطبيق DeepNude وتحويل صور النساء لصور عارية مزيفة في عام 2019، أُطلق تطبيق يُدعى DeepNude، يستخدم الذكاء الاصطناعي لتحويل صور نساء عاديات إلى صور 'عارية' مزيفة خلال ثوانٍ فقط. رغم أنه تم إغلاق التطبيق سريعًا بعد موجة الغضب، إلا أن النسخ منه ما زالت تنتشر على الإنترنت المظلم، مما يُظهر خطورة هذه التكنولوجيا وسوء استخدامها. 📰 المصدر: Wikipedia - Deepfake > DeepNude (https://en.wikipedia.org/wiki/Deepfake#DeepNude?wprov=sfla1) ✅ 4. موقع 'This Person Does Not Exist' وتشابه الوجوه مع ناس حقيقيين أظهرت دراسات أن النماذج التي تولد وجوهًا 'وهمية' (مثل موقع ThisPersonDoesNotExist.com) قد تنتج صورًا مشابهة بشكل مرعب لأشخاص حقيقيين، لأن هذه النماذج تم تدريبها على ملايين الصور المأخوذة من الإنترنت دون إذن. 📰 المصدر: arXiv - Memorization in GANs (https://arxiv.org/abs/2101.05084) ✅ 5. Clearview AI وسرقة صور من السوشيال ميديا شركة Clearview AI جمعت أكثر من 10 مليار صورة من مواقع التواصل الاجتماعي (مثل Facebook، Instagram، وغيرها) دون إذن المستخدمين، بهدف تطوير تقنيات التعرف على الوجه. هذه التقنيات بيعت لاحقًا للشرطة والجهات الأمنية، حتى في قضايا حساسة تتعلق بالأطفال والضحايا. 📰 المصدر: AXIOS (https://www.axios.com/2020/02/08/clearview-tech-giant-facial-recognition-startup) 📣 الرسالة الأهم: الذكاء الصنعي مانو لعبة . كل ضغطة 'رفع صورة' ممكن يكون الها أثر كبير عالمدى البعيد. خليك واعي، وخلي بياناتك بأمان 🙏🏻"
,
            image: "images/TechNews2.jpg",
            date: "5 يونيو 2025"
        },
        {
            title: "دخل سلبي ؟! ولا ضياعة وقت !!!             ",
            content: "خليكم منتبهين ⚠️ الفترة الأخيرة عم نشوف كتير ناس عم تحكي عن دخل سلبي من الذكاء الاصطناعي وبس سجّل هون وبتبلّش تربح لحالك 💸 🔍 خليني احكيا متل ما هيي : ✋ 90% من هالمواقع كذب وضحك عالناس. مو لأنو الـ AI سيء لا بس لأن في ناس عم تستغل اسمو لتسوّق وهم كبير. 🧠 أمثلة واقعية: 📍 opesta.ai بقلكم سجّلوا وبتربحوا من الـ Affiliate Marketing تلقائيا! بس الحقيقة؟ كل شي عبارة عن تسويق لخدمات تانية، ودوامة تسجيل ودفع… وما في أي ربح حقيقي. 📍 aiincomesystem.com فيديو دعائي ضارب، وبيقلكم : إيلون ماسك و ChatGPT فتحوا بوابة الأرباح! ولا Elon الو دخل ، ولا ChatGPT بيطبع مصاري... القصة كلها: اشتركوا ، ادفعوا ، واحصلوا على وهم. 📍 قنوات تيلغرام وهمية بحطولكم رابط، وبقلولكم :سجلوا وبلّشوا اربحوا من أدوات الذكاء الصناعي بس بتدخلوا ، بتلاقوا ملف فيه شوية برومبتات منسوخين، وبقلولكم استعملوهن على Fiverr و Upwork... ومافي وراهن ولا أي قيمة. ⚠️ النتيجة؟ ضياع وقت ⌛️ إحباط نفسي 😞 أو حتى خسارة مصاري 💸 💡 نصيحة شخصية: أي شغل ما بيشرحلكم كيف عم يولّد أرباح وبيطلب منكم تدفعوا قبل ما تشوفوا شي واقعي... كبوا الماوس، واطلعوا فورا 👋 ✍️ مشوارنا طويل بهالسلسلة... ومشان تضلّوا سابقين غيركم بخطوة، خليكم معنا خطوة بخطوة. ⚡️ تابعونا... لأن الجاي غير شكل 🔥",
            image: "images/technews-3.jpg",
            date: "27 يونيو 2025"
        }
        ,
    
    ];
    
    // إنشاء عناصر الأخبار
    newsData.forEach((news, index) => {
        const newsElement = document.createElement('div');
        newsElement.className = `technews-news ${index === 0 ? 'active' : ''}`;
        newsElement.innerHTML = `
            <span class="technews-date">${news.date}</span>
            <img src="${news.image}" alt="${news.title}" class="technews-image">
            <h2 class="technews-title">${news.title}</h2>
            <div class="technews-content">${news.content}</div>
        `;
        techNewsContainer.appendChild(newsElement);
    });
    
    // إضافة أزرار التنقل
    const navButtons = document.createElement('div');
    navButtons.className = 'technews-nav';
    navButtons.innerHTML = `
        <button class="prev-news"><i class="fas fa-chevron-right"></i></button>
        <button class="next-news"><i class="fas fa-chevron-left"></i></button>
    `;
    techNewsContainer.appendChild(navButtons);
    
    // إضافة نقاط التنقل
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'technews-dots';
    newsData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `technews-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });
    techNewsContainer.appendChild(dotsContainer);
    
    // متغيرات التحكم
    let currentNewsIndex = 0;
    let newsItems = document.querySelectorAll('.technews-news');
    let dots = document.querySelectorAll('.technews-dot');
    let autoChangeInterval;
    
    // دالة تبديل الخبر
    function showNews(index) {
        // إخفاء جميع الأخبار
        newsItems.forEach(item => item.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // إظهار الخبر المطلوب
        newsItems[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentNewsIndex = index;
    }
    
    // التبديل إلى الخبر التالي
    function nextNews() {
        const nextIndex = (currentNewsIndex + 1) % newsItems.length;
        showNews(nextIndex);
    }
    
    // التبديل إلى الخبر السابق
    function prevNews() {
        const prevIndex = (currentNewsIndex - 1 + newsItems.length) % newsItems.length;
        showNews(prevIndex);
    }
    
    // التبديل التلقائي
    function startAutoChange() {
        autoChangeInterval = setInterval(nextNews, 10000); // يتغير كل 5 ثواني
    }
    
    // بدء التبديل التلقائي
    startAutoChange();
    
    // أحداث الأزرار
    document.querySelector('.prev-news').addEventListener('click', () => {
        clearInterval(autoChangeInterval);
        prevNews();
        startAutoChange();
    });
    
    document.querySelector('.next-news').addEventListener('click', () => {
        clearInterval(autoChangeInterval);
        nextNews();
        startAutoChange();
    });
    
    // أحداث النقاط
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            clearInterval(autoChangeInterval);
            showNews(index);
            startAutoChange();
        });
    });
    
});