/* NEXT INNOVATION ENGINE V12
   "Review & Unlimited Deck"
*/

// --- 1. DATA: EXPANDED DECKS ---
const COMMON_DECK = [
  { type: "care", q: "緊張しなくていいよ。君の素顔が知りたい。", a: "ありがとうございます。そう言っていただけると安心します。", dmg: -10, reason: "心理的安全性を確保する良いアイスブレイクです。" },
  { type: "check", q: "この業界に興味を持ったきっかけは？", a: "生活を便利にするサービスを作りたいと思ったからです。", dmg: 0, reason: "志望動機の基本を確認する無難な質問です。" },
  { type: "deep", q: "学生時代に一番熱中したことは？", a: "やはりESに書いた活動ですね。寝食を忘れるほどでした。", dmg: 5, reason: "熱量の源泉を探る良い質問です。" },
  { type: "risk", q: "苦手なタイプの人はいる？", a: "理屈だけで動かない人とは、少し合わないかもしれません。", dmg: 10, reason: "対人関係のリスクを探る重要な質問です。" },
  { type: "check", q: "最近気になっているニュースはある？", a: "AI技術の進化には注目しています。", dmg: 0, reason: "情報感度を確認する質問です。" },
  { type: "care", q: "ここまで来るのは大変だった？", a: "いえ、家が近いので大丈夫です！", dmg: -5, reason: "雑談で場を和ませる配慮です。" },
  { type: "deep", q: "チームでの役割は？", a: "調整役になることが多いです。", dmg: 5, reason: "組織適性を測る質問です。" },
  { type: "risk", q: "自分を動物に例えると？", a: "…マグロですかね。止まると死ぬので。", dmg: 10, reason: "自己認識とユーモアセンスを問う変化球です。" }
];

const ARCHETYPES = [
  {
    id: "muscle",
    role: "体育会系リーダー",
    es: "テニスサークル主将。部員100名を統率し、県大会優勝。",
    hidden: "精神論・思考停止",
    deck: [
      { type: "check", q: "100人をまとめるのは大変じゃなかった？", a: "はい！でもデカイ声を出して気合で乗り切りました！", dmg: 0, reason: "基本情報の確認です。" },
      { type: "deep", q: "練習メニューで工夫した点は？", a: "伝統的なメニューが一番なので、量を倍に増やしました！", dmg: 10, reason: "思考停止していないか確認できました。" },
      { type: "risk", q: "負けた時の原因分析は？", a: "気合が足りなかったからです。次はもっと走ります！", dmg: 20, reason: "論理的思考力の欠如（リスク）を見抜くナイス質問です。" },
      { type: "risk", q: "理不尽な指示をされたら？", a: "耐えます！理不尽には慣れっこなんで！", dmg: 10, reason: "ストレス耐性は高いですが、従順すぎる可能性も示唆されました。" },
      { type: "deep", q: "チームの対立はどう解決した？", a: "飲み会で腹を割って話せば解決です！", dmg: 10, reason: "再現性のある解決策を持っているか確認しました。" },
      { type: "care", q: "体力には自信がありそうだね。", a: "はい！無限に働けます！", dmg: -10, reason: "相手の自信がある部分を褒め、口を滑らかにさせました。" },
      { type: "check", q: "なぜテニスを始めたの？", a: "漫画の影響で、熱い戦いに憧れて始めました！", dmg: 0, reason: "動機を確認しました。" },
      { type: "deep", q: "後輩の指導で意識したことは？", a: "背中で語ることです！俺についてこいと！", dmg: 10, reason: "言語化能力の低さが露呈しています。" },
      { type: "risk", q: "もし部員が辞めたいと言ったら？", a: "根性が足りない！と叱咤激励して引き止めます！", dmg: 20, reason: "強制的なマネジメントスタイルのリスクを検知しました。" },
      { type: "care", q: "大会優勝おめでとう！すごいね。", a: "ありがとうございます！仲間のおかげです！", dmg: -10, reason: "成功体験を承認し、信頼を高めました。" }
    ]
  },
  {
    id: "smart",
    role: "ITベンチャーインターン",
    es: "WebマーケティングでCPAを20%改善。売上貢献。",
    hidden: "打たれ弱い・他責",
    deck: [
      { type: "deep", q: "CPA改善の具体的な施策は？", a: "クリエイティブのABテストを回し、無駄な配信を停止しました。", dmg: 0, reason: "具体的なスキルレベルを確認できました。" },
      { type: "deep", q: "施策は自分で考えたの？", a: "はい。競合分析を行い、論理的に導き出しました。", dmg: 5, reason: "主体性の有無を確認する良い深掘りです。" },
      { type: "risk", q: "もし数字が悪化し続けたら？", a: "えっ…（小声）それは…マーケットのせいも…", dmg: 20, reason: "想定外の質問で、ストレス耐性の低さを露呈させました。" },
      { type: "risk", q: "失敗した原因をどう分析する？", a: "デザイナーの制作物が遅れたのが原因ですね。", dmg: 30, reason: "他責思考のリスクを見事に検知しました。" },
      { type: "check", q: "将来のビジョンは？", a: "スマートに働いて、最短でマネージャーになりたいです。", dmg: 0, reason: "キャリア観の確認です。" },
      { type: "care", q: "論理的で分かりやすいね。", a: "ありがとうございます。そこは意識しています。", dmg: -10, reason: "承認することで、より本音を引き出しやすくしました。" },
      { type: "check", q: "なぜWebマーケティングを？", a: "結果がすべて数字で出るのが公平で好きだからです。", dmg: 0, reason: "適性の一致を確認しました。" },
      { type: "deep", q: "チームでのコミュニケーションは？", a: "Slackで効率的に行い、無駄なMTGは減らしました。", dmg: 5, reason: "効率重視の姿勢を確認しました。" },
      { type: "risk", q: "泥臭いドブ板営業はできる？", a: "あー…効率が悪いので、できればやりたくないですね。", dmg: 15, reason: "選り好みする傾向（リスク）を検知しました。" },
      { type: "care", q: "すごい実績だね。優秀だよ。", a: "恐縮です。（少し勝ち誇った顔）", dmg: -10, reason: "プライドをくすぐり、隙を作りました。" }
    ]
  }
];

