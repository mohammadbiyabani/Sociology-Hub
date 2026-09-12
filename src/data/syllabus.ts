import { SyllabusModule, Thinker, QuizQuestion } from '../types';

export const thinkersData: Thinker[] = [
  {
    id: "marx",
    name: "Karl Marx",
    nativeName: { hi: "कार्ल मार्क्स", te: "కార్ల్ మార్క్స్" },
    period: "1818 – 1883",
    nationality: "German / Prussian",
    school: "Historical Materialism / Conflict Theory",
    keyWorks: [
      { title: "Das Kapital (Capital)", year: 1867 },
      { title: "The Communist Manifesto", year: 1848 },
      { title: "Economic and Philosophic Manuscripts of 1844", year: 1844 },
      { title: "The German Ideology", year: 1845 },
    ],
    coreConcepts: [
      {
        title: "Historical Materialism",
        nativeTitle: { hi: "ऐतिहासिक भौतिकवाद", te: "చారిత్రక భౌతికవాదం" },
        summary: "Human history is driven by material and economic conditions rather than abstract ideas. Society's economic base (forces & relations of production) conditions the superstructure (law, politics, religion, culture).",
        depth: {
          basic: "High School: Human history progresses based on how people produce food, goods, and tools. Those who own the tools rule society.",
          undergraduate: "BA Level: Economic Base (forces and relations of production) conditions the Superstructure (legal, political, and cultural institutions). History unfolds through epochal class antagonisms.",
          advanced: "MA / UGC-NET / UPSC: Dialectical transformation occurs when expanding productive forces come into structural contradiction with existing relations of production, resolving in epochal revolutions (Asiatic, Ancient, Feudal, Capitalist).",
        },
        keyPoints: [
          "Forces of Production (technology, raw materials, labor power) + Relations of Production (property ownership).",
          "Dialectical progression through epochs: Primitive Communism -> Ancient -> Feudalism -> Capitalism -> Socialism/Communism.",
          "Contradiction between evolving forces of production and stagnant relations of production sparks revolutionary change.",
        ],
        indianApplication: "Used by Indian Marxist sociologists (A.R. Desai in 'Social Background of Indian Nationalism' and D.D. Kosambi) to analyze colonial agrarian exploitation, zamindari system, and peasant struggles.",
      },
      {
        title: "Theory of Alienation (Entfremdung)",
        nativeTitle: { hi: "अलगाव का सिद्धांत", te: "పరాయీకరణ సిద్ధాంతం" },
        summary: "Under capitalist wage-labor, workers are separated from their human essence (Gattungswesen) across four distinct dimensions.",
        depth: {
          basic: "High School: Workers feel disconnected, powerless, and unhappy because they don't own what they make and work like robots.",
          undergraduate: "BA Level: Capitalist wage-labor alienates workers from the product, the act of production, fellow workers, and their creative human potential.",
          advanced: "MA / UGC-NET / UPSC: Entfremdung in the 1844 Manuscripts reflects the inversion of subject and object: living labor is subjugated by dead labor (capital), commodifying human species-being (Gattungswesen).",
        },
        keyPoints: [
          "1. Alienation from the Product of labor (the object belongs to the capitalist).",
          "2. Alienation from the Act of Production (labor is forced, tedious, and unfulfilling).",
          "3. Alienation from Species-Essence / Human Potential (work ceases to be creative self-realization).",
          "4. Alienation from Fellow Workers (competition replaces human solidarity).",
        ],
        indianApplication: "Applied to study precarious migrant laborers, assembly-line factory workers in SEZs, and IT sector gig workers where labor is severely commodified.",
      },
      {
        title: "Class Struggle & Exploitation",
        nativeTitle: { hi: "वर्ग संघर्ष एवं अधिशेष मूल्य", te: "వర్గ పోరాటం & మిగులు విలువ" },
        summary: "All hitherto existing society is the history of class struggles. Capitalist profit originates from Surplus Value (Mehrwert) extracted from unpaid surplus labor time.",
        depth: {
          basic: "High School: Society divides into two opposing groups: the rich factory owners (Bourgeoisie) and the poor workers (Proletariat).",
          undergraduate: "BA Level: Profit is surplus value extracted by underpaying workers. Class consciousness develops as workers recognize their shared exploitation.",
          advanced: "MA / UGC-NET / UPSC: Transition from Class-in-itself (objective economic grouping) to Class-for-itself (politically organized vanguard) through the emergence of proletarian praxis and revolutionary crises.",
        },
        keyPoints: [
          "Bourgeoisie (owners of means of production) vs Proletariat (wage-laborers owning only their labor-power).",
          "Transformation from 'Class-in-itself' (Klasse an sich) to 'Class-for-itself' (Klasse für sich) through class consciousness.",
          "Polarization and immiseration (Verelendung) leading to systemic capitalist crises.",
        ],
      },
    ],
    criticalPerspective: "Critiqued by Weber for economic reductionism; critiqued by feminist sociologists for omitting unpaid domestic reproductive labor; critiqued by Ambedkar for underestimating the autonomous cultural rigidity of Caste in India.",
  },
  {
    id: "weber",
    name: "Max Weber",
    nativeName: { hi: "मैक्स वेबर", te: "మాక్స్ వెబర్" },
    period: "1864 – 1920",
    nationality: "German",
    school: "Interpretive Sociology / Social Action",
    keyWorks: [
      { title: "The Protestant Ethic and the Spirit of Capitalism", year: 1905 },
      { title: "Economy and Society", year: 1922 },
      { title: "The Methodology of the Social Sciences", year: 1949 },
      { title: "The Religion of India", year: 1916 },
    ],
    coreConcepts: [
      {
        title: "Verstehen & Social Action (Soziales Handeln)",
        nativeTitle: { hi: "सामाजिक क्रिया और वेर्स्टेहेन", te: "సామాజిక చర్య & వెర్‌స్టెహెన్ (అవగాహన)" },
        summary: "Sociology is the science of interpretive understanding (Verstehen) of social action in order to arrive at a causal explanation of its course and effects.",
        depth: {
          basic: "High School: Sociology studies human actions by looking at the personal reasons and meanings people give to their behavior.",
          undergraduate: "BA Level: Action is social when guided by the subjective intentions of actors oriented toward others. Weber classifies four Ideal Types of action.",
          advanced: "MA / UGC-NET / UPSC: Methodological individualism and Verstehen (interpretive comprehension) bridge subjective meaning-complexes (Sinnzusammenhang) with causal adequacy, using heuristic Ideal Types.",
        },
        keyPoints: [
          "Social Action must involve subjective meaning (Sinn) directed toward the behavior of others.",
          "Four Ideal Types of Action: Zweckrational (Instrumental-rational), Wertrational (Value-rational), Affective (Emotional), Traditional (Customary).",
          "Ideal Types serve as heuristic measuring rods, not empirical averages.",
        ],
        indianApplication: "Examining traditional rituals becoming instrumentally rationalized (e.g., commercialization of festivals, matrimonial matrimonial algorithms blending caste and class criteria).",
      },
      {
        title: "Bureaucracy & Rational-Legal Authority",
        nativeTitle: { hi: "नौकरशाही और प्राधिकार", te: "ఉద్యోగస్వామ్యం & ప్రాధికార రకాలు" },
        summary: "The defining institutional form of modern rationalization. Characterized by jurisdictional hierarchy, written rules, specialized training, and impersonality.",
        depth: {
          basic: "High School: Bureaucracy is an organized system with fixed rules, ranks, and qualified officers to run governments and big offices.",
          undergraduate: "BA Level: Tripartite authority model: Traditional, Charismatic, and Rational-Legal. Bureaucracy is technically superior but risks trapping humanity in an Iron Cage.",
          advanced: "MA / UGC-NET / UPSC: Formal rationality versus substantive rationality conflict; the routinization of charisma (Veralltäglichung) and the inescapable 'Iron Cage' (stahlhartes Gehäuse) of modern rational disenchantment.",
        },
        keyPoints: [
          "Three Types of Authority: Traditional (sacred customs), Charismatic (extraordinary personal sanctity/heroism), Rational-Legal (belief in legality of enacted rules).",
          "Bureaucracy is technically superior in precision and stability, but threatens human freedom with the 'Iron Cage' (stahlhartes Gehäuse) of disenchantment.",
        ],
        indianApplication: "Study of the Indian Administrative Service (IAS), judicial delays, and how caste networks informally subvert bureaucratic impersonality.",
      },
      {
        title: "The Protestant Ethic & Elective Affinity",
        nativeTitle: { hi: "प्रोटेस्टेंट नीतिशास्त्र एवं पूंजीवाद", te: "ప్రొటెస్టంట్ ఎథిక్ & పెట్టుబడిదారీ స్ఫూర్తి" },
        summary: "Calvinist doctrine of Predestination and inner-worldly asceticism (Beruf / Calling) created an 'Elective Affinity' (Wahlverwandtschaft) that catalysed modern rational capitalism.",
        depth: {
          basic: "High School: Religious beliefs about hard work, saving money, and avoiding luxury helped build modern capitalist business culture.",
          undergraduate: "BA Level: Calvinist predestination anxiety prompted believers to view worldly occupational success as a psychological sign of salvation.",
          advanced: "MA / UGC-NET / UPSC: Refutation of crude economic determinism; demonstrates how religious ethic and economic institutional structures maintain mutual elective affinity (Wahlverwandtschaft).",
        },
        keyPoints: [
          "Rejection of fatalism; treating work as a religious duty.",
          "Capital accumulation achieved through relentless industriousness combined with frugal consumption.",
        ],
        indianApplication: "Weber claimed in 'The Religion of India' that Hindu Karma and Samsara doctrines stifled rational capitalism—a thesis strongly contested by later Indian sociologists (Milton Singer, Deepak Lal) who showed dynamic Hindu merchant castes.",
      },
    ],
    criticalPerspective: "Critiqued by Marxists for overemphasizing subjective ideas over material forces; critiqued by Postmodernists for framing Western rationalization as a universal historical trajectory.",
  },
  {
    id: "durkheim",
    name: "Émile Durkheim",
    nativeName: { hi: "एमिल दुर्खीम", te: "ఎమిలే దుర్ఖైమ్" },
    period: "1858 – 1917",
    nationality: "French",
    school: "Functionalism / Positivist Sociology",
    keyWorks: [
      { title: "The Division of Labour in Society", year: 1893 },
      { title: "The Rules of Sociological Method", year: 1895 },
      { title: "Suicide: A Study in Sociology", year: 1897 },
      { title: "The Elementary Forms of Religious Life", year: 1912 },
    ],
    coreConcepts: [
      {
        title: "Social Facts (Faits Sociaux)",
        nativeTitle: { hi: "सामाजिक तथ्य", te: "సామాజిక వాస్తవాలు" },
        summary: "Ways of acting, thinking, and feeling, external to the individual, and endowed with coercive power by virtue of which they control him. Must be studied as 'things' (comme des choses).",
        depth: {
          basic: "High School: Social facts are rules, customs, and beliefs that exist outside of us and tell us how to behave in society.",
          undergraduate: "BA Level: Social facts have two criteria: Externality and Constraint. Durkheim argued they must be treated scientifically as things.",
          advanced: "MA / UGC-NET / UPSC: Sui generis nature of social reality; methodological positivism demonstrating that social phenomena cannot be reduced to psychological or biological explanations.",
        },
        keyPoints: [
          "Two defining characteristics: Externality (exist outside individual consciousness) and Constraint (coercive sanction).",
          "Material social facts (architecture, population density, legal codes) vs Non-material social facts (collective representations, morality, social currents).",
        ],
        indianApplication: "Caste endogamy and dowry act as coercive social facts in India—exerting structural sanctions on individuals who defy them.",
      },
      {
        title: "Division of Labour & Anomie",
        nativeTitle: { hi: "श्रम विभाजन और एनोमी (प्रतिमानहीनता)", te: "శ్రమ విభజన & అనోమి (నియమరాహిత్యం)" },
        summary: "Evolution of social solidarity from Mechanical Solidarity (low division of labor, strong collective consciousness) to Organic Solidarity (high specialization, interdependence).",
        depth: {
          basic: "High School: Traditional societies were held together by shared sameness (mechanical), while modern societies depend on specialized jobs (organic).",
          undergraduate: "BA Level: Mechanical solidarity uses repressive law; organic solidarity uses restitutive law. Anomie arises during rapid transition without moral regulation.",
          advanced: "MA / UGC-NET / UPSC: Dynamic density (volume and material density) drives specialization. Pathological forms include the Anomic division of labour and the Forced division of labour.",
        },
        keyPoints: [
          "Anomic Division of Labour: Rapid economic shifts outpace moral regulation, causing normlessness (Anomie).",
          "Forced Division of Labour: Positions assigned based on birth/privilege rather than individual aptitudes, causing discontent.",
        ],
      },
      {
        title: "Sociology of Suicide",
        nativeTitle: { hi: "आत्महत्या का समाजशास्त्रीय अध्ययन", te: "ఆత్మహత్య సామాజిక సిద్ధాంతం" },
        summary: "Suicide rates are social facts determined by levels of Social Integration (attachment to society) and Moral Regulation (control of desires).",
        depth: {
          basic: "High School: Suicide is not just an individual act; it is influenced by how connected a person feels to their community.",
          undergraduate: "BA Level: Four types of suicide based on Integration (Egoistic vs Altruistic) and Regulation (Anomic vs Fatalistic).",
          advanced: "MA / UGC-NET / UPSC: First major empirical statistical sociological investigation. Cross-national suicide rates fluctuate systematically with social currents and economic dislocations.",
        },
        keyPoints: [
          "1. Egoistic: Low integration (excessive individualism).",
          "2. Altruistic: High integration (subordination of individual for collective goal, e.g. Sati, kamikaze).",
          "3. Anomic: Low regulation (sudden economic shock or boom causing normlessness).",
          "4. Fatalistic: High regulation (oppressive constraint, e.g. slaves).",
        ],
        indianApplication: "Examining agrarian distress/farmer suicides in Vidarbha/Telangana (anomic/structural) vs student suicides under intense exam competition.",
      },
    ],
    criticalPerspective: "Critiqued for biological organicism, reifying society as a demi-god, ignoring structural conflict, and treating deviance purely as functional anomaly.",
  },
  {
    id: "parsons",
    name: "Talcott Parsons",
    nativeName: { hi: "टैल्कोट पार्सन्स", te: "టాల్కట్ పార్సన్స్" },
    period: "1902 – 1979",
    nationality: "American",
    school: "Structural Functionalism / Grand Theory",
    keyWorks: [
      { title: "The Structure of Social Action", year: 1937 },
      { title: "The Social System", year: 1951 },
      { title: "Toward a General Theory of Action", year: 1951 },
    ],
    coreConcepts: [
      {
        title: "The AGIL Paradigm",
        nativeTitle: { hi: "एजीआईएल (AGIL) मॉडल", te: "AGIL స్కీమా (నాలుగు ప్రమేయాలు)" },
        summary: "Every social system must satisfy four functional imperatives to survive and maintain equilibrium: Adaptation, Goal Attainment, Integration, Latency (Pattern Maintenance).",
        depth: {
          basic: "High School: Every society needs four things to work: economy (food/resources), government (rules), laws/religion (harmony), and family/schools (values).",
          undergraduate: "BA Level: AGIL schema maps four institutional subsystems: Adaptation (Economy), Goal Attainment (Polity), Integration (Law/Community), Latency (Family/Culture).",
          advanced: "MA / UGC-NET / UPSC: Functional requisites of action systems at biological, personality, social, and cultural levels. Equilibrium maintained through generalized symbolic media of interchange.",
        },
        keyPoints: [
          "A - Adaptation: Performed by Economic subsystem (gathering and distributing resources).",
          "G - Goal Attainment: Performed by Political subsystem (setting goals and mobilizing resources).",
          "I - Integration: Performed by Legal, religious, and community institutions (coordinating parts).",
          "L - Latency: Performed by Family, education, culture (internalizing values, managing tension).",
        ],
        indianApplication: "Evaluating how traditional institutions like Jajmani systems performed integration, and how constitutional democracy redefined Goal Attainment in post-independence India.",
      },
      {
        title: "Pattern Variables (Dichotomous Choices)",
        nativeTitle: { hi: "पैटर्न वेरिएबल्स (प्रतिरूप चर)", te: "ప్యాటర్న్ వేరియబుల్స్" },
        summary: "Five sets of polar alternatives an actor must choose between in any social situation, marking the transition from traditional to modern societies.",
        depth: {
          basic: "High School: Modern society judges people on what they achieve through ability, while traditional society judged people on where they were born.",
          undergraduate: "BA Level: Five dichotomies: Affectivity vs Affective Neutrality, Self vs Collectivity, Universalism vs Particularism, Ascription vs Achievement, Diffuseness vs Specificity.",
          advanced: "MA / UGC-NET / UPSC: Internalized value-orientations that categorize role expectations in structural differentiation during modernization processes.",
        },
        keyPoints: [
          "1. Affectivity vs Affective Neutrality",
          "2. Self-Orientation vs Collectivity-Orientation",
          "3. Universalism vs Particularism",
          "4. Ascription vs Achievement",
          "5. Diffuseness vs Specificity",
        ],
        indianApplication: "Indian bureaucracy shows an ongoing clash: universalism & achievement (civil service norms) vs particularism & ascription (caste, kinship, region).",
      },
    ],
    criticalPerspective: "Critiqued by C. Wright Mills for conservative 'Grand Theory' bias; critiqued by Dahrendorf and Coser for treating conflict as pathology rather than normal social reality.",
  },
  {
    id: "merton",
    name: "Robert K. Merton",
    nativeName: { hi: "रॉबर्ट के. मर्टन", te: "రాబర్ట్ కె. మెర్టన్" },
    period: "1910 – 2003",
    nationality: "American",
    school: "Functional Analysis / Middle-Range Theory",
    keyWorks: [
      { title: "Social Theory and Social Structure", year: 1949 },
      { title: "The Sociology of Science", year: 1973 },
    ],
    coreConcepts: [
      {
        title: "Middle-Range Theories & Functional Critique",
        nativeTitle: { hi: "मध्यम-दूरी के सिद्धांत और प्रकार्यात्मक विश्लेषण", te: "మిడిల్ రేంజ్ థియరీస్ & ఫంక్షనల్ అనాలిసిస్" },
        summary: "Rejected grand abstract theories in favor of empirically testable intermediate theories. Discarded functional unity, universal functionalism, and indispensability postulates.",
        depth: {
          basic: "High School: Focus on realistic, testable theories rather than giant philosophical frameworks that cannot be tested.",
          undergraduate: "BA Level: Distinction between Manifest functions (intended/recognized), Latent functions (unintended/unrecognized), and Dysfunctions.",
          advanced: "MA / UGC-NET / UPSC: Middle-range paradigm grounds sociological inquiry in falsifiable empirical hypotheses. Refines functionalism by acknowledging institutional structural alternatives.",
        },
        keyPoints: [
          "Manifest Functions: Objective consequences intended and recognized by participants.",
          "Latent Functions: Unintended and unrecognized consequences (e.g., Hopi rain dance fostering collective solidarity).",
          "Dysfunctions: Consequences that lessen the adaptation or adjustment of the system.",
        ],
      },
      {
        title: "Strain Theory & Deviance Typology",
        nativeTitle: { hi: "तनाव सिद्धांत और विचलन", te: "స్ట్రెయిన్ థియరీ & విచలన రూపాలు" },
        summary: "Deviance arises when there is a structural disjunction between culturally approved goals (e.g., wealth) and institutionalized legitimate means to achieve them.",
        depth: {
          basic: "High School: When people are taught to want success but given no honest way to get it, some turn to crime or give up.",
          undergraduate: "BA Level: Five individual adaptations: Conformity, Innovation, Ritualism, Retreatism, and Rebellion.",
          advanced: "MA / UGC-NET / UPSC: Anomie re-theorized as structural strain resulting from differential access to legitimate opportunity structures in stratified societies.",
        },
        keyPoints: [
          "1. Conformity (+ Goals, + Means)",
          "2. Innovation (+ Goals, - Means, e.g., crime, scams)",
          "3. Ritualism (- Goals, + Means, e.g., bureaucrat rigidly following red tape)",
          "4. Retreatism (- Goals, - Means, e.g., vagrants, dropouts)",
          "5. Rebellion (+/- Goals, +/- Means, revolutionary movements)",
        ],
        indianApplication: "Analyzing institutional corruption and examination paper leaks in India through Innovation adaptation when youth face acute lack of institutionalized employment opportunities.",
      },
    ],
    criticalPerspective: "Synthesized functionalism with conflict insights, but still grounded in systemic equilibrium assumptions.",
  },
  {
    id: "foucault",
    name: "Michel Foucault",
    nativeName: { hi: "मिशेल फूको", te: "మిషెల్ ఫూకో" },
    period: "1926 – 1984",
    nationality: "French",
    school: "Post-Structuralism / Genealogy of Power",
    keyWorks: [
      { title: "Discipline and Punish: The Birth of the Prison", year: 1975 },
      { title: "The History of Sexuality (Vol 1-3)", year: 1976 },
      { title: "The Order of Things", year: 1966 },
      { title: "Power/Knowledge", year: 1980 },
    ],
    coreConcepts: [
      {
        title: "Power/Knowledge & Capillary Power",
        nativeTitle: { hi: "शक्ति/ज्ञान और सूक्ष्म शक्ति", te: "పవర్/నాలెడ్జ్ (శక్తి/జ్ఞానం)" },
        summary: "Power and knowledge directly imply one another. Power is not merely repressive held by the state, but productive, omnipresent, and capillary (flowing through all micro-relations).",
        depth: {
          basic: "High School: Power is not just the police with guns; it is in everyday rules, schools, hospitals, and how people think and talk.",
          undergraduate: "BA Level: Power is relational and diffused. Knowledge creates categories that govern human bodies and behavior through discourses.",
          advanced: "MA / UGC-NET / UPSC: Capillary micro-physics of power; discourse produces subjects through epistemic regimes of truth. Rejection of sovereign centralized power models.",
        },
        keyPoints: [
          "Discourse: Ways of constituting knowledge, together with the social practices, forms of subjectivity and power relations which inhere in such knowledges.",
          "Episteme: The historical unconscious framework that determines what can be thought in a given epoch.",
        ],
      },
      {
        title: "Panopticism & Biopolitics",
        nativeTitle: { hi: "सर्वदृष्टिता (पैनोप्टिकॉन) और जैव-राजनीति", te: "పనోప్టిసిజం & బయో-పాలిటిక్స్" },
        summary: "Modern discipline operates through Bentham's Panopticon architecture—creating in the inmate a conscious state of permanent visibility. Biopower manages populations through statistical monitoring.",
        depth: {
          basic: "High School: People behave well when they feel they might be watched at every second, even if no guard is actually looking.",
          undergraduate: "BA Level: Panopticon interiorizes surveillance into self-discipline. Biopolitics manages populations via birth, death, disease, and health data.",
          advanced: "MA / UGC-NET / UPSC: Transition from sovereign spectacles of violence to disciplinary anatomy and biopolitical governmentality—the conduct of conducts.",
        },
        keyPoints: [
          "Shift from Sovereign Power ('take life or let live') to Biopolitical Power ('foster life or disallow it to the point of death').",
          "Governmentality: The conduct of conducts—shaping human subjectivity so citizens police themselves.",
        ],
        indianApplication: "Analyzing Aadhaar surveillance, digital public infrastructure, census enumeration under colonial rule that reified caste boundaries, and public health lockdowns.",
      },
    ],
    criticalPerspective: "Critiqued by Habermas as 'cryptonormative' for offering critique without constructive normative grounds; critiqued by postcolonial scholars for Eurocentric archive.",
  },
  {
    id: "bourdieu",
    name: "Pierre Bourdieu",
    nativeName: { hi: "पियरे बॉर्डियू", te: "పియరీ బోర్డియూ" },
    period: "1930 – 2002",
    nationality: "French",
    school: "Theory of Practice / Reflexive Sociology",
    keyWorks: [
      { title: "Distinction: A Social Critique of the Judgement of Taste", year: 1979 },
      { title: "The Logic of Practice", year: 1980 },
      { title: "Reproduction in Education, Society and Culture", year: 1970 },
      { title: "Outline of a Theory of Practice", year: 1972 },
    ],
    coreConcepts: [
      {
        title: "Habitus, Field (Champ), and Practice",
        nativeTitle: { hi: "हैबिटस, क्षेत्र और व्यवहार", te: "హ్యాబిటస్, ఫీల్డ్ & అభ్యాసం" },
        summary: "Overcomes the dichotomy between objectivism and subjectivism. Practice = (Habitus x Capital) + Field.",
        depth: {
          basic: "High School: Our habits, tastes, and manners are shaped by how we grew up, guiding how we act in different social situations.",
          undergraduate: "BA Level: Habitus is deeply ingrained bodily and mental dispositions. Fields are arenas where individuals compete using their resources.",
          advanced: "MA / UGC-NET / UPSC: Structured structures predisposed to function as structuring structures. Generative embodied dispositions operating pre-reflectively within social fields.",
        },
        keyPoints: [
          "Habitus: Systems of durable, transposable dispositions acquired through bodily socialization.",
          "Field: Semi-autonomous social arena where actors struggle over specific forms of capital.",
        ],
      },
      {
        title: "Forms of Capital & Symbolic Violence",
        nativeTitle: { hi: "पूंजी के रूप और प्रतीकात्मक हिंसा", te: "మూలధన రూపాలు & ప్రతీకాత్మక హింస" },
        summary: "Capital extends beyond economic assets into Cultural Capital (embodied accent/demeanor, degrees), Social Capital (networks), and Symbolic Capital (prestige).",
        depth: {
          basic: "High School: Success comes not only from money, but also from family connections, good speaking style, and respected qualifications.",
          undergraduate: "BA Level: Cultural capital (embodied, objectified, institutionalized) reproduces class inequalities through education disguised as merit.",
          advanced: "MA / UGC-NET / UPSC: Symbolic violence is the subtle misrecognition whereby dominated classes perceive their subordination as legitimate and natural.",
        },
        keyPoints: [
          "Symbolic Violence: The violence exercised upon a social agent with their complicity through misrecognition.",
          "Education reproduces class stratification by rewarding elite cultural capital while masquerading as meritocracy.",
        ],
        indianApplication: "Caste serves as cultural and social capital in corporate recruitment, English fluency acting as an embodied marker of privilege, and upper-caste cultural dominance masquerading as 'pure merit'.",
      },
    ],
    criticalPerspective: "Critiqued for deterministic tendencies (difficulty in explaining radical breaks from habitus); nevertheless revered for exposing institutionalized privilege.",
  },
  {
    id: "giddens",
    name: "Anthony Giddens",
    nativeName: { hi: "एंथनी गिडिन्स", te: "ఆంథోనీ గిడ్డెన్స్" },
    period: "1938 – Present",
    nationality: "British",
    school: "Structuration Theory / High Modernity",
    keyWorks: [
      { title: "The Constitution of Society", year: 1984 },
      { title: "The Consequences of Modernity", year: 1990 },
      { title: "Modernity and Self-Identity", year: 1991 },
      { title: "The Third Way", year: 1998 },
    ],
    coreConcepts: [
      {
        title: "Structuration Theory & Duality of Structure",
        nativeTitle: { hi: "संरचनाकरण सिद्धांत और संरचना का द्वैत", te: "నిర్మితీకరణ సిద్ధాంతం & ద్వంద్వత్వం" },
        summary: "Structure and Agency are not two separate ontological entities but two sides of the same coin. Structures are both the medium and the outcome of social practices.",
        depth: {
          basic: "High School: Rules shape our choices, but our everyday actions also keep those rules alive or change them.",
          undergraduate: "BA Level: Duality of structure shows that social structures are both constraining and enabling. Human agents possess practical reflexivity.",
          advanced: "MA / UGC-NET / UPSC: Transcends the structure-agency divide; structures exist as memory traces instantiated in recurring social practices composed of rules and allocative/authoritative resources.",
        },
        keyPoints: [
          "Structures exist only in memory traces and instantiations in social practices.",
          "Rules (normative and interpretive codes) and Resources (allocative/material and authoritative/organizational).",
          "Actors possess 'practical consciousness' and 'discursive consciousness' with reflexivity.",
        ],
      },
      {
        title: "Runaway World & High Modernity",
        nativeTitle: { hi: "उच्च आधुनिकता और विसंबंधन (Disembedding)", te: "రన్‌అవే వరల్డ్ & హై మోడర్నిటీ" },
        summary: "Modernity as a 'Juggernaut' characterized by time-space distanciation, disembedding mechanisms, and institutionalized reflexivity.",
        depth: {
          basic: "High School: The modern world moves so fast that old traditions no longer guarantee our future, requiring constant self-adjustment.",
          undergraduate: "BA Level: Disembedding mechanisms (money and expert systems) lift social relations out of local settings across global distances.",
          advanced: "MA / UGC-NET / UPSC: Institutional reflexivity of high modernity; living in a global manufactured risk society where trust in abstract expert systems replaces traditional ontological security.",
        },
        keyPoints: [
          "Time-Space Distanciation: Separation of time from space enabling global social relations.",
          "Disembedding: Lifting out of social relations from local contexts of interaction.",
          "Risk Society & Reflexivity: Constant chronic revision of social practices in light of new knowledge.",
        ],
      },
    ],
    criticalPerspective: "Critiqued by Margaret Archer for 'conflationism' (blurring structure and agency so analytical dualism becomes impossible).",
  },
];

