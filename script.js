const quizData = [
    {
        title: "I. 单词词组中译英",
        instruction: "Translate the following words or phrases into English.",
        hasExplanation: false,
        questions: [
            { id: 1, parts: ["新闻记者 n.", { answer: "journalist" }] },
            { id: 2, parts: ["演讲者 n.", { answer: "presenter" }] },
            { id: 3, parts: ["骑自行车的人 n.", { answer: "cyclist" }] },
            { id: 4, parts: ["装饰者 n.", { answer: "decorator" }] },
            { id: 5, parts: ["接待员 n.", { answer: "receptionist" }] },
            { id: 6, parts: ["非凡的，引人注目的 adj.", { answer: "remarkable" }] },
            { id: 7, parts: ["跳水，潜水 v.", { answer: "dive" }] },
            { id: 8, parts: ["先进的数学体系", { answer: "an advanced system of mathematics" }] },
            { id: 9, parts: ["成为……的中心", { answer: "be the center of" }] },
            { id: 10, parts: ["（一个）地方官员", { answer: "a local governor" }] }
        ]
    },
    {
        title: "II. 首字母填空",
        instruction: "Fill in the blanks with the correct word starting with the given letter.",
        hasExplanation: true,
        questions: [
            {
                id: 1,
                parts: [
                    "Mount Everest, the highest p",
                    { answer: "eak", hint: "" },
                    " in the Himalayas, rises more than 8,800 meters above sea level. Because of the freezing air and thin oxygen, no one can live there year-round. However, small climbing camps are i",
                    { answer: "nhabited", hint: "" },
                    " by climbers during the summer."
                ],
                explanation: "<strong>peak</strong>: 山峰，顶峰。<br><strong>inhabited</strong>: 居住于，栖息于。"
            },
            {
                id: 2,
                parts: [
                    "Norway protects its natural r",
                    { answer: "esources", hint: "" },
                    ", like forests and underground oil. As a result, its rivers have some of the p",
                    { answer: "urest", hint: "" },
                    " water in the world, which is clean enough to drink directly."
                ],
                explanation: "<strong>resources</strong>: 资源。<br><strong>purest</strong>: 最纯净的 (pure 的最高级)。"
            },
            {
                id: 3,
                parts: [
                    "A family in Britain found a box of old gold coins when cleaning their attic. The discovery of the t",
                    { answer: "reasure(s)", hint: "" },
                    " quickly attracted many c",
                    { answer: "ollectors", hint: "" },
                    ", who hoped to add the rare items to their private collections."
                ],
                explanation: "<strong>treasure(s)</strong>: 宝藏，财富。<br><strong>collectors</strong>: 收藏家。"
            },
            {
                id: 4,
                parts: [
                    "The Potala Palace(布达拉宫) in Tibet is an ancient t",
                    { answer: "emple", hint: "" },
                    " where monks pray. Many locals believe these prayers bring h",
                    { answer: "armony", hint: "" },
                    ", helping people and nature live together in balance."
                ],
                explanation: "<strong>temple</strong>: 寺庙。<br><strong>harmony</strong>: 和谐，融洽。"
            },
            {
                id: 5,
                parts: [
                    "The new Chinese game Black Myth: Zhong Kui is based on old myths. It uses l",
                    { answer: "egendary", hint: "" },
                    " stories about ghosts and gods, showing how these tales still e",
                    { answer: "xist", hint: "" },
                    " and influence culture today."
                ],
                explanation: "<strong>legendary</strong>: 传说的，传奇的。<br><strong>exist</strong>: 存在。"
            },
            {
                id: 6,
                parts: [
                    "The ancient Egyptian c",
                    { answer: "ivilization", hint: "" },
                    " is famous for its pyramids, hieroglyphs, and complex religion. For over 3,000 years, different regions of Egypt were r",
                    { answer: "uled", hint: "" },
                    " by pharaohs, who were seen as both kings and gods."
                ],
                explanation: "<strong>civilization</strong>: 文明。<br><strong>ruled</strong>: 统治 (rule 的过去式)。"
            },
            {
                id: 7,
                parts: [
                    "The Lakota Sioux tribe depended on bison for survival. When g",
                    { answer: "reedy", hint: "" },
                    " settlers hunted the bison almost to extinction, the tribe's c",
                    { answer: "hief", hint: "" },
                    " led his people to fight for their land."
                ],
                explanation: "<strong>greedy</strong>: 贪婪的。<br><strong>chief</strong>: 首领，酋长。"
            }
        ]
    },
    {
        title: "III. 选词组填空",
        instruction: "Fill in the blanks with the correct phrases. Change the form if necessary.",
        hasExplanation: true,
        questions: [
            {
                id: 1,
                parts: [
                    "Visitors at an Australian zoo were shocked to see a huge snake",
                    { answer: "crawling down", hint: "" },
                    " a tree. Frightened by the sight, the children quickly moved back."
                ],
                explanation: "<strong>crawl down</strong>: 爬下。<br>看到蛇正在爬下树，用现在分词作宾语补足语。"
            },
            {
                id: 2,
                parts: [
                    "Last July, a number of young European explorers",
                    { answer: "were on an expedition", hint: "" },
                    " in the Amazon. Their goal for the school project was to take photos of rare animals."
                ],
                explanation: "<strong>be on an expedition</strong>: 在探险中。<br>主语是 a number of explorers (复数)，时间是 last July (过去时)。"
            },
            {
                id: 3,
                parts: [
                    "In the movie's most exciting scene, the hero had to stop the train. In order to destroy a section of the railway, he jumped onto the tracks and",
                    { answer: "blew a bomb up", hint: "" },
                    " with only seconds to spare."
                ],
                explanation: "<strong>blow a bomb up</strong>: 引爆炸弹。<br>与 jumped 并列，用过去式 blew。"
            },
            {
                id: 4,
                parts: [
                    "Some tabloid(小报) reporters",
                    { answer: "make up stories", hint: "" },
                    " about celebrities’ private lives just to get more readers. As a result, these untrue stories often hurt the celebrities' feelings."
                ],
                explanation: "<strong>make up stories</strong>: 编造故事。<br>often 提示一般现在时。"
            },
            {
                id: 5,
                parts: [
                    { answer: "Thanks to", hint: "" },
                    " the “Yunlong Lake Water Transfer Project,” over 100,000 residents in western Xuzhou now have a reliable supply of clean drinking water."
                ],
                explanation: "<strong>Thanks to</strong>: 多亏，由于。<br>句首首字母大写。"
            },
            {
                id: 6,
                parts: [
                    "When archaeologists were digging in Shaanxi last year, a set of well-preserved bronze vessels",
                    { answer: "caught their eye", hint: "" },
                    ". These vessels, dating back to the Zhou Dynasty, helped experts understand ancient ceremonial culture."
                ],
                explanation: "<strong>catch one's eye</strong>: 吸引某人的目光。<br>过去发生的事情，用 caught。"
            }
        ]
    },
    {
        title: "IV. 根据课文内容填空",
        instruction: "Fill in the blanks based on the text.",
        hasExplanation: false,
        questions: [
            {
                id: 1,
                parts: [
                    "In the summer of 1848, in Guatemala, a man called Ambrosio Tut went out into the jungle,",
                    { answer: "as he did", hint: "" },
                    " almost every day."
                ],
            },
            {
                id: 2,
                parts: [
                    { answer: "On this particular day", hint: "" },
                    ", he got to the top of one tree and something",
                    { answer: "caught his eye", hint: "" },
                    "."
                ],
            },
            {
                id: 3,
                parts: [
                    "People are always looking for",
                    { answer: "lost cities", hint: "" },
                    " and",
                    { answer: "occasionally", hint: "" },
                    " one is found."
                ],
            },
            {
                id: 4,
                parts: [
                    "But perhaps some of the places people look for never",
                    { answer: "existed", hint: "" },
                    " -",
                    { answer: "or did they", hint: "" },
                    "?"
                ],
            },
            {
                id: 5,
                parts: [
                    "El Dorado is a",
                    { answer: "legend", hint: "" },
                    " that began in 1537, when Spanish",
                    { answer: "explorers", hint: "" },
                    " found the Muisca people in the mountains of",
                    { answer: "what is now", hint: "" },
                    " Colombia."
                ],
            }
        ]
    },
    {
        title: "V. Grammar",
        instruction: "Choose the correct answer or complete the sentences.",
        hasExplanation: true,
        questions: [
            {
                id: "a.1",
                parts: [
                    "They",
                    { answer: "B", hint: "" },
                    "in the forest for two days before they found the lost child.\n\nA. searched\nB. had searched\nC. would search\nD. have searched"
                ],
                explanation: "<strong>Past Perfect (过去完成时)</strong><br>在过去动作 (found) 之前持续了两天，强调过去的过去。"
            },
            {
                id: "a.2",
                parts: [
                    "By the time you finished reading this book, they",
                    { answer: "D", hint: "" },
                    "more than three books.\n\nA. read\nB. have read\nC. were reading\nD. had read"
                ],
                explanation: "<strong>Past Perfect (过去完成时)</strong><br>By the time + 过去时，主句常用过去完成时。"
            },
            {
                id: "a.3",
                parts: [
                    "When he",
                    { answer: "B", hint: "" },
                    "the top of the mountain, the sun _______.\n\nA. reached; set\nB. reached; had set\nC. would reach; had set\nD. would reach; set"
                ],
                explanation: "<strong>Simple Past & Past Perfect</strong><br>当他到达 (reached) 时，太阳已经落山了 (had set)。"
            },
            {
                id: "a.4",
                parts: [
                    "She",
                    { answer: "D", hint: "" },
                    "her keys in the office so she _______ to walk all the way home.\n\nA. left; has to\nB. has left; had to\nC. has left; has to\nD. had left; had to"
                ],
                explanation: "<strong>Past Perfect & Simple Past</strong><br>丢钥匙 (had left) 发生在不得不走路 (had to) 之前。"
            },
            {
                id: "a.5",
                parts: [
                    "The film",
                    { answer: "D", hint: "" },
                    "for ten minutes when I arrived at the cinema.\n\nA. will have started\nB. have already been on\nC. started\nD. had already been on"
                ],
                explanation: "<strong>Past Perfect (过去完成时)</strong><br>到达之前电影已经开始并持续了十分钟。"
            },
            {
                id: "a.6",
                parts: [
                    "My brother",
                    { answer: "D", hint: "" },
                    "several English novels since he _______ fourteen years old.\n\nA. had read; is\nB. had read; was\nC. has read; is\nD. has read; was"
                ],
                explanation: "<strong>Present Perfect (现在完成时)</strong><br>Since 引导的时间状语从句，主句用现在完成时。Key provided: D."
            },
            {
                id: "b.1",
                parts: [
                    "By the end of last week, we",
                    { answer: "had completed", hint: "complete" },
                    " the project, so the manager",
                    { answer: "was", hint: "be" },
                    " very happy."
                ],
                explanation: "<strong>Past Perfect & Simple Past</strong><br>By the end of last week 提示过去完成时。"
            },
            {
                id: "b.2",
                parts: [
                    "She",
                    { answer: "felt", hint: "feel" },
                    " much better after she",
                    { answer: "had taken", hint: "take" },
                    " the medicine."
                ],
                explanation: "<strong>Simple Past & Past Perfect</strong><br>After 引导的从句用过去完成时 (had taken)，主句用过去时 (felt)。"
            },
            {
                id: "b.3",
                parts: [
                    "Tom",
                    { answer: "told", hint: "tell" },
                    " me he",
                    { answer: "had read", hint: "read" },
                    " the book twice."
                ],
                explanation: "<strong>Simple Past & Past Perfect</strong><br>间接引语，told 是过去时，从句中读过书发生在说之前，用过去完成时。"
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const quizContainer = document.getElementById('quiz-container');
    const passwordInput = document.getElementById('password-input');
    const loginButton = document.getElementById('login-button');
    const errorMessage = document.getElementById('error-message');

    function checkPassword() {
        if (passwordInput.value === '1208') {
            loginContainer.style.display = 'none';
            quizContainer.style.display = 'block';
            initQuiz();
        } else {
            errorMessage.style.display = 'block';
            passwordInput.value = '';
        }
    }

    loginButton.addEventListener('click', checkPassword);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPassword();
    });
});

