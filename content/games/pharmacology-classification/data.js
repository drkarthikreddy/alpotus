/**
 * ALPOTUS 5.0 - CLASSIFICATION DATA BRAIN
 */
const ClassificationData = {
    "Pharmacology": {
        color: "#3b82f6",
        chapters: {
            "Autacoids": [
                {
                    id: "nsaids-01",
                    name: "NSAIDs – Classification",
                    categories: ["Preferential COX-2", "Selective COX-2", "Propionic acid", "Salicylates"],
                    mnemonic: "💡 Mnemonic: 'Cele'coxib is 'Selective'",
                    items: [
                        { name: "Nimesulide", category: "Preferential COX-2", note: "Commonly used for fever; risk of hepatotoxicity." },
                        { name: "Celecoxib", category: "Selective COX-2", note: "Sulphonamide derivative; avoids gastric irritation." },
                        { name: "Ibuprofen", category: "Propionic acid", note: "Prototype propionic acid derivative; safer in children." },
                        { name: "Aspirin", category: "Salicylates", note: "Irreversibly inhibits COX; used in low dose for anti-platelet." }
                    ]
                }
            ]
        }
    },
    "Microbiology": {
        color: "#8b5cf6",
        chapters: {
            "Bacteriology": [
                {
                    id: "mic-01",
                    name: "Gram Stain Response",
                    categories: ["Gram Positive", "Gram Negative"],
                    mnemonic: "💡 Mnemonic: COCCI are mostly Positive (except Neisseria)",
                    items: [
                        { name: "Staphylococcus", category: "Gram Positive", note: "Catalase positive; occurs in grape-like clusters." },
                        { name: "Neisseria", category: "Gram Negative", note: "Coffee bean shaped diplococci; causes meningitis." }
                    ]
                }
            ]
        }
    }
};

/* --------------------------------------------------------- */const MyAddedClassifications = [
/* ALPOTUS VOID - PASTE NEW GAMES BELOW THIS LINE            */
{
    "id": "gen-1774889766395",
    "name": "Histaminergic Agonists",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Nonselective agonists",
        "Selective H1 agonists",
        "Selective H2 agonists",
        "Selective H3 agonists"
    ],
    "mnemonic": "Histamine & Betahistine = Broad; Methyl/Pyridyl/Thiazolyl = H1; Dimaprit/Impromidine = H2; Alpha-Methylhistamine/Imetit = H3",
    "items": [
        {
            "name": "Histamine",
            "category": "Nonselective agonists",
            "note": ""
        },
        {
            "name": "Betahistine",
            "category": "Nonselective agonists",
            "note": ""
        },
        {
            "name": "2-Methylhistamine",
            "category": "Selective H1 agonists",
            "note": ""
        },
        {
            "name": "2-Pyridyl ethylamine",
            "category": "Selective H1 agonists",
            "note": ""
        },
        {
            "name": "2-Thiazolyl ethylamine",
            "category": "Selective H1 agonists",
            "note": ""
        },
        {
            "name": "Dimaprit",
            "category": "Selective H2 agonists",
            "note": ""
        },
        {
            "name": "Impromidine",
            "category": "Selective H2 agonists",
            "note": ""
        },
        {
            "name": "(R)-α-Methylhistamine",
            "category": "Selective H3 agonists",
            "note": ""
        },
        {
            "name": "Imetit",
            "category": "Selective H3 agonists",
            "note": ""
        }
    ]
},

{
    "id": "gen-1774890196967",
    "name": "H1 Antagonists ",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Highly sedative",
        "Moderately sedative",
        "Mildly sedative",
        "Second generation (nonsedating) antihistaminics"
    ],
    "mnemonic": "Highly sedative: Diphenhydramine, Dimenhydrinate, Promethazine, Hydroxyzine → Moderate: Cyproheptadine, Meclozine, Cinnarizine → Mild: Pheniramine, Chlorpheniramine, Dexchlorpheniramine, Triprolidine, Clemastine → Second generation: Fexofenadine, Loratadine, Desloratadine, Cetirizine, Levocetirizine, Azelastine, Mizolastine, Ebastine, Rupatadine",
    "items": [
        {
            "name": "Diphenhydramine",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Dimenhydrinate",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Promethazine",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Hydroxyzine",
            "category": "Highly sedative",
            "note": ""
        },
        {
            "name": "Cyproheptadine",
            "category": "Moderately sedative",
            "note": ""
        },
        {
            "name": "Meclozine",
            "category": "Moderately sedative",
            "note": ""
        },
        {
            "name": "Cinnarizine",
            "category": "Moderately sedative",
            "note": ""
        },
        {
            "name": "Pheniramine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Chlorpheniramine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Dexchlorpheniramine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Triprolidine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Clemastine",
            "category": "Mildly sedative",
            "note": ""
        },
        {
            "name": "Fexofenadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Loratadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Desloratadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Cetirizine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Levocetirizine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Azelastine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Mizolastine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Ebastine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        },
        {
            "name": "Rupatadine",
            "category": "Second generation (nonsedating) antihistaminics",
            "note": ""
        }
    ]
},



{
    "id": "gen-1774890339765",
    "name": "5- Hydroxy Tryptamine Antagonists",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Nonselective antagonists & partial agonists/antagonists",
        "5-HT2 Antagonists",
        "5-HT3 Antagonists"
    ],
    "mnemonic": "Ergot-LSD-Methysergide-Cyproheptadine-Cinnarizine = Nonselective; Ketanserin-Ritanserin-Clozapine-Risperidone = 5-HT2; Ondansetron group = 5-HT3",
    "items": [
        {
            "name": "Ergotamine",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Lysergic acid diethyl amide (LSD)",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "2-Bromo LSD",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Methysergide",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Cyproheptadine",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Cinnarizine",
            "category": "Nonselective antagonists & partial agonists/antagonists",
            "note": ""
        },
        {
            "name": "Ketanserin",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Ritanserin",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Clozapine",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Risperidone",
            "category": "5-HT2 Antagonists",
            "note": ""
        },
        {
            "name": "Ondansetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Granisetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Tropisetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Palonosetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        },
        {
            "name": "Ramosetron",
            "category": "5-HT3 Antagonists",
            "note": ""
        }
    ]
},
    
    
    {
    "id": "gen-1774890642922",
    "name": "Drugs For Migraine ",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "To treat attacks",
        "To prevent attacks",
        "Selective 5-HT1D/1B agonists",
        "Ergot alkaloids"
    ],
    "mnemonic": "Acute attack: Analgesics + Antiemetics + NSAIDs; Prevention: Propranolol, Amitriptyline, Flunarizine, Gabapentin, Topiramate, Erenumab, Valproic acid; Triptans abort attack; Ergot alkaloids are older alternatives.",
    "items": [
        {
            "name": "Paracetamol",
            "category": "To treat attacks",
            "note": "Useful in mild migraine attacks."
        },
        {
            "name": "Aspirin",
            "category": "To treat attacks",
            "note": "Effective in acute migraine; often combined with antiemetic."
        },
        {
            "name": "Codeine",
            "category": "To treat attacks",
            "note": "Reserved for severe pain not relieved by simple analgesics."
        },
        {
            "name": "Metoclopramide",
            "category": "To treat attacks",
            "note": "Controls nausea and enhances gastric emptying during migraine."
        },
        {
            "name": "Domperidone",
            "category": "To treat attacks",
            "note": "Antiemetic used when nausea and vomiting accompany migraine."
        },
        {
            "name": "Prochlorperazine",
            "category": "To treat attacks",
            "note": "Useful antiemetic in acute migraine with vomiting."
        },
        {
            "name": "Promethazine",
            "category": "To treat attacks",
            "note": "Sedative antiemetic sometimes used in migraine."
        },
        {
            "name": "Ibuprofen",
            "category": "To treat attacks",
            "note": "Common NSAID for acute migraine attack."
        },
        {
            "name": "Naproxen",
            "category": "To treat attacks",
            "note": "Longer acting NSAID useful in migraine."
        },
        {
            "name": "Diclofenac",
            "category": "To treat attacks",
            "note": "Rapidly acting NSAID used in acute migraine."
        },
        {
            "name": "Mephenamic acid",
            "category": "To treat attacks",
            "note": "NSAID occasionally used in migraine attacks."
        },
        {
            "name": "Propranolol",
            "category": "To prevent attacks",
            "note": "Most commonly used prophylactic drug for migraine."
        },
        {
            "name": "Amitriptyline",
            "category": "To prevent attacks",
            "note": "Useful prophylactic especially when migraine is associated with depression."
        },
        {
            "name": "Flunarizine",
            "category": "To prevent attacks",
            "note": "Calcium channel blocker used for migraine prophylaxis."
        },
        {
            "name": "Gabapentin",
            "category": "To prevent attacks",
            "note": "May reduce frequency of migraine attacks."
        },
        {
            "name": "Topiramate",
            "category": "To prevent attacks",
            "note": "Effective prophylactic for recurrent migraine."
        },
        {
            "name": "Erenumab",
            "category": "To prevent attacks",
            "note": "Monoclonal antibody against CGRP receptor used in resistant migraine."
        },
        {
            "name": "Valproic acid",
            "category": "To prevent attacks",
            "note": "Antiepileptic useful for migraine prophylaxis."
        },
        {
            "name": "Sumatriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Prototype triptan; aborts acute migraine by cranial vasoconstriction."
        },
        {
            "name": "Rizatriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Triptan used for acute migraine attack."
        },
        {
            "name": "Naratriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Longer acting triptan with slower onset."
        },
        {
            "name": "Zolmitriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Effective oral triptan for acute migraine."
        },
        {
            "name": "Frovatriptan",
            "category": "Selective 5-HT1D/1B agonists",
            "note": "Very long acting triptan useful in recurrent migraine."
        },
        {
            "name": "Ergotamine",
            "category": "Ergot alkaloids",
            "note": "Older antimigraine drug; more effective if taken early in attack."
        },
        {
            "name": "Dihydroergotamine (DHE)",
            "category": "Ergot alkaloids",
            "note": "Less emetic than ergotamine and used in severe migraine."
        }
    ]
},
    