export const indianThinkersData: Thinker[] = [
  {
    id: "srinivas",
    name: "M.N. Srinivas",
    nativeName: { hi: "एम.एन. श्रीनिवास", te: "ఎం.ఎన్. శ్రీనివాస్" },
    period: "1916 – 1999",
    nationality: "Indian (Mysore / Oxford)",
    school: "Structural-Functional / Anthropological Field-View",
    keyWorks: [
      { title: "Religion and Society among the Coorgs of South India", year: 1952 },
      { title: "The Remembered Village", year: 1976 },
      { title: "Social Change in Modern India", year: 1966 },
      { title: "Caste in Modern India and Other Essays", year: 1962 },
    ],
    coreConcepts: [
      {
        title: "Sanskritization",
        nativeTitle: { hi: "संस्कृतिकरण", te: "సంస్కృతీకరణం" },
        summary: "The process by which a 'low' Hindu caste or tribal group changes its customs, ritual, ideology, and way of life in the direction of a high, frequently 'twice-born' (Dvija) caste.",
        depth: {
          basic: "High School: Lower castes adopting the lifestyle, diet (vegetarianism), and rituals of higher castes to gain higher respect.",
          undergraduate: "BA Level: Sanskritization is a positional change, not a structural change. It moves a caste up local hierarchy without destroying the caste system.",
          advanced: "MA / UGC-NET / UPSC: Emulation of cultural models (Brahminical, Kshatriya/Royal, Vaishya). Interacts with Westernization and secular democratic mobilization in modern India.",
        },
        keyPoints: [
          "Positional change, not structural change: A caste moves up the local hierarchy without transforming the caste system itself.",
          "Models of emulation: Brahminical model, Kshatriya/King model, Vaishya model.",
          "Often accompanied by dietary vegetarianism, teetotalism, adoption of sacred thread, and stricter patriarchal control over women.",
        ],
        indianApplication: "Explains mobility attempts among peasant castes and pastoral communities seeking higher ritual status before converting economic capital into political leverage.",
      },
      {
        title: "Dominant Caste",
        nativeTitle: { hi: "प्रभुत्वशाली जाति", te: "ఆధిపత్య కులం" },
        summary: "A caste that exercises decisive power and authority in a local village or region, based on empirical criteria rather than ritual Brahminical ranking.",
        depth: {
          basic: "High School: The most powerful caste in a village because they own most agricultural land and have the largest population.",
          undergraduate: "BA Level: Six criteria of dominance: Land ownership, numerical strength, ritual status, western education, modern jobs, physical force.",
          advanced: "MA / UGC-NET / UPSC: Decoupled power from ritual purity; dominant castes act as village patrons, dispute arbiters, and vote-bank pivots in democratic decentralization.",
        },
        keyPoints: [
          "Six Defining Criteria: 1. Numerical preponderance, 2. Substantial agricultural land ownership, 3. Relatively high ritual status, 4. Western education, 5. Modern administrative jobs, 6. Physical power/force.",
          "Examples: Vokkaligas and Lingayats in Karnataka, Reddys and Kammas in Andhra/Telangana, Marathas in Maharashtra, Jats and Yadavs in North India.",
        ],
      },
      {
        title: "Field-View vs Book-View",
        nativeTitle: { hi: "क्षेत्र-दृष्टिकोण बनाम पुस्तक-दृष्टिकोण", te: "క్షేత్ర పరిశీలన vs గ్రంథ విశ్లేషణ" },
        summary: "Critique of colonial and Indological 'Book-View' (relying solely on ancient texts like Manusmriti) which portrayed Indian villages as timeless republics and caste as rigid Varna. Advocated intensive participant observation 'Field-View'.",
        depth: {
          basic: "High School: Understanding real village life by living with people (Field-View) rather than just reading ancient scriptures (Book-View).",
          undergraduate: "BA Level: Ancient texts overemphasized rigid Varna theory, whereas ground reality in villages is organized around dynamic, contested Jati relations.",
          advanced: "MA / UGC-NET / UPSC: Epistemological critique of Indological orientalism; demonstrates that Indian social reality is fluid, localized, and empirically negotiated.",
        },
        keyPoints: [
          "Fieldwork in Rampura village (Karnataka) documented real patron-client Jajmani networks, secular village councils, and dynamic caste rivalries.",
        ],
      },
    ],
    criticalPerspective: "Critiqued by Dalit scholars for a romanticized upper-caste field perspective that underemphasized violent caste atrocities; critiqued by Gail Omvedt for treating Sanskritization as the only avenue of assertion.",
  },
  {
    id: "ambedkar",
    name: "Dr. B.R. Ambedkar",
    nativeName: { hi: "डॉ. बी.आर. आंबेडकर", te: "డా. బి.ఆర్. అంబేద్కర్" },
    period: "1891 – 1956",
    nationality: "Indian (Columbia / LSE)",
    school: "Subaltern / Critical Emancipatory Perspective",
    keyWorks: [
      { title: "Castes in India: Their Mechanism, Genesis and Development", year: 1916 },
      { title: "Annihilation of Caste", year: 1936 },
      { title: "The Untouchables: Who Were They and Why They Became Untouchables?", year: 1948 },
      { title: "Who Were the Shudras?", year: 1946 },
    ],
    coreConcepts: [
      {
        title: "Annihilation of Caste & Superposed Endogamy",
        nativeTitle: { hi: "जाति का विनाश एवं अंतर्विवाह", te: "కుల నిర్మూలన & నిరంకుశ అంతర్వివాహం" },
        summary: "Caste is not merely a division of labor, but a division of labourers graded one above another. The foundational mechanism of caste is endogamy superposed over exogamous gotras.",
        depth: {
          basic: "High School: Caste is not natural work-sharing; it is an unfair system where people are trapped in ranks by birth through strict marriage rules.",
          undergraduate: "BA Level: Endogamy (marrying within caste) created caste boundaries. Ambedkar proved that caste cannot be reformed; its religious foundations in the Shastras must be destroyed.",
          advanced: "MA / UGC-NET / UPSC: Superposed endogamy over exogamous gotras enclosed social classes; maintained by policing female sexuality (Sati, child marriage, enforced widowhood). Caste is an anti-social graded inequality.",
        },
        keyPoints: [
          "Enclosure of classes: Caste originated when Brahmins enclosed their group through endogamy, forcing other classes to close their doors through imitation.",
          "Control over women: Endogamy was maintained through Sati, enforced widowhood, and child marriage to prevent surplus women or men from marrying outside.",
          "Critique of Hindu religious sanctity: Caste cannot be reformed through piecemeal dining; its ideological roots in the Shastras must be systematically dynamited.",
        ],
        indianApplication: "Constitutional abolition of untouchability (Article 17), affirmative action policies, and modern anti-caste civil rights movements.",
      },
      {
        title: "Critique of Gandhian Idealization of Varna",
        nativeTitle: { hi: "गांधीवादी वर्ण व्यवस्था की आलोचना", te: "గాంధేయ వర్ణ వ్యవస్థపై విమర్శ" },
        summary: "Rebuffed Gandhi's defense of hereditary Varna as ideal occupational harmony. Argued that hereditary assignments destroy individual liberty, deaden motivation, and condemn millions to degrading labor.",
        depth: {
          basic: "High School: Ambedkar argued that forcing children to do their parents' traditional caste work destroys freedom and dignity.",
          undergraduate: "BA Level: Gandhi defended Varna as hereditary division without hierarchy, whereas Ambedkar demonstrated that hereditary occupation inevitably breeds graded discrimination.",
          advanced: "MA / UGC-NET / UPSC: Epistemological and moral clash: Gandhi's romanticized moral organicism vs Ambedkar's constitutional modernism anchored in Liberty, Equality, and Fraternity.",
        },
        keyPoints: [
          "Castes have no social consciousness; their consciousness is strictly caste consciousness.",
          "True emancipation requires liberty, equality, and fraternity, which Hinduism fundamentally denies in its institutionalized hierarchy.",
        ],
      },
    ],
    criticalPerspective: "Foundational voice of anti-caste sociology and subaltern studies; his sociological insights anticipate intersectional feminist critique of patriarchy within caste structures.",
  },
  {
    id: "ghurye",
    name: "G.S. Ghurye",
    nativeName: { hi: "जी.एस. घुर्ये", te: "జి.ఎస్. ఘుర్యే" },
    period: "1893 – 1983",
    nationality: "Indian (Bombay School)",
    school: "Indological / Cultural-Historical Perspective",
    keyWorks: [
      { title: "Caste and Race in India", year: 1932 },
      { title: "The Scheduled Tribes (The Aborigines-'So-Called')", year: 1943 },
      { title: "Indian Sadhus", year: 1953 },
      { title: "Cities and Civilization", year: 1962 },
    ],
    coreConcepts: [
      {
        title: "Six Features of the Caste System",
        nativeTitle: { hi: "जाति व्यवस्था की छह विशेषताएं", te: "కుల వ్యవస్థ ఆరు లక్షణాలు" },
        summary: "Systematically codified six structural attributes of the caste system in 'Caste and Race in India'.",
        depth: {
          basic: "High School: 6 traits: birth-based groups, strict ranking, food rules, special privileges/disabilities, fixed jobs, and marriage only inside the caste.",
          undergraduate: "BA Level: 1. Segmental division, 2. Hierarchy, 3. Feeding restrictions, 4. Civil/religious disabilities, 5. Lack of occupation choice, 6. Endogamy.",
          advanced: "MA / UGC-NET / UPSC: Classic Indological structural codification examining the historic diffusion of Brahminical sanskritized norms across the Indian subcontinent.",
        },
        keyPoints: [
          "1. Segmental Division of Society (membership by birth).",
          "2. Hierarchy of Castes (Brahmin at apex, untouchables at base).",
          "3. Restrictions on Feeding and Social Intercourse (Pakka vs Kachcha food rules).",
          "4. Civil and Religious Disabilities and Privileges.",
          "5. Lack of Unrestricted Choice of Occupation.",
          "6. Strict Endogamy (marrying only within one's sub-caste).",
        ],
      },
      {
        title: "Tribe-Caste Continuum & Assimilationist View",
        nativeTitle: { hi: "जनजाति-जाति सांतत्य एवं समावेशन", te: "గిరిజన-కుల అవిచ్ఛిన్నత & విలీనం" },
        summary: "Opposed Verrier Elwin's 'National Park / Isolationist' policy for tribes. Termed Indian tribes 'Backward Hindus' sharing historical affinities with mainstream society.",
        depth: {
          basic: "High School: Argued that Indian tribes are closely connected to mainstream culture and should be integrated through education and development.",
          undergraduate: "BA Level: The Elwin-Ghurye debate: Isolationism (protecting pristine tribal culture) versus Assimilationism (integrating tribes into national life).",
          advanced: "MA / UGC-NET / UPSC: Rejected colonial administrative racial categorization of tribes as distinct pristine entities; formulated the tribe-caste continuum thesis.",
        },
        keyPoints: [
          "Argued that British policy created artificial separation to divide Indians.",
          "Advocated voluntary cultural assimilation and educational integration into national life.",
        ],
      },
    ],
    criticalPerspective: "Critiqued for excessive Sanskritization and Brahminical bias in viewing Indian civilization solely through high-caste Hindu cultural lenses.",
  },
  {
    id: "karve",
    name: "Irawati Karve",
    nativeName: { hi: "इरावती कर्वे", te: "ఇరావతి కార్వే" },
    period: "1905 – 1970",
    nationality: "Indian (Pune / Berlin)",
    school: "Anthropological / Comparative Kinship Perspective",
    keyWorks: [
      { title: "Kinship Organization in India", year: 1953 },
      { title: "Yuganta: The End of an Epoch", year: 1968 },
      { title: "Hindu Society: An Interpretation", year: 1961 },
    ],
    coreConcepts: [
      {
        title: "Four Kinship Zones of India",
        nativeTitle: { hi: "भारत के चार नातेदारी क्षेत्र", te: "భారతదేశ నాలుగు బంధుత్వ మండలాలు" },
        summary: "Comprehensive comparative mapping of Indian kinship systems based on linguistic and geographical zones: Northern, Central, Southern, and Eastern.",
        depth: {
          basic: "High School: In North India, people marry outside their village and forbid cousin marriages; in South India, cousin and uncle-niece marriages are favored.",
          undergraduate: "BA Level: Northern (Indo-Aryan) zone features strict village exogamy and hypergamy. Southern (Dravidian) zone practices cross-cousin marriages, preserving close family ties.",
          advanced: "MA / UGC-NET / UPSC: Comparative structural analysis linking linguistic phyla to family structures, dowry vs bride-price, female autonomy, and demographic sex ratios.",
        },
        keyPoints: [
          "Northern Zone (Indo-Aryan): Village exogamy, prohibition of cross-cousin marriage, hypergamy, strict spatial separation between bride-givers and bride-takers.",
          "Southern Zone (Dravidian): Cross-cousin marriage (mother's brother's daughter or father's sister's daughter) and uncle-niece marriage preferred; no sharp separation between natal and affinal homes.",
          "Central & Eastern Zones: Hybrid transitional zones mixing Indo-Aryan and Austric/Munda lineage practices.",
        ],
        indianApplication: "Crucial for understanding regional variances in female autonomy, property inheritance, sex ratios, and domestic support structures across India.",
      },
    ],
    criticalPerspective: "First major Indian female sociologist/anthropologist whose field studies across linguistic boundaries set the benchmark for empirical kinship mapping.",
  },
  {
    id: "mukerji",
    name: "D.P. Mukerji",
    nativeName: { hi: "डी.पी. मुखर्जी", te: "డి.పి. ముఖర్జీ" },
    period: "1894 – 1961",
    nationality: "Indian (Lucknow School)",
    school: "Marxian / Cultural Dialectical Perspective",
    keyWorks: [
      { title: "Diversities: Essays in Economics, Sociology and other Social Problems", year: 1958 },
      { title: "Personality and the Social Sciences", year: 1924 },
      { title: "Modern Indian Culture", year: 1942 },
    ],
    coreConcepts: [
      {
        title: "Dialectic of Tradition and Modernity",
        nativeTitle: { hi: "परंपरा और आधुनिकता का द्वंद्व", te: "సంప్రదాయం & ఆధునికత ద్వంద్వత్వం" },
        summary: "Advocated that sociology in India must be the sociology of Indian traditions. Rejected uncritical Western individualism and argued that Indian social reality is anchored in collective memory.",
        depth: {
          basic: "High School: Indian sociology should not just copy western ideas; it must understand Indian cultural traditions and how they adapt to change.",
          undergraduate: "BA Level: Tradition evolves through the dialectical principles of Shruti, Smriti, and Anubhava (personal lived experience). Modernity synthesizes with tradition.",
          advanced: "MA / UGC-NET / UPSC: Marxist-cultural synthesis of the Lucknow School; personality formation in India is collective rather than atomized bourgeois individualism.",
        },
        keyPoints: [
          "Tradition is not static; it evolves through the dialectical principles of Shruti, Smriti, and Anubhava (personal experience).",
          "Modernity cannot simply be transplanted from the West; it must organically synthesize with living Indian folk traditions.",
        ],
      },
    ],
    criticalPerspective: "Pioneered indigenous Marxist-cultural sociology, stressing the creative personality of individuals within collective traditions.",
  },
];

