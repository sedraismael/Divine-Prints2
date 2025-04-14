<script>
// Fingerprint pattern data
const fingerprintData = {
    arches: {
        ledColor: 'blue',
        scientificFact: 'Arches are the most common fingerprint pattern, forming smooth, curved ridges. They represent simplicity and unity.',
        quranVerse: 'Indeed, We have created man in the best of stature.',
        quranVerseArabic: 'إِنَّا خَلَقْنَا الإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
        explanation: 'Arches symbolize the simple and perfect design of Allah’s creation. Just as Allah created the human form in the best of stature, the arch represents the simplicity and balance found in the natural world.',
        explanationArabic: 'الأقواس تمثل التصميم البسيط والمثالي لخلق الله. كما خلق الله الشكل البشري في أفضل تقويم، تمثل القوس البساطة والتوازن الذي نجده في العالم الطبيعي.'
    },
    loops: {
        ledColor: 'green',
        scientificFact: 'Loops are the second most common pattern and have ridges that flow in one direction, making a loop-like shape. They are unique to individuals.',
        quranVerse: 'And We have certainly created man and We know what his soul whispers to him, and We are closer to him than [his] jugular vein.',
        quranVerseArabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        explanation: 'Loops reflect the continuous flow of life and the interconnectedness of all things. The Quran verse emphasizes how Allah is closer to us than we can ever imagine, just as the loops connect in continuous patterns.',
        explanationArabic: 'الحلقات تعكس تدفق الحياة المستمر وترابط كل الأشياء. يبرز الآية القرآنية كيف أن الله أقرب إلينا مما نتخيل، تمامًا كما تتصل الحلقات في أنماط مستمرة.'
    },
    whorls: {
        ledColor: 'red',
        scientificFact: 'Whorls are characterized by circular or spiral patterns and are less common than loops and arches. They are often seen as more complex.',
        quranVerse: 'He is the Creator of the heavens and the earth; He created all things in the best way.',
        quranVerseArabic: 'هُوَ خَالِقُ السَّمَاوَاتِ وَالْأَرْضِ، خَلَقَ كُلَّ شَيْءٍ بِأَحْسَنِ صُورَةٍ',
        explanation: 'Whorls represent complexity and intricacy. Just as Allah has created everything in the best possible way, the whorl design showcases the complexity and perfection inherent in His creation.',
        explanationArabic: 'الدوامات تمثل التعقيد والدقة. كما خلق الله كل شيء بأفضل صورة، يظهر تصميم الدوامة التعقيد والكمال في خلقه.'
    },
    ridges: {
        ledColor: 'black',
        scientificFact: 'Ridges are the raised lines that make up the fingerprint pattern. They are essential for grip and tactile sensitivity.',
        quranVerse: 'And He found you lost and guided [you].',
        quranVerseArabic: 'وَوَجَدَكَ ضَالاًّ فَهَدَى',
        explanation: 'The ridges in fingerprints allow us to grip objects and navigate the world. Similarly, Allah’s guidance is what allows us to hold on to the truth and navigate life, much like the ridges provide a firm grip.',
        explanationArabic: 'الحواف في بصمات الأصابع تساعدنا في الإمساك بالأشياء والملاحة في العالم. بالمثل، توجيه الله هو ما يسمح لنا بالتمسك بالحق والملاحة في الحياة، تمامًا كما توفر الحواف قبضة قوية.'
    }
};

// Analyze fingerprint (simulated)
function analyzeFingerprint() {
    const fingerprintInput = document.getElementById("fingerprintInput");
    const resultDiv = document.getElementById("result");
    const reader = new FileReader();

    reader.onload = function(e) {
        const image = e.target.result;
        resultDiv.innerHTML = "<img src='" + image + "' alt='Fingerprint' class='fingerprint-image'>";
        const pattern = getFingerprintPattern(image); // Simulated result
        displayResults(pattern);
    };

    if (fingerprintInput.files[0]) {
        reader.readAsDataURL(fingerprintInput.files[0]);
    }
}

// Simulate fingerprint pattern detection
function getFingerprintPattern(image) {
    const patterns = ['arches', 'loops', 'whorls', 'ridges'];
    return patterns[Math.floor(Math.random() * patterns.length)];
}

// Display fingerprint analysis
function displayResults(pattern) {
    const resultDiv = document.getElementById("result");
    const data = fingerprintData[pattern];

    resultDiv.innerHTML += `
        <h2>Pattern: ${pattern.charAt(0).toUpperCase() + pattern.slice(1)}</h2>
        <p><strong>Scientific Fact:</strong> ${data.scientificFact}</p>
        <p><strong>Quran Verse:</strong> ${data.quranVerse}</p>
        <p><strong>الآية القرآنية:</strong> ${data.quranVerseArabic}</p>
        <p><strong>Explanation:</strong> ${data.explanation}</p>
        <p><strong>التفسير:</strong> ${data.explanationArabic}</p>
    `;

    // Update background color to match LED color
    document.body.style.backgroundColor = data.ledColor;
}
</script>
