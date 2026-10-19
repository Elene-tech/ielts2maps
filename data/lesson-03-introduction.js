(function () {
  var CHK = ['Не копія завдання: є перефразування (show → illustrate / compare / depict)', 'Названо часовий проміжок (between … and … або over the … -year period)', 'Past simple (changed, не change / has changed без потреби)', 'Немає назв об’єктів і деталей змін', 'Одне речення, 15–30 слів'];
  window.LESSON = {
    id: 'mp-03-introduction',
    module: 'Maps',
    title: 'Practice · Introduction',
    subtitle: 'Maps · перефразовуємо завдання одним реченням і називаємо часовий проміжок.',
    vocab: ['intro', 'rule', 'traps'],

    intro: [
      { type: 'rule', title: 'Introduction для карт: три ходи', html:
        '<p>Одне речення, яке <b>перефразовує завдання</b>. Три ходи:</p>' +
        '<ol style="margin-left:20px"><li><b>Дієслово:</b> <i>show</i> → <i>illustrate · compare · depict</i>.</li>' +
        '<li><b>Іменникова група:</b> <i>how X changed</i> · <i>the transformation of X</i> · <i>the layout of X in [year] with its appearance in [year]</i>.</li>' +
        '<li><b>Часовий проміжок:</b> <i>between 1990 and 2015</i> або <i>over the 25-year period</i>. Він завжди має бути: це рамка для всієї відповіді.</li></ol>' +
        '<p class="small">Спочатку тобі допомагають приклад і підказки, далі їх менше. Словник доступний у будь-який момент (кнопка 📚).</p>' },
      { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
        ['The two maps below show Meadow Park in 1990 and 2015.', 'Копія завдання: жодного нового слова.', 'The two maps illustrate how Meadow Park changed between 1990 and 2015.'],
        ['The maps show us how the park is changing.', '«show us» зайве; і Present: зміни вже завершені.', 'The maps show how the park changed between 1990 and 2015.'],
        ['The two maps illustrate the changes of the park.', 'Калька: the changes TO the park / how the park changed. І без часового проміжку.', 'The two maps illustrate the changes to the park between 1990 and 2015.'],
        ['The maps illustrate that the pond was replaced by a playground and a cafe was built.', 'Деталі змін: це Body, а не Introduction.', 'The two maps depict the transformation of Meadow Park between 1990 and 2015.']
      ] }
    ],

    rounds: [
    /* ===================== РАУНД 1 ===================== */
    { label: 'Раунд 1', sub: 'з прикладом і підказками', graph: 'mp',
      words: [['illustrate how … changed','показують, як … змінився'],['between 1990 and 2015','між 1990 і 2015'],['over the 25-year period','протягом 25 років']],
      lead: 'Невеликий об’єкт: один парк, 1990 і 2015. Завдання на іспиті: <i>The two maps below show Meadow Park in 1990 and 2015. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</i> Усі підказки відкриті.',
      blocks: [
        { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
            ['link', 'The two maps'], ['verb', 'illustrate how'], ['type', 'Meadow Park changed'], ['what', 'between 1990 and 2015'], '.'],
          legend: [['link', 'підмет'], ['verb', 'нове дієслово (не show)'], ['type', 'how + підмет + changed (Past Simple)'], ['what', 'часовий проміжок']],
          note: 'Зверни увагу: жодного об’єкта з карти (pond, playground), жодних дієслів зміни (replaced, built). Тільки місце, рамка змін і роки.' },

        { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Який варіант найкращий?', qs: [
            { q: 'Який Introduction найкращий?', opts: [
              ['The two maps illustrate how Meadow Park changed between 1990 and 2015.', 1, 'Нове дієслово, Past Simple, часовий проміжок.'],
              ['The two maps show Meadow Park in 1990 and 2015.', 0, 'Копія завдання.'],
              ['The two maps illustrate that the pond became a playground.', 0, 'Деталь зміни: це Body.']] },
            { q: 'Який час потрібен для змін між 1990 і 2015?', opts: [
              ['Past Simple: changed', 1, 'Обидві дати в минулому, зміни завершені.'],
              ['Present Perfect: has changed', 0, 'Можливий лише як стилістична опція, але не в Introduction, де обидві дати названі.'],
              ['Present Simple: changes', 0, 'Present потрібен тільки для карт майбутнього.']] }
          ] },

        { type: 'pick', tag: 'Крок 3 · Знайди добрі Introduction', tagc: 'purple', title: 'Які два варіанти добрі?', need: 2, opts: [
            ['The two maps compare the layout of Meadow Park in 1990 with its appearance in 2015.', 1, 'Конструкція compare … with: інший, але рівноцінний шаблон.'],
            ['The two maps depict the transformation of Meadow Park over the 25-year period between 1990 and 2015.', 1, 'depict the transformation + проміжок.'],
            ['The two maps below show Meadow Park in 1990 and 2015.', 0, 'Копія завдання.'],
            ['The maps show us how the park changes.', 0, '«show us» і Present Simple: помилка часу.'],
            ['The maps illustrate that the pond was replaced by a playground and a cafe was constructed.', 0, 'Деталі змін: це Body.'],
            ['The two maps illustrate the changes of the park.', 0, 'Калька й немає часового проміжку.']] },

        { type: 'gap', tag: 'Крок 4 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', bank: ['illustrate', 'how', 'between', 'transformation', 'layout'], items: [
            { pre: 'The two maps ', post: ' how Meadow Park changed between 1990 and 2015.', ok: ['illustrate', 'show', 'depict', 'present'], why: '<i>illustrate / depict</i> замість show: нове дієслово.' },
            { pre: 'The two maps illustrate ', post: ' Meadow Park changed between 1990 and 2015.', ok: ['how'], why: '<i>illustrate how + підмет + changed</i>: без інверсії.' },
            { pre: 'The maps depict the ', post: ' of Meadow Park between 1990 and 2015.', ok: ['transformation', 'development', 'redevelopment'], why: '<i>the transformation of</i> + місце.' },
            { pre: 'The maps compare the ', post: ' of Meadow Park in 1990 with its appearance in 2015.', ok: ['layout'], why: '<i>the layout of … in [year] with its appearance in [year]</i>.' }
          ] },

        { type: 'write', tag: 'Крок 5 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction до карт парку',
          task: 'Одне речення. Нове дієслово, місце, часовий проміжок. Past Simple.',
          hint: 'Місце: Meadow Park. Роки: 1990 і 2015 (25 років).',
          rows: 3, min: 10,
          models: [
            ['Модель A', 'The two maps <mark>illustrate how</mark> Meadow Park <mark>changed between</mark> 1990 and 2015.'],
            ['Модель B', 'The two maps <mark>depict the transformation of</mark> Meadow Park <mark>over the 25-year period</mark> between 1990 and 2015.']],
          after: 'Порівняй: чи змінив(ла) ти show? Чи є проміжок? Модель A — «how … changed», B — «the transformation of … over the 25-year period». Обидва добрі.',
          check: CHK },

        { type: 'build', tag: 'Крок 6 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
            ['The two maps illustrate how Meadow Park changed between 1990 and 2015.'],
            ['The two maps compare the layout of Meadow Park in 1990 with its appearance in 2015.']],
          hint: 'Починай з <b>The two maps</b> + дієслово. Фраза <i>in 1990 with its appearance in 2015</i> не розривається.' }
      ] },

    /* ===================== РАУНД 2 ===================== */
    { label: 'Раунд 2', sub: 'менше підказок', graph: 'el',
      words: [['depict the transformation of','відображають перетворення'],['town centre','центр міста'],['over the 50-year period','за 50 років']],
      lead: 'Центр міста, 1960 і 2010. Нова пастка: <i>centre</i> належить до назви місця, а не до слів змін.',
      blocks: [
        { type: 'choose', tag: 'Крок 1 · Обери правильне', tagc: 'purple', title: 'Читаємо уважно', qs: [
            { q: 'Який Introduction правильний?', opts: [
              ['The two maps depict the transformation of the centre of Elmsworth between 1960 and 2010.', 1, 'Нове дієслово, місце, проміжок.'],
              ['The two maps depict the transformation of the centre of Elmsworth in 1960 and 2010.', 0, 'Transformation відбулась МІЖ датами, а не «у» двох роках.'],
              ['The two maps show the centre of Elmsworth in 1960 and 2010.', 0, 'Копія завдання.']] },
            { q: 'Скільки років між датами?', opts: [
              ['50 (1960 → 2010)', 1, 'Можна додати: over the 50-year period.'],
              ['40', 0, 'Порахуй: 2010 − 1960 = 50.'],
              ['60', 0, 'Порахуй: 2010 − 1960 = 50.']] }
          ] },

        { type: 'gap', tag: 'Крок 2 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
            { pre: 'The two maps ', post: ' the transformation of the centre of Elmsworth between 1960 and 2010.', ok: ['depict', 'illustrate', 'show', 'present'], why: 'Нове дієслово.' },
            { pre: 'The two maps depict the transformation of Elmsworth town centre ', post: ' 1960 and 2010.', ok: ['between'], why: '<i>between … and …</i>, а не from … to … + «between».' },
            { pre: 'The maps illustrate how the centre of Elmsworth changed over the 50-', post: ' period.', ok: ['year'], why: '<i>a 50-year period</i>: прикметник, однина.' },
            { pre: 'The two maps compare the layout of the centre of Elmsworth in 1960 ', post: ' its appearance in 2010.', ok: ['with'], why: '<i>compare … with</i> у цій конструкції.' }
          ] },

        { type: 'write', tag: 'Крок 3 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction до карт центру Elmsworth',
          task: 'Одне речення. Використай ОДИН із двох шаблонів: transformation або layout … with.',
          hint: 'Місце: the centre of Elmsworth. Роки: 1960 і 2010.',
          rows: 3, min: 10,
          models: [
            ['Модель A', 'The two maps <mark>depict the transformation of</mark> the centre of Elmsworth <mark>between 1960 and 2010</mark>.'],
            ['Модель B', 'The two maps <mark>compare the layout of</mark> Elmsworth town centre in 1960 <mark>with its appearance in</mark> 2010.']],
          after: 'Ти вже двічі писав(ла) Introduction: структура та сама, змінюються лише дієслово й назва місця.',
          check: CHK },

        { type: 'build', tag: 'Крок 4 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
            ['The two maps depict the transformation of the centre of Elmsworth between 1960 and 2010.'],
            ['The two maps illustrate how Elmsworth town centre changed over the 50-year period.']] }
      ] },

    /* ===================== РАУНД 3 ===================== */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'pe',
      words: [['the village of','село'],['compare the layout','порівнюють планування'],['over the 35-year period','за 35 років']],
      lead: 'Село, 1985 і 2020. Тільки твої знання: підказок мало.',
      blocks: [
        { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Introduction до карт Port Elizabeth',
          task: 'Одне речення. Нове дієслово, місце (the village of …), часовий проміжок.',
          rows: 3, min: 10,
          models: [
            ['Модель A', 'The two maps <mark>depict the transformation of</mark> the village of Port Elizabeth <mark>between 1985 and 2020</mark>.'],
            ['Модель B', 'The two maps <mark>compare the layout of</mark> the village of Port Elizabeth in 1985 <mark>with its appearance in</mark> 2020.']],
          after: 'Зверни увагу: <i>the village of Port Elizabeth</i>: тип поселення в Introduction показує, що ти прочитав(ла) карту уважно. Годиться і <i>over the 35-year period</i>.',
          check: CHK },

        { type: 'build', tag: 'Крок 2 · Збери речення', tagc: 'green', title: 'Склади Introduction зі слів', items: [
            ['The two maps depict the transformation of the village of Port Elizabeth between 1985 and 2020.'],
            ['The two maps illustrate how the village of Port Elizabeth changed over the 35-year period.']] }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Перефразовувати завдання: <b>show → illustrate / compare / depict</b></li>' +
        '<li>Називати <b>часовий проміжок</b>: between … and … · over the 25-year period</li>' +
        '<li>Не вносити в Introduction <b>об’єкти й деталі змін</b></li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Practice · Overview: масштаб, характер і зони без назв об’єктів.</p>' }
    ]
  };
})();