export const syllabusModules: SyllabusModule[] = [
  {
    id: "module-1",
    number: 1,
    title: "Introduction to Sociology & Basic Concepts",
    nativeTitle: {
      hi: "मॉड्यूल 1: समाजशास्त्र का परिचय एवं बुनियादी अवधारणाएं",
      te: "మాడ్యూల్ 1: సమాజశాస్త్ర పరిచయం & ప్రాథమిక భావనలు",
    },
    targetLevels: ["High School", "BA", "MA", "UGC-NET / UPSC"],
    description: "Foundational conceptual grammar of sociology: Defining Society, Culture, Socialization, Social Institutions, Groups, Norms, Values, and Social Control across beginner to advanced academic levels.",
    topics: [
      {
        title: "What is Sociology? Nature, Scope & Sociological Imagination",
        nativeTitle: { hi: "समाजशास्त्र क्या है? प्रकृति, क्षेत्र और समाजशास्त्रीय कल्पना", te: "సమాజశాస్త్రం అంటే ఏమిటి? స్వభావం, పరిధి & సామాజిక ఊహాశక్తి" },
        content: "Emergence of sociology in 19th-century Europe (French Revolution, Industrial Revolution, Enlightenment). Auguste Comte's Law of Three Stages. C. Wright Mills' 'Sociological Imagination' bridging personal troubles and public issues.",
        depth: {
          basic: "High School: Sociology is the scientific study of human social relationships, groups, and how society influences our daily behavior.",
          undergraduate: "BA Level: Distinct epistemology studying patterns of human interaction. C. Wright Mills explains how personal troubles connect to broad historical and public issues.",
          advanced: "MA / UGC-NET / UPSC: Epistemological emergence out of European modernity, positivist inception by Comte, institutionalization by Durkheim, and critical self-reflexivity in contemporary social theory.",
        },
        keyTerms: ["Sociological Imagination", "Auguste Comte", "Law of Three Stages", "Personal Troubles vs Public Issues", "Social Structure"],
      },
      {
        title: "Society & Community: Concept, Characteristics & Differences",
        nativeTitle: { hi: "समाज और समुदाय: अवधारणा, विशेषताएं और अंतर", te: "సమాజం & సముదాయం: భావనలు, లక్షణాలు & తేడాలు" },
        content: "Definitions of Society (MacIver & Page: 'web of social relationships'). Community defined by locality and community sentiment (We-feeling). Ferdinand Tönnies' distinction between Gemeinschaft (Community) and Gesellschaft (Society).",
        depth: {
          basic: "High School: Society is the overall network of relationships among people; community is a specific group sharing a geographical neighborhood and a sense of belonging.",
          undergraduate: "BA Level: MacIver's 'web of social relationships'. Tönnies' typology of Gemeinschaft (organic, intimate, kinship-based) vs Gesellschaft (contractual, impersonal, modern urban).",
          advanced: "MA / UGC-NET / UPSC: Structural-functional analysis of societal boundary maintenance; dissolution of spatial community into imagined/virtual communities in high modernity.",
        },
        keyTerms: ["Gemeinschaft vs Gesellschaft", "Community Sentiment", "Web of Social Relationships", "Social Order", "Ferdinand Tönnies"],
      },
      {
        title: "Culture, Norms, Values & Sanctions",
        nativeTitle: { hi: "संस्कृति, प्रतिमान, मूल्य और अनुशास्तियां", te: "సంస్కృతి, నిబంధనలు, విలువలు & అనుమతులు" },
        content: "Material vs Non-Material Culture (William Ogburn's 'Cultural Lag'). Folkways (Sumner), Mores, Taboos, and Laws. Cultural Relativism vs Ethnocentrism. Subcultures and Countercultures.",
        depth: {
          basic: "High School: Culture is everything we learn and share as members of society: language, beliefs, food, customs, rules, and art.",
          undergraduate: "BA Level: Ogburn's Cultural Lag (technology advances faster than non-material morals). Sumner's folkways, mores, and institutionalized social sanctions.",
          advanced: "MA / UGC-NET / UPSC: Semiotic theories of culture (Geertz's web of significance), cultural hegemony (Gramsci), and Bourdieu's cultural reproduction and arbitrary cultural capital.",
        },
        keyTerms: ["Cultural Lag", "Folkways and Mores", "Ethnocentrism vs Cultural Relativism", "Subculture", "Social Sanctions"],
      },
      {
        title: "Socialization: Agencies, Stages & Theories",
        nativeTitle: { hi: "समाजीकरण: एजेंसियां, चरण और सिद्धांत", te: "సాంఘికీకరణ: సంస్థలు, దశలు & సిద్ధాంతాలు" },
        content: "Lifelong process of internalizing norms and roles. Primary (family) vs Secondary socialization (schools, peer groups, mass media, workplace). C.H. Cooley's 'Looking-Glass Self', G.H. Mead's 'I and Me' & Generalized Other.",
        depth: {
          basic: "High School: Socialization is the learning process through which an infant becomes a functioning human member of society.",
          undergraduate: "BA Level: Primary vs secondary socialization; resocialization in total institutions (Goffman). Cooley's Looking-Glass Self and Mead's play and game stages.",
          advanced: "MA / UGC-NET / UPSC: Interactionist socialization mechanisms (Mead's Generalized Other, anticipatory socialization by Merton, habitus acquisition through somatic socialization by Bourdieu).",
        },
        keyTerms: ["Looking-Glass Self", "Generalized Other", "Primary vs Secondary Socialization", "Anticipatory Socialization", "Total Institutions"],
      },
      {
        title: "Social Institutions & Social Groups",
        nativeTitle: { hi: "सामाजिक संस्थाएं एवं सामाजिक समूह", te: "సామాజिक సంస్థలు & సామాజిక సమూహాలు" },
        content: "Primary Groups (Cooley: intimate, face-to-face) vs Secondary Groups (formal, goal-oriented). In-groups vs Out-groups. Family (Nuclear, Joint), Marriage, Religion, and Polity as foundational social institutions.",
        depth: {
          basic: "High School: Groups are collections of people interacting together; institutions are established ways of fulfilling essential human needs (family, education, government).",
          undergraduate: "BA Level: Cooley's primary groups; Sumner's in-groups and out-groups; Merton's reference group theory. Structural functions and crises of family and marriage.",
          advanced: "MA / UGC-NET / UPSC: Institutionalization of social roles, de-institutionalization debates under neoliberalism, and critical feminist critiques of patriarchal institutional design.",
        },
        keyTerms: ["Primary vs Secondary Groups", "Reference Group", "In-group vs Out-group", "Kinship & Marriage", "Social Control"],
      },
    ],
  },
  {
    id: "module-2",
    number: 2,
    title: "Sociological Theories & Thinkers",
    nativeTitle: {
      hi: "मॉड्यूल 2: समाजशास्त्रीय सिद्धांत एवं प्रमुख विचारक",
      te: "మాడ్యూల్ 2: సామాజిక సిద్ధాంతాలు & ప్రముఖ ఆలోచనాపరులు",
    },
    targetLevels: ["BA", "MA", "UGC-NET / UPSC"],
    description: "In-depth theoretical architecture: Classical founding masters (Marx, Weber, Durkheim) alongside Modern & Contemporary theorists (Parsons, Merton, Foucault, Bourdieu, Giddens).",
    topics: [
      {
        title: "Karl Marx: Historical Materialism, Alienation, Class Struggle",
        nativeTitle: { hi: "कार्ल मार्क्स: ऐतिहासिक भौतिकवाद, अलगाव, वर्ग संघर्ष", te: "కార్ల్ మార్క్స్: చారిత్రక భౌతికవాదం, పరాయీకరణ, వర్గ పోరాటం" },
        content: "Economic infrastructure and superstructure; 4 forms of capitalist alienation; surplus value extraction; and transition from class-in-itself to class-for-itself.",
        depth: {
          basic: "High School: Marx showed how capitalism causes workers to be exploited by factory owners and alienated from their work.",
          undergraduate: "BA Level: Detailed framework of base-superstructure, labor theory of value, four forms of alienation, and revolutionary class struggle.",
          advanced: "MA / UGC-NET / UPSC: Epistemological break from young Hegelianism; dialectical relations of production; Grundrisse and Capital Vol I-III surplus value mechanics.",
        },
        keyTerms: ["Historical Materialism", "Superstructure", "Alienation (Entfremdung)", "Surplus Value", "Class Consciousness"],
      },
      {
        title: "Max Weber: Social Action, Bureaucracy, Protestant Ethic",
        nativeTitle: { hi: "मैक्स वेबर: सामाजिक क्रिया, नौकरशाही, प्रोटेस्टेंट आचार", te: "మాక్స్ వెబర్: సామాజిక చర్య, ఉద్యోగస్వామ్యం, ప్రొటెస్టంట్ ఎథిక్" },
        content: "Interpretive sociology (Verstehen), 4 ideal types of social action, tripartite authority (rational-legal, traditional, charismatic), Iron Cage of bureaucracy, and Protestant asceticism.",
        depth: {
          basic: "High School: Weber explained why people act the way they do and how modern governments run on strict bureaucratic rules.",
          undergraduate: "BA Level: Four ideal types of social action, three types of legitimate authority, and elective affinity between Calvinism and capitalism.",
          advanced: "MA / UGC-NET / UPSC: Methodological individualism, causal adequacy vs meaning adequacy, Wertfreiheit (value neutrality), and the disenchantment of modernity.",
        },
        keyTerms: ["Verstehen", "Ideal Type", "Rational-Legal Authority", "Iron Cage", "Elective Affinity"],
      },
      {
        title: "Émile Durkheim: Social Facts, Division of Labour, Suicide",
        nativeTitle: { hi: "एमिल दुर्खीम: सामाजिक तथ्य, श्रम विभाजन, आत्महत्या", te: "ఎమిలే దుర్ఖైమ్: సామాజిక వాస్తవాలు, శ్రమ విభజన, ఆత్మహత్య" },
        content: "Social facts as things; mechanical vs organic solidarity; dynamic density; typologies of suicide (egoistic, altruistic, anomic, fatalistic); collective effervescence.",
        depth: {
          basic: "High School: Durkheim showed that society is a real force that controls our actions, even shaping suicide rates.",
          undergraduate: "BA Level: Criteria of social facts (externality and constraint); transition of solidarity through division of labor; four suicide types.",
          advanced: "MA / UGC-NET / UPSC: Positivist methodology; functionalism; sociology of religion as society worshipping its own collective moral power.",
        },
        keyTerms: ["Social Facts", "Mechanical vs Organic Solidarity", "Anomie", "Collective Effervescence", "Egoistic Suicide"],
      },
      {
        title: "Talcott Parsons & Robert K. Merton: Functionalism & Middle-Range Theory",
        nativeTitle: { hi: "पार्सन्स और मर्टन: प्रकार्यवाद एवं मध्यवर्ती सिद्धांत", te: "పార్సన్స్ & మెర్టన్: ఫంక్షనలిజం & మిడిల్-రేంజ్ సిద్ధాంతాలు" },
        content: "Parsons' AGIL matrix and pattern variables; Merton's critique of functional unity, manifest vs latent functions, and strain theory of deviance.",
        depth: {
          basic: "High School: Functionalism views society like a human body where each part (family, school, law) works together to keep it healthy.",
          undergraduate: "BA Level: Parsons' AGIL paradigm and pattern variables. Merton's manifest vs latent functions and 5 modes of individual deviance adaptation.",
          advanced: "MA / UGC-NET / UPSC: Parsons' voluntaristic theory of action; Merton's epistemological critique of Grand Theory; reference group mechanics.",
        },
        keyTerms: ["AGIL Framework", "Pattern Variables", "Manifest & Latent Functions", "Strain Theory", "Middle-Range Theory"],
      },
      {
        title: "Michel Foucault: Power/Knowledge, Discipline, Biopolitics",
        nativeTitle: { hi: "मिशेल फूको: शक्ति/ज्ञान, अनुशासन, जैव-राजनीति", te: "మిషెల్ ఫూకో: పవర్/నాలెడ్జ్, పనోప్టిసిజం, బయోపాలిటిక్స్" },
        content: "Genealogical method, Panopticon surveillance mechanism, capillary power, shift from sovereign torture to disciplinary micro-penality, and biopolitics.",
        depth: {
          basic: "High School: Modern power works by watching people and making them discipline themselves rather than using physical punishment.",
          undergraduate: "BA Level: Bentham's Panopticon as diagram of modern power. Power/knowledge discourse in prisons, clinics, and schools.",
          advanced: "MA / UGC-NET / UPSC: Capillary micro-physics of power; governmentality (conduct of conducts); biopolitical population management.",
        },
        keyTerms: ["Power/Knowledge", "Discourse", "Panopticism", "Biopower", "Governmentality"],
      },
      {
        title: "Pierre Bourdieu & Anthony Giddens: Habitus, Capital & Structuration",
        nativeTitle: { hi: "बॉर्डियू और गिडिन्स: हैबिटस, पूंजी और संरचनाकरण", te: "పియరీ బోర్డియూ & ఆంథోనీ గిడ్డెన్స్: హ్యాబిటస్, క్యాపిటల్ & స్ట్రక్చరేషన్" },
        content: "Bourdieu's theory of practice (Habitus, Field, Forms of Capital, Symbolic Violence); Giddens' structuration theory and duality of structure.",
        depth: {
          basic: "High School: We inherit unspoken cultural habits and connections that help or hinder us in life, while our actions recreate social rules.",
          undergraduate: "BA Level: Bourdieu's cultural/social capital reproducing educational inequality; Giddens' duality of structure connecting agency and rules.",
          advanced: "MA / UGC-NET / UPSC: Transcending the objective-subjective dualism; reflexive sociology; manufactured risk in runaway high modernity.",
        },
        keyTerms: ["Habitus", "Field (Champ)", "Cultural Capital", "Symbolic Violence", "Duality of Structure"],
      },
    ],
    thinkers: thinkersData,
  },
  {
    id: "module-3",
    number: 3,
    title: "Research Methods & Social Statistics",
    nativeTitle: {
      hi: "मॉड्यूल 3: अनुसंधान पद्धतियां एवं सामाजिक सांख्यिकी",
      te: "మాడ్యూల్ 3: పరిశోధనా పద్ధతులు & సాంఘిక గణాంకాలు",
    },
    targetLevels: ["BA", "MA", "UGC-NET / UPSC"],
    description: "Scientific investigation in sociology: Positivism vs Interpretivism, Qualitative & Quantitative methodologies, Survey Design, Sampling strategies, and Applied Social Statistics.",
    topics: [
      {
        title: "Scientific Method, Positivism vs. Interpretivism & Hermeneutics",
        nativeTitle: { hi: "वैज्ञानिक पद्धति: प्रत्यक्षवाद बनाम व्याख्यात्मकता और व्याख्याशास्त्र", te: "శాస్త్రీయ పద్ధతి: ప్రత్యక్షవాదం vs వ్యాఖ్యానవాదం & హెర్మెన్యూటిక్స్" },
        content: "Comte and Durkheim's positivism (social facts, causal laws, value neutrality) vs Dilthey, Weber, and Schutz's interpretivism/phenomenology (meaning, Verstehen, hermeneutic circle).",
        depth: {
          basic: "High School: Positivism studies society like physics using numbers, while Interpretivism studies society by understanding personal feelings and meanings.",
          undergraduate: "BA Level: Epistemological divergence: Quantitative causal laws and value-neutrality vs Qualitative subjective comprehension (Verstehen).",
          advanced: "MA / UGC-NET / UPSC: Ontological assumptions; hermeneutic circle; critical realism; Weberian Wertbeziehung (value relevance) vs Wertfreiheit (value freedom).",
        },
        keyTerms: ["Positivism", "Interpretivism", "Hermeneutic Circle", "Epistemology", "Value Neutrality (Wertfreiheit)"],
      },
      {
        title: "Data Collection: Participant Observation, Interviews, Questionnaires & Ethnography",
        nativeTitle: { hi: "आंकड़ा संग्रह: सहभागी अवलोकन, साक्षात्कार, प्रश्नावली एवं नृवंशविज्ञान", te: "దత్తాంశ సేకరణ: పరిశీలన, ఇంటర్వ్యూలు, ప్రశ్నాపత్రాలు & ఎథ్నోగ్రఫీ" },
        content: "Participant vs Non-participant observation; structured, semi-structured, and in-depth clinical interviews; Likert scales; questionnaire design; immersive fieldwork ethics and Clifford Geertz's 'thick description'.",
        depth: {
          basic: "High School: Methods researchers use to collect facts: watching people, asking questions in interviews, or handing out surveys.",
          undergraduate: "BA Level: Participant observation advantages/limitations; questionnaire reliability and validity; Likert scale construction; ethnographic reflexivity.",
          advanced: "MA / UGC-NET / UPSC: Methodological reflexivity; ethical dilemmas in covert observation; Clifford Geertz's thick description; grounded theory coding.",
        },
        keyTerms: ["Participant Observation", "Thick Description", "Structured Questionnaire", "In-depth Interview", "Reflexivity"],
      },
      {
        title: "Sampling Strategies & Hypothesis Formulation",
        nativeTitle: { hi: "प्रतिचयन रणनीतियां एवं परिकल्पना निर्माण", te: "శాంప్లింగ్ వ్యూహాలు & పరికల్పన రూపకల్పన" },
        content: "Probability Sampling (Simple Random, Systematic, Stratified Random, Cluster) vs Non-Probability Sampling (Purposive, Snowball, Quota, Convenience); Null (H0) and Alternate (H1) hypotheses; Type I & Type II errors.",
        depth: {
          basic: "High School: Sampling is picking a fair, representative small group to study so we don't have to question every single person in the country.",
          undergraduate: "BA Level: Difference between random (probability) and non-random sampling; creating testable hypotheses (H0 and H1).",
          advanced: "MA / UGC-NET / UPSC: Stratified random sampling precision, snowball sampling for hidden/marginalized populations, sampling bias, Type I and Type II statistical errors.",
        },
        keyTerms: ["Stratified Sampling", "Snowball Sampling", "Null Hypothesis (H0)", "Type I & Type II Errors", "Representativeness"],
      },
      {
        title: "Social Statistics: Central Tendency, Dispersion & Chi-Square Tests",
        nativeTitle: { hi: "सामाजिक सांख्यिकी: केंद्रीय प्रवृत्ति, परिक्षेपण एवं काई-वर्ग परीक्षण", te: "సాంఘిక గణాంకాలు: కేంద్ర ప్రవృత్తి, విస్తరణ & కై-స్క్వేర్ పరీక్షలు" },
        content: "Measures of Central Tendency (Mean, Median, Mode); Measures of Dispersion (Standard Deviation, Variance); Pearson's correlation coefficient (r); Chi-Square (χ²) test of independence between categorical attributes.",
        depth: {
          basic: "High School: Using math to find averages (Mean, Median, Mode) and see how scores spread out.",
          undergraduate: "BA Level: Calculating Mean, Standard Deviation, and using Chi-Square (χ²) tests to see if two categorical factors are related.",
          advanced: "MA / UGC-NET / UPSC: Degrees of freedom, p-value significance levels, bivariate cross-tabulations, parametric vs non-parametric sociological inference.",
        },
        keyTerms: ["Mean / Median / Mode", "Standard Deviation", "Pearson Correlation (r)", "Chi-Square Test (χ²)", "Degree of Freedom"],
      },
    ],
  },
  {
    id: "module-4",
    number: 4,
    title: "Indian Society, Social Change & Stratification",
    nativeTitle: {
      hi: "मॉड्यूल 4: भारतीय समाज, सामाजिक परिवर्तन एवं स्तरीकरण",
      te: "మాడ్యూల్ 4: భారతీయ సమాజం, సామాజిక మార్పు & స్తరీకరణ",
    },
    targetLevels: ["BA", "MA", "UGC-NET / UPSC"],
    description: "Structure and dynamics of Indian society: Caste, Class, Gender, Tribe, Religion, Rural-Urban transformation, and foundational Indian thinkers (Srinivas, Ambedkar, Ghurye, Karve, Mukerji).",
    topics: [
      {
        title: "Prominent Indian Thinkers: Srinivas, Ambedkar, Ghurye, Karve, Mukerji",
        nativeTitle: { hi: "प्रमुख भारतीय विचारक: श्रीनिवास, आंबेडकर, घुर्ये, कर्वे, मुखर्जी", te: "ప్రముఖ భారతీయ ఆలోచనాపరులు: శ్రీనివాస్, అంబేద్కర్, ఘుర్యే, కార్వే, ముఖర్జీ" },
        content: "Comparative perspectives: Srinivas's functional field-view of Rampura, Ambedkar's radical anti-caste critique, Ghurye's Indological attributes, Karve's kinship zones, and D.P. Mukerji's dialectic of tradition.",
        depth: {
          basic: "High School: The great Indian social thinkers who studied caste, village life, family connections, and fought against untouchability.",
          undergraduate: "BA Level: Key concepts: Sanskritization, Dominant Caste, Annihilation of Caste, Kinship Zones, and Tribe-Caste Continuum.",
          advanced: "MA / UGC-NET / UPSC: Critical epistemological clash: Subaltern/Emancipatory perspective (Ambedkar) vs Structural-Functional Field-view (Srinivas) vs Indological (Ghurye) vs Cultural-Marxist (Mukerji).",
        },
        keyTerms: ["Sanskritization", "Dominant Caste", "Annihilation of Caste", "Tribe-Caste Continuum", "Kinship Zones"],
      },
      {
        title: "Caste System: Theories, Realities & Contemporary Transformations",
        nativeTitle: { hi: "जाति व्यवस्था: सिद्धांत, यथार्थ और समकालीन परिवर्तन", te: "కుల వ్యవస్థ: సిద్ధాంతాలు, వాస్తవికత & సమకాలీన పరిణామాలు" },
        content: "Varna vs Jati; Louis Dumont's Homo Hierarchicus (purity-pollution); Jajmani patron-client ties; politicization of caste (caste associations, vote banks); affirmative action and reservations.",
        depth: {
          basic: "High School: Caste is a traditional birth-based social ranking in India with four main Varnas and thousands of sub-castes (Jatis).",
          undergraduate: "BA Level: Dumont's purity-pollution hierarchy; disintegration of village Jajmani relations; modern political mobilization of backward classes.",
          advanced: "MA / UGC-NET / UPSC: De-ritualization vs politicization of caste; caste as social capital in corporate urban markets; intersectional critique of graded inequality.",
        },
        keyTerms: ["Varna vs Jati", "Purity and Pollution", "Jajmani System", "Caste Mobilization", "Homo Hierarchicus"],
      },
      {
        title: "Tribal Societies in India: Colonial Policies & Assimilation Debates",
        nativeTitle: { hi: "भारत में जनजातीय समाज: औपनिवेशिक नीतियां एवं समावेशन बहस", te: "భారతదేశంలో గిరిజన సమాజాలు: వలస విధానాలు & విలీన చర్చలు" },
        content: "Characteristics of Scheduled Tribes; Verrier Elwin's isolationist National Park policy vs G.S. Ghurye's 'backward Hindu' thesis; Nehru's Tribal Panchsheel; Forest Rights Act (FRA 2006) and PESA.",
        depth: {
          basic: "High School: Indian tribal communities with distinct culture, customs, and languages, and the government's policies to protect their lands and rights.",
          undergraduate: "BA Level: The historic debate between isolation (Elwin) and integration (Ghurye); Nehru's Tribal Panchsheel principles; land alienation and displacement.",
          advanced: "MA / UGC-NET / UPSC: Decentering colonial anthropology's construct of tribe; mineral extraction in tribal belts; Fifth & Sixth Schedule governance; PESA and FRA implementations.",
        },
        keyTerms: ["Tribal Panchsheel", "Verrier Elwin Debate", "Land Alienation", "Tribe-Caste Continuum", "PESA Act"],
      },
      {
        title: "Rural-Urban Transformation & Agrarian Social Structure",
        nativeTitle: { hi: "ग्रामीण-शहरी रूपांतरण और कृषक सामाजिक संरचना", te: "గ్రామీణ-పట్టణ పరివర్తన & వ్యవసాయ సామాజిక నిర్మాణం" },
        content: "Critique of Metcalfe's 'village republics' myth; Daniel Thorner's agrarian class hierarchy (Malik, Kisan, Mazdoor); Land reforms, Green Revolution inequality, rural-to-urban distress migration.",
        depth: {
          basic: "High School: How Indian villages and cities are changing through modern farming, education, factories, and movement to big cities.",
          undergraduate: "BA Level: Daniel Thorner's Malik-Kisan-Mazdoor classification; impact of Green Revolution on regional disparities; rapid urbanization.",
          advanced: "MA / UGC-NET / UPSC: De-peasantization; feminization of agriculture; agrarian distress and suicides; peri-urban enclaves and smart cities.",
        },
        keyTerms: ["Little Republics Myth", "Agrarian Hierarchy (Malik, Kisan, Mazdoor)", "Green Revolution Impact", "Land Reforms", "Rural Distress"],
      },
      {
        title: "Gender, Kinship & Social Stratification in India",
        nativeTitle: { hi: "भारत में लिंग, नातेदारी और सामाजिक स्तरीकरण", te: "భారతదేశంలో లింగం, బంధుత్వం & సామాజిక స్తరీకరణ" },
        content: "Brahmanical patriarchy and female endogamy (Uma Chakravarti's 'Gendering Caste'); dowry dynamics; declining female labor force participation; intersectionality of caste, class, and gender.",
        depth: {
          basic: "High School: Understanding how family customs, marriage practices, and gender roles differ across India and affect women's opportunities.",
          undergraduate: "BA Level: Karve's kinship zones; Uma Chakravarti's concept of Brahmanical Patriarchy; economic and educational factors in gender disparity.",
          advanced: "MA / UGC-NET / UPSC: Intersectional feminist sociology; enforcement of endogamy through honor crimes; reproductive labor and informalization of female labor.",
        },
        keyTerms: ["Brahmanical Patriarchy", "Gendering Caste", "Endogamous Control", "Kinship Systems", "Honor Killings"],
      },
    ],
    thinkers: indianThinkersData,
  },
  {
    id: "module-5",
    number: 5,
    title: "Exam & Quiz Hub: High School to UGC-NET & UPSC",
    nativeTitle: {
      hi: "मॉड्यूल 5: परीक्षा एवं प्रश्नोत्तरी केंद्र (हाई स्कूल से यूजीसी-नेट एवं यूपीएससी)",
      te: "మాడ్యూల్ 5: పరీక్ష & క్విజ్ హబ్ (హైస్కూల్ నుండి యుజిసి-నెట్ & యుపిఎస్సి వరకు)",
    },
    targetLevels: ["High School", "BA", "MA", "UGC-NET / UPSC"],
    description: "Dedicated examination mastery center: Multi-tier 10/15/20-Mark Answer Architect and authentic UGC-NET, BA/MA semester, and competitive exam MCQ banks with conceptual explanations.",
    topics: [
      {
        title: "Multi-Tier Examination Model Essay & Answer Generator",
        nativeTitle: { hi: "बहुस्तरीय परीक्षा मॉडल निबंध एवं उत्तर जनरेटर", te: "బహుళస్థాయి పరీక్ష మోడల్ వ్యాసం & సమాధాన జనరేటర్" },
        content: "Customized answer drafting scaled for: High School/CBSE (5/8 marks structured points), BA Degree (10/12 marks conceptual essays), and MA / UGC-NET / UPSC (15/20 marks advanced academic answers with theoretical debates and field evidence).",
        depth: {
          basic: "High School: Step-by-step simple answers with clear definitions, bulleted points, and everyday examples.",
          undergraduate: "BA Level: Comprehensive 10/12-mark university answers with theorist introductions, main arguments, and summary evaluations.",
          advanced: "MA / UGC-NET / UPSC: High-scoring 15/20-mark frameworks: Historiography, Theoretical Antinomies, Indian Empirical Correlates, and Master Scoring Keywords.",
        },
        keyTerms: ["Answer Structuring", "Critical Evaluation", "Indian Field Studies", "Theoretical Synthesis", "Scoring Keywords"],
      },
      {
        title: "UGC-NET, SET & Competitive Exam Practice MCQ Bank",
        nativeTitle: { hi: "यूजीसी-नेट, सेट एवं प्रतियोगी परीक्षा एमसीक्यू बैंक", te: "యుజిసి-నెట్, సెట్ & పోటీ పరీక్షల ఎంసిక్యు బ్యాంక్" },
        content: "Exhaustive question bank covering thinkers, seminal books, chronological assertions, sociological methods, and Indian social reality with immediate theoretical rationales.",
        depth: {
          basic: "High School: Fundamental concept checks and matching questions.",
          undergraduate: "BA Level: Core definition tests and thinker attribution questions.",
          advanced: "MA / UGC-NET / UPSC: Complex assertion-reasoning items, seminal publication chronology, and methodological application problems.",
        },
        keyTerms: ["Paper II MCQs", "Assertion & Reasoning", "Chronological Matching", "Book Citations", "Methodology Tests"],
      },
    ],
  },
];

