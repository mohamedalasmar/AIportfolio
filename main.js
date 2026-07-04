/* Mohamed Al-Asmar — Portfolio scripts: i18n, theme, timecode, timeline, marquee, tilt, reveal */
/* ===================== i18n ===================== */
const i18n = {
  en: {
    brand:"MOHAMED AL-ASMAR",
    nav_work:"Work", nav_services:"Services", nav_about:"About", nav_contact:"Contact",
    hero_l1:"AI-crafted video.",
    hero_l2:'<span class="acc">Human-directed</span> story.',
    hero_sub:"Cinematic films, UGC product content, anime shorts and educational video — produced end-to-end with AI tools and a director's eye, from Doha to anywhere.",
    cta_work:"View selected work", cta_talk:"Start a project",
    work_h2:"Selected work",
    ph_replace:"Replace with your video", ph_img:"Replace with your image",
    w1:"Gourmet Burger — Cinematic Ad", w2:"Fresh Fruits — UGC Reel", w3:"Stylized Animation Short",
    w4:"Eid Greeting Film", w5:"Cookies — Product Commercial", w6:"Doha Nights — City Film",
    w7:"Generative Motion Study", w8:"Educational Explainer",
    cta_t:"Your project, next", cta_d:"Let's create it together",
    srv_h2:"What I make",
    s1_t:"Cinematic AI videos", s1_d:"Brand films and ads with film-grade lighting, camera language and pacing — generated, graded and cut to feel shot, not rendered.",
    s2_t:"UGC product photography", s2_d:"Photorealistic product shots and creator-style content at scale — consistent, on-brand, and ready for e-commerce and social ads.",
    s3_t:"Anime & short-form", s3_d:"Stylized anime sequences and scroll-stopping reels built for TikTok, Instagram and YouTube Shorts.",
    s4_t:"Educational AI videos", s4_d:"Explainers and training content with AI presenters and natural voiceover — in Arabic, English, or both.",
    pr_h2:"How it works",
    p1_t:"Brief & direction", p1_d:"We align on story, audience, references and format before a single frame exists.",
    p2_t:"Prompt engineering", p2_d:"Reusable prompt frameworks keep characters, products and lighting consistent shot to shot.",
    p3_t:"Generation & edit", p3_d:"Generation, selection, sound design and editing — with quality control on every frame.",
    p4_t:"Delivery", p4_d:"Final files in every ratio you need, with revisions until it feels right.",
    ab_h2:"Behind the camera",
    ab_p1:"I'm <strong>Mohamed Al-Asmar</strong>, an AI video creator and visual designer based in Doha, Qatar. I direct AI tools the way a filmmaker directs a crew — with a clear story, a consistent visual language, and obsessive quality control.",
    ab_p2:"I work bilingually in Arabic and English, which means content that lands naturally in the Gulf market and travels globally — the same project can speak to both audiences without losing its voice.",
    ab_p3:"Whether it's a cinematic launch film, a batch of UGC product shots, or an anime series for social — I handle the full pipeline from concept to final export.",
    f1_k:"Based in", f1_v:"Doha, Qatar",
    f2_k:"Languages", f2_v:"Arabic · English",
    f3_k:"Focus", f3_v:"AI video & design",
    f4_k:"Availability", f4_v:"Open for projects",
    ct_h2:"Let's make something people stop scrolling for.",
    ct_p:"Tell me about your product, your story, or the video you keep imagining — and I'll show you how AI gets it made faster and better.",
    ct_email:"Email me",
    ft_l:"© 2026 Mohamed Al-Asmar",
    langBtn:"عربي"
  },
  ar: {
    brand:"محمد الأسمر",
    nav_work:"الأعمال", nav_services:"الخدمات", nav_about:"من أنا", nav_contact:"تواصل",
    hero_l1:"فيديو بصناعة الذكاء الاصطناعي.",
    hero_l2:'وقصة <span class="acc">بإخراجٍ إنساني</span>.',
    hero_sub:"أفلام سينمائية، محتوى منتجات UGC، مقاطع أنمي وفيديوهات تعليمية — إنتاج متكامل بأدوات الذكاء الاصطناعي وعين مخرج، من الدوحة إلى أي مكان.",
    cta_work:"شاهد الأعمال", cta_talk:"ابدأ مشروعك",
    work_h2:"أعمال مختارة",
    ph_replace:"ضع الفيديو هنا", ph_img:"ضع الصورة هنا",
    w1:"برغر غورميه — إعلان سينمائي", w2:"فواكه طازجة — ريل UGC", w3:"مقطع أنيميشن قصير",
    w4:"فيلم تهنئة العيد", w5:"كوكيز — إعلان منتج", w6:"ليالي الدوحة — فيلم سينمائي",
    w7:"دراسة حركة توليدية", w8:"فيديو تعليمي",
    cta_t:"مشروعك هو التالي", cta_d:"لنصنعه معاً",
    srv_h2:"ماذا أصنع",
    s1_t:"فيديوهات سينمائية بالذكاء الاصطناعي", s1_d:"أفلام وإعلانات بإضاءة سينمائية ولغة كاميرا وإيقاع مدروس — تُولَّد وتُدرَّج لونياً وتُمنتَج لتبدو مصوَّرة فعلاً، لا مولَّدة.",
    s2_t:"تصوير منتجات UGC", s2_d:"لقطات منتجات واقعية ومحتوى بأسلوب صنّاع المحتوى، بكميات كبيرة وجودة ثابتة — جاهز للتجارة الإلكترونية وإعلانات السوشال.",
    s3_t:"أنمي ومحتوى قصير", s3_d:"مشاهد أنمي مميزة وريلز توقف التمرير، مصممة لتيك توك وإنستغرام ويوتيوب شورتس.",
    s4_t:"فيديوهات تعليمية بالذكاء الاصطناعي", s4_d:"شروحات ومحتوى تدريبي بمقدّمين افتراضيين وتعليق صوتي طبيعي — بالعربية أو الإنكليزية أو كليهما.",
    pr_h2:"كيف نشتغل",
    p1_t:"البريف والاتجاه", p1_d:"نتفق على القصة والجمهور والمراجع والصيغة قبل أن يُولد أي إطار.",
    p2_t:"هندسة البرومبت", p2_d:"أُطر برومبت قابلة لإعادة الاستخدام تضمن ثبات الشخصيات والمنتجات والإضاءة من لقطة لأخرى.",
    p3_t:"التوليد والمونتاج", p3_d:"توليد وانتقاء وتصميم صوتي ومونتاج — مع مراقبة جودة على كل إطار.",
    p4_t:"التسليم", p4_d:"ملفات نهائية بكل المقاسات التي تحتاجها، مع تعديلات حتى تشعر أنها صحيحة تماماً.",
    ab_h2:"خلف الكاميرا",
    ab_p1:"أنا <strong>محمد الأسمر</strong>، صانع فيديو بالذكاء الاصطناعي ومصمم بصري مقيم في الدوحة، قطر. أُدير أدوات الذكاء الاصطناعي كما يدير المخرج طاقمه — بقصة واضحة، ولغة بصرية ثابتة، ودقة عالية في مراقبة الجودة.",
    ab_p2:"أعمل باللغتين العربية والإنكليزية، ما يعني محتوى يصل بشكل طبيعي إلى السوق الخليجي ويسافر عالمياً — المشروع نفسه يمكنه مخاطبة الجمهورين دون أن يفقد صوته.",
    ab_p3:"سواء كان فيلم إطلاق سينمائياً، أو دفعة من صور المنتجات، أو سلسلة أنمي للسوشال — أتولى خط الإنتاج كاملاً من الفكرة حتى التصدير النهائي.",
    f1_k:"المقر", f1_v:"الدوحة، قطر",
    f2_k:"اللغات", f2_v:"العربية · الإنكليزية",
    f3_k:"التخصص", f3_v:"فيديو وتصميم بالذكاء الاصطناعي",
    f4_k:"التوفر", f4_v:"متاح لمشاريع جديدة",
    ct_h2:"لنصنع شيئاً يجعل الناس يتوقفون عن التمرير.",
    ct_p:"حدّثني عن منتجك أو قصتك أو الفيديو الذي تتخيله — وسأريك كيف ينجزه الذكاء الاصطناعي أسرع وأفضل.",
    ct_email:"راسلني",
    ft_l:"© 2026 محمد الأسمر",
    langBtn:"EN"
  }
};

