// Store data related to fingerprint patterns, Quran verses, and scientific facts (with Arabic translations and longer explanations)
const fingerprintPatterns = {
    arches: {
        ledColor: 'blue',
        scientificFact: 'Arches are the most common fingerprint pattern, forming smooth, curved ridges. They represent simplicity and unity.',
        scientificFactArabic: 'الأقواس هي النمط الأكثر شيوعًا في بصمات الأصابع، وتشكل حوافًا ناعمة ومنحنية. تمثل البساطة والوحدة.',
        quranVerse: 'Indeed, We have created man in the best of stature.',
        quranVerseArabic: 'إِنَّا خَلَقْنَا الإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
        explanation: 'Arches symbolize the simplicity and perfection in the design of Allah’s creation. Their flowing and unbroken structure reflects harmony and balance, reminding us that even in the smallest parts of our body, like fingerprints, there is a divine order and intentionality.',
        explanationArabic: 'تمثل الأقواس البساطة والكمال في تصميم خلق الله. يعكس هيكلها المتدفق والمتصل الانسجام والتوازن، مما يذكرنا بأنه حتى في أصغر أجزاء أجسامنا، مثل بصمات الأصابع، يوجد نظام إلهي وقصد دقيق.'
    },
    loops: {
        ledColor: 'green',
        scientificFact: 'Loops are the second most common fingerprint pattern and have ridges that enter from one side, curve around, and exit from the same side. Each loop is unique, highlighting the individuality of every person.',
        scientificFactArabic: 'الحلقات هي ثاني أكثر أنماط البصمات شيوعًا، وتحتوي على حواف تدخل من جانب واحد، وتلتف، وتخرج من نفس الجانب. كل حلقة فريدة، مما يبرز فردية كل شخص.',
        quranVerse: 'And We have certainly created man and We know what his soul whispers to him, and We are closer to him than [his] jugular vein.',
        quranVerseArabic: 'وَلَقَدْ خَلَقْنَا الْإِنسَانَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِ نَفْسُهُ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ',
        explanation: 'Loops reflect the continuous movement and flow of life. Their repetitive but unique patterns remind us of how every soul has a distinct journey and connection to Allah. Just as the loops are never identical, our inner thoughts and whispers are deeply personal, and yet Allah is always closer to us than anything else.',
        explanationArabic: 'تعكس الحلقات الحركة المستمرة وتدفق الحياة. وتذكرنا أنماطها المتكررة ولكن الفريدة بأن لكل روح رحلة واتصال فريد مع الله. تمامًا كما لا تتطابق الحلقات أبدًا، فإن أفكارنا وهمساتنا الداخلية شخصية للغاية، ومع ذلك فإن الله دائمًا أقرب إلينا من أي شيء آخر.'
    },
    whorls: {
        ledColor: 'red',
        scientificFact: 'Whorls form circular or spiral shapes and are more intricate than loops and arches. They are less common, representing complexity and uniqueness.',
        scientificFactArabic: 'تشكل الدوامات أشكالًا دائرية أو لولبية، وهي أكثر تعقيدًا من الحلقات والأقواس. إنها أقل شيوعًا، مما يمثل التعقيد والتميّز.',
        quranVerse: 'He is the Creator of the heavens and the earth; He created all things in the best way.',
        quranVerseArabic: 'هُوَ خَالِقُ السَّمَاوَاتِ وَالْأَرْضِ، خَلَقَ كُلَّ شَيْءٍ بِأَحْسَنِ صُورَةٍ',
        explanation: 'Whorls symbolize the intricate beauty and depth within every human. Their spiral formation is a reflection of the complexity and detail in Allah’s creation. Just like galaxies spiral and fingerprints swirl, everything in creation follows a pattern of divine precision and beauty.',
        explanationArabic: 'تمثل الدوامات الجمال العميق والمعقد داخل كل إنسان. ويعكس تشكيلها الحلزوني التعقيد والدقة في خلق الله. تمامًا كما تتكون المجرات بشكل حلزوني وتلتف بصمات الأصابع، يتبع كل شيء في الخلق نمطًا من الدقة والجمال الإلهي.'
    },
    ridges: {
        ledColor: 'yellow',
        scientificFact: 'Ridges are the raised lines that make up fingerprint patterns. They enhance our sense of touch and allow us to grip surfaces effectively.',
        scientificFactArabic: 'الحواف هي الخطوط البارزة التي تشكل أنماط بصمات الأصابع. إنها تعزز حاسة اللمس لدينا وتسمح لنا بالإمساك بالأشياء بشكل فعال.',
        quranVerse: 'And He found you lost and guided [you].',
        quranVerseArabic: 'وَوَجَدَكَ ضَالاًّ فَهَدَىٰ',
        explanation: 'Ridges provide grip, direction, and functionality — much like divine guidance provides purpose and clarity in our lives. Just as ridges help us interact with the world physically, Allah’s guidance helps us navigate our spiritual journey with strength and precision.',
        explanationArabic: 'توفر الحواف قبضة واتجاهًا ووظيفة، تمامًا كما توفر الهداية الإلهية الغاية والوضوح في حياتنا. كما تساعدنا الحواف على التفاعل مع العالم ماديًا، تساعدنا هداية الله على التنقل في رحلتنا الروحية بقوة ودقة.'
    }
};
