/**
 * 1. YOUR DATA ENTRY ZONE
 * Paste your Microbiology or Pharmacology notes here.
 */
const RawInput = `
// PASTE YOUR TEXT BLOCKS HERE (AS SHOWN IN THE EXAMPLES ABOVE)

CHAPTER: Gastrointestinal Pathology

TOPIC_ID: peptic-ulcer

TOPIC_TITLE: Peptic Ulcer Disease

CONTENT:
<b>Definition</b>
Peptic ulcer disease is a chronic ulceration occurring in portions of the gastrointestinal tract exposed to gastric acid and pepsin, mainly the stomach and first part of the duodenum.

<b>Common Sites</b>
- Duodenum
- Stomach
- Lower esophagus
- Gastrojejunostomy stoma
- Meckel diverticulum with ectopic gastric mucosa

<b>Etiology</b>
- Helicobacter pylori infection
- Increased acid secretion
- NSAID use
- Smoking
- Alcohol
- Stress
- Corticosteroids
- Zollinger-Ellison syndrome
- Genetic factors

<b>Pathogenesis</b>
Peptic ulcer develops when aggressive factors such as acid, pepsin, H. pylori and NSAIDs overpower defensive factors such as mucus, bicarbonate, prostaglandins and mucosal blood flow.

<b>Gross Morphology</b>
- Solitary punched-out ulcer
- Round or oval
- Sharply demarcated margins
- Clean smooth base
- Usually less than 2 cm
- Radiating mucosal folds may be present

<b>Microscopy</b>
Four layers are seen from above downward:
1. Necrotic fibrinoid debris
2. Acute inflammatory cells
3. Granulation tissue
4. Fibrous scar tissue

<b>Clinical Features</b>
- Burning epigastric pain
- Pain related to meals
- Nausea
- Vomiting
- Bloating
- Weight loss in gastric ulcer
- Pain relieved by food in duodenal ulcer

<b>Complications</b>
- Hemorrhage
- Perforation
- Penetration
- Gastric outlet obstruction
- Rare malignant change in gastric ulcer

FLOWCHART:
Aggressive factors increase
-> Acid
-> Pepsin
-> H. pylori
-> NSAIDs

Defensive factors decrease
-> Mucus barrier
-> Bicarbonate secretion
-> Prostaglandins
-> Mucosal blood flow

Aggressive factors exceed defensive factors
-> Mucosal injury
-> Inflammation
-> Necrosis
-> Ulcer formation
-> Hemorrhage or Perforation or Obstruction

FLOWCHART:
H. pylori infection
-> Urease production
-> Ammonia formation
-> Mucosal damage
-> Chronic gastritis
-> Increased acid secretion
-> Peptic ulcer

FLOWCHART:
NSAID use
-> Cyclooxygenase inhibition
-> Decreased prostaglandins
-> Decreased mucus and bicarbonate
-> Reduced mucosal protection
-> Ulcer formation

TABLE:
| Feature | Gastric Ulcer | Duodenal Ulcer |
| Pain relation to food | Increases after meals | Relieved by meals |
| Weight | Weight loss common | Weight gain may occur |
| Acid secretion | Normal or decreased | Increased |
| Common age | Older adults | Younger adults |
| Malignancy | May be malignant | Never malignant |

TABLE:
| Layer | Microscopic Appearance |
| 1 | Necrotic fibrinoid debris |
| 2 | Acute inflammatory cells mainly neutrophils |
| 3 | Granulation tissue |
| 4 | Fibrous scar tissue |

TABLE:
| Ulcer Site | Common Complication |
| Anterior duodenal ulcer | Perforation |
| Posterior duodenal ulcer | Bleeding due to gastroduodenal artery erosion |

ANKI:
Q: What is the most common cause of peptic ulcer disease? | A: Helicobacter pylori infection

Q: Which is more common, gastric or duodenal ulcer? | A: Duodenal ulcer

Q: Which part of the duodenum is most commonly involved? | A: First part of the duodenum

Q: What are the four microscopic layers of a peptic ulcer? | A: Necrotic debris, inflammatory cells, granulation tissue, fibrous scar

Q: Which duodenal ulcer usually perforates? | A: Anterior duodenal ulcer

Q: Which duodenal ulcer commonly causes bleeding? | A: Posterior duodenal ulcer

Q: Why do NSAIDs produce peptic ulcers? | A: They reduce prostaglandin synthesis and decrease mucosal protection

Q: Why should every gastric ulcer be biopsied? | A: To rule out malignancy

Q: Which complication is most common in peptic ulcer disease? | A: Hemorrhage

NOTES:
- Remember that duodenal ulcers are more common than gastric ulcers
- Gastric ulcers may be malignant, duodenal ulcers are not
- Posterior duodenal ulcer causes bleeding
- Anterior duodenal ulcer causes perforation
- Revise the four microscopic layers in sequence

---


`;

