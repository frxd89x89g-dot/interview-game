/* NEXT INNOVATION ENGINE V21.0 (Endless Deck & Phase Control) */

// --- 1. HUGE COMMON POOL (50+ Questions) ---
// phase: 'early' (Turn 1-3), 'mid' (Turn 4-7), 'late' (Turn 8-10)
const COMMON_POOL = [
  // EARLY: Intro & Icebreak
  { phase: 'early', tag: 'intro', q: "この業界に興味を持ったきっかけは？", a_good: "『テクノロジーで人の可能性を広げる』という理念に共感したからです。", a_bad: "なんかかっこいいし、給料も良さそうなので。", dmg: 0 },
  { phase: 'early', tag: 'intro', q: "自己紹介を簡単にお願いします。", a_good: "はい。{name}と申します。大学では{club}に打ち込んでいました。", a_bad: "{name}っす。よろしくです。", dmg: 0 },
  { phase: 'early', tag: 'intro', q: "緊張していますか？", a_good: "はい、第一志望なので心臓がバクバクしています！", a_bad: "いや、全然余裕っす。", dmg: -5 },
  { phase: 'early', tag: 'es', q: "ESに書かれている活動を選んだ理由は？", a_good: "自分の強みである『継続力』を活かせると感じたからです。", a_bad: "楽そうだったからですね。", dmg: 0 },
  { phase: 'early', tag: 'es', q: "学生時代、一番時間を割いたことは？", a_good: "{club}での活動です。週5日練習していました。", a_bad: "バイトと遊びですね。", dmg: 0 },

  // MID: Deep Dive & Competency
  { phase: 'mid', tag: 'deep', q: "チームでの役割は何が多かった？", a_good: "リーダーを支える調整役として、意見の対立を解消していました。", a_bad: "特にないですね。言われたことをやるのが得意です。", dmg: 0 },
  { phase: 'mid', tag: 'deep', q: "その経験から学んだことは？", a_good: "『相手の立場に立って考えること』の重要性を学びました。", a_bad: "世の中、結局は運とコネだなって学びました。", dmg: 5 },
  { phase: 'mid', tag: 'risk', q: "苦手なタイプの人はいる？", a_good: "約束を守らない人です。ただ、背景を確認して改善を促すようにしています。", a_bad: "理屈っぽい人とか、真面目すぎる人は苦手です。", dmg: 10 },
  { phase: 'mid', tag: 'deep', q: "モチベーションの源泉は？", a_good: "チームで目標を達成した時の達成感です。", a_bad: "お金と休みですね。", dmg: 0 },
  { phase: 'mid', tag: 'deep', q: "一番苦労したエピソードは？", a_good: "メンバーの意見が割れて、チームが空中分解しかけた時です。", a_bad: "朝起きることですかね。", dmg: 10 },
  { phase: 'mid', tag: 'risk', q: "大きな失敗をしたことはある？", a_good: "確認不足でミスをしたことがありますが、再発防止策を徹底しました。", a_bad: "ないですね。完璧なんで。", dmg: 20 },
  { phase: 'mid', tag: 'check', q: "周りからどんな人だと言われる？", a_good: "『責任感が強い』とよく言われます。", a_bad: "『変わってる』ってよく言われます。", dmg: 5 },
  { phase: 'mid', tag: 'deep', q: "自分なりの工夫はあった？", a_good: "効率化のためにツールを導入し、作業時間を20%削減しました。", a_bad: "言われた通りやっただけです。", dmg: 10 },
  { phase: 'mid', tag: 'risk', q: "ストレスを感じる瞬間は？", a_good: "計画通りに進まない時ですが、すぐに修正プランを立てます。", a_bad: "上司に怒られた時ですね。凹みます。", dmg: 10 },
  { phase: 'mid', tag: 'value', q: "チームワークで大切にしていることは？", a_good: "情報の透明性と、感謝を言葉にすることです。", a_bad: "仲良くすることですね。", dmg: 5 },

  // LATE: Vision & Closing
  { phase: 'late', tag: 'value', q: "就職活動の軸は？", a_good: "『自律的に働ける環境』と『社会的インパクト』の2軸です。", a_bad: "安定していて、残業が少なくて、福利厚生がいいところです。", dmg: 0 },
  { phase: 'late', tag: 'value', q: "5年後のキャリアプランは？", a_good: "プロジェクトマネージャーとして、大規模な案件をリードしたいです。", a_bad: "まだ考えてないです。辞めてるかも。", dmg: 10 },
  { phase: 'late', tag: 'check', q: "最後に逆質問はありますか？", a_good: "活躍している若手社員の共通点は何でしょうか？", a_bad: "残業代ってちゃんと出ますか？", dmg: 0 },
  { phase: 'late', tag: 'check', q: "他社の選考状況は？", a_good: "IT業界を中心に受けていますが、御社が第一志望です。", a_bad: "手当たり次第受けてます。", dmg: 0 },
  { phase: 'late', tag: 'value', q: "どんな会社で働きたい？", a_good: "変化を恐れず、常に挑戦し続ける会社です。", a_bad: "楽な会社がいいです。", dmg: 10 },
  { phase: 'late', tag: 'check', q: "入社後にやってみたい仕事は？", a_good: "まずは営業で顧客理解を深め、将来的には企画に携わりたいです。", a_bad: "配属されたところで頑張ります。", dmg: 0 }
];

