export type Locale = "ja" | "en";

export const translations = {
  ja: {
    nav: {
      findArchitecture: "建築を探す",
      findFromMap: "地図から探す",
      survey: "アンケート",
      nearbyArchitecture: "近くの建築",
      everyonesExploration: "みんなの建築探訪",
    },
    footer: {
      copyright: "© 建築探訪. All rights reserved.",
    },
    home: {
      title: "建築を、もっと身近に",
      subtitle: "身近な建築を探して、みんなで共有しよう",
    },
    sections: {
      find: {
        title: "建築を探す",
        description: "キーワードや条件で建築を検索。気になる建物を見つけよう。",
        cta: "検索する",
      },
      map: {
        title: "地図から探す",
        description:
          "地図上でエリアを選んで、その周辺の建築を発見。散歩のルートも探せる。",
        cta: "地図を開く",
      },
      survey: {
        title: "アンケート",
        description:
          "簡単なアンケートに答えて、おすすめの建築を提案してもらおう。",
        cta: "アンケートに答える",
      },
      nearby: {
        title: "近くの建築",
        description:
          "今いる場所の近くにある建築を一覧表示。外出先でもすぐ探せる。",
        cta: "近くを表示",
      },
      exploration: {
        title: "みんなの建築探訪",
        description:
          "他のユーザーが訪れた建築や投稿をチェック。新しい発見があるかも。",
        cta: "探訪を見る",
      },
    },
  },
  en: {
    nav: {
      findArchitecture: "Find architecture",
      findFromMap: "Find from map",
      survey: "Survey",
      nearbyArchitecture: "Architecture nearby",
      everyonesExploration: "Everyone's architecture exploration",
    },
    footer: {
      copyright: "© Architectual. All rights reserved.",
    },
    home: {
      title: "Architecture, closer to you",
      subtitle: "Discover nearby architecture and share with everyone",
    },
    sections: {
      find: {
        title: "Find architecture",
        description:
          "Search for buildings by keyword or criteria. Find the ones that interest you.",
        cta: "Search",
      },
      map: {
        title: "Find from map",
        description:
          "Pick an area on the map and discover architecture nearby. Plan your walking route.",
        cta: "Open map",
      },
      survey: {
        title: "Survey",
        description:
          "Answer a short survey and get personalized architecture recommendations.",
        cta: "Take survey",
      },
      nearby: {
        title: "Architecture nearby",
        description:
          "See a list of buildings near your current location. Explore on the go.",
        cta: "Show nearby",
      },
      exploration: {
        title: "Everyone's architecture exploration",
        description:
          "Browse visits and posts from other users. You might find something new.",
        cta: "View explorations",
      },
    },
  },
} as const;