{
    "id": "gen-1774890756254",
    "name": "Prostaglandins",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Natural PGs",
        "Prostaglandin analogues"
    ],
    "mnemonic": "Natural PGs = Dino-Dino-Alpro-Epo; Analogues = Carbo-Miso-Lata-Travo-Bima",
    "items": [
        {
            "name": "Dinoprostone (PGE2)",
            "category": "Natural PGs",
            "note": "Used for cervical ripening and induction of labour."
        },
        {
            "name": "Gemeprost",
            "category": "Natural PGs",
            "note": "PGE1 analogue used for cervical softening and medical termination of pregnancy."
        },
        {
            "name": "Dinoprost (PGF2α)",
            "category": "Natural PGs",
            "note": "Causes uterine contraction and is used for mid-trimester abortion."
        },
        {
            "name": "Alprostadil (PGE1)",
            "category": "Natural PGs",
            "note": "Maintains patency of ductus arteriosus and is also used in erectile dysfunction."
        },
        {
            "name": "Prostacyclin (PGI2) (Epoprostenol)",
            "category": "Natural PGs",
            "note": "Potent vasodilator and inhibitor of platelet aggregation used in pulmonary hypertension."
        },
        {
            "name": "Carboprost (15-methyl PGF2α)",
            "category": "Prostaglandin analogues",
            "note": "Used to control postpartum haemorrhage and for abortion."
        },
        {
            "name": "Misoprostol (methyl PGE1 ester)",
            "category": "Prostaglandin analogues",
            "note": "Prevents NSAID-induced peptic ulcer and is used with mifepristone for abortion."
        },
        {
            "name": "Latanoprost (PGE2 analogue)",
            "category": "Prostaglandin analogues",
            "note": "Used in open-angle glaucoma; increases uveoscleral outflow."
        },
        {
            "name": "Travoprost",
            "category": "Prostaglandin analogues",
            "note": "Antiglaucoma drug that lowers intraocular pressure."
        },
        {
            "name": "Bimatoprost",
            "category": "Prostaglandin analogues",
            "note": "Used in glaucoma and may increase eyelash growth."
        }
    ]
},    
    
    
    
    
    {
    "id": "gen-1774891166854",
    "name": "NSAIDS",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Nonselective COX Inhibitors - Salicylates",
        "Nonselective COX Inhibitors - Propionic Acid Derivatives",
        "Nonselective COX Inhibitors - Fenamate Derivatives",
        "Nonselective COX Inhibitors - Enolic Acid Derivatives",
        "Nonselective COX Inhibitors - Acetic Acid Derivatives",
        "Nonselective COX Inhibitors - Pyrazolone Derivatives",
        "Preferential COX-2 Inhibitors",
        "Selective COX-2 Inhibitors",
        "Analgesic-Antipyretics with Poor Antiinflammatory Action - Para-aminophenol Derivative",
        "Analgesic-Antipyretics with Poor Antiinflammatory Action - Benzoxazocine Derivative"
    ],
    "mnemonic": "Salicylates = Aspirin; Propionic = Ibuprofen-Naproxen-Ketoprofin-Flurbiprofen; Fenamate = Mephenamic acid; Enolic = Piroxicam-Tenoxicam; Acetic = Ketorolac-Indomethacin-Nabumetone; Pyrazolone = Phenylbutazone-Oxyphenbutazone-Propyphenazone; Preferential COX-2 = Nimesulide-Diclofenac-Aceclofenac-Meloxicam-Etodolac-Nabumetone; Selective COX-2 = Celecoxib-Etoricoxib-Parecoxib; Poor antiinflammatory = Paracetamol-Nefopam",
    "items": [
        {
            "name": "Aspirin",
            "category": "Nonselective COX Inhibitors - Salicylates",
            "note": "Irreversibly inhibits COX and also inhibits platelet aggregation."
        },
        {
            "name": "Ibuprofen",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Widely used NSAID with analgesic, antipyretic and antiinflammatory action."
        },
        {
            "name": "Naproxen",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Longer acting propionic acid derivative useful in arthritis."
        },
        {
            "name": "Ketoprofin",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Propionic acid derivative with potent analgesic effect."
        },
        {
            "name": "Flurbiprofen",
            "category": "Nonselective COX Inhibitors - Propionic Acid Derivatives",
            "note": "Potent NSAID commonly used in musculoskeletal pain."
        },
        {
            "name": "Mephenamic acid",
            "category": "Nonselective COX Inhibitors - Fenamate Derivatives",
            "note": "Commonly used in dysmenorrhoea."
        },
        {
            "name": "Piroxicam",
            "category": "Nonselective COX Inhibitors - Enolic Acid Derivatives",
            "note": "Long acting NSAID with once daily dosing."
        },
        {
            "name": "Tenoxicam",
            "category": "Nonselective COX Inhibitors - Enolic Acid Derivatives",
            "note": "Enolic acid derivative with prolonged action."
        },
        {
            "name": "Ketorolac",
            "category": "Nonselective COX Inhibitors - Acetic Acid Derivatives",
            "note": "Potent analgesic used for short-term severe pain."
        },
        {
            "name": "Indomethacin",
            "category": "Nonselective COX Inhibitors - Acetic Acid Derivatives",
            "note": "Used in acute gout and to close patent ductus arteriosus."
        },
        {
            "name": "Nabumetone",
            "category": "Nonselective COX Inhibitors - Acetic Acid Derivatives",
            "note": "Nonacidic prodrug with less gastric irritation."
        },
        {
            "name": "Phenylbutazone",
            "category": "Nonselective COX Inhibitors - Pyrazolone Derivatives",
            "note": "Rarely used now because of bone marrow toxicity."
        },
        {
            "name": "Oxyphenbutazone",
            "category": "Nonselective COX Inhibitors - Pyrazolone Derivatives",
            "note": "Pyrazolone derivative with high incidence of adverse effects."
        },
        {
            "name": "Propyphenazone",
            "category": "Nonselective COX Inhibitors - Pyrazolone Derivatives",
            "note": "Used mainly as analgesic-antipyretic in combination preparations."
        },
        {
            "name": "Nimesulide",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Preferential COX-2 inhibitor; restricted because of hepatotoxicity."
        },
        {
            "name": "Diclofenac",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Widely used NSAID with preferential COX-2 inhibition."
        },
        {
            "name": "Aceclofenac",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Diclofenac congener with better gastric tolerability."
        },
        {
            "name": "Meloxicam",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Long acting NSAID with relatively lower gastric toxicity."
        },
        {
            "name": "Etodolac",
            "category": "Preferential COX-2 Inhibitors",
            "note": "Useful in osteoarthritis and rheumatoid arthritis."
        },
        {
            "name": "Celecoxib",
            "category": "Selective COX-2 Inhibitors",
            "note": "Selective COX-2 inhibitor causing less gastric irritation."
        },
        {
            "name": "Etoricoxib",
            "category": "Selective COX-2 Inhibitors",
            "note": "Highly selective COX-2 inhibitor used in arthritis."
        },
        {
            "name": "Parecoxib",
            "category": "Selective COX-2 Inhibitors",
            "note": "Injectable selective COX-2 inhibitor used postoperatively."
        },
        {
            "name": "Paracetamol (Acetaminophen)",
            "category": "Analgesic-Antipyretics with Poor Antiinflammatory Action - Para-aminophenol Derivative",
            "note": "Good analgesic and antipyretic with negligible antiinflammatory action."
        },
        {
            "name": "Nefopam",
            "category": "Analgesic-Antipyretics with Poor Antiinflammatory Action - Benzoxazocine Derivative",
            "note": "Centrally acting non-opioid analgesic without antiinflammatory effect."
        }
    ]
},
{
    "id": "gen-1774891313320",
    "name": "Anti rheumatoid drugs",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "DMARDs - Nonbiological Drugs - Immunosuppressants",
        "DMARDs - Nonbiological Drugs - Other Immunomodulators",
        "DMARDs - Biological Agents - TNF-α Inhibitors",
        "DMARDs - Biological Agents - Other Biologicals",
        "Adjuvant Drugs - Glucocorticoids"
    ],
    "mnemonic": "Immunosuppressants = Methotrexate-Azathioprine-Cyclosporine; Immunomodulators = Sulfasalazine-Hydroxychloroquine-Chloroquine-Leflunomide-Tofacitinib; TNF-α inhibitors = Etanercept-Infliximab-Adalimumab; Other biologicals = Anakinra-Abatacept-Rituximab; Adjuvant = Prednisolone",
    "items": [
        {
            "name": "Methotrexate",
            "category": "DMARDs - Nonbiological Drugs - Immunosuppressants",
            "note": "Most commonly used and first-line DMARD in rheumatoid arthritis."
        },
        {
            "name": "Azathioprine",
            "category": "DMARDs - Nonbiological Drugs - Immunosuppressants",
            "note": "Used in severe rheumatoid arthritis not responding to other DMARDs."
        },
        {
            "name": "Cyclosporine",
            "category": "DMARDs - Nonbiological Drugs - Immunosuppressants",
            "note": "Effective DMARD but use limited by nephrotoxicity."
        },
        {
            "name": "Sulfasalazine",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Frequently combined with methotrexate in rheumatoid arthritis."
        },
        {
            "name": "Hydroxychloroquine",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Useful in mild rheumatoid arthritis; may cause retinal toxicity."
        },
        {
            "name": "Chloroquine",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Less commonly used because of higher risk of ocular toxicity."
        },
        {
            "name": "Leflunomide",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Inhibits pyrimidine synthesis and slows progression of rheumatoid arthritis."
        },
        {
            "name": "Tofacitinib",
            "category": "DMARDs - Nonbiological Drugs - Other Immunomodulators",
            "note": "Oral JAK inhibitor used in moderate to severe rheumatoid arthritis."
        },
        {
            "name": "Etanercept",
            "category": "DMARDs - Biological Agents - TNF-α Inhibitors",
            "note": "Fusion protein that binds and neutralizes TNF-α."
        },
        {
            "name": "Infliximab",
            "category": "DMARDs - Biological Agents - TNF-α Inhibitors",
            "note": "Monoclonal antibody against TNF-α used with methotrexate."
        },
        {
            "name": "Adalimumab",
            "category": "DMARDs - Biological Agents - TNF-α Inhibitors",
            "note": "Fully human monoclonal antibody against TNF-α."
        },
        {
            "name": "Anakinra",
            "category": "DMARDs - Biological Agents - Other Biologicals",
            "note": "Interleukin-1 receptor antagonist used in rheumatoid arthritis."
        },
        {
            "name": "Abatacept",
            "category": "DMARDs - Biological Agents - Other Biologicals",
            "note": "Blocks T-cell activation by inhibiting costimulation."
        },
        {
            "name": "Rituximab",
            "category": "DMARDs - Biological Agents - Other Biologicals",
            "note": "Anti-CD20 monoclonal antibody causing B-cell depletion."
        },
        {
            "name": "Prednisolone",
            "category": "Adjuvant Drugs - Glucocorticoids",
            "note": "Used as adjunct for rapid symptomatic relief in rheumatoid arthritis."
        },
        {
            "name": "Other glucocorticoids",
            "category": "Adjuvant Drugs - Glucocorticoids",
            "note": "May be used short term to suppress inflammation during flare-ups."
        }
    ]
},
    
    
    {
    "id": "gen-1774891414451",
    "name": "Drugs For Gout",
    "subject": "Pharmacology",
    "chapter": "Autocoids",
    "categories": [
        "Acute Gout - NSAIDs",
        "Acute Gout - Colchicine",
        "Acute Gout - Glucocorticoids",
        "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
        "Chronic Gout / Hyperuricaemia - Uric Acid Synthesis Inhibitors"
    ],
    "mnemonic": "Acute gout = NSAIDs-Colchicine-Glucocorticoids; Chronic gout = Probenecid-Sulfinpyrazone-Lesinurad or Allopurinol-Febuxostat",
    "items": [
        {
            "name": "NSAIDs",
            "category": "Acute Gout - NSAIDs",
            "note": "First-line drugs for rapid relief of pain and inflammation in acute gout."
        },
        {
            "name": "Colchicine",
            "category": "Acute Gout - Colchicine",
            "note": "Suppresses neutrophil migration and is most effective if started early."
        },
        {
            "name": "Glucocorticoids",
            "category": "Acute Gout - Glucocorticoids",
            "note": "Used when NSAIDs and colchicine are contraindicated."
        },
        {
            "name": "Probenecid",
            "category": "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
            "note": "Increases uric acid excretion by inhibiting tubular reabsorption."
        },
        {
            "name": "Sulfinpyrazone",
            "category": "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
            "note": "Uricosuric drug that promotes renal excretion of uric acid."
        },
        {
            "name": "Lesinurad",
            "category": "Chronic Gout / Hyperuricaemia - Uricosuric Drugs",
            "note": "Selective uric acid reabsorption inhibitor used with xanthine oxidase inhibitors."
        },
        {
            "name": "Allopurinol",
            "category": "Chronic Gout / Hyperuricaemia - Uric Acid Synthesis Inhibitors",
            "note": "Xanthine oxidase inhibitor and the drug of choice for chronic gout."
        },
        {
            "name": "Febuxostat",
            "category": "Chronic Gout / Hyperuricaemia - Uric Acid Synthesis Inhibitors",
            "note": "Nonpurine xanthine oxidase inhibitor used when allopurinol is not tolerated."
        }
    ]
},
    
   {
    "id": "gen-1774891623763",
    "name": "Drugs for cough",
    "subject": "Pharmacology",
    "chapter": "Respiratory System",
    "categories": [
        "Pharyngeal Demulcents",
        "Expectorants - Secretion Enhancers",
        "Expectorants - Mucolytics",
        "Antitussives - Opioids",
        "Antitussives - Nonopioids",
        "Antitussives - Antihistaminics",
        "Antitussives - Adjuvant Antitussives - Bronchodilators"
    ],
    "mnemonic": "Demulcents soothe; Secretion enhancers loosen; Mucolytics liquefy; Opioids and Nonopioids suppress cough; Antihistaminics help dry cough; Bronchodilators help wheezy cough.",
    "items": [
        {
            "name": "Lozenges",
            "category": "Pharyngeal Demulcents",
            "note": "Soothe irritated pharyngeal mucosa and reduce cough reflex."
        },
        {
            "name": "Syrups",
            "category": "Pharyngeal Demulcents",
            "note": "Provide a soothing effect on the throat in dry cough."
        },
        {
            "name": "Glycerine",
            "category": "Pharyngeal Demulcents",
            "note": "Acts locally by coating and soothing the pharynx."
        },
        {
            "name": "Liquorice",
            "category": "Pharyngeal Demulcents",
            "note": "Traditional demulcent used to relieve throat irritation."
        },
        {
            "name": "Potassium citrate",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Increases bronchial secretion and helps expectoration."
        },
        {
            "name": "Potassium iodide",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Promotes secretion of thin mucus from respiratory tract."
        },
        {
            "name": "Guaiphenesin",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Most commonly used expectorant that facilitates removal of sputum."
        },
        {
            "name": "Vasaka",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Herbal expectorant with mucokinetic action."
        },
        {
            "name": "Ammonium chloride",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Reflexly increases respiratory tract secretions."
        },
        {
            "name": "Tolu balsam",
            "category": "Expectorants - Secretion Enhancers",
            "note": "Traditional expectorant used in cough mixtures."
        },
        {
            "name": "Bromhexine",
            "category": "Expectorants - Mucolytics",
            "note": "Depolymerizes mucopolysaccharides and reduces sputum viscosity."
        },
        {
            "name": "Ambroxol",
            "category": "Expectorants - Mucolytics",
            "note": "Active metabolite of bromhexine with mucolytic action."
        },
        {
            "name": "Acetylcysteine",
            "category": "Expectorants - Mucolytics",
            "note": "Breaks disulfide bonds in mucus and is also antidote for paracetamol poisoning."
        },
        {
            "name": "Carbocisteine",
            "category": "Expectorants - Mucolytics",
            "note": "Liquefies viscid sputum in chronic respiratory disease."
        },
        {
            "name": "Acebrophylline",
            "category": "Expectorants - Mucolytics",
            "note": "Has both mucolytic and bronchodilator properties."
        },
        {
            "name": "Codeine",
            "category": "Antitussives - Opioids",
            "note": "Most effective opioid antitussive acting on cough centre."
        },
        {
            "name": "Ethylmorphine",
            "category": "Antitussives - Opioids",
            "note": "Opioid antitussive used in troublesome dry cough."
        },
        {
            "name": "Pholcodine",
            "category": "Antitussives - Opioids",
            "note": "Suppresses cough with less analgesic and addictive effect than codeine."
        },
        {
            "name": "Noscapine",
            "category": "Antitussives - Nonopioids",
            "note": "Nonopioid antitussive without analgesic or addictive properties."
        },
        {
            "name": "Dextromethorphan",
            "category": "Antitussives - Nonopioids",
            "note": "Commonly used nonopioid cough suppressant with no analgesic effect."
        },
        {
            "name": "Chlophedianol",
            "category": "Antitussives - Nonopioids",
            "note": "Nonopioid cough suppressant with mild sedative action."
        },
        {
            "name": "Chlorpheniramine",
            "category": "Antitussives - Antihistaminics",
            "note": "Useful in cough associated with allergy and postnasal drip."
        },
        {
            "name": "Promethazine",
            "category": "Antitussives - Antihistaminics",
            "note": "Sedative antihistaminic often included in cough syrups."
        },
        {
            "name": "Diphenhydramine",
            "category": "Antitussives - Antihistaminics",
            "note": "Suppresses cough and also has sedative antihistaminic action."
        },
        {
            "name": "Salbutamol",
            "category": "Antitussives - Adjuvant Antitussives - Bronchodilators",
            "note": "Useful when cough is associated with bronchospasm."
        },
        {
            "name": "Terbutaline",
            "category": "Antitussives - Adjuvant Antitussives - Bronchodilators",
            "note": "Bronchodilator useful in wheezy cough."
        }
    ]
}, 
    
    
  
  {
    "id": "gen-1774891918833",
    "name": "Drugs For Bronchial Asthma",
    "subject": "Pharmacology",
    "chapter": "Respiratory System",
    "categories": [
        "Bronchodilators - β2-Sympathomimetics - Short-acting",
        "Bronchodilators - β2-Sympathomimetics - Intermediate-acting",
        "Bronchodilators - β2-Sympathomimetics - Long-acting",
        "Bronchodilators - Methylxanthines",
        "Bronchodilators - Anticholinergics",
        "Anti-Inflammatory / Prophylactic Drugs - Leukotriene Antagonists",
        "Anti-Inflammatory / Prophylactic Drugs - Mast Cell Stabilizers",
        "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
        "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
        "Anti-Inflammatory / Prophylactic Drugs - Anti-IgE Antibody",
        "Anti-Inflammatory / Prophylactic Drugs - PDE-4 Inhibitor"
    ],
    "mnemonic": "SABA = Salbutamol-Terbutaline; LABA = Formoterol-Salmeterol-Indacaterol-Arformoterol; Xanthines = Theophylline group; Anticholinergics = Ipratropium-Tiotropium; Prevention = Montelukast-Cromoglycate-Steroids-Omalizumab-Roflumilast",
    "items": [
        {
            "name": "Salbutamol",
            "category": "Bronchodilators - β2-Sympathomimetics - Short-acting",
            "note": "Most commonly used rescue bronchodilator for acute asthma."
        },
        {
            "name": "Terbutaline",
            "category": "Bronchodilators - β2-Sympathomimetics - Short-acting",
            "note": "Short-acting β2 agonist used in acute bronchospasm."
        },
        {
            "name": "Bambuterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Intermediate-acting",
            "note": "Prodrug of terbutaline with longer duration of action."
        },
        {
            "name": "Formoterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Long-acting β2 agonist with rapid onset of action."
        },
        {
            "name": "Salmeterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Long-acting β2 agonist used only for prophylaxis, not acute attack."
        },
        {
            "name": "Indacaterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Ultra-long acting β2 agonist mainly used in COPD."
        },
        {
            "name": "Arformoterol",
            "category": "Bronchodilators - β2-Sympathomimetics - Long-acting",
            "note": "Long-acting β2 agonist and active isomer of formoterol."
        },
        {
            "name": "Theophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Bronchodilator with narrow therapeutic index."
        },
        {
            "name": "Aminophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Water-soluble preparation of theophylline used intravenously."
        },
        {
            "name": "Choline theophyllinate",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Oral preparation of theophylline with better tolerability."
        },
        {
            "name": "Hydroxyethyl theophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Theophylline derivative used as bronchodilator."
        },
        {
            "name": "Doxophylline",
            "category": "Bronchodilators - Methylxanthines",
            "note": "Xanthine bronchodilator with fewer cardiac side effects."
        },
        {
            "name": "Ipratropium bromide",
            "category": "Bronchodilators - Anticholinergics",
            "note": "Inhaled anticholinergic useful in asthma and COPD."
        },
        {
            "name": "Tiotropium bromide",
            "category": "Bronchodilators - Anticholinergics",
            "note": "Long-acting anticholinergic used as add-on therapy."
        },
        {
            "name": "Glycopyrrolate",
            "category": "Bronchodilators - Anticholinergics",
            "note": "Long-acting inhaled anticholinergic mainly used in COPD."
        },
        {
            "name": "Montelukast",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Leukotriene Antagonists",
            "note": "Leukotriene receptor antagonist useful in aspirin-induced asthma."
        },
        {
            "name": "Zafirlukast",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Leukotriene Antagonists",
            "note": "Blocks leukotriene receptors and prevents bronchoconstriction."
        },
        {
            "name": "Sodium cromoglycate",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Mast Cell Stabilizers",
            "note": "Prevents mast cell degranulation and is used prophylactically."
        },
        {
            "name": "Ketotifen",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Mast Cell Stabilizers",
            "note": "Mast cell stabilizer with additional antihistaminic action."
        },
        {
            "name": "Hydrocortisone",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
            "note": "Used intravenously in severe acute asthma."
        },
        {
            "name": "Prednisolone",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
            "note": "Oral corticosteroid used in severe or persistent asthma."
        },
        {
            "name": "Other glucocorticoids",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Systemic",
            "note": "Systemic steroids are reserved for severe asthma exacerbations."
        },
        {
            "name": "Beclomethasone dipropionate",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Common inhaled corticosteroid for maintenance therapy."
        },
        {
            "name": "Budesonide",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Widely used inhaled corticosteroid for persistent asthma."
        },
        {
            "name": "Flunisolide",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Inhaled steroid used for prophylaxis of chronic asthma."
        },
        {
            "name": "Fluticasone propionate",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Potent inhaled corticosteroid with high topical activity."
        },
        {
            "name": "Ciclesonide",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Corticosteroids - Inhalational",
            "note": "Prodrug inhaled corticosteroid with fewer local side effects."
        },
        {
            "name": "Omalizumab",
            "category": "Anti-Inflammatory / Prophylactic Drugs - Anti-IgE Antibody",
            "note": "Monoclonal antibody against IgE used in severe allergic asthma."
        },
        {
            "name": "Roflumilast",
            "category": "Anti-Inflammatory / Prophylactic Drugs - PDE-4 Inhibitor",
            "note": "PDE-4 inhibitor mainly useful in COPD with chronic bronchitis."
        }
    ]
},  


