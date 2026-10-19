(function () {
  var CHK = ['Якір місця в кожному реченні (to the east of …, in the centre of …)', 'Було → стало в одному реченні (was replaced by · gave way to)', 'Дієслова зміни різні, жодне не двічі', 'Past simple, без was became і змішування часів', 'Тільки факти з карт, без причин і думок', 'Opener: The most significant development took place…'];
  window.LESSON = {
    id: 'mp-06-body-1',
    module: 'Maps',
    title: 'Practice · Main Body 1',
    subtitle: 'Maps · перший Body paragraph: найбільші зміни. Слова й логіка допомагають, а текст пишеш ти.',
    vocab: ['templates', 'anchors', 'changes'],

    intro: [
      { type: 'rule', title: 'Body 1: найбільші зміни з якорем', html:
        '<p>Body 1 описує <b>2–3 найбільші зміни</b>, які змінили суть місця. Кожне речення — це <b>якір + було → стало</b>.</p>' +
        '<ol style="margin-left:20px"><li><b>Opener + головна зміна:</b> <i>The most significant development took place to the east of the harbour, where …</i></li>' +
        '<li><b>Було → стало</b> одним дієсловом: <i>was replaced by · gave way to · was transformed into</i>.</li>' +
        '<li><b>Наступна велика зміна</b> зі зв’язкою: <i>Similarly · In addition · Meanwhile</i>.</li></ol>' +
        '<p>Не пиши: <s>was became</s>, причини, «There is… There is…». Одне дієслово зміни максимум двічі на текст.</p>' +
        '<p class="small" style="margin-top:8px">Тут немає збирання з карток: ти пишеш абзац. З кожним раундом підказок менше. Після написання порівняй себе з моделлю.</p>' }
    ],

    rounds: [
    /* ---------- Раунд 1 · Meadow Park ---------- */
    { label: 'Раунд 1', sub: 'з планом і фразами', graph: 'mp',
      lead: 'Головна зміна парку одна: природне замінене збудованим. Усі підказки відкриті.',
      words: [['The most significant change','Найзначніша зміна'],['gave way to','поступився місцем'],['unsurfaced','без покриття'],['in the centre of the park','у центрі парку']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Парк: крок за кроком', steps: [
            { title: 'Opener + якір', ua: 'Де відбулась найзначніша зміна? Постав якір місця й опиши, що було.', frame: 'The most significant change took place [anchor], where [old feature] …' },
            { title: 'Було → стало', ua: 'Яке дієслово змін підходить для заміни? (не «was became»)', frame: '… gave way to / was replaced by [new feature].' },
            { title: 'Доріжка', ua: 'Що з доріжкою, яка вела від ставка на південь? Дві деталі: було й стало.', frame: 'The [old path] was [V3] and became / was replaced by [new path].' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про головну зміну парку',
          task: '2–3 речення. Якір, було → стало, різні дієслова зміни.',
          hint: 'Ставок → дитячий майданчик (центр парку, західніше від середини). Доріжка від ставка на південь без покриття → асфальтована доріжка.',
          rows: 5, min: 15,
          models: [
            ['Модель A', '<mark>The most significant change took place in the centre of the park</mark>, where the original pond <mark>gave way to</mark> a children’s playground. The unsurfaced footpath that once led south from the pond to the edge of the park <mark>was replaced by</mark> a paved path.'],
            ['Модель B', 'The park’s character changed most noticeably <mark>to the west of its centre</mark>, where a natural pond <mark>was removed and a playground constructed in its place</mark>. <mark>Similarly</mark>, the sandy footpath running southwards was <mark>upgraded into</mark> a paved path.']],
          after: 'Порівняй: чи є якір місця? Чи різні дієслова (gave way to / was replaced by; was removed / constructed / upgraded)? Чи немає was became? Модель A починається з opener, модель B — з перефразу.',
          check: CHK }
      ] },

    /* ---------- Раунд 2 · Port Elizabeth ---------- */
    { label: 'Раунд 2', sub: 'тільки кроки', graph: 'pe',
      lead: 'Три зміни, що перетворили село на курорт. Фраз менше: тільки логіка.',
      words: [['adjacent to','прилеглий до'],['was demolished and replaced by','знесли й замінили'],['was developed into','перетворили на'],['immediately to the south of','просто на південь від']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Село: крок за кроком', steps: [
            { title: 'Opener', ua: 'Де найбільші зміни? Прив’яжи їх до гавані (вона сама не змінилась).' },
            { title: 'Рибний ринок + котеджі', ua: 'Два якорі: на південь від гавані й на схід. Для кожного: було → стало.' },
            { title: 'Поля', ua: 'Третя зміна. Зв’яжи зі словом Similarly.' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про три туристичні зміни',
          task: '3 речення. Рибний ринок, котеджі, відкриті поля. Кожне з якорем.',
          hint: 'Fish market → restaurants & shops (south of the harbour). Cottages → hotel complex (east). Open fields → golf course.',
          rows: 6, min: 20,
          models: [
            ['Модель A', '<mark>The most striking changes occurred around the harbour</mark>, which itself remained in use throughout the period. The fish market <mark>immediately to its south gave way to</mark> a row of restaurants and shops, while the cottages <mark>to the east were demolished and replaced by</mark> a large hotel complex. <mark>Similarly</mark>, the open fields further east <mark>were developed into</mark> a golf course.'],
            ['Модель B', 'Three developments <mark>transformed the village’s character</mark>. <mark>To the south of the harbour</mark>, the fish market <mark>made way for</mark> restaurants and shops; <mark>to its east</mark>, a hotel complex <mark>was constructed on the site of</mark> the former cottages; <mark>and</mark> the adjacent open fields <mark>were redeveloped as</mark> a golf course.']],
          after: 'Зверни увагу: п’ять різних дієслів (gave way to, was demolished, replaced, developed, redeveloped) і п’ять якорів. Модель B ділить тему на три «було → стало» одним реченням.',
          check: CHK }
      ] },

    /* ---------- Раунд 3 · Elmsworth ---------- */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
      lead: 'Три найбільші зміни, одна з них рідкісна: дорогу закрито. Підказок мало.',
      words: [['landscaped','упорядкований'],['considerably larger','значно більший'],['closed to traffic','закритий для транспорту']],
      blocks: [
        { type: 'logic', tag: 'План абзацу', tagc: 'blue', title: 'Центр міста (за потреби)', collapsed: true, steps: [
            { title: 'Кінотеатр', ua: 'Що замінило кінотеатр, і яким воно стало (розмір)?' },
            { title: 'Автостанція', ua: 'Де вона була відносно кінотеатру, і що стало на її місці?' },
            { title: 'Дорога', ua: 'Рідкісний тип змін: що сталося з наскрізною дорогою?' }] },
        { type: 'write', tag: 'Пишемо', tagc: 'green', title: 'Напиши Body 1 про три найбільші зміни',
          task: '3 речення. Кінотеатр, автостанція, дорога.',
          rows: 6, min: 20,
          models: [
            ['Модель A', 'The most significant developments took place in the northern half of the centre. The old cinema <mark>was replaced by</mark> a considerably larger shopping mall, and <mark>immediately to its east</mark>, the former bus station <mark>gave way to</mark> a landscaped pedestrian plaza. <mark>Most notably</mark>, the through-road that once ran across the centre <mark>was closed to traffic</mark>, turning the area into a pedestrianised zone.'],
            ['Модель B', '<mark>In the north</mark>, the cinema <mark>made way for</mark> a large glass-fronted mall, while <mark>to the east</mark>, a pedestrian plaza <mark>was created</mark> on the site of the bus station. <mark>Meanwhile</mark>, the road that formerly crossed the centre <mark>was pedestrianised</mark>.']],
          after: 'Зверни увагу: «was closed to traffic» і «was pedestrianised» — рідкісні дієслова змін, яких немає у «was built». Три якорі: the northern half, immediately to its east, across the centre.',
          check: CHK }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Починати Body 1 з <b>opener + якір</b>: The most significant change took place …</li>' +
        '<li>Описувати зміну одним реченням: <b>якір + було → стало</b></li>' +
        '<li>Варіювати дієслова: <b>gave way to · was replaced by · made way for · was closed to traffic</b></li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Practice · Main Body 2: другорядні зміни й тиха категорія.</p>' }
    ]
  };
})();