const ICE_BREAK_DECK = [
  { tag: "ice", q: "今日はどうやって来たの？", a_good: "電車で来ました。駅から近くて便利ですね。", a_bad: "電車っす。迷いました。", dmg: -5 },
  { tag: "ice", q: "オフィスの雰囲気はどう？", a_good: "開放的で素敵ですね。", a_bad: "静かですね。", dmg: -5 },
  { tag: "ice", q: "今日はいい天気だね。", a_good: "はい！気持ちがいいです。", a_bad: "暑いです。", dmg: -5 }
];

// --- ARCHETYPES (固有デッキは各Phase対応済とみなす) ---
// プレースホルダー: {club}, {role}, {num}, {result}, {tech}, {term}
const ARCHETYPES = [
  // 1. 体育会系
  {
    id: "muscle", role: "体育会{role}",
    es: "{club}部で{num}を統率。{result}。",
    hidden_good: "【圧倒的行動力】論理と根性を兼ね備えたリーダー", hidden_bad: "【脳筋】気合だけで解決しようとする思考停止",
    deck: [
      { phase: 'mid', tag: "deep", q: "練習メニューを変えた理由は？", a_good: "怪我人が多かったので、科学的なメニューを導入しました。", a_bad: "伝統を守るのが大事なので、量は倍に増やしました！", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "負けた時の原因分析は？", a_good: "データを見返して、後半のスタミナ不足が敗因だと特定しました。", a_bad: "気合が足りなかったからです。次はもっと走ります！", dmg: 20 },
      { phase: 'mid', tag: "risk", q: "理不尽な指示をされたら？", a_good: "意図を確認し、必要であれば代替案を提案します。", a_bad: "耐えます！理不尽には慣れっこなんで！", dmg: 10 },
      { phase: 'early', tag: "check", q: "{club}を選んだ理由は？", a_good: "日本一を目指せる環境に身を置きたかったからです。", a_bad: "先輩に誘われて断れなくて。", dmg: 5 },
      { phase: 'mid', tag: "deep", q: "チームの対立はどう解決した？", a_good: "双方の意見を聞き、共通の目標に立ち返って話し合いました。", a_bad: "飲み会で腹を割って話せば解決です！", dmg: 10 }
    ]
  },
  // 2. インターンエース
  {
    id: "elite", role: "長期インターン{role}",
    es: "ITベンチャーで{role}。{result}。",
    hidden_good: "【即戦力】高い成果意識とPDCA力", hidden_bad: "【天狗】自信過剰で扱いづらい",
    deck: [
      { phase: 'mid', tag: "deep", q: "成果の要因は？", a_good: "架電数の確保だけでなく、トークスクリプトの改善を毎日行ったことです。", a_bad: "まあ、僕にはセンスがあったんでしょうね。", dmg: 5 },
      { phase: 'mid', tag: "risk", q: "泥臭い仕事はできる？", a_good: "もちろんです。成果のためなら何でもやります。", a_bad: "そういうのは他の人に任せたいですね。", dmg: 20 },
      { phase: 'late', tag: "deep", q: "インターンで学んだことは？", a_good: "『{term}』を回すことの重要性です。", a_bad: "学生レベルじゃ余裕だなってことですね。", dmg: 10 }
    ]
  },
  // 3. 研究者
  {
    id: "research", role: "理系大学院生",
    es: "{tech}を用いた研究に従事。学会発表経験あり。",
    hidden_good: "【探究心】複雑な課題を解決する力", hidden_bad: "【専門バカ】専門用語ばかりで会話が通じない",
    deck: [
      { phase: 'mid', tag: "deep", q: "研究内容をわかりやすく説明して。", a_good: "『{tech}』を使って、社会課題を解決する研究です。", a_bad: "{tech}におけるパラメータの最適化が…", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "研究が行き詰まったらどうする？", a_good: "先行研究を洗い直し、アプローチの角度を変えます。", a_bad: "とりあえず徹夜して実験を繰り返します。", dmg: 10 },
      { phase: 'late', tag: "value", q: "なぜビジネスの世界へ？", a_good: "技術を社会実装して、実際に人の役に立たせたいからです。", a_bad: "研究室に残るよりお金が稼げそうなので。", dmg: 0 }
    ]
  },
  // 4. 留学生
  {
    id: "global", role: "海外正規留学生",
    es: "海外大学で学位取得。{num}のチームをリード。",
    hidden_good: "【多様性】異文化適応力と広い視野", hidden_bad: "【日本不適合】日本の商習慣を見下している",
    deck: [
      { phase: 'mid', tag: "deep", q: "留学で苦労したことは？", a_good: "ディスカッションで発言できず、悔しい思いをしたことです。", a_bad: "日本の常識が通じないことですね。日本人は遅れてるんで。", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "日本の古い体質についてどう思う？", a_good: "変えるべき点は多いですが、リスペクトを持って改革したいです。", a_bad: "ナンセンスですね。全部アメリカ流にすべきです。", dmg: 20 },
      { phase: 'mid', tag: "value", q: "チームワークについてどう考える？", a_good: "個の違いを認め合い、補完し合うことが最強のチームだと思います。", a_bad: "個人の能力が高ければチームワークなんて要らないのでは？", dmg: 10 }
    ]
  },
  // 5. 意識高い系
  {
    id: "consul", role: "学生団体{role}",
    es: "ビジコン優勝。{club}イベントで{result}。",
    hidden_good: "【視座の高さ】社会課題への深い洞察", hidden_bad: "【評論家】横文字ばかりで中身がない",
    deck: [
      { phase: 'mid', tag: "deep", q: "『シナジー』って具体的にどういう意味？", a_good: "AとBを組み合わせて、単なる足し算以上の成果を出すことです。", a_bad: "化学反応的な…イノベーション的なサムシングです。", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "君自身は何の作業をしたの？", a_good: "協賛金集めのために、企業へ100件飛び込み営業をしました。", a_bad: "私は全体設計とディレクションにコミットしました。", dmg: 20 },
      { phase: 'late', tag: "value", q: "働く上で大切なことは？", a_good: "顧客への価値提供です。", a_bad: "圧倒的当事者意識とフルコミットですね。", dmg: 5 }
    ]
  },
  // 6. キラキラ系
  {
    id: "influencer", role: "SNSインフルエンサー",
    es: "{club}活動を発信し、フォロワー{num}人達成。",
    hidden_good: "【発信力】市場のニーズを掴むセンス", hidden_bad: "【承認欲求】チヤホヤされたいだけ",
    deck: [
      { phase: 'mid', tag: "deep", q: "フォロワーを増やすための戦略は？", a_good: "投稿時間をインサイトから分析し、ターゲット層に刺さる画像を検証しました。", a_bad: "毎日投稿して、いい感じの写真をアップしました！", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "地味な裏方の仕事はできる？", a_good: "もちろんです。分析作業は地味ですが大好きです。", a_bad: "私は表に立つタイプなので、そういうのは苦手です。", dmg: 20 },
      { phase: 'late', tag: "value", q: "仕事で何を実現したい？", a_good: "自分の発信で、良い商品を世の中に広めたいです。", a_bad: "有名になって、みんなに憧れられたいです。", dmg: 10 }
    ]
  },
  // 7. マニュアル人間
  {
    id: "robot", role: "事務{role}",
    es: "データ入力業務でミスゼロを継続。{result}。",
    hidden_good: "【正確無比】信頼できる実務能力", hidden_bad: "【指示待ち】言われたことしかできない",
    deck: [
      { phase: 'mid', tag: "deep", q: "マニュアルにないトラブルが起きたら？", a_good: "過去の事例を調べて対応し、事後にマニュアルを更新します。", a_bad: "社員さんが来るまで待ちます。勝手なことはしません。", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "もっと効率的な方法を思いついたら？", a_good: "提案書を作って店長に相談します。", a_bad: "余計なことはしません。波風立てたくないので。", dmg: 20 },
      { phase: 'late', tag: "value", q: "仕事で大切にしていることは？", a_good: "信頼です。小さな約束も必ず守るようにしています。", a_bad: "怒られないことですね。", dmg: 10 }
    ]
  },
  // 8. 完璧超人
  {
    id: "perfect", role: "完璧な経歴",
    es: "GPA4.0、{tech}開発経験あり、{result}。",
    hidden_good: "【次期社長候補】文句なしのSSランク人材", hidden_bad: "【経歴詐称】全てが嘘で塗り固められている",
    deck: [
      { phase: 'mid', tag: "deep", q: "なぜ起業したのに就職を？", a_good: "御社のアセットを使って、より大きな社会課題を解決したいからです。", a_bad: "あー、まあ、社会勉強的な？一度は組織を見るのもいいかなと。", dmg: 10 },
      { phase: 'mid', tag: "risk", q: "挫折経験はある？", a_good: "留学当初、英語が通じず引きこもりましたが、現地ボランティアで克服しました。", a_bad: "ないですね。全て計画通りに来たので。", dmg: 20 },
      { phase: 'mid', tag: "risk", q: "ここにある経歴、本当に全部やったの？", a_good: "はい。詳細なポートフォリオもお見せできます。", a_bad: "（目が泳ぐ）…はい。疑うんですか？失礼ですね。", dmg: 30 }
    ]
  }
];

