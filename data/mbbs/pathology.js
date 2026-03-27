const SubjectData = {
    title: "Pathology",
    chapters: {
        "general-pathology": {
            title: "General Pathology",
            topics: [
                {
                    id: "cell-injury",
                    title: "Cell Injury & Adaptation",
                    content: `
                        <h2>Mechanism of Reversible Injury</h2>
                        <p>The hallmark of reversible injury is <mark>reduced oxidative phosphorylation</mark> leading to ATP depletion. This results in the failure of the <mark>Sodium-Potassium pump</mark>, causing cellular swelling.</p>
                        
                        <h2>Cellular Adaptations</h2>
                        <p><strong>Hypertrophy:</strong> Increase in cell <mark>size</mark>.<br>
                        <strong>Hyperplasia:</strong> Increase in cell <mark>number</mark>.<br>
                        <strong>Atrophy:</strong> Decrease in cell mass.</p>
                    `,
                    ankiPairs: [
                        { q: "Hallmark of reversible cell injury?", a: "Reduced oxidative phosphorylation and ATP depletion." },
                        { q: "What causes cellular swelling in injury?", a: "Failure of the Na+/K+ ATPase pump." }
                    ]
                }
            ]
        },
        "hematology": {
            title: "Hematology",
            topics: [
                { id: "iron-deficiency", title: "Iron Deficiency Anemia", content: "..." }
            ]
        }
    }
};