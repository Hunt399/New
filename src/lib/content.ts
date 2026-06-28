import type {
  NavItem,
  Advantage,
  ProcessStep,
  Variant,
  BoughtCar,
  Review,
  FaqItem,
  ContactInfo,
} from "@/types";

export const CONTACTS: ContactInfo = {
  phones: ["+38 (067) 776-11-29", "+38 (063) 615-21-27"],
  email: "Avto-care@ukr.net",
  address: "Киев, ул. Бережанская, 13",
};

export interface ServiceLink {
  label: string;
  slug: string;
}

// Услуги submenu — slugs mirror the original /service/<slug>/ paths
export const SERVICES: ServiceLink[] = [
  { label: "Выкуп авто в любом состоянии", slug: "vykup-avto-v-lyubom-sostoyanii" },
  { label: "Выкуп авто на запчасти", slug: "vykup-avto-na-zapchasti" },
  { label: "Выкуп грузовых авто", slug: "vykup-gruzovyh-avto" },
  { label: "Выкуп залоговых авто", slug: "vykup-zalogovyh-avto" },
  { label: "Выкуп кредитных авто", slug: "vykup-kreditnyh-avto" },
  { label: "Выкуп нерастаможенных авто", slug: "vykup-nerastamozhennyh-avto-na-evronomerah" },
  { label: "Выкуп проблемных авто", slug: "vykup-problemnyh-avto" },
  { label: "Выкуп старых авто ВАЗ, ЗАЗ", slug: "vykup-staryh-avto" },
  { label: "Оценка авто онлайн", slug: "oczenka-avto-onlajn" },
  { label: "Выкуп авто без документов", slug: "vykup-avto-bez-dokumentov-v-kieve" },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/service", hasDropdown: true },
  { label: "Блог", href: "/blog" },
  { label: "О нас", href: "/o-kompanii" },
  { label: "Контакты", href: "/kontakty" },
];

export const HERO = {
  title: "Выкуп авто в Киеве",
  subtitle: [
    "Узнайте стоимость своего авто сейчас:",
    "Получите максимальную сумму за свое авто уже сегодня.",
    "Автовыкуп в Киеве.",
  ],
  formTitle: "Узнайте стоимость своего авто сейчас:",
  formSubtitle: [
    "Получите максимальную сумму за своё авто уже сегодня",
    "Автовыкуп в Киеве",
  ],
};

export const WHY_US_INTRO =
  "AvtoCar осуществляет выкуп подержанных автомобилей с 2016 года. За это время мы заслужили большое количество положительных отзывов от благодарных клиентов не только из Киева, но и со всей территории Украины. С нашими отзывами Вы можете ознакомиться на главной странице сайта.";

export const ADVANTAGES: Advantage[] = [
  {
    icon: "/images/advantages-1.png",
    title: "Выгодная цена",
    description: "Наше предложение будет самым адекватным на рынке Киева",
  },
  {
    icon: "/images/advantages-2.png",
    title: "Деньги за 1 час",
    description: "Вы получаете всю сумму максимально быстро и выгодно для Вас",
  },
  {
    icon: "/images/advantages-3.png",
    title: "Документы и оформление",
    description: "Все оформление мы берем на себя и Вы не платите ни копейки",
  },
  {
    icon: "/images/advantages-4.png",
    title: "Любое состояние",
    description:
      "Нам интересен Ваш автомобиль в ЛЮБОМ состоянии, даже если он не на ходу",
  },
];

export const PROFITABLE = {
  title: "Автовыкуп - это выгодно",
  text: "Компания AvtoCar предлагает услугу выкуп авто в Киеве. Мы готовы приобрести любые автомобили: новые, бу, после ДТП и прочие. Пробег, текущее состояние и количество предыдущих владельцев не играет решающей роли. Оплата – в день осмотра машины, а цена доходит до 94% от текущей рыночной стоимости вашего авто.",
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    icon: "/images/plan-1.png",
    title: "ЗАЯВКА",
    description: "Оставьте заявку на сайте или позвоните",
  },
  {
    number: 2,
    icon: "/images/plan-2.png",
    title: "ВЫЕЗД ОЦЕНЩИКА",
    description:
      "мы бесплатно приедем к вам для осмотра авто в любую точку Киева и области",
  },
  {
    number: 3,
    icon: "/images/plan-3.png",
    title: "ОФОРМЛЕНИЕ",
    description: "от вас нужны только паспорт, ИНН и технический паспорт на автомобиль",
  },
  {
    number: 4,
    icon: "/images/plan-4.png",
    title: "ВЫПЛАТА ДЕНЕГ",
    description: "рассчитываемся с вами наличными прямо на месте",
  },
];