{
    "id": "gen-1774928944584",
    "name": "Anterior pituitary Drugs ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Hormones from Acidophil Cells - Growth Hormone (GH)",
        "Hormones from Acidophil Cells - Prolactin",
        "Hormones from Basophil Cells",
        "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
        "Drugs Affecting Growth Hormone (GH) - GH Antagonist",
        "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
        "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
        "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
        "Drugs Altering Gonadotropin (Gn) Release - GnRH Antagonists"
    ],
    "mnemonic": "GH = Somatropin; GH inhibition = Somatostatin-Octreotide-Lanreotide-Pegvisomant; Prolactin inhibition = Bromocriptine-Cabergoline-Apomorphine; GnRH agonists = Nafarelin-Triptorelin-Goserelin-Leuprolide; Antagonists = Ganirelix-Cetrorelix",
    "items": [
        {
            "name": "Somatropin",
            "category": "Hormones from Acidophil Cells - Growth Hormone (GH)",
            "note": "Recombinant human growth hormone used in growth hormone deficiency."
        },
        {
            "name": "Prolactin",
            "category": "Hormones from Acidophil Cells - Prolactin",
            "note": "Stimulates milk secretion from mammary glands."
        },
        {
            "name": "Thyroid Stimulating Hormone (TSH)",
            "category": "Hormones from Basophil Cells",
            "note": "Stimulates synthesis and release of thyroid hormones."
        },
        {
            "name": "Adrenocorticotropic Hormone (ACTH)",
            "category": "Hormones from Basophil Cells",
            "note": "Stimulates adrenal cortex to secrete glucocorticoids."
        },
        {
            "name": "Follicle Stimulating Hormone (FSH)",
            "category": "Hormones from Basophil Cells",
            "note": "Stimulates ovarian follicular development and spermatogenesis."
        },
        {
            "name": "Luteinizing Hormone (LH)",
            "category": "Hormones from Basophil Cells",
            "note": "Triggers ovulation and stimulates testosterone secretion."
        },
        {
            "name": "Somatostatin",
            "category": "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
            "note": "Physiological inhibitor of growth hormone release."
        },
        {
            "name": "Octreotide",
            "category": "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
            "note": "Long-acting somatostatin analogue used in acromegaly."
        },
        {
            "name": "Lanreotide",
            "category": "Drugs Affecting Growth Hormone (GH) - Inhibit GH Release",
            "note": "Long-acting somatostatin analogue used to suppress GH secretion."
        },
        {
            "name": "Pegvisomant",
            "category": "Drugs Affecting Growth Hormone (GH) - GH Antagonist",
            "note": "Growth hormone receptor antagonist used in acromegaly."
        },
        {
            "name": "Bromocriptine",
            "category": "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
            "note": "Dopamine agonist that suppresses prolactin secretion."
        },
        {
            "name": "Cabergoline",
            "category": "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
            "note": "Long-acting dopamine agonist preferred in hyperprolactinaemia."
        },
        {
            "name": "Apomorphine",
            "category": "Drugs Altering Prolactin Secretion - Inhibit Prolactin Release",
            "note": "Dopamine agonist that inhibits prolactin release."
        },
        {
            "name": "Chlorpromazine (and other neuroleptics)",
            "category": "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
            "note": "Dopamine antagonists that increase prolactin secretion."
        },
        {
            "name": "Metoclopramide",
            "category": "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
            "note": "D2 receptor blockade enhances prolactin release."
        },
        {
            "name": "Reserpine",
            "category": "Drugs Altering Prolactin Secretion - Enhance Prolactin Release",
            "note": "Depletes dopamine stores and thereby increases prolactin secretion."
        },
        {
            "name": "Nafarelin",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Initially stimulates and later suppresses gonadotropin release."
        },
        {
            "name": "Triptorelin",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Continuous administration suppresses LH and FSH secretion."
        },
        {
            "name": "Goserelin",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Used in carcinoma prostate and endometriosis."
        },
        {
            "name": "Leuprolide",
            "category": "Drugs Altering Gonadotropin (Gn) Release - Superactive GnRH Agonists",
            "note": "Produces reversible suppression of gonadal function."
        },
        {
            "name": "Ganirelix",
            "category": "Drugs Altering Gonadotropin (Gn) Release - GnRH Antagonists",
            "note": "Direct GnRH antagonist used in assisted reproduction."
        },
        {
            "name": "Cetrorelix",
            "category": "Drugs Altering Gonadotropin (Gn) Release - GnRH Antagonists",
            "note": "Prevents premature LH surge during ovulation induction."
        }
    ]
}, 


{
    "id": "gen-1774929083303",
    "name": "Thyroid Hormones",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Thyroid Hormones",
        "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
        "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
        "Thyroid Inhibitors - Inhibit Hormone Release",
        "Thyroid Inhibitors - Destroy Thyroid Tissue"
    ],
    "mnemonic": "Hormones = T4-T3; Synthesis inhibitors = Propylthiouracil-Methimazole-Carbimazole; Trapping inhibitors = Thiocyanate-Perchlorate-Nitrate; Release inhibitors = Iodine-Iodides; Destruction = Radioactive iodine-131",
    "items": [
        {
            "name": "Thyroxine (T4)",
            "category": "Thyroid Hormones",
            "note": "Main hormone secreted by thyroid and converted to T3 in tissues."
        },
        {
            "name": "Triiodothyronine (T3, Liothyronine)",
            "category": "Thyroid Hormones",
            "note": "More active thyroid hormone with rapid onset of action."
        },
        {
            "name": "Propylthiouracil",
            "category": "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
            "note": "Inhibits thyroid hormone synthesis and peripheral conversion of T4 to T3."
        },
        {
            "name": "Methimazole",
            "category": "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
            "note": "More potent and longer acting than propylthiouracil."
        },
        {
            "name": "Carbimazole",
            "category": "Thyroid Inhibitors - Inhibit Hormone Synthesis - Thioamides",
            "note": "Prodrug converted to methimazole in the body."
        },
        {
            "name": "Thiocyanates (SCN⁻)",
            "category": "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
            "note": "Compete with iodide and inhibit its uptake by thyroid gland."
        },
        {
            "name": "Perchlorates (ClO4⁻)",
            "category": "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
            "note": "Potent inhibitor of iodide trapping by thyroid."
        },
        {
            "name": "Nitrates (NO3⁻)",
            "category": "Thyroid Inhibitors - Inhibit Iodide Trapping - Ionic Inhibitors",
            "note": "Interfere with iodide uptake into thyroid gland."
        },
        {
            "name": "Iodine",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Large doses rapidly inhibit release of thyroid hormones."
        },
        {
            "name": "Sodium iodide",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Used to suppress thyroid hormone release before surgery."
        },
        {
            "name": "Potassium iodide",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Produces prompt reduction in thyroid gland vascularity."
        },
        {
            "name": "Organic iodides",
            "category": "Thyroid Inhibitors - Inhibit Hormone Release",
            "note": "Inhibit release of preformed thyroid hormones."
        },
        {
            "name": "Radioactive iodine-131",
            "category": "Thyroid Inhibitors - Destroy Thyroid Tissue",
            "note": "Destroys thyroid tissue by β-radiation and is used in hyperthyroidism."
        }
    ]
},


{
    "id": "gen-1774929387439",
    "name": "Insulins and parentral antiiabetics",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Rapid-Acting Insulins - Insulin Analogues",
        "Short-Acting Insulins",
        "Intermediate-Acting Insulins",
        "Long-Acting Insulins - Insulin Analogues",
        "Other Parenteral Antidiabetic Drugs - GLP-1 Receptor Agonists",
        "Other Parenteral Antidiabetic Drugs - Amylin Analogue"
    ],
    "mnemonic": "Rapid = Lispro-Aspart-Glulisine; Short = Regular insulin; Intermediate = Lente-NPH; Long = Glargine-Detemir; Other injectables = Exenatide-Liraglutide-Pramlintide",
    "items": [
        {
            "name": "Insulin lispro",
            "category": "Rapid-Acting Insulins - Insulin Analogues",
            "note": "Rapid onset insulin analogue used immediately before meals."
        },
        {
            "name": "Insulin aspart",
            "category": "Rapid-Acting Insulins - Insulin Analogues",
            "note": "Rapid-acting insulin analogue used to control postprandial glucose."
        },
        {
            "name": "Insulin glulisine",
            "category": "Rapid-Acting Insulins - Insulin Analogues",
            "note": "Short duration insulin analogue with very rapid onset."
        },
        {
            "name": "Regular (soluble) insulin",
            "category": "Short-Acting Insulins",
            "note": "Only insulin preparation that can be given intravenously."
        },
        {
            "name": "Insulin zinc suspension (Lente insulin)",
            "category": "Intermediate-Acting Insulins",
            "note": "Intermediate-acting insulin mainly used for between-meal glycaemic control."
        },
        {
            "name": "Neutral Protamine Hagedorn (NPH) / Isophane insulin",
            "category": "Intermediate-Acting Insulins",
            "note": "Intermediate-acting insulin commonly used for basal control."
        },
        {
            "name": "Insulin glargine",
            "category": "Long-Acting Insulins - Insulin Analogues",
            "note": "Provides nearly peakless basal insulin level for 24 hours."
        },
        {
            "name": "Insulin detemir",
            "category": "Long-Acting Insulins - Insulin Analogues",
            "note": "Long-acting insulin analogue with more consistent basal effect."
        },
        {
            "name": "Exenatide",
            "category": "Other Parenteral Antidiabetic Drugs - GLP-1 Receptor Agonists",
            "note": "GLP-1 agonist that enhances glucose-dependent insulin secretion."
        },
        {
            "name": "Liraglutide",
            "category": "Other Parenteral Antidiabetic Drugs - GLP-1 Receptor Agonists",
            "note": "Long-acting GLP-1 agonist that also promotes weight loss."
        },
        {
            "name": "Pramlintide",
            "category": "Other Parenteral Antidiabetic Drugs - Amylin Analogue",
            "note": "Amylin analogue that delays gastric emptying and reduces glucagon secretion."
        }
    ]
},
    
    
    
    
    {
    "id": "gen-1774929541328",
    "name": "Oral Antiiabetic Drugs",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
        "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Meglitinide / Phenylalanine Analogues",
        "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
        "Drugs that Overcome Insulin Resistance - Biguanide (AMPK Activator)",
        "Drugs that Overcome Insulin Resistance - Thiazolidinedione (PPAR-γ Activator)",
        "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
        "Miscellaneous Drugs - Sodium-Glucose Cotransporter-2 (SGLT-2) Inhibitors",
        "Miscellaneous Drugs - Dopamine D2 Agonist"
    ],
    "mnemonic": "Sulfonylureas = Tolbutamide-Glibenclamide-Glipizide-Gliclazide-Glimepiride; Meglitinides = Repaglinide-Nateglinide; DPP-4 inhibitors = Sitagliptin group; Insulin resistance = Metformin-Pioglitazone; Absorption blockers = Acarbose-Miglitol-Voglibose; Miscellaneous = Dapagliflozin-Canagliflozin-Bromocriptine",
    "items": [
        {
            "name": "Tolbutamide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "First-generation sulfonylurea with short duration of action."
        },
        {
            "name": "Glibenclamide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Potent sulfonylurea with higher risk of hypoglycaemia."
        },
        {
            "name": "Glipizide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Second-generation sulfonylurea used in type 2 diabetes."
        },
        {
            "name": "Gliclazide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Sulfonylurea with relatively lower risk of hypoglycaemia."
        },
        {
            "name": "Glimepiride",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Sulfonylureas",
            "note": "Third-generation sulfonylurea with once-daily dosing."
        },
        {
            "name": "Repaglinide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Meglitinide / Phenylalanine Analogues",
            "note": "Short-acting insulin secretagogue useful for postprandial hyperglycaemia."
        },
        {
            "name": "Nateglinide",
            "category": "Drugs that Enhance Insulin Secretion - KATP Channel Blockers - Meglitinide / Phenylalanine Analogues",
            "note": "Rapid and short-acting insulin secretagogue taken before meals."
        },
        {
            "name": "Sitagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "DPP-4 inhibitor that prolongs incretin action."
        },
        {
            "name": "Vildagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "Enhances glucose-dependent insulin secretion by inhibiting DPP-4."
        },
        {
            "name": "Saxagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "DPP-4 inhibitor used in type 2 diabetes mellitus."
        },
        {
            "name": "Alogliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "Selective DPP-4 inhibitor with once-daily dosing."
        },
        {
            "name": "Teneligliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "Widely used DPP-4 inhibitor in India."
        },
        {
            "name": "Linagliptin",
            "category": "Drugs that Enhance Insulin Secretion - Dipeptidyl Peptidase-4 (DPP-4) Inhibitors",
            "note": "DPP-4 inhibitor that does not require dose adjustment in renal impairment."
        },
        {
            "name": "Metformin",
            "category": "Drugs that Overcome Insulin Resistance - Biguanide (AMPK Activator)",
            "note": "Drug of choice in type 2 diabetes; decreases hepatic glucose output."
        },
        {
            "name": "Pioglitazone",
            "category": "Drugs that Overcome Insulin Resistance - Thiazolidinedione (PPAR-γ Activator)",
            "note": "Improves insulin sensitivity by activating PPAR-γ."
        },
        {
            "name": "Acarbose",
            "category": "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
            "note": "Delays intestinal carbohydrate absorption and reduces postprandial glucose rise."
        },
        {
            "name": "Miglitol",
            "category": "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
            "note": "α-Glucosidase inhibitor that slows carbohydrate digestion."
        },
        {
            "name": "Voglibose",
            "category": "Drugs that Retard Carbohydrate Absorption - α-Glucosidase Inhibitors",
            "note": "Commonly used α-glucosidase inhibitor in Asian patients."
        },
        {
            "name": "Dapagliflozin",
            "category": "Miscellaneous Drugs - Sodium-Glucose Cotransporter-2 (SGLT-2) Inhibitors",
            "note": "Promotes urinary glucose excretion by inhibiting SGLT-2."
        },
        {
            "name": "Canagliflozin",
            "category": "Miscellaneous Drugs - Sodium-Glucose Cotransporter-2 (SGLT-2) Inhibitors",
            "note": "SGLT-2 inhibitor that lowers blood glucose independently of insulin."
        },
        {
            "name": "Bromocriptine",
            "category": "Miscellaneous Drugs - Dopamine D2 Agonist",
            "note": "Dopamine agonist approved as adjunct in type 2 diabetes."
        }
    ]
},
    
    
    
    {
    "id": "gen-1774929669806",
    "name": "Corticosteroids",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Glucocorticoids - Short-Acting",
        "Glucocorticoids - Intermediate-Acting",
        "Glucocorticoids - Long-Acting",
        "Mineralocorticoids"
    ],
    "mnemonic": "Short = Hydrocortisone; Intermediate = Prednisolone-Methylprednisolone-Triamcinolone-Deflazacort; Long = Dexamethasone-Betamethasone; Mineralocorticoids = Aldosterone-Fludrocortisone-DOCA",
    "items": [
        {
            "name": "Hydrocortisone (Cortisol)",
            "category": "Glucocorticoids - Short-Acting",
            "note": "Short-acting glucocorticoid with both glucocorticoid and mineralocorticoid activity."
        },
        {
            "name": "Prednisolone",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Most commonly used intermediate-acting glucocorticoid."
        },
        {
            "name": "Methylprednisolone",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Intermediate-acting glucocorticoid with less mineralocorticoid action."
        },
        {
            "name": "Triamcinolone",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Intermediate-acting glucocorticoid with negligible salt-retaining property."
        },
        {
            "name": "Deflazacort",
            "category": "Glucocorticoids - Intermediate-Acting",
            "note": "Causes less osteoporosis and growth suppression than prednisolone."
        },
        {
            "name": "Dexamethasone",
            "category": "Glucocorticoids - Long-Acting",
            "note": "Highly potent long-acting glucocorticoid with negligible mineralocorticoid activity."
        },
        {
            "name": "Betamethasone",
            "category": "Glucocorticoids - Long-Acting",
            "note": "Long-acting glucocorticoid used for fetal lung maturation."
        },
        {
            "name": "Aldosterone",
            "category": "Mineralocorticoids",
            "note": "Principal endogenous mineralocorticoid that promotes sodium retention."
        },
        {
            "name": "Fludrocortisone",
            "category": "Mineralocorticoids",
            "note": "Potent synthetic mineralocorticoid used in adrenal insufficiency."
        },
        {
            "name": "Desoxycorticosterone acetate (DOCA)",
            "category": "Mineralocorticoids",
            "note": "Long-acting mineralocorticoid used rarely in Addison's disease."
        }
    ]
},
    
    
{
    "id": "gen-1774929798429",
    "name": "Topical steroids ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Topical Steroids - Potent",
        "Topical Steroids - Moderately Potent",
        "Topical Steroids - Mild"
    ],
    "mnemonic": "Potent = Clobetasol-Betamethasone-Halcinonide; Moderate = Mometasone-Fluticasone-Prednicarbate; Mild = Hydrocortisone preparations",
    "items": [
        {
            "name": "Beclomethasone dipropionate (0.025%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent topical corticosteroid used in inflammatory dermatoses."
        },
        {
            "name": "Betamethasone benzoate (0.025%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent steroid useful in eczema and dermatitis."
        },
        {
            "name": "Betamethasone valerate (0.12%)",
            "category": "Topical Steroids - Potent",
            "note": "Commonly used potent topical corticosteroid."
        },
        {
            "name": "Halcinonide (0.1%)",
            "category": "Topical Steroids - Potent",
            "note": "Highly potent steroid used for resistant skin lesions."
        },
        {
            "name": "Clobetasol propionate (0.05%)",
            "category": "Topical Steroids - Potent",
            "note": "One of the most potent topical corticosteroids."
        },
        {
            "name": "Fluocinolone acetonide (0.025%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent preparation used in severe inflammatory skin disease."
        },
        {
            "name": "Fluocortolone (0.5%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent topical corticosteroid for resistant dermatoses."
        },
        {
            "name": "Triamcinolone acetonide (0.1%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent topical steroid commonly used in dermatitis."
        },
        {
            "name": "Dexamethasone sodium phosphate (0.1%)",
            "category": "Topical Steroids - Potent",
            "note": "Potent steroid preparation used topically."
        },
        {
            "name": "Fluocinolone acetonide (0.01%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent preparation suitable for sensitive areas."
        },
        {
            "name": "Fluocortolone (0.25%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent steroid used in eczema and dermatitis."
        },
        {
            "name": "Clobetasol butyrate (0.05%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent corticosteroid with good anti-inflammatory effect."
        },
        {
            "name": "Mometasone (0.1%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Popular moderately potent topical steroid with once-daily use."
        },
        {
            "name": "Fluticasone propionate (0.05%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent topical corticosteroid with low systemic absorption."
        },
        {
            "name": "Hydrocortisone acetate (2.5%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent formulation of hydrocortisone."
        },
        {
            "name": "Prednicarbate (0.1–0.25%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent steroid with less skin atrophy."
        },
        {
            "name": "Triamcinolone acetonide (0.05%)",
            "category": "Topical Steroids - Moderately Potent",
            "note": "Moderately potent preparation of triamcinolone."
        },
        {
            "name": "Hydrocortisone acetate (0.1–1.0%)",
            "category": "Topical Steroids - Mild",
            "note": "Mild topical corticosteroid preferred for face and children."
        },
        {
            "name": "Hydrocortisone butyrate (0.001%)",
            "category": "Topical Steroids - Mild",
            "note": "Low-potency steroid suitable for mild inflammatory skin disease."
        }
    ]
},


