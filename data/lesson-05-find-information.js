window.LESSON = {
  id: 'mp-05-find-information',
  module: 'Maps',
  title: 'Practice · Як читати карти й групувати зміни',
  subtitle: 'Maps · бачимо «було → стало», ставимо якір у кожному напрямку, відбираємо головне для Body 1 і Body 2.',
  vocab: ['anchors', 'changes', 'rule'],

  intro: [
    { type: 'rule', title: '5 запитань до будь-яких двох карт за 60 секунд', html:
      '<ol style="margin-left:20px">' +
      '<li><b>Скільки років між картами?</b> Це часовий проміжок для Introduction й Overview.</li>' +
      '<li><b>Де північ?</b> Знайди компас (N) і постав кожен об’єкт у правильному напрямку.</li>' +
      '<li><b>Що було → що стало?</b> Порівнюй ОДНЕ місце на двох картах: що там стояло і що стоїть тепер.</li>' +
      '<li><b>Що змінилося найбільше?</b> 2–3 зміни, що змінили СУТЬ місця: функцію, масштаб, характер.</li>' +
      '<li><b>Що НЕ змінилося?</b> «Тиха категорія»: одна фраза в тексті обов’язкова.</li></ol>' },
    { type: 'rule', title: 'Групування: за значимістю, не за компасом', html:
      '<ul><li><b>Body 1</b> = 2–3 найбільші зміни (ті, що змінили суть місця).</li>' +
      '<li><b>Body 2</b> = другорядні зміни + «без змін».</li>' +
      '<li>Перелік змін за годинниковою стрілкою — Band 5. Екзаменатор оцінює <b>відбір</b>.</li>' +
      '<li>Кожне речення = <b>якір + було → стало</b>: <i>To the east of the harbour, the cottages were replaced by a hotel complex.</i></li></ul>' }
  ],

  rounds: [
  /* ===================== РАУНД 1 ===================== */
  { label: 'Раунд 1', sub: 'парк: малий об’єкт', graph: 'mp',
    words: [['replaced by','замінений на'],['remained unchanged','лишився без змін'],['paved path','асфальтована доріжка'],['in the south-western corner','в південно-західному куті']],
    lead: 'Парк, 1990 і 2015. Спершу читаємо карти, потім групуємо зміни.',
    blocks: [
      { type: 'choose', tag: 'Крок 1 · Читаємо карти', tagc: 'purple', title: 'Де що розташоване?', qs: [
          { q: 'Скільки років між картами і яка мова змін?', opts: [
            ['25 років, Past Simple для змін', 1, '2015 − 1990 = 25. Обидві дати в минулому.'],
            ['15 років, Present Perfect', 0, 'Порахуй: 2015 − 1990 = 25.'],
            ['25 років, Present Simple', 0, 'Дати в минулому: Past Simple.']] },
          { q: 'Де на карті 1990 розташована стоянка (Car Park)?', opts: [
            ['In the south-western corner of the park', 1, 'Нижній лівий кут: south-west.'],
            ['In the north-east of the park', 0, 'У північно-східному кутку — дерева.'],
            ['In the centre of the park', 0, 'У центрі — ставок.']] },
          { q: 'Де розташоване кафе на карті 2015?', opts: [
            ['In the southern part of the park, to the east of the paved path', 1, 'Кафе біля південного краю, праворуч від доріжки.'],
            ['In the north-west, next to the playground', 0, 'Біля майданчика кафе немає.'],
            ['In the south-western corner, replacing the car park', 0, 'Стоянка там лишилася.']] }
        ] },

      { type: 'sort', tag: 'Крок 2 · Типи змін', tagc: 'orange', title: 'Який тип зміни?',
        prompt: 'Клікни на зміну, потім на колонку.',
        cols: ['BUILT (нове)', 'REPLACED (замінене)', 'IMPROVED (змінене)', 'БЕЗ ЗМІН'],
        items: [['cafe', 0], ['pond → playground', 1], ['footpath → paved path', 2], ['car park', 3], ['trees', 3]],
        why: 'Правильно. Одна нова споруда (cafe), одна заміна (pond → playground), одне покращення (path), два об’єкти без змін (car park, trees).',
        hintWrong: 'Кафе в 1990 не було, ставок зник, доріжка була й лишилась (але змінилась), стоянка й дерева ті самі.' },

      { type: 'sort', tag: 'Крок 3 · Групуємо', tagc: 'purple', title: 'Розподіли зміни за значимістю',
        prompt: 'Яка зміна змінила СУТЬ парку? Решта й «без змін» іде в Body 2.',
        cols: ['Body 1 · головна зміна', 'Body 2 · другорядне + без змін'],
        items: [['pond → playground', 0], ['footpath → paved path', 1], ['cafe built', 1], ['car park unchanged', 1], ['trees unchanged', 1]],
        why: 'Правильно. Головна зміна одна: природне замінене збудованим (pond → playground). Body 2: доріжка, кафе й фраза «без змін».',
        hintWrong: 'Яка зміна змінила суть парку? (природне → збудоване)' },

      { type: 'gap', tag: 'Крок 4 · Впиши якір', tagc: 'orange', title: 'Заповни пропуски', bank: ['south-western', 'east', 'centre', 'north-eastern'], items: [
          { pre: 'In the ', post: ' corner of the park, a group of trees remained unchanged.', ok: ['north-eastern', 'north-east', 'north eastern'], why: 'Дерева — у верхньому правому куті: north-eastern.' },
          { pre: 'The car park in the ', post: ' corner was left untouched.', ok: ['south-western', 'south-west', 'south western'], why: 'Нижній лівий кут: south-western.' },
          { pre: 'To the ', post: ' of the paved path, a cafe was constructed.', ok: ['east'], why: 'Кафе праворуч від доріжки: east.' },
          { pre: 'In the ', post: ' of the park, a pond was replaced by a children’s playground.', ok: ['centre', 'west', 'centre-west', 'west of the centre'], why: 'Ставок і майданчик — у західній частині центру парку.' }
        ] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади речення з якорем', items: [
          ['In the centre of the park, the pond was replaced by a children’s playground.', 'The pond was replaced by a children’s playground in the centre of the park.'],
          ['To the east of the paved path, a cafe was constructed.', 'A cafe was constructed to the east of the paved path.']],
        hint: 'Якір + було → стало: <i>was replaced by</i>, <i>was constructed</i>.' }
    ] },

  /* ===================== РАУНД 2 ===================== */
  { label: 'Раунд 2', sub: 'село: три зміни роблять курорт', graph: 'pe',
    words: [['gave way to','поступився місцем'],['was transformed into','перетворили на'],['adjacent to','прилеглий до'],['a golf course','гольф-поле']],
    lead: 'Село, 1985 і 2020. Знаходимо зміни, які перевернули суть місця.',
    blocks: [
      { type: 'sort', tag: 'Крок 1 · Групуємо', tagc: 'purple', title: 'Які зміни перетворили село на курорт?',
        prompt: 'Три зміни роблять «тепер це курорт». Решта й «без змін» іде в Body 2.',
        cols: ['Body 1 · зсув до туризму', 'Body 2 · дорога + без змін'],
        items: [['fish market → restaurants & shops', 0], ['cottages → hotel complex', 0], ['open fields → golf course', 0], ['coast road → promenade', 1], ['harbour unchanged', 1], ['lighthouse unchanged', 1]],
        why: 'Правильно. Body 1 = три зміни, що перевернули село з рибальського в туристичне. Body 2: набережна + незмінні орієнтири.',
        hintWrong: 'Які три зміни говорять «тепер це курорт»? Решта — другорядне.' },

      { type: 'sort', tag: 'Крок 2 · Типи змін', tagc: 'orange', title: 'Який тип зміни?',
        cols: ['BUILT (нове)', 'REPLACED (замінене)', 'IMPROVED (змінене)', 'БЕЗ ЗМІН'],
        items: [['hotel complex (where cottages stood)', 1], ['restaurants & shops (where the fish market stood)', 1], ['golf course (on the open fields)', 1], ['coast road → promenade', 2], ['harbour', 3], ['lighthouse', 3]],
        why: 'Правильно. Три заміни, одна перебудова дороги в набережну (покращення) й два незмінні орієнтири. Нових споруд «з нуля» тут немає: кожна нова споруда стоїть на місці старої.',
        hintWrong: 'Новий об’єкт стоїть на місці старого = replaced. Дорога лишилась на місці, але змінилась = improved.' },

      { type: 'choose', tag: 'Крок 3 · Якір', tagc: 'purple', title: 'Де що розташоване?', qs: [
          { q: 'Де на карті 1985 розташований рибний ринок?', opts: [
            ['To the south of the harbour', 1, 'Він під гаванню, біля берега.'],
            ['To the north-east of the harbour', 0, 'Там котеджі.'],
            ['To the west of the harbour', 0, 'На заході — море.']] },
          { q: 'Де розташовані котеджі й готель?', opts: [
            ['To the east of the harbour', 1, 'Праворуч від гавані: на місці котеджів з’явився готельний комплекс.'],
            ['To the south of the harbour', 0, 'Там рибний ринок.'],
            ['On the western coast', 0, 'Захід — море.']] },
          { q: 'Де розташований маяк?', opts: [
            ['At the northern end of the harbour', 1, 'Нагорі гавані. І він лишився без змін.'],
            ['At the eastern edge of the village', 0, 'Східний край — поля й гольф-поле.'],
            ['On the southern road', 0, 'На дорозі маяка немає.']] }
        ] },

      { type: 'gap', tag: 'Крок 4 · Дієслово зміни', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
          { pre: 'The fish market ', post: ' way to a row of restaurants and shops.', ok: ['gave', 'made'], why: '<i>gave way to</i> / <i>made way for</i>: м’яка заміна.' },
          { pre: 'The cottages were demolished and ', post: ' by a large hotel complex.', ok: ['replaced'], why: '<i>were demolished and replaced by</i>.' },
          { pre: 'The open fields were ', post: ' into a golf course.', ok: ['transformed', 'developed', 'converted', 'redeveloped'], why: '<i>were transformed / converted INTO</i>: з прийменником into.' },
          { pre: 'The lighthouse was left ', post: '.', ok: ['untouched', 'unchanged'], why: 'Тиха категорія: <i>was left untouched</i>.' }
        ] },

      { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади речення з якорем', items: [
          ['To the south of the harbour, the fish market gave way to a row of restaurants and shops.', 'The fish market to the south of the harbour gave way to a row of restaurants and shops.'],
          ['To the east of the harbour, the cottages were demolished and replaced by a large hotel complex.']] }
    ] },

  /* ===================== РАУНД 3 ===================== */
  { label: 'Раунд 3', sub: 'центр міста: рідкісна зміна', graph: 'el',
    words: [['pedestrianised','пішохідний'],['made way for','звільнив місце для'],['closed to traffic','закритий для транспорту'],['the south-eastern corner','південно-східний кут']],
    lead: 'Центр міста, 1960 і 2010. Найрідкісніша й найбільша зміна тут — не будівля, а дорога. Підказок мало.',
    blocks: [
      { type: 'sort', tag: 'Крок 1 · Групуємо', tagc: 'purple', title: 'Розподіли зміни за значимістю',
        prompt: 'Подивись, що сталося з дорогою й двома великими будівлями.',
        cols: ['Body 1 · наймасштабніші', 'Body 2 · решта + без змін'],
        items: [['through-road → pedestrianised zone', 0], ['cinema → shopping mall', 0], ['bus station → pedestrian plaza', 0], ['shops → retail street', 1], ['market square → public square', 1], ['market stalls → multi-storey car park', 1], ['church unchanged', 1]],
        why: 'Правильно. Три домінантні зміни (дорогу закрито й два великі обміни) — у Body 1; південна половина й церква без змін — у Body 2.',
        hintWrong: 'Найрідкісніша й найбільша зміна тут — не будівля. Подивись, що сталося з дорогою.' },

      { type: 'sort', tag: 'Крок 2 · Типи змін', tagc: 'orange', title: 'Який тип зміни?',
        cols: ['BUILT (нове)', 'REPLACED (замінене)', 'EXPANDED / CHANGED', 'БЕЗ ЗМІН'],
        items: [['multi-storey car park', 0], ['cinema → shopping mall', 1], ['bus station → pedestrian plaza', 1], ['through-road → pedestrianised zone', 2], ['shops → retail street', 2], ['church', 3]],
        why: 'Правильно. Одна нова споруда, дві заміни, дві зміни (дорога, крамниці) й один незмінний орієнтир.',
        hintWrong: 'Нова споруда там, де нічого не було = built. Замість старого = replaced. Лишилось, але змінилось = expanded / changed.' },

      { type: 'pick', tag: 'Крок 3 · Принцип', tagc: 'purple', title: 'Який принцип групування правильний?', need: 1, opts: [
          ['Body 1 = наймасштабніші зміни (включно з закриттям дороги), Body 2 = решта + незмінна церква.', 1, 'Відбір за масштабом трансформації.'],
          ['Спочатку все на півночі, потім на сході, потім на півдні.', 0, 'Компас — не логіка. Значимість вирішує.'],
          ['Спочатку все в 1960, потім все в 2010.', 0, 'Це головна помилка Band 5: карти треба зшивати рухом «було → стало».'],
          ['Групувати за кольором будівель.', 0, 'Колір — не критерій.']] },

      { type: 'write', tag: 'Крок 4 · Напиши сам(а)', tagc: 'blue', title: 'Напиши одне речення про рідкісну зміну',
        task: 'Одне речення з якором: що сталося з наскрізною дорогою. Past Simple, без was became.',
        hint: 'Рідкісний тип змін: closed to traffic / pedestrianised.',
        rows: 3, min: 8,
        models: [
          ['Модель A', 'The through-road that <mark>once ran across the centre</mark> was <mark>closed to traffic</mark> and transformed into a pedestrianised zone.'],
          ['Модель B', 'In the centre of the town, the main road <mark>was pedestrianised</mark>, <mark>making way for</mark> a paved zone for walkers.']],
        after: 'Зверни увагу: дорогу не «збудували» й не «замінили»: її закрили для транспорту. Це рідкісне дієслово змін (closed to traffic, pedestrianised) показує, що ти бачиш не лише «було → побудували».',
        check: ['Якір місця (in the centre / across the centre)', 'Past Simple (was closed / was pedestrianised)', 'Немає was became і подвійних дієслів'] }
    ] }
  ],

  outro: [
    { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
      '<ul><li>Читати карти: <b>проміжок, компас, було → стало</b></li>' +
      '<li>Ставити <b>якір</b> у кожному напрямку: north-eastern corner · to the east of … · along the shoreline</li>' +
      '<li>Групувати за <b>значимістю</b>, а не за компасом: Body 1 = головне, Body 2 = решта + без змін</li></ul>' +
      '<p class="small" style="margin-top:8px">Далі: Practice · Main Body 1.</p>' }
  ]
};
