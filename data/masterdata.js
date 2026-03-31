/**
 * ALPOTUS 4.0 - MASTER DATA ENGINE
 * One Single Source of Truth for all 1000+ potential items.
 * CEO: Sukkannagari Karthik Reddy
 */

const AlpotusData = {

    // 1. WEB TOOLS
    "tools": {
        title: "Web Tools",
        icon: "🛠️",
        items: [
            { id: "ppt-gen", name: "PPT Generator", desc: "Create professional PowerPoint presentations instantly.", icon: "📊", category: "Tools", path: "content/tools/ppt/index.html", date: "2024-05-25", tags: ["ppt","presentation"], status: "stable" },

            { id: "csv-flash", name: "Flashcards Generator", desc: "Convert CSV data into study-ready flashcards.", icon: "🗃️", category: "Tools", path: "content/tools/flashcard/index.html", date: "2024-05-25", tags: ["flashcards","csv"], status: "stable" },

            { id: "notes-ai", name: "Notes AI", desc: "AI-powered clinical and general note summarizer.", icon: "🤖", category: "Tools", path: "content/tools/notes/index.html", date: "2024-05-23", tags: ["ai","notes"], status: "stable" },

            { id: "image-converter", name: "Image Converter", desc: "Convert PNG to JPG or JPG to PNG.", icon: "🖼️", category: "Tools", path: "content/tools/img-converter/index.html", date: "2024-05-22", tags: ["image","converter"], status: "stable" },

            { id: "invoice-gen", name: "Invoice Generator", desc: "Create professional invoices for medical consultations.", icon: "🧾", category: "Tools", path: "content/tools/invoice-generator/index.html", date: "2024-05-21", tags: ["invoice","billing"], status: "stable" },

            { id: "habit-track", name: "Habit Tracker", desc: "Visual progress tracker for healthy lifestyle habits.", icon: "📅", category: "Tools", path: "content/tools/habit-tracker/index.html", date: "2024-05-20", tags: ["habit","tracker"], status: "stable" },

            { id: "image-resizer", name: "Image Resizer", desc: "Compress and resize images for research papers.", icon: "🖼️", category: "Tools", path: "content/tools/img-resizer/index.html", date: "2024-05-19", tags: ["image","resize"], status: "stable" },

            { id: "prescription", name: "Prescription Generator", desc: "Generate online prescriptions easily.", icon: "💊", category: "Tools", path: "content/tools/prescription/index.html", date: "2024-05-18", tags: ["prescription","medical"], status: "stable" },

            { id: "flowcharts", name: "Flowchart Generator", desc: "Generate beautiful flowcharts for free.", icon: "📊", category: "Tools", path: "content/tools/flowcharts/index.html", date: "2024-05-17", tags: ["flowchart","diagram"], status: "stable" }
        ]
    },

    // 2. CALCULATORS
    "calculators": {
        title: "Calculators",
        icon: "🧮",
        items: [
            { id: "bmi-calc", name: "BMI Calculator", desc: "Calculate Body Mass Index and health status.", icon: "⚖️", category: "Calculators", path: "content/calculators/bmi/index.html", date: "2024-05-25", tags: ["bmi","health"], status: "stable" },

            { id: "age-calc", name: "Age Calculator", desc: "Precise age calculation in years, months, days.", icon: "📅", category: "Calculators", path: "content/calculators/age/index.html", date: "2024-05-24", tags: ["age"], status: "stable" },

            { id: "water-intake", name: "Water Intake Calculator", desc: "Daily hydration requirement based on weight.", icon: "💧", category: "Calculators", path: "content/calculators/water/index.html", date: "2024-05-23", tags: ["water","hydration"], status: "stable" },

            { id: "full-body-anthro", name: "Anthro Analyzer", desc: "Full body anthropometry & muscle symmetry.", icon: "🧍", category: "Calculators", path: "content/calculators/full body/index.html", date: "2024-05-22", tags: ["anthropometry"], status: "stable" },

            { id: "ovulation", name: "Ovulation Tracker", desc: "Calculate most fertile days and ovulation cycle.", icon: "🥚", category: "Calculators", path: "content/calculators/ovulation/index.html", date: "2024-05-20", tags: ["fertility"], status: "stable" },

            { id: "edd-calc", name: "Pregnancy Delivery Calculator", desc: "Expected Date of Delivery (EDD) calculator.", icon: "🤰", category: "Calculators", path: "content/calculators/pregnancy/index.html", date: "2024-05-19", tags: ["pregnancy","edd"], status: "stable" },

            { id: "crcl-calc", name: "Creatinine Clearance", desc: "Estimate GFR using Cockcroft-Gault formula.", icon: "🧪", category: "Calculators", path: "content/calculators/creatinine/index.html", date: "2024-05-18", tags: ["gfr","kidney"], status: "stable" },

            { id: "anion-gap", name: "Anion Gap Calculator", desc: "Calculate serum anion gap for acid-base status.", icon: "📉", category: "Calculators", path: "content/calculators/anion-gap/index.html", date: "2024-05-17", tags: ["acid-base"], status: "stable" },

            { id: "iv-drip", name: "IV Drip Calculator", desc: "Calculate IV fluid flow rates and drop counts.", icon: "💧", category: "Calculators", path: "content/calculators/iv-drip/index.html", date: "2024-05-16", tags: ["iv","fluids"], status: "stable" },

            { id: "bsa-calc", name: "BSA Calculator", desc: "Body Surface Area for drug dosing.", icon: "📐", category: "Calculators", path: "content/calculators/bsa/index.html", date: "2024-05-15", tags: ["bsa","dosage"], status: "stable" }
        ]
    },

    // 3. CLINICAL SCORES
    "scores": {
        title: "Clinical Scores",
        icon: "📋",
        items: [
            { id: "gcs", name: "GCS Score", desc: "Glasgow Coma Scale for consciousness level.", icon: "🧠", category: "Scores", path: "content/scores/gcs/index.html", date: "2024-05-25", tags: ["neurology"], status: "stable" },

            { id: "apgar", name: "APGAR Score", desc: "Newborn health assessment tool.", icon: "👶", category: "Scores", path: "content/scores/apgar/index.html", date: "2024-05-24", tags: ["neonatal"], status: "stable" },

            { id: "child-pugh", name: "Child-Pugh Score", desc: "Liver cirrhosis prognosis and mortality.", icon: "🧪", category: "Scores", path: "content/scores/child-pugh/index.html", date: "2024-05-23", tags: ["liver"], status: "stable" },

            { id: "meld", name: "MELD Score", desc: "Model for End-Stage Liver Disease.", icon: "🩺", category: "Scores", path: "content/scores/meld/index.html", date: "2024-05-22", tags: ["liver"], status: "stable" },

            { id: "curb65", name: "CURB-65 Score", desc: "Pneumonia severity and mortality risk.", icon: "🫁", category: "Scores", path: "content/scores/curb65/index.html", date: "2024-05-21", tags: ["pneumonia"], status: "stable" },

            { id: "sofa", name: "SOFA Score", desc: "Sequential Organ Failure Assessment.", icon: "📉", category: "Scores", path: "content/scores/sofa/index.html", date: "2024-05-20", tags: ["icu"], status: "stable" },

            { id: "vasc", name: "CHA2DS2-VASc Score", desc: "Atrial fibrillation stroke risk score.", icon: "❤️", category: "Scores", path: "content/scores/vasc/index.html", date: "2024-05-19", tags: ["cardiology"], status: "stable" }
        ]
    },

    // 4. GAMES
    "games": {
        title: "Interactive Games",
        icon: "🎮",
        items: [
            { id: "triad-game", name: "Medical Triads", desc: "Master clinical triads in an interactive game.", icon: "🔺", category: "Games", path: "content/games/triadgame/index.html", date: "2024-05-25" },
            { id: "pharma-class", name: "Pharma Classification", desc: "Drug class matching and recall challenge.", icon: "💊", category: "Games", path: "content/games/pharmacology-classification/index.html", date: "2024-05-24" },
           
            { id: "pharma-hub", name: "PharmaMaster Pro", desc: "Learn all about  drugs.", icon: "💊", category: "Games", path: "content/games/ICA/index.html", date: "2024-05-22" },
            { id: "medical-challenge", name: "Medical Chalanges", desc: "There are many conceps waiting for you", icon: "⚕️", category: "Games", path: "content/games/medical-challenge/index.html", date: "2024-05-22" }
            
        ]
    },
    

    // 5. MBBS LIBRARY
    "mbbs": {
        title: "MBBS Library",
        icon: "📚",
        items: [
            { id: "pathology", name: "Pathology", desc: "General & Systemic Pathology notes.", icon: "🔬", category: "MBBS", path: "mbbs-explorer.html?sub=pathology", date: "2024-05-26", tags: ["path"], status: "stable" },

            { id: "microbiology", name: "Microbiology", desc: "Bacteriology, Virology & Immunology.", icon: "🧫", category: "MBBS", path: "mbbs-explorer.html?sub=microbiology", date: "2024-05-26", tags: ["micro"], status: "stable" },

            { id: "pharmacology", name: "Pharmacology", desc: "General & Clinical Pharmacotherapeutics.", icon: "💊", category: "MBBS", path: "mbbs-explorer.html?sub=pharmacology", date: "2024-05-26", tags: ["pharma"], status: "stable" }
        ]
    },

    // 6. ARTICLES
    "articles": {
        title: "Articles",
        icon: "📑",
        items: [
            { id: "ors-use", name: "How to Use ORS", desc: "Proper preparation and clinical use of Oral Rehydration.", icon: "🥤", category: "Articles", path: "content/articles/ors.html", date: "2024-05-25", tags: ["ors"], status: "stable" },

            { id: "alcohol-effect", name: "Alcohol Science", desc: "How to reduce physiological effects of alcohol.", icon: "🍷", category: "Articles", path: "content/articles/alcohol.html", date: "2024-05-21", tags: ["alcohol"], status: "stable" },

            { id: "vit-d-study", name: "Vitamin D Levels", desc: "Study on sunlight exposure and D3 levels.", icon: "☀️", category: "Articles", path: "content/articles/vitd-vs-sunlight", date: "2024-05-19", tags: ["vitamin-d"], status: "stable" },

            { id: "lap-chole", name: "Lap Chole Procedure", desc: "Surgical guide to laparoscopic cholecystectomy.", icon: "🔪", category: "Articles", path: "content/articles/laparoscopic-cholecystectomy.html", date: "2024-05-18", tags: ["surgery"], status: "stable" },

            { id: "1st-trimester", name: "1st Trimester Guide", desc: "First trimester management guidelines.", icon: "🤰", category: "Articles", path: "content/articles/pregnancy/1st.html", date: "2024-05-24", tags: ["pregnancy"], status: "stable" },

            { id: "2nd-trimester", name: "2nd Trimester Guide", desc: "Second trimester management protocols.", icon: "📘", category: "Articles", path: "content/articles/pregnancy/2nd.html", date: "2024-05-23", tags: ["pregnancy"], status: "stable" },

            { id: "3rd-trimester", name: "3rd Trimester Guide", desc: "Third trimester surveillance and care.", icon: "📗", category: "Articles", path: "content/articles/pregnancy/3rd.html", date: "2024-05-22", tags: ["pregnancy"], status: "stable" }
        ]
    }
};


/**
 * CEO INFORMATION
 */
const AlpotusCEO = {
    name: "Sukkannagari Karthik Reddy",
    role: "CEO & Founder",
    image: "assets/images/ceo-karthik.png",
    bio: "Sukkannagari Karthik Reddy is the visionary behind Alpotus, dedicated to simplifying medical and web utilities for the next generation."
};
