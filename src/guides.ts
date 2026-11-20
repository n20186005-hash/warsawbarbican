import visitorGuides from "@/content/warsaw-guides.json";
import { guideSources, visitorLabels } from "@/content/warsaw-guide-labels";

export const originalTopics = ["tickets-and-opening-hours", "old-town-city-walls-walk"] as const;
export type VisitorTopic = keyof typeof visitorGuides;
export const visitorTopics = Object.keys(visitorGuides) as VisitorTopic[];
export const guideTopics = [...originalTopics, ...visitorTopics];
export type GuideTopic = (typeof guideTopics)[number];

export const guideCopy = {
  en: {
    labels: ["Warsaw Barbican", "Map and directions", "Museum of Warsaw", "More visitor guides"],
    tickets: ["Warsaw Barbican tickets and opening hours", "Walk through the gate for free year-round. The indoor exhibition runs in the summer and requires a ticket.", [
      ["Outdoor visit", "Start at Nowomiejska 15/17, 00-271 Warsaw. Allow 15–25 minutes for the gate and adjoining walls, then continue to the Old Town Market Square."],
      ["Indoor exhibition", "The Museum of Warsaw runs the exhibition on the city's former defenses. Its visitor page lists PLN 12 regular and PLN 8 reduced admission. The 2026 schedule ran from 20 May to 29 August, Wednesday and Saturday from 13:00 to 17:00. Check the museum’s visitor page for the next season and ticket purchase instructions."],
      ["What if the exhibition is closed?", "Use the gate and adjoining walls for an outdoor visit. The museum notes that access may depend on weather conditions."],
    ]],
    walk: ["Warsaw Barbican and Old Town city walls walk", "A self-guided walk from the Barbican to Castle Square via the Old Town Market Square.", [
      ["1. Warsaw Barbican", "Begin at Nowomiejska 15/17. View the rounded brick gate from the New Town side, then walk through the passage and look for the junction with the city walls."],
      ["2. Old Town Market Square", "Follow Nowomiejska into Rynek Starego Miasta. Pause by the mermaid statue. The Museum of Warsaw is at number 42 and provides context for the old fortifications."],
      ["3. Castle Square", "Continue along Świętojańska to Plac Zamkowy. From the square you can see the Royal Castle and Sigismund’s Column. Allow 30–45 minutes including photo stops."],
    ]],
  },
  pl: {
    labels: ["Barbakan Warszawski", "Mapa i dojazd", "Muzeum Warszawy", "Więcej poradników"],
    tickets: ["Barbakan Warszawski – bilety i godziny otwarcia", "Przejście przez bramę jest bezpłatne przez cały rok. Letnia wystawa wewnątrz wymaga biletu.", [
      ["Zwiedzanie na zewnątrz", "Zacznij przy ul. Nowomiejskiej 15/17, 00-271 Warszawa. Na bramę i sąsiednie mury przeznacz 15–25 minut, a potem idź na Rynek Starego Miasta."],
      ["Wystawa wewnątrz", "Muzeum Warszawy prowadzi wystawę o dawnych fortyfikacjach. Na stronie muzeum podano 12 zł za bilet normalny i 8 zł za ulgowy. W 2026 r. wystawa trwała od 20 maja do 29 sierpnia, w środy i soboty od 13:00 do 17:00. Sprawdź na stronie muzeum terminy kolejnego sezonu i zasady zakupu biletów."],
      ["Co zrobić po zamknięciu wystawy?", "Możesz przejść przez bramę i obejrzeć mury z zewnątrz. Muzeum informuje, że dostęp może zależeć od pogody."],
    ]],
    walk: ["Spacer po Starym Mieście – Barbakan i mury Warszawy", "Samodzielny spacer od Barbakanu przez Rynek Starego Miasta do placu Zamkowego.", [
      ["1. Barbakan Warszawski", "Zacznij przy Nowomiejskiej 15/17. Obejrzyj zaokrągloną ceglaną bramę od strony Nowego Miasta, przejdź przez nią i spójrz na połączenie z murami."],
      ["2. Rynek Starego Miasta", "Idź Nowomiejską do Rynku i zatrzymaj się przy pomniku Syrenki. W Muzeum Warszawy pod numerem 42 poznasz kontekst dawnych fortyfikacji."],
      ["3. Plac Zamkowy", "Idź Świętojańską na plac Zamkowy, skąd zobaczysz Zamek Królewski i kolumnę Zygmunta. Z przystankami na zdjęcia przeznacz na spacer 30–45 minut."],
    ]],
  },
  zh: {
    labels: ["華沙甕城", "地圖與交通", "華沙博物館", "更多遊覽指南"],
    tickets: ["華沙甕城門票與開放時間", "城門全年可免費通行，室內展覽於夏季開放，須另購門票。", [
      ["戶外參觀", "由 Nowomiejska 15/17，00-271 Warszawa 出發。可留 15–25 分鐘看城門和相連城牆，再步行到老城市集廣場。"],
      ["室內展覽", "華沙博物館策劃的展覽介紹舊城防禦工事。館方訪客頁列出全票 12 波蘭茲羅提、優惠票 8 波蘭茲羅提。2026 年展期為 5 月 20 日至 8 月 29 日，每週三、週六 13:00–17:00。下個展季日期與購票方式請見館方訪客頁。"],
      ["展覽休館時可以去哪裡？", "仍可安排城門和相連城牆的戶外行程。館方提醒，實際通行可能受天候影響。"],
    ]],
    walk: ["華沙甕城與老城城牆步行路線", "從甕城出發，經老城市集廣場抵達城堡廣場，沿途觀察防禦工事與老城街巷。", [
      ["1. 華沙甕城", "在 Nowomiejska 15/17 起步，先從新城一側拍攝弧形紅磚城門，再穿過門洞，觀察城門與城牆的接合處。"],
      ["2. 老城市集廣場", "沿 Nowomiejska 走到老城市集廣場，在美人魚雕像旁停留。廣場 42 號的華沙博物館可延伸了解古城防禦。"],
      ["3. 城堡廣場", "沿 Świętojańska 前往城堡廣場，可看到皇家城堡和西吉斯蒙德圓柱。連同拍照停留，建議預留 30–45 分鐘。"],
    ]],
  },
  de: {
    labels: ["Warschauer Barbakane", "Karte und Anfahrt", "Museum von Warschau", "Weitere Reiseführer"],
    tickets: ["Warschauer Barbakane – Eintritt und Öffnungszeiten", "Der Durchgang ist ganzjährig frei zugänglich. Für die Ausstellung im Sommer ist eine Eintrittskarte erforderlich.", [
      ["Besuch im Freien", "Starten Sie in der Nowomiejska 15/17, 00-271 Warschau. Planen Sie 15–25 Minuten für das Tor und die angrenzenden Mauern ein."],
      ["Ausstellung im Inneren", "Das Museum von Warschau zeigt die Geschichte der Befestigung. Auf seiner Besuchsseite stehen 12 PLN regulär und 8 PLN ermäßigt. 2026 lief die Ausstellung vom 20. Mai bis 29. August, mittwochs und samstags von 13 bis 17 Uhr. Termine der nächsten Saison und Hinweise zum Kartenverkauf finden Sie auf der Museumsseite."],
      ["Wenn die Ausstellung geschlossen ist", "Das Tor und die angrenzende Mauer lassen sich von außen besichtigen. Der Zugang kann laut Museum vom Wetter abhängen."],
    ]],
    walk: ["Spaziergang zur Warschauer Barbakane und Stadtmauer", "Von der Barbakane über den Altstadtmarkt zum Schlossplatz.", [
      ["1. Warschauer Barbakane", "Beginnen Sie in der Nowomiejska 15/17. Betrachten Sie das runde Backsteintor von der Neustadt aus und achten Sie im Durchgang auf den Anschluss an die Stadtmauer."],
      ["2. Altstadtmarkt", "Folgen Sie der Nowomiejska zur Meerjungfrauenstatue auf dem Altstadtmarkt. Das Museum von Warschau in Hausnummer 42 vermittelt die Geschichte der Befestigung."],
      ["3. Schlossplatz", "Gehen Sie über die Świętojańska zum Königsschloss und zur Sigismundsäule. Rechnen Sie mit 30–45 Minuten einschließlich Fotopausen."],
    ]],
  },
  ru: {
    labels: ["Варшавский барбакан", "Карта и проезд", "Музей Варшавы", "Другие путеводители"],
    tickets: ["Варшавский барбакан — билеты и часы работы", "Через ворота можно пройти бесплатно круглый год. Для посещения летней выставки нужен билет.", [
      ["Осмотр снаружи", "Начните по адресу Новомейская, 15/17, 00-271 Варшава. На осмотр ворот и прилегающих стен выделите 15–25 минут."],
      ["Выставка внутри", "Музей Варшавы рассказывает об истории укреплений. На странице музея указаны цены 12 злотых за обычный билет и 8 за льготный. В 2026 году выставка работала с 20 мая по 29 августа по средам и субботам с 13:00 до 17:00. Даты следующего сезона и правила покупки уточняйте на сайте музея."],
      ["Если выставка закрыта", "Можно осмотреть ворота и примыкающие стены снаружи. По информации музея, доступ зависит от погоды."],
    ]],
    walk: ["Варшавский барбакан и городские стены — пеший маршрут", "Самостоятельная прогулка от барбакана через Рыночную площадь Старого города до Замковой площади.", [
      ["1. Варшавский барбакан", "Начните на Новомейской, 15/17. Осмотрите округлые кирпичные ворота со стороны Нового города и найдите место их примыкания к стенам."],
      ["2. Рыночная площадь", "Идите по Новомейской к памятнику Русалке. В Музее Варшавы по адресу Рыночная площадь, 42 можно узнать больше об укреплениях."],
      ["3. Замковая площадь", "По улице Свентояньской дойдите до Королевского замка и колонны Сигизмунда. Прогулка с остановками для фотографий займёт примерно 30–45 минут."],
    ]],
  },
} as const;

export const guidePath = (locale: string, topic: GuideTopic) => `/${locale}/guide/${topic}`;
export type GuideLocale = keyof typeof guideCopy;
type GuideGroup = keyof (typeof visitorLabels)["en"]["groups"];

export function getVisitorGuide(locale: GuideLocale, topic: GuideTopic) {
  if (topic === "tickets-and-opening-hours" || topic === "old-town-city-walls-walk") return null;

  const { place, duration, group, source, copy } = visitorGuides[topic];
  const [title, description, walk] = copy[locale];
  return {
    title, description, walk, place, duration,
    group: group as GuideGroup,
    source: guideSources[source],
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`,
  };
}

export function getGuide(locale: GuideLocale, topic: GuideTopic) {
  const guide = getVisitorGuide(locale, topic);
  if (!guide) return guideCopy[locale][topic === "tickets-and-opening-hours" ? "tickets" : "walk"];
  const { background, walk } = visitorLabels[locale];
  return [guide.title, guide.description, [[background, guide.description], [walk, guide.walk]]] as const;
}
