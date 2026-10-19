(function () {
  var CHK = ['Introduction перефразована (не копія завдання), є часовий проміжок', 'Overview: масштаб + характер + зони + тиха категорія, без назв об’єктів', 'Body 1 = найбільші зміни, Body 2 = другорядні + «без змін»', 'Якір місця в кожному реченні (to the east of …, in the north-west …)', 'Було → стало в одному реченні; різні дієслова зміни, жодне більше ніж двічі', 'Past simple; жодного was became; жодних причин і думок', 'Обсяг: 160–175 слів (мінімум 150)'];
  window.LESSON = {
    id: 'mp-08-full-response',
    module: 'Maps',
    title: 'Final Task · Повна відповідь самостійно',
    subtitle: 'Maps · Introduction + Overview + Body 1 + Body 2 на трьох картах. Три завдання з різним рівнем підтримки, таймер 20 хвилин.',
    vocab: ['intro', 'overview', 'anchors', 'changes', 'templates', 'traps'],

    intro: [
      { type: 'rule', title: 'План на 20 хвилин', html:
        '<ol style="margin-left:20px"><li><b>3 хв — читання й нотатки</b>: скільки років між картами? Де північ? Що було → що стало? Які 2–3 найбільші зміни? Що лишилось без змін?</li>' +
        '<li><b>14 хв — письмо</b>: Introduction (1 речення) → Overview (1–2 речення) → Body 1 (найбільші зміни) → Body 2 (решта + без змін).</li>' +
        '<li><b>3 хв — перевірка</b>: кожен напрямок має якір? «was became» десь? Одне дієслово зміни більше ніж двічі? Є фраза «без змін»? Обсяг: 160–175 слів, мінімум 150.</li></ol>' +
        '<p class="small" style="margin-top:8px">Три завдання: перше з підказками, друге з однією підказкою, третє як на іспиті. Словник доступний у будь-який момент (кнопка 📚). Моделі відкриваються після того, як ти напишеш власну відповідь.</p>' }
    ],

    rounds: [
    { label: 'Завдання 1', sub: 'із підказками', graph: 'sb',
      lead: 'Центр прибережного міста, 1995 і 2025. Це найскладніша карта: багато змін. Підказки до кожного абзацу відкриті.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Seaborne town centre, 1995 and 2025', minutes: 20, minWords: 150, target: '160–175', showAfter: 100,
          prompt: 'The two maps below show the town centre of the coastal town of Seaborne in 1995 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Скільки років? Де північ (море)? Що було → що стало? Що лишилось без змін?', ua: 'Порахуй роки (30). Знайди 2–3 найбільші зміни і одну «тиху категорію».' },
            { key: 'intro', label: 'Introduction', rows: 2, starter: 'The two maps illustrate how …', words: 'illustrate how · the coastal town centre · changed between … and …', ua: 'Нове дієслово + місце + часовий проміжок.' },
            { key: 'overview', label: 'Overview', rows: 3, starter: 'Overall, Seaborne’s town centre underwent …', words: 'underwent extensive redevelopment · along the waterfront · remained unchanged', ua: 'Масштаб + характер + зони + тиха категорія. Без назв об’єктів.' },
            { key: 'body1', label: 'Body 1', rows: 5, starter: 'The most striking changes took place along the waterfront. …', words: 'gave way to · was replaced by · was pedestrianised · lined with palm trees', ua: 'Найбільші зміни: пристань → марина, рибний ринок → торговий центр, пляж → набережна, дорога → пішохідна вулиця.' },
            { key: 'body2', label: 'Body 2', rows: 5, starter: 'Further inland, …', words: 'was demolished and replaced by · was cleared to make way for · by contrast · remained completely unchanged', ua: 'Будинки → апартаменти, ліс → готелі, пустир → апартаменти. Закінчи тихою категорією.' }],
          models: [
            ['Introduction', 'The two maps <mark>illustrate how</mark> the coastal town centre of Seaborne <mark>changed between</mark> 1995 and 2025.'],
            ['Overview', '<mark>Overall</mark>, the town centre <mark>underwent extensive redevelopment</mark> over the 30-year period, shifting from a working fishing and residential area to a leisure and tourist destination. The most dramatic changes occurred <mark>along the waterfront</mark> and on the former woodland, <mark>while</mark> a single landmark in the north-west <mark>remained unchanged</mark>.'],
            ['Body 1', '<mark>The most striking changes took place along the waterfront.</mark> The small boat jetty <mark>gave way to</mark> a large yacht marina, and the fish market <mark>was replaced by</mark> a considerably larger shopping and leisure centre. <mark>Meanwhile</mark>, the sandy beach was reduced to a narrow promenade <mark>lined with palm trees</mark>, and the main road <mark>was pedestrianised</mark>.'],
            ['Body 2', '<mark>Further inland</mark>, the detached houses south of the former road <mark>were demolished and replaced by</mark> apartment complexes, while the woodland in the east <mark>was cleared to make way for</mark> two hotels. <mark>Similarly</mark>, the wasteland in the north-east <mark>was developed into</mark> two apartment blocks. <mark>By contrast</mark>, the lighthouse in the north-west <mark>remained completely unchanged</mark>.']],
          after: 'Порівнюй рішення, а не слова: чи є якір у кожному напрямку? Чи різні дієслова зміни (gave way to, was replaced by, was reduced, was pedestrianised, was cleared, was developed into)? Є фраза «без змін»? Сподобалась фраза: випиши її й використай у наступному завданні.',
          check: CHK }
      ] },

    { label: 'Завдання 2', sub: 'одна підказка', graph: 'pe',
      lead: 'Село, 1985 і 2020. Єдина підказка: Body 1 = три зміни, що перетворили рибальське село на курорт (fish market, cottages, open fields); Body 2 = дорога → набережна + два незмінні орієнтири.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Port Elizabeth, 1985 and 2020', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The two maps below show the village of Port Elizabeth in 1985 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Підказка: Body 1 = fish market, cottages, open fields; Body 2 = coast road → promenade + harbour і lighthouse без змін.' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The two maps <mark>compare the layout of</mark> the village of Port Elizabeth in 1985 <mark>with its appearance in</mark> 2020.'],
            ['Overview', '<mark>Overall</mark>, the village <mark>underwent substantial redevelopment along its shoreline</mark> over the 35-year period, with several original features <mark>replaced by</mark> tourism-related facilities. <mark>Despite this</mark>, the area around the harbour <mark>remained unchanged</mark>.'],
            ['Body 1', '<mark>The most striking changes occurred around the harbour</mark>, which itself remained in use throughout the period. The fish market <mark>immediately to its south gave way to</mark> a row of new restaurants and shops, while the cottages <mark>to the east were demolished and replaced by</mark> a large hotel complex. <mark>Similarly</mark>, the open fields further east <mark>were developed into</mark> a large golf course.'],
            ['Body 2', '<mark>In contrast</mark>, the lighthouse at the northern end of the harbour <mark>was left completely untouched</mark>. Along the southern shore, the narrow coast road <mark>gave way to</mark> a wide promenade lined with palm trees and benches. <mark>Consequently</mark>, although the harbour itself remained unchanged, the surrounding area served a very different purpose by 2020.']],
          after: 'Порівнюй: чи Body 1 = саме три «туристичні» зміни? Чи є якір («immediately to its south», «to the east»)? Чи фінальний «Consequently» не вигадує причин, а підсумовує? Past simple скрізь.',
          check: CHK }
      ] },

    { label: 'Завдання 3', sub: 'як на іспиті', graph: 'el',
      lead: 'Тільки твої знання й словник. Таймер 20 хвилин. Знайди рідкісний тип змін (що сталося з дорогою?), три великі обміни й незмінний об’єкт.',
      blocks: [
        { type: 'fullwrite', tag: 'Повна відповідь', tagc: 'green', title: 'Elmsworth town centre, 1960 and 2010', minutes: 20, minWords: 150, target: '160–175', showAfter: 100, hints: false,
          prompt: 'The two maps below show the centre of Elmsworth in 1960 and 2010. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.',
          parts: [
            { key: 'notes', label: 'Нотатки (не рахуються в слова)', nocount: true, rows: 3, ph: 'Скільки років? Рідкісна зміна? Три великі обміни? Що лишилось без змін? Як розділити Body 1 і Body 2?' },
            { key: 'intro', label: 'Introduction', rows: 2 },
            { key: 'overview', label: 'Overview', rows: 3 },
            { key: 'body1', label: 'Body 1', rows: 5 },
            { key: 'body2', label: 'Body 2', rows: 5 }],
          models: [
            ['Introduction', 'The two maps <mark>depict the transformation of</mark> the centre of Elmsworth <mark>between 1960 and 2010</mark>.'],
            ['Overview', '<mark>Overall</mark>, the town centre <mark>was extensively modernised</mark> over the 50-year period, with several buildings replaced by larger ones and the main road <mark>closed to traffic</mark>, <mark>whereas</mark> the north-western corner <mark>remained unchanged</mark>.'],
            ['Body 1', '<mark>The most significant developments took place in the northern half.</mark> The old cinema <mark>was replaced by</mark> a considerably larger new shopping mall, and <mark>immediately to its east</mark>, the former bus station <mark>gave way to</mark> a pedestrian plaza. <mark>Most notably</mark>, the through-road that once ran across the centre from east to west <mark>was closed to traffic</mark>, creating a pedestrianised zone.'],
            ['Body 2', '<mark>Further changes took place to the south.</mark> The shops <mark>were extended into</mark> a larger retail street, and the market square <mark>was redeveloped into</mark> a public square. In the south-east corner, <mark>where market stalls once stood</mark>, a multi-storey car park <mark>was constructed</mark>, partly below ground. <mark>Meanwhile</mark>, the church in the north-west <mark>underwent no alteration at all</mark>.']],
          after: 'Зверни увагу: рідкісний тип змін (closed to traffic) прозвучав і в Overview, і в Body 1. Тиха категорія — церква в північно-західному куті. Перевір якорі: the northern half · immediately to its east · to the south · the south-east corner.',
          check: CHK }
      ] }
    ],

    outro: [
      { type: 'rule', title: '🎓 Ти закінчив(ла) Module 6', html:
        '<ul><li>Introduction з <b>часовим проміжком</b>, Overview з <b>масштабом, характером, зонами</b> і тихою категорією</li>' +
        '<li>Body 1 = <b>найбільші зміни</b>, Body 2 = <b>решта + без змін</b>, у кожному реченні <b>якір + було → стало</b></li>' +
        '<li>Усі твої відповіді збережені: їх можна завантажити (.txt) або роздрукувати в PDF у розділі «Мої відповіді».</li></ul>' +
        '<p class="small" style="margin-top:8px">Шість типів Task 1 пройдено: line graph, pie chart, bar chart, table, process, maps. Поверни до слабких абзаців через пару днів: це найшвидший шлях до Band 7.5.</p>' }
    ]
  };
})();
