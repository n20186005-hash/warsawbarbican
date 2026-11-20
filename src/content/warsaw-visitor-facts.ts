import type { VisitorTopic } from "@/guides";

export const topicTypes = {
  "market-square": "square", "warsaw-mermaid": "monument", "museum-of-warsaw": "museum",
  "old-town-cellars": "cellars", "castle-square": "square", "royal-castle": "palace",
  "sigismunds-column": "monument", "st-johns-archcathedral": "church", "kanonia-square": "square",
  "gnojna-gora-viewpoint": "viewpoint", "stone-steps": "stairs", "piwna-street": "street",
  "st-martins-church": "church", "podwale-walk": "walls", "little-insurgent-monument": "monument",
  "barbican-architecture": "walls", "unesco-reconstruction": "heritage", "freta-street": "street",
  "curie-museum": "museum", "new-town-market-square": "square", "st-kazimierz-church": "church",
  "mostowa-street": "street", "fountain-park": "fountain", "vistula-boulevards": "river",
  "krasinski-square": "square", "warsaw-uprising-monument": "monument", "krasinski-garden": "garden",
  "st-annes-church": "church", "krakowskie-przedmiescie": "street", "presidential-palace": "palace",
  "university-main-gate": "campus",
} as const satisfies Record<VisitorTopic, string>;

export const typeNames = {
  square: ["Plac historyczny", "Historic square", "歷史廣場", "Историческая площадь", "Historischer Platz"],
  monument: ["Pomnik", "Monument", "紀念雕塑", "Памятник", "Denkmal"],
  museum: ["Muzeum", "Museum", "博物館", "Музей", "Museum"],
  cellars: ["Piwnice i wystawa", "Historic cellars and exhibition", "歷史地窖與展覽", "Исторические подвалы и выставка", "Historische Keller und Ausstellung"],
  palace: ["Rezydencja historyczna", "Historic palace", "歷史宮殿", "Исторический дворец", "Historischer Palast"],
  church: ["Zabytkowa świątynia", "Historic church", "歷史教堂", "Исторический храм", "Historische Kirche"],
  viewpoint: ["Punkt widokowy", "Viewpoint", "觀景臺", "Смотровая площадка", "Aussichtspunkt"],
  stairs: ["Zabytkowa ulica schodkowa", "Historic stepped lane", "歷史石階巷", "Исторический переулок со ступенями", "Historische Treppengasse"],
  street: ["Ulica historyczna", "Historic street", "歷史街道", "Историческая улица", "Historische Straße"],
  walls: ["Dawne fortyfikacje", "Historic fortifications", "歷史防禦工事", "Исторические укрепления", "Historische Befestigung"],
  heritage: ["Historyczna dzielnica UNESCO", "UNESCO-listed historic district", "聯合國教科文組織世界遺產街區", "Исторический район ЮНЕСКО", "Historischer Welterbebezirk der UNESCO"],
  fountain: ["Park z fontannami", "Fountain park", "噴泉公園", "Парк фонтанов", "Fontänenpark"],
  river: ["Promenada nadrzeczna", "Riverside promenade", "河濱步道", "Набережная", "Uferpromenade"],
  garden: ["Zabytkowy ogród publiczny", "Historic public garden", "歷史公共花園", "Исторический общественный сад", "Historischer öffentlicher Garten"],
  campus: ["Historyczna brama uczelni", "Historic university gate", "歷史大學校門", "Исторические университетские ворота", "Historisches Universitätstor"],
} as const;

const free = ["Bezpłatnie.", "Free.", "免費。", "Бесплатно.", "Kostenlos."] as const;
const publicHours = ["Ogólnodostępna przestrzeń zewnętrzna. Sprawdź ewentualne wygrodzenia na miejscu.", "Public outdoor space. Check any temporary barriers on site.", "戶外公共空間，臨時管制依現場公告。", "Открытое общественное пространство. Временные ограничения указаны на месте.", "Öffentlicher Außenbereich. Vorübergehende Absperrungen sind vor Ort ausgeschildert."] as const;
type Copy = readonly [string, string, string, string, string];
type Access = { hours: Copy; tickets: Copy; url?: string; phone?: string };
const publicVisit: Access = { hours: publicHours, tickets: free };
const churchVisit: Access = {
  hours: ["Zwiedzanie poza nabożeństwami, w godzinach otwarcia świątyni.", "Visit when the church is open between services.", "請在教堂開放時段、禮拜間隔參觀。", "Посещение в часы работы храма между службами.", "Besuch während der Öffnungszeiten zwischen Gottesdiensten."],
  tickets: ["Osobne zasady mogą dotyczyć krypt i zwiedzania z przewodnikiem.", "Crypts and guided visits may have separate admission arrangements.", "地下墓室與導覽可能有獨立的入場規定。", "Для крипт и экскурсий могут действовать отдельные правила.", "Für Krypten und Führungen können eigene Zutrittsregeln gelten."],
};

