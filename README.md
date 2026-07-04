# Mohamed Al-Asmar — Portfolio | البورتفوليو

## Structure | هيكلية المشروع
```
index.html        الصفحة الرئيسية (HTML فقط)
css/style.css     كل التنسيقات والألوان والحركات
js/main.js        اللغة، الثيم، التايم كود، الحركات
assets/portrait.jpg   الصورة الشخصية (المعدلة لونياً)
```

## Edit colors | تعديل الألوان
كل الألوان بأول ملف `css/style.css` داخل `:root` (الوضع الداكن)
و `html[data-theme="light"]` (الوضع الفاتح).
- `--accent` = الذهبي | `--paper` = الخلفية | `--ink` = النصوص

## Edit texts | تعديل النصوص
كل النصوص (عربي + إنكليزي) بأول ملف `js/main.js` داخل `const i18n`.
عدّل بالقاموسين `en` و `ar` وبينعكس تلقائياً.

## Replace videos | تبديل الفيديوهات
بملف `index.html` بقسم work-grid — بدّل رابط الـ iframe:
`https://drive.google.com/file/d/FILE_ID/preview`
تأكد أن مشاركة الملف بالدرايف: Anyone with the link → Viewer

## Deploy free | الرفع المجاني
1. https://app.netlify.com/drop — اسحب مجلد المشروع كامل
2. أو GitHub Pages: ارفع الملفات لريبو وفعّل Pages

© 2026 Mohamed Al-Asmar