/**
 * 2. THE VOID (The Multi-Parser)
 * This logic handles multiple Tables, multiple Flowcharts, and no commas.
 */
(function() {
    function buildData(rawText) {
        const chapters = {};
        const blocks = rawText.split('---');

        const formatBlock = (val, type) => {
            if (!val) return "";
            
            if (type === 'TABLE') {
                const tables = val.split(/\n(?=TABLE:)/); 
                return tables.map(t => {
                    const rows = t.replace('TABLE:', '').trim().split('\n')
                        .map(r => r.trim().replace(/^\||\|$/g, ''))
                        .filter(r => r.includes('|'));
                    if (rows.length === 0) return "";
                    let html = '<table class="path-table"><thead><tr>';
                    rows[0].split('|').forEach(h => html += `<th>${h.trim()}</th>`);
                    html += '</tr></thead><tbody>';
                    rows.slice(1).forEach(row => {
                        html += '<tr>';
                        row.split('|').forEach(cell => html += `<td>${cell.trim()}</td>`);
                        html += '</tr>';
                    });
                    return html + '</tbody></table>';
                }).join('');
            }

            if (type === 'FLOW') {
                const flows = val.split(/\n(?=FLOWCHART:)/);
                return flows.map(f => {
                    const cleanFlow = f.replace('FLOWCHART:', '').trim();
                    if (!cleanFlow) return "";
                    const steps = cleanFlow.split('->').map(s => `<div class="flow-step">${s.trim()}</div>`).join('<div class="flow-arrow">↓</div>');
                    return `<div class="flow-container">${steps}</div>`;
                }).join('');
            }

            return val.trim().replace(/\n/g, '<br>');
        };

        blocks.forEach(block => {
            if (!block.trim() || !block.includes('CHAPTER:')) return;

            const getVal = (label, all = false) => {
                const regex = new RegExp(`${label}:\\s*([\\s\\S]*?)(?=\\n[A-Z_]+:|$)`, all ? 'g' : '');
                if (all) {
                    const matches = [...block.matchAll(regex)];
                    return matches.map(m => m[1].trim()).join(`\n${label}: `);
                }
                const match = block.match(regex);
                return match ? match[1].trim() : "";
            };

            const chapterTitle = getVal("CHAPTER");
            const chapterId = chapterTitle.toLowerCase().replace(/\s+/g, '-');

            if (!chapters[chapterId]) {
                chapters[chapterId] = { title: chapterTitle, topics: [] };
            }

            let fullContent = formatBlock(getVal("CONTENT"), 'TEXT');
            const tableData = getVal("TABLE", true);
            const flowData = getVal("FLOWCHART", true);
            
            if (tableData) fullContent += formatBlock(tableData, 'TABLE');
            if (flowData) fullContent += formatBlock(flowData, 'FLOW');

            chapters[chapterId].topics.push({
                id: getVal("TOPIC_ID"),
                title: getVal("TOPIC_TITLE"),
                content: fullContent,
                futureNotes: formatBlock(getVal("NOTES"), 'TEXT'),
                ankiPairs: getVal("ANKI").split('\n').filter(l => l.includes('|')).map(line => {
                    const [q, a] = line.split('|');
                    return { q: q.replace('Q:', '').trim(), a: a.replace('A:', '').trim() };
                })
            });
        });

        // Set Database Title dynamically based on content (e.g. Microbiology)
        return { title: "Medical Database", chapters };
    }

    // Attach to the Window so your HTML can access it
    window.SubjectData = buildData(RawInput);
    console.log("Database successfully generated from the Void.");
})();
