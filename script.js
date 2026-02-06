const PASSWORD = "drswagata";

const pages = [
  {title:"🩺 Patient Admission", text:"Patient Hrishu suffers from a rare heart condition 💓 Caused by falling in love with his doctor 😌"},
  {title:"📋 Case History", photo:true},
  {title:"💓 ECG Report", text:"ECG shows irregular rhythm 💗 Every heartbeat spells S W A G A T A"},
  {title:"🧠 Doctor’s Notes", text:"Patient reacts strongly to doctor’s smile 😏 Touch classified as comfort therapy 🤍"},
  {title:"💉 Prescription", text:"Medication: Swagata ❤️ Dosage: Unlimited affection 💞 Duration: Lifetime"},
  {title:"🌹 The Question", final:true}
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
      <h2>📋 Case History</h2>
      <div class="photos">
        <img src="hrishu.jpg">
        <img src="swagata.jpg">
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
      <p>Dr. Swagata ❤️ Will you be my Valentine for every lifetime? 💍</p>
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
    <h2>💘 CURED 💘</h2>
    <p>You just cured a heart and stole it forever 😌❤️<br><br>— Hrishu</p>
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
