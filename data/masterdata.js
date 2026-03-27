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
            { id: "ppt-gen", name: "PPT Generator", desc: "Create professional PowerPoint presentations instantly.", icon: "📊", category: "Tools", path: "content/tools/ppt-generator/index.html", date: "2024-05-25" },
            { id: "csv-flash", name: "CSV to Flashcards", desc: "Convert CSV data into study-ready flashcards.", icon: "🗃️", category: "Tools", path: "content/tools/csv-generator/index.html", date: "2024-05-25" },
            { id: "md-notes", name: "Markdown Notes", desc: "Distraction-free markdown note-taking tool.", icon: "📝", category: "Tools", path: "content/tools/markdown-notes/index.html", date: "2024-05-24" },
            { id: "notes-ai", name: "Notes AI", desc: "AI-powered clinical and general note summarizer.", icon: "🤖", category: "Tools", path: "content/tools/notes/index.html", date: "2024-05-23" },
            { id: "form-fill", name: "Auto Form Filler", desc: "Streamline repetitive medical form entry tasks.", icon: "✍️", category: "Tools", path: "content/tools/forms-fill/index.html", date: "2024-05-22" },
            { id: "invoice-gen", name: "Invoice Generator", desc: "Create professional invoices for medical consultations.", icon: "🧾", category: "Tools", path: "content/tools/invoice-generator/index.html", date: "2024-05-21" },
            { id: "habit-track", name: "Habit Tracker", desc: "Visual progress tracker for healthy lifestyle habits.", icon: "📅", category: "Tools", path: "content/tools/habit-tracker/index.html", date: "2024-05-20" },
            { id: "study-track", name: "Study Timer", desc: "Advanced study tracker with goal setting.", icon: "🎓", category: "Tools", path: "content/tools/study-tracker/index.html", date: "2024-05-19" },
            { id: "img-resize", name: "Image Resizer", desc: "Compress and resize images for research papers.", icon: "🖼️", category: "Tools", path: "content/tools/image-resizer/index.html", date: "2024-05-18" },
            { id: "pomodoro", name: "Pomodoro Timer", desc: "Focus booster using the Pomodoro technique.", icon: "🍅", category: "Tools", path: "content/toolsimg/pomodoro/index.html", date: "2024-05-17" }
        ]
    },

    // 2. CALCULATORS
    "calculators": {
        title: "Calculators",
        icon: "🧮",
        items: [
            { id: "bmi-calc", name: "BMI Calculator", desc: "Calculate Body Mass Index and health status.", icon: "⚖️", category: "Calculators", path: "content/calculators/bmi/index.html", date: "2024-05-25" },
            { id: "age-calc", name: "Age Calculator", desc: "Precise age calculation in years, months, days.", icon: "📅", category: "Calculators", path: "content/calculators/age/index.html", date: "2024-05-24" },
            { id: "water-intake", name: "Water Intake", desc: "Daily hydration requirement based on weight.", icon: "💧", category: "Calculators", path: "content/calculators/water/index.html", date: "2024-05-23" },
            { id: "full-body-anthro", name: "Anthro Analyzer", desc: "Full body anthropometry & muscle symmetry.", icon: "🧍", category: "Calculators", path: "content/calculators/full body/index.html", date: "2024-05-22" },
            { id: "bmr-calc", name: "BMR Calculator", desc: "Basal Metabolic Rate using Mifflin-St Jeor.", icon: "🔥", category: "Calculators", path: "content/calculators/bmr/index.html", date: "2024-05-21" },
            { id: "ovulation", name: "Ovulation Tracker", desc: "Calculate most fertile days and ovulation cycle.", icon: "🥚", category: "Calculators", path: "content/calculators/ovulation/index.html", date: "2024-05-20" },
            { id: "edd-calc", name: "Pregnancy Delivery", desc: "Expected Date of Delivery (EDD) calculator.", icon: "🤰", category: "Calculators", path: "content/calculators/pregnancy/index.html", date: "2024-05-19" },
            { id: "crcl-calc", name: "Creatine Clearance", desc: "Estimate GFR using Cockcroft-Gault formula.", icon: "🧪", category: "Calculators", path: "content/calculators/creatinine/index.html", date: "2024-05-18" },
            { id: "anion-gap", name: "Anion Gap", desc: "Calculate serum anion gap for acid-base status.", icon: "📉", category: "Calculators", path: "content/calculators/anion-gap/index.html", date: "2024-05-17" },
            { id: "iv-drip", name: "IV Drip Volume", desc: "Calculate IV fluid flow rates and drop counts.", icon: "💧", category: "Calculators", path: "content/calculators/iv-drip/index.html", date: "2024-05-16" },
            { id: "bsa-calc", name: "BSA Calculator", desc: "Body Surface Area for drug dosing.", icon: "📐", category: "Calculators", path: "content/calculators/bsa/index.html", date: "2024-05-15" }
        ]
    },

    // 3. CLINICAL SCORES
    "scores": {
        title: "Clinical Scores",
        icon: "📋",
        items: [
            { id: "gcs", name: "GCS Score", desc: "Glasgow Coma Scale for consciousness level.", icon: "🧠", category: "Scores", path: "content/scores/gcs/index.html", date: "2024-05-25" },
            { id: "apgar", name: "APGAR Score", desc: "Newborn health assessment tool.", icon: "👶", category: "Scores", path: "content/scores/apgar/index.html", date: "2024-05-24" },
            { id: "child-pugh", name: "Child-Pugh", desc: "Liver cirrhosis prognosis and mortality.", icon: "🧪", category: "Scores", path: "content/scores/child-pugh/index.html", date: "2024-05-23" },
            { id: "meld", name: "MELD Score", desc: "Model for End-Stage Liver Disease.", icon: "🩺", category: "Scores", path: "content/scores/meld/index.html", date: "2024-05-22" },
            { id: "curb65", name: "CURB-65", desc: "Pneumonia severity and mortality risk.", icon: "🫁", category: "Scores", path: "content/scores/curb65/index.html", date: "2024-05-21" },
            { id: "sofa", name: "SOFA Score", desc: "Sequential Organ Failure Assessment.", icon: "📉", category: "Scores", path: "content/scores/sofa/index.html", date: "2024-05-20" },
            { id: "vasc", name: "CHA2DS2-VASc", desc: "Atrial fibrillation stroke risk score.", icon: "❤️", category: "Scores", path: "content/scores/vasc/index.html", date: "2024-05-19" }
        ]
    },

    // 4. GAMES
    "games": {
        title: "Interactive Games",
        icon: "🎮",
        items: [
            { id: "triad-game", name: "Medical Triads", desc: "Master clinical triads in an interactive game.", icon: "🔺", category: "Games", path: "content/games/triads/index.html", date: "2024-05-25" },
            { id: "pharma-class", name: "Pharma Classification", desc: "Drug class matching and recall challenge.", icon: "💊", category: "Games", path: "content/games/pharma-class/index.html", date: "2024-05-24" },
            { id: "drug-ind", name: "Drug Indications", desc: "Identify the therapeutic uses of major drugs.", icon: "✅", category: "Games", path: "content/games/shared/drug-indications.html", date: "2024-05-23" },
            { id: "drug-contra", name: "Contraindications", desc: "Learn when NOT to prescribe specific drugs.", icon: "❌", category: "Games", path: "content/games/shared/drug-contraindications.html", date: "2024-05-22" }
        ]
    },

    "mbbs": {
        title: "MBBS Library",
        icon: "📚",
        items: [
            { id: "pathology", name: "Pathology", desc: "General & Systemic Pathology notes.", icon: "🔬", category: "MBBS", path: "mbbs-explorer.html?sub=pathology", date: "2024-05-26" },
            { id: "microbiology", name: "Microbiology", desc: "Bacteriology, Virology & Immunology.", icon: "🧫", category: "MBBS", path: "mbbs-explorer.html?sub=microbiology", date: "2024-05-26" },
            { id: "pharmacology", name: "Pharmacology", desc: "General & Clinical Pharmacotherapeutics.", icon: "💊", category: "MBBS", path: "mbbs-explorer.html?sub=pharmacology", date: "2024-05-26" }
        ]
    },

    // 6. ARTICLES
    "articles": {
        title: "Articles",
        icon: "📑",
        items: [
            { id: "ors-use", name: "How to use ORS", desc: "Proper preparation and clinical use of Oral Rehydration.", icon: "🥤", category: "Articles", path: "content/articles/ors/index.html", date: "2024-05-25" },
            { id: "flashcard-guide", name: "Making Flashcards", desc: "The science of active recall and flashcard design.", icon: "🗂️", category: "Articles", path: "content/articles/flashcards/index.html", date: "2024-05-24" },
            { id: "digital-notes", name: "Digital Note Taking", desc: "Workflow for medical students using Notion/iPad.", icon: "💻", category: "Articles", path: "content/articles/notes-guide/index.html", date: "2024-05-23" },
            { id: "history-taking", name: "History Taking", desc: "Systematic approach to clinical history taking.", icon: "🗣️", category: "Articles", path: "content/articles/history/index.html", date: "2024-05-22" },
            { id: "alcohol-effect", name: "Alcohol Science", desc: "How to reduce physiological effects of alcohol.", icon: "🍷", category: "Articles", path: "content/articles/alcohol/index.html", date: "2024-05-21" },
            { id: "grains-comp", name: "Rice vs Millet", desc: "Nutritional comparison of staple grains.", icon: "🌾", category: "Articles", path: "content/articles/grains/index.html", date: "2024-05-20" },
            { id: "vit-d-study", name: "Vitamin D Levels", desc: "Study on sunlight exposure and D3 levels.", icon: "☀️", category: "Articles", path: "content/articles/vitamin-d/index.html", date: "2024-05-19" },
            { id: "lap-chole", name: "Lap Chole Procedure", desc: "Surgical guide to Laparoscopic Cholecystectomy.", icon: "🔪", category: "Articles", path: "content/articles/surgery-guide/index.html", date: "2024-05-18" }
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