const profiles: Partial<Record<VisitorTopic, Access>> = {
  "museum-of-warsaw": {
    url: "https://muzeumwarszawy.pl/en/visit/",
    hours: ["Wystawa stała: wt., śr. i pt. 9:00–17:00, czw. 9:00–19:00, sob.–niedz. 11:00–18:00. Ostatnie wejście godzinę przed zamknięciem.", "Permanent exhibition: Tue, Wed and Fri 09:00–17:00, Thu 09:00–19:00, Sat–Sun 11:00–18:00. Last entry one hour before closing.", "常設展週二、三、五 09:00–17:00，週四 09:00–19:00，週末 11:00–18:00。閉館前一小時停止入場。", "Постоянная выставка: вт., ср. и пт. 09:00–17:00, чт. 09:00–19:00, сб.–вс. 11:00–18:00. Вход до часа перед закрытием.", "Dauerausstellung: Di., Mi. und Fr. 9–17 Uhr, Do. 9–19 Uhr, Sa.–So. 11–18 Uhr. Letzter Einlass eine Stunde vor Schließung."],
    tickets: ["Wystawa stała 25/18 PLN (normalny/ulgowy), w czwartki bezpłatna. Bilet łączony 35/25 PLN.", "Permanent exhibition PLN 25/18 (regular/reduced), free on Thursdays. Combined ticket PLN 35/25.", "常設展全票 25、優惠票 18 波蘭茲羅提，週四免費。聯票 35／25 波蘭茲羅提。", "Постоянная выставка 25/18 PLN (полный/льготный), по четвергам бесплатно. Общий билет 35/25 PLN.", "Dauerausstellung 25/18 PLN (regulär/ermäßigt), donnerstags frei. Kombiticket 35/25 PLN."],
  },
  "old-town-cellars": {
    url: "https://ciz.muzeumwarszawy.pl/en/visit/", phone: "+48 22 635 34 02",
    hours: ["Centrum przy Brzozowej: śr. i pt. 9:00–17:00, czw. 9:00–18:00, weekend 11:00–17:00. Ostatnie wejście 30 min przed zamknięciem.", "Brzozowa centre: Wed and Fri 09:00–17:00, Thu 09:00–18:00, weekends 11:00–17:00. Last entry 30 minutes before closing.", "Brzozowa 遺產中心週三、五 09:00–17:00，週四 09:00–18:00，週末 11:00–17:00。閉館前 30 分鐘停止入場。", "Центр на Бжозовой: ср. и пт. 09:00–17:00, чт. 09:00–18:00, выходные 11:00–17:00. Вход до 30 минут перед закрытием.", "Zentrum an der Brzozowa: Mi. und Fr. 9–17 Uhr, Do. 9–18 Uhr, Wochenende 11–17 Uhr. Letzter Einlass 30 Minuten vor Schluss."],
    tickets: ["Centrum: 15 PLN normalny, 10 PLN ulgowy, czwartki bezpłatne. Inne piwnice mogą mieć własne zasady.", "Centre: PLN 15 regular, PLN 10 reduced, free on Thursdays. Other cellars can have separate arrangements.", "遺產中心全票 15、優惠票 10 波蘭茲羅提，週四免費。其他地窖站點依各自規定。", "Центр: 15 PLN полный, 10 PLN льготный, по четвергам бесплатно. У других подвалов могут быть свои правила.", "Zentrum: 15 PLN regulär, 10 PLN ermäßigt, donnerstags frei. Andere Keller haben gegebenenfalls eigene Regeln."],
  },
  "royal-castle": {
    url: "https://www.zamek-krolewski.pl/en/godziny-otwarcia-i-ceny-biletow",
    hours: ["Główne trasy wt.–niedz. 10:00–17:00, ostatnie wejście 16:00. W środy obowiązuje specjalna trasa.", "Principal routes Tue–Sun 10:00–17:00, last entry 16:00. Wednesdays follow a special route.", "主要參觀路線週二至週日 10:00–17:00，最晚 16:00 入場。週三採特別路線。", "Основные маршруты вт.–вс. 10:00–17:00, последний вход 16:00. По средам действует специальный маршрут.", "Hauptrouten Di.–So. 10–17 Uhr, letzter Einlass 16 Uhr. Mittwochs gilt eine Sonderroute."],
    tickets: ["Do 31.12.2026: Trasa Królewska lub Muzealna 60/45 PLN, Trasa Zamkowa 95/75 PLN (normalny/ulgowy). Środowa trasa jest bezpłatna.", "Through 31 Dec 2026: Royal or Museum Route PLN 60/45, combined Castle Route PLN 95/75 (regular/reduced). Wednesday’s special route is free.", "截至 2026 年 12 月 31 日，皇家或博物館路線全票／優惠票 60／45，合併城堡路線 95／75 波蘭茲羅提。週三特別路線免費。", "До 31.12.2026: королевский или музейный маршрут 60/45 PLN, общий маршрут 95/75 PLN (полный/льготный). В среду специальный маршрут бесплатный.", "Bis 31.12.2026: Königs- oder Museumsroute 60/45 PLN, kombinierte Schlossroute 95/75 PLN (regulär/ermäßigt). Mittwochs ist die Sonderroute kostenlos."],
  },
  "curie-museum": {
    url: "https://www.mmsc.waw.pl/", phone: "+48 22 831 80 92",
    hours: ["Wt.–pt. 12:00–18:00, sob.–niedz. 11:00–18:00. Poniedziałki zamknięte.", "Tue–Fri 12:00–18:00, Sat–Sun 11:00–18:00. Closed Mondays.", "週二至週五 12:00–18:00，週末 11:00–18:00，週一休館。", "Вт.–пт. 12:00–18:00, сб.–вс. 11:00–18:00. По понедельникам закрыто.", "Di.–Fr. 12–18 Uhr, Sa.–So. 11–18 Uhr. Montags geschlossen."],
    tickets: ["17 PLN normalny, 10 PLN ulgowy, we wtorki bezpłatnie.", "PLN 17 regular, PLN 10 reduced, free on Tuesdays.", "全票 17、優惠票 10 波蘭茲羅提，週二免費。", "17 PLN полный, 10 PLN льготный, по вторникам бесплатно.", "17 PLN regulär, 10 PLN ermäßigt, dienstags frei."],
  },
  "krasinski-garden": {
    hours: ["1.04–31.10: 5:00–24:00. 1.11–31.03: 6:00–22:00.", "1 Apr–31 Oct: 05:00–24:00. 1 Nov–31 Mar: 06:00–22:00.", "4 月 1 日至 10 月 31 日 05:00–24:00。11 月 1 日至 3 月 31 日 06:00–22:00。", "1 апреля – 31 октября: 05:00–24:00. 1 ноября – 31 марта: 06:00–22:00.", "1.4.–31.10.: 5–24 Uhr. 1.11.–31.3.: 6–22 Uhr."],
    tickets: free,
  },
  "barbican-architecture": {
    hours: ["Przejście dostępne przez cały rok. Wystawa działa sezonowo.", "The passage is accessible year-round. The exhibition is seasonal.", "城門通道全年開放。室內展覽按季開放。", "Проход доступен круглый год. Выставка работает сезонно.", "Der Durchgang ist ganzjährig zugänglich. Die Ausstellung ist saisonal."],
    tickets: ["Przejście bezpłatne. W sezonie 2026 wystawa: 12 PLN normalny, 8 PLN ulgowy.", "Passage free. The 2026 exhibition cost PLN 12 regular or PLN 8 reduced.", "城門通道免費。2026 年展季全票 12、優惠票 8 波蘭茲羅提。", "Проход бесплатный. Выставка в сезоне 2026: 12 PLN полный, 8 PLN льготный.", "Durchgang frei. Ausstellung 2026: 12 PLN regulär, 8 PLN ermäßigt."],
  },
  "fountain-park": {
    hours: ["Teren parkowy dostępny w ciągu dnia. Sezonowe pokazy według kalendarza organizatora.", "Visit the park during the day. Seasonal shows follow the organizer’s calendar.", "白天可遊覽公園，季節表演按主辦方公告場次舉行。", "Парк можно осмотреть днём. Сезонные шоу идут по календарю организатора.", "Der Park ist tagsüber zu besichtigen. Saisonale Shows folgen dem Veranstaltungskalender."],
    tickets: free,
  },
  "st-annes-church": {
    hours: ["Godziny kościoła i tarasu dzwonnicy sprawdź osobno.", "Check the church and bell-tower terrace schedules separately.", "教堂與鐘樓觀景臺分別公告開放時間。", "Проверяйте расписания храма и террасы колокольни отдельно.", "Kirche und Turmterrasse haben getrennte Öffnungszeiten."],
    tickets: ["Taras ma osobny bilet.", "The tower terrace has a separate ticket.", "鐘樓觀景臺須另購票。", "На террасу нужен отдельный билет.", "Für die Turmterrasse ist ein separates Ticket erforderlich."],
  },
  "presidential-palace": {
    hours: ["Oglądanie z chodnika przy Krakowskim Przedmieściu.", "Street-side viewing from Krakowskie Przedmieście.", "在克拉科夫郊區街的人行道欣賞外觀。", "Осмотр с тротуара Краковского предместья.", "Außenansicht vom Gehweg an der Krakowskie Przedmieście."],
    tickets: free,
  },
  "university-main-gate": {
    hours: ["Bramę widać z ulicy. Wejście na kampus zgodnie z komunikatami uczelni.", "The gate is visible from the street. Check university notices for campus entry.", "街上可見校門。入校依華沙大學公告。", "Ворота видны с улицы. Доступ в кампус зависит от правил университета.", "Das Tor ist von der Straße sichtbar. Für den Campuszugang gelten die Hinweise der Universität."],
    tickets: free,
  },
};

export function getVisitorFacts(topic: VisitorTopic) {
  return profiles[topic] ?? (topicTypes[topic] === "church" ? churchVisit : publicVisit);
}
