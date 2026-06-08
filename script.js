const PASSWORD = "merichoomu";
 
const her = { colour: '', decor: '', layout: '', vibe: '' };
let index = 0;
const card = document.getElementById("card");
 
/* ── PETALS ── */
const petalSymbols = ["🌸","✨","🌹","💮","🕊️","🌷"];
setInterval(()=>{
  const p = document.createElement("div");
  p.className = "heart";
  p.innerHTML = petalSymbols[Math.floor(Math.random()*petalSymbols.length)];
  p.style.left = Math.random()*100+"vw";
  p.style.fontSize = (12 + Math.random()*12)+"px";
  p.style.animationDuration = (9+Math.random()*8)+"s";
  p.style.opacity = 0.4 + Math.random()*0.4;
  document.body.appendChild(p);
  setTimeout(()=>p.remove(), 18000);
}, 700);
 
/* ── UNLOCK ── */
function unlock(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("lock").style.display="none";
    document.getElementById("main").style.display="flex";
    render();
  } else {
    const box = document.querySelector(".lock-box");
    box.classList.add("shake");
    setTimeout(()=>box.classList.remove("shake"), 500);
  }
}
 
/* ── ANIMATE CARD ── */
function animateCard(){
  card.classList.remove("slide");
  void card.offsetWidth;
  card.classList.add("slide");
}
 
/* ── REACTION ── */
function showReaction(emoji, text, callback){
  const o = document.createElement("div");
  o.className = "reaction-overlay";
  o.innerHTML = `<div class="reaction-emoji">${emoji}</div><div class="reaction-text">${text}</div>`;
  document.body.appendChild(o);
  setTimeout(()=>{
    o.classList.add("fade-out");
    setTimeout(()=>{ o.remove(); if(callback) callback(); }, 380);
  }, 1700);
}
 
/* ── PAGES ── */
const pages = [
  { type:"story", id:"intro" },
  { type:"question", id:"colour" },
  { type:"question", id:"decor" },
  { type:"question", id:"layout" },
  { type:"question", id:"vibe" },
  { type:"photo" },
  { type:"story", id:"realises" },
  { type:"final" }
];
 
function render(){
  animateCard();
  const page = pages[index];
  if(page.type==="story")    renderStory(page.id);
  if(page.type==="question") renderQuestion(page.id);
  if(page.type==="photo")    renderPhoto();
  if(page.type==="final")    renderFinal();
}
 
function next(){ index++; render(); }
function prev(){ if(index > 0){ index--; render(); } }
 
/* ── DIVIDER ── */
const div = `<div class="divider"><span>✦</span></div>`;
 
/* ── NAV ROW ── */
function navRow(nextLabel, nextFn = "next()", showPrev = true){
  const prevBtn = showPrev && index > 0
    ? `<button class="btn-prev" onclick="prev()">← Back</button>`
    : `<span></span>`;
  return `<div class="nav-row">${prevBtn}<button class="btn-main" onclick="${nextFn}">${nextLabel}</button></div>`;
}
 
/* ── STORIES ── */
function renderStory(id){
  if(id==="intro"){
    card.innerHTML=`
      <span class="story-icon">🏡</span>
      <h2>The First Visit</h2>
      ${div}
      <p>I walked into her studio looking for a designer.\n\nI found something far more beautiful instead.\n\nOne glance at Kanishka —\nand I forgot why I even came.</p>
      ${navRow("Continue")}
    `;
  } else if(id==="realises"){
    card.innerHTML=`
      <span class="story-icon">🌹</span>
      <h2>She Realises…</h2>
      ${div}
      <p>She looked at the final mood board.\nThen slowly looked at me.\n\n<em>"This is… everything I love."</em>\n\nI just smiled quietly.\n<em>"I know."</em></p>
      ${navRow("And then…")}
    `;
  }
}
 
