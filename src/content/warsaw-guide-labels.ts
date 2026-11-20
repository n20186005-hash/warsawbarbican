export const visitorLabels = {
  pl: {
    directory: "Przewodnik po okolicach Barbakanu", location: "Lokalizacja", duration: "Sugerowany czas",
    minutes: "min", background: "Historia i szczegóły", walk: "Dojście i zwiedzanie",
    source: "Informacje i źródła", transit: "Komunikacja miejska w Warszawie",
    groups: { oldTown: "Stare Miasto", walls: "Mury i odbudowa", newTown: "Nowe Miasto i okolice", royalRoute: "Trakt Królewski" },
  },
  en: {
    directory: "Explore around the Barbican", location: "Location", duration: "Suggested visit",
    minutes: "min", background: "History and what to look for", walk: "Walking and visiting",
    source: "Visitor information and sources", transit: "Warsaw public transport",
    groups: { oldTown: "Old Town", walls: "City walls and reconstruction", newTown: "New Town and nearby", royalRoute: "Royal Route" },
  },
  zh: {
    directory: "探索華沙甕城周邊", location: "所在地", duration: "建議停留",
    minutes: "分鐘", background: "歷史與觀察重點", walk: "步行與參觀建議",
    source: "參觀資訊與資料來源", transit: "華沙大眾運輸",
    groups: { oldTown: "華沙老城", walls: "城牆與戰後重建", newTown: "新城及周邊", royalRoute: "皇家大道" },
  },
  ru: {
    directory: "Что посмотреть рядом с барбаканом", location: "Местоположение", duration: "Рекомендуемое время",
    minutes: "мин", background: "История и детали", walk: "Как дойти и что посмотреть",
    source: "Информация и источники", transit: "Общественный транспорт Варшавы",
    groups: { oldTown: "Старый город", walls: "Стены и восстановление", newTown: "Новый город и окрестности", royalRoute: "Королевский тракт" },
  },
  de: {
    directory: "Rund um die Barbakane", location: "Lage", duration: "Empfohlene Besuchszeit",
    minutes: "Min.", background: "Geschichte und Besonderheiten", walk: "Fußweg und Besuch",
    source: "Besuchsinformationen und Quellen", transit: "Warschauer Nahverkehr",
    groups: { oldTown: "Altstadt", walls: "Stadtmauern und Wiederaufbau", newTown: "Neustadt und Umgebung", royalRoute: "Königsweg" },
  },
} as const;

export const guideSources: Record<string, string> = {
  "old-town": "https://go2warsaw.pl/en/old-town/",
  museum: "https://muzeumwarszawy.pl/en/visit/",
  castle: "https://www.zamek-krolewski.pl/en/godziny-otwarcia-i-ceny-biletow",
  unesco: "https://whc.unesco.org/en/list/30/",
  barbican: "https://barbakan.muzeumwarszawy.pl/en/",
  curie: "https://muzea.waw.pl/en/museums/marie-curie-museum/",
  "royal-route": "https://go2warsaw.pl/en/royal-route/",
  rising: "https://www.1944.pl/en/article/visit-us%2C4993.html",
  tourism: "https://go2warsaw.pl/en/walk-around-srodmiescie-district-part-one/",
  fountains: "https://go2warsaw.pl/en/multimedia-fountain-park/",
  river: "https://go2warsaw.pl/en/vistula-boulevards/",
};
