/* Словник Module 6 · Maps. Рівень Band 7.0–7.5.
   tier: 'base' = Основа (достатньо для Band 7), 'extra' = Додатково (за бажанням).
   Приклади перевірені на картах модуля (data/graphs.js). */
window.VOCAB = [
{ id:'rule', tier:'base', title:'Одне правило: дві карти, один рух', cols:['Рання карта (past simple)','Пізня карта (past simple)','Нотатка'], rows:[
  ['there was a market · a forest covered the area','a shopping centre was built in its place','було → стало в одному реченні'],
  ['the area was covered by woodland','apartment complexes now stand there','«now» не з Present Perfect'],
  ['where a forest once stood','a housing estate was constructed by 2025','where X once stood = якір «було»'],
  ['Час','Past simple для ВСІХ завершених змін на обох картах.','Present perfect лише як стилістична опція. Не змішуй обидва для однієї зміни.'],
  ['Слабка відповідь','описує кожну карту окремо: спочатку все в 1960, потім все в 2010','Сильна зшиває: a forest → a housing estate.']
]},
{ id:'anchors', tier:'base', title:'Мова локації: якір у кожному напрямку', cols:['Точна позиція','Зона / територія','Близькість'], rows:[
  ['to the north of the town centre','in the northern part of the map','adjacent to the river'],
  ['immediately to the west of the station','in the south-western corner','in close proximity to the harbour'],
  ['on the eastern edge of the site','along the northern boundary','where the station once stood'],
  ['at the southern end of the park','in the centre of the town','in the vicinity of the harbour'],
  ['on the opposite side of the road','on the outskirts of the town','alongside the shore'],
  ['Золота формула','[якір місця] + [об’єкт] + [was + дієслово зміни] + [where X once stood]','To the east of the main road, farmland was redeveloped into an industrial park.'],
  ['Голе «In the north, there is…»','слабко, стеля нижче Band 7','Завжди прив’язуй напрямок до точки відліку (of the town centre, of the harbour).']
]},
{ id:'changes', tier:'base', title:'Чотири типи змін + тиха категорія', cols:['Тип','Дієслова','Приклад'], rows:[
  ['BUILT / CONSTRUCTED','was built · was constructed · was developed into · was established · was erected','A large housing estate was constructed where a forest once stood.'],
  ['DEMOLISHED / REMOVED','was demolished · was knocked down · was cleared · disappeared · was torn down','The old railway station was demolished and replaced by a car park.'],
  ['REPLACED / REDEVELOPED','was replaced by · gave way to · was redeveloped into · was transformed into · made way for','The small market gave way to a large shopping centre.'],
  ['EXPANDED / IMPROVED','was extended · was expanded · was widened · was upgraded · underwent significant development','The main road was widened into a dual carriageway.'],
  ['БЕЗ ЗМІН (тиха категорія)','remained unchanged · was left untouched · underwent no alteration · stayed exactly as it was','The church remained completely unchanged throughout the period.'],
  ['Правило','Одне дієслово максимум двічі на текст. Одна фраза «без змін» обов’язкова.','Це знак контролю, а не ще один «was built».']
]},
{ id:'overview', tier:'base', title:'Overview: масштаб + характер + зони', cols:['Фраза','Приклад','Нотатка'], rows:[
  ['underwent substantial / considerable transformation','Overall, the town underwent substantial transformation between 1990 and 2025.','масштаб'],
  ['developed significantly over the period','The town developed significantly over the 35-year period, expanding in all directions.','характер'],
  ['previously undeveloped land gave way to','Previously undeveloped land on the outskirts gave way to residential and industrial zones.','зони'],
  ['the most striking changes occurred in / to','The most striking changes occurred to the north and east of the town centre.','де найбільше'],
  ['remained unchanged','…, whereas the north-western corner remained unchanged.','тиха категорія'],
  ['Заборонено в Overview','назви об’єктів · точні локації · «was built» · причини','Overview описує картину, а не деталі.']
]},
{ id:'intro', tier:'base', title:'Introduction: 3 ходи', cols:['Варіант','Текст','Нотатка'], rows:[
  ['1 · how … changed','The two maps illustrate how Meadow Park changed between 1990 and 2015.','Часовий проміжок завжди!'],
  ['2 · compare the layout','The maps compare the layout of Port Elizabeth in 1985 with its appearance in 2020.','compare … with'],
  ['3 · depict the transformation','The two maps depict the transformation of Elmsworth town centre between 1960 and 2010.','для радикальних змін'],
  ['Три ходи','1) show → illustrate / compare / depict · 2) how X changed → the transformation of X · 3) назви проміжок: between … and … / over the 30-year period','Не копіюй завдання.']
]},
{ id:'templates', tier:'base', title:'Шаблони Body і зв’язки', cols:['Що','Шаблон','Приклад'], rows:[
  ['Рамка однієї зміни','[якір місця], [old feature] + was + дієслово зміни + [new feature], + participle clause','To the west of the harbour, the cottages were demolished and replaced by a hotel complex, reflecting the village’s shift to tourism.'],
  ['Opener Body 1','The most significant development took place to the north of …','The most striking change occurred along the shoreline.'],
  ['Opener Body 2','Several further changes occurred elsewhere. · In contrast, … · Meanwhile, …','Further changes took place to the south.'],
  ['Додати / контраст','Similarly · In addition · In contrast · Whereas','Similarly, farmland to the east was redeveloped into an industrial park.'],
  ['Нова зона / послідовність','Elsewhere in the town, … · Further to the south, … · In its place · Consequently','In its place, a car park was constructed.'],
  ['Фрази «було»','the original market · the former bus station · on land that was formerly forested · where a forest once stood · previously occupied by cottages','']
]},
{ id:'traps', tier:'base', title:'Пастки для україномовних', cols:['Пастка','✗','✓'], rows:[
  ['«in north» без the','In north there is a park.','In the north / To the north of the centre…'],
  ['подвійне дієслово','The market was became a shopping centre.','became / was replaced by'],
  ['«near» у кожному реченні','near the river… near the road…','adjacent to · in close proximity to · along the boundary'],
  ['transformed БЕЗ into','was transformed a school','was transformed INTO a school'],
  ['«on the place of»','on the place of the old station','in place of / where the station once stood'],
  ['There is… There is…','There is a hotel. There is a golf course.','To the west, a car park now occupies the site.'],
  ['неповний пасив','the station was demolish','the station was demolished'],
  ['«became to be bigger»','The park became to be bigger.','The park was extended / grew considerably.'],
  ['«map shows us»','the map shows us that…','the maps show (без us)'],
  ['Фінальна перевірка (2 хв)','1) кожен напрямок має якір? 2) «was became» десь? 3) одне дієслово зміни 2+ рази? 4) є фраза «без змін»? 5) overview без назв об’єктів?','П’ять «так» = Band 7.5.']
]}
];
