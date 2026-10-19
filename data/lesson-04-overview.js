(function () {
  var CHK = ['Є масштаб і характер змін (substantial / modest, redevelopment / modernisation)', 'Названо, ДЕ найбільше змін (зона, а не об’єкт)', 'Є «тиха категорія»: що лишилось без змін', 'Немає назв об’єктів, точних цифр, причин і думок', 'Past simple, а не Present', '1–2 речення']; 
  window.LESSON = {
    id: 'mp-04-overview',
    module: 'Maps',
    title: 'Practice · Overview',
    subtitle: 'Maps · масштаб + характер змін + зони. 1–2 речення без назв об’єктів.',
    vocab: ['overview', 'changes', 'traps'],

    intro: [
      { type: 'rule', title: 'Overview для карт: формула', html:
        '<p>Overview — це <b>картина змін</b>, а не їхній перелік. 1–2 речення, без назв об’єктів:</p>' +
        '<ul><li><b>Масштаб:</b> <i>substantial · considerable · modest</i>.</li>' +
        '<li><b>Характер:</b> що змінилось загалом: <i>modernisation · redevelopment · expansion</i>, зазвичай «природне → збудоване» або «старе → нове».</li>' +
        '<li><b>Зони:</b> де найбільше змін: <i>along the shoreline · in the north-east · on the outskirts</i>.</li>' +
        '<li><b>Тиха категорія:</b> що лишилося без змін: <i>…, whereas the north-western corner remained unchanged</i>.</li></ul>' +
        '<p>Не пиши: назви об’єктів (pond, cinema), деталі «was built», причини й думки, цифри.</p>' },
      { type: 'compare', tag: 'Типові помилки', tagc: 'orange', rows: [
        ['Overall, the pond was replaced by a playground and a cafe was built.', 'Це деталі Body: назви об’єктів і дієслова змін.', 'Overall, the park underwent modest modernisation, with a natural feature replaced by purpose-built recreational facilities.'],
        ['Overall, the park became better because children need playgrounds.', 'Думка й причина: заборонено.', 'Overall, the park underwent modest modernisation.'],
        ['Overall, there is a playground in the park in 2015.', 'Факт однієї карти, і Present Simple: це не картина змін.', 'Overall, the park underwent modest modernisation between 1990 and 2015.']
      ] }
    ],

    rounds: [
    /* ===================== РАУНД 1 ===================== */
    { label: 'Раунд 1', sub: 'з підказками', graph: 'mp',
      words: [['underwent modest modernisation','зазнав помірної модернізації'],['purpose-built','спеціально збудований'],['remained unchanged','лишився без змін']],
      lead: 'Парк, 1990 і 2015. Усі підказки відкриті.',
      blocks: [
        { type: 'example', tag: 'Крок 1 · Приклад', tagc: 'green', title: 'Розбираємо зразок Band 7', segments: [
            ['link', 'Overall,'], ['type', 'the park underwent modest modernisation,'], ['what', 'with a natural feature replaced by purpose-built recreational facilities,'], ['verb', 'while'], ['what', 'its north-eastern and south-western corners remained unchanged'], '.'],
          legend: [['link', 'вступне слово'], ['type', 'масштаб + характер'], ['what', 'що саме: без назви об’єкта'], ['verb', 'сполучник контрасту']],
          note: 'Жодної назви об’єкта (pond, playground, cafe): «a natural feature», «recreational facilities». Тиха категорія вказана через зони (corners), а не через назви.' },

        { type: 'pick', tag: 'Крок 2 · Знайди дві історії', tagc: 'purple', title: 'Що має увійти в Overview?', need: 2, opts: [
            ['Парк зазнав помірної модернізації: природне замінене збудованим.', 1, 'Історія 1: масштаб + характер.'],
            ['Північно-східна й південно-західна частини лишились без змін.', 1, 'Історія 2: тиха категорія.'],
            ['Ставок осушили й на його місці збудували дитячий майданчик.', 0, 'Деталь Body: назви об’єктів.'],
            ['Парк став кращим, бо дітям потрібні майданчики.', 0, 'Думка й причина: заборонено.'],
            ['У 2015 році в парку є кафе.', 0, 'Факт однієї карти, і Present Simple.']] },

        { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски', bank: ['underwent', 'replaced', 'whereas', 'remained', 'modest'], items: [
            { pre: 'Overall, the park ', post: ' modest modernisation between 1990 and 2015.', ok: ['underwent', 'experienced', 'saw'], why: '<i>underwent modernisation</i>: Past Simple.' },
            { pre: 'A natural feature was ', post: ' by purpose-built recreational facilities.', ok: ['replaced'], why: '<i>was replaced by</i>: було → стало.' },
            { pre: 'The north-eastern corner ', post: ' unchanged.', ok: ['remained', 'stayed', 'was left'], why: '<i>remained unchanged</i>: тиха категорія.' },
            { pre: 'The park underwent ', post: ' modernisation rather than complete redevelopment.', ok: ['modest', 'limited', 'moderate', 'gradual'], why: '<i>modest</i>: масштаб змін для малої мапи.' }
          ] },

        { type: 'rewrite', tag: 'Крок 4 · Перепиши і порівняй', tagc: 'blue', title: 'Підвищ рівень до Band 7',
          given: 'In 1990 there was a pond and a footpath and in 2015 there is a playground and a paved path and a cafe, and the trees and the car park are the same.',
          task: 'Перепиши як Overview: почни з <i>Overall,</i>, масштаб + характер змін + що лишилось без змін. Без назв об’єктів, Past Simple.',
          models: [
            ['Модель A', '<mark>Overall</mark>, the park <mark>underwent modest modernisation</mark>, with a natural feature <mark>replaced by</mark> purpose-built recreational facilities, <mark>while</mark> its north-eastern and south-western corners <mark>remained unchanged</mark>.'],
            ['Модель B', 'The park <mark>was modestly modernised</mark> over the 25-year period, as the central area was converted for recreation, <mark>whereas</mark> its outer corners <mark>stayed exactly as they were</mark>.']],
          after: 'Зверни увагу: pond, playground, cafe і car park зникли з тексту. Лишилась картина змін: масштаб, характер, зона, тиха категорія.',
          check: CHK },

        { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
            ['Overall, the park underwent modest modernisation, with a natural feature replaced by purpose-built recreational facilities.'],
            ['Its north-eastern and south-western corners remained unchanged.']] }
      ] },

    /* ===================== РАУНД 2 ===================== */
    { label: 'Раунд 2', sub: 'менше підказок', graph: 'pe',
      words: [['substantial redevelopment','суттєва реконструкція'],['along its shoreline','вздовж берега'],['tourism-related facilities','туристична інфраструктура']],
      lead: 'Село, 1985 і 2020. Тут трансформація має напрямок: від рибальського села до курорту. Це «характер змін».',
      blocks: [
        { type: 'pick', tag: 'Крок 1 · Що входить в Overview?', tagc: 'purple', title: 'Знайди три потрібні речі', need: 3, opts: [
            ['Масштаб: село зазнало суттєвої реконструкції.', 1, 'Масштаб змін.'],
            ['Характер і напрямок: рибальські об’єкти замінені туристичними.', 1, 'Історія змін у двох словах.'],
            ['Тиха категорія: територія навколо гавані не змінилася.', 1, 'Обов’язково для Overview.'],
            ['Рибний ринок замінили ресторанами й крамницями.', 0, 'Деталь Body.'],
            ['Гольф-поле добре для туристів.', 0, 'Думка.'],
            ['Готельний комплекс збудували на місці котеджів.', 0, 'Деталь Body: об’єкти й дієслово зміни.']] },

        { type: 'choose', tag: 'Крок 2 · Обери правильне', tagc: 'purple', title: 'Який Overview найкращий?', qs: [
            { q: 'Який варіант правильний для цих карт?', opts: [
              ['Overall, the village underwent substantial redevelopment along its shoreline, with its fishing-related features replaced by tourist facilities, whereas the area immediately around the harbour remained unchanged.', 1, 'Масштаб, характер, зона, тиха категорія. Без назв об’єктів.'],
              ['Overall, the cottages were demolished and a hotel complex was built.', 0, 'Деталі Body.'],
              ['Overall, Port Elizabeth was developing and is now a tourist resort.', 0, 'Past і Present в одному реченні, без зон.']] }
          ] },

        { type: 'gap', tag: 'Крок 3 · Впиши слово', tagc: 'orange', title: 'Заповни пропуски (без банку слів)', items: [
            { pre: 'Overall, the village underwent substantial ', post: ' along its shoreline.', ok: ['redevelopment', 'development', 'transformation', 'regeneration'], why: '<i>substantial redevelopment / transformation</i>: масштаб.' },
            { pre: 'Fishing-related features were replaced ', post: ' tourist facilities.', ok: ['by', 'with'], why: '<i>were replaced by</i>.' },
            { pre: 'The area around the harbour remained ', post: '.', ok: ['unchanged', 'untouched', 'the same'], why: 'Тиха категорія.' },
            { pre: 'Overall, the village was ', post: ' from a fishing community into a tourist resort.', ok: ['transformed', 'turned', 'converted'], why: '<i>was transformed from … into …</i>.' }
          ] },

        { type: 'write', tag: 'Крок 4 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview до карт Port Elizabeth',
          task: '1–2 речення. Масштаб + характер змін + зона + що лишилось без змін. Без назв об’єктів.',
          hint: 'Масштаб: substantial. Характер: fishing → tourism. Зона: along the shoreline. Без змін: area around the harbour.',
          rows: 4, min: 12,
          models: [
            ['Модель A', '<mark>Overall</mark>, the village <mark>underwent substantial redevelopment along its shoreline</mark>, with several original features <mark>replaced by</mark> tourism-related facilities. <mark>Despite this</mark>, the area around the harbour <mark>remained unchanged</mark>.'],
            ['Модель B', 'Port Elizabeth <mark>was transformed from</mark> a fishing village <mark>into</mark> a tourist resort, with the most dramatic changes occurring <mark>to the east and south of the harbour</mark>, <mark>whereas</mark> the harbour itself <mark>was left untouched</mark>.']],
          after: 'Зверни увагу: «the harbour» зустрічається в тексті як зона («area around the harbour»), а не як перелік об’єктів. Тиха категорія завжди приходить через contrast-слово: despite this · whereas.',
          check: CHK },

        { type: 'build', tag: 'Крок 5 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
            ['Overall, the village underwent substantial redevelopment along its shoreline.'],
            ['Despite this, the area around the harbour remained unchanged.']] }
      ] },

    /* ===================== РАУНД 3 ===================== */
    { label: 'Раунд 3', sub: 'майже самостійно', graph: 'el',
      words: [['extensively modernised','докорінно модернізований'],['closed to traffic','закритий для автотранспорту'],['the north-western corner','північно-західний кут']],
      lead: 'Центр міста, 1960 і 2010. Не все росте: дорогу закрито для авто. Знайди рідкісну зміну й тиху категорію. Підказок мало.',
      blocks: [
        { type: 'write', tag: 'Крок 1 · Напиши сам(а)', tagc: 'blue', title: 'Напиши Overview до карт Elmsworth',
          task: '1–2 речення. Масштаб + характер (включно з рідкісною зміною) + зона + що лишилось без змін.',
          hint: 'Рідкісна зміна: що сталося з дорогою? Тиха категорія: що знаходиться в північно-західному куті?',
          rows: 4, min: 12,
          models: [
            ['Модель A', '<mark>Overall</mark>, the town centre <mark>was extensively modernised</mark>, with several buildings replaced by larger, more modern ones and the main road <mark>closed to traffic</mark>, <mark>whereas</mark> the north-western corner <mark>remained unchanged</mark>.'],
            ['Модель B', 'The centre of Elmsworth <mark>underwent considerable transformation</mark> over the 50-year period, <mark>becoming</mark> largely pedestrianised, <mark>while</mark> one historic landmark in the north-west <mark>was left untouched</mark>.']],
          after: 'Зверни увагу: «closed to traffic» / «pedestrianised»: це рідкісний тип змін («не все росте») і він належить до Overview як характер. Дві історії: модернізація й тиха категорія.',
          check: CHK },

        { type: 'choose', tag: 'Крок 2 · Перевір себе', tagc: 'purple', title: 'Яке речення про Overview правильне?', qs: [
            { q: 'Чи можна в Overview написати «The church remained unchanged»?', opts: [
              ['Краще через зону: the north-western corner remained unchanged. Назви об’єктів лишаємо Body.', 1, 'Overview описує зони; об’єкт іде в Body 2.'],
              ['Так, назви об’єктів у Overview потрібні.', 0, 'Overview без назв об’єктів.'],
              ['Ні, тиха категорія не потрібна в Overview.', 0, 'Тиха категорія обов’язкова: хоча б одним реченням.']] }
          ] },

        { type: 'build', tag: 'Крок 3 · Збери речення', tagc: 'green', title: 'Склади Overview зі слів', items: [
            ['Overall, the town centre was extensively modernised, with several buildings replaced and the main road closed to traffic.'],
            ['The north-western corner remained unchanged throughout the period.']] }
      ] }
    ],

    outro: [
      { type: 'rule', title: '✅ Що ти вмієш після цієї практики', html:
        '<ul><li>Давати <b>масштаб і характер</b> змін одним реченням</li>' +
        '<li>Називати <b>зони</b>, а не об’єкти</li>' +
        '<li>Завжди додавати <b>тиху категорію</b>: що лишилось без змін</li></ul>' +
        '<p class="small" style="margin-top:8px">Далі: Practice · Як групувати зміни.</p>' }
    ]
  };
})();