{
    "id": "gen-1774930035302",
    "name": "Androgens and Related Drugs",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Androgens - Natural",
        "Androgens - Synthetic",
        "Anabolic Steroids",
        "Antiandrogens",
        "5α-Reductase Inhibitors"
    ],
    "mnemonic": "Natural = Testosterone-DHT-Androsterone; Synthetic = Methyl testosterone-Fluoxymesterone-Mesterolone; Anabolic = Methandienone-Nandrolone-Oxymetholone-Stanozolol; Antiandrogens = Cyproterone-Flutamide-Bicalutamide; 5α-reductase inhibitors = Finasteride-Dutasteride",
    "items": [
        {
            "name": "Testosterone",
            "category": "Androgens - Natural",
            "note": "Principal natural male sex hormone used in hypogonadism."
        },
        {
            "name": "Dihydrotestosterone",
            "category": "Androgens - Natural",
            "note": "More potent metabolite of testosterone formed by 5α-reductase."
        },
        {
            "name": "Androsterone",
            "category": "Androgens - Natural",
            "note": "Weak natural androgen and metabolite of testosterone."
        },
        {
            "name": "Methyl testosterone",
            "category": "Androgens - Synthetic",
            "note": "Orally active synthetic androgen."
        },
        {
            "name": "Fluoxymesterone",
            "category": "Androgens - Synthetic",
            "note": "Potent synthetic androgen with strong androgenic activity."
        },
        {
            "name": "Mesterolone",
            "category": "Androgens - Synthetic",
            "note": "Synthetic androgen with relatively weak anabolic action."
        },
        {
            "name": "Methandienone",
            "category": "Anabolic Steroids",
            "note": "Anabolic steroid with prominent protein-building effect."
        },
        {
            "name": "Nandrolone phenylpropionate",
            "category": "Anabolic Steroids",
            "note": "Anabolic steroid with reduced androgenic action."
        },
        {
            "name": "Nandrolone decanoate",
            "category": "Anabolic Steroids",
            "note": "Long-acting anabolic steroid used in wasting conditions."
        },
        {
            "name": "Oxymetholone",
            "category": "Anabolic Steroids",
            "note": "Potent anabolic steroid used in some aplastic anaemia cases."
        },
        {
            "name": "Stanozolol",
            "category": "Anabolic Steroids",
            "note": "Anabolic steroid with relatively low androgenic activity."
        },
        {
            "name": "Cyproterone acetate",
            "category": "Antiandrogens",
            "note": "Steroidal antiandrogen used in prostate cancer and hirsutism."
        },
        {
            "name": "Flutamide",
            "category": "Antiandrogens",
            "note": "Nonsteroidal antiandrogen used in carcinoma prostate."
        },
        {
            "name": "Bicalutamide",
            "category": "Antiandrogens",
            "note": "Long-acting nonsteroidal antiandrogen used in prostate cancer."
        },
        {
            "name": "Finasteride",
            "category": "5α-Reductase Inhibitors",
            "note": "Selective inhibitor of type II 5α-reductase used in BPH."
        },
        {
            "name": "Dutasteride",
            "category": "5α-Reductase Inhibitors",
            "note": "Inhibits both type I and type II 5α-reductase."
        }
    ]
},

{
    "id": "gen-1774930289888",
    "name": "Drugs For erectile dysfunction ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Androgens",
        "Phosphodiesterase-5 (PDE-5) Inhibitors",
        "Intracavernosal Vasodilators"
    ],
    "mnemonic": "Low testosterone = Androgens; PDE-5 inhibitors = Sildenafil-Tadalafil-Vardenafil; Injection therapy = Papaverine + Phentolamine or Alprostadil",
    "items": [
        {
            "name": "Testosterone (and other androgens)",
            "category": "Androgens",
            "note": "Useful only in erectile dysfunction associated with androgen deficiency."
        },
        {
            "name": "Sildenafil",
            "category": "Phosphodiesterase-5 (PDE-5) Inhibitors",
            "note": "Prototype PDE-5 inhibitor that enhances penile erection by increasing cGMP."
        },
        {
            "name": "Tadalafil",
            "category": "Phosphodiesterase-5 (PDE-5) Inhibitors",
            "note": "Long-acting PDE-5 inhibitor with duration up to 36 hours."
        },
        {
            "name": "Vardenafil",
            "category": "Phosphodiesterase-5 (PDE-5) Inhibitors",
            "note": "PDE-5 inhibitor similar to sildenafil but more potent."
        },
        {
            "name": "Papaverine + Phentolamine",
            "category": "Intracavernosal Vasodilators",
            "note": "Injected into corpus cavernosum to produce erection."
        },
        {
            "name": "Alprostadil (PGE₁)",
            "category": "Intracavernosal Vasodilators",
            "note": "Intracavernosal prostaglandin producing erection by vasodilation."
        }
    ]
},

{
    "id": "gen-1774930578488",
    "name": "Estrogens and related drugs ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Estrogens - Natural",
        "Estrogens - Synthetic - Steroidal",
        "Estrogens - Synthetic - Nonsteroidal",
        "Antiestrogen",
        "Selective Estrogen Receptor Down Regulator (SERD)",
        "Selective Estrogen Receptor Modulators (SERMs)",
        "Aromatase Inhibitors"
    ],
    "mnemonic": "Natural = Estradiol-Estrone-Estriol; Steroidal = Ethinylestradiol-Mestranol; Nonsteroidal = Diethylstilbestrol-Dienestrol-Tibolone; Antiestrogen = Clomiphene; SERD = Fulvestrant; SERMs = Tamoxifen-Toremifene-Raloxifene; Aromatase inhibitors = Letrozole-Anastrozole-Exemestane",
    "items": [
        {
            "name": "Estradiol",
            "category": "Estrogens - Natural",
            "note": "Most potent natural estrogen secreted by ovary."
        },
        {
            "name": "Estrone",
            "category": "Estrogens - Natural",
            "note": "Less potent natural estrogen formed from androstenedione."
        },
        {
            "name": "Estriol",
            "category": "Estrogens - Natural",
            "note": "Weakest natural estrogen and major estrogen during pregnancy."
        },
        {
            "name": "Ethinylestradiol",
            "category": "Estrogens - Synthetic - Steroidal",
            "note": "Most commonly used oral estrogen because of high potency."
        },
        {
            "name": "Mestranol",
            "category": "Estrogens - Synthetic - Steroidal",
            "note": "Prodrug converted to ethinylestradiol in the body."
        },
        {
            "name": "Diethylstilbestrol",
            "category": "Estrogens - Synthetic - Nonsteroidal",
            "note": "Potent nonsteroidal estrogen rarely used because of toxicity."
        },
        {
            "name": "Dienestrol",
            "category": "Estrogens - Synthetic - Nonsteroidal",
            "note": "Nonsteroidal estrogen used topically in menopausal symptoms."
        },
        {
            "name": "Tibolone",
            "category": "Estrogens - Synthetic - Nonsteroidal",
            "note": "Synthetic steroid with estrogenic, progestational and androgenic actions."
        },
        {
            "name": "Clomiphene citrate",
            "category": "Antiestrogen",
            "note": "Blocks estrogen receptors in hypothalamus and induces ovulation."
        },
        {
            "name": "Fulvestrant",
            "category": "Selective Estrogen Receptor Down Regulator (SERD)",
            "note": "Estrogen receptor antagonist that promotes receptor degradation."
        },
        {
            "name": "Tamoxifen citrate",
            "category": "Selective Estrogen Receptor Modulators (SERMs)",
            "note": "Acts as estrogen antagonist in breast and agonist in bone."
        },
        {
            "name": "Toremifene",
            "category": "Selective Estrogen Receptor Modulators (SERMs)",
            "note": "SERM used in metastatic breast cancer."
        },
        {
            "name": "Raloxifene",
            "category": "Selective Estrogen Receptor Modulators (SERMs)",
            "note": "SERM useful in osteoporosis without stimulating endometrium."
        },
        {
            "name": "Letrozole",
            "category": "Aromatase Inhibitors",
            "note": "Nonsteroidal aromatase inhibitor used in breast cancer and ovulation induction."
        },
        {
            "name": "Anastrozole",
            "category": "Aromatase Inhibitors",
            "note": "Selective aromatase inhibitor used in postmenopausal breast cancer."
        },
        {
            "name": "Exemestane",
            "category": "Aromatase Inhibitors",
            "note": "Steroidal irreversible aromatase inhibitor."
        }
    ]
},


{
    "id": "gen-1774939612583",
    "name": "Progestins",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Progestins - Progesterone Derivatives",
        "Progestins - 19-Nortestosterone Derivatives - Estranes",
        "Progestins - 19-Nortestosterone Derivatives - Gonanes",
        "Antiprogestin",
        "Selective Progesterone Receptor Modulator"
    ],
    "mnemonic": "Progesterone derivatives = Medroxyprogesterone-Megestrol-Dydrogesterone; Estranes = Norethindrone-Lynestrenol-Allylestrenol; Gonanes = Levonorgestrel-Desogestrel-Norgestimate-Gestodene; Antiprogestin = Mifepristone; SPRM = Ulipristal",
    "items": [
        {
            "name": "Medroxyprogesterone acetate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Long-acting progestin widely used in injectable contraception."
        },
        {
            "name": "Megestrol acetate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Progestin used in endometrial carcinoma and to stimulate appetite."
        },
        {
            "name": "Dydrogesterone",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Oral progestin with minimal androgenic effects."
        },
        {
            "name": "Hydroxyprogesterone caproate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Long-acting injectable progestin used to prevent preterm labour."
        },
        {
            "name": "Nomegestrol acetate",
            "category": "Progestins - Progesterone Derivatives",
            "note": "Potent progestin used in hormonal contraception."
        },
        {
            "name": "Norethindrone (Norethisterone)",
            "category": "Progestins - 19-Nortestosterone Derivatives - Estranes",
            "note": "Common oral progestin used in contraceptive pills."
        },
        {
            "name": "Lynestrenol (Ethinylestrenol)",
            "category": "Progestins - 19-Nortestosterone Derivatives - Estranes",
            "note": "Estrane derivative used in menstrual disorders and contraception."
        },
        {
            "name": "Allylestrenol",
            "category": "Progestins - 19-Nortestosterone Derivatives - Estranes",
            "note": "Used mainly to prevent threatened abortion."
        },
        {
            "name": "Levonorgestrel",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Potent progestin widely used in emergency contraception."
        },
        {
            "name": "Desogestrel",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Third-generation progestin with low androgenic activity."
        },
        {
            "name": "Norgestimate",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Progestin commonly used in combined oral contraceptives."
        },
        {
            "name": "Gestodene",
            "category": "Progestins - 19-Nortestosterone Derivatives - Gonanes",
            "note": "Third-generation progestin with high progestational potency."
        },
        {
            "name": "Mifepristone",
            "category": "Antiprogestin",
            "note": "Progesterone receptor antagonist used for medical termination of pregnancy."
        },
        {
            "name": "Ulipristal",
            "category": "Selective Progesterone Receptor Modulator",
            "note": "Used as emergency contraceptive and in uterine fibroids."
        }
    ]
},

