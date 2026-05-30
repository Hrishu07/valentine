const PASSWORD = "merichoomu";

// Tracks her selections
const her = {
  colour: '',
  decor: '',
  layout: '',
  vibe: ''
};

let index = 0;
const card = document.getElementById("card");

function unlock(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("lock").style.display="none";
    document.getElementById("main").style.display="flex";
    render();
  } else {
    const box = document.querySelector(".lock-box");
    box.classList.add("shake");
    setTimeout(()=>box.classList.remove("shake"),500);
    alert("Access Denied 🚫");
  }
}

function animateCard(){
  card.classList.remove("slide");
  void card.offsetWidth;
  card.classList.add("slide");
}

function showReaction(emoji, text, callback){
  const overlay = document.createElement("div");
  overlay.className = "reaction-overlay";
  overlay.innerHTML = `<span class="reaction-emoji">${emoji}</span><span class="reaction-text">${text}</span>`;
  document.body.appendChild(overlay);
  setTimeout(()=>{
    overlay.classList.add("fade-out");
    setTimeout(()=>{ overlay.remove(); if(callback) callback(); }, 400);
  }, 1500);
}

const pages = [
  { type: "story", id: "intro" },
  { type: "question", id: "colour" },
  { type: "question", id: "decor" },
  { type: "question", id: "layout" },
  { type: "question", id: "vibe" },
  { type: "photo", id: "photo" },
  { type: "story", id: "realises" },
  { type: "final", id: "final" }
];

function render(){
  animateCard();
  const page = pages[index];
  if(page.type === "story") renderStory(page.id);
  else if(page.type === "question") renderQuestion(page.id);
  else if(page.type === "photo") renderPhoto();
  else if(page.type === "final") renderFinal();
}

function next(){ index++; render(); }

/* ── STORY SLIDES ── */
function renderStory(id){
  if(id === "intro"){
    card.innerHTML = `
      <div class="story-icon">🏡</div>
      <h2>The First Visit</h2>
      <p>I walked into her studio looking for a designer.<br>
      I found something far more beautiful instead.<br><br>
      One glance at Kanishka…<br>
      and I forgot why I even came. 😌</p>
      <button class="btn-main" onclick="next()">Continue →</button>
    `;
  } else if(id === "realises"){
    card.innerHTML = `
      <div class="story-icon">😊</div>
      <h2>She Realises…</h2>
      <p>
        She looked at the final mood board.<br>
        Then slowly looked at me.<br><br>
        <em>"This is… everything I love."</em><br><br>
        I just smiled quietly.<br>
        <em>"I know."</em> 😌💖
      </p>
      <button class="btn-main" onclick="next()">And then… 🌹</button>
    `;
  }
}

/* ── QUESTION SLIDES ── */
function renderQuestion(id){
  if(id === "colour"){
    card.innerHTML = `
      <div class="story-icon">🎨</div>
      <h2>Favourite Wall Colour?</h2>
      <p class="sub">I leaned forward and asked with my best casual face —<br><em>"So… what's YOUR favourite colour for walls?"</em></p>
      <div class="choices">
        <button class="choice-btn" style="--c:#87a878" onclick="pick('colour','Sage Green 🌿','🌿','Ooh, sage green — noted instantly! 😏')">🌿 Sage Green</button>
        <button class="choice-btn" style="--c:#e8dcc8" onclick="pick('colour','Warm Ivory 🤍','🤍','Warm ivory it is — writing it down with my heart ✍️')">🤍 Warm Ivory</button>
        <button class="choice-btn" style="--c:#c9a88e" onclick="pick('colour','Dusty Terracotta 🧡','🧡','Terracotta! Bold choice, beautiful choice 😌')">🧡 Terracotta</button>
        <button class="choice-btn" style="--c:#b8c4d0" onclick="pick('colour','Soft Blue-Grey 💙','💙','Blue-grey like the morning light — perfect 💙')">💙 Blue-Grey</button>
      </div>
    `;
  } else if(id === "decor"){
    card.innerHTML = `
      <div class="story-icon">🛋️</div>
      <h2>Home Décor Style?</h2>
      <p class="sub"><em>"And what kind of décor makes you feel most… at home?"</em><br>She tilted her head, a little suspicious now 😏</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('decor','Cosy & Warm 🕯️','🕯️','Cosy and warm — just like her smile 😌')">🕯️ Cosy & Warm</button>
        <button class="choice-btn" onclick="pick('decor','Minimal & Clean ✨','✨','Clean lines, clear mind — and a full heart ✨')">✨ Minimal & Clean</button>
        <button class="choice-btn" onclick="pick('decor','Boho & Earthy 🌾','🌾','Boho earthy! Free-spirited and beautiful 🌾')">🌾 Boho & Earthy</button>
        <button class="choice-btn" onclick="pick('decor','Classic & Elegant 🪞','🪞','Timeless elegance. Obviously. 🪞')">🪞 Classic Elegant</button>
      </div>
    `;
  } else if(id === "layout"){
    card.innerHTML = `
      <div class="story-icon">🪟</div>
      <h2>Favourite Cosy Spot?</h2>
      <p class="sub"><em>"If you could have ONE perfect corner in this house — where would you curl up?"</em><br>She laughed softly. My heart forgot how to beat. 💛</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('layout','A window reading nook 📖','📖','A reading nook by the window — adding it right now 📖')">📖 Window Reading Nook</button>
        <button class="choice-btn" onclick="pick('layout','A cosy kitchen corner ☕','☕','A kitchen nook for morning coffee — yes, absolutely ☕')">☕ Kitchen Coffee Corner</button>
        <button class="choice-btn" onclick="pick('layout','A garden-view balcony 🌿','🌿','Garden views every morning — done and done 🌿')">🌿 Garden Balcony</button>
        <button class="choice-btn" onclick="pick('layout','A soft-lit bedroom haven 🌙','🌙','A dreamy bedroom retreat — my favourite choice 🌙')">🌙 Bedroom Haven</button>
      </div>
    `;
  } else if(id === "vibe"){
    card.innerHTML = `
      <div class="story-icon">🌸</div>
      <h2>Overall Home Vibe?</h2>
      <p class="sub"><em>"Last question — what feeling do you want when you walk through the front door?"</em><br>She smiled shyly. She was definitely onto me now. 🌸</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('vibe','Warm & Welcoming 🤗','🤗','Warm and welcoming — just like you are 🤗')">🤗 Warm & Welcoming</button>
        <button class="choice-btn" onclick="pick('vibe','Calm & Peaceful 🕊️','🕊️','Calm and peaceful — a sanctuary 🕊️')">🕊️ Calm & Peaceful</button>
        <button class="choice-btn" onclick="pick('vibe','Joyful & Bright ☀️','☀️','Joyful and bright — impossible not to smile here ☀️')">☀️ Joyful & Bright</button>
        <button class="choice-btn" onclick="pick('vibe','Romantic & Soft 🌹','🌹','Romantic and soft — now THAT is a home 🌹')">🌹 Romantic & Soft</button>
      </div>
    `;
  }
}