// --- CONSTANTS ---
const CONST = {
  names: ["佐藤", "鈴木", "高橋", "田中", "渡辺", "伊藤", "山本", "中村", "小林", "加藤", "吉田", "山田", "佐々木", "山口", "松本", "井上", "木村", "林", "斎藤", "清水"],
  firsts: ["翔太", "蓮", "大樹", "美咲", "陽菜", "結衣", "健人", "陸", "湊", "蒼", "さくら", "愛", "優", "七海", "悠真", "樹", "花", "凛", "葵", "拓海"],
  univs: ["東都大学", "京北大学", "早慶義塾", "明治帝都", "国際情報大", "ネクスト工業大", "帝都理科大", "青山学院", "立教大学", "中央大学"],
  clubs_sport: ["テニス", "アメフト", "ラクロス", "野球", "サッカー", "ダンス", "チアリーディング", "山岳", "柔道", "剣道"],
  clubs_culture: ["軽音", "吹奏楽", "演劇", "漫画研究", "茶道", "ボランティア", "写真", "映画", "ESS", "広告研究"],
  roles: ["代表", "副代表", "会計", "広報", "新歓隊長", "キャプテン", "リーダー", "バイトリーダー", "創設者", "メンバー"],
  scale: ["10名", "30名", "50名", "100名", "200名", "500名", "3名"],
  results: ["全国大会出場", "県大会優勝", "売上120%達成", "黒字化", "会員数2倍", "満足度No.1", "コンテスト入賞", "メディア掲載", "退会率0%", "アプリリリース"],
  tech: ["Python", "Go", "Rust", "AWS", "React", "Docker", "AI", "Blockchain"],
  biz_terms: ["KPI", "PDCA", "LTV", "CPA", "UX", "シナジー", "アライアンス", "ボトルネック"]
};