{
    "id": "gen-1774939834697",
    "name": "Hormonal contraceptives",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Oral Contraceptives - Combined Pills",
        "Oral Contraceptives - Phased Pills",
        "Oral Contraceptives - Progestin-Only Pills (Mini Pills)",
        "Oral Contraceptives - Postcoital Pills",
        "Long-Acting Contraceptives - Injectable"
    ],
    "mnemonic": "Combined = MALA-N-Levonorgestrel-Desogestrel; Phased = Levonorgestrel or Norethindrone sequence; Mini pills = Norethindrone-Norgestrel; Emergency = Levonorgestrel; Injectable = DMPA-Norethindrone enanthate",
    "items": [
        {
            "name": "MALA-N - Norgestrel (0.5 mg) + Ethinylestradiol (50 µg)",
            "category": "Oral Contraceptives - Combined Pills",
            "note": "Standard combined oral contraceptive preparation."
        },
        {
            "name": "Levonorgestrel (0.1–0.25 mg) + Ethinylestradiol (20–50 µg)",
            "category": "Oral Contraceptives - Combined Pills",
            "note": "Common low-dose combined oral contraceptive pill."
        },
        {
            "name": "Desogestrel (0.15 mg) + Ethinylestradiol (20–30 µg)",
            "category": "Oral Contraceptives - Combined Pills",
            "note": "Third-generation combined pill with less androgenic effect."
        },
        {
            "name": "Levonorgestrel (50 µg → 75 µg → 125 µg) + Ethinylestradiol (30 µg → 40 µg → 30 µg)",
            "category": "Oral Contraceptives - Phased Pills",
            "note": "Triphasic pill designed to mimic normal hormonal cycle."
        },
        {
            "name": "Norethindrone (0.5 mg → 0.75 mg → 1.0 mg) + Ethinylestradiol (35 µg)",
            "category": "Oral Contraceptives - Phased Pills",
            "note": "Triphasic oral contraceptive with increasing progestin dose."
        },
        {
            "name": "Norethindrone (0.35 mg)",
            "category": "Oral Contraceptives - Progestin-Only Pills (Mini Pills)",
            "note": "Mini pill suitable during lactation."
        },
        {
            "name": "Norgestrel (75 µg)",
            "category": "Oral Contraceptives - Progestin-Only Pills (Mini Pills)",
            "note": "Progestin-only pill requiring strict daily timing."
        },
        {
            "name": "Levonorgestrel (1.5 mg)",
            "category": "Oral Contraceptives - Postcoital Pills",
            "note": "Emergency contraceptive effective if taken within 72 hours."
        },
        {
            "name": "Levonorgestrel (0.5 mg) + Ethinylestradiol (100 µg)",
            "category": "Oral Contraceptives - Postcoital Pills",
            "note": "Yuzpe regimen given in two doses for emergency contraception."
        },
        {
            "name": "Depot medroxyprogesterone acetate (DMPA)",
            "category": "Long-Acting Contraceptives - Injectable",
            "note": "Injectable contraceptive effective for about 3 months."
        },
        {
            "name": "Norethindrone enanthate",
            "category": "Long-Acting Contraceptives - Injectable",
            "note": "Long-acting injectable progestin contraceptive."
        }
    ]
},

{
    "id": "gen-1774940001008",
    "name": "Uterine Stimulants ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
        "Uterine Stimulants (Oxytocics) - Ergot Alkaloids",
        "Uterine Stimulants (Oxytocics) - Prostaglandins - PGE₂",
        "Uterine Stimulants (Oxytocics) - Prostaglandins - PGF₂α",
        "Uterine Stimulants (Oxytocics) - Prostaglandins - Misoprostol",
        "Uterine Stimulants (Oxytocics) - Miscellaneous"
    ],
    "mnemonic": "Posterior pituitary = Oxytocin-Desamino-oxytocin-Carbetocin; Ergot = Ergometrine-Methylergometrine; PGE₂ = Dinoprostone; PGF₂α = Dinoprost-Carboprost; Misoprostol often with Mifepristone; Miscellaneous = Ethacridine-Quinine",
    "items": [
        {
            "name": "Oxytocin",
            "category": "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
            "note": "Drug of choice for induction of labour and control of postpartum haemorrhage."
        },
        {
            "name": "Desamino-oxytocin",
            "category": "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
            "note": "Synthetic oxytocin analogue with longer duration of action."
        },
        {
            "name": "Carbetocin",
            "category": "Uterine Stimulants (Oxytocics) - Posterior Pituitary Hormones",
            "note": "Long-acting oxytocin analogue used to prevent postpartum haemorrhage."
        },
        {
            "name": "Ergometrine (Ergonovine)",
            "category": "Uterine Stimulants (Oxytocics) - Ergot Alkaloids",
            "note": "Produces powerful sustained uterine contraction."
        },
        {
            "name": "Methylergometrine",
            "category": "Uterine Stimulants (Oxytocics) - Ergot Alkaloids",
            "note": "Used mainly for prevention and treatment of postpartum haemorrhage."
        },
        {
            "name": "Dinoprostone",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - PGE₂",
            "note": "Used for cervical ripening and induction of labour."
        },
        {
            "name": "Dinoprost",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - PGF₂α",
            "note": "Used for mid-trimester abortion."
        },
        {
            "name": "15-Methyl PGF₂α (Carboprost)",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - PGF₂α",
            "note": "Used in postpartum haemorrhage and second-trimester abortion."
        },
        {
            "name": "Misoprostol",
            "category": "Uterine Stimulants (Oxytocics) - Prostaglandins - Misoprostol",
            "note": "Commonly used with mifepristone for medical abortion."
        },
        {
            "name": "Ethacridine",
            "category": "Uterine Stimulants (Oxytocics) - Miscellaneous",
            "note": "Used for termination of pregnancy in second trimester."
        },
        {
            "name": "Quinine",
            "category": "Uterine Stimulants (Oxytocics) - Miscellaneous",
            "note": "Has weak uterine stimulant action and is rarely used."
        }
    ]
},

{
    "id": "gen-1774940142290",
    "name": "Uterine Relaxants ",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
        "Uterine Relaxants (Tocolytics) - Calcium Channel Blockers",
        "Uterine Relaxants (Tocolytics) - Oxytocin Antagonist",
        "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs"
    ],
    "mnemonic": "Adrenergic agonists = Ritodrine-Salbutamol-Terbutaline-Isoxsuprine; Calcium blockers = Nifedipine; Oxytocin antagonist = Atosiban; Miscellaneous = Magnesium sulfate-Progesterone-Nitrates-Halothane",
    "items": [
        {
            "name": "Ritodrine",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "β2 agonist formerly used to suppress premature labour."
        },
        {
            "name": "Salbutamol",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "β2 agonist that relaxes uterine smooth muscle."
        },
        {
            "name": "Terbutaline",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "Commonly used β2 agonist for short-term tocolysis."
        },
        {
            "name": "Isoxsuprine",
            "category": "Uterine Relaxants (Tocolytics) - Adrenergic Agonists",
            "note": "β-adrenergic agonist used to delay preterm labour."
        },
        {
            "name": "Nifedipine",
            "category": "Uterine Relaxants (Tocolytics) - Calcium Channel Blockers",
            "note": "Preferred tocolytic because it inhibits calcium entry into uterine muscle."
        },
        {
            "name": "Other dihydropyridines",
            "category": "Uterine Relaxants (Tocolytics) - Calcium Channel Blockers",
            "note": "Calcium channel blockers reduce uterine contractions."
        },
        {
            "name": "Atosiban",
            "category": "Uterine Relaxants (Tocolytics) - Oxytocin Antagonist",
            "note": "Competitive oxytocin receptor antagonist used in preterm labour."
        },
        {
            "name": "Magnesium sulfate",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "Reduces uterine contractility and is also used in eclampsia."
        },
        {
            "name": "Progesterone",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "Helps maintain uterine quiescence during pregnancy."
        },
        {
            "name": "Nitrates",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "Relax uterine smooth muscle through nitric oxide release."
        },
        {
            "name": "Halothane",
            "category": "Uterine Relaxants (Tocolytics) - Miscellaneous Drugs",
            "note": "General anaesthetic that produces marked uterine relaxation."
        }
    ]
},


{
    "id": "gen-1774952432317",
    "name": "Hormones and drugs affecting calcium balance",
    "subject": "Pharmacology",
    "chapter": "Hormones and Related Drugs",
    "categories": [
        "Drugs that Promote Calcium Absorption - Vitamin D",
        "Drugs that Promote Calcium Absorption - Hypercalcaemic Hormones",
        "Hypocalcaemic Hormone",
        "Calcium-Sensing Receptor Agonist",
        "Drugs that Inhibit Bone Resorption - Bisphosphonates - 1st Generation",
        "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
        "Drugs that Inhibit Bone Resorption - Bisphosphonates - 3rd Generation"
    ],
    "mnemonic": "Vitamin D = Cholecalciferol-Calcitriol-Alfacalcidol-Dihydrotachysterol; Hypercalcaemic hormones = PTH-Teriparatide; Hypocalcaemic = Calcitonin; CaSR agonist = Cinacalcet; Bisphosphonates = Etidronate/Tiludronate → Pamidronate/Alendronate/Ibandronate → Risedronate/Zoledronate",
    "items": [
        {
            "name": "Cholecalciferol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Vitamin D3 precursor that increases intestinal calcium absorption."
        },
        {
            "name": "Calcitriol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Active form of vitamin D with rapid onset of action."
        },
        {
            "name": "Alfacalcidol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Vitamin D analogue converted to calcitriol in the liver."
        },
        {
            "name": "Dihydrotachysterol",
            "category": "Drugs that Promote Calcium Absorption - Vitamin D",
            "note": "Vitamin D analogue used in hypoparathyroidism."
        },
        {
            "name": "Parathyroid hormone (1–84)",
            "category": "Drugs that Promote Calcium Absorption - Hypercalcaemic Hormones",
            "note": "Full-length PTH used in severe hypoparathyroidism."
        },
        {
            "name": "Teriparatide (PTH 1–34)",
            "category": "Drugs that Promote Calcium Absorption - Hypercalcaemic Hormones",
            "note": "PTH fragment that stimulates new bone formation."
        },
        {
            "name": "Calcitonin",
            "category": "Hypocalcaemic Hormone",
            "note": "Lowers plasma calcium by inhibiting osteoclastic bone resorption."
        },
        {
            "name": "Cinacalcet",
            "category": "Calcium-Sensing Receptor Agonist",
            "note": "Activates calcium-sensing receptor and suppresses PTH secretion."
        },
        {
            "name": "Etidronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 1st Generation",
            "note": "First-generation bisphosphonate used in Paget disease."
        },
        {
            "name": "Tiludronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 1st Generation",
            "note": "First-generation bisphosphonate that inhibits osteoclast activity."
        },
        {
            "name": "Pamidronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
            "note": "Useful in hypercalcaemia of malignancy."
        },
        {
            "name": "Alendronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
            "note": "Commonly used bisphosphonate for osteoporosis."
        },
        {
            "name": "Ibandronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 2nd Generation",
            "note": "Bisphosphonate used in osteoporosis and metastatic bone disease."
        },
        {
            "name": "Risedronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 3rd Generation",
            "note": "Third-generation bisphosphonate used in osteoporosis."
        },
        {
            "name": "Zoledronate",
            "category": "Drugs that Inhibit Bone Resorption - Bisphosphonates - 3rd Generation",
            "note": "Most potent bisphosphonate with once-yearly dosing in osteoporosis."
        }
    ]
},

{
    "id": "gen-1774952632659",
    "name": "Skeletal Muscle Relaxants",
    "subject": "Pharmacology",
    "chapter": "PNS",
    "categories": [
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Short-Acting",
        "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Depolarizing Blockers",
        "Peripherally Acting Drugs - Directly Acting Agents",
        "Centrally Acting Drugs - Mephenesin Congeners",
        "Centrally Acting Drugs - Benzodiazepines",
        "Centrally Acting Drugs - GABA Mimetic",
        "Centrally Acting Drugs - Central α2-Agonist"
    ],
    "mnemonic": "Long nondepolarizers = Tubocurarine-Pancuronium; Intermediate = Vecuronium-Atracurium-Rocuronium; Depolarizer = Succinylcholine; Direct = Dantrolene; Central = Carisoprodol-Diazepam-Baclofen-Tizanidine",
    "items": [
        {
            "name": "d-Tubocurarine",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Prototype long-acting competitive neuromuscular blocker."
        },
        {
            "name": "Pancuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Long-acting blocker that may cause tachycardia."
        },
        {
            "name": "Doxacurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Long-acting nondepolarizing neuromuscular blocker."
        },
        {
            "name": "Pipecuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Long-Acting",
            "note": "Long-acting blocker with minimal cardiovascular effects."
        },
        {
            "name": "Vecuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Commonly used intermediate-acting neuromuscular blocker."
        },
        {
            "name": "Atracurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Undergoes Hofmann elimination and is useful in renal failure."
        },
        {
            "name": "Cisatracurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Isomer of atracurium with less histamine release."
        },
        {
            "name": "Rocuronium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Intermediate-Acting",
            "note": "Rapid onset intermediate-acting blocker used for intubation."
        },
        {
            "name": "Mivacurium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Nondepolarizing (Competitive) Blockers - Short-Acting",
            "note": "Short-acting neuromuscular blocker hydrolysed by plasma cholinesterase."
        },
        {
            "name": "Succinylcholine (Suxamethonium)",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Depolarizing Blockers",
            "note": "Only commonly used depolarizing neuromuscular blocker."
        },
        {
            "name": "Decamethonium",
            "category": "Peripherally Acting Drugs - Neuromuscular Blocking Agents - Depolarizing Blockers",
            "note": "Older depolarizing blocker now rarely used."
        },
        {
            "name": "Dantrolene sodium",
            "category": "Peripherally Acting Drugs - Directly Acting Agents",
            "note": "Directly relaxes skeletal muscle by inhibiting calcium release from sarcoplasmic reticulum."
        },
        {
            "name": "Quinine",
            "category": "Peripherally Acting Drugs - Directly Acting Agents",
            "note": "May reduce nocturnal muscle cramps."
        },
        {
            "name": "Carisoprodol",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Centrally acting muscle relaxant used in painful muscle spasm."
        },
        {
            "name": "Chlorzoxazone",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Commonly used centrally acting skeletal muscle relaxant."
        },
        {
            "name": "Chlormezanone",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Older centrally acting muscle relaxant."
        },
        {
            "name": "Methocarbamol",
            "category": "Centrally Acting Drugs - Mephenesin Congeners",
            "note": "Used in acute painful musculoskeletal conditions."
        },
        {
            "name": "Diazepam and others",
            "category": "Centrally Acting Drugs - Benzodiazepines",
            "note": "Relieve muscle spasm by facilitating GABA-mediated inhibition."
        },
        {
            "name": "Baclofen",
            "category": "Centrally Acting Drugs - GABA Mimetic",
            "note": "GABAB agonist especially useful in spasticity."
        },
        {
            "name": "Thiocolchicoside",
            "category": "Centrally Acting Drugs - GABA Mimetic",
            "note": "Muscle relaxant used in painful muscle spasm."
        },
        {
            "name": "Tizanidine",
            "category": "Centrally Acting Drugs - Central α2-Agonist",
            "note": "α2 agonist useful in spasticity with less muscle weakness."
        }
    ]
},