// --- 2. GAME STATE ---
const State = {
  turn: 1,
  maxTurn: 10,
  trust: 100,
  student: null,
  deck: [],
  history: [], // {turn, q, a, type, reason}
  detected: [],
  score: 0
};

// --- 3. ENGINE ---
const Game = {
  initInterview: function () {
    const base = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    const names = ["佐藤", "鈴木", "高橋", "田中"];
    const firsts = ["翔太", "蓮", "大樹", "美咲"];
    const univs = ["東都大学", "京北大学", "早慶義塾"];

    State.student = {
      ...base,
      name: names[Math.floor(Math.random() * names.length)] + " " + firsts[Math.floor(Math.random() * firsts.length)],
      univ: univs[Math.floor(Math.random() * univs.length)],
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    };

    // Build Deck: Clone specific deck + Add common deck
    State.deck = JSON.parse(JSON.stringify(base.deck)).concat(JSON.parse(JSON.stringify(COMMON_DECK)));
    // Shuffle deck
    State.deck.sort(() => Math.random() - 0.5);

    State.turn = 1;
    State.trust = 100;
    State.detected = [];
    State.score = 0;
    State.history = [];

    UI.showScene('scene-battle');
    UI.setupRoom();

    setTimeout(() => {
      UI.addLog("stu", `失礼します！${State.student.univ}の${State.student.name}です。よろしくお願いします！`);
      this.nextTurn();
    }, 600);
  },

  nextTurn: function () {
    if (State.trust <= 0) { this.finish("BAD"); return; }
    if (State.turn > State.maxTurn) { this.finish("TIMEUP"); return; }

    // Ensure 4 cards
    if (State.deck.length < 4) {
      // Emergency refill from common deck if empty
      State.deck = State.deck.concat(JSON.parse(JSON.stringify(COMMON_DECK)));
      // Reshuffle newly added cards essentially
      State.deck.sort(() => Math.random() - 0.5);
    }

    const hand = State.deck.slice(0, 4);
    UI.updateHUD();
    UI.renderOptions(hand);
  },

  playCard: function (card) {
    // Remove played card
    State.deck = State.deck.filter(c => c.q !== card.q);

    UI.addLog("user", card.q);

    setTimeout(() => {
      UI.addLog("stu", card.a);

      // Update State
      State.trust -= card.dmg;
      if (State.trust > 100) State.trust = 100;

      // Detection Logic
      if (card.type === "risk" && card.dmg > 0) {
        if (!State.detected.includes("risk")) State.detected.push("risk");
      }

      // History for Review
      State.history.push({
        turn: State.turn,
        q: card.q,
        type: card.type,
        reason: card.reason,
        score: (card.type === "risk" && card.dmg > 0) || (card.type === "deep") ? "good" : "normal"
      });

      State.turn++;
      this.nextTurn();
    }, 800);
  },

  finish: function (reason) {
    UI.showScene('scene-result');
    UI.renderReview();

    let grade = "C";
    let fb = "";
    const riskFound = State.detected.includes("risk");

    if (reason === "BAD") {
      grade = "D";
      fb = "圧迫しすぎて信頼関係が崩壊しました。「共感」カードで信頼を回復させながら進めましょう。";
    } else if (riskFound) {
      grade = "A";
      fb = `お見事です！表面的なESに騙されず、学生の「${State.student.hidden}」という本性を見抜きました。`;
    } else {
      grade = "C";
      fb = "会話は弾みましたが、核心に触れられませんでした。もっと「Risk」や「Deep」カードで踏み込む必要があります。";
    }

    document.getElementById('res-grade').innerText = grade;
    document.getElementById('res-grade').style.color = grade === "A" ? "#10b981" : (grade === "D" ? "#ef4444" : "#f59e0b");
    document.getElementById('res-feedback').innerText = fb;
    document.getElementById('res-identity').innerText = `正体: ${State.student.role} / 裏特性: ${State.student.hidden}`;
  },

  copyLog: function () {
    const txt = State.history.map(h => `T${h.turn}: ${h.q} -> [${h.type}]`).join("\n");
    navigator.clipboard.writeText(txt).then(() => alert("ログをコピーしました"));
  }
};