// --- 3. GAME ENGINE ---
const Game = {
  fillTemplate: function (text, vars) {
    if (!text) return "";
    return text.replace(/{(\w+)}/g, (_, k) => vars[k] || `{${k}}`);
  },

  generateStudent: function () {
    const base = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    const isHighPerformer = Math.random() > 0.5;

    const vars = {
      name: CONST.names[Math.floor(Math.random() * CONST.names.length)] + " " + CONST.firsts[Math.floor(Math.random() * CONST.firsts.length)],
      univ: CONST.univs[Math.floor(Math.random() * CONST.univs.length)],
      club: Math.random() > 0.5 ? CONST.clubs_sport[Math.floor(Math.random() * CONST.clubs_sport.length)] : CONST.clubs_culture[Math.floor(Math.random() * CONST.clubs_culture.length)],
      role: CONST.roles[Math.floor(Math.random() * CONST.roles.length)],
      num: CONST.scale[Math.floor(Math.random() * CONST.scale.length)],
      result: CONST.results[Math.floor(Math.random() * CONST.results.length)],
      tech: CONST.tech[Math.floor(Math.random() * CONST.tech.length)],
      term: CONST.biz_terms[Math.floor(Math.random() * CONST.biz_terms.length)]
    };

    State.student = {
      name: vars.name,
      univ: vars.univ,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
      isHighPerformer: isHighPerformer,
      hidden: isHighPerformer ? base.hidden_good : base.hidden_bad,
      role: this.fillTemplate(base.role, vars),
      es: this.fillTemplate(base.es, vars)
    };

    // Combine Unique Deck + Common Pool
    let rawDeck = JSON.parse(JSON.stringify(base.deck)).concat(JSON.parse(JSON.stringify(COMMON_POOL)));

    // Inject Variables to all cards
    State.deck = rawDeck.map(card => ({
      ...card,
      q: this.fillTemplate(card.q, vars),
      a_good: this.fillTemplate(card.a_good, vars),
      a_bad: this.fillTemplate(card.a_bad, vars)
    }));
  },

  initInterview: function () {
    this.generateStudent();
    State.turn = 0;
    State.trust = 100;
    State.detected = [];
    State.score = 0;
    State.history = [];
    State.playedQ = []; // Reset played questions

    UI.showScene('scene-battle');
    UI.setupRoom();

    setTimeout(() => {
      UI.addLog("stu", `失礼します！${State.student.univ}の${State.student.name}です。本日はよろしくお願いします！`);
      this.nextTurn();
    }, 600);
  },

  nextTurn: function () {
    if (State.trust <= 0) { this.finish("BAD"); return; }
    if (State.turn > 10) { this.finish("JUDGE"); return; }

    let hand = [];

    if (State.turn === 0) {
      document.getElementById('b-turn').innerText = "Ice";
      document.getElementById('coach-msg').innerText = "まずはアイスブレイクで場を温めましょう";
      hand = JSON.parse(JSON.stringify(ICE_BREAK_DECK));
    } else {
      document.getElementById('b-turn').innerText = State.turn;

      // Determine Current Phase
      let currentPhase = 'mid';
      if (State.turn <= 3) currentPhase = 'early';
      else if (State.turn >= 8) currentPhase = 'late';

      let coachMsg = "本質を見抜く質問を選んでください";
      if (currentPhase === 'early') coachMsg = "まずは基礎的な確認を行いましょう";
      if (currentPhase === 'late') coachMsg = "最終的な価値観の確認や、志望度の確認を行いましょう";
      document.getElementById('coach-msg').innerText = coachMsg;

      // Filter Deck:
      // 1. Not played yet
      // 2. Matches current phase OR has no phase (universal)
      let available = State.deck.filter(c => {
        if (State.playedQ.includes(c.q)) return false;
        if (c.phase && c.phase !== currentPhase) return false;
        return true;
      });

      // Shuffle available
      available.sort(() => Math.random() - 0.5);

      // Pick 4 unique cards
      // If run out of phase-specific cards, try to pull from general pool avoiding PlayedQ
      if (available.length < 4) {
        // Fallback: relax phase constraint
        let fallback = State.deck.filter(c => !State.playedQ.includes(c.q));
        fallback.sort(() => Math.random() - 0.5);
        // Merge unique items
        fallback.forEach(c => {
          if (available.length < 4 && !available.includes(c)) available.push(c);
        });
      }

      hand = available.slice(0, 4);
    }

    UI.updateHUD();
    UI.renderOptions(hand);
  },

  playCard: function (card) {
    State.playedQ.push(card.q); // Mark as played

    UI.addLog("user", card.q);
    const answer = State.student.isHighPerformer ? card.a_good : card.a_bad;

    setTimeout(() => {
      UI.addLog("stu", answer);
      if (State.turn > 0) {
        if (!State.student.isHighPerformer && (card.tag === "risk" || card.tag === "deep")) {
          if (!State.detected.includes("risk")) {
            State.detected.push("risk");
            UI.updateTraits(true);
          }
        }
        if (State.student.isHighPerformer && card.tag === "deep") {
          if (!State.detected.includes("good")) {
            State.detected.push("good");
            UI.updateTraits(false);
          }
        }
        State.trust -= card.dmg;
        if (State.trust > 100) State.trust = 100;
        State.history.push({ turn: State.turn, q: card.q, a: answer, score: card.dmg > 0 ? "bad" : "good" });
      }
      State.turn++;
      this.nextTurn();
    }, 800);
  },

  finish: function (reason) {
    if (reason === "BAD") { this.showResult("GAME_OVER"); }
    else {
      UI.showScene('scene-judge');
      document.getElementById('j-name').innerText = State.student.name;
      document.getElementById('j-es').innerText = State.student.es;
    }
  },

  makeDecision: function (isHire) {
    State.isHireDecision = isHire;
    this.showResult("COMPLETE");
  },

  showResult: function (type) {
    UI.showScene('scene-result');
    UI.renderReview();
    let grade = "C", fb = "", badge = "FAILED", badgeClass = "lose";
    const s = State.student;

    if (type === "GAME_OVER") {
      grade = "D";
      fb = "圧迫面接により信頼関係が崩壊しました。";
    } else {
      const isCorrect = (s.isHighPerformer && State.isHireDecision) || (!s.isHighPerformer && !State.isHireDecision);
      if (isCorrect) {
        grade = "S"; badge = "EXCELLENT"; badgeClass = "win";
        if (s.isHighPerformer) fb = "素晴らしい判断です！高いコンピテンシーを見抜きました。";
        else fb = "ナイス判断です！リスクを的確に見抜きました。";
        let current = parseInt(localStorage.getItem('ni_hired_v21') || 0);
        localStorage.setItem('ni_hired_v21', current + 1);
      } else {
        grade = "B";
        if (s.isHighPerformer) fb = "惜しい判断です。この候補者は優秀でした。";
        else fb = "危険な採用です。リスクを見落としています。";
      }
    }
    document.getElementById('res-grade').innerText = grade;
    document.getElementById('res-badge').innerText = badge;
    document.getElementById('res-badge').className = `result-badge ${badgeClass}`;
    document.getElementById('res-feedback').innerText = fb;
    document.getElementById('res-identity').innerText = `${s.hidden} / ES: ${s.es}`;
  },

  copyLog: function () {
    const txt = State.history.map(h => `T${h.turn}: ${h.q} -> ${h.a}`).join("\n");
    navigator.clipboard.writeText(txt).then(() => alert("ログをコピーしました"));
  }
};