{
    "id": "gen-1774952768610",
    "name": "Local Anaesthetics",
    "subject": "Pharmacology",
    "chapter": "PNS",
    "categories": [
        "Injectable Anaesthetics - Low Potency, Short Duration",
        "Injectable Anaesthetics - Intermediate Potency and Duration",
        "Injectable Anaesthetics - High Potency, Long Duration",
        "Surface Anaesthetics - Soluble",
        "Surface Anaesthetics - Insoluble"
    ],
    "mnemonic": "Short = Procaine-Chloroprocaine; Intermediate = Lidocaine-Prilocaine; Long = Tetracaine-Bupivacaine-Levobupivacaine-Ropivacaine-Dibucaine; Surface soluble = Cocaine-Lidocaine-Tetracaine-Proparacaine; Surface insoluble = Benzocaine-Butylaminobenzoate-Oxethazaine",
    "items": [
        {
            "name": "Procaine",
            "category": "Injectable Anaesthetics - Low Potency, Short Duration",
            "note": "Low potency ester local anaesthetic with short duration of action."
        },
        {
            "name": "Chloroprocaine",
            "category": "Injectable Anaesthetics - Low Potency, Short Duration",
            "note": "Very short-acting ester local anaesthetic used for infiltration."
        },
        {
            "name": "Lidocaine (Lignocaine)",
            "category": "Injectable Anaesthetics - Intermediate Potency and Duration",
            "note": "Most commonly used local anaesthetic with rapid onset."
        },
        {
            "name": "Prilocaine",
            "category": "Injectable Anaesthetics - Intermediate Potency and Duration",
            "note": "Intermediate-acting local anaesthetic that may cause methaemoglobinaemia."
        },
        {
            "name": "Tetracaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Highly potent long-acting ester local anaesthetic."
        },
        {
            "name": "Bupivacaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Long-acting amide local anaesthetic with cardiotoxic potential."
        },
        {
            "name": "Levobupivacaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "S-enantiomer of bupivacaine with lower cardiotoxicity."
        },
        {
            "name": "Ropivacaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Long-acting local anaesthetic with less cardiotoxicity than bupivacaine."
        },
        {
            "name": "Dibucaine",
            "category": "Injectable Anaesthetics - High Potency, Long Duration",
            "note": "Very potent long-acting local anaesthetic rarely used systemically."
        },
        {
            "name": "Cocaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Only local anaesthetic with intrinsic vasoconstrictor action."
        },
        {
            "name": "Lidocaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Commonly used surface anaesthetic for mucous membranes."
        },
        {
            "name": "Tetracaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Potent surface anaesthetic often used in ophthalmology."
        },
        {
            "name": "Proparacaine",
            "category": "Surface Anaesthetics - Soluble",
            "note": "Short-acting ophthalmic local anaesthetic."
        },
        {
            "name": "Benzocaine",
            "category": "Surface Anaesthetics - Insoluble",
            "note": "Poorly soluble surface anaesthetic used in lozenges and ointments."
        },
        {
            "name": "Butylaminobenzoate",
            "category": "Surface Anaesthetics - Insoluble",
            "note": "Long-acting insoluble local anaesthetic for topical use."
        },
        {
            "name": "Oxethazaine",
            "category": "Surface Anaesthetics - Insoluble",
            "note": "Surface anaesthetic effective even in acidic medium."
        }
    ]
},

{
    "id": "gen-1774952960699",
    "name": "General Anaesthetics",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Inhalational Anaesthetics - Gases",
        "Inhalational Anaesthetics - Volatile Liquids",
        "Intravenous Anaesthetics - Fast-Acting Drugs",
        "Intravenous Anaesthetics - Benzodiazepines",
        "Intravenous Anaesthetics - Opioid Analgesics",
        "Intravenous Anaesthetics - Dissociative Anaesthetic",
        "Intravenous Anaesthetics - α2-Adrenergic Agonist"
    ],
    "mnemonic": "Inhalational = Nitrous oxide-Ether-Halothane-Isoflurane-Desflurane-Sevoflurane; IV fast = Thiopentone-Propofol-Etomidate; Benzos = Diazepam-Lorazepam-Midazolam; Opioids = Fentanyl-Remifentanil; Dissociative = Ketamine; α2 agonist = Dexmedetomidine",
    "items": [
        {
            "name": "Nitrous oxide",
            "category": "Inhalational Anaesthetics - Gases",
            "note": "Weak anaesthetic with strong analgesic action."
        },
        {
            "name": "Ether",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Older inhalational anaesthetic with wide safety margin."
        },
        {
            "name": "Halothane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Potent inhalational anaesthetic associated with hepatotoxicity."
        },
        {
            "name": "Isoflurane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Widely used volatile anaesthetic with minimal cardiac depression."
        },
        {
            "name": "Desflurane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Very rapid induction and recovery because of low blood solubility."
        },
        {
            "name": "Sevoflurane",
            "category": "Inhalational Anaesthetics - Volatile Liquids",
            "note": "Pleasant smelling inhalational agent suitable for induction."
        },
        {
            "name": "Thiopentone sodium",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Ultra-short acting barbiturate used for induction."
        },
        {
            "name": "Methohexitone sodium",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Rapid-acting barbiturate with short duration."
        },
        {
            "name": "Propofol",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Most commonly used intravenous induction agent with rapid recovery."
        },
        {
            "name": "Etomidate",
            "category": "Intravenous Anaesthetics - Fast-Acting Drugs",
            "note": "Preferred induction agent in patients with cardiovascular instability."
        },
        {
            "name": "Diazepam",
            "category": "Intravenous Anaesthetics - Benzodiazepines",
            "note": "Benzodiazepine used for sedation and preanaesthetic medication."
        },
        {
            "name": "Lorazepam",
            "category": "Intravenous Anaesthetics - Benzodiazepines",
            "note": "Produces anxiolysis and sedation before procedures."
        },
        {
            "name": "Midazolam",
            "category": "Intravenous Anaesthetics - Benzodiazepines",
            "note": "Short-acting benzodiazepine widely used for procedural sedation."
        },
        {
            "name": "Fentanyl",
            "category": "Intravenous Anaesthetics - Opioid Analgesics",
            "note": "Potent opioid analgesic used during anaesthesia."
        },
        {
            "name": "Remifentanil",
            "category": "Intravenous Anaesthetics - Opioid Analgesics",
            "note": "Ultra-short acting opioid rapidly metabolized by plasma esterases."
        },
        {
            "name": "Ketamine",
            "category": "Intravenous Anaesthetics - Dissociative Anaesthetic",
            "note": "Produces dissociative anaesthesia with analgesia and preserved reflexes."
        },
        {
            "name": "Dexmedetomidine",
            "category": "Intravenous Anaesthetics - α2-Adrenergic Agonist",
            "note": "α2 agonist producing sedation with minimal respiratory depression."
        }
    ]
},

{
    "id": "gen-1774953126263",
    "name": "Preanesthetic Medication Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
        "Preanaesthetic Medication Drugs - Opioid Drugs",
        "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
        "Preanaesthetic Medication Drugs - Neuroleptics",
        "Preanaesthetic Medication Drugs - Antiemetics",
        "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - H2-Receptor Antagonists",
        "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - Proton Pump Inhibitors"
    ],
    "mnemonic": "Sedatives = Diazepam-Lorazepam-Promethazine; Opioids = Morphine-Pethidine; Anticholinergics = Atropine-Hyoscine-Glycopyrrolate; Antiemetics = Metoclopramide-Domperidone-Ondansetron; Acid suppression = Ranitidine-Famotidine-Omeprazole-Pantoprazole",
    "items": [
        {
            "name": "Diazepam",
            "category": "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
            "note": "Produces anxiolysis and sedation before anaesthesia."
        },
        {
            "name": "Lorazepam",
            "category": "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
            "note": "Used as premedication to reduce anxiety."
        },
        {
            "name": "Promethazine",
            "category": "Preanaesthetic Medication Drugs - Sedative–Antianxiety Drugs",
            "note": "Provides sedation and also has antiemetic action."
        },
        {
            "name": "Morphine",
            "category": "Preanaesthetic Medication Drugs - Opioid Drugs",
            "note": "Provides analgesia and sedation before surgery."
        },
        {
            "name": "Pethidine",
            "category": "Preanaesthetic Medication Drugs - Opioid Drugs",
            "note": "Opioid analgesic often used as preanaesthetic medication."
        },
        {
            "name": "Atropine",
            "category": "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
            "note": "Reduces salivary and bronchial secretions."
        },
        {
            "name": "Hyoscine",
            "category": "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
            "note": "Produces sedation and prevents motion sickness."
        },
        {
            "name": "Glycopyrrolate",
            "category": "Preanaesthetic Medication Drugs - Anticholinergic Drugs",
            "note": "Preferred anticholinergic because it does not cross blood-brain barrier."
        },
        {
            "name": "Chlorpromazine",
            "category": "Preanaesthetic Medication Drugs - Neuroleptics",
            "note": "Used as neuroleptic premedication because of sedative effect."
        },
        {
            "name": "Triflupromazine",
            "category": "Preanaesthetic Medication Drugs - Neuroleptics",
            "note": "Phenothiazine neuroleptic with antiemetic and sedative action."
        },
        {
            "name": "Haloperidol",
            "category": "Preanaesthetic Medication Drugs - Neuroleptics",
            "note": "Neuroleptic occasionally used for preoperative sedation."
        },
        {
            "name": "Metoclopramide",
            "category": "Preanaesthetic Medication Drugs - Antiemetics",
            "note": "Prevents postoperative nausea and enhances gastric emptying."
        },
        {
            "name": "Domperidone",
            "category": "Preanaesthetic Medication Drugs - Antiemetics",
            "note": "Antiemetic used to reduce perioperative nausea."
        },
        {
            "name": "Ondansetron",
            "category": "Preanaesthetic Medication Drugs - Antiemetics",
            "note": "Most effective drug for prevention of postoperative nausea and vomiting."
        },
        {
            "name": "Ranitidine",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - H2-Receptor Antagonists",
            "note": "Reduces gastric acidity before anaesthesia."
        },
        {
            "name": "Famotidine",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - H2-Receptor Antagonists",
            "note": "H2 blocker used to decrease risk of acid aspiration."
        },
        {
            "name": "Omeprazole",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - Proton Pump Inhibitors",
            "note": "Suppresses gastric acid secretion more effectively than H2 blockers."
        },
        {
            "name": "Pantoprazole",
            "category": "Preanaesthetic Medication Drugs - Gastric Acid Suppressant Drugs - Proton Pump Inhibitors",
            "note": "Proton pump inhibitor used before surgery in aspiration-risk patients."
        }
    ]
},


{
    "id": "gen-1774953548216",
    "name": "Sedative Hypnotic Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Benzodiazepines - Hypnotics",
        "Benzodiazepines - Antianxiety Drugs",
        "Benzodiazepines - Anticonvulsants",
        "Non-Benzodiazepines",
        "Barbiturates - Long-Acting",
        "Barbiturates - Short-Acting",
        "Barbiturates - Ultra-Short-Acting",
        "Other Hypnotics"
    ],
    "mnemonic": "Benzodiazepines = Diazepam-Lorazepam-Alprazolam group; Non-benzodiazepines = Zopiclone-Zolpidem-Zaleplon; Barbiturates = Phenobarbitone-Pentobarbitone-Thiopentone; Others = Triclofos-Melatonin-Suvorexant-Ramelteon",
    "items": [
        {
            "name": "Diazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Long-acting benzodiazepine used as hypnotic and anxiolytic."
        },
        {
            "name": "Flurazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Long-acting hypnotic benzodiazepine causing next-day sedation."
        },
        {
            "name": "Nitrazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Commonly used benzodiazepine hypnotic."
        },
        {
            "name": "Alprazolam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Short-acting benzodiazepine useful in insomnia associated with anxiety."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Intermediate-acting benzodiazepine used for insomnia."
        },
        {
            "name": "Temazepam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Widely used hypnotic with intermediate duration."
        },
        {
            "name": "Triazolam",
            "category": "Benzodiazepines - Hypnotics",
            "note": "Short-acting benzodiazepine preferred for sleep induction."
        },
        {
            "name": "Diazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Prototype anxiolytic benzodiazepine."
        },
        {
            "name": "Chlordiazepoxide",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "First benzodiazepine introduced for anxiety disorders."
        },
        {
            "name": "Oxazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Short-acting benzodiazepine useful in elderly patients."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Frequently used for acute anxiety states."
        },
        {
            "name": "Alprazolam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Particularly useful in panic disorder."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines - Antianxiety Drugs",
            "note": "Used in anxiety disorders and panic attacks."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Effective in absence seizures and myoclonic epilepsy."
        },
        {
            "name": "Clobazam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Benzodiazepine used as adjunct in epilepsy."
        },
        {
            "name": "Diazepam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Drug of choice for status epilepticus."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines - Anticonvulsants",
            "note": "Preferred intravenous benzodiazepine in status epilepticus."
        },
        {
            "name": "Zopiclone",
            "category": "Non-Benzodiazepines",
            "note": "Non-benzodiazepine hypnotic acting on benzodiazepine receptor."
        },
        {
            "name": "Eszopiclone",
            "category": "Non-Benzodiazepines",
            "note": "S-isomer of zopiclone used in insomnia."
        },
        {
            "name": "Zolpidem",
            "category": "Non-Benzodiazepines",
            "note": "Short-acting hypnotic with minimal daytime sedation."
        },
        {
            "name": "Zaleplon",
            "category": "Non-Benzodiazepines",
            "note": "Very short-acting hypnotic useful for sleep initiation."
        },
        {
            "name": "Etizolam",
            "category": "Non-Benzodiazepines",
            "note": "Thienodiazepine used as anxiolytic and hypnotic."
        },
        {
            "name": "Phenobarbitone",
            "category": "Barbiturates - Long-Acting",
            "note": "Long-acting barbiturate mainly used as anticonvulsant."
        },
        {
            "name": "Butobarbitone",
            "category": "Barbiturates - Short-Acting",
            "note": "Short-acting barbiturate formerly used as hypnotic."
        },
        {
            "name": "Pentobarbitone",
            "category": "Barbiturates - Short-Acting",
            "note": "Short-acting barbiturate producing sedation and hypnosis."
        },
        {
            "name": "Thiopentone",
            "category": "Barbiturates - Ultra-Short-Acting",
            "note": "Ultra-short acting barbiturate used for anaesthetic induction."
        },
        {
            "name": "Methohexitone",
            "category": "Barbiturates - Ultra-Short-Acting",
            "note": "Rapid and short-acting barbiturate used in brief procedures."
        },
        {
            "name": "Triclofos",
            "category": "Other Hypnotics",
            "note": "Sedative-hypnotic commonly used in children."
        },
        {
            "name": "Melatonin",
            "category": "Other Hypnotics",
            "note": "Regulates circadian rhythm and helps in sleep onset."
        },
        {
            "name": "Suvorexant",
            "category": "Other Hypnotics",
            "note": "Orexin receptor antagonist used in insomnia."
        },
        {
            "name": "Ramelteon",
            "category": "Other Hypnotics",
            "note": "Melatonin receptor agonist useful for sleep initiation."
        }
    ]
},


