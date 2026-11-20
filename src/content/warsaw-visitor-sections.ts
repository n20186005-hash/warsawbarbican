export const sectionLabels = [
  { explore: "Poznaj to miejsce", tips: "Jak zaplanować wizytę", highlights: "Co warto zobaczyć", name: "Nazwa lokalna", type: "Rodzaj miejsca", area: "Okolica", phone: "Telefon", opening: "Godziny otwarcia", tickets: "Bilety i ceny", discover: "Historia, architektura i doświadczenie", advice: "Przed wizytą", stay: "Gdzie się zatrzymać", reviews: "Opinie odwiedzających", transitRoute: "Wyznacz trasę transportem publicznym", reviewLink: "Znajdź miejsce i opinie w Google Maps", transport: "Adres i mapa", official: "Aktualności i godziny u gospodarza" },
  { explore: "Explore the site", tips: "Plan your visit", highlights: "What to look for", name: "Local name", type: "Site type", area: "Area", phone: "Phone", opening: "Opening hours", tickets: "Admission and prices", discover: "History, architecture and experiences", advice: "Before you go", stay: "Where to stay", reviews: "Visitor reviews", transitRoute: "Plan a public transport route", reviewLink: "Find the place and reviews on Google Maps", transport: "Address and map", official: "Check the operator’s latest visitor information" },
  { explore: "探索此地", tips: "遊覽建議", highlights: "景點特色", name: "當地名稱", type: "景點型別", area: "所在區域", phone: "聯絡電話", opening: "開放時間", tickets: "門票價格", discover: "發現魅力：歷史、建築與體驗", advice: "遊覽須知", stay: "住宿建議", reviews: "遊客評價", transitRoute: "規劃大眾運輸路線", reviewLink: "在 Google 地圖查詢此地和評價", transport: "交通指南與地圖", official: "檢視管理單位的最新參觀公告" },
  { explore: "Знакомство с местом", tips: "Планирование визита", highlights: "Что посмотреть", name: "Местное название", type: "Тип объекта", area: "Район", phone: "Телефон", opening: "Часы работы", tickets: "Билеты и цены", discover: "История, архитектура и впечатления", advice: "Перед визитом", stay: "Где остановиться", reviews: "Отзывы посетителей", transitRoute: "Маршрут на общественном транспорте", reviewLink: "Найти место и отзывы в Google Картах", transport: "Адрес и карта", official: "Актуальная информация для посетителей" },
  { explore: "Den Ort entdecken", tips: "Besuch planen", highlights: "Sehenswertes", name: "Ortsname", type: "Art des Ortes", area: "Umgebung", phone: "Telefon", opening: "Öffnungszeiten", tickets: "Eintritt und Preise", discover: "Geschichte, Architektur und Erlebnisse", advice: "Vor dem Besuch", stay: "Übernachten", reviews: "Besucherbewertungen", transitRoute: "Route mit öffentlichen Verkehrsmitteln planen", reviewLink: "Ort und Rezensionen auf Google Maps finden", transport: "Adresse und Karte", official: "Aktuelle Hinweise des Betreibers" },
] as const;

export const lodgingAdvice = {
  oldTown: [
    "Nocleg blisko placu Zamkowego ułatwia poranny spacer. Przy ciężkich bagażach sprawdź dojście od miejsca wysiadania, bo ulice rynku są brukowane.",
    "Stay near Castle Square for an early Old Town walk. With heavy luggage, check the last stretch from your drop-off point because the market lanes are cobbled.",
    "住宿可選城堡廣場附近，方便清早步行進老城。拖大型行李時，先查下車點到住宿的最後一段，市集周邊多為石板路。",
    "Жильё у Замковой площади удобно для утренней прогулки. С тяжёлым багажом заранее проверьте последний участок пути: возле рынка брусчатка.",
    "Eine Unterkunft am Schlossplatz eignet sich für einen frühen Altstadtspaziergang. Prüfen Sie mit schwerem Gepäck den letzten Abschnitt über das Kopfsteinpflaster.",
  ],
  walls: [
    "Okolice Ratusza Arsenał są wygodne na dojazd metrem. Z noclegu przy Podwalu łatwiej rozpocząć spacer od murów.",
    "Stay near Ratusz Arsenał for metro access, or near Podwale to start the morning by the city walls.",
    "重視地鐵交通可住 Ratusz Arsenał 一帶，想清早從城牆起步則可選 Podwale 附近。",
    "У Ратуши Арсенал удобно пользоваться метро. Жильё у Подвале позволяет начать утро у стен.",
    "Am Ratusz Arsenał ist die Metro nah. Eine Unterkunft an der Podwale eignet sich für einen frühen Start an der Stadtmauer.",
  ],
  newTown: [
    "Nocleg w rejonie Freta ułatwia zwiedzanie Nowego Miasta. Jeśli wracasz znad Wisły, weź pod uwagę podejście pod górę.",
    "Stay near Freta to explore the New Town on foot. Factor in an uphill return when coming back from the Vistula.",
    "想步行逛新城可住 Freta 附近。若晚上從維斯瓦河岸回住宿，預留上坡步行時間。",
    "Жильё у Фреты удобно для прогулок по Новому городу. При возвращении с Вислы учитывайте подъём.",
    "Eine Unterkunft an der Freta ist praktisch für die Neustadt. Rechnen Sie bei der Rückkehr von der Weichsel mit einem Anstieg.",
  ],
  royalRoute: [
    "Nocleg w rejonie Nowego Światu sprawdzi się przy zwiedzaniu Traktu Królewskiego i dojazdach metrem.",
    "Stay near Nowy Świat to combine the Royal Route with metro access for trips across Warsaw.",
    "若希望兼顧皇家大道步行和地鐵轉乘，可選 Nowy Świat 一帶住宿。",
    "Район Новы-Свят удобен, если хочется совместить прогулки по Королевскому тракту и поездки на метро.",
    "Rund um Nowy Świat lassen sich Spaziergänge auf dem Königsweg mit Metrofahrten verbinden.",
  ],
} as const;