export const curatedEssayQuestions = [
  {
    title: "Explain the nature and scope of Sociology. How did the Industrial and French Revolutions contribute to its emergence?",
    marks: 15 as const,
    module: "Module 1: Introduction to Sociology",
    level: "High School / BA",
  },
  {
    title: "Define Socialization. Differentiate between Primary and Secondary Socialization with suitable real-world examples.",
    marks: 10 as const,
    module: "Module 1: Basic Concepts",
    level: "High School / BA",
  },
  {
    title: "Critically evaluate Max Weber's 'The Protestant Ethic and the Spirit of Capitalism'. How far does it explain the genesis of modern rational capitalism?",
    marks: 20 as const,
    module: "Module 2: Sociological Theories",
    level: "MA / UGC-NET / UPSC",
  },
  {
    title: "Discuss Karl Marx's Theory of Historical Materialism. How have Indian sociologists adapted this framework to analyze colonial and agrarian relations?",
    marks: 20 as const,
    module: "Module 2: Sociological Theories",
    level: "MA / UGC-NET / UPSC",
  },
  {
    title: "Examine Émile Durkheim's concept of 'Social Facts'. Discuss its methodological significance and limitations in understanding social phenomena.",
    marks: 15 as const,
    module: "Module 2: Sociological Theories",
    level: "BA / MA",
  },
  {
    title: "Differentiate between Positivist and Interpretivist methodologies in sociological research. Highlight their ontological and epistemological assumptions.",
    marks: 15 as const,
    module: "Module 3: Research Methodology",
    level: "BA / MA / UGC-NET",
  },
  {
    title: "What is Participant Observation? Discuss its methodological strengths, ethical dilemmas, and limitations with reference to classic ethnographic studies.",
    marks: 15 as const,
    module: "Module 3: Research Methodology",
    level: "BA / MA / UGC-NET",
  },
  {
    title: "Critically examine Dr. B.R. Ambedkar's critique of the Hindu Caste System. Contrast his vision of the 'Annihilation of Caste' with M.K. Gandhi's idealization of Varna.",
    marks: 20 as const,
    module: "Module 4: Indian Society",
    level: "MA / UGC-NET / UPSC",
  },
  {
    title: "Discuss M.N. Srinivas's concepts of 'Sanskritization' and 'Dominant Caste'. Assess their contemporary validity in the light of backward class political assertion.",
    marks: 20 as const,
    module: "Module 4: Indian Society",
    level: "BA / MA / UGC-NET / UPSC",
  },
  {
    title: "Analyze the debate between Verrier Elwin and G.S. Ghurye regarding the status and assimilation of Indian tribal communities.",
    marks: 15 as const,
    module: "Module 4: Indian Society",
    level: "BA / MA / UGC-NET",
  },
  {
    title: "Discuss Pierre Bourdieu's concepts of 'Habitus' and 'Cultural Capital'. How do they explain the reproduction of social inequalities in educational institutions?",
    marks: 20 as const,
    module: "Module 2: Contemporary Theories",
    level: "MA / UGC-NET / UPSC",
  },
];

