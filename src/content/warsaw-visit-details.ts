import type { GuideLocale } from "@/guides";

type Localized = Record<GuideLocale, string>;

export const management = {
  city: {
    url: "https://warszawa19115.pl/",
    copy: { pl: "To przestrzeń publiczna Warszawy. Sprawy utrzymania i dostępności można zgłaszać przez miejski serwis Warszawa 19115.", en: "This is a public space in the City of Warsaw. Use the city’s Warsaw 19115 service for maintenance and access enquiries.", zh: "這裡屬於華沙的公共空間。維護、通行與公共設施問題，可向華沙市政府的 19115 市民服務查詢。", ru: "Это общественное пространство Варшавы. По вопросам содержания и доступа обращайтесь в городскую службу «Варшава 19115».", de: "Dies ist ein öffentlicher Ort der Stadt Warschau. Für Fragen zu Pflege und Zugang ist der städtische Dienst Warsaw 19115 eine Anlaufstelle." },
  },
  heritage: {
    url: "https://whc.unesco.org/en/list/30/",
    copy: { pl: "Ochrona centrum historycznego opiera się na polskim prawie i miejskich dokumentach planistycznych. UNESCO prowadzi wpis na Listę Światowego Dziedzictwa.", en: "Polish heritage law and Warsaw’s planning documents govern protection of the historic centre. UNESCO maintains the World Heritage listing.", zh: "華沙歷史中心依波蘭文資法規及華沙都市規劃檔案受到保護。聯合國教科文組織負責世界遺產名錄。", ru: "Охрану исторического центра регулируют польское законодательство и градостроительные документы Варшавы. ЮНЕСКО ведёт запись в списке Всемирного наследия.", de: "Polnisches Denkmalrecht und Warschaus Planungsunterlagen regeln den Schutz der Altstadt. Die UNESCO führt den Eintrag in der Welterbeliste." },
  },
  barbican: {
    url: "https://barbakan.muzeumwarszawy.pl/en/visit/",
    copy: { pl: "Muzeum Warszawy prowadzi wystawę w Barbakanie. Informacji o sezonowym zwiedzaniu udziela muzeum.", en: "The Museum of Warsaw runs the exhibition inside the Barbican and publishes seasonal visitor information.", zh: "華沙博物館負責甕城內的展覽，並公佈每季參觀安排。", ru: "Выставку внутри барбакана ведёт Музей Варшавы. Он публикует сезонные условия посещения.", de: "Das Museum von Warschau betreibt die Ausstellung in der Barbakane und veröffentlicht die saisonalen Besuchsinformationen." },
  },
  museum: {
    url: "https://muzeumwarszawy.pl/en/visit/",
    copy: { pl: "Muzeum Warszawy prowadzi główną siedzibę przy Rynku i odpowiada za wystawy, bilety oraz organizację wizyt.", en: "The Museum of Warsaw operates its main site on the Market Square and handles exhibitions, tickets and visits.", zh: "華沙博物館營運市集廣場的總館，負責展覽、門票和參觀安排。", ru: "Музей Варшавы ведёт основную площадку на рынке и отвечает за выставки, билеты и посещения.", de: "Das Museum von Warschau betreibt seinen Hauptsitz am Markt und organisiert Ausstellungen, Eintritt und Besuche." },
  },
  cellars: {
    url: "https://ciz.muzeumwarszawy.pl/en/about-the-museum/",
    copy: { pl: "Centrum Interpretacji Zabytku i Szlak Kulturalny Piwnic Starego Miasta należą do sieci Muzeum Warszawy. Zasady wstępu zależą od wybranego obiektu.", en: "The Heritage Interpretation Centre and the Old Town Cellars cultural trail are part of the Museum of Warsaw network. Admission arrangements depend on the site.", zh: "遺產詮釋中心及老城地窖文化路線隸屬華沙博物館體系。各站的入場安排分別公告。", ru: "Центр интерпретации наследия и культурный маршрут по подвалам входят в сеть Музея Варшавы. Правила входа зависят от площадки.", de: "Das Besucherzentrum und die Kulturroute durch die Altstadtkeller gehören zum Museum von Warschau. Der Zutritt richtet sich nach dem einzelnen Standort." },
  },
  castle: {
    url: "https://www.zamek-krolewski.pl/en/godziny-otwarcia-i-ceny-biletow",
    copy: { pl: "Instytucja Zamek Królewski w Warszawie prowadzi muzeum i udostępnia sale oraz wybrane wystawy.", en: "The Royal Castle in Warsaw operates the museum and manages access to its rooms and exhibitions.", zh: "華沙皇家城堡的營運機構負責博物館、宮殿廳室和展覽的開放。", ru: "Учреждение «Королевский замок в Варшаве» ведёт музей и организует доступ в залы и на выставки.", de: "Das Königsschloss in Warschau betreibt das Museum und regelt den Zugang zu Räumen und Ausstellungen." },
  },
  curie: {
    url: "https://muzea.waw.pl/en/museums/marie-curie-museum/",
    copy: { pl: "Muzeum Marii Skłodowskiej-Curie prowadzi ekspozycję w domu urodzenia uczonej przy Freta 16.", en: "The Marie Skłodowska Curie Museum operates the exhibition at the scientist’s birthplace at Freta 16.", zh: "瑪麗亞・斯克沃多夫斯卡—居里博物館負責 Freta 16 號出生故居的展覽與參觀。", ru: "Музей Марии Склодовской-Кюри ведёт выставку в доме рождения учёной на Фрете, 16.", de: "Das Marie-Skłodowska-Curie-Museum betreibt die Ausstellung im Geburtshaus der Forscherin in der Freta 16." },
  },
  fountains: {
    url: "https://estrada.com.pl/multimedialny-park-fontann/",
    copy: { pl: "Miejska instytucja kultury Stołeczna Estrada przygotowuje program pokazów i ogłasza ich terminy.", en: "The municipal cultural institution Stołeczna Estrada produces the fountain shows and publishes their schedule.", zh: "華沙市文化機構 Stołeczna Estrada 負責製作噴泉表演，並公佈各季場次。", ru: "Городское учреждение культуры Stołeczna Estrada готовит шоу фонтанов и публикует расписание.", de: "Die städtische Kultureinrichtung Stołeczna Estrada produziert die Fontänenshows und veröffentlicht die Termine." },
  },
  river: {
    url: "https://zzw.waw.pl/nasze-tereny/tereny-wodne/",
    copy: { pl: "Zarząd Zieleni Warszawy publikuje mapę zarządzanych terenów nadrzecznych. Otoczenie Wisły ma kilku zarządców, zależnie od miejsca i rodzaju infrastruktury.", en: "Warsaw’s Greenery Authority maps the riverside areas under its care. Responsibility along the Vistula depends on the section and the facilities involved.", zh: "華沙綠地管理局公佈其管理的河岸區域地圖。維斯瓦河岸的維護職責依路段和設施而異。", ru: "Управление зелёных насаждений Варшавы публикует карту прибрежных участков в своём ведении. Ответственность зависит от участка и объекта.", de: "Die Warschauer Grünflächenverwaltung kartiert die Uferbereiche in ihrer Zuständigkeit. An der Weichsel hängt die Zuständigkeit vom Abschnitt und von der Anlage ab." },
  },
  garden: {
    url: "https://zzw.waw.pl/nasze-tereny/parki/ogrod-krasinskich/",
    copy: { pl: "Ogrodem Krasińskich opiekuje się Zarząd Zieleni m.st. Warszawy. Park jest miejskim terenem rekreacji.", en: "Warsaw’s Greenery Authority maintains Krasiński Garden as a municipal public park.", zh: "克拉辛斯基花園由華沙市綠地管理局維護，是供市民使用的公共公園。", ru: "Сад Красиньских — городской парк в ведении Управления зелёных насаждений Варшавы.", de: "Die Warschauer Grünflächenverwaltung pflegt den Krasiński-Garten als öffentlichen Stadtpark." },
  },
  cathedral: {
    url: "https://archikatedra.waw.pl/",
    copy: { pl: "Archikatedra jest czynną świątynią Archidiecezji Warszawskiej. Parafia publikuje informacje o nabożeństwach.", en: "The cathedral is a working church of the Archdiocese of Warsaw. The parish publishes service information.", zh: "總主教座堂是華沙總教區仍在使用的教堂，堂區負責公佈禮拜資訊。", ru: "Собор — действующий храм Варшавской архиепархии. Приход публикует расписание богослужений.", de: "Der Dom ist eine aktive Kirche der Erzdiözese Warschau. Die Gemeinde veröffentlicht die Gottesdienstzeiten." },
  },
  martin: {
    url: "https://archwwa.pl/miejsca/kosciol-siostr-franciszkanek-sluzebnic-krzyza-pw-sw-marcina",
    copy: { pl: "Kościół św. Marcina jest związany z franciszkankami służebnicami Krzyża. Dane kontaktowe podaje Archidiecezja Warszawska.", en: "St Martin’s is associated with the Franciscan Sisters Servants of the Cross. The Archdiocese of Warsaw lists its contact details.", zh: "聖馬丁教堂與方濟各十字架僕役修女會有關。聯絡資訊見華沙總教區。", ru: "Храм Святого Мартина связан с францисканскими сёстрами-служительницами Креста. Контакты публикует Варшавская архиепархия.", de: "Die Martinskirche ist mit den Franziskanerinnen Dienerinnen des Kreuzes verbunden. Die Erzdiözese Warschau veröffentlicht den Kontakt." },
  },
  casimir: {
    url: "https://go2warsaw.pl/en/walk-around-srodmiescie-district-part-one/",
    copy: { pl: "Kościół św. Kazimierza jest związany z klasztorem sakramentek. Na miejscu obowiązuje rytm życia wspólnoty i nabożeństw.", en: "St Casimir’s is the church of the Sacramentine community. Visits depend on the community’s services and use of the church.", zh: "聖卡齊米日教堂屬於聖體修女會的修道院建築群，參觀需配合修會與禮拜安排。", ru: "Храм Святого Казимира относится к монастырю сакраменток. Посещение зависит от служб и распорядка общины.", de: "Die Kasimirskirche gehört zur Gemeinschaft der Sakramentinerinnen. Besuche richten sich nach deren Gottesdiensten und Nutzung der Kirche." },
  },
  anne: {
    url: "https://swanna.waw.pl/",
    copy: { pl: "Kościół św. Anny służy warszawskiemu duszpasterstwu akademickiemu. Informacje o wejściu na taras dzwonnicy sprawdza się osobno.", en: "St Anne’s serves Warsaw’s Catholic academic chaplaincy. The bell tower’s terrace has separate visitor arrangements.", zh: "聖安妮教堂是華沙天主教大專牧靈中心。鐘樓觀景臺有獨立的參觀安排。", ru: "Храм Святой Анны служит варшавскому католическому студенческому капелланству. У террасы колокольни отдельные правила посещения.", de: "Die Annenkirche dient der katholischen Hochschulseelsorge Warschaus. Für die Terrasse des Glockenturms gelten eigene Besuchsregeln." },
  },
  president: {
    url: "https://www.president.pl/",
    copy: { pl: "Pałac jest siedzibą Prezydenta RP. Oficjalne informacje publikuje Kancelaria Prezydenta RP.", en: "The palace is the seat of the President of Poland. The President’s Chancellery publishes official information.", zh: "此處為波蘭總統官邸，相關官方資訊由波蘭總統府辦公廳發布。", ru: "Дворец — резиденция президента Польши. Официальные сведения публикует канцелярия президента.", de: "Der Palast ist Sitz des polnischen Präsidenten. Offizielle Informationen veröffentlicht die Präsidialkanzlei." },
  },
  university: {
    url: "https://en.uw.edu.pl/",
    copy: { pl: "Uniwersytet Warszawski zarządza kampusem głównym, do którego prowadzi zabytkowa brama.", en: "The University of Warsaw manages the main campus entered through this historic gate.", zh: "華沙大學管理這座歷史校門所通往的主校區。", ru: "Главным кампусом за историческими воротами управляет Варшавский университет.", de: "Die Universität Warschau verwaltet den Hauptcampus hinter dem historischen Tor." },
  },
} satisfies Record<string, { url: string; copy: Localized }>;