{
    "id": "gen-1774953747107",
    "name": "Antiepileptic Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Barbiturates",
        "Deoxybarbiturate",
        "Hydantoins",
        "Succinimides",
        "Benzodiazepines",
        "Iminostilbenes",
        "Aliphatic Carboxylic Acid Derivatives",
        "Phenyltriazine",
        "Cyclic GABA Analogues",
        "Newer Antiepileptic Drugs"
    ],
    "mnemonic": "Barbiturate = Phenobarbitone; Hydantoins = Phenytoin-Fosphenytoin; Benzodiazepines = Clonazepam-Diazepam-Lorazepam-Clobazam; Iminostilbenes = Carbamazepine group; Valproates = Sodium valproate-Divalproex-Valproate semisodium; Newer = Topiramate-Levetiracetam-Lacosamide",
    "items": [
        {
            "name": "Phenobarbitone",
            "category": "Barbiturates",
            "note": "Effective long-acting antiepileptic especially in generalized tonic-clonic seizures."
        },
        {
            "name": "Primidone",
            "category": "Deoxybarbiturate",
            "note": "Converted partly to phenobarbitone in the body."
        },
        {
            "name": "Phenytoin",
            "category": "Hydantoins",
            "note": "Drug of choice for generalized tonic-clonic and partial seizures."
        },
        {
            "name": "Fosphenytoin",
            "category": "Hydantoins",
            "note": "Water-soluble prodrug of phenytoin used intravenously."
        },
        {
            "name": "Ethosuximide",
            "category": "Succinimides",
            "note": "Drug of choice for absence seizures."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines",
            "note": "Useful in absence and myoclonic seizures."
        },
        {
            "name": "Diazepam",
            "category": "Benzodiazepines",
            "note": "Used intravenously in status epilepticus."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines",
            "note": "Preferred intravenous drug for status epilepticus."
        },
        {
            "name": "Clobazam",
            "category": "Benzodiazepines",
            "note": "Often used as add-on therapy in refractory epilepsy."
        },
        {
            "name": "Carbamazepine",
            "category": "Iminostilbenes",
            "note": "Drug of choice for partial seizures and trigeminal neuralgia."
        },
        {
            "name": "Oxcarbazepine",
            "category": "Iminostilbenes",
            "note": "Carbamazepine analogue with fewer adverse effects."
        },
        {
            "name": "Eslicarbazepine",
            "category": "Iminostilbenes",
            "note": "Newer iminostilbene used in partial seizures."
        },
        {
            "name": "Sodium valproate (Valproic acid)",
            "category": "Aliphatic Carboxylic Acid Derivatives",
            "note": "Broad-spectrum antiepileptic effective in most seizure types."
        },
        {
            "name": "Divalproex sodium",
            "category": "Aliphatic Carboxylic Acid Derivatives",
            "note": "Coordination compound of sodium valproate and valproic acid."
        },
        {
            "name": "Valproate semisodium",
            "category": "Aliphatic Carboxylic Acid Derivatives",
            "note": "Modified formulation of valproate with better tolerability."
        },
        {
            "name": "Lamotrigine",
            "category": "Phenyltriazine",
            "note": "Broad-spectrum antiepileptic that may cause skin rash."
        },
        {
            "name": "Gabapentin",
            "category": "Cyclic GABA Analogues",
            "note": "Used in partial seizures and neuropathic pain."
        },
        {
            "name": "Pregabalin",
            "category": "Cyclic GABA Analogues",
            "note": "More potent analogue of gabapentin."
        },
        {
            "name": "Topiramate",
            "category": "Newer Antiepileptic Drugs",
            "note": "Broad-spectrum drug also useful in migraine prophylaxis."
        },
        {
            "name": "Zonisamide",
            "category": "Newer Antiepileptic Drugs",
            "note": "Sulfonamide derivative effective in partial seizures."
        },
        {
            "name": "Levetiracetam",
            "category": "Newer Antiepileptic Drugs",
            "note": "Well-tolerated broad-spectrum antiepileptic."
        },
        {
            "name": "Vigabatrin",
            "category": "Newer Antiepileptic Drugs",
            "note": "Irreversibly inhibits GABA transaminase."
        },
        {
            "name": "Tiagabine",
            "category": "Newer Antiepileptic Drugs",
            "note": "Inhibits reuptake of GABA into neurons."
        },
        {
            "name": "Lacosamide",
            "category": "Newer Antiepileptic Drugs",
            "note": "Enhances slow inactivation of sodium channels."
        },
        {
            "name": "Stiripentol",
            "category": "Newer Antiepileptic Drugs",
            "note": "Used mainly in Dravet syndrome."
        },
        {
            "name": "Rufinamide",
            "category": "Newer Antiepileptic Drugs",
            "note": "Useful in Lennox-Gastaut syndrome."
        }
    ]
},


{
    "id": "gen-1774953944756",
    "name": "Antiparkinsonian Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Drugs Affecting Brain Dopaminergic System - Dopamine Precursor",
        "Drugs Affecting Brain Dopaminergic System - Peripheral Decarboxylase Inhibitors",
        "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
        "Drugs Affecting Brain Dopaminergic System - MAO-B Inhibitors",
        "Drugs Affecting Brain Dopaminergic System - COMT Inhibitors",
        "Drugs Affecting Brain Dopaminergic System - Dopamine Facilitator",
        "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
        "Drugs Affecting Brain Cholinergic System - Antihistaminics"
    ],
    "mnemonic": "Levodopa + Carbidopa/Benserazide; Agonists = Bromocriptine-Ropinirole-Pramipexole; MAO-B = Selegiline-Rasagiline; COMT = Entacapone-Tolcapone; Anticholinergics = Procyclidine-Trihexyphenidyl-Biperiden",
    "items": [
        {
            "name": "Levodopa",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopamine Precursor",
            "note": "Most effective drug for Parkinson disease and converted to dopamine in brain."
        },
        {
            "name": "Carbidopa",
            "category": "Drugs Affecting Brain Dopaminergic System - Peripheral Decarboxylase Inhibitors",
            "note": "Prevents peripheral conversion of levodopa to dopamine."
        },
        {
            "name": "Benserazide",
            "category": "Drugs Affecting Brain Dopaminergic System - Peripheral Decarboxylase Inhibitors",
            "note": "Used with levodopa to increase its availability to brain."
        },
        {
            "name": "Bromocriptine",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
            "note": "Ergot-derived dopamine agonist used in Parkinson disease."
        },
        {
            "name": "Ropinirole",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
            "note": "Nonergot dopamine agonist useful in early Parkinson disease."
        },
        {
            "name": "Pramipexole",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopaminergic Agonists",
            "note": "Dopamine agonist with selective D3 receptor action."
        },
        {
            "name": "Selegiline",
            "category": "Drugs Affecting Brain Dopaminergic System - MAO-B Inhibitors",
            "note": "Selective MAO-B inhibitor that prolongs dopamine action."
        },
        {
            "name": "Rasagiline",
            "category": "Drugs Affecting Brain Dopaminergic System - MAO-B Inhibitors",
            "note": "MAO-B inhibitor used as adjunct to levodopa."
        },
        {
            "name": "Entacapone",
            "category": "Drugs Affecting Brain Dopaminergic System - COMT Inhibitors",
            "note": "Peripheral COMT inhibitor that prolongs effect of levodopa."
        },
        {
            "name": "Tolcapone",
            "category": "Drugs Affecting Brain Dopaminergic System - COMT Inhibitors",
            "note": "Acts both centrally and peripherally but may cause hepatotoxicity."
        },
        {
            "name": "Amantadine",
            "category": "Drugs Affecting Brain Dopaminergic System - Dopamine Facilitator",
            "note": "Facilitates dopamine release and also acts as NMDA receptor antagonist."
        },
        {
            "name": "Procyclidine",
            "category": "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
            "note": "Central anticholinergic mainly useful for tremor and rigidity."
        },
        {
            "name": "Trihexyphenidyl",
            "category": "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
            "note": "Frequently used anticholinergic in Parkinson disease."
        },
        {
            "name": "Biperiden",
            "category": "Drugs Affecting Brain Cholinergic System - Central Anticholinergics",
            "note": "Anticholinergic useful in drug-induced parkinsonism."
        },
        {
            "name": "Orphenadrine",
            "category": "Drugs Affecting Brain Cholinergic System - Antihistaminics",
            "note": "Antihistaminic with anticholinergic property used in Parkinsonism."
        },
        {
            "name": "Promethazine",
            "category": "Drugs Affecting Brain Cholinergic System - Antihistaminics",
            "note": "Sedative antihistaminic with mild antiparkinsonian effect."
        }
    ]
},

{
    "id": "gen-1774954142410",
    "name": "Antipsychotic Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Typical (Classical) Antipsychotics - Phenothiazines - Aliphatic Side Chain",
        "Typical (Classical) Antipsychotics - Phenothiazines - Piperidine Side Chain",
        "Typical (Classical) Antipsychotics - Phenothiazines - Piperazine Side Chain",
        "Typical (Classical) Antipsychotics - Thioxanthenes",
        "Typical (Classical) Antipsychotics - Butyrophenones",
        "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
        "Atypical Antipsychotics"
    ],
    "mnemonic": "Phenothiazines = Chlorpromazine-Thioridazine-Trifluoperazine; Butyrophenones = Haloperidol group; Atypicals = Clozapine-Risperidone-Olanzapine-Quetiapine-Aripiprazole",
    "items": [
        {
            "name": "Chlorpromazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Aliphatic Side Chain",
            "note": "Prototype phenothiazine with marked sedative and autonomic effects."
        },
        {
            "name": "Triflupromazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Aliphatic Side Chain",
            "note": "Phenothiazine antipsychotic with strong sedative action."
        },
        {
            "name": "Thioridazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Piperidine Side Chain",
            "note": "Less extrapyramidal toxicity but may cause retinal damage."
        },
        {
            "name": "Trifluoperazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Piperazine Side Chain",
            "note": "Potent antipsychotic with high incidence of extrapyramidal symptoms."
        },
        {
            "name": "Fluphenazine",
            "category": "Typical (Classical) Antipsychotics - Phenothiazines - Piperazine Side Chain",
            "note": "Long-acting phenothiazine often used as depot preparation."
        },
        {
            "name": "Flupenthixol",
            "category": "Typical (Classical) Antipsychotics - Thioxanthenes",
            "note": "Thioxanthene derivative with antipsychotic action."
        },
        {
            "name": "Haloperidol",
            "category": "Typical (Classical) Antipsychotics - Butyrophenones",
            "note": "Highly potent antipsychotic commonly used in acute psychosis."
        },
        {
            "name": "Trifluperidol",
            "category": "Typical (Classical) Antipsychotics - Butyrophenones",
            "note": "Very potent butyrophenone with marked extrapyramidal effects."
        },
        {
            "name": "Penfluridol",
            "category": "Typical (Classical) Antipsychotics - Butyrophenones",
            "note": "Long-acting oral antipsychotic given once weekly."
        },
        {
            "name": "Pimozide",
            "category": "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
            "note": "Used in Tourette syndrome and chronic psychosis."
        },
        {
            "name": "Loxapine",
            "category": "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
            "note": "Dibenzoxazepine antipsychotic with properties between typical and atypical drugs."
        },
        {
            "name": "Levosulpiride",
            "category": "Typical (Classical) Antipsychotics - Other Heterocyclic Compounds",
            "note": "Selective dopamine D2 blocker also used as prokinetic."
        },
        {
            "name": "Clozapine",
            "category": "Atypical Antipsychotics",
            "note": "Most effective atypical antipsychotic with risk of agranulocytosis."
        },
        {
            "name": "Risperidone",
            "category": "Atypical Antipsychotics",
            "note": "Atypical antipsychotic effective for both positive and negative symptoms."
        },
        {
            "name": "Olanzapine",
            "category": "Atypical Antipsychotics",
            "note": "Associated with marked weight gain and metabolic syndrome."
        },
        {
            "name": "Quetiapine",
            "category": "Atypical Antipsychotics",
            "note": "Produces minimal extrapyramidal side effects."
        },
        {
            "name": "Aripiprazole",
            "category": "Atypical Antipsychotics",
            "note": "Partial dopamine agonist with lower risk of weight gain."
        },
        {
            "name": "Ziprasidone",
            "category": "Atypical Antipsychotics",
            "note": "Associated with QT interval prolongation."
        },
        {
            "name": "Levosulpiride",
            "category": "Atypical Antipsychotics",
            "note": "Atypical antipsychotic with selective D2 antagonism."
        },
        {
            "name": "Amisulpride",
            "category": "Atypical Antipsychotics",
            "note": "Selective D2/D3 antagonist useful in negative symptoms."
        },
        {
            "name": "Zotepine",
            "category": "Atypical Antipsychotics",
            "note": "Atypical antipsychotic effective in schizophrenia."
        }
    ]
},


{
    "id": "gen-1774954318686",
    "name": "Drugs For Mania and Bipolar Disorder ",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Mood Stabilizer",
        "Anticonvulsants Used as Mood Stabilizers",
        "Atypical Antipsychotics"
    ],
    "mnemonic": "Classic stabilizer = Lithium; Anticonvulsants = Valproate-Carbamazepine-Lamotrigine; Atypicals = Olanzapine-Risperidone-Quetiapine-Aripiprazole",
    "items": [
        {
            "name": "Lithium carbonate",
            "category": "Mood Stabilizer",
            "note": "Drug of choice for prophylaxis of bipolar disorder."
        },
        {
            "name": "Sodium valproate",
            "category": "Anticonvulsants Used as Mood Stabilizers",
            "note": "Useful in acute mania and rapid-cycling bipolar disorder."
        },
        {
            "name": "Carbamazepine",
            "category": "Anticonvulsants Used as Mood Stabilizers",
            "note": "Alternative mood stabilizer useful in refractory mania."
        },
        {
            "name": "Lamotrigine",
            "category": "Anticonvulsants Used as Mood Stabilizers",
            "note": "More useful in bipolar depression and prevention of relapse."
        },
        {
            "name": "Olanzapine",
            "category": "Atypical Antipsychotics",
            "note": "Effective in acute mania but associated with weight gain."
        },
        {
            "name": "Risperidone",
            "category": "Atypical Antipsychotics",
            "note": "Useful in acute manic episodes."
        },
        {
            "name": "Quetiapine",
            "category": "Atypical Antipsychotics",
            "note": "Effective in both mania and bipolar depression."
        },
        {
            "name": "Aripiprazole",
            "category": "Atypical Antipsychotics",
            "note": "Partial dopamine agonist useful in bipolar mania."
        }
    ]
},

