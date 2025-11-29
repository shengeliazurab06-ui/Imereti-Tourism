const translations = {
    en: { brandTitle: "GOA Tourism", brandSubtitle: "Best tours & local guides", navHome: "Home", navRegister: "Register", navContact: "Contact", navAbout: "About Us", searchPlaceholder: "Search...", registerHeading: "Book a tour / Register", lblName: "Full name", lblEmail: "Email", lblPhone: "Phone", lblPeople: "Number of people", lblTour: "Choose tour", lblNotes: "Notes / Requests", submitBtn: "Submit booking", footerText: "GOA Tourism" },
    ka: { brandTitle: "GOA ტურიზმი", brandSubtitle: "საუკეთესო ტურები და ადგილობრივი გიდები", navHome: "მთავარი", navRegister: "რეგისტრაცია", navContact: "კონტაქტი", navAbout: "ჩვენს შესახებ", searchPlaceholder: "ძიება...", registerHeading: "ტურის დაჯავშნა / რეგისტრაცია", lblName: "სახელი და გვარი", lblEmail: "ელ-ფოსტა", lblPhone: "ტელეფონი", lblPeople: "ადამიანების რაოდენობა", lblTour: "აირჩიე ტური", lblNotes: "შენიშვნები / მოთხოვნები", submitBtn: "დაჯავშნე", footerText: "GOA ტურიზმი" },
    de: { brandTitle: "GOA Tourismus", brandSubtitle: "Beste Touren & lokale Führer", navHome: "Startseite", navRegister: "Registrieren", navContact: "Kontakt", navAbout: "Über uns", searchPlaceholder: "Suchen...", registerHeading: "Tour buchen / Registrierung", lblName: "Vollständiger Name", lblEmail: "E-Mail", lblPhone: "Telefon", lblPeople: "Anzahl der Personen", lblTour: "Tour auswählen", lblNotes: "Anmerkungen / Wünsche", submitBtn: "Buchung absenden", footerText: "GOA Tourismus" }
};

function setLang(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const t = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    // Apply translations by ID
    const ids = ['brandTitle', 'brandSubtitle', 'navHome', 'navRegister', 'navContact', 'navAbout', 'registerHeading', 'lblName', 'lblEmail', 'lblPhone', 'lblPeople', 'lblTour', 'lblNotes', 'submitBtn', 'footerText'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t[id];
    });

    // Apply placeholder translation
    const searchInput = document.getElementById('searchPlaceholder');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    const btn = document.getElementById(`lang-${lang}`);
    if (btn) btn.classList.add('active');
}

function submitForm(e) {
    e.preventDefault();
    const lang = localStorage.getItem('language') || 'en';
    const messages = {
        en: "Thank you, your booking request has been received.",
        ka: "გმადლობთ, თქვენი მოთხოვნა მიღებულია.",
        de: "Vielen Dank, Ihre Buchungsanfrage wurde erhalten."
    };
    document.getElementById('formMessage').innerText = messages[lang] || messages.en;
    document.getElementById('bookingForm').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    applyTranslations(savedLang);
    document.getElementById('footerYear').textContent = new Date().getFullYear();
});