export const transitStops = {
  oldTram: "Stare Miasto → Plac Zamkowy",
  arsenal: "Ratusz Arsenał (M1) → Długa",
  krasinski: "Plac Krasińskich",
  river: "Stare Miasto → Bulwar Jana Karskiego",
  university: "Uniwersytet / Nowy Świat–Uniwersytet (M2)",
};

export const visitAccess = {
  outdoor: ["Ogólnodostępna przestrzeń zewnętrzna.", "Public outdoor space.", "戶外公共空間。", "Открытое общественное пространство.", "Öffentlicher Außenbereich."],
  stairs: ["Ulica schodkowa. Wariant bez schodów poprowadź przez Brzozową.", "Stepped lane. Use Brzozowa for an alternative without taking this staircase.", "這段為石階巷，可改走 Brzozowa 避開這座階梯。", "Переулок со ступенями. Для обхода этой лестницы идите по Бжозовой.", "Treppengasse. Über die Brzozowa lässt sich diese Treppe umgehen."],
  museum: ["Przed wejściem sprawdź godziny, ceny i zasady rezerwacji u gospodarza obiektu.", "Check the operator’s opening hours, prices and booking arrangements before going inside.", "入館前向館方查詢開放時間、票價與預約方式。", "Перед визитом проверьте часы, билеты и бронирование на сайте учреждения.", "Prüfen Sie vor dem Besuch Öffnungszeiten, Preise und Buchung beim Betreiber."],
  church: ["Wejście zależy od godzin otwarcia i nabożeństw.", "Interior access depends on opening hours and services.", "室內參觀配合開放與禮拜時段。", "Доступ внутрь зависит от часов работы и богослужений.", "Der Zugang hängt von Öffnungszeiten und Gottesdiensten ab."],
  barbican: ["Przejście jest bezpłatne. Wystawa ma osobne godziny i bilety.", "The passage is free. The exhibition has separate hours and tickets.", "城門通道免費，展覽另有開放時間與門票。", "Проход бесплатный. У выставки отдельное расписание и билеты.", "Der Durchgang ist frei. Für die Ausstellung gelten eigene Zeiten und Eintrittspreise."],
  show: ["Pokazy są sezonowe. Sprawdź datę i porę na stronie organizatora.", "Shows run seasonally. Check the date and time with the organizer.", "表演按季舉行，日期與時間請查主辦方公告。", "Шоу сезонные. Проверяйте дату и время у организатора.", "Die Shows finden saisonal statt. Datum und Uhrzeit stehen beim Veranstalter."],
  park: ["Przed wizytą sprawdź komunikaty o dostępie do parku.", "Check the park operator’s current access notices.", "入園前可檢視公園管理單位的通行公告。", "Уточняйте текущий доступ в объявлениях администрации парка.", "Beachten Sie die aktuellen Zugangshinweise der Parkverwaltung."],
  tower: ["Kościół i taras na dzwonnicy mają osobne zasady wstępu.", "Church and bell-tower terrace access are arranged separately.", "教堂與鐘樓觀景臺各有參觀規定。", "Для храма и террасы колокольни действуют отдельные правила.", "Für Kirche und Turmterrasse gelten getrennte Zugangsregeln."],
  exterior: ["Widok z publicznego chodnika przed pałacem.", "View from the public sidewalk in front of the palace.", "由宮殿前方的公共人行道觀賞。", "Осмотр с общественного тротуара перед дворцом.", "Besichtigung vom öffentlichen Gehweg vor dem Palast."],
  campus: ["Bramę widać z ulicy. Wejście na kampus zależy od zasad uczelni.", "The gate is visible from the street. Campus entry follows university rules.", "從街上可看校門，入校依校方規則。", "Ворота видны с улицы. Вход в кампус регулирует университет.", "Das Tor ist von der Straße sichtbar. Den Campuszugang regelt die Universität."],
} as const;