{
    "id": "gen-1774954546676",
    "name": "Hallucinogens",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Hallucinogens - Indole Alkylamines",
        "Hallucinogens - Phenylalkylamines",
        "Hallucinogens - Arylcyclohexylamines",
        "Hallucinogens - Cannabinoids"
    ],
    "mnemonic": "Indole = LSD-Psilocybin-DMT; Phenylalkylamines = Mescaline-MDMA-YABA; Arylcyclohexylamine = PCP; Cannabinoid = THC",
    "items": [
        {
            "name": "Lysergic acid diethylamide (LSD)",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Most potent hallucinogen producing vivid perceptual changes."
        },
        {
            "name": "Lysergic acid amide",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Naturally occurring hallucinogenic amide related to LSD."
        },
        {
            "name": "Psilocybin",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Active hallucinogen found in certain mushrooms."
        },
        {
            "name": "Harmine",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "β-carboline alkaloid with hallucinogenic property."
        },
        {
            "name": "Dimethyltryptamine (DMT)",
            "category": "Hallucinogens - Indole Alkylamines",
            "note": "Very short-acting hallucinogen producing intense psychedelic effects."
        },
        {
            "name": "Mescaline",
            "category": "Hallucinogens - Phenylalkylamines",
            "note": "Hallucinogen obtained from peyote cactus."
        },
        {
            "name": "Methylenedioxymethamphetamine (MDMA)",
            "category": "Hallucinogens - Phenylalkylamines",
            "note": "Ecstasy produces euphoria, emotional warmth and mild hallucinations."
        },
        {
            "name": "Methamphetamine + Methylhexanamine",
            "category": "Hallucinogens - Phenylalkylamines",
            "note": "YABA preparation with stimulant and hallucinogenic effects."
        },
        {
            "name": "Phencyclidine (PCP)",
            "category": "Hallucinogens - Arylcyclohexylamines",
            "note": "Dissociative hallucinogen that may cause violent behaviour."
        },
        {
            "name": "Tetrahydrocannabinol (THC)",
            "category": "Hallucinogens - Cannabinoids",
            "note": "Principal psychoactive constituent of cannabis."
        }
    ]
},


{
    "id": "gen-1774954737654",
    "name": "Antidepressants",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Reversible Inhibitors of MAO-A (RIMAs)",
        "Selective Serotonin Reuptake Inhibitors (SSRIs)",
        "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
        "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
        "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
        "Atypical Antidepressants"
    ],
    "mnemonic": "RIMA = Moclobemide-Clorgyline; SSRI = Fluoxetine-Sertraline-Citalopram; TCA = Imipramine-Amitriptyline; SNRI = Venlafaxine-Duloxetine; Atypical = Trazodone-Mirtazapine-Bupropion",
    "items": [
        {
            "name": "Moclobemide",
            "category": "Reversible Inhibitors of MAO-A (RIMAs)",
            "note": "Reversible MAO-A inhibitor with fewer dietary restrictions."
        },
        {
            "name": "Clorgyline",
            "category": "Reversible Inhibitors of MAO-A (RIMAs)",
            "note": "Selective MAO-A inhibitor with antidepressant action."
        },
        {
            "name": "Fluoxetine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "Prototype SSRI with long half-life."
        },
        {
            "name": "Fluvoxamine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "SSRI particularly useful in obsessive-compulsive disorder."
        },
        {
            "name": "Paroxetine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "SSRI with more anticholinergic and withdrawal effects."
        },
        {
            "name": "Sertraline",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "Commonly used SSRI with good safety profile."
        },
        {
            "name": "Citalopram",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "SSRI associated with dose-dependent QT prolongation."
        },
        {
            "name": "Escitalopram",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "S-enantiomer of citalopram with greater potency."
        },
        {
            "name": "Dapoxetine",
            "category": "Selective Serotonin Reuptake Inhibitors (SSRIs)",
            "note": "Short-acting SSRI mainly used in premature ejaculation."
        },
        {
            "name": "Imipramine",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Prototype tricyclic antidepressant."
        },
        {
            "name": "Amitriptyline",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Sedative TCA also useful in chronic pain."
        },
        {
            "name": "Trimipramine",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Tricyclic antidepressant with marked sedative effect."
        },
        {
            "name": "Doxepin",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Highly sedative TCA also used in pruritus."
        },
        {
            "name": "Dothiepin",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Also called dosulepin; used in depression and anxiety."
        },
        {
            "name": "Clomipramine",
            "category": "Tricyclic Antidepressants (TCAs) - NA + 5-HT Reuptake Inhibitors",
            "note": "Most effective TCA in obsessive-compulsive disorder."
        },
        {
            "name": "Desipramine",
            "category": "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
            "note": "TCA with predominant noradrenaline reuptake inhibition."
        },
        {
            "name": "Nortriptyline",
            "category": "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
            "note": "Less sedative TCA with fewer anticholinergic effects."
        },
        {
            "name": "Reboxetine",
            "category": "Tricyclic Antidepressants (TCAs) - Predominantly NA Reuptake Inhibitors",
            "note": "Selective noradrenaline reuptake inhibitor."
        },
        {
            "name": "Venlafaxine",
            "category": "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
            "note": "SNRI effective in depression and anxiety disorders."
        },
        {
            "name": "Desvenlafaxine",
            "category": "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
            "note": "Active metabolite of venlafaxine."
        },
        {
            "name": "Duloxetine",
            "category": "Serotonin and Noradrenaline Reuptake Inhibitors (SNRIs)",
            "note": "SNRI also useful in neuropathic pain."
        },
        {
            "name": "Trazodone",
            "category": "Atypical Antidepressants",
            "note": "Sedative antidepressant often used in insomnia."
        },
        {
            "name": "Mianserin",
            "category": "Atypical Antidepressants",
            "note": "Tetracyclic antidepressant with sedative effect."
        },
        {
            "name": "Mirtazapine",
            "category": "Atypical Antidepressants",
            "note": "Antidepressant causing increased appetite and weight gain."
        },
        {
            "name": "Bupropion",
            "category": "Atypical Antidepressants",
            "note": "Useful in depression and smoking cessation."
        },
        {
            "name": "Amoxapine",
            "category": "Atypical Antidepressants",
            "note": "Antidepressant with additional antipsychotic property."
        },
        {
            "name": "Tianeptine",
            "category": "Atypical Antidepressants",
            "note": "Atypical antidepressant with anxiolytic action."
        },
        {
            "name": "Amineptine",
            "category": "Atypical Antidepressants",
            "note": "Dopamine-enhancing antidepressant now rarely used."
        }
    ]
},


{
    "id": "gen-1774954855673",
    "name": "Antianxiety Drugs",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Benzodiazepines",
        "Azapirones",
        "Sedative–Antihistaminic",
        "β-Adrenergic Blocker"
    ],
    "mnemonic": "Benzodiazepines = Diazepam-Oxazepam-Lorazepam-Alprazolam; Azapirones = Buspirone-Gepirone-Ipsapirone; Others = Hydroxyzine-Propranolol",
    "items": [
        {
            "name": "Diazepam",
            "category": "Benzodiazepines",
            "note": "Prototype benzodiazepine used for rapid relief of anxiety."
        },
        {
            "name": "Oxazepam",
            "category": "Benzodiazepines",
            "note": "Short-acting benzodiazepine suitable in elderly patients."
        },
        {
            "name": "Lorazepam",
            "category": "Benzodiazepines",
            "note": "Intermediate-acting benzodiazepine commonly used in anxiety disorders."
        },
        {
            "name": "Chlordiazepoxide",
            "category": "Benzodiazepines",
            "note": "First benzodiazepine introduced for anxiety treatment."
        },
        {
            "name": "Alprazolam",
            "category": "Benzodiazepines",
            "note": "Particularly useful in panic disorder."
        },
        {
            "name": "Clonazepam",
            "category": "Benzodiazepines",
            "note": "Useful in panic disorder and anxiety associated with seizures."
        },
        {
            "name": "Buspirone",
            "category": "Azapirones",
            "note": "Non-sedative anxiolytic acting as partial 5-HT1A agonist."
        },
        {
            "name": "Gepirone",
            "category": "Azapirones",
            "note": "Azapirone anxiolytic related to buspirone."
        },
        {
            "name": "Ipsapirone",
            "category": "Azapirones",
            "note": "Partial 5-HT1A agonist with anxiolytic effect."
        },
        {
            "name": "Hydroxyzine",
            "category": "Sedative–Antihistaminic",
            "note": "Sedative antihistamine used for short-term anxiety relief."
        },
        {
            "name": "Propranolol",
            "category": "β-Adrenergic Blocker",
            "note": "Useful in performance anxiety by reducing autonomic symptoms."
        }
    ]
},

{
    "id": "gen-1774955066062",
    "name": "Opioid Analgesics And Antagonists",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Opioid μ-Receptor Agonists - Natural Opium Alkaloids",
        "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
        "Opioid μ-Receptor Agonists - Synthetic Opioids",
        "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
        "Complex Action Opioids - Partial μ-Agonist + κ-Antagonist",
        "Pure Opioid Antagonists"
    ],
    "mnemonic": "Natural = Morphine-Codeine; Semisynthetic = Heroin-Pholcodine-Ethylmorphine; Synthetic = Pethidine-Methadone-Fentanyl-Tramadol; Mixed = Pentazocine-Nalbuphine-Buprenorphine; Antagonists = Naloxone-Naltrexone",
    "items": [
        {
            "name": "Morphine",
            "category": "Opioid μ-Receptor Agonists - Natural Opium Alkaloids",
            "note": "Prototype strong opioid analgesic."
        },
        {
            "name": "Codeine",
            "category": "Opioid μ-Receptor Agonists - Natural Opium Alkaloids",
            "note": "Weak opioid used mainly as antitussive."
        },
        {
            "name": "Diacetylmorphine (Heroin)",
            "category": "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
            "note": "Highly lipid-soluble opioid with rapid CNS entry."
        },
        {
            "name": "Pholcodine",
            "category": "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
            "note": "Semisynthetic opioid mainly used as cough suppressant."
        },
        {
            "name": "Ethylmorphine",
            "category": "Opioid μ-Receptor Agonists - Semisynthetic Opioids",
            "note": "Opioid derivative used in cough mixtures."
        },
        {
            "name": "Pethidine (Meperidine)",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Synthetic opioid with antimuscarinic property."
        },
        {
            "name": "Methadone",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Long-acting opioid used in opioid dependence."
        },
        {
            "name": "Fentanyl",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Very potent opioid widely used in anaesthesia."
        },
        {
            "name": "Remifentanil",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Ultra-short acting opioid rapidly metabolized by esterases."
        },
        {
            "name": "Tramadol",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Weak opioid that also inhibits monoamine reuptake."
        },
        {
            "name": "Tapentadol",
            "category": "Opioid μ-Receptor Agonists - Synthetic Opioids",
            "note": "Acts as μ agonist and noradrenaline reuptake inhibitor."
        },
        {
            "name": "Nalorphine",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Older mixed agonist-antagonist opioid."
        },
        {
            "name": "Pentazocine",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Mixed opioid causing less respiratory depression."
        },
        {
            "name": "Butorphanol",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Mixed agonist-antagonist useful in migraine."
        },
        {
            "name": "Nalbuphine",
            "category": "Complex Action Opioids - Agonist–Antagonists (κ agonists / μ antagonists or partial agonists)",
            "note": "Produces analgesia with less abuse potential."
        },
        {
            "name": "Buprenorphine",
            "category": "Complex Action Opioids - Partial μ-Agonist + κ-Antagonist",
            "note": "Partial μ agonist widely used in opioid dependence."
        },
        {
            "name": "Naloxone",
            "category": "Pure Opioid Antagonists",
            "note": "Drug of choice for acute opioid overdose."
        },
        {
            "name": "Naltrexone",
            "category": "Pure Opioid Antagonists",
            "note": "Long-acting opioid antagonist used in dependence."
        },
        {
            "name": "Nalmefene",
            "category": "Pure Opioid Antagonists",
            "note": "Longer-acting opioid antagonist similar to naloxone."
        }
    ]
},

{
    "id": "gen-1774955180945",
    "name": "CNS Stimulants",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Convulsants",
        "Analeptic",
        "Psychostimulants"
    ],
    "mnemonic": "Convulsants = Strychnine-Picrotoxin-Bicuculline-Pentylenetetrazole; Analeptic = Doxapram; Psychostimulants = Amphetamines-Methylphenidate-Cocaine-Caffeine-Modafinil",
    "items": [
        {
            "name": "Strychnine",
            "category": "Convulsants",
            "note": "Produces convulsions by blocking spinal glycine receptors."
        },
        {
            "name": "Picrotoxin",
            "category": "Convulsants",
            "note": "Convulsant that blocks GABAA receptor chloride channel."
        },
        {
            "name": "Bicuculline",
            "category": "Convulsants",
            "note": "Competitive antagonist at GABAA receptors."
        },
        {
            "name": "Pentylenetetrazole",
            "category": "Convulsants",
            "note": "Historically used as respiratory stimulant and experimental convulsant."
        },
        {
            "name": "Doxapram",
            "category": "Analeptic",
            "note": "Respiratory stimulant used in drug-induced respiratory depression."
        },
        {
            "name": "Amphetamines",
            "category": "Psychostimulants",
            "note": "Increase release of catecholamines and produce CNS stimulation."
        },
        {
            "name": "Methylphenidate",
            "category": "Psychostimulants",
            "note": "Drug of choice for attention deficit hyperactivity disorder."
        },
        {
            "name": "Cocaine",
            "category": "Psychostimulants",
            "note": "Blocks reuptake of dopamine, noradrenaline and serotonin."
        },
        {
            "name": "Atomoxetine",
            "category": "Psychostimulants",
            "note": "Selective noradrenaline reuptake inhibitor used in ADHD."
        },
        {
            "name": "Caffeine",
            "category": "Psychostimulants",
            "note": "Most widely used CNS stimulant acting by adenosine receptor blockade."
        },
        {
            "name": "Modafinil",
            "category": "Psychostimulants",
            "note": "Promotes wakefulness and is used in narcolepsy."
        },
        {
            "name": "Armodafinil",
            "category": "Psychostimulants",
            "note": "R-enantiomer of modafinil with longer duration of action."
        }
    ]
},


{
    "id": "gen-1774955316630",
    "name": "Cognition Enhancers",
    "subject": "Pharmacology",
    "chapter": "CNS",
    "categories": [
        "Cholinergic Activators",
        "Glutamate (NMDA) Antagonist",
        "Miscellaneous Drugs"
    ],
    "mnemonic": "Cholinergic = Rivastigmine-Donepezil-Galantamine-Tacrine; NMDA antagonist = Memantine; Miscellaneous = Piracetam-Citicoline-Ginkgo biloba",
    "items": [
        {
            "name": "Rivastigmine",
            "category": "Cholinergic Activators",
            "note": "Cholinesterase inhibitor used in Alzheimer disease."
        },
        {
            "name": "Donepezil",
            "category": "Cholinergic Activators",
            "note": "Most commonly used cognition enhancer in Alzheimer disease."
        },
        {
            "name": "Galantamine",
            "category": "Cholinergic Activators",
            "note": "Cholinesterase inhibitor that also facilitates nicotinic receptors."
        },
        {
            "name": "Tacrine",
            "category": "Cholinergic Activators",
            "note": "Older cholinesterase inhibitor limited by hepatotoxicity."
        },
        {
            "name": "Memantine",
            "category": "Glutamate (NMDA) Antagonist",
            "note": "NMDA receptor antagonist useful in moderate to severe Alzheimer disease."
        },
        {
            "name": "Piracetam",
            "category": "Miscellaneous Drugs",
            "note": "Prototype nootropic drug claimed to improve cognition."
        },
        {
            "name": "Citicoline",
            "category": "Miscellaneous Drugs",
            "note": "May improve cognitive function after stroke or brain injury."
        },
        {
            "name": "Pyritinol",
            "category": "Miscellaneous Drugs",
            "note": "Cerebroactive drug with antioxidant property."
        },
        {
            "name": "Piribedil",
            "category": "Miscellaneous Drugs",
            "note": "Dopamine agonist sometimes used in cognitive impairment."
        },
        {
            "name": "Dihydroergotoxine (Codergocrine)",
            "category": "Miscellaneous Drugs",
            "note": "Ergot derivative formerly used in age-related cognitive decline."
        },
        {
            "name": "Ginkgo biloba",
            "category": "Miscellaneous Drugs",
            "note": "Herbal preparation claimed to improve memory and cognition."
        }
    ]
},








    
    // --- NEW_DATA_END ---
];