export const staticQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Who is widely recognized as the 'Father of Sociology' and coined the term in 1838?",
    options: [
      "Karl Marx",
      "Auguste Comte",
      "Herbert Spencer",
      "Max Weber",
    ],
    correctIndex: 1,
    explanation: "Auguste Comte coined the term 'Sociology' (from Latin 'socius' and Greek 'logos') in 1838 and formulated the Law of Three Stages (Theological, Metaphysical, Positive).",
    module: "Module 1: Introduction to Sociology",
    thinkerOrConcept: "Auguste Comte - Emergence of Sociology",
  },
  {
    id: 2,
    question: "C. Wright Mills coined which celebrated concept to describe the ability to connect individual personal troubles to public historical issues?",
    options: [
      "Sociological Imagination",
      "Collective Consciousness",
      "Social Fact",
      "Symbolic Interactionism",
    ],
    correctIndex: 0,
    explanation: "In 'The Sociological Imagination' (1959), C. Wright Mills defined it as the vivid awareness of the relationship between personal experience and the wider society.",
    module: "Module 1: Introduction to Sociology",
    thinkerOrConcept: "C. Wright Mills - Sociological Imagination",
  },
  {
    id: 3,
    question: "Ferdinand Tönnies distinguished between two fundamental types of social organization: Gemeinschaft and Gesellschaft. Gemeinschaft refers to:",
    options: [
      "Modern contractual urban society",
      "Traditional, intimate community based on kinship and close emotional ties",
      "Bureaucratic state machinery",
      "Industrial wage-labor marketplace",
    ],
    correctIndex: 1,
    explanation: "Gemeinschaft translates to 'Community' (intimate, private, exclusive living together found in villages and families), contrasted with Gesellschaft ('Society', impersonal and contractual).",
    module: "Module 1: Basic Concepts",
    thinkerOrConcept: "Ferdinand Tönnies - Gemeinschaft vs Gesellschaft",
  },
  {
    id: 4,
    question: "According to Karl Marx, the transformation of the working class from a passive collective into a revolutionary force represents the transition from:",
    options: [
      "Lumpenproletariat to Proletariat",
      "Class-in-itself (Klasse an sich) to Class-for-itself (Klasse für sich)",
      "Bourgeoisie to Petite-Bourgeoisie",
      "Organic Solidarity to Mechanical Solidarity",
    ],
    correctIndex: 1,
    explanation: "Marx distinguished between 'Class-in-itself' (objective grouping sharing identical economic conditions) and 'Class-for-itself' (conscious political collective organized to fight for its shared interests).",
    module: "Module 2: Sociological Theories",
    thinkerOrConcept: "Karl Marx - Class Consciousness",
  },
  {
    id: 5,
    question: "Which one of the following is NOT one of Max Weber's four Ideal Types of Social Action?",
    options: [
      "Zweckrational (Instrumentally rational)",
      "Wertrational (Value rational)",
      "Affective action",
      "Coercive-Structural action",
    ],
    correctIndex: 3,
    explanation: "Weber's 4 ideal types are: Zweckrational (instrumental), Wertrational (value-oriented), Affective (emotional), and Traditional. 'Coercive-Structural action' is not one of Weber's types.",
    module: "Module 2: Sociological Theories",
    thinkerOrConcept: "Max Weber - Typology of Social Action",
  },
  {
    id: 6,
    question: "In Émile Durkheim's sociology of suicide, an individual who commits suicide due to excessive moral regulation and oppressive control (e.g. a slave) represents which type?",
    options: [
      "Egoistic Suicide",
      "Altruistic Suicide",
      "Anomic Suicide",
      "Fatalistic Suicide",
    ],
    correctIndex: 3,
    explanation: "Fatalistic suicide results from high or over-regulation where futures are blocked and passions violently choked, exemplified by slaves or individuals under barren despotism.",
    module: "Module 2: Sociological Theories",
    thinkerOrConcept: "Émile Durkheim - Suicide Typology",
  },
  {
    id: 7,
    question: "Who formulated the concept of 'Theories of the Middle Range' to steer sociology between minor daily hypotheses and abstract grand theorizing?",
    options: [
      "Talcott Parsons",
      "Robert K. Merton",
      "C. Wright Mills",
      "Anthony Giddens",
    ],
    correctIndex: 1,
    explanation: "Robert K. Merton advocated Theories of the Middle Range (theories that lie between minor day-to-day hypotheses and all-inclusive grand speculative efforts like Parsons').",
    module: "Module 2: Sociological Theories",
    thinkerOrConcept: "Robert K. Merton - Middle Range Theory",
  },
  {
    id: 8,
    question: "In Michel Foucault's 'Discipline and Punish', which architectural design was analyzed as the supreme diagram of modern disciplinary surveillance?",
    options: [
      "The Bastille Fortress",
      "Jeremy Bentham's Panopticon",
      "The Versailles Labyrinth",
      "The Roman Colosseum",
    ],
    correctIndex: 1,
    explanation: "Foucault used Jeremy Bentham's Panopticon—a central observation tower surrounded by peripheral cells—as the metaphor for modern disciplinary surveillance and internal self-policing.",
    module: "Module 2: Sociological Theories",
    thinkerOrConcept: "Michel Foucault - Panopticism",
  },
  {
    id: 9,
    question: "Which of the following is NOT one of the six criteria of a 'Dominant Caste' formulated by M.N. Srinivas?",
    options: [
      "Substantial agricultural land ownership",
      "Numerical preponderance in the village or region",
      "Brahminical lineage and Vedic scholarship",
      "Physical power and readiness to use force",
    ],
    correctIndex: 2,
    explanation: "Srinivas explicitly showed that a Dominant Caste need NOT be Brahminical. Most dominant castes in India (e.g. Vokkaligas, Reddys, Jats, Marathas) are peasant/agrarian castes who hold secular economic, political, and numerical superiority.",
    module: "Module 4: Indian Society",
    thinkerOrConcept: "M.N. Srinivas - Dominant Caste",
  },
  {
    id: 10,
    question: "In his seminal address 'Annihilation of Caste' (1936), Dr. B.R. Ambedkar identified the foundational mechanism that maintains and perpetuates caste as:",
    options: [
      "Voluntary occupational choice",
      "Superposed Endogamy over exogamous gotras",
      "Geographical isolation of rural villages",
      "The introduction of modern railway transport",
    ],
    correctIndex: 1,
    explanation: "Ambedkar proved that endogamy (enclosing the group through marriage within itself) superposed over gotra exogamy was the primary mechanism by which the caste hierarchy created its rigid boundaries.",
    module: "Module 4: Indian Society",
    thinkerOrConcept: "Dr. B.R. Ambedkar - Annihilation of Caste",
  },
  {
    id: 11,
    question: "Which statistical test is used in sociological research to determine whether there is a statistically significant association between two categorical variables?",
    options: [
      "Student's t-test",
      "Pearson's correlation coefficient",
      "Chi-Square (χ²) test of independence",
      "Gini coefficient",
    ],
    correctIndex: 2,
    explanation: "The Chi-Square (χ²) test of independence evaluates whether observed frequencies in categorical contingency tables differ significantly from expected frequencies under the null hypothesis.",
    module: "Module 3: Research Methodology",
    thinkerOrConcept: "Statistical Methodology - Chi-Square Test",
  },
  {
    id: 12,
    question: "In Irawati Karve's landmark study 'Kinship Organization in India', which region is characterized by cross-cousin marriage and uncle-niece marriage preferences?",
    options: [
      "Northern Kinship Zone",
      "Southern Kinship Zone (Dravidian)",
      "Central Zone (Gond territory)",
      "Eastern Zone (Austric)",
    ],
    correctIndex: 1,
    explanation: "Karve documented that the Southern (Dravidian) Kinship zone encourages cross-cousin marriages (MBD or FSD) and maternal uncle-niece alliances, unlike the Northern zone which strictly enforces village and gotra exogamy.",
    module: "Module 4: Indian Society",
    thinkerOrConcept: "Irawati Karve - Kinship Organization",
  },
  {
    id: 13,
    question: "Pierre Bourdieu's formula for the generation of social practice is stated as:",
    options: [
      "Practice = Structure + Agency",
      "Practice = (Habitus x Capital) + Field",
      "Practice = Class Consciousness / Alienation",
      "Practice = Manifest Function - Dysfunction",
    ],
    correctIndex: 1,
    explanation: "Bourdieu's celebrated formula is [(Habitus) (Capital)] + Field = Practice, showing how embodied dispositions and accumulated resources interact within a specific social field.",
    module: "Module 2: Sociological Theories",
    thinkerOrConcept: "Pierre Bourdieu - Theory of Practice",
  },
];

