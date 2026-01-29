/* NEXT INNOVATION ENGINE V15.0 (Final Polish) */

// --- DATA: DECKS & ARCHETYPES ---
// 共通デッキ（無限補充用）
const COMMON_DECK = [
  { type: "care", q: "緊張しなくていいよ。君の素顔が知りたい。", a: "ありがとうございます。そう言っていただけると安心します。", dmg: -5, reason: "心理的安全性を確保する良いアイスブレイクです。" },
  { type: "check", q: "この業界に興味を持ったきっかけは？", a: "生活を便利にするサービスを作りたいと思ったからです。", dmg: 0, reason: "志望動機の基本を確認する無難な質問です。" },
  { type: "deep", q: "学生時代に一番熱中したことは？", a: "やはりESに書いた活動ですね。寝食を忘れるほどでした。", dmg: 5, reason: "熱量の源泉を探る良い質問です。" },
  { type: "risk", q: "苦手なタイプの人はいる？", a: "理屈だけで動かない人とは、少し合わないかもしれません。", dmg: 10, reason: "対人関係のリスクを探る重要な質問です。" },
  { type: "deep", q: "チームでの役割は何が多かった？", a: "調整役が多かったです。間を取り持つのが得意なので。", dmg: 0, reason: "立ち位置を確認する質問です。" },
  { type: "check", q: "就職活動の軸は？", a: "成長できる環境かどうかを重視しています。", dmg: 0, reason: "価値観の確認です。" },
  { type: "deep", q: "その経験から学んだことは？", a: "継続することの重要性と、仲間の大切さです。", dmg: 5, reason: "学習能力の確認です。" }
];

// アイスブレイク用デッキ
const ICE_BREAK_DECK = [
  { type: "care", q: "今日はどうやって来たの？", a: "電車で来ました。駅から近くて助かりました！", dmg: -5, reason: "定番の雑談です。Good." },
  { type: "care", q: "オフィスの雰囲気はどう？", a: "すごく開放的で驚きました！働きやすそうですね。", dmg: -5, reason: "環境への感想を聞くことで緊張をほぐせます。" },
  { type: "care", q: "緊張してる？リラックスしていいよ。", a: "ありがとうございます…！少し肩の力が抜けました。", dmg: -5, reason: "心理的安全性を高める良い声かけです。" },
  { type: "care", q: "今日はいい天気だね。", a: "そうですね！気持ちのいい朝でした。", dmg: -5, reason: "天気の話は誰でも答えられる安全な話題です。" }
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
      { type: "care", q: "体力には自信がありそうだね。", a: "はい！無限に働けます！", dmg: -10, reason: "相手の自信がある部分を褒め、口を滑らかにさせました。" }
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
      { type: "care", q: "論理的で分かりやすいね。", a: "ありがとうございます。そこは意識しています。", dmg: -10, reason: "承認することで、より本音を引き出しやすくしました。" }
    ]
  },
  {
    id: "planner",
    role: "イベント企画サークル代表",
    es: "学園祭でタピオカ店を出店。行列を作り完売させました。",
    hidden: "具体性なし・人任せ",
    deck: [
      { type: "deep", q: "行列を作るためにどんな工夫をしたの？", a: "えっと、SNSとかで…いい感じに拡散しました！", dmg: 10, reason: "具体性のなさを露呈させました。" },
      { type: "deep", q: "「いい感じ」とは具体的に？", a: "映える写真を撮って、みんなにシェアしてもらいました！", dmg: 10, reason: "さらに深掘りしましたが、浅い回答でした。" },
      { type: "risk", q: "トラブルは起きなかった？", a: "在庫がなくなりそうでしたが、みんなの協力でなんとかなりました！", dmg: 15, reason: "問題解決能力を確認する質問です。" },
      { type: "risk", q: "君自身の役割は何だったの？", a: "私は全体の…潤滑油的な？ムードメーカーです！", dmg: 20, reason: "主体的な行動がなかったことを見抜きました。" },
      { type: "check", q: "大変だったことは？", a: "準備は大変でしたが、笑顔を見たら疲れも吹き飛びました！", dmg: 0, reason: "感情面の確認です。" }
    ]
  }
];

// --- 2. GAME STATE ---
const State = {
  turn: 0,
  maxTurn: 10,
  trust: 100,
  student: null,
  deck: [],
  history: [],
  detected: [],
  score: 0,
  playedQuestions: [] // To prevent duplicate questions
};