export const VARIANTS: Variant[] = [
  { icon: "/images/variant-clock.png", label: "Выкуп старых авто ВАЗ, ЗАЗ" },
  { icon: "/images/variant-dtp.png", label: "Выкуп автомобилей после ДТП" },
  { icon: "/images/variant-repair.png", label: "Выкуп неисправных автомобилей" },
];

export const CTA = {
  lines: ["Обратитесь к нам", "и получите деньги", "за Ваш автомобиль", "в течении часа !"],
  button: "ОБРАТНЫЙ ЗВОНОК",
  image: "/images/telegka.jpg",
};

export const DOCS = {
  title: "ДОКУМЕНТЫ, КОТОРЫЕ НУЖНО ИМЕТЬ, ЧТОБЫ ПРОДАТЬ АВТОМОБИЛЬ",
  image: "/images/handshake.jpg",
  items: [
    "технический паспорт на автомобиль",
    "доверенность (если Вы являетесь доверительным лицом транспортного средства)",
    "идентификационный код и паспорт",
    "если автомобиль был в кредите - письмо о закрытие кредита",
  ],
};

export const BRANDS_TITLE = "Мы занимаемся авто выкупом таких марок машин:";
export const BRANDS: string[] = [
  "Skoda", "Opel", "Ford", "Toyota", "BMW", "Honda", "KIA", "Jaguar",
  "Aston Martin", "Bugatti", "Dodge", "Maserati", "Acura", "Alfa Romeo",
  "Bentley", "Lexus", "Chery", "Citroen", "Dacia", "Tesia", "Ferrari",
  "Hummer", "Maybach", "Mini", "Nissan", "Lada", "Daewoo", "Peugeot",
  "Shevrolet", "Volkswagen", "Hyundai", "Mercedes", "Mazda", "Rolls-Royce",
  "Cadilac", "Chrysler", "Fiat", "Volvo", "Suzuki", "SMART", "Seat",
  "Renault", "Geely", "Porsche", "Land Rover", "Infinity", "Mitsubishi",
  "Ssang Yong",
];

export const SLIDER_TITLE = "ПОСЛЕДНИЕ ВЫКУПЛЕННЫЕ НАМИ АВТОМОБИЛИ";
export const BOUGHT_CARS: BoughtCar[] = [
  { image: "/images/slider/slide-1.jpg", model: "LEXUS LX 570 2008г", mileage: "пробег 200 тыс. км", price: "был выкуплен за $29 500" },
  { image: "/images/slider/slide-2.jpg", model: "TOYOTA RAV-4 2008г", mileage: "пробег 120 тыс. км", price: "был выкуплен за $10 500" },
  { image: "/images/slider/slide-3.jpg", model: "TOYOTA RAV-4 2008г", mileage: "пробег 147 тыс. км", price: "был выкуплен за $10 000" },
  { image: "/images/slider/slide-4.jpg", model: "TOYOTA AVENSIS 2007г", mileage: "пробег 240 тыс. км", price: "был выкуплен за $7 200" },
  { image: "/images/slider/slide-5.jpg", model: "MAZDA CX-5 2013г", mileage: "пробег 70 тыс. км", price: "был выкуплен за $16 500" },
  { image: "/images/slider/slide-6.jpg", model: "SKODA OCTAVIA A5 2012г", mileage: "пробег 90 тыс. км", price: "был выкуплен за $10 500" },
  { image: "/images/slider/slide-7.jpg", model: "TOYOTA COROLLA 2008г", mileage: "пробег 160 тыс. км", price: "был выкуплен за $8 000" },
  { image: "/images/slider/slide-8.jpg", model: "TOYOTA RAV-4 2013Г", mileage: "пробег 200 тыс. км", price: "был выкуплен за $19 000" },
  { image: "/images/slider/slide-9.jpg", model: "VOLVO XC-90 2018г", mileage: "пробег 45 тыс. км", price: "был выкуплен за $45 000" },
];

