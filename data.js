// Data transcribed verbatim from the source itinerary document (v2.docx).
// Every event's `desc` field preserves the original wording exactly.
// `title` is a short label pulled from the same sentence for display only.
// `loc` lists venue/address strings copied verbatim from the document,
// used to build Google Maps search links.

const itineraryData = {
  trip: {
    title: `日本東北賞楓健行八日行程`,
    subtitle: `8-Day Tohoku Autumn Leaf Hiking Adventure · 9/29 - 10/6`
  },
  days: [
    {
      id: 1, date: `9/29`, weekday: `週二`,
      route: `台灣 ➔ 仙台機場 ➔ 仙台市區`,
      events: [
        { time: `06:30`, title: `Taipei Songshan Airport, Taiwan`, desc: `松山機場『巴士站牌2號』`, loc: [`Taipei Songshan Airport, Taiwan`] },
        { time: `08:00`, title: `長榮櫃檯集合`, desc: `長榮櫃檯集合`, loc: [] },
        { time: `10:05 → 14:35`, title: `長榮航空 BR118`, desc: `桃園機場搭乘長榮航空 BR118 出發 (第二航廈) ➔ 14:35 降落仙台機場 (Sendai Airport)。`, loc: [`Taiwan Taoyuan International Airport, Taiwan`, `Sendai Airport, Japan`] },
        { time: `15:00`, title: `仙台機場 3F 毛豆奶昔`, desc: `抵達仙台機場後，推薦至 3F 品嚐特產毛豆奶昔 (Zunda Shake)。`, loc: [`Sendai Airport, Japan`] },
        { time: `15:30`, title: `仙台機場聯絡線 → 仙台車站 → 飯店`, desc: `搭乘「仙台機場聯絡線」捷運前往仙台車站 (車程約 25 分鐘，每 20 分鐘一班，單程車資 ¥660)。抵達仙台車站。先至綠色窗口 (Midori-no-Madoguchi) 購買翌日前往「鳴子溫泉」的新幹線與地方線聯絡票券, 自由席乘車券 ¥1,650 加上地方線普通乘車券 ¥680，共計 ¥2,330）。買票時會拿到兩張實體車票。步行 5 分鐘前往相鐵 Fresa Inn (Sotetsu Fresa Inn 地址：4 Chome-4-5 Central, Aoba Ward)。`, loc: [], stops: [
          { name: `仙台機場聯絡線`, loc: [`Sendai Airport, Japan`, `Sendai Station, Japan`] },
          { name: `仙台車站 綠色窗口 (Midori-no-Madoguchi)`, loc: [`Sendai Station, Japan`] },
          { name: `相鐵 Fresa Inn (Sotetsu Fresa Inn)`, loc: [`Sotetsu Fresa Inn Sendai, 4 Chome-4-5 Central, Aoba Ward, Sendai, Japan`] }
        ] },
        { time: `17:30~`, title: `定禪寺通 / AER觀景台`, desc: `散步前往定禪寺通街道綠地 (350m)，或前往 AER 大樓 31F 觀景台欣賞免費的市區夜景 (8:00pm 前免費)。`, loc: [`Jozenji Street, Sendai, Japan`, `AER Building, Sendai, Japan`] },
        { time: ``, title: `善治郎`, desc: `晚餐推薦：「善治郎」：位於車站東口，必吃炭烤厚切牛舌料理。`, loc: [`Zenjiro, Sendai Station East Exit, Japan`] }
      ]
    },
    {
      id: 2, date: `9/30`, weekday: `週三`,
      route: `仙台 ➔ 古川 ➔ 鳴子溫泉 ｜ 潟沼 O 型環狀線`,
      events: [
        { time: `07:30 - 09:30`, title: `早餐自理`, desc: `早餐自理`, loc: [] },
        { time: `10:00`, title: `辦理退房`, desc: `辦理退房，攜帶行李前往仙台車站。`, loc: [`Sendai Station, Japan`] },
        { time: `10:50 - 11:03`, title: `東北新幹線山彥號`, desc: `搭乘東北新幹線山彥號 (Tohoku Yamabiko) ➔ 抵達古川站 (Furukawa Station)。在仙台車站入站時,將兩張票(新幹線自由席券與地方線乘車券) 疊在一起同時投入自動閘機`, loc: [`Sendai Station, Japan`, `Furukawa Station, Osaki, Japan`] },
        { time: `11:15 - 12:01`, title: `JR陸羽東線 → 鳴子溫泉`, desc: `站內轉乘 JR 陸羽東線 (JR Rikuu East Line) 普通列車 ➔ 抵達鳴子溫泉站 (Naruko-Onsen Station)。 💡 古川站轉乘事項: 抵達古川站後，從3F順著指標往在來線/陸羽東線, 下至2樓, 前往轉乘專用閘門（無需出外站大廳），將兩張車票疊投，並記得取回退出的「陸羽東線乘車券」. 通過轉乘閘門後，順著指標走下樓至 1樓 陸羽東線月台（前往鳴子溫泉請至 1號月台 候車）, 需約8-10分鐘`, loc: [`Furukawa Station, Osaki, Japan`, `Naruko-Onsen Station, Japan`] },
        { time: `12:15`, title: `湯元吉祥溫泉旅館`, desc: `飯店接送, 至湯元吉祥溫泉旅館 (Yumoto Kissho) （地址：Yumoto-58-10 Narukoonsen, Osaki）。`, loc: [`Yumoto Kissho, Yumoto-58-10 Narukoonsen, Osaki, Japan`] },
        { time: `12:40`, title: `茶屋小花 / 高喬亭`, desc: `午餐推薦：「茶屋小花」或「高喬亭」品嚐當地極具特色的地雞南蠻蕎麥麵 (約 ¥800)。`, loc: [`茶屋小花, Naruko Onsen, Japan`, `高橋こうじ亭, Naruko Onsen, Japan`] },
        { time: `14:00 - 17:30`, title: `潟沼 O 型環狀健行`, desc: `潟沼 O 型環狀健行 (全長 5.5 - 6 km，預估時間 2.5 - 3 小時)：路線：溫泉街 ➔ 溫泉神社 (步行 15 分鐘，0.5km) ➔ 潟沼 (上坡約 70m，2.2km) ➔ 繞行湖畔一圈 (約 30 分鐘，1.3km) ➔ 返回溫泉神社 (下坡約 50m)。備註：健行途中或下山時，請順道在溫泉街店家購買隔日健行所需的中餐與乾糧。`, loc: [], stops: [
          { name: `溫泉神社`, note: `步行15分鐘，0.5km`, loc: [`Onsen Shrine, Naruko Onsen, Japan`] },
          { name: `潟沼`, note: `上坡約70m，2.2km`, loc: [`Lake Katanuma, Japan`] }
        ] },
        { time: `18:00`, title: `湯元吉祥溫泉旅館 晚餐`, desc: `返回湯元吉祥溫泉旅館，享用豐盛的精緻晚餐，並享受高品質的日式溫泉。`, loc: [`Yumoto Kissho, Naruko Onsen, Japan`] }
      ]
    },
    {
      id: 3, date: `10/1`, weekday: `週四`,
      route: `鳴子峽谷 14.2km 深度健行`,
      events: [
        { time: `07:30 - 08:30`, title: `湯元吉祥 早餐`, desc: `享用湯元吉祥溫泉旅館的豐盛和風早餐。`, loc: [`Yumoto Kissho, Naruko Onsen, Japan`] },
        { time: `09:00 - 16:00`, title: `鳴子峽步道健行`, desc: `核心健行：鳴子峽步道深度大跨越 (全長 14.2 km，預估時間 5 - 6 小時)：完整健行路線：湯元吉祥 ➔ 鳴子峽休憩所 (1小時，4.2km) ➔ 回顧橋 (30分鐘，0.7km) ➔ 大深澤步道 (0.5km，享用中餐) ➔ 奧之細道 (1.7km) ➔ 小深澤 (0.5km) ➔ 木芥子偶館 (1.7km) ➔ 尿前關所 (1km) ➔ 溫泉神社 (3.1km) ➔ 繞行湯廣場 (0.6km) ➔ 鳴子溫泉車站免費泡足湯 (0.2km)，洗去雙腳疲憊 ➔ 順道購買翌日前往一之關的車票。 ☔ 遇雨天備案：若天候不佳，建議搭乘公車直接前往「木芥子偶館」，進行手工彩繪木芥子體驗；午餐可直接在附設有景觀餐廳的「鳴子峽休憩所」室內一邊享用熱食一邊欣賞雨中峽谷楓紅。`, loc: [], stops: [
          { name: `Naruko Gorge Rest House, Japan`, note: `1小時，4.2km`, loc: [`Naruko Gorge Rest House, Japan`] },
          { name: `回顧橋`, note: `30分鐘，0.7km`, loc: [`Kaikobashi Bridge, Naruko Gorge, Japan`] },
          { name: `木芥子偶館`, note: `1.7km`, loc: [`Naruko Kokeshi Museum, Japan`] },
          { name: `Shitomae Barrier Site, Naruko, Japan`, note: `1km`, loc: [`Shitomae Barrier Site, Naruko, Japan`] },
          { name: `Naruko-Onsen Station, Japan`, note: `免費足湯`, loc: [`Naruko-Onsen Station, Japan`] }
        ] },
        { time: `16:30`, title: `溫泉旅館 晚餐`, desc: `返回飯店享用溫泉大浴場、露天風呂，放鬆身心。享受晚餐`, loc: [`Yumoto Kissho, Naruko Onsen, Japan`] }
      ]
    },
    {
      id: 4, date: `10/2`, weekday: `週五`,
      route: `鳴子溫泉 ➔ 古川 ➔ 一之關 ➔ 猊鼻溪遊船`,
      events: [
        { time: `07:45`, title: `辦理退房`, desc: `辦理退房，攜帶早餐餐盒, 飯店接送至車站。`, loc: [`Naruko-Onsen Station, Japan`] },
        { time: `08:31 - 09:15`, title: `JR陸羽東線 → 古川`, desc: `搭乘 JR 陸羽東線 (往小牛田方向) ➔ 抵達古川站 (Furukawa Station)。`, loc: [`Furukawa Station, Osaki, Japan`] },
        { time: `09:48 - 10:06`, title: `新幹線疾風號 → 一之關`, desc: `古川站轉乘東北新幹線疾風號 (JR Shinkansen Hayabusa 103，盛岡行) ➔ 抵達一之關站 (Ichinoseki Station，票價 ¥4,100)。古川站轉乘從1F, 移動至2F新幹線閘口, 最後3F月台往一之關/盛岡方向`, loc: [`Furukawa Station, Osaki, Japan`, `Ichinoseki Station, Japan`] },
        { time: `10:15 - 12:30`, title: `藏 Hotel → 觀光諮詢局 → 市區午餐`, desc: `步行 5 分鐘抵達一之關藏 Hotel (Kura Hotel Ichinoseki) 辦理行李寄放（地址：2-1 Otemachi, Ichinoseki）。隨後至車站旁的觀光諮詢局獲取一之關及翌日栗駒山的最新巴士時刻，並在市區享用當地特色午餐。`, loc: [], stops: [
          { name: `藏 Hotel Ichinoseki (行李寄放)`, loc: [`Kura Hotel Ichinoseki, 2-1 Otemachi, Ichinoseki, Japan`] },
          { name: `觀光諮詢局`, loc: [`Ichinoseki Station Tourist Information Center, Japan`] },
          { name: `市區午餐`, loc: [`Ichinoseki, Japan`] }
        ] },
        { time: `12:46 - 13:17`, title: `JR大船渡線 → 猊鼻溪`, desc: `搭乘 JR 大船渡線 (JR Ofunato Line) ➔ 抵達猊鼻溪站 (Geibikei Station，車資 ¥530)。`, loc: [`Geibikei Station, Japan`] },
        { time: `14:00 - 15:45`, title: `猊鼻溪遊船`, desc: `抵達猊鼻溪站後步行至乘船場，購買門票 (票價 ¥2,000，可刷卡)。來回 90 分鐘。下船後可逛商店街。`, loc: [`Geibikei Gorge, Japan`] },
        { time: `17:47 - 18:18`, title: `返回一之關站`, desc: `搭乘 JR 大船渡線或接駁巴士 ➔ 返回一之關站 (車資 ¥530)。`, loc: [`Ichinoseki Station, Japan`] },
        { time: `18:30`, title: `大黑家 / 三彩館 → 採買補給`, desc: `晚餐推薦：至一之關站前的「大黑家」、「三彩館」品嚐蕎麥麵料理或當地拉麵。餐後務必在站前超市預先買妥隔天登山所需的豐富早餐及午餐乾糧，因為栗駒山上無商店。`, loc: [], stops: [
          { name: `大黑家`, loc: [`Daikokuya, Ichinoseki Station, Japan`] },
          { name: `三彩館`, loc: [`三彩館, Ichinoseki Station, Japan`] },
          { name: `站前超市 (採買隔日補給)`, loc: [`Ichinoseki Station, Japan`] }
        ] }
      ]
    },
    {
      id: 5, date: `10/3`, weekday: `週六`,
      route: `一之關 ➔ 栗駒山 ➔ 一之關`,
      events: [
        { time: `～08:00 - 8:30`, title: `飯店早餐 / 出發`, desc: `於飯店享用早餐， 8:30 出發。`, loc: [`Kura Hotel Ichinoseki, Japan`] },
        { time: `08:30 - 10:00`, title: `計程車 → 須川高原溫泉`, desc: `搭乘計程車前往須川高原溫泉 (車程單程約 1.5 小時. 計程車來回¥54000)`, loc: [`Sukawa Kogen Onsen, Japan`] },
        { time: `10:30 - 12:30`, title: `栗駒山 登頂路線`, desc: `抵達海拔1126m須川高原溫泉 , 起登，沿健行步道登山（預估登山時間 1.5 - 2 小時）— 須川高原溫泉 ～20分鐘。 苔花台（自然觀察路分叉點） ～30分鐘 昭和湖 ～ 40分鐘 天狗坪（須川分線） ～ 20分鐘 栗駒山山頂 （1626公尺）`, loc: [], stops: [
          { name: `須川高原溫泉 起登`, note: `～20分鐘`, loc: [`Sukawa Kogen Onsen, Japan`] },
          { name: `苔花台（自然觀察路分叉點）`, note: `～30分鐘`, loc: [`Taikadai, Mt. Kurikoma, Japan`] },
          { name: `昭和湖`, note: `～40分鐘`, loc: [`Showa-ko Lake, Mt. Kurikoma, Japan`] },
          { name: `天狗坪（須川分線）`, note: `～20分鐘`, loc: [`Tengudaira, Mt. Kurikoma, Japan`] },
          { name: `栗駒山山頂（1626公尺）`, loc: [`Mt. Kurikoma, Japan`] }
        ] },
        { time: `12:30 - 13:30`, title: `山頂中餐`, desc: `中餐，欣賞神之地毯風景`, loc: [`Mt. Kurikoma, Japan`] },
        { time: `13:30 - 15:30`, title: `緩步下山`, desc: `緩步下山 (預估下山時間 70-90分鐘)，返回須川高原溫泉。`, loc: [`Sukawa Kogen Onsen, Japan`] },
        { time: `16:00 - 17:30`, title: `計程車返回一之關 → 採買補給`, desc: `搭乘計程車返回一之關車站，順道購買隔日前行氣仙沼的車票與翌日早餐。`, loc: [], stops: [
          { name: `一之關站 (計程車返回)`, loc: [`Ichinoseki Station, Japan`] },
          { name: `採買車票與早餐`, loc: [`Ichinoseki Station, Japan`] }
        ] },
        { time: `17:30~`, title: `市區自由用餐`, desc: `一之關市區自由用餐。`, loc: [`Ichinoseki, Japan`] }
      ]
    },
    {
      id: 6, date: `10/4`, weekday: `週日`,
      route: `一之關 ➔ 氣仙沼 ➔ 唐桑半島`,
      events: [
        { time: `06:50`, title: `辦理退房`, desc: `辦理退房辦理手續，準備出發。`, loc: [`Kura Hotel Ichinoseki, Japan`] },
        { time: `07:18 - 08:48`, title: `JR大船渡線 → 氣仙沼`, desc: `搭乘 JR 大船渡線列車 ➔ 抵達氣仙沼站 (Kesennuma Station，車資 ¥1,230)。可在車上享用簡便早餐。`, loc: [`Kesennuma Station, Japan`] },
        { time: `08:50 - 10:15`, title: `珍珠城市飯店 → 超市 → 巴士站`, desc: `抵達氣仙沼站後，步行 100 公尺至珍珠城市飯店 (Hotel Pearl City Kesennuma) 寄放行李（地址：3 Chome-2-42 Furumachi）。放妥行李後，至附近超市或便利商店買健行的中午餐點。步行 20m 前往「魚町一丁目」巴士站，或在氣仙沼車站搭乘 9:15 或 10:15 的公車（車程約 5-10 分鐘）。`, loc: [], stops: [
          { name: `珍珠城市飯店 (寄放行李)`, loc: [`Hotel Pearl City Kesennuma, 3 Chome-2-42 Furumachi, Japan`] },
          { name: `附近超市 (採買中午餐點)`, loc: [`Kesennuma Station, Japan`] },
          { name: `Uomachi 1-chome Bus Stop, Kesennuma, Japan`, loc: [`Uomachi 1-chome Bus Stop, Kesennuma, Japan`, `Kesennuma Station, Japan`] }
        ] },
        { time: `11:01 - 11:50`, title: `御崎線巴士 → 唐桑半島遊客中心`, desc: `於「魚町一丁目」巴士站搭乘「御崎線巴士」➔ 抵達終點「唐桑半島遊客中心」(車資 ¥910，僅收現金，上車請抽取整理卷)。`, loc: [`Karakuwa Peninsula Visitor Center, Japan`] },
        { time: `11:52 - 12:20`, title: `遊客中心 簡便中餐 → 預約回程`, desc: `抵達遊客中心，享用 30 分鐘簡便中餐並預約最後一班公車17:45，或Taxi`, loc: [], stops: [
          { name: `唐桑半島遊客中心 (中餐)`, loc: [`Karakuwa Peninsula Visitor Center, Japan`] },
          { name: `預約回程公車／Taxi`, loc: [`Karakuwa Peninsula Visitor Center, Japan`] }
        ] },
        { time: `12:20 - 15:30`, title: `唐桑半島海岸線健行`, desc: `唐桑半島太平洋海岸線大健行 (全長 10.0 km，單程約 3.5 小時)：路線：遊客中心出發 ➔ 御崎神社 (0.8km) 海嘯石 (3.0km) ➔ 彌右衛門坂 (3.5km) 樁木隧道 (3.8km) ➔ 老街 (4.3km) 分歧點標示 (4.7km) 走A路線, 抵達A. B 匯合處, 取右往 巨釜半造 (Ogama Hanzou) ➔ 世濱漁港 (6.0km) , 正常走在海邊, 漲潮時改走左邊道路 折石 (8.0km) ➔ 終點 半造 (Oreishi) (10km / 14:31) 回到叉路繼續跟著指標前往「折石」, 走左邊自然山徑, 走到半造路口才標示 FINISH, 享受海蝕洞穴與岩岸景觀 (15:27)`, loc: [`Misaki Shrine, Karakuwa, Kesennuma, Japan`, `Ogama Hanzo, Karakuwa, Kesennuma, Japan`, `Oreishi, Karakuwa, Kesennuma, Japan`] },
        { time: `最晚 15:30`, title: `步行至巨釜半造入口`, desc: `離開半造，步行約 1.2 km (15 - 20 分鐘) 至「巨釜半造入口」公車站牌等待巴士。`, loc: [`Ogama Hanzo Iriguchi Bus Stop, Kesennuma, Japan`] },
        { time: `16:15 - 17:10`, title: `御崎線巴士 返回氣仙沼`, desc: `於「巨釜半造入口」公車站搭乘御崎線回程巴士 ➔ 返回氣仙沼市區 (車資 ¥990，僅收現金)。⚠️ 交通預警：御崎線往氣仙沼市區的末班車為 17:45。若不慎錯過，請唐桑半島遊客中心服務人員協助代叫計程車。`, loc: [`Kesennuma, Japan`] },
        { time: `17:30`, title: `海之市 / 內灣居酒屋`, desc: `晚餐：前往氣仙沼著名的「海之市」(Umi-no-Ichi) 海鮮市場，或至內灣一帶的居酒屋`, loc: [`Umi-no-Ichi, Kesennuma, Japan`, `Uchiwan, Kesennuma, Japan`] }
      ]
    },
    {
      id: 7, date: `10/5`, weekday: `週一`,
      route: `氣仙沼 ➔ 一之關 ➔ 仙台 ➔ 松島海岸觀光`,
      events: [
        { time: `07:20`, title: `辦理退房`, desc: `辦理退房並前往氣仙沼車站。`, loc: [`Kesennuma Station, Japan`] },
        { time: `07:39 - 09:08`, title: `JR大船渡線 → 一之關`, desc: `搭乘 JR 大船渡線（一之關方向）➔ 車上用早餐 抵達一之關車站 (車資 ¥1,170)。備用班次：前一班 06:24；後一班 09:54。`, loc: [`Ichinoseki Station, Japan`] },
        { time: `09:08 - 09:49`, title: `一之關站 轉乘新幹線月台`, desc: `在一之關站內預留 41 分鐘，輕鬆步行並搭乘電梯移動至新幹線月台。`, loc: [`Ichinoseki Station, Japan`] },
        { time: `09:49 - 10:21`, title: `東北新幹線 → 仙台`, desc: `搭乘 JR 東北新幹線前往仙台車站 (車程僅 32 分鐘，新幹線特急自由席車資 ¥4,000，指定席 ¥4,530) 備用班次：前一班: 9:01 ; 後一班: 10:53`, loc: [`Sendai Station, Japan`] },
        { time: `10:30 - 11:15`, title: `寄存行李`, desc: `抵達仙台車站後，步行 5 分鐘前往相鐵 Fresa Inn (Sotetsu Fresa Inn 地址：4 Chome-4-5 Central, Aoba Ward) 寄存行李，或直接存放在仙台車站 2F 的大型行李置物櫃。`, loc: [`Sotetsu Fresa Inn Sendai, 4 Chome-4-5 Central, Aoba Ward, Sendai, Japan`, `Sendai Station, Japan`] },
        { time: `11:28 - 12:07`, title: `JR仙石線 → 松島海岸`, desc: `於仙台車站搭乘 JR 仙石線 (JR Senseki Line，石卷方向) ➔ 抵達松島海岸站 (Matsushima-Kaigan Station，車程: 39m, 車資 ¥440)。備用班次：前一班 11:05，後一班 11:51。`, loc: [`Matsushima-Kaigan Station, Japan`] },
        {
          time: `12:15 - 17:00`, dual: true,
          note: `松島海岸觀光（推薦方案二選一）：`,
          plans: [
            {
              label: `方案 A：松島經典遊船與人文歷史`,
              events: [
                { title: `洗心庵 午餐`, desc: `午餐：至「洗心庵」(Senshin-an) 享用海鮮丼與山菜蕎麥麵 (單程步行 7 分鐘，約 ¥500 - ¥2,500)。`, loc: [`Senshin-an, Matsushima, Japan`] },
                { title: `仁王丸號 松島灣遊覽`, desc: `景點：搭乘整點發船的「仁王丸號」遊覽松島灣 (船程 50 分鐘，船票 ¥1,500) ➔ 參觀瑞巖寺 (門票 ¥1,000) 或圓通院 (門票 ¥500，二選一) ➔ 散步造訪五大堂與朱紅色的透橋，並在松島大街品嚐現烤手作仙貝。`, loc: [`Matsushima Sightseeing Boat Pier, Japan`, `Zuiganji Temple, Matsushima, Japan`, `Entsuin Temple, Matsushima, Japan`, `Godaido, Matsushima, Japan`] }
              ]
            },
            {
              label: `方案 B：海鮮老店、福浦島散策與西行之松`,
              events: [
                { title: `Santori 茶屋 午餐`, desc: `午餐：至「Santori 茶屋」(Santori-Chaya) 星鰻丼 (Anago) 或牡蠣料理 (步行 12 分鐘，費用約 ¥1,500 - ¥2,500)。`, loc: [`Santori-Chaya, Matsushima, Japan`] },
                { title: `福浦橋 / 西行戻之松公園`, desc: `景點：漫步「福浦橋」(過橋費 ¥300)，環繞一圈 (30分鐘) ➔ 隨後步行攀登前往「西行戻之松公園」(爬坡25分鐘)，在頂部的景觀咖啡廳一邊享用甜點，一邊飽覽松島灣全景 ➔ 下山 (下坡20分鐘) 接回圓通院。`, loc: [`Fukuura Bridge, Matsushima, Japan`, `Saigyomodorinomatsu Park, Matsushima, Japan`] }
              ]
            }
          ]
        },
        { time: `16:44 - 17:22`, title: `JR仙石線 返回仙台`, desc: `搭乘 JR 仙石線返回仙台車站（備用回程列車：16:13 - 16:51 或 17:12 - 17:51）。`, loc: [`Sendai Station, Japan`] },
        { time: `17:30`, title: `晚餐與血拼`, desc: `在仙台車站周邊各大百貨與商店街自由採購及晚餐。`, loc: [`Sendai Station, Japan`] }
      ]
    },
    {
      id: 8, date: `10/6`, weekday: `週二`,
      route: `仙台市區 ➔ 仙台機場 ➔ 台灣桃園`,
      events: [
        { time: `08:00 - 09:50`, title: `仙台朝市 / 大崎八番宮`, desc: `走5-15m仙台朝市享用早餐 或 6:30搭車前往「大崎八番宮」`, loc: [`Sendai Asaichi Market, Japan`, `Osaki Hachimangu Shrine, Sendai, Japan`] },
        { time: `10:00`, title: `辦理退房`, desc: `辦理退房手續並將行李寄存在飯店。`, loc: [`Sotetsu Fresa Inn Sendai, Japan`] },
        { time: `10:00 - 11:30`, title: `瑞鳳殿`, desc: `步行 2 km 前往參觀「瑞鳳殿」(Zuihoden，參觀約 30 分鐘)。或逛仙台車站`, loc: [`Zuihoden, Sendai, Japan`, `Sendai Station, Japan`] },
        { time: `11:35`, title: `飯店集合`, desc: `飯店集合`, loc: [`Sotetsu Fresa Inn Sendai, Japan`] },
        { time: `12:10 - 12:35`, title: `JR機場快速電車`, desc: `於仙台車站 3F 搭乘 JR 機場快速電車 ➔ 抵達仙台機場 (車程 25 分鐘，車資 ¥660)。`, loc: [`Sendai Station, Japan`, `Sendai Airport, Japan`] },
        { time: `12:40`, title: `Sendai Airport Terminal 2, Japan`, desc: `抵達仙台機場第二航廈，辦理長榮航空 BR117 的登機及行李託運手續。`, loc: [`Sendai Airport Terminal 2, Japan`] },
        { time: `16:05 → 18:55`, title: `長榮航空 BR117`, desc: `搭乘長榮航空 BR117 班機起飛 ➔ 18:55 (台灣時間 21:30) 順利返抵桃園國際機場。`, loc: [`Sendai Airport, Japan`, `Taiwan Taoyuan International Airport, Taiwan`] }
      ]
    }
  ],
  reference: {
    hiking: {
      headers: [`健行路線名稱`, `總距離`, `預估時間`, `坡度爬升/下降`, `難度`, `路線特點`],
      rows: [
        [`潟沼 O 型環狀健行`, `5.5-6.5km`, `2.0-3.0小時`, `120m`, `易`, `溫泉神社 (180m)➔ 潟沼 (306m, 單程2.2km) ➔ 繞湖畔一圈 (1.4km) ➔ 返回溫泉神社`],
        [`鳴子峽健行步道`, `14 km`, `5.0-6.0小時`, `沿峽谷中等起伏`, `中等`, `飯店 鳴子峽休憩所 (4km) ➔ 回顧橋 ➔ 大深澤 ➔ 奧之細道 ➔ 小深澤 ➔ 木芥子館 ➔ 尿前關所 ➔ 溫泉神社 (全長10km)`],
        [`栗駒山 (Mt. Kurikoma Sukawa)`, `7.4 km (來回)`, `3.0-4小時`, `緩坡爬升 510m`, `中等`, `須川高原溫泉起登(1116m) ➔ 栗駒山頂 (1627m展望用餐) ➔ 原路下山。路面較潮濕。`],
        [`唐桑半島海岸健行`, `10.0km (單程)`, `3.5-小時`, `沿太平洋海岸起伏`, `易`, `唐桑半島遊客中心 ➔ 巨釜半造 ➔ 折石 ➔ 巨釜半造入口。壯麗斷崖與海蝕柱地質景觀。`]
      ]
    },
    transport: {
      headers: [`票券類型`, `取票/現場購票地點`, `乘車提醒`],
      rows: [
        [`仙台機場快速聯絡線 ／ 仙台來回松島`, `仙台機場站售票機 ／ 仙台車站`, `機場來回 ¥660*2 ／ 松島來回 ¥440*2。ICOCA總計: ¥2200`],
        [`新幹線自由席與地方券 (Shinkansen & Local Ticket)`, `仙台車站 2F 綠色窗口或自動售票機`, `總計: ¥12920`],
        [`猊鼻溪手搖渡船票 (Geibikei Ferry Ticket)`, `猊鼻溪乘船場售票窗口`, `票價 ¥2,000 / 人。可使用信用卡支付。每小時整點發船，建議提前 15 分鐘抵達乘船場。`],
        [`須川高原 / 栗駒山 (Sukawa Kogen / Mt. Kurikoma Sukawa)`, `計程車`, `來回車費 ¥540000。每人¥9216 / NT$1827`],
        [`唐桑半島御崎線巴士 (Misaki Line Bus)`, `「魚町一丁目」或「氣仙沼站」巴士站`, `上車時必須抽取「整理卷」，下車時對照前方計價螢幕並投入對應現金 (單程 ¥910 - ¥990)。(栗駒山和唐桑半島公車, 現金總計: ¥4900)`],
        [`「仁王丸號」遊覽松島灣`, `松島海岸碼頭邊售票處`, `整點發船, 船程 50 分鐘，船票 ¥1,500, 線上購票¥1,350`]
      ]
    },
    budgetDetail: {
      headers: [`分類`, `預算細目 / 項目名稱`, `金額 (JPY)`, `金額 (TWD)`, `計算備註說明`],
      rows: [
        [`交通`, `台北桃園 (TPE) <-> 仙台 (SDJ) 長榮來回機票`, `—`, `NT$16,100`, ``],
        [`交通`, `D1 仙台機場 -> 仙台車站聯絡線`, `¥660`, `NT$132`, `ICOCA`],
        [`交通`, `D2 仙台 -> 古川 (新幹線山彥號自由席券)`, `¥1,650`, `NT$330`, `新幹線特急券 (自由席)`],
        [`交通`, `D2 古川 -> 鳴子溫泉 (JR 陸羽東線普通車)`, `¥680`, `NT$136`, `地方線普通乘車券`],
        [`交通`, `D4 鳴子溫泉 -> 古川 (JR 陸羽東線普通車)`, `¥680`, `NT$136`, `地方線普通乘車券`],
        [`交通`, `D4 古川 -> 一之關 (新幹線疾風號 103 盛岡行)`, `¥4,100`, `NT$820`, `新幹線指定席繳資`],
        [`交通`, `D4 一之關 <-> 猊鼻溪 (JR 大船渡線往返車資)`, `¥1,060`, `NT$212`, `單程 ¥530 * 2`],
        [`景點`, `D4 猊鼻溪傳統手搖渡船票`, `¥2,000`, `NT$400`, `現場購票 (可刷卡)`],
        [`交通`, `D5 一之關 <-> 栗駒山 (計程車往返車資)`, `¥9,216`, `NT$1,827`, `計程車往返車資`],
        [`交通`, `D6 一之關 -> 氣仙沼 (JR 大船渡線單程車資)`, `¥1,230`, `NT$246`, `單程普通列車`],
        [`交通`, `D6 氣仙沼 <-> 唐桑半島 (御崎線公車往返車資)`, `¥1,900`, `NT$380`, `去程 ¥910，回程 ¥990 (僅收現金)`],
        [`交通`, `D7 氣仙沼 -> 一之關 (JR 大船渡線單程車資)`, `¥1,170`, `NT$234`, `單程普通列車`],
        [`交通`, `D7 一之關 -> 仙台 (JR 東北新幹線自由席車資)`, `¥4,000`, `NT$800`, `新幹線特急自由席車資`],
        [`交通`, `D7 仙台 -> 松島海岸 (JR 仙石線往返車資)`, `¥880`, `NT$176`, `ICOCA, 單程 ¥440 * 2`],
        [`景點`, `D7 松島灣「仁王丸號」遊船票`, `¥1,500`, `NT$288`, `整點發船，現場購票`],
        [`景點`, `D7 福浦橋`, `¥300`, `NT$60`, ``],
        [`景點`, `D7 圓通院`, `¥500`, `NT$100`, ``],
        [`交通`, `D8 仙台車站 -> 仙台機場快速線`, `¥660`, `NT$132`, `ICOCA`],
        [`交通`, `D8 市區歷史景點計程車/巴士接駁費用估算`, `¥2,000`, `NT$400`, `瑞鳳殿、大崎八幡宮通勤雜項`],
        [`住宿`, `D1 仙台大和roynet飯店 (Daiwa Roynet Sendai)`, `¥7,511`, `NT$1,500`, `3間雙人房`],
        [`住宿`, `D2-D3 鳴子溫泉湯元吉祥溫泉旅館 (兩晚四人房含早晚餐)`, `¥38,450`, `NT$7,690`, `2晚溫泉旅館，含早晚餐`],
        [`住宿`, `D4-D5 一之關 藏 Hotel (Kura Hotel) (兩晚單/雙人房)`, `¥28,080`, `NT$5,700`, `2晚商務旅店，無早餐，每間每晚台幣2850元`],
        [`住宿`, `D6 氣仙沼珍珠城市飯店 (Hotel Pearl City) (三人房含早)`, `¥7,511`, `NT$1,500`, `3人房含早`],
        [`住宿`, `D7 仙台相鐵 Fresa Inn (Sotetsu Fresa Inn)`, `¥8,262`, `NT$1,650`, `3間房，含早餐`],
        [`預備金`, ``, `¥15,000`, `NT$3,000`, ``],
        [`餐食`, `八日餐食與飲水、下山溫泉雜項預銷估算`, `¥40,000`, `NT$8,000`, `平均每日 ¥5,000 開銷 (不含含餐飲店)`],
        [`總計`, `預估全程繳花費`, `¥179,000`, `NT$51,949`, `含所有住宿、交通、機票、門票與日日基本餐費`]
      ]
    },
    budgetSummary: {
      headers: [`預算大類`, `日圓總額 (JPY)`, `台幣等值 (TWD)`, `比例`, `項目說明`],
      rows: [
        [`機票總額`, `—`, `NT$16,100`, `31%`, `TPE) <-> SDJ 長榮航空直飛往返機票。`],
        [`交通總額`, `¥29,886`, `NT$5,961`, `11%`, `新幹線 (自由席與指定席)、陸羽東線、大船渡線、仙石線與急行/御崎線巴士。`],
        [`住宿總額`, `¥89,814`, `NT$18,040`, `35%`, `含湯元吉祥 一泊二食`],
        [`餐食`, `¥40,000`, `NT$8,000`, `15%`, `八日每日膳食餐費 (¥40,000)。`],
        [`景點`, `¥4,300`, `NT$848`, `2%`, `景點門票、猊鼻溪手搖渡船票 (¥2,000)、松島灣船票 (¥1,500)。`],
        [`預備金`, `¥15,000`, `NT$3,000`, `6%`, `零用金`],
        [`總計`, `¥179,000`, `NT$51,949`, `100%`, ``]
      ]
    },
    note: `請換日圓現金8萬 (交通＋餐食+景點+預備金)`
  }
};
