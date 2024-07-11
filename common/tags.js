const TAGS = [
  // ジャンル
  { group: "ジャンル", name: "体操" },
  { group: "ジャンル", name: "脳トレ" },
  { group: "ジャンル", name: "歌" },
  { group: "ジャンル", name: "手芸・工芸" },
  { group: "ジャンル", name: "ゲーム" },
  // 流れ
  { group: "流れ", name: "導入" },
  { group: "流れ", name: "発展" },
  { group: "流れ", name: "展開" },
  // 活動のねらい
  { group: "目的", name: "生きがい" },
  { group: "目的", name: "コミュニケーション" },
  { group: "目的", name: "地域交流" },
  { group: "目的", name: "自己表現" },
  { group: "目的", name: "意欲創出" },
  { group: "目的", name: "機能維持" },
  { group: "目的", name: "介護予防" },
  // 難易度
  { group: "難易度", name: "初級" },
  { group: "難易度", name: "中級" },
  { group: "難易度", name: "上級" },
  // 介護度
  { group: "介護度", name: "自立" },
  { group: "介護度", name: "要支援1" },
  { group: "介護度", name: "要支援2" },
  { group: "介護度", name: "要介護1" },
  { group: "介護度", name: "要介護2" },
  { group: "介護度", name: "要介護3" },
  { group: "介護度", name: "要介護4" },
  { group: "介護度", name: "要介護5" },
  // 認知症レベル
  { group: "認知症", name: "あり(全般)" },
  { group: "認知症", name: "あり(要介助)" },
  { group: "認知症", name: "アルツハイマー型" },
  { group: "認知症", name: "レビー小体型" },
  { group: "認知症", name: "脳血管性" },
  { group: "認知症", name: "前頭側頭型" },
  // 難聴・弱視
  { group: "障害", name: "難聴" },
  { group: "障害", name: "弱視" },
  // 運動対象部位
  { group: "運動対象", name: "全身運動" },
  { group: "運動対象", name: "上半身運動" },
  { group: "運動対象", name: "下半身運動" },
  // 人数
  { group: "人数", name: "1人" },
  { group: "人数", name: "1人以上" },
  { group: "人数", name: "2人以上" },
  { group: "人数", name: "3人以上" },
  { group: "人数", name: "4人以上" },
  // 所要時間
  { group: "時間", name: "10分未満" },
  { group: "時間", name: "30分未満" },
  { group: "時間", name: "60分未満" },
  { group: "時間", name: "60分以上" },
  // 準備
  { group: "準備", name: "不要" },
  { group: "準備", name: "必要" },
  // 必要スペース
  { group: "スペース", name: "集まれる場所" },
  { group: "スペース", name: "机・椅子" },
  // 必要スタッフ人数
  { group: "スタッフ数", name: "1名" },
  { group: "スタッフ数", name: "2名以上" },
  // 季節
  { group: "季節", name: "春" },
  { group: "季節", name: "夏" },
  { group: "季節", name: "秋" },
  { group: "季節", name: "冬" },
  { group: "季節", name: "1月" },
  { group: "季節", name: "2月" },
  { group: "季節", name: "3月" },
  { group: "季節", name: "4月" },
  { group: "季節", name: "5月" },
  { group: "季節", name: "6月" },
  { group: "季節", name: "7月" },
  { group: "季節", name: "8月" },
  { group: "季節", name: "9月" },
  { group: "季節", name: "10月" },
  { group: "季節", name: "11月" },
  { group: "季節", name: "12月" },
  // イベント・行事
  { group: "イベント", name: "お祝い" },
  { group: "イベント", name: "誕生日" },
  { group: "イベント", name: "正月" },
  { group: "イベント", name: "節分" },
  { group: "イベント", name: "ひな祭り" },
  { group: "イベント", name: "花見" },
  { group: "イベント", name: "こどもの日" },
  { group: "イベント", name: "七夕" },
  { group: "イベント", name: "夏祭り" },
  { group: "イベント", name: "ハロウィン" },
  { group: "イベント", name: "クリスマス" },
];

const TAGS_BY_GROUP = _.groupBy(TAGS, "group");
const TAG_GROUPS = Object.keys(TAGS_BY_GROUP);

// ソート用のID付与
{
  let i = 1;
  for (const [group, tags] of Object.entries(TAGS_BY_GROUP)) {
    tags.forEach((tag, index) => {
      tag.id = i * 1000 + index;
    });
    i++;
  }
}
