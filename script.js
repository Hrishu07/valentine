const PASSWORD = "meri@choomu";
 
const pages = [
 
  {
    title: "🏠 Client Brief",
    text: "Client Hrishu reports a restless heart 💓\nCause suspected: One Interior Designer Kanishka and his dangerously charming style 😌"
  },
 
  {
    title: "📋 Portfolio Review",
    photo: true
  },
 
  {
    title: "🛋️ Mood Board Report",
    text: "Mood board shifts every time you walk into the room 💗\nEvery color palette spells only one name… Kanishka 😌"
  },
 
  {
    title: "😏 Designer–Client Interaction",
    text: "Designer smiles.\nClient forgets the brief.\nThe vision deepens.\nDesigner responsible 😏💖"
  },
 
  {
    title: "🌸 Comfort Space",
    text: "Client feels most at home around the Designer 🤍\nHis ideas bring warmth to every room.\nHis presence feels like a perfectly designed space."
  },
 
  {
    title: "🔥 Side Effects (Confidential)",
    text: "Side effects include:\n• Blushing when you look at me\n• Wanting to redesign my world with you\n• Falling harder every single day 😌"
  },
 
  {
    title: "💞 Appreciation Corner",
    text: "Designer is creative.\nDesigner is beautiful.\nDesigner is talented.\nDesigner is my favorite place to rest my heart 💖"
  },
 
  {
    title: "🖼️ Final Design Plan",
    text: "Blueprint: Kanishka ❤️\nDuration: Forever\nWarnings: May cause lifelong attachment 😏"
  },
 
  {
    title: "🌹 The Question",
    final: true
  }
 
];
 
 
let index = 0;
const card = document.getElementById("card");
 
function unlock(){
  if(document.getElementById("pass").value === PASSWORD){
    document.getElementById("lock").style.display="none";
    document.getElementById("main").style.display="flex";
    render();
  } else alert("Access Denied 🚫");
}
 
function render(){
  const page = pages[index];
  card.classList.remove("slide");
  void card.offsetWidth;
  card.classList.add("slide");
 
  if(page.photo){
    card.innerHTML = `
      <h2>📋 Portfolio Review</h2>
      <div class="photos">
        <img src="hrishu.jpg">
        <img src="kanishka.jpg">
      </div>
      <p>
        Symptoms include:<br>
        • Missing you constantly<br>
        • Smiling at phone like a fool<br>
        • Heart racing whenever you exist 💕
      </p>
      <button onclick="next()">Next 💖</button>
    `;
    return;
  }
 
  if(page.final){
    card.innerHTML = `
      <h2>🌹 The Question</h2>
      <p>Mr. Kanishka ❤️ Will you be my Valentine for every lifetime? 💍</p>
      <button onclick="yes()">YES ❤️</button>
      <button class="no" onmouseover="moveNo()">No 🙈</button>
    `;
    return;
  }
 
  card.innerHTML = `
    <h2>${page.title}</h2>
    <p>${page.text}</p>
    <button onclick="next()">Next 💖</button>
  `;
}
 
function next(){ index++; render(); }
 
function yes(){
  card.innerHTML = `
    <h2>💘 PERFECTLY DESIGNED 💘</h2>
    <p>You just designed a heart and claimed it forever 😌❤️<br><br>— Hrishu</p>
  `;
}
 
function moveNo(){
  const btn=document.querySelector(".no");
  btn.style.top=Math.random()*80+"%";
  btn.style.left=Math.random()*80+"%";
}
 
/* HEARTS */
setInterval(()=>{
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML="💗";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),8000);
},400);
 