function initQuiz() {
    const quizContainer = document.getElementById('quiz-container');

    quizData.forEach((section, sectionIndex) => {
        // Create Section Title
        const sectionTitle = document.createElement('div');
        sectionTitle.className = 'section-title';
        sectionTitle.textContent = section.title;
        quizContainer.appendChild(sectionTitle);

        // Create Instruction
        if (section.instruction) {
            const instruction = document.createElement('p');
            instruction.style.marginBottom = '1rem';
            instruction.style.color = 'var(--text-secondary)';
            instruction.textContent = section.instruction;
            quizContainer.appendChild(instruction);
        }

        // Create Questions
        section.questions.forEach((q, qIndex) => {
            const card = document.createElement('div');
            card.className = 'question-card';
            card.style.animationDelay = `${(sectionIndex * 5 + qIndex) * 0.05}s`;

            // Header with number and text
            const header = document.createElement('div');
            header.className = 'question-header';

            const number = document.createElement('div');
            number.className = 'question-number';
            number.textContent = q.id;

            // Only add click handler and title if explanation exists and section allows it
            if (section.hasExplanation && q.explanation) {
                number.title = "Click to see explanation";
                number.style.cursor = "pointer";
            } else {
                number.title = "";
                number.style.cursor = "default";
            }

            const textContainer = document.createElement('div');
            textContainer.className = 'question-text';

            q.parts.forEach(part => {
                if (typeof part === 'string') {
                    textContainer.appendChild(document.createTextNode(part));
                } else {
                    const blank = document.createElement('span');
                    blank.className = 'blank';
                    blank.textContent = '_______'; // Initial empty state
                    blank.title = "Click to reveal answer";

                    blank.addEventListener('click', function () {
                        if (this.classList.contains('revealed')) {
                            this.textContent = '_______';
                            this.classList.remove('revealed');
                        } else {
                            this.textContent = part.answer;
                            this.classList.add('revealed');
                        }
                    });

                    textContainer.appendChild(blank);

                    // Add the hint after the blank if it exists
                    if (part.hint) {
                        const hintSpan = document.createElement('span');
                        hintSpan.className = 'hint-text';
                        hintSpan.textContent = ` (${part.hint}) `;
                        textContainer.appendChild(hintSpan);
                    }
                }
            });

            header.appendChild(number);
            header.appendChild(textContainer);
            card.appendChild(header);

            // Explanation section
            if (section.hasExplanation && q.explanation) {
                const explanation = document.createElement('div');
                explanation.className = 'explanation';
                explanation.innerHTML = q.explanation;
                card.appendChild(explanation);

                // Toggle explanation on number click
                number.addEventListener('click', () => {
                    const isVisible = explanation.classList.contains('visible');
                    if (isVisible) {
                        explanation.classList.remove('visible');
                        number.classList.remove('active');
                    } else {
                        explanation.classList.add('visible');
                        number.classList.add('active');
                    }
                });
            }

            quizContainer.appendChild(card);
        });
    });
}