// --- 4. UI ---
const UI = {
  showScene: function (id) {
    document.querySelectorAll('.scene').forEach(el => el.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  },

  setupRoom: function () {
    const s = State.student;
    document.getElementById('c-name').innerText = s.name;
    document.getElementById('c-univ').innerText = s.univ;
    document.getElementById('c-es-text').innerText = s.es;
    document.getElementById('c-icon').style.backgroundColor = s.color;
    document.getElementById('c-traits-list').innerHTML = '';
    document.getElementById('dialogue-scroll').innerHTML = '';
  },

  renderOptions: function (cards) {
    const grid = document.getElementById('options-grid');
    grid.innerHTML = "";
    cards.forEach(card => {
      const btn = document.createElement('button');
      btn.className = "cmd-btn";
      let cat = "質問";
      let cls = "";
      if (card.type === "risk") { cat = "⚠️ 追求"; cls = "cat-risk"; }
      if (card.type === "deep") { cat = "🔍 深掘り"; cls = "cat-deep"; }
      if (card.type === "care") { cat = "✨ 共感"; cls = "cat-care"; }

      btn.innerHTML = `<span class="cmd-cat ${cls}">${cat}</span> <span class="cmd-text">${card.q}</span>`;
      btn.onclick = () => Game.playCard(card);
      grid.appendChild(btn);
    });
  },

  addLog: function (who, text) {
    const box = document.getElementById('dialogue-scroll');
    const div = document.createElement('div');
    div.className = `bubble ${who}`;
    div.innerText = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
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
      div.innerHTML = `
        <span class="rev-turn">Turn ${h.turn}</span>
        <div class="rev-q">${h.q}</div>
        <div class="rev-advice"><span class="advice-label">解説:</span> ${h.reason}</div>
      `;
      list.appendChild(div);
    });
  },

  switchTab: function (tabName) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    // Simple logic assuming 2 tabs
    if (tabName === 'summary') {
      document.querySelector('.tab-btn:nth-child(1)').classList.add('active');
      document.getElementById('tab-summary').classList.add('active');
    } else {
      document.querySelector('.tab-btn:nth-child(2)').classList.add('active');
      document.getElementById('tab-review').classList.add('active');
    }
  },

  toDash: function () { this.showScene('scene-dash'); }
};