/* ── QUESTIONS ── */
function renderQuestion(id){
  if(id==="colour"){
    card.innerHTML=`
      <span class="story-icon">🎨</span>
      <h2>Your Favourite Wall Colour?</h2>
      <p class="sub">"So… what's your favourite colour for walls?"\nI asked, with my best casual face.</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('colour','Sage Green 🌿','🌿','Sage green — noted instantly.')">
          <span class="choice-icon">🌿</span>Sage Green
        </button>
        <button class="choice-btn" onclick="pick('colour','Warm Ivory 🤍','🤍','Warm ivory. Writing it down with my heart.')">
          <span class="choice-icon">🤍</span>Warm Ivory
        </button>
        <button class="choice-btn" onclick="pick('colour','Dusty Terracotta 🧡','🧡','Terracotta — bold and beautiful, just like you.')">
          <span class="choice-icon">🧡</span>Dusty Terracotta
        </button>
        <button class="choice-btn" onclick="pick('colour','Blue-Grey Mist 💙','💙','Blue-grey, like the light of a quiet morning.')">
          <span class="choice-icon">💙</span>Blue-Grey Mist
        </button>
      </div>
      ${index > 0 ? `<div class="back-row"><button class="btn-prev" onclick="prev()">← Back</button></div>` : ''}
    `;
  } else if(id==="decor"){
    card.innerHTML=`
      <span class="story-icon">🛋️</span>
      <h2>Your Décor Style?</h2>
      <p class="sub">"What kind of décor makes you feel most at home?"\nShe tilted her head — a little suspicious now.</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('decor','Cosy & Warm 🕯️','🕯️','Cosy and warm — just like the way you make me feel.')">
          <span class="choice-icon">🕯️</span>Cosy & Warm
        </button>
        <button class="choice-btn" onclick="pick('decor','Minimal & Clean ✨','✨','Minimal, clean — and quietly breathtaking.')">
          <span class="choice-icon">✨</span>Minimal & Clean
        </button>
        <button class="choice-btn" onclick="pick('decor','Boho & Earthy 🌾','🌾','Free-spirited and beautiful — of course.')">
          <span class="choice-icon">🌾</span>Boho & Earthy
        </button>
        <button class="choice-btn" onclick="pick('decor','Classic & Elegant 🪞','🪞','Timeless elegance. Obviously.')">
          <span class="choice-icon">🪞</span>Classic Elegant
        </button>
      </div>
      ${index > 0 ? `<div class="back-row"><button class="btn-prev" onclick="prev()">← Back</button></div>` : ''}
    `;
  } else if(id==="layout"){
    card.innerHTML=`
      <span class="story-icon">🪟</span>
      <h2>Your Favourite Cosy Spot?</h2>
      <p class="sub">"If you could have one perfect corner in this house —\nwhere would you curl up?"\nShe laughed softly. My heart forgot to beat.</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('layout','A Window Reading Nook 📖','📖','A reading nook by the window — adding it right now.')">
          <span class="choice-icon">📖</span>Window Reading Nook
        </button>
        <button class="choice-btn" onclick="pick('layout','A Kitchen Coffee Corner ☕','☕','Morning coffee in the kitchen light — perfect.')">
          <span class="choice-icon">☕</span>Kitchen Coffee Corner
        </button>
        <button class="choice-btn" onclick="pick('layout','A Garden-View Balcony 🌿','🌿','A garden balcony — every morning, yours.')">
          <span class="choice-icon">🌿</span>Garden Balcony
        </button>
        <button class="choice-btn" onclick="pick('layout','A Soft-Lit Bedroom Haven 🌙','🌙','A dreamy bedroom retreat — the most beautiful choice.')">
          <span class="choice-icon">🌙</span>Bedroom Haven
        </button>
      </div>
      ${index > 0 ? `<div class="back-row"><button class="btn-prev" onclick="prev()">← Back</button></div>` : ''}
    `;
  } else if(id==="vibe"){
    card.innerHTML=`
      <span class="story-icon">🌸</span>
      <h2>The Feeling at the Front Door?</h2>
      <p class="sub">"Last one — what do you want to feel\nwhen you walk through the front door?"\nShe smiled shyly. She knew.</p>
      <div class="choices">
        <button class="choice-btn" onclick="pick('vibe','Warm & Welcoming 🤗','🤗','Warm and welcoming — just like you always are.')">
          <span class="choice-icon">🤗</span>Warm & Welcoming
        </button>
        <button class="choice-btn" onclick="pick('vibe','Calm & Peaceful 🕊️','🕊️','Calm and peaceful — a sanctuary built for you.')">
          <span class="choice-icon">🕊️</span>Calm & Peaceful
        </button>
        <button class="choice-btn" onclick="pick('vibe','Joyful & Bright ☀️','☀️','Joyful and bright — impossible not to smile.')">
          <span class="choice-icon">☀️</span>Joyful & Bright
        </button>
        <button class="choice-btn" onclick="pick('vibe','Romantic & Soft 🌹','🌹','Romantic and soft — now that is a home.')">
          <span class="choice-icon">🌹</span>Romantic & Soft
        </button>
      </div>
      ${index > 0 ? `<div class="back-row"><button class="btn-prev" onclick="prev()">← Back</button></div>` : ''}
    `;
  }
}
 
function pick(key, value, emoji, reactionText){
  her[key] = value;
  showReaction(emoji, reactionText, ()=>next());
}
 