let lang = "en";
const htmlKeys = new Set(["hero_l2","ab_p1"]);

function applyLang(){
  const dict = i18n[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if(!(k in dict)) return;
    if(htmlKeys.has(k)) el.innerHTML = dict[k];
    else el.textContent = dict[k];
  });
  document.getElementById("langBtn").textContent = dict.langBtn;
}
document.getElementById("langBtn").addEventListener("click",()=>{
  lang = lang === "en" ? "ar" : "en";
  applyLang();
});

/* ===================== theme toggle ===================== */
const themeBtn = document.getElementById("themeBtn");
let theme = "dark";
themeBtn.addEventListener("click",()=>{
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "☾" : "☀";
});

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===================== timecode ===================== */
const tc = document.getElementById("timecode");
let frames = 0;
if(!reduced){
  setInterval(()=>{
    frames = (frames + 1) % (24*60*60*24);
    const f = frames % 24;
    const s = Math.floor(frames/24) % 60;
    const m = Math.floor(frames/(24*60)) % 60;
    const h = Math.floor(frames/(24*60*60));
    tc.textContent = [h,m,s,f].map(n=>String(n).padStart(2,"0")).join(":");
  }, 1000/24);
}

/* ===================== timeline scrubber ===================== */
const tlFill = document.getElementById("tlFill");
function updateTimeline(){
  const h = document.documentElement;
  const pct = h.scrollTop / (h.scrollHeight - h.clientHeight) * 100;
  tlFill.style.width = pct + "%";
}
window.addEventListener("scroll", updateTimeline, {passive:true});
updateTimeline();

/* ===================== marquee: duplicate track for seamless loop ===================== */
const track = document.getElementById("marqueeTrack");
track.innerHTML += track.innerHTML;

/* ===================== 3D tilt + shine on work cards ===================== */
if(!reduced && matchMedia("(pointer:fine)").matches){
  document.querySelectorAll(".tilt").forEach(card=>{
    card.addEventListener("mousemove", e=>{
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      card.style.transform = `rotateX(${(0.5 - y) * 7}deg) rotateY(${(x - 0.5) * 7}deg) translateY(-4px)`;
      card.style.setProperty("--mx", (x*100)+"%");
      card.style.setProperty("--my", (y*100)+"%");
    });
    card.addEventListener("mouseleave", ()=>{ card.style.transform = ""; });
  });
}

/* ===================== scroll reveal ===================== */
const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