export const REVIEWS_TITLE = "Отзывы";
export const REVIEWS: Review[] = [
  {
    avatar: "/images/otzyv-1.jpg",
    text: "Отличный сервис. Действительно наивысшая цена на рынке на мой автомобиль была именно здесь. Удачная сделка.",
    author: "Антон",
  },
  {
    avatar: "/images/otzyv-2.jpg",
    text: "Очень долго не мог продать свой автомобиль, люди смотрели и не покупали.Времени на приведение авто в красивый вид совсем не было.Специалист из AvtoCar приехал прямо в день заявки, оценил авто, сделали доверенность у нотариуса за 30 минут и я получил деньги. Сделка прошла успешно, быстро выкупили авто. Спасибо за вашу работу.",
    author: "Роман, Киев",
  },
  {
    avatar: "/images/otzyv-3.jpg",
    text: "Нужно было быстро продать свою машину после ДТП. Сделка прошла гладко и по хорошей цене. При этом деньги я получила через час.",
    author: "Ольга, Киев",
  },
  {
    avatar: "/images/otzyv-4.jpg",
    text: "Очень понравилось обслуживание. Мне нужен был автовыкуп срочно. Я ознакомился с информацией на сайте и там же заполнил анкету на главной странице. Со мной уже через 10 минут связались и оценщик приехал где-то в течении часа. Осмотрел авто и через 50 минут я получил деньги.",
    author: "Василий, Киев",
  },
];

export const FAQ_TITLE = "Популярные вопросы";
export const FAQ: FaqItem[] = [
  {
    question: "Есть ли у вас выкуп авто дорого?",
    answer:
      "Да, мы предлагаем высокую стоимость авто. Чтобы уточнить ориентировочную цену, свяжитесь с нашими менеджерами. Сотрудники AvtoCar зададут Вам несколько вопросов (марка и модель ТС, год выпуска, пробег, состояние кузова и общее техническое состояние), после чего сориентируют по примерной стоимости автовыкупа в Киеве. Если автомобиль в хорошем техническом состоянии, без подкрасов по кузову – мы готовы предложить до 94% стоимости уже сегодня.",
  },
  {
    question: "Выкупаете ли вы старые авто?",
    answer:
      "Да, мы готовы к автовыкупу любых автомобилей, независимо от года выпуска. Найти покупателя на старую модель особенно сложно. Никто не хочет связываться с «раритетными» экземплярами, особенно, если авто был каждый день на ходу. Мы готовы выручить Вас в этой ситуации и организовать выкуп автомобиля с любым годом выпуска.",
  },
  {
    question: "Быстро ли происходит выкуп авто?",
    answer:
      "Да, мы предлагаем очень быстрый расчет. Вся процедура занимает всего несколько часов: Вы оставляете заявку на сайте и в течение 10 минут Вам перезванивает менеджер компании AvtoCar для уточнения деталей об авто. Также, менеджер спросит Ваш адрес и сориентирует по стоимости, если это необходимо. Далее в течение часа к Вам приедет оценщик компании. Он произведет осмотр и предложит определенную сумму автовыкупа. Если Вас все устраивает – производим расчет и заключаем договор купли-продажи на месте. Не нужно ждать задатков или, пока клиент насобирает нужную сумму. Мы выплачиваем всю стоимость авто в первый день.",
  },
  {
    question: "Надежно ли продавать авто по автовыкупу?",
    answer:
      "Компания AvtoCar работает на рынке Киева с 2016 года. За это время мы организовали автовыкуп сотен разных автомобилей, и все наши клиенты остались довольны не только полученными деньгами, но и качеством сервиса. Вам не о чем переживать: Вы получаете полную стоимость машины в первый день и в этот же день мы заключаем договор купли-продажи и переоформляем транспортное средство. Вам не будут приходить штрафы с камер фотофиксации скорости, поскольку авто больше не числится за Вами. Сотрудничество с AvtoCar по выкупу авто – это быстро, качественно и надежно.",
  },
];