function pick(key, value, emoji, reactionText){
  her[key] = value;
  showReaction(emoji, reactionText, ()=>next());
}

/* ── PHOTO SLIDE ── */
function renderPhoto(){
  card.innerHTML = `
    <div class="story-icon">📋</div>
    <h2>Our Consultation So Far</h2>
    <div class="photos">
      <div class="photo-wrap"><img src="hrishu.jpg"><span>Hrishu 😌</span></div>
      <div class="heart-between">💕</div>
      <div class="photo-wrap"><img src="kanishka.jpg"><span>Kanishka 🌸</span></div>
    </div>
    <div class="picks-summary">
      <p>🎨 Colour: <strong>${her.colour}</strong></p>
      <p>🛋️ Décor: <strong>${her.decor}</strong></p>
      <p>🪟 Spot: <strong>${her.layout}</strong></p>
      <p>🌸 Vibe: <strong>${her.vibe}</strong></p>
    </div>
    <p style="margin-top:12px;font-size:14px;color:#9a7040;font-style:italic">She's just realising all of these are exactly what she loves… 👀</p>
    <button class="btn-main" onclick="next()">Next 💖</button>
  `;
}

/* ── FINAL SLIDE ── */
function renderFinal(){
  card.innerHTML = `
    <div class="story-icon">🌹</div>
    <h2>The Real Blueprint</h2>
    <p style="font-size:14.5px;line-height:2">
      Kanishka…<br><br>
      I came to build a house.<br>
      But between <em>${her.colour}</em> walls,<br>
      <em>${her.decor.toLowerCase()}</em> corners,<br>
      and your quiet little smile —<br><br>
      I realised I wasn't just designing a home.<br>
      I was designing it <em>for you.</em><br><br>
      Every choice was yours.<br>
      Every room was yours.<br>
      And I'd very much like <em>you</em> to be too. 🏡❤️<br><br>
      <strong>Will you be the owner of my home… and my heart? 💍</strong>
    </p>
    <div class="final-btns">
      <button class="btn-main" onclick="yes()">Yes, always ❤️</button>
      <button class="no" onmouseover="moveNo()">No 🙈</button>
    </div>
  `;
}

function yes(){
  card.innerHTML = `
    <div class="story-icon big-icon">🏡</div>
    <h2>Home. Finally. 💘</h2>
    <p>
      Some people find a house.<br>
      Some people find a home.<br>
      I found both — in you. 😌❤️<br><br>
      <em>— Hrishu</em>
    </p>
    <div class="confetti-row">🌸 💍 🌹 💖 🏡 ✨ 💕</div>
  `;
  launchConfetti();
}

function moveNo(){
  const btn = document.querySelector(".no");
  btn.style.top = Math.random()*75+"%";
  btn.style.left = Math.random()*75+"%";
}

/* HEARTS */
setInterval(()=>{
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = ["💗","🌸","✨","💕"][Math.floor(Math.random()*4)];
  h.style.left = Math.random()*100+"vw";
  h.style.animationDuration = (6+Math.random()*4)+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(), 10000);
}, 600);

/* CONFETTI */
function launchConfetti(){
  for(let i=0;i<30;i++){
    setTimeout(()=>{
      const c=document.createElement("div");
      c.className="heart";
      c.innerHTML=["💍","🌹","💖","🌸","✨","🏡"][Math.floor(Math.random()*6)];
      c.style.left=Math.random()*100+"vw";
      c.style.animationDuration=(3+Math.random()*3)+"s";
      document.body.appendChild(c);
      setTimeout(()=>c.remove(),6000);
    }, i*100);
  }
}
