const themeToggle = document.getElementById('theme-toggle');
const languageToggle = document.getElementById('language-toggle');
const mainHeading = document.getElementById('main-heading');
const opinions = document.querySelectorAll('.opinion');

let isDarkMode = false;
let isHindi = false;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
});

languageToggle.addEventListener('click', () => {
    if (!isHindi) {
        mainHeading.textContent = "न्यूरोडाइवर्स व्यक्तियों के लिए बेहतर दुनिया";
        opinions[0].querySelector('.description').textContent = "स्कूलों में समावेशी वातावरण बनाना न्यूरोडाइवर्स व्यक्तियों को फलने-फूलने में मदद कर सकता है।";
        opinions[1].querySelector('.description').textContent = "कार्यस्थलों को न्यूरोडाइवर्स कर्मचारियों के लिए लचीली नीतियों को अपनाना चाहिए।";
        opinions[2].querySelector('.description').textContent = "न्यूरोडाइवर्सिटी के बारे में जागरूकता बढ़ाने से कलंक कम हो सकता है और स्वीकृति को बढ़ावा मिल सकता है।";
    } else {
        mainHeading.textContent = "Better World for Neurodiverse Individuals";
        opinions[0].querySelector('.description').textContent = "Creating inclusive environments in schools can help neurodiverse individuals thrive.";
        opinions[1].querySelector('.description').textContent = "Workplaces should adopt flexible policies to accommodate neurodiverse employees.";
        opinions[2].querySelector('.description').textContent = "Raising awareness about neurodiversity can reduce stigma and promote acceptance.";
    }
    isHindi = !isHindi;
});