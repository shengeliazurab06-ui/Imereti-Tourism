const translations = {
    en: {
        brandTitle: "GOA Tourism",
        brandSubtitle: "Best tours & local guides",
        navHome: "Home",
        navRegister: "Register",
        navContact: "Contact",
        navAbout: "About Us",
        searchPlaceholder: "Search...",
        contactHeading: "Contact us",
        contactIntro: "Have a question? Write to us and we'll reply shortly.",
        cnameLabel: "Your name",
        cemailLabel: "Email",
        cmsgLabel: "Message",
        contactBtn: "Send message",
        officeAddress: "Kutaisi Semon",
        officePhone: "Phone: +995 555 55 55 55",
        footerText: "GOA Tourism"
    },
    ka: {
        brandTitle: "GOA ტურიზმი",
        brandSubtitle: "საუკეთესო ტურები და ადგილობრივი გიდები",
        navHome: "მთავარი",
        navRegister: "რეგისტრაცია",
        navContact: "კონტაქტი",
        navAbout: "ჩვენს შესახებ",
        searchPlaceholder: "ძიება...",
        contactHeading: "დაგვიკავშირდით",
        contactIntro: "გაქვთ რაიმე კითხვა სემონ? მოგვწერეთ და მალე მოგვეცემთ პასუხს.",
        cnameLabel: "თქვენი სახელი",
        cemailLabel: "ელ-ფოსტა",
        cmsgLabel: "შეტყობინება",
        contactBtn: "შეტყობინების გაგზავნა",
        officeAddress: "ქუთაისი სემონ მისამართს არ ვაკონკრეტებთ(59 თამარ მეფის ქ., ქუთაისი) ",
        officePhone: "ტელ: +995 555 55 55 55",
        footerText: "GOA ტურიზმი"
    },
    de: {
        brandTitle: "GOA Tourismus",
        brandSubtitle: "Beste Touren & lokale Führer",
        navHome: "Startseite",
        navRegister: "Registrieren",
        navContact: "Kontakt",
        navAbout: "Über uns",
        searchPlaceholder: "Suchen...",
        contactHeading: "Kontakt",
        contactIntro: "Haben Sie eine Frage? Schreiben Sie uns und wir antworten in Kürze.",
        cnameLabel: "Ihr Name",
        cemailLabel: "Email",
        cmsgLabel: "Nachricht",
        contactBtn: "Nachricht senden",
        officeAddress: "Kuraisi Semon",
        officePhone: "Tel: +995 555 55 55 557",
        footerText: "GOA Tourismus"
    }
};

function setLang(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    const ids = ['brandTitle', 'brandSubtitle', 'navHome', 'navRegister', 'navContact', 'navAbout', 'contactHeading', 'contactIntro', 'contactBtn', 'officeAddress', 'officePhone', 'footerText'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t[id];
    });

    const searchInput = document.getElementById('searchPlaceholder');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    document.querySelector('label[for="cname"]').textContent = t.cnameLabel;
    document.querySelector('label[for="cemail"]').textContent = t.cemailLabel;
    document.querySelector('label[for="cmsg"]').textContent = t.cmsgLabel;

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`lang-${lang}`);
    if (btn) btn.classList.add('active');
}

function sendContact(e) {
    e.preventDefault();
    const lang = localStorage.getItem('language') || 'en';
    const messages = {
        en: "Thanks! We'll reply soon.",
        ka: "გმადლობთ! მალე დაგიკავშირდებით.",
        de: "Danke! Wir werden bald antworten."
    };
    alert(messages[lang] || messages.en);
    document.querySelector('form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    applyTranslations(savedLang);
    document.getElementById('footerYear').textContent = new Date().getFullYear();
});
