// src/util/initData.js
import { nanoid } from 'nanoid';

export const booksData = () => {
    if (!localStorage.getItem('books')) {
        const books = [
            {
                id: nanoid(10),
                title: '1984',
                author: 'Джордж Оруэлл',
                year: 1949,
                category: 'Фантастика',
                price: 200,
                description: 'Роман-антиутопия, описывающий тоталитарное общество будущего. Главный герой Уинстон Смит работает в Министерстве Правды, где переписывает историю. Он начинает вести дневник, что является преступлением, и встречает Джулию, с которой у него завязывается запретный роман.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Война и мир',
                author: 'Лев Толстой',
                year: 1869,
                category: 'Классика',
                price: 500,
                description: 'Эпический роман, охватывающий события наполеоновских войн. История нескольких аристократических семей, их судеб и взаимоотношений на фоне исторических событий. Главные герои — Пьер Безухов, Андрей Болконский и Наташа Ростова.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Преступление и наказание',
                author: 'Фёдор Достоевский',
                year: 1866,
                category: 'Драма',
                price: 300,
                description: 'Роман о бывшем студенте Родионе Раскольникове, который убивает старуху-процентщицу. Его мучает совесть, и он пытается найти оправдание своему поступку. В процессе он встречает Соню Мармеладову, которая помогает ему найти путь к искуплению.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Убийство в Восточном экспрессе',
                author: 'Агата Кристи',
                year: 1934,
                category: 'Мистика',
                price: 250,
                description: 'Детективный роман о расследовании убийства в поезде. Эркюль Пуаро, знаменитый сыщик, оказывается в поезде, где происходит убийство. Он должен разобраться в сложной паутине улик и мотивов, чтобы найти убийцу.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Гордость и предубеждение',
                author: 'Джейн Остин',
                year: 1813,
                category: 'Роман',
                price: 150,
                description: 'История любви между Элизабет Беннет и мистером Дарси. Их отношения развиваются на фоне социальных и семейных интриг. Элизабет должна преодолеть свое предубеждение, а Дарси — свою гордость.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Маленькие женщины',
                author: 'Луиза Мэй Олкотт',
                year: 1868,
                category: 'Роман',
                price: 180,
                description: 'Роман о жизни четырех сестер — Мег, Джо, Бет и Эми Марч. Они растут и учатся в трудные времена, поддерживая друг друга. Книга рассказывает о их мечтах, трудностях и первой любви.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Скотный двор',
                author: 'Джордж Оруэлл',
                year: 1945,
                category: 'Политическая сатира',
                price: 220,
                description: 'Аллегорическая повесть о животных, которые свергают фермера и устанавливают свое правление. Однако со временем свиньи, возглавившие революцию, становятся такими же тиранами, как и их бывший хозяин.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Три мушкетера',
                author: 'Александр Дюма',
                year: 1844,
                category: 'Приключения',
                price: 300,
                description: 'История о молодом гасконце д’Артаньяне, который приезжает в Париж, чтобы стать мушкетером. Вместе с тремя друзьями — Атосом, Портосом и Арамисом — он вступает в борьбу с кардиналом Ришелье и его агентами.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Тёмные аллеи',
                author: 'Иван Бунин',
                year: 1946,
                category: 'Литературный роман',
                price: 270,
                description: 'Сборник рассказов о любви, измене и человеческих страстях. Бунин мастерски передает атмосферу и настроение каждой истории, погружая читателя в мир своих героев.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Железный поток',
                author: 'Сергей Шаргунов',
                year: 2011,
                category: 'Современная проза',
                price: 350,
                description: 'Роман о событиях Гражданской войны в России. Главный герой, Артем, проходит через испытания и трудности, чтобы найти свое место в хаосе революционных событий.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Затмение',
                author: 'Питер Страуб',
                year: 1996,
                category: 'Триллер',
                price: 400,
                description: 'Роман ужасов о группе друзей, которые сталкиваются с таинственными и смертельно опасными событиями. Их прошлое возвращается, чтобы напомнить о давно забытых тайнах.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'В поисках утраченного времени',
                author: 'Марсель Пруст',
                year: 1913,
                category: 'Роман',
                price: 500,
                description: 'Многотомный роман о жизни и воспоминаниях рассказчика. Пруст исследует природу памяти, времени и человеческих отношений через призму личных переживаний.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Письма к брату',
                author: 'Фёдор Достоевский',
                year: 1865,
                category: 'Письма',
                price: 220,
                description: 'Сборник писем Достоевского к своему брату Михаилу. В них он делится своими мыслями, переживаниями и творческими планами.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Мартин Иден',
                author: 'Джек Лондон',
                year: 1909,
                category: 'Автобиографический роман',
                price: 280,
                description: 'История молодого моряка Мартина Идена, который стремится стать писателем. Он влюбляется в девушку из высшего общества и пытается добиться успеха, чтобы быть достойным ее.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Поднятая целина',
                author: 'Михаил Шолохов',
                year: 1932,
                category: 'Драма',
                price: 260,
                description: 'Роман о коллективизации на Дону. Главный герой, Давыдов, приезжает в станицу, чтобы организовать колхоз. Он сталкивается с сопротивлением кулаков и должен найти способ убедить крестьян.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Доктор Живаго',
                author: 'Борис Пастернак',
                year: 1957,
                category: 'Роман',
                price: 330,
                description: 'История жизни доктора Юрия Живаго на фоне революционных событий в России. Роман о любви, предательстве и поиске смысла жизни.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Улисс',
                author: 'Джеймс Джойс',
                year: 1922,
                category: 'Современная литература',
                price: 450,
                description: 'Роман о одном дне из жизни Леопольда Блума и Стивена Дедала в Дублине. Джойс использует поток сознания, чтобы показать внутренний мир своих героев.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Танец с драконами',
                author: 'Джордж Р.Р. Мартин',
                year: 2011,
                category: 'Фэнтези',
                price: 600,
                description: 'Пятая книга саги "Песнь Льда и Огня". Продолжение эпических событий в мире Вестероса, где сражаются за власть несколько семей.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Сумерки',
                author: 'Стефани Майер',
                year: 2005,
                category: 'Фэнтези',
                price: 350,
                description: 'История любви между обычной девушкой Беллой и вампиром Эдвардом. Их отношения сталкиваются с множеством испытаний и опасностей.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Девушка в поезде',
                author: 'Паула Хоукинс',
                year: 2015,
                category: 'Триллер',
                price: 400,
                description: 'Психологический триллер о женщине, которая каждый день ездит на поезде мимо дома, где живет идеальная пара. Однажды она становится свидетелем шокирующего события.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Коллекционер',
                author: 'Джон Фаулз',
                year: 1963,
                category: 'Триллер',
                price: 360,
                description: 'Роман о молодом человеке, который похищает девушку и держит ее в плену. История рассказана от лица похитителя и его жертвы.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Ход королевы',
                author: 'Уолтер Тевис',
                year: 1983,
                category: 'Роман',
                price: 370,
                description: 'История о сироте Бет Хармон, которая становится шахматным гением. Ее жизнь полна борьбы и побед на пути к вершине шахматного мира.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Черный обелиск',
                author: 'Эрих Мария Ремарк',
                year: 1956,
                category: 'Роман',
                price: 300,
                description: 'Роман о жизни в послевоенной Германии. Главный герой, Людвиг, работает в похоронном бюро и пытается найти смысл жизни среди разрухи и отчаяния.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Всадник без головы',
                author: 'Роберт Луис Стивенсон',
                year: 1889,
                category: 'Приключения',
                price: 280,
                description: 'Роман о приключениях молодого человека, который оказывается втянутым в опасные события. Он должен разоблачить преступников и спасти свою жизнь.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Над пропастью во ржи',
                author: 'Джером Д. Сэлинджер',
                year: 1951,
                category: 'Роман',
                price: 300,
                description: 'История подростка Холдена Колфилда, который ищет свое место в мире. Он сталкивается с лицемерием взрослых и пытается сохранить свою искренность.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Мастер и Маргарита',
                author: 'Михаил Булгаков',
                year: 1967,
                category: 'Роман',
                price: 500,
                description: 'Мистическая история о визите дьявола в Москву. Воланд и его свита устраивают магические представления, а Мастер пишет роман о Понтии Пилате.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Анна Каренина',
                author: 'Лев Толстой',
                year: 1878,
                category: 'Роман',
                price: 450,
                description: 'История любви и предательства. Анна Каренина, замужняя женщина, влюбляется в офицера Вронского. Их отношения приводят к трагическим последствиям.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Идиот',
                author: 'Фёдор Достоевский',
                year: 1869,
                category: 'Роман',
                price: 320,
                description: 'Князь Мышкин возвращается в Россию после лечения в Швейцарии. Его доброта и искренность сталкиваются с корыстью и лицемерием окружающих.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Остров сокровищ',
                author: 'Роберт Луис Стивенсон',
                year: 1883,
                category: 'Приключения',
                price: 290,
                description: 'История о поисках сокровищ на таинственном острове. Молодой Джим Хокинс и его друзья сталкиваются с пиратами и опасностями.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Джейн Эйр',
                author: 'Шарлотта Бронте',
                year: 1847,
                category: 'Роман',
                price: 310,
                description: 'История сироты Джейн Эйр, которая проходит через трудности и находит свое счастье. Она работает гувернанткой и влюбляется в мистера Рочестера.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Моби Дик',
                author: 'Герман Мелвилл',
                year: 1851,
                category: 'Приключения',
                price: 380,
                description: 'Роман о капитане Ахаве, одержимом идеей поймать гигантского кита Моби Дика. История о борьбе человека с природой и собственными демонами.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Фауст',
                author: 'Иоганн Вольфганг фон Гёте',
                year: 1808,
                category: 'Трагедия',
                price: 340,
                description: 'Философская драма о докторе Фаусте, который заключает сделку с дьяволом. В обмен на знания и молодость он отдает свою душу.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Дон Кихот',
                author: 'Мигель де Сервантес',
                year: 1605,
                category: 'Роман',
                price: 400,
                description: 'История о рыцаре Дон Кихоте, который отправляется в путешествие, чтобы совершать подвиги. Его верный оруженосец Санчо Панса сопровождает его в приключениях.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Одиссея',
                author: 'Гомер',
                year: -800,
                category: 'Эпос',
                price: 300,
                description: 'Древнегреческий эпос о путешествии Одиссея домой после Троянской войны. Он преодолевает множество испытаний и встречает мифических существ.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Гамлет',
                author: 'Уильям Шекспир',
                year: 1603,
                category: 'Трагедия',
                price: 330,
                description: 'Трагедия о принце Гамлете, который мстит за убийство своего отца. Он сталкивается с предательством и сомнениями, пытаясь найти истину.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Великий Гэтсби',
                author: 'Фрэнсис Скотт Фицджеральд',
                year: 1925,
                category: 'Роман',
                price: 360,
                description: 'История о миллионере Джее Гэтсби, который устраивает роскошные вечеринки, чтобы привлечь внимание своей возлюбленной Дейзи.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Сто лет одиночества',
                author: 'Габриэль Гарсия Маркес',
                year: 1967,
                category: 'Магический реализм',
                price: 420,
                description: 'Роман о нескольких поколениях семьи Буэндиа в вымышленном городе Макондо. История полна магических событий и трагических судеб.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Шантарам',
                author: 'Грегори Дэвид Робертс',
                year: 2003,
                category: 'Роман',
                price: 480,
                description: 'Автобиографический роман о беглом заключенном, который скрывается в Индии. Он становится частью криминального мира и находит новых друзей.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Алхимик',
                author: 'Пауло Коэльо',
                year: 1988,
                category: 'Философская сказка',
                price: 250,
                description: 'История молодого пастуха Сантьяго, который отправляется в путешествие, чтобы найти сокровище. Он учится следовать своей мечте и слушать свое сердце.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Атлант расправил плечи',
                author: 'Айн Рэнд',
                year: 1957,
                category: 'Философский роман',
                price: 550,
                description: 'Роман о будущем, где талантливые люди исчезают, чтобы создать свое идеальное общество. Главная героиня Дэгни Таггерт пытается спасти мир от краха.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Норвежский лес',
                author: 'Харуки Мураками',
                year: 1987,
                category: 'Роман',
                price: 390,
                description: 'История о студенте Тору Ватанабэ, который вспоминает свою юность и первую любовь. Роман о потерях, дружбе и самопознании.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Тысяча сияющих солнц',
                author: 'Халед Хоссейни',
                year: 2007,
                category: 'Роман',
                price: 410,
                description: 'История о двух женщинах в Афганистане, которые сталкиваются с трудностями и находят поддержку друг в друге. Роман о дружбе, любви и выживании.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Декамерон',
                author: 'Джованни Боккаччо',
                year: 1353,
                category: 'Новеллы',
                price: 370,
                description: 'Сборник новелл, рассказанных группой молодых людей, скрывающихся от чумы. Истории полны юмора, сатиры и человеческих страстей.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Три товарища',
                author: 'Эрих Мария Ремарк',
                year: 1936,
                category: 'Роман',
                price: 340,
                description: 'История о дружбе трех мужчин, которые вместе проходят через трудности послевоенной Германии. Роман о любви, предательстве и верности.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Стоик',
                author: 'Теодор Драйзер',
                year: 1947,
                category: 'Роман',
                price: 430,
                description: 'Роман о жизни и карьере магната Фрэнка Каупервуда. Он сталкивается с финансовыми трудностями и личными драмами, но не сдается.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Бойцовский клуб',
                author: 'Чак Паланик',
                year: 1996,
                category: 'Роман',
                price: 350,
                description: 'История о мужчине, который создает подпольный бойцовский клуб, чтобы справиться с внутренними демонами. Роман о бунте против общества и поиске себя.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Американский психопат',
                author: 'Брет Истон Эллис',
                year: 1991,
                category: 'Триллер',
                price: 400,
                description: 'Роман о молодом и успешном бизнесмене, который ведет двойную жизнь. Днем он работает на Уолл-стрит, а ночью совершает жестокие преступления.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Над кукушкиным гнездом',
                author: 'Кен Кизи',
                year: 1962,
                category: 'Роман',
                price: 380,
                description: 'История о пациентах психиатрической клиники, которые борются с тиранией главной медсестры. Главный герой, МакМерфи, пытается изменить порядки в больнице.',
                available: true,
            },
            {
                id: nanoid(10),
                title: 'Заводной апельсин',
                author: 'Энтони Бёрджесс',
                year: 1962,
                category: 'Фантастика',
                price: 320,
                description: 'Роман о подростке Алексе, который живет в будущем обществе, где насилие стало нормой. Он проходит через экспериментальное лечение, чтобы изменить свое поведение.',
                available: true,
            },
        ];
        localStorage.setItem('books', JSON.stringify(books));
    }
};
