const translations = {
    en: {
        brandTitle: "GOA Tourism",
        brandSubtitle: "Best tours & local guides",
        navHome: "Home",
        navRegister: "Register",
        navContact: "Contact",
        navAbout: "About Us",
        searchPlaceholder: "Search...",
        aboutUsHeading: "About GOA Tourism",
        aboutUsText1: "GOA Tourism was founded by a group of passionate travelers who fell in love with the rich culture, stunning landscapes, and warm hospitality of Georgia. Our mission is to share this love with the world by offering authentic and unforgettable travel experiences.",
        aboutUsText2: "We believe in responsible tourism that benefits local communities. We partner with local guides and family-owned guesthouses to ensure your journey has a positive impact. From the vibrant streets of Tbilisi to the remote mountain villages of Svaneti, we are here to help you discover the true soul of Georgia.",
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
        aboutUsHeading: "GOA ტურიზმის შესახებ",
        aboutUsText1: "GOA Tourism დაარსდა მოგზაურთა ჯგუფის მიერ, რომლებსაც შეუყვარდათ საქართველოს მდიდარი კულტურა, განსაცვიფრებელი პეიზაჟები და თბილი სტუმართმოყვარეობა. ჩვენი მისიაა, გავუზიაროთ ეს სიყვარული მსოფლიოს და შევთავაზოთ ავთენტური და დაუვიწყარი სამოგზაურო გამოცდილება.",
        aboutUsText2: "ჩვენ გვჯერა პასუხისმგებლიანი ტურიზმის, რომელიც სარგებელს მოუტანს ადგილობრივ თემებს. ჩვენ ვთანამშრომლობთ ადგილობრივ გიდებთან და საოჯახო სასტუმროებთან  რათა თქვენს მოგზაურობას დადებითი გავლენა ჰქონდეს. თბილისის ცოცხალი ქუჩებიდან სვანეთის შორეულ მთის სოფლებამდე, ჩვენ აქ ვართ, რათა დაგეხმაროთ საქართველოს ნამდვილი სულის აღმოჩენაში.",
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
        aboutUsHeading: "Über GOA Tourismus",
        aboutUsText1: "GOA Tourismus wurde von einer Gruppe leidenschaftlicher Reisender gegründet, die sich in die reiche Kultur, die atemberaubenden Landschaften und die herzliche Gastfreundschaft Georgiens verliebt haben. Unsere Mission ist es, diese Liebe mit der Welt zu teilen, indem wir authentische und unvergessliche Reiseerlebnisse anbieten.",
        aboutUsText2: "Wir glauben an einen verantwortungsvollen Tourismus, der den lokalen Gemeinschaften zugutekommt. Wir arbeiten mit lokalen Führern, familiengeführten Pensionen und Handwerkern zusammen, um sicherzustellen, dass Ihre Reise einen positiven Einfluss hat. Von den lebhaften Straßen von Tiflis bis zu den abgelegenen Bergdörfern von Swanetien sind wir hier, um Ihnen zu helfen, die wahre Seele Georgiens zu entdecken.",
        footerText: "GOA Tourismus"
    }
};

function setLang(lang) {
    const t = translations[lang];
    document.getElementById('brandTitle').textContent = t.brandTitle;
    document.querySelector('.brand div div[style*="color:var(--muted)"]').textContent = t.brandSubtitle;
    document.getElementById('navHome').textContent = t.navHome;
    document.getElementById('navRegister').textContent = t.navRegister;
    document.getElementById('navContact').textContent = t.navContact;
    document.getElementById('navAbout').textContent = t.navAbout;
    document.querySelector('.search-bar input').placeholder = t.searchPlaceholder;
    document.getElementById('aboutUsHeading').textContent = t.aboutUsHeading;
    document.getElementById('aboutUsText1').textContent = t.aboutUsText1;
    document.getElementById('aboutUsText2').textContent = t.aboutUsText2;
    document.getElementById('footerText').textContent = t.footerText;

    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`lang-${lang}`).classList.add('active');

    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLang(savedLang);
    document.getElementById('footerYear').textContent = new Date().getFullYear();
});
