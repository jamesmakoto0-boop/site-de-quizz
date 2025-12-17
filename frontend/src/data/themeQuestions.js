// Theme-specific practice questions for Gantt chart interactive quizzes
// Each theme has 10 questions with feedback

export const themeQuestions = {
  "First Conditional": [
    {
      id: 1,
      question: "If the company ______ its costs, it will remain competitive.",
      options: ["reduces", "reduced", "will reduce", "has reduced"],
      correctIndex: 0,
      feedback: "The first conditional uses if + present simple, not future forms."
    },
    {
      id: 2,
      question: "If you don't follow the procedure, you ______ access to the system.",
      options: ["lose", "would lose", "will lose", "have lost"],
      correctIndex: 2,
      feedback: "A real future consequence requires will + base verb."
    },
    {
      id: 3,
      question: "If she ______ earlier, she won't miss the briefing.",
      options: ["arrives", "arrived", "will arrive", "has arrived"],
      correctIndex: 0,
      feedback: "Present simple is mandatory in the if-clause."
    },
    {
      id: 4,
      question: "If the data is inaccurate, the results ______ misleading.",
      options: ["are", "were", "would be", "will have been"],
      correctIndex: 0,
      feedback: "This expresses a general factual truth in a conditional structure."
    },
    {
      id: 5,
      question: "You'll regret it if you ______ the warning.",
      options: ["ignore", "ignored", "will ignore", "have ignored"],
      correctIndex: 0,
      feedback: "Never use will in the if-clause of the first conditional."
    },
    {
      id: 6,
      question: "If demand increases, prices ______ accordingly.",
      options: ["rise", "rose", "will rise", "would rise"],
      correctIndex: 2,
      feedback: "Future result → will + verb."
    },
    {
      id: 7,
      question: "If he doesn't adapt, he ______ behind.",
      options: ["falls", "fell", "will fall", "would fall"],
      correctIndex: 2,
      feedback: "This is a real and likely future scenario."
    },
    {
      id: 8,
      question: "If we meet the deadline, the client ______ satisfied.",
      options: ["is", "was", "would be", "will be"],
      correctIndex: 3,
      feedback: "Future consequence → future simple."
    },
    {
      id: 9,
      question: "If the system crashes, we ______ the backup.",
      options: ["use", "will use", "used", "would use"],
      correctIndex: 1,
      feedback: "Standard first conditional structure."
    },
    {
      id: 10,
      question: "If you invest wisely, you ______ long-term benefits.",
      options: ["gain", "gained", "will gain", "would gain"],
      correctIndex: 2,
      feedback: "Realistic future outcome → first conditional."
    }
  ],

  "Past Simple": [
    {
      id: 1,
      question: "They ______ the contract without legal advice.",
      options: ["sign", "signed", "have signed", "had signed"],
      correctIndex: 1,
      feedback: "A completed past action → past simple."
    },
    {
      id: 2,
      question: "She ______ her position after five years.",
      options: ["leaves", "left", "has left", "had left"],
      correctIndex: 1,
      feedback: "Specific finished time period in the past."
    },
    {
      id: 3,
      question: "When ______ the merger finalized?",
      options: ["did", "was", "has", "had"],
      correctIndex: 0,
      feedback: "Past simple questions require did + base verb."
    },
    {
      id: 4,
      question: "The board ______ unanimously against the proposal.",
      options: ["votes", "voted", "has voted", "had voted"],
      correctIndex: 1,
      feedback: "A single completed event in the past."
    },
    {
      id: 5,
      question: "He ______ his mistake too late.",
      options: ["realizes", "realized", "has realized", "had realized"],
      correctIndex: 1,
      feedback: "No earlier reference point → past simple, not past perfect."
    },
    {
      id: 6,
      question: "We ______ the issue during the meeting.",
      options: ["discuss", "discussed", "have discussed", "were discussing"],
      correctIndex: 1,
      feedback: "The action is finished and time-bound."
    },
    {
      id: 7,
      question: "She ______ the email but didn't reply.",
      options: ["reads", "read", "has read", "had read"],
      correctIndex: 1,
      feedback: "Irregular verb 'read' has the same written form."
    },
    {
      id: 8,
      question: "The company ______ profits last quarter.",
      options: ["reports", "reported", "has reported", "had reported"],
      correctIndex: 1,
      feedback: "'Last quarter' signals past simple."
    },
    {
      id: 9,
      question: "They ______ the risks before investing.",
      options: ["assess", "assessed", "have assessed", "had assessed"],
      correctIndex: 1,
      feedback: "Completed action with no connection to the present."
    },
    {
      id: 10,
      question: "I ______ him clearly, but he ignored the advice.",
      options: ["warn", "warned", "have warned", "had warned"],
      correctIndex: 1,
      feedback: "Two completed actions in the past → past simple."
    }
  ],

  "Present Continuous": [
    {
      id: 1,
      question: "The team ______ on a new strategy this week.",
      options: ["works", "worked", "is working", "has worked"],
      correctIndex: 2,
      feedback: "Temporary action happening around now."
    },
    {
      id: 2,
      question: "She ______ currently considering other offers.",
      options: ["is", "was", "has been", "will be"],
      correctIndex: 0,
      feedback: "Present continuous uses be + -ing."
    },
    {
      id: 3,
      question: "Why ______ you looking at me like that?",
      options: ["do", "are", "did", "have"],
      correctIndex: 1,
      feedback: "Correct auxiliary for present continuous questions."
    },
    {
      id: 4,
      question: "The market ______ rapidly due to inflation.",
      options: ["changes", "changed", "is changing", "has changed"],
      correctIndex: 2,
      feedback: "Ongoing trend → present continuous."
    },
    {
      id: 5,
      question: "We ______ not making progress fast enough.",
      options: ["do", "are", "have", "were"],
      correctIndex: 1,
      feedback: "Negative form requires are not + verb-ing."
    },
    {
      id: 6,
      question: "They ______ negotiations at the moment.",
      options: ["conduct", "conducted", "are conducting", "have conducted"],
      correctIndex: 2,
      feedback: "'At the moment' signals present continuous."
    },
    {
      id: 7,
      question: "I ______ staying late this evening.",
      options: ["am", "do", "have", "will"],
      correctIndex: 0,
      feedback: "Present continuous can express near future plans."
    },
    {
      id: 8,
      question: "The CEO ______ addressing the staff right now.",
      options: ["is", "was", "has", "will"],
      correctIndex: 0,
      feedback: "Action happening at the moment of speaking."
    },
    {
      id: 9,
      question: "Why ______ they delaying the launch?",
      options: ["do", "are", "have", "did"],
      correctIndex: 1,
      feedback: "Present continuous question form."
    },
    {
      id: 10,
      question: "We ______ improving our internal processes.",
      options: ["are constantly", "constantly are", "have constantly", "constantly have"],
      correctIndex: 0,
      feedback: "Adverbs usually come between be and the main verb."
    }
  ],

  "Present Perfect": [
    {
      id: 1,
      question: "She ______ significant progress since joining the company.",
      options: ["makes", "made", "has made", "had made"],
      correctIndex: 2,
      feedback: "The present perfect links a past action to the present using has/have + past participle."
    },
    {
      id: 2,
      question: "How long ______ you worked in this industry?",
      options: ["do", "did", "have", "had"],
      correctIndex: 2,
      feedback: "'How long' with an unfinished time period requires the present perfect."
    },
    {
      id: 3,
      question: "They ______ the issue yet.",
      options: ["didn't resolve", "haven't resolved", "aren't resolving", "don't resolve"],
      correctIndex: 1,
      feedback: "'Yet' is commonly used in negative present perfect sentences."
    },
    {
      id: 4,
      question: "We ______ several complaints this month.",
      options: ["receive", "received", "have received", "had received"],
      correctIndex: 2,
      feedback: "'This month' is an unfinished time expression."
    },
    {
      id: 5,
      question: "He ______ never encountered such resistance before.",
      options: ["did", "has", "had", "was"],
      correctIndex: 1,
      feedback: "'Never' is frequently used with the present perfect to express life experience."
    },
    {
      id: 6,
      question: "The company ______ its policy three times since 2020.",
      options: ["changes", "changed", "has changed", "had changed"],
      correctIndex: 2,
      feedback: "'Since' signals a time period continuing up to now."
    },
    {
      id: 7,
      question: "Have you ever ______ under similar conditions?",
      options: ["work", "worked", "working", "works"],
      correctIndex: 1,
      feedback: "Questions in the present perfect use the past participle."
    },
    {
      id: 8,
      question: "We ______ the deadline, unfortunately.",
      options: ["miss", "missed", "have missed", "had missed"],
      correctIndex: 2,
      feedback: "The result (missing the deadline) is relevant now."
    },
    {
      id: 9,
      question: "She ______ here for over a decade.",
      options: ["works", "worked", "has worked", "had worked"],
      correctIndex: 2,
      feedback: "Duration continuing to the present → present perfect."
    },
    {
      id: 10,
      question: "This is the first time I ______ such a challenge.",
      options: ["face", "faced", "have faced", "had faced"],
      correctIndex: 2,
      feedback: "Fixed structure: This is the first time + present perfect."
    }
  ],

  "Question Forms": [
    {
      id: 1,
      question: "Which sentence is grammatically correct?",
      options: ["You did finish the report?", "Did you finish the report?", "Finished you the report?", "You finished did the report?"],
      correctIndex: 1,
      feedback: "Past simple questions require Did + subject + base verb."
    },
    {
      id: 2,
      question: "What ______ you do if the plan fails?",
      options: ["do", "did", "will", "would"],
      correctIndex: 3,
      feedback: "This question refers to a hypothetical situation → second conditional."
    },
    {
      id: 3,
      question: "How many people ______ involved in the project?",
      options: ["is", "are", "was", "has"],
      correctIndex: 1,
      feedback: "'People' is plural, so it takes are."
    },
    {
      id: 4,
      question: "Why ______ the meeting postponed?",
      options: ["did", "was", "has", "does"],
      correctIndex: 1,
      feedback: "Passive voice in the past → was + past participle."
    },
    {
      id: 5,
      question: "Which question is correctly formed?",
      options: ["Where you are going?", "Where do you going?", "Where are you going?", "Where you going are?"],
      correctIndex: 2,
      feedback: "Present continuous questions use are + subject + verb-ing."
    },
    {
      id: 6,
      question: "Who ______ responsible for the error?",
      options: ["are", "were", "is", "have"],
      correctIndex: 2,
      feedback: "'Who' takes a singular verb when referring to one person."
    },
    {
      id: 7,
      question: "How often ______ the system updated?",
      options: ["is", "does", "has", "was"],
      correctIndex: 0,
      feedback: "Present simple passive → is + past participle."
    },
    {
      id: 8,
      question: "What time ______ the presentation start?",
      options: ["does", "did", "is", "has"],
      correctIndex: 0,
      feedback: "Present simple questions require does + base verb."
    },
    {
      id: 9,
      question: "Which option ______ you choose in my position?",
      options: ["do", "did", "will", "would"],
      correctIndex: 3,
      feedback: "Hypothetical context → would is appropriate."
    },
    {
      id: 10,
      question: "How long ago ______ they reach an agreement?",
      options: ["do", "did", "have", "had"],
      correctIndex: 1,
      feedback: "'How long ago' always uses the past simple."
    }
  ],

  "Subject-Verb Agreement": [
    {
      id: 1,
      question: "Each of the candidates ______ required to submit a portfolio.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "'Each' takes a singular verb."
    },
    {
      id: 2,
      question: "A number of issues ______ raised during the audit.",
      options: ["was", "has", "were", "is"],
      correctIndex: 2,
      feedback: "'A number of' is treated as plural."
    },
    {
      id: 3,
      question: "The number of complaints ______ increased significantly.",
      options: ["have", "are", "has", "were"],
      correctIndex: 2,
      feedback: "'The number of' refers to a single figure → singular verb."
    },
    {
      id: 4,
      question: "Neither the manager nor the employees ______ aware of the change.",
      options: ["is", "was", "are", "has been"],
      correctIndex: 2,
      feedback: "With 'neither…nor,' the verb agrees with the closest noun."
    },
    {
      id: 5,
      question: "One of the reasons for the delay ______ staffing issues.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "The subject is 'one,' which is singular."
    },
    {
      id: 6,
      question: "The committee ______ divided on the matter.",
      options: ["are", "were", "is", "have"],
      correctIndex: 2,
      feedback: "Collective nouns are usually singular in formal English."
    },
    {
      id: 7,
      question: "Several members of the board ______ expressed concerns.",
      options: ["has", "have", "is", "was"],
      correctIndex: 1,
      feedback: "'Several' requires a plural verb."
    },
    {
      id: 8,
      question: "None of the information ______ been verified.",
      options: ["have", "were", "has", "are"],
      correctIndex: 2,
      feedback: "'Information' is uncountable and takes a singular verb."
    },
    {
      id: 9,
      question: "More than one solution ______ proposed.",
      options: ["were", "are", "has been", "have been"],
      correctIndex: 2,
      feedback: "'More than one' takes a singular verb."
    },
    {
      id: 10,
      question: "The CEO, along with her advisors, ______ attending the summit.",
      options: ["are", "were", "is", "have"],
      correctIndex: 2,
      feedback: "The main subject is 'the CEO'; additional phrases do not affect verb agreement."
    }
  ],

  "Third Conditional": [
    {
      id: 1,
      question: "If the company ______ earlier, it would have avoided bankruptcy.",
      options: ["acts", "acted", "had acted", "would act"],
      correctIndex: 2,
      feedback: "Third conditional uses if + past perfect to talk about unreal past situations."
    },
    {
      id: 2,
      question: "She wouldn't have resigned if she ______ properly informed.",
      options: ["was", "were", "had been", "would be"],
      correctIndex: 2,
      feedback: "Unreal past condition → past perfect passive form."
    },
    {
      id: 3,
      question: "If we ______ the warning signs, the crisis wouldn't have occurred.",
      options: ["noticed", "had noticed", "would notice", "have noticed"],
      correctIndex: 1,
      feedback: "Past perfect is required in the if-clause."
    },
    {
      id: 4,
      question: "Had he ______ more cautious, the error could have been prevented.",
      options: ["be", "been", "being", "was"],
      correctIndex: 1,
      feedback: "Inverted third conditional uses had + past participle."
    },
    {
      id: 5,
      question: "They would have met the deadline if they ______ additional staff.",
      options: ["hired", "would hire", "had hired", "have hired"],
      correctIndex: 2,
      feedback: "The condition refers to an unreal past action."
    },
    {
      id: 6,
      question: "If the system hadn't failed, we ______ on time.",
      options: ["would arrive", "arrived", "would have arrived", "had arrived"],
      correctIndex: 2,
      feedback: "Main clause of third conditional → would have + past participle."
    },
    {
      id: 7,
      question: "Had the negotiations succeeded, the contract ______ signed.",
      options: ["will be", "would be", "would have been", "had been"],
      correctIndex: 2,
      feedback: "Passive third conditional structure."
    },
    {
      id: 8,
      question: "If she had listened, she ______ that mistake.",
      options: ["wouldn't make", "wouldn't have made", "didn't make", "hadn't made"],
      correctIndex: 1,
      feedback: "Result refers to an unreal past consequence."
    },
    {
      id: 9,
      question: "We wouldn't have lost the client if communication ______ clearer.",
      options: ["was", "were", "had been", "would be"],
      correctIndex: 2,
      feedback: "Past unreal condition → past perfect."
    },
    {
      id: 10,
      question: "Had they prepared adequately, the presentation ______ disastrous.",
      options: ["wouldn't be", "wouldn't have been", "isn't", "hadn't been"],
      correctIndex: 1,
      feedback: "Third conditional expresses regret or criticism."
    }
  ],

  "Articles": [
    {
      id: 1,
      question: "She was appointed ______ head of department last year.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 3,
      feedback: "Job titles after verbs like appoint often take no article."
    },
    {
      id: 2,
      question: "The report highlighted ______ importance of transparency.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 2,
      feedback: "'Importance' is specified → definite article."
    },
    {
      id: 3,
      question: "He has ______ experience in international negotiations.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 3,
      feedback: "'Experience' is uncountable when used generally."
    },
    {
      id: 4,
      question: "This is ______ most challenging task I've handled.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 2,
      feedback: "Superlatives require the definite article."
    },
    {
      id: 5,
      question: "She spoke with ______ confidence that impressed everyone.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 3,
      feedback: "Abstract uncountable nouns often take no article."
    },
    {
      id: 6,
      question: "They reached ______ agreement after hours of debate.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 0,
      feedback: "First mention of a singular countable noun."
    },
    {
      id: 7,
      question: "______ European consultant was hired for the project.",
      options: ["A", "An", "The", "(no article)"],
      correctIndex: 0,
      feedback: "'European' starts with a /j/ sound → 'a,' not 'an.'"
    },
    {
      id: 8,
      question: "The CEO addressed ______ staff individually.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 2,
      feedback: "'Staff' refers to a specific group."
    },
    {
      id: 9,
      question: "She has ______ deep understanding of market dynamics.",
      options: ["a", "an", "the", "(no article)"],
      correctIndex: 0,
      feedback: "'Understanding' is countable when specified."
    },
    {
      id: 10,
      question: "______ honesty is essential in leadership roles.",
      options: ["A", "An", "The", "(no article)"],
      correctIndex: 3,
      feedback: "General abstract nouns take no article."
    }
  ],

  "Passive Voice": [
    {
      id: 1,
      question: "The policy ______ implemented without proper consultation.",
      options: ["has", "has been", "had", "was"],
      correctIndex: 1,
      feedback: "Present perfect passive → has been + past participle."
    },
    {
      id: 2,
      question: "Several mistakes ______ during the audit.",
      options: ["identify", "identified", "were identified", "have identified"],
      correctIndex: 2,
      feedback: "Past simple passive focuses on the action, not the doer."
    },
    {
      id: 3,
      question: "The decision ______ before the meeting took place.",
      options: ["makes", "was made", "had been made", "has been made"],
      correctIndex: 2,
      feedback: "Past perfect passive shows an action completed before another past action."
    },
    {
      id: 4,
      question: "The new software ______ rolled out next month.",
      options: ["is", "will", "will be", "has been"],
      correctIndex: 2,
      feedback: "Future passive form → will be + past participle."
    },
    {
      id: 5,
      question: "The proposal ______ rejected due to budget constraints.",
      options: ["has", "has been", "had", "is"],
      correctIndex: 1,
      feedback: "Present perfect passive highlights present relevance."
    },
    {
      id: 6,
      question: "Sensitive data must ______ protected at all times.",
      options: ["be", "being", "been", "have been"],
      correctIndex: 0,
      feedback: "Modal passive → modal + be + past participle."
    },
    {
      id: 7,
      question: "The cause of the failure ______ still being investigated.",
      options: ["is", "has", "was", "will"],
      correctIndex: 0,
      feedback: "Continuous passive form → is being + past participle."
    },
    {
      id: 8,
      question: "No final decision ______ yet.",
      options: ["makes", "made", "has been made", "had been made"],
      correctIndex: 2,
      feedback: "'Yet' commonly appears with present perfect passive."
    },
    {
      id: 9,
      question: "The contract should ______ signed by Friday.",
      options: ["be", "been", "being", "have"],
      correctIndex: 0,
      feedback: "Passive with modal verb structure."
    },
    {
      id: 10,
      question: "The issue ______ addressed sooner if management had acted.",
      options: ["would be", "would have been", "was", "had been"],
      correctIndex: 1,
      feedback: "Third conditional passive structure."
    }
  ],

  "Second Conditional": [
    {
      id: 1,
      question: "If the company ______ more flexible, it would attract better talent.",
      options: ["is", "was", "were", "had been"],
      correctIndex: 2,
      feedback: "The second conditional uses were for all subjects in hypothetical situations."
    },
    {
      id: 2,
      question: "What would you do if you ______ in my position?",
      options: ["are", "were", "will be", "had been"],
      correctIndex: 1,
      feedback: "Unreal present condition → past simple form."
    },
    {
      id: 3,
      question: "If we ______ unlimited resources, this problem would be easy to solve.",
      options: ["have", "had", "will have", "would have"],
      correctIndex: 1,
      feedback: "Second conditional expresses unreal or unlikely situations."
    },
    {
      id: 4,
      question: "If she ______ more confident, she would perform better.",
      options: ["is", "was", "were", "had been"],
      correctIndex: 2,
      feedback: "'Were' is preferred in formal hypothetical statements."
    },
    {
      id: 5,
      question: "I wouldn't accept the offer if I ______ you.",
      options: ["am", "was", "were", "had been"],
      correctIndex: 2,
      feedback: "Fixed expression: If I were you."
    },
    {
      id: 6,
      question: "If they ______ the risks seriously, they would reconsider the plan.",
      options: ["take", "took", "will take", "had taken"],
      correctIndex: 1,
      feedback: "Past simple form in second conditional if-clause."
    },
    {
      id: 7,
      question: "What changes would occur if the policy ______ revised?",
      options: ["is", "was", "were", "had been"],
      correctIndex: 2,
      feedback: "Passive form of the second conditional."
    },
    {
      id: 8,
      question: "If he ______ more time, he would learn the skill properly.",
      options: ["has", "had", "would have", "will have"],
      correctIndex: 1,
      feedback: "Unreal present situation → past simple."
    },
    {
      id: 9,
      question: "If management listened more, morale ______ higher.",
      options: ["is", "will be", "would be", "had been"],
      correctIndex: 2,
      feedback: "Result clause of the second conditional."
    },
    {
      id: 10,
      question: "She would travel more if her job ______ remote.",
      options: ["is", "was", "were", "had been"],
      correctIndex: 2,
      feedback: "Hypothetical present condition → 'were.'"
    }
  ],

  "Conjunctions": [
    {
      id: 1,
      question: "He accepted the position, ______ it offered fewer benefits.",
      options: ["because", "although", "unless", "whereas"],
      correctIndex: 1,
      feedback: "'Although' introduces contrast."
    },
    {
      id: 2,
      question: "We postponed the launch ______ additional testing was required.",
      options: ["despite", "unless", "because", "whereas"],
      correctIndex: 2,
      feedback: "'Because' expresses cause and effect."
    },
    {
      id: 3,
      question: "She continued negotiating ______ the risk involved.",
      options: ["although", "despite", "whereas", "unless"],
      correctIndex: 1,
      feedback: "'Despite' is followed by a noun or gerund."
    },
    {
      id: 4,
      question: "You won't succeed ______ you commit fully.",
      options: ["because", "although", "unless", "whereas"],
      correctIndex: 2,
      feedback: "'Unless' expresses a necessary condition."
    },
    {
      id: 5,
      question: "The proposal was rejected, ______ it was financially viable.",
      options: ["because", "although", "so", "unless"],
      correctIndex: 1,
      feedback: "Contrast between expectation and result."
    },
    {
      id: 6,
      question: "He focused on growth, ______ his partner prioritized stability.",
      options: ["because", "although", "whereas", "unless"],
      correctIndex: 2,
      feedback: "'Whereas' contrasts two parallel ideas."
    },
    {
      id: 7,
      question: "______ the delays, the project remained profitable.",
      options: ["Because", "Although", "Despite", "Unless"],
      correctIndex: 2,
      feedback: "'Despite' is followed by a noun phrase."
    },
    {
      id: 8,
      question: "We can proceed, ______ everyone agrees.",
      options: ["because", "unless", "provided that", "whereas"],
      correctIndex: 2,
      feedback: "'Provided that' sets a condition."
    },
    {
      id: 9,
      question: "She declined the offer ______ the salary was competitive.",
      options: ["because", "although", "so", "unless"],
      correctIndex: 1,
      feedback: "'Although' shows contrast."
    },
    {
      id: 10,
      question: "He acted quickly, ______ prevented further losses.",
      options: ["because", "although", "which", "unless"],
      correctIndex: 2,
      feedback: "'Which' refers back to the whole previous clause."
    }
  ],

  "Possessive Pronouns": [
    {
      id: 1,
      question: "This decision is ______, not mine.",
      options: ["your", "yours", "you", "yourself"],
      correctIndex: 1,
      feedback: "Possessive pronouns stand alone without a noun."
    },
    {
      id: 2,
      question: "The responsibility is ______ alone.",
      options: ["her", "hers", "she", "herself"],
      correctIndex: 1,
      feedback: "'Hers' replaces 'her responsibility.'"
    },
    {
      id: 3,
      question: "We have completed our part; the rest is ______.",
      options: ["their", "theirs", "them", "themselves"],
      correctIndex: 1,
      feedback: "Independent possessive pronoun needed."
    },
    {
      id: 4,
      question: "That strategy isn't ______; it was suggested by the consultant.",
      options: ["our", "ours", "us", "ourselves"],
      correctIndex: 1,
      feedback: "'Ours' replaces 'our strategy.'"
    },
    {
      id: 5,
      question: "This office used to be ______.",
      options: ["his", "he", "him", "himself"],
      correctIndex: 0,
      feedback: "'His' can function as a possessive pronoun or determiner."
    },
    {
      id: 6,
      question: "The final choice is ______ to make.",
      options: ["your", "yours", "you", "yourself"],
      correctIndex: 1,
      feedback: "'Yours' refers to 'your choice.'"
    },
    {
      id: 7,
      question: "No one should interfere; the decision is ______.",
      options: ["their", "theirs", "them", "themselves"],
      correctIndex: 1,
      feedback: "Possessive pronoun without a noun."
    },
    {
      id: 8,
      question: "That achievement is entirely ______.",
      options: ["her", "hers", "she", "herself"],
      correctIndex: 1,
      feedback: "Emphasizes ownership of an abstract noun."
    },
    {
      id: 9,
      question: "The fault is not ______.",
      options: ["my", "mine", "me", "myself"],
      correctIndex: 1,
      feedback: "'Mine' replaces 'my fault.'"
    },
    {
      id: 10,
      question: "These ideas are ______, not copied.",
      options: ["our", "ours", "us", "ourselves"],
      correctIndex: 1,
      feedback: "Possessive pronoun used independently."
    }
  ],

  "Verb To Be": [
    {
      id: 1,
      question: "The main issue ______ a lack of communication.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "The subject 'issue' is singular, so it takes is."
    },
    {
      id: 2,
      question: "There ______ several reasons for the delay.",
      options: ["is", "was", "are", "has been"],
      correctIndex: 2,
      feedback: "'Reasons' is plural → are."
    },
    {
      id: 3,
      question: "The results of the study ______ surprising.",
      options: ["is", "was", "are", "has been"],
      correctIndex: 2,
      feedback: "Plural subject requires plural form of to be."
    },
    {
      id: 4,
      question: "What ______ the main objective of the project?",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "'Objective' is singular."
    },
    {
      id: 5,
      question: "The team leader, along with her assistants, ______ present.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "The main subject is 'leader,' not 'assistants.'"
    },
    {
      id: 6,
      question: "These figures ______ not accurate.",
      options: ["is", "was", "are", "has been"],
      correctIndex: 2,
      feedback: "'Figures' is plural."
    },
    {
      id: 7,
      question: "The cause of the errors ______ unclear.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "Singular subject → singular verb."
    },
    {
      id: 8,
      question: "There ______ no evidence to support the claim.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "'Evidence' is uncountable and singular."
    },
    {
      id: 9,
      question: "Why ______ the final results delayed?",
      options: ["is", "was", "are", "have been"],
      correctIndex: 1,
      feedback: "Past passive question → was."
    },
    {
      id: 10,
      question: "All the information ______ confidential.",
      options: ["are", "were", "is", "have been"],
      correctIndex: 2,
      feedback: "'Information' is uncountable."
    }
  ],

  "Reported Speech": [
    {
      id: 1,
      question: "She said that she ______ the issue the following day.",
      options: ["will resolve", "would resolve", "resolves", "has resolved"],
      correctIndex: 1,
      feedback: "Future 'will' shifts to 'would' in reported speech."
    },
    {
      id: 2,
      question: "He claimed that he ______ unaware of the changes.",
      options: ["is", "was", "has been", "will be"],
      correctIndex: 1,
      feedback: "Present simple shifts to past simple."
    },
    {
      id: 3,
      question: "They announced that the project ______ completed by June.",
      options: ["is", "will be", "would be", "has been"],
      correctIndex: 2,
      feedback: "Future passive changes to would be."
    },
    {
      id: 4,
      question: "She admitted that she ______ a mistake.",
      options: ["makes", "made", "has made", "had made"],
      correctIndex: 1,
      feedback: "Past simple often remains unchanged when already in the past."
    },
    {
      id: 5,
      question: "He explained that he ______ working remotely.",
      options: ["is", "was", "has been", "will be"],
      correctIndex: 1,
      feedback: "Present continuous shifts to past continuous."
    },
    {
      id: 6,
      question: "The manager stated that the policy ______ under review.",
      options: ["is", "was", "has been", "will be"],
      correctIndex: 1,
      feedback: "Time reference moves back in reported speech."
    },
    {
      id: 7,
      question: "She warned that delays ______ cause further problems.",
      options: ["will", "would", "can", "must"],
      correctIndex: 1,
      feedback: "'Will' becomes 'would' after reporting verbs."
    },
    {
      id: 8,
      question: "He denied that he ______ the document.",
      options: ["signs", "signed", "has signed", "had signed"],
      correctIndex: 1,
      feedback: "Past simple is commonly used after 'deny.'"
    },
    {
      id: 9,
      question: "They confirmed that negotiations ______ ongoing.",
      options: ["are", "were", "have been", "will be"],
      correctIndex: 1,
      feedback: "Present adjective shifts to past."
    },
    {
      id: 10,
      question: "She promised that she ______ more careful.",
      options: ["is", "will be", "would be", "has been"],
      correctIndex: 2,
      feedback: "Promises reported in the past use would."
    }
  ],

  "Adverbs": [
    {
      id: 1,
      question: "She handled the situation ______.",
      options: ["professional", "professionally", "profession", "professionalism"],
      correctIndex: 1,
      feedback: "Adverbs describe verbs; 'professionally' modifies 'handled.'"
    },
    {
      id: 2,
      question: "The system was ______ designed to fail.",
      options: ["poor", "poorly", "bad", "badly"],
      correctIndex: 1,
      feedback: "Adverb needed to modify 'designed.'"
    },
    {
      id: 3,
      question: "He reacted ______ than expected.",
      options: ["calm", "calmer", "calmly", "more calmly"],
      correctIndex: 3,
      feedback: "Comparative adverb form is required."
    },
    {
      id: 4,
      question: "The issue was ______ underestimated.",
      options: ["serious", "seriously", "seriousness", "seriousness"],
      correctIndex: 1,
      feedback: "Adverb modifies the past participle."
    },
    {
      id: 5,
      question: "She spoke ______ to avoid misunderstandings.",
      options: ["clear", "clearly", "clarity", "clearness"],
      correctIndex: 1,
      feedback: "Adverb describes how she spoke."
    },
    {
      id: 6,
      question: "The team worked ______ throughout the night.",
      options: ["intense", "intensely", "intensity", "intensively"],
      correctIndex: 1,
      feedback: "'Intensely' refers to degree, not method."
    },
    {
      id: 7,
      question: "He almost completed the task ______.",
      options: ["successful", "success", "successfully", "successfulness"],
      correctIndex: 2,
      feedback: "Adverb modifies the verb phrase."
    },
    {
      id: 8,
      question: "The plan was ______ executed.",
      options: ["precise", "precision", "precisely", "preciseness"],
      correctIndex: 2,
      feedback: "Adverb needed after passive verb."
    },
    {
      id: 9,
      question: "She responded ______ to the criticism.",
      options: ["defensive", "defensively", "defence", "defended"],
      correctIndex: 1,
      feedback: "Adverb describes manner."
    },
    {
      id: 10,
      question: "The software performs ______ under pressure.",
      options: ["reliable", "reliability", "reliably", "reliableness"],
      correctIndex: 2,
      feedback: "Adverbs describe how something performs."
    }
  ],

  "Past Simple Negative": [
    {
      id: 1,
      question: "They ______ approve the budget last year.",
      options: ["don't", "didn't", "haven't", "weren't"],
      correctIndex: 1,
      feedback: "Past simple negative uses did not + base verb."
    },
    {
      id: 2,
      question: "She ______ attend the meeting due to illness.",
      options: ["doesn't", "didn't", "hasn't", "wasn't"],
      correctIndex: 1,
      feedback: "Past action that did not happen → past simple negative."
    },
    {
      id: 3,
      question: "We ______ receive any feedback after the presentation.",
      options: ["don't", "didn't", "haven't", "weren't"],
      correctIndex: 1,
      feedback: "The main verb remains in base form after didn't."
    },
    {
      id: 4,
      question: "He ______ understand the implications at the time.",
      options: ["doesn't", "didn't", "hasn't", "wasn't"],
      correctIndex: 1,
      feedback: "Negative past simple for mental state in the past."
    },
    {
      id: 5,
      question: "The company ______ meet its targets in 2022.",
      options: ["doesn't", "didn't", "hasn't", "wasn't"],
      correctIndex: 1,
      feedback: "Specific past time expression → past simple negative."
    },
    {
      id: 6,
      question: "They ______ foresee the consequences of their decision.",
      options: ["don't", "didn't", "haven't", "weren't"],
      correctIndex: 1,
      feedback: "'Didn't' is used for all verbs in the past simple negative."
    },
    {
      id: 7,
      question: "She ______ feel supported by management.",
      options: ["doesn't", "didn't", "hasn't", "wasn't"],
      correctIndex: 1,
      feedback: "'Feel' is a main verb → use didn't."
    },
    {
      id: 8,
      question: "We ______ expect such strong resistance.",
      options: ["don't", "didn't", "haven't", "weren't"],
      correctIndex: 1,
      feedback: "Completed past expectation that did not happen."
    },
    {
      id: 9,
      question: "The report ______ include all the necessary data.",
      options: ["doesn't", "didn't", "hasn't", "wasn't"],
      correctIndex: 1,
      feedback: "Base verb 'include' follows didn't."
    },
    {
      id: 10,
      question: "I ______ realize the urgency of the situation.",
      options: ["don't", "didn't", "haven't", "wasn't"],
      correctIndex: 1,
      feedback: "Past realization that did not occur."
    }
  ],

  "Comparative Adverbs": [
    {
      id: 1,
      question: "She completed the task ______ than expected.",
      options: ["efficient", "more efficient", "efficiently", "more efficiently"],
      correctIndex: 3,
      feedback: "Comparative adverb form is required."
    },
    {
      id: 2,
      question: "The team responded ______ this time.",
      options: ["quick", "quicker", "quickly", "more quickly"],
      correctIndex: 3,
      feedback: "'More quickly' is the correct comparative adverb."
    },
    {
      id: 3,
      question: "He handled the negotiation ______ than his predecessor.",
      options: ["skillful", "more skillful", "skillfully", "more skillfully"],
      correctIndex: 3,
      feedback: "Adverbs modify verbs; comparative form needed."
    },
    {
      id: 4,
      question: "The system now operates ______.",
      options: ["smooth", "smoother", "smoothly", "more smoothly"],
      correctIndex: 3,
      feedback: "Comparison is implied with 'now.'"
    },
    {
      id: 5,
      question: "She explained the process ______ than before.",
      options: ["clear", "clearer", "clearly", "more clearly"],
      correctIndex: 3,
      feedback: "Comparative adverb for manner."
    },
    {
      id: 6,
      question: "This method works ______ than the previous one.",
      options: ["effective", "more effective", "effectively", "more effectively"],
      correctIndex: 3,
      feedback: "Adverb + comparative structure."
    },
    {
      id: 7,
      question: "He reacted ______ than anyone anticipated.",
      options: ["calm", "calmer", "calmly", "more calmly"],
      correctIndex: 3,
      feedback: "Comparative adverb required."
    },
    {
      id: 8,
      question: "The project progressed ______ after the changes.",
      options: ["fast", "faster", "quickly", "more quickly"],
      correctIndex: 3,
      feedback: "'More quickly' emphasizes improvement."
    },
    {
      id: 9,
      question: "She spoke ______ during the second interview.",
      options: ["confident", "more confident", "confidently", "more confidently"],
      correctIndex: 3,
      feedback: "Comparative adverb of manner."
    },
    {
      id: 10,
      question: "The team collaborated ______ than ever.",
      options: ["close", "closer", "closely", "more closely"],
      correctIndex: 3,
      feedback: "Adverb modifying 'collaborated.'"
    }
  ],

  "Present Simple Negative": [
    {
      id: 1,
      question: "He ______ agree with the proposed solution.",
      options: ["don't", "doesn't", "isn't", "hasn't"],
      correctIndex: 1,
      feedback: "Third person singular → doesn't + base verb."
    },
    {
      id: 2,
      question: "They ______ understand the requirements fully.",
      options: ["don't", "doesn't", "aren't", "haven't"],
      correctIndex: 0,
      feedback: "Plural subject → don't."
    },
    {
      id: 3,
      question: "She ______ trust the data provided.",
      options: ["don't", "doesn't", "isn't", "hasn't"],
      correctIndex: 1,
      feedback: "Present simple negative for third person singular."
    },
    {
      id: 4,
      question: "We ______ see any immediate benefits.",
      options: ["don't", "doesn't", "aren't", "haven't"],
      correctIndex: 0,
      feedback: "'We' takes don't."
    },
    {
      id: 5,
      question: "The report ______ address all the issues.",
      options: ["don't", "doesn't", "isn't", "hasn't"],
      correctIndex: 1,
      feedback: "'Report' is third person singular."
    },
    {
      id: 6,
      question: "I ______ believe this approach will work.",
      options: ["don't", "doesn't", "aren't", "haven't"],
      correctIndex: 0,
      feedback: "First person singular uses don't."
    },
    {
      id: 7,
      question: "The system ______ function as intended.",
      options: ["don't", "doesn't", "isn't", "hasn't"],
      correctIndex: 1,
      feedback: "Third person singular → doesn't."
    },
    {
      id: 8,
      question: "Employees ______ receive enough training.",
      options: ["don't", "doesn't", "aren't", "haven't"],
      correctIndex: 0,
      feedback: "Plural subject."
    },
    {
      id: 9,
      question: "She ______ acknowledge the risks involved.",
      options: ["don't", "doesn't", "isn't", "hasn't"],
      correctIndex: 1,
      feedback: "Negative present simple."
    },
    {
      id: 10,
      question: "The proposal ______ meet our expectations.",
      options: ["don't", "doesn't", "isn't", "hasn't"],
      correctIndex: 1,
      feedback: "Correct auxiliary for third person singular."
    }
  ],

  "Present Simple": [
    {
      id: 1,
      question: "She usually ______ the final decision.",
      options: ["make", "makes", "is making", "has made"],
      correctIndex: 1,
      feedback: "Third person singular in the present simple takes -s."
    },
    {
      id: 2,
      question: "The company ______ its goals every quarter.",
      options: ["review", "reviews", "is reviewing", "has reviewed"],
      correctIndex: 1,
      feedback: "Habitual actions use the present simple."
    },
    {
      id: 3,
      question: "This software ______ real-time data.",
      options: ["provide", "provides", "is providing", "has provided"],
      correctIndex: 1,
      feedback: "General facts are expressed in the present simple."
    },
    {
      id: 4,
      question: "He ______ in charge of risk management.",
      options: ["is", "are", "was", "has been"],
      correctIndex: 0,
      feedback: "Present state → present simple of to be."
    },
    {
      id: 5,
      question: "We often ______ market trends before investing.",
      options: ["analyze", "analyzes", "are analyzing", "have analyzed"],
      correctIndex: 0,
      feedback: "Plural subject → base form."
    },
    {
      id: 6,
      question: "The policy clearly ______ employee responsibilities.",
      options: ["define", "defines", "is defining", "has defined"],
      correctIndex: 1,
      feedback: "Third person singular rule."
    },
    {
      id: 7,
      question: "Meetings usually ______ longer than expected.",
      options: ["last", "lasts", "are lasting", "have lasted"],
      correctIndex: 0,
      feedback: "'Meetings' is plural."
    },
    {
      id: 8,
      question: "The system automatically ______ updates.",
      options: ["install", "installs", "is installing", "has installed"],
      correctIndex: 1,
      feedback: "General behavior of a system."
    },
    {
      id: 9,
      question: "She rarely ______ her decisions.",
      options: ["change", "changes", "is changing", "has changed"],
      correctIndex: 1,
      feedback: "Frequency adverbs with present simple."
    },
    {
      id: 10,
      question: "The process ______ efficiency across departments.",
      options: ["improve", "improves", "is improving", "has improved"],
      correctIndex: 1,
      feedback: "General statement."
    }
  ],

  "Wish Clauses": [
    {
      id: 1,
      question: "I wish I ______ more experience in this field.",
      options: ["have", "had", "would have", "have had"],
      correctIndex: 1,
      feedback: "Present regret → wish + past simple."
    },
    {
      id: 2,
      question: "She wishes the meeting ______ postponed.",
      options: ["is", "was", "were", "had been"],
      correctIndex: 3,
      feedback: "Regret about a past event → wish + past perfect."
    },
    {
      id: 3,
      question: "I wish you ______ interrupting me all the time.",
      options: ["don't", "didn't", "wouldn't", "hadn't"],
      correctIndex: 2,
      feedback: "Wish + would expresses annoyance about repeated behavior."
    },
    {
      id: 4,
      question: "They wish they ______ the contract more carefully.",
      options: ["read", "had read", "would read", "have read"],
      correctIndex: 1,
      feedback: "Past regret → past perfect."
    },
    {
      id: 5,
      question: "He wishes he ______ so impulsive.",
      options: ["isn't", "wasn't", "hadn't been", "wouldn't be"],
      correctIndex: 2,
      feedback: "Regret about a past state."
    },
    {
      id: 6,
      question: "I wish the situation ______ different now.",
      options: ["is", "was", "were", "had been"],
      correctIndex: 2,
      feedback: "Formal hypothetical present → were."
    },
    {
      id: 7,
      question: "She wishes her colleagues ______ more supportive.",
      options: ["are", "were", "have been", "had been"],
      correctIndex: 1,
      feedback: "Present dissatisfaction → past simple form."
    },
    {
      id: 8,
      question: "We wish the results ______ clearer at the time.",
      options: ["are", "were", "have been", "had been"],
      correctIndex: 3,
      feedback: "Regret about the past."
    },
    {
      id: 9,
      question: "I wish I ______ explain it better yesterday.",
      options: ["can", "could", "have been able to", "had been able to"],
      correctIndex: 3,
      feedback: "Ability in the past → had been able to."
    },
    {
      id: 10,
      question: "She wishes people ______ judge too quickly.",
      options: ["don't", "didn't", "wouldn't", "hadn't"],
      correctIndex: 2,
      feedback: "Complaint about ongoing behavior."
    }
  ],

  "Future Perfect": [
    {
      id: 1,
      question: "By next Friday, we ______ the project.",
      options: ["complete", "will complete", "will have completed", "have completed"],
      correctIndex: 2,
      feedback: "Future perfect → action completed before a future point."
    },
    {
      id: 2,
      question: "She ______ all the reports by the time the meeting starts.",
      options: ["finishes", "will finish", "will have finished", "has finished"],
      correctIndex: 2,
      feedback: "Emphasis on completion before a deadline."
    },
    {
      id: 3,
      question: "By 2030, the company ______ its global expansion.",
      options: ["achieves", "will achieve", "will have achieved", "has achieved"],
      correctIndex: 2,
      feedback: "Future reference with completed action."
    },
    {
      id: 4,
      question: "They ______ the issue by the end of the day.",
      options: ["resolve", "will resolve", "will have resolved", "have resolved"],
      correctIndex: 2,
      feedback: "Deadline in the future → future perfect."
    },
    {
      id: 5,
      question: "How many clients ______ we acquired by then?",
      options: ["do", "will", "will have", "have"],
      correctIndex: 2,
      feedback: "Question form of the future perfect."
    },
    {
      id: 6,
      question: "By the time he arrives, we ______ the presentation.",
      options: ["finish", "will finish", "will have finished", "have finished"],
      correctIndex: 2,
      feedback: "Two future points → earlier one in future perfect."
    },
    {
      id: 7,
      question: "She ______ her degree before starting the job.",
      options: ["completes", "will complete", "will have completed", "has completed"],
      correctIndex: 2,
      feedback: "Completion before another future action."
    },
    {
      id: 8,
      question: "By midnight, they ______ for over twelve hours.",
      options: ["work", "will work", "will have worked", "have worked"],
      correctIndex: 2,
      feedback: "Duration up to a future moment."
    },
    {
      id: 9,
      question: "We ______ all preparations by tomorrow afternoon.",
      options: ["do", "will do", "will have done", "have done"],
      correctIndex: 2,
      feedback: "Action finished before a future time."
    },
    {
      id: 10,
      question: "By the end of the year, profits ______ significantly.",
      options: ["increase", "will increase", "will have increased", "have increased"],
      correctIndex: 2,
      feedback: "Future perfect emphasizes the result at a future time."
    }
  ],

  "Modal Verbs": [
    {
      id: 1,
      question: "You ______ submit the report by Friday; it's mandatory.",
      options: ["might", "could", "must", "would"],
      correctIndex: 2,
      feedback: "'Must' expresses obligation."
    },
    {
      id: 2,
      question: "She ______ be at the office; the lights are still on.",
      options: ["can't", "must", "shouldn't", "wouldn't"],
      correctIndex: 1,
      feedback: "'Must' expresses strong logical deduction."
    },
    {
      id: 3,
      question: "You ______ have informed us earlier; this caused delays.",
      options: ["could", "must", "should", "might"],
      correctIndex: 2,
      feedback: "'Should have' expresses criticism about a past action."
    },
    {
      id: 4,
      question: "He ______ attend the meeting due to a prior commitment.",
      options: ["can't", "shouldn't", "mustn't", "wouldn't"],
      correctIndex: 0,
      feedback: "'Can't' expresses inability."
    },
    {
      id: 5,
      question: "We ______ consider alternative solutions.",
      options: ["mustn't", "should", "can't", "wouldn't"],
      correctIndex: 1,
      feedback: "'Should' is used for advice or recommendation."
    },
    {
      id: 6,
      question: "They ______ have misunderstood the instructions.",
      options: ["must", "could", "can't", "should"],
      correctIndex: 1,
      feedback: "'Could have' expresses possibility in the past."
    },
    {
      id: 7,
      question: "You ______ park here; it's prohibited.",
      options: ["don't have to", "shouldn't", "mustn't", "can't have"],
      correctIndex: 2,
      feedback: "'Mustn't' expresses prohibition."
    },
    {
      id: 8,
      question: "She ______ be promoted next year.",
      options: ["must", "should", "might", "can't"],
      correctIndex: 2,
      feedback: "'Might' expresses uncertainty."
    },
    {
      id: 9,
      question: "He ______ finished the task by now.",
      options: ["must have", "should have", "could have", "might have"],
      correctIndex: 0,
      feedback: "Logical deduction about a past event."
    },
    {
      id: 10,
      question: "You ______ worry so much; everything is under control.",
      options: ["mustn't", "don't have to", "shouldn't", "can't"],
      correctIndex: 2,
      feedback: "'Shouldn't' is used to give advice."
    }
  ],

  "Comparatives": [
    {
      id: 1,
      question: "This solution is ______ than the previous one.",
      options: ["effective", "more effective", "most effective", "effectiveness"],
      correctIndex: 1,
      feedback: "Long adjectives form comparatives with 'more.'"
    },
    {
      id: 2,
      question: "Her presentation was ______ than expected.",
      options: ["clear", "clearer", "clearest", "clearly"],
      correctIndex: 1,
      feedback: "Comparative form of a short adjective."
    },
    {
      id: 3,
      question: "The new system is ______ efficient.",
      options: ["very", "much", "more", "most"],
      correctIndex: 2,
      feedback: "Comparative adjective structure."
    },
    {
      id: 4,
      question: "This approach is ______ risky than before.",
      options: ["little", "less", "least", "fewer"],
      correctIndex: 1,
      feedback: "'Less' is used with adjectives."
    },
    {
      id: 5,
      question: "He is ______ experienced than his colleague.",
      options: ["much", "more", "most", "very"],
      correctIndex: 1,
      feedback: "Comparative adjective form."
    },
    {
      id: 6,
      question: "The results are ______ promising than last year's.",
      options: ["very", "more", "most", "much"],
      correctIndex: 1,
      feedback: "'More' forms the comparative."
    },
    {
      id: 7,
      question: "This task is ______ difficult than it seems.",
      options: ["more", "most", "very", "much"],
      correctIndex: 0,
      feedback: "Correct comparative structure."
    },
    {
      id: 8,
      question: "Her response was ______ direct than mine.",
      options: ["much", "more", "most", "very"],
      correctIndex: 1,
      feedback: "Comparative adjective."
    },
    {
      id: 9,
      question: "This option is ______ expensive than the alternative.",
      options: ["less", "least", "fewer", "few"],
      correctIndex: 0,
      feedback: "'Less' is used with uncountable adjectives."
    },
    {
      id: 10,
      question: "The second proposal is ______ convincing.",
      options: ["very", "more", "most", "much"],
      correctIndex: 1,
      feedback: "Comparative form needed."
    }
  ],

  "Prepositions": [
    {
      id: 1,
      question: "She is responsible ______ overseeing the project.",
      options: ["of", "for", "to", "with"],
      correctIndex: 1,
      feedback: "Fixed expression: responsible for."
    },
    {
      id: 2,
      question: "The decision was made ______ accordance with company policy.",
      options: ["in", "on", "at", "by"],
      correctIndex: 0,
      feedback: "Fixed phrase: in accordance with."
    },
    {
      id: 3,
      question: "They succeeded ______ completing the task.",
      options: ["in", "on", "at", "for"],
      correctIndex: 0,
      feedback: "Verb + preposition collocation: succeed in."
    },
    {
      id: 4,
      question: "He apologized ______ the delay.",
      options: ["of", "for", "to", "with"],
      correctIndex: 1,
      feedback: "Apologize for something."
    },
    {
      id: 5,
      question: "The report focuses ______ long-term strategy.",
      options: ["in", "at", "on", "with"],
      correctIndex: 2,
      feedback: "Focus on is the correct collocation."
    },
    {
      id: 6,
      question: "She is highly skilled ______ negotiation.",
      options: ["at", "in", "for", "with"],
      correctIndex: 0,
      feedback: "Skilled at + activity."
    },
    {
      id: 7,
      question: "The company invested heavily ______ new technology.",
      options: ["in", "on", "at", "with"],
      correctIndex: 0,
      feedback: "Invest in is the correct phrase."
    },
    {
      id: 8,
      question: "He objected ______ the proposed changes.",
      options: ["at", "on", "to", "with"],
      correctIndex: 2,
      feedback: "Object to is a fixed structure."
    },
    {
      id: 9,
      question: "The agreement came ______ effect immediately.",
      options: ["into", "in", "at", "to"],
      correctIndex: 0,
      feedback: "Fixed expression: come into effect."
    },
    {
      id: 10,
      question: "She insisted ______ paying for the meal.",
      options: ["on", "in", "at", "with"],
      correctIndex: 0,
      feedback: "Insist on + gerund."
    }
  ],

  "Quantifiers": [
    {
      id: 1,
      question: "There are ______ people in the conference room than expected.",
      options: ["much", "many", "few", "little"],
      correctIndex: 1,
      feedback: "Many is used with countable nouns."
    },
    {
      id: 2,
      question: "I have ______ interest in attending the meeting.",
      options: ["few", "a few", "little", "much"],
      correctIndex: 2,
      feedback: "Little is used with uncountable nouns to express small amount."
    },
    {
      id: 3,
      question: "We have ______ evidence to support the claim.",
      options: ["many", "much", "few", "little"],
      correctIndex: 1,
      feedback: "Much is used with uncountable nouns."
    },
    {
      id: 4,
      question: "There are only ______ candidates suitable for the position.",
      options: ["little", "much", "few", "a little"],
      correctIndex: 2,
      feedback: "Few expresses a small number of countable items."
    },
    {
      id: 5,
      question: "She brought ______ documents to the meeting.",
      options: ["many", "much", "a few", "little"],
      correctIndex: 2,
      feedback: "A few expresses a small but sufficient number."
    },
    {
      id: 6,
      question: "We have ______ time to finalize the project.",
      options: ["many", "much", "a few", "several"],
      correctIndex: 1,
      feedback: "Much is used with uncountable nouns like 'time.'"
    },
    {
      id: 7,
      question: "There were ______ complaints about the new system.",
      options: ["little", "few", "a few", "many"],
      correctIndex: 3,
      feedback: "Many is used with countable plural nouns."
    },
    {
      id: 8,
      question: "He has ______ knowledge of French law.",
      options: ["little", "few", "a little", "many"],
      correctIndex: 2,
      feedback: "A little expresses a small but positive amount with uncountable nouns."
    },
    {
      id: 9,
      question: "We have ______ options to choose from.",
      options: ["much", "many", "little", "few"],
      correctIndex: 1,
      feedback: "Countable plural noun → many."
    },
    {
      id: 10,
      question: "Only ______ students attended the optional seminar.",
      options: ["much", "little", "a few", "few"],
      correctIndex: 3,
      feedback: "Few emphasizes small number (negative nuance)."
    }
  ]
};

// Get questions for a specific theme
export const getThemeQuestions = (themeName) => {
  // Try exact match first
  if (themeQuestions[themeName]) {
    return themeQuestions[themeName].map(q => ({
      ...q,
      ...shuffleOptions(q)
    }));
  }
  
  // Try partial match
  const normalizedName = themeName.toLowerCase();
  for (const [key, questions] of Object.entries(themeQuestions)) {
    if (key.toLowerCase().includes(normalizedName) || normalizedName.includes(key.toLowerCase())) {
      return questions.map(q => ({
        ...q,
        ...shuffleOptions(q)
      }));
    }
  }
  
  return null;
};

// Shuffle options
const shuffleOptions = (question) => {
  const correctAnswer = question.options[question.correctIndex];
  const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
  const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
  return {
    options: shuffledOptions,
    correctIndex: newCorrectIndex
  };
};

// Get available themes
export const getAvailableThemes = () => Object.keys(themeQuestions);