/* ── PHOTO ── */
function renderPhoto(){
  card.innerHTML=`
    <span class="story-icon">✨</span>
    <h2>Our Consultation</h2>
    ${div}
    <div class="photos">
      <div class="photo-wrap"><img src="spiderman1.jpg"><span>Hrishu</span></div>
      <div class="heart-between">💕</div>
      <div class="photo-wrap"><img src="spiderwoman.jpg"><span>Kanishka</span></div>
    </div>
    <div class="picks-summary">
      <p>🎨 Colour &nbsp;— <strong>${her.colour}</strong></p>
      <p>🛋️ Décor &nbsp;&nbsp;— <strong>${her.decor}</strong></p>
      <p>🪟 Spot &nbsp;&nbsp;&nbsp;— <strong>${her.layout}</strong></p>
      <p>🌸 Vibe &nbsp;&nbsp;&nbsp;— <strong>${her.vibe}</strong></p>
    </div>
    <p class="sub" style="margin-top:14px">She's just realising all of this is exactly her taste… 👀</p>
    ${navRow("Continue")}
  `;
}
 
/* ── FINAL ── */
function renderFinal(){
  card.innerHTML=`
    <span class="story-icon">🌹</span>
    <h2>The Real Blueprint</h2>
    ${div}
    <p style="font-size:14.5px;line-height:2.1;text-align:left">
      Kanishka…<br><br>
      I came to build a house.<br>
      But between <em>${her.colour}</em> walls,<br>
      <em>${her.decor.toLowerCase()}</em> corners,<br>
      and your quiet, shy smile —<br><br>
      I realised I was not just designing a home.<br>
      I was designing it <em>for you.</em><br><br>
      Every colour — yours.<br>
      Every corner — yours.<br><br>
      And I'd very much like <em>you</em> to be too. 🏡
    </p>
    ${div}
    <p style="font-size:16px;font-family:'Cormorant Garamond',serif;color:rgba(232,213,170,0.9);letter-spacing:0.5px">
      Will you be the owner of my home…<br>and my heart? 💍
    </p>
    <div class="final-btns">
      <button class="btn-prev" onclick="prev()">← Back</button>
      <button class="btn-yes" onclick="yes()">Yes, always ❤️</button>
      <button class="no">No 🙈</button>
    </div>
  `;
}
 
function yes(){
  card.innerHTML=`
    <span class="story-icon big-icon">🏡</span>
    <h2>Home. Finally.</h2>
    ${div}
    <p style="font-size:15.5px;line-height:2.1">
      Some people search for a house.<br>
      Some people search for a home.<br>
      I found both —<br><em>in you.</em> 💖
    </p>
    <p style="margin-top:20px;font-family:'Cormorant Garamond',serif;font-size:14px;color:rgba(201,168,108,0.5);letter-spacing:2px">— Hrishu</p>
    <div class="confetti-row">🌸 💍 🌹 💖 🏡 ✨</div>
  `;
  launchConfetti();
}
 
function moveNo(){
  const btn = document.querySelector(".no");
  if(!btn) return;
  const bw = btn.offsetWidth, bh = btn.offsetHeight;
  const maxX = window.innerWidth  - bw  - 16;
  const maxY = window.innerHeight - bh  - 16;
  let nx = Math.random() * maxX;
  let ny = Math.random() * maxY;
  btn.style.left = nx + "px";
  btn.style.top  = ny + "px";
}
 
document.addEventListener("mousemove", e => {
  const btn = document.querySelector(".no");
  if(!btn) return;
  const bw = btn.offsetWidth, bh = btn.offsetHeight;
  const br = btn.getBoundingClientRect();
  const cx = br.left + bw/2, cy = br.top + bh/2;
  const dist = Math.hypot(e.clientX - cx, e.clientY - cy);
  if(dist < 90){
    const maxX = window.innerWidth  - bw  - 16;
    const maxY = window.innerHeight - bh  - 16;
    let nx = Math.random() * maxX;
    let ny = Math.random() * maxY;
    btn.style.left = nx + "px";
    btn.style.top  = ny + "px";
  }
});
 
function launchConfetti(){
  const emojis=["💍","🌹","💖","🌸","✨","🏡","💕","🌷"];
  for(let i=0;i<40;i++){
    setTimeout(()=>{
      const c=document.createElement("div");
      c.className="heart";
      c.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];
      c.style.left=Math.random()*100+"vw";
      c.style.fontSize=(14+Math.random()*14)+"px";
      c.style.animationDuration=(4+Math.random()*4)+"s";
      document.body.appendChild(c);
      setTimeout(()=>c.remove(),8000);
    },i*80);
  }
}
 
/* enter key on password */
document.getElementById("pass").addEventListener("keydown",e=>{ if(e.key==="Enter") unlock(); });
