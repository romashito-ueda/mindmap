import type { Meta, StoryObj } from '@storybook/react';
import ArticleList from './ArticleList';
import { ArticleCardProps } from '../articlecard/ArticleCard';

// Example articles for the story
const exampleArticles: ArticleCardProps[] = [
  {
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "鹿児島県警の情報漏えい事件 警察庁長官「再発防止策を検証」 | NHK - nhk.or.jp",
		"description": "鹿児島県警察本部で、元生活安全部長が情報漏えい事件で起訴されるなど問題が相次ぎ、警察庁が今週から特別監察を実施しているこ…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493671000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493671_2406271221_0627125324_01_03.jpg",
		"publishedAt": "2024-06-27T03:53:22Z",
		"content": ""
},
{
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "沖縄 米兵 性的暴行事件 「断じて許せず」 県が米軍側に抗議 | NHK - nhk.or.jp",
		"description": "沖縄のアメリカ軍嘉手納基地に所属する兵士が、16歳未満の少女をわいせつ目的で誘い出し性的暴行をした罪で起訴された事件で、…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493651000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493651_2406271204_0627123607_01_03.jpg",
		"publishedAt": "2024-06-27T03:45:06Z",
		"content": "1627\r\n1627"
},
{
		"source": {
				"id": null,
				"name": "4gamer.net"
		},
		"author": "Aetas Inc.",
		"title": "PC/家庭用ゲーム機版「デイヴ・ザ・ダイバー」，発売1周年を記念したアップデートを実施。ロード時間の大幅短縮に，新たなミニゲームも追加 - 4Gamer.net",
		"description": "https://www.4gamer.net/games/635/G063598/20240627012/SS/001.jpg",
		"url": "https://www.4gamer.net/games/635/G063598/20240627012/",
		"urlToImage": "https://www.4gamer.net/games/635/G063598/20240627012/SS/001.jpg",
		"publishedAt": "2024-06-27T03:33:31Z",
		"content": null
},
{
		"source": {
				"id": null,
				"name": "Chunichi.co.jp"
		},
		"author": "中日新聞Web",
		"title": "イチから分かる！恵の食材費過大徴収問題 暴かれた福祉ビジネス…行政処分へ：中日新聞Web - 中日新聞",
		"description": "障害者グループホーム運営大手の「恵（めぐみ）」（東京）による食材費の過大徴収や障害福祉サービス報酬の不正請求で、愛知県と名古屋市が県内...",
		"url": "https://www.chunichi.co.jp/article/899402",
		"urlToImage": "https://static.chunichi.co.jp/image/article/size1/a/0/0/e/a00e0e8a6a7015933044f6e179380d90_1.jpg",
		"publishedAt": "2024-06-27T03:19:00Z",
		"content": null
},
{
		"source": {
				"id": null,
				"name": "Niigata-nippo.co.jp"
		},
		"author": null,
		"title": "【速報】北越コーポレーション社長の解任否決・新潟長岡市で株主総会 - 新潟日報デジタルプラス",
		"description": "北越コーポレーション（新潟県長岡市）が６月２７日、長岡市で開いた株主総会で、岸本晢夫社長の解任を求める株主提案が否決された。北越コーポレーションＶＳ議決権4割握る大株主2社、攻防激化…社長解任の提案…",
		"url": "https://www.niigata-nippo.co.jp/articles/-/429859",
		"urlToImage": "https://niigata-nippo.ismcdn.jp/mwimgs/d/4/1200m/img_d421d6eab87185869f3bf3e6f92824f6210039.png?rd=202406261721",
		"publishedAt": "2024-06-27T03:18:00Z",
		"content": null
},
{
		"source": {
				"id": null,
				"name": "Tenki.jp"
		},
		"author": "田中　正史",
		"title": "月が土星に大接近 28日未明から明け方 各地の天気は?(気象予報士 田中 正史 2024年06月27日) - tenki.jp",
		"description": "今夜(日付が変わって明日28日)未明から明け方にかけて、南東の空で月が土星に接近します。見られる地域では、明るい土星と月の共演を楽しむことができるでしょう。北日本や沖縄では観測のチャンスがありそうです。",
		"url": "https://tenki.jp/forecaster/tanaka_masashi/2024/06/27/29318.html",
		"urlToImage": "https://storage.tenki.jp/storage/static-images/forecaster_diary/image/2/29/293/29318/main/20240627101304/large.jpg",
		"publishedAt": "2024-06-27T02:19:45Z",
		"content": null
},
{
		"source": {
				"id": null,
				"name": "Impress.co.jp"
		},
		"author": null,
		"title": "プラチナポイントグッズに「オバ犬」アクリルキーホルダーなど登場！ 「ルイージマンション2 HD」発売に合わせ - GAME Watch",
		"description": "任天堂はNintendo Switch用アクションゲーム「ルイージマンション2 HD」を6月27日に発売した。価格はパッケージ版が6,578円、ダウンロード版が6,500円。",
		"url": "https://game.watch.impress.co.jp/docs/news/1603580.html",
		"urlToImage": "https://game.watch.impress.co.jp/img/gmw/list/1603/580/02.jpg",
		"publishedAt": "2024-06-27T01:58:15Z",
		"content": "Nintendo Switch2 HD6276,5786,500 \r\n Nintendo Switch Online2 HD Showtime!5 \r\n 300 \r\n(C) Nintendo"
},
{
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "個人保有の金融資産 2199兆円で過去最高を更新 | NHK | 金融 - nhk.or.jp",
		"description": "個人が保有する金融資産は、ことし3月末の時点で2199兆円と過去最高を更新しました。ことし1月にNISAが拡充され株価の…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493611000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493611_2406271039_0627103945_01_02.jpg",
		"publishedAt": "2024-06-27T01:47:39Z",
		"content": "321991NISA\r\n3321997.1\r\n33.731331.5119\r\n1NISA\r\n34\r\n11181.150.9"
},
{
		"source": {
				"id": null,
				"name": "Yomiuri.co.jp"
		},
		"author": "読売新聞オンライン",
		"title": "ジャニーズ性加害問題、国連人権理の作業部会「日本には構造的な課題がある」…調査結果を報告 - 読売新聞オンライン",
		"description": "【ジュネーブ＝森井雄一】国連人権理事会の「ビジネスと人権」作業部会は２６日、旧ジャニーズ事務所の性加害問題など日本の労働環境に関する調査結果を報告した。 　報告はスイス・ジュネーブで開催中の理事会で行われた。部会座長の",
		"url": "https://www.yomiuri.co.jp/world/20240627-OYT1T50067/",
		"urlToImage": "https://www.yomiuri.co.jp/media/2024/06/20240627-OYT1I50058-1.jpg?type=ogp",
		"publishedAt": "2024-06-27T01:44:00Z",
		"content": null
},
{
		"source": {
				"id": null,
				"name": "Tenki.jp"
		},
		"author": "日直主任",
		"title": "鹿児島など九州南部に活発な雨雲 午後は非常に激しい雨も 落雷や竜巻にも注意(気象予報士 日直主任 2024年06月27日) - tenki.jp",
		"description": "今朝(27日)は、九州南部に活発な雨雲がかかっています。九州はこのあとも雨や雷雨で、九州北部でも激しく降る所があるでしょう。局地的に滝のような雨が降り、大雨となる恐れがあります。土砂災害や低い土地の浸水などに警戒してください。落雷や竜巻などの激しい突風にも注意が必要です。",
		"url": "https://tenki.jp/forecaster/deskpart/2024/06/27/29317.html",
		"urlToImage": "https://storage.tenki.jp/storage/static-images/forecaster_diary/image/2/29/293/29317/main/20240627101510/large.jpg",
		"publishedAt": "2024-06-27T01:35:13Z",
		"content": "(27)146.0(9:34)()38.0(8:12)32.5(9:09)(*)\r\n150\r\n(27)28()"
},
{
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "イギリス 総選挙前最後の党首討論会 経済政策などめぐり論戦 | NHK | イギリス - nhk.or.jp",
		"description": "イギリスで7月4日の総選挙で政権を争う与党・保守党のスナク首相と、最大野党・労働党のスターマー党首が選挙前の最後の討論会…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493561000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493561_2406271018_0627102623_01_03.jpg",
		"publishedAt": "2024-06-27T01:32:47Z",
		"content": ""
},
{
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "茨城 軽乗用車とワゴン車が衝突 9人けが 福祉施設の送迎車か | NHK - nhk.or.jp",
		"description": "27日午前、茨城県笠間市の県道で障害者福祉施設の送迎用のワゴン車と軽乗用車が衝突し、双方の車に乗っていた9人が病院に搬送…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493591000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493591_2406271005_0627102755_01_03.jpg",
		"publishedAt": "2024-06-27T01:31:03Z",
		"content": ""
},
{
		"source": {
				"id": null,
				"name": "Basketballking.jp"
		},
		"author": "バスケットボールキング編集部",
		"title": "ドラフト1位指名はザカリー・リザシェイ…2年連続でフランス人選手に - BASKETBALL KING",
		"description": "6月27日（現地時間26日）、「NBAドラフト2024」が開催された。 　最初に名前を呼ばれたのはフランス人のザカリー・リザシェイ。アトランタ・ホークスから全···",
		"url": "https://basketballking.jp/news/world/nba/20240627/494008.html",
		"urlToImage": "https://basketballking.jp/wp-content/uploads/2024/06/GettyImages-2159431900.jpg",
		"publishedAt": "2024-06-27T01:24:08Z",
		"content": "Rakuten4,500NBA LEAGUE PASS for 0NBA\r\nSIM1,000"
},
{
		"source": {
				"id": null,
				"name": "Gamespark.jp"
		},
		"author": "ずんこ。",
		"title": "Steamクライアントベータ版に新機能「ゲームレコーディング」が追加！外部ツール無しで気軽にプレイ動画を録画編集共有しよう - Game*Spark",
		"description": "Steamクライアントベータ版に録画機能が追加。Steam Deckにも対応しておりPCやスマートフォンにプレイ動画を転送できます。",
		"url": "https://www.gamespark.jp/article/2024/06/27/142736.html",
		"urlToImage": "https://www.gamespark.jp/imgs/ogp_f/892276.png",
		"publishedAt": "2024-06-27T01:03:55Z",
		"content": null
},
{
		"source": {
				"id": null,
				"name": "Bloomberg.co.jp"
		},
		"author": null,
		"title": "為替介入に身構えるトレーダー、円急騰リスクを示す３つのチャート - ブルームバーグ",
		"description": "円相場が１ドル＝160円台後半と約38年ぶりの安値圏に突入し、当局による為替介入の可能性が高まる中、トレーダーはボラティリティーの急騰に備えている。",
		"url": "https://www.bloomberg.co.jp/news/articles/2024-06-27/SFO2U3T1UM0W00",
		"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iNgf.MqCUBTI/v0/1200x800.jpg",
		"publishedAt": "2024-06-27T00:49:44Z",
		"content": "円相場が１ドル＝160円台後半と約38年ぶりの安値圏に突入し、当局による為替介入の可能性が高まる中、トレーダーはボラティリティーの急騰に備えている。\r\n　　円のインプライド・ボラティリティー（予想変動率）は一時期に比べると落ち着いているように見えるが、主要９通貨と比較したスプレッドは2021年以降の平均を上回っている。為替市場で円の変動リスクを取る取引にプレミアムが付いていることを示唆している。… [+1121 chars]"
},
{
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "アメリカ連邦最高裁 未公表の判断を誤ってウェブサイトに掲載 | NHK | アメリカ - nhk.or.jp",
		"description": "アメリカの連邦最高裁判所が、まだ公表されていない裁判の判断の内容がうかがえる文書を誤って一時的にウェブサイト上に掲載し、…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493531000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493531_2406270918_0627094218_01_02.jpg",
		"publishedAt": "2024-06-27T00:48:16Z",
		"content": ""
},
{
		"source": {
				"id": null,
				"name": "Bloomberg.co.jp"
		},
		"author": null,
		"title": "フランスで挙国一致内閣準備も、絶対多数政党不在なら－オランド氏 - ブルームバーグ",
		"description": "フランスのオランド前大統領は、30日に第１回投票が行われる国民議会（下院、定数577）選の結果、絶対多数政党不在のハングパーラメントとなった場合、新たな連立政権樹立に動く用意があると示唆した。",
		"url": "https://www.bloomberg.co.jp/news/articles/2024-06-27/SFPLBOT0G1KW00",
		"urlToImage": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/istqDmrVlCd4/v0/1200x799.jpg",
		"publishedAt": "2024-06-27T00:32:17Z",
		"content": "フランスのオランド前大統領は、30日に第１回投票が行われる国民議会（下院、定数577）選の結果、絶対多数政党不在のハングパーラメントとなった場合、新たな連立政権樹立に動く用意があると示唆した。\r\n　　オランド前大統領は、左派連合「新人民戦線」の統一候補として国民議会に出馬しており、左派勢力は内部分裂が露呈することを避ける難しい対応を迫られている。\r\n　　オランド氏はＢＦＭテレビとのインタビューで… [+923 chars]"
},
{
		"source": {
				"id": null,
				"name": "Nhk.or.jp"
		},
		"author": null,
		"title": "ドジャース 大谷翔平 2試合連続の先頭打者ホームラン 今季25号 | NHK | 大谷翔平 - nhk.or.jp",
		"description": "大リーグ、ドジャースの大谷翔平選手が26日、ホワイトソックス戦で2試合連続の先頭打者ホームランとなる今シーズン25号ソロ…",
		"url": "https://www3.nhk.or.jp/news/html/20240627/k10014493541000.html",
		"urlToImage": "https://www3.nhk.or.jp/news/html/20240627/K10014493541_2406270954_0627095511_01_02.jpg",
		"publishedAt": "2024-06-27T00:20:33Z",
		"content": "26225"
},
{
		"source": {
				"id": null,
				"name": "Sankei.com"
		},
		"author": "緒方 優子",
		"title": "天皇陛下、ギルドホールで晩餐会ご臨席 感染症の研究所ご視察も - 産経ニュース",
		"description": "【ロンドン＝緒方優子】国賓として英国を公式訪問中の天皇陛下は現地時間の２６日夜（日本時間２７日未明）、ロンドンの金融街シティーにあるギルドホールで開かれた晩餐…",
		"url": "https://www.sankei.com/article/20240627-A25YY4L6UJMWXACDOYBVWOSIUI/",
		"urlToImage": "https://www.sankei.com/resizer/2T6x_l6slcgeyVoS7LjFK20glVk=/1200x630/filters:focal(1090x1135:1100x1145):quality(50)/cloudfront-ap-northeast-1.images.arcpublishing.com/sankei/YHYLGXT4ANMZPLFQ7KK2NBUV4Q.jpg",
		"publishedAt": "2024-06-27T00:15:22Z",
		"content": null
},
{
		"source": {
				"id": "reuters",
				"name": "Reuters"
		},
		"author": "Daniel Ramos",
		"title": "ボリビアでクーデター未遂、大統領官邸に突入も 前軍司令官を拘束 - ロイター (Reuters Japan)",
		"description": "南米ボリビアで２６日、軍部隊が装甲車で大統領官邸の入り口に突入した。アルセ大統領が「クーデター」と非難し、国際的な支援を呼びかける中、部隊はその後官邸から退いた。",
		"url": "https://jp.reuters.com/markets/japan/funds/TVM7TRCEWNLOJIH22Z3B2SPNJ4-2024-06-26/",
		"urlToImage": "https://www.reuters.com/resizer/v2/SCUU5F4TTVLZVP4OSI6RUXC4XU.jpg?auth=3383d81a58747f4831c41d136763cd60b662fe0e1346a2b92a37eabf312051d0&height=1005&width=1920&quality=80&smart=true",
		"publishedAt": "2024-06-27T00:13:00Z",
		"content": null
}
];

const meta: Meta<typeof ArticleList> = {
  title: 'Example/ArticleList',
  component: ArticleList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: exampleArticles,
  },
};