// --- 3. ENGINE ---
const Game = {
  initInterview: function () {
    const base = ARCHETYPES[Math.floor(Math.random() * ARCHETYPES.length)];
    const names = ["佐藤", "鈴木", "高橋", "田中", "渡辺"];
    const firsts = ["翔太", "蓮", "大樹", "美咲", "陽菜"];
    const univs = ["東都大学", "京北大学", "早慶義塾"];

    State.student = {
      ...base,
      name: names[Math.floor(Math.random() * names.length)] + " " + firsts[Math.floor(Math.random() * firsts.length)],
      univ: univs[Math.floor(Math.random() * univs.length)],
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    };

    // Build Deck with ID to track uniqueness
    State.deck = JSON.parse(JSON.stringify(base.deck)).concat(JSON.parse(JSON.stringify(COMMON_DECK)));
    State.deck.sort(() => Math.random() - 0.5);

    State.turn = 0; // ICE BREAK
    State.trust = 100;
    State.detected = [];
    State.score = 0;
    State.history = [];
    State.playedQuestions = [];

    UI.showScene('scene-battle');
    UI.setupRoom();

    setTimeout(() => {
      UI.addLog("stu", `失礼します！${State.student.univ}の${State.student.name}です。本日はよろしくお願いします！`);
      this.nextTurn();
    }, 600);
  },

  nextTurn: function () {
    // Check End
    if (State.trust <= 0) { this.finish("BAD"); return; }
    if (State.turn > State.maxTurn) { this.finish("TIMEUP"); return; }

    let hand = [];

    if (State.turn === 0) {
      document.getElementById('b-turn').innerText = "Ice";
      document.getElementById('coach-msg').innerText = "まずはアイスブレイクで場を温めましょう";
      hand = JSON.parse(JSON.stringify(ICE_BREAK_DECK));
    } else {
      document.getElementById('b-turn').innerText = State.turn;
      document.getElementById('coach-msg').innerText = "本質を見抜く質問を選んでください";

      // Filter out played questions
      State.deck = State.deck.filter(c => !State.playedQuestions.includes(c.q));

      // Refill if empty
      if (State.deck.length < 4) {
        let freshCommon = JSON.parse(JSON.stringify(COMMON_DECK));
        // Filter common deck too
        freshCommon = freshCommon.filter(c => !State.playedQuestions.includes(c.q));
        State.deck = State.deck.concat(freshCommon);
        State.deck.sort(() => Math.random() - 0.5);
      }

      hand = State.deck.slice(0, 4);
    }

    UI.updateHUD();
    UI.renderOptions(hand);
  },

  playCard: function (card) {
    State.playedQuestions.push(card.q);

    UI.addLog("user", card.q);

    setTimeout(() => {
      UI.addLog("stu", card.a);

      if (State.turn > 0) {
        State.trust -= card.dmg;
        if (State.trust > 100) State.trust = 100;

        if (card.type === "risk" && card.dmg > 0) {
          if (!State.detected.includes("risk")) State.detected.push("risk");
        }

        State.history.push({
          turn: State.turn,
          q: card.q,
          type: card.type,
          reason: card.reason,
          score: (card.type === "risk" && card.dmg > 0) || (card.type === "deep") ? "good" : "normal"
        });
      }

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
      grade = "D"; fb = "圧迫しすぎて信頼関係が崩壊しました。";
    } else if (riskFound) {
      grade = "A"; fb = `お見事です！表面的なESに騙されず、学生の「${State.student.hidden}」という本性を見抜きました。`;
    } else {
      grade = "C"; fb = "会話は弾みましたが、核心には触れられませんでした。もっと「追求」や「深掘り」カードで踏み込む必要があります。";
    }

    document.getElementById('res-grade').innerText = grade;
    document.getElementById('res-grade').style.background = grade === "A" ? "-webkit-linear-gradient(45deg, #10b981, #3b82f6)" : "#64748b";
    document.getElementById('res-grade').style.webkitBackgroundClip = "text";
    document.getElementById('res-grade').style.webkitTextFillColor = "transparent";

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
  toDash: function () { this.showScene('scene-dash'); },

  setupRoom: function () {
    const s = State.student;
    document.getElementById('c-name').innerText = s.name;
    document.getElementById('c-univ').innerText = s.univ;
    document.getElementById('c-es-text').innerText = s.es;
    document.getElementById('c-icon').style.backgroundColor = s.color;
    document.getElementById('c-traits-list').innerHTML = '';
    document.getElementById('chat-container').innerHTML = ''; // Clear chat
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
      if (State.turn === 0) { cat = "☕ 雑談"; cls = "cat-care"; }

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

    // Auto Scroll Logic
    setTimeout(() => {
      const anchor = document.getElementById('scroll-anchor');
      anchor.scrollIntoView({ behavior: 'smooth', block: 'end' });
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
      div.innerHTML = `
        <span class="rev-turn">Turn ${h.turn}</span>
        <div class="rev-q">${h.q}</span>
        <div class="rev-advice"><span class="advice-label">解説:</span> ${h.reason}</div>
      `;
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
UI.switchScene('scene-dash');