export const visitLocales = ["pl", "en", "zh", "ru", "de"] as const;
export const detailLabels = {
  pl: ["O miejscu i jego gospodarzu", "Informacje podstawowe", "Wstęp i godziny", "Dojazd", "Trasa piesza", "Punkt fotograficzny", "Częste pytania", "Jak zaplanować wstęp?", "Dokąd pójść dalej?", "Trasuj w Google Maps", "Źródło zdjęcia", "Zmniejszone do wyświetlenia", "Zacznij od", "Kontynuuj do"],
  en: ["About the site and who looks after it", "At a glance", "Hours and admission", "Getting there", "Walking route", "Photo spot", "Frequently asked questions", "How should I plan admission?", "Where can I go next?", "Directions in Google Maps", "Photo source", "Resized for display", "Start at", "Continue to"],
  zh: ["關於此地與管理單位", "基本資訊", "開放時間與入場", "交通方式", "步行路線", "拍攝機位", "常見問答", "怎麼安排行前入場？", "接下來可以去哪裡？", "在 Google 地圖規劃路線", "照片來源", "已縮小供網頁顯示", "起點", "下一站"],
  ru: ["О месте и службе, которая за ним отвечает", "Основные сведения", "Часы и вход", "Как добраться", "Пеший маршрут", "Точка для съёмки", "Частые вопросы", "Как запланировать вход?", "Куда идти дальше?", "Маршрут в Google Картах", "Источник фото", "Размер уменьшен для сайта", "Начните здесь", "Далее"],
  de: ["Über den Ort und seine Betreuung", "Auf einen Blick", "Öffnungszeiten und Eintritt", "Anfahrt", "Fußroute", "Fotostandpunkt", "Häufige Fragen", "Wie plane ich den Zutritt?", "Wohin geht es als Nächstes?", "Route in Google Maps", "Fotoquelle", "Für die Anzeige verkleinert", "Ausgangspunkt", "Weiter zu"],
} as const;