const State = {
  turn: 0, trust: 100, student: null, deck: [], history: [], detected: [], score: 0,
  playedQ: [], isHireDecision: false
};

const UI = {
  showScene: function (id) {
    document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    if (id === 'scene-dash') { document.getElementById('d-score').innerText = localStorage.getItem('ni_hired_v21') || 0; }
  },
  toDash: function () { this.showScene('scene-dash'); },
  setupRoom: function () {
    const s = State.student;
    document.getElementById('c-name').innerText = s.name;
    document.getElementById('c-univ').innerText = s.univ;
    document.getElementById('c-es-text').innerText = s.es;
    document.getElementById('c-icon').style.backgroundColor = s.color;
    document.getElementById('c-traits-list').innerHTML = '<span class="trait-empty">まだ見抜いていません</span>';
    document.getElementById('chat-container').innerHTML = '';
  },
  updateTraits: function (isBad) {
    const traitText = isBad ? "⚠️ リスク検知" : "✨ ポテンシャル発見";
    const css = isBad ? "trait-badge trait-bad" : "trait-badge";
    document.getElementById('c-traits-list').innerHTML = `<span class="${css}">${traitText}</span>`;
  },
  renderOptions: function (cards) {
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    cards.forEach(card => {
      const btn = document.createElement('button');
      btn.className = "cmd-btn";
      let cat = "質問";
      if (card.tag === "care" || card.tag === "ice") { cat = "✨ 共感"; }
      else if (card.tag === "risk") { cat = "⚠️ 追求"; }
      else if (card.tag === "deep") { cat = "🔍 深掘り"; }
      else if (card.tag === "intro") { cat = "📝 確認"; }
      else if (card.tag === "value") { cat = "💎 価値観"; }

      btn.innerHTML = `<span class="cmd-head" style="color:var(--primary)">${cat}</span><span class="cmd-body">${card.q}</span>`;
      btn.onclick = () => Game.playCard(card);
      grid.appendChild(btn);
    });
  },
  addLog: function (who, text) {
    const box = document.getElementById('chat-container');
    const div = document.createElement('div');
    div.className = `bubble ${who}`;
    div.innerText = text;
    box.appendChild(div);
    setTimeout(() => {
      const main = document.getElementById('main-scroll');
      main.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
    }, 100);
  },
  updateHUD: function () {
    document.getElementById('b-turn').innerText = State.turn;
    document.getElementById('b-trust-val').innerText = State.trust + "%";
    document.getElementById('b-trust-bar').style.width = Math.max(0, State.trust) + "%";
  },
  renderReview: function () {
    const list = document.getElementById('review-list');
    list.innerHTML = "";
    State.history.forEach(h => {
      const div = document.createElement('div');
      div.className = `review-item ${h.score}`;
      div.innerHTML = `<span class="rev-turn">Turn ${h.turn}</span><span class="rev-q">${h.q}</span><div class="rev-adv">${h.a}</div>`;
      list.appendChild(div);
    });
  },
  switchTab: function (name) {
    document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-body').forEach(c => c.classList.remove('active'));
    if (name === 'summary') {
      document.querySelector('.tab:nth-child(1)').classList.add('active');
      document.getElementById('tab-summary').classList.add('active');
    } else {
      document.querySelector('.tab:nth-child(2)').classList.add('active');
      document.getElementById('tab-review').classList.add('active');
    }
  }
};

// Init
UI.showScene('scene-dash');