export const sampleReadingMaterials = [
  {
    title: "Basic Concepts: C. Wright Mills on The Sociological Imagination",
    text: `The sociological imagination enables its possessor to understand the larger historical scene in terms of its meaning for the inner life and the external career of a variety of individuals. It enables him to take into account how individuals, in the welter of their daily experience, often become falsely conscious of their social positions. Within that welter, the framework of modern society is sought, and within that framework the psychologies of a variety of men and women are formulated. By such means the personal uneasiness of individuals is focused upon explicit troubles and the indifference of publics is transformed into involvement with public issues.

The first fruit of this imagination—and the first lesson of the social science that embodies it—is the idea that the individual can understand his own experience and gauge his own fate only by locating himself within his period, that he can know his own chances in life only by becoming aware of those of all individuals in his circumstances. In many ways it is a terrible lesson; in many ways a magnificent one. We do not know the limits of human capacities for supreme effort or willing degradation, for agony or glee, for pleasurable brutality or the sweetness of reason. But in our time we have come to know that the limits of 'human nature' are frighteningly broad. We have come to know that every individual lives, from one generation to the next, in some society; that he lives out a biography, and that he lives it out within some historical sequence. By the fact of this living, he contributes, however minutely, to the shaping of this society and to the course of its history, even as he is made by society and by its historical push and shove.`
  },
  {
    title: "Karl Marx on Capitalist Estrangement & Species-Being (Excerpt)",
    text: `The worker becomes all the poorer the more wealth he produces, the more his production increases in power and size. The worker becomes an ever cheaper commodity the more commodities he creates. The devaluation of the human world grows in direct proportion to the increase in value of the world of things. Labor not only produces commodities; it produces itself and the worker as a commodity—and this at the same rate at which its production of commodities produces.

This fact expresses merely that the object which labor produces—labor's product—confronts it as something alien, as a power independent of the producer. The product of labor is labor which has been congealed in an object, which has become material: it is the objectification of labor. Labor's realization is its objectification. In the conditions dealt with by political economy, this realization of labor appears as loss of realization for the workers; objectification as loss of the object and object-bondage; appropriation as estrangement, as alienation.

Estranged labor turns man's species-being, both nature and his spiritual species-property, into a being alien to him, into a means for his individual existence. It estranges man from his own body, as well as external nature and his spiritual aspect, his human aspect. An immediate consequence of the fact that man is estranged from the product of his labor, from his life activity, from his species-being, is the estrangement of man from man.`
  },
  {
    title: "M.N. Srinivas on the Concept of Dominant Caste in Rampura",
    text: `The concept of the dominant caste is crucial for understanding rural social life and the power structure in India. A caste may be said to be dominant when it preponderates numerically over the other castes, and when it also wields preponderant economic and political power. A large and powerful caste group can more easily be dominant if its position in the local caste hierarchy is not too low.

In Rampura village, the Okkaligas (peasant caste) owned the vast majority of wet and dry land. Numerical strength alone does not confer dominance; without land ownership and economic independence, a numerical majority remains helpless. Furthermore, with the advent of adult franchise and democratic decentralization (Panchayati Raj), numerical preponderance has acquired decisive weight in electoral mobilization.

When a caste possesses all three attributes—numerical strength, economic power through land, and political power through control of village councils—it exercises decisive hegemony. The dominant caste settles disputes between members of different castes, enforces customary norms, maintains social control, and represents the village before government revenue officials and police.`
  },
  {
    title: "Methodological Positivism vs Interpretivism in Social Research",
    text: `The debate between positivism and interpretivism constitutes one of the foundational epistemological fractures in sociology. Positivism, rooted in the philosophical tradition of Auguste Comte and methodologically systematized by Émile Durkheim, posits that social reality consists of objective facts that exist external to individuals. For the positivist, the methodological tenets of the natural sciences—quantification, empirical observation, hypothesis testing, and the formulation of universal causal laws—can and must be directly applied to human societies.

Conversely, interpretivism, inspired by Wilhelm Dilthey's distinction between Naturwissenschaften (natural sciences) and Geisteswissenschaften (human sciences) and developed by Max Weber and Alfred Schutz, argues that the social world cannot be treated as a collection of inanimate physical objects. Human actors do not merely react to external stimuli; they assign subjective meanings, intentions, and symbolic interpretations to their actions. The objective of the sociologist is therefore not to uncover universal deterministic laws, but to achieve 'Verstehen'—an empathetic and interpretive grasp of the subjective meanings that actors bestow upon their conduct.`
  }
];
