const PASSWORD = "drswagata";

const pages = [

  {
    title: "🩺 Patient Admission",
    text: "Patient Hrishu reports chest tightness 💓\nCause suspected: One Doctor Swagata and her dangerously beautiful smile 😌"
  },

  {
    title: "📋 Case History",
    photo: true
  },

  {
    title: "💓 ECG Report",
    text: "ECG spikes every time you walk into the room 💗\nHeart rhythm spells only one name… Swagata 😌"
  },

  {
    title: "😏 Doctor–Patient Interaction",
    text: "Doctor smiles.\nPatient forgets symptoms.\nDiagnosis worsens.\nDoctor responsible 😏💖"
  },

  {
    title: "🌸 Comfort Therapy",
    text: "Patient feels safest around Doctor 🤍\nHer voice slows the heartbeat.\nHer presence feels like home."
  },

  {
    title: "🔥 Side Effects (Confidential)",
    text: "Side effects include:\n• Blushing when you look at me\n• Wanting to hold your hand\n• Falling harder every single day 😌"
  },

  {
    title: "💞 Love Shower",
    text: "Doctor is kind.\nDoctor is beautiful.\nDoctor is smart.\nDoctor is my favorite place to rest my heart 💖"
  },

  {
    title: "💉 Final Prescription",
    text: "Medication: Swagata ❤️\nDosage: Forever\nWarnings: May cause lifelong attachment 😏"
  },

  {
    title: "😌 Quick Question",
    text: "Are you made of copper and tellurium?\nBecause you’re Cu-Te 💖"
  },

  {
    title: "🩺 Doctor’s Check",
    text: "Doctor, is it normal if my heart beats faster when you look at me?\nOr should I schedule more appointments? 😏"
  },

  {
    title: "🧪 Scientific Observation",
    text: "Conclusion:\nYour smile increases my happiness levels beyond safe limits 💓"
  },

  {
    title: "💞 Honest Admission",
    text: "I came here to get cured…\nBut I think I just fell harder for you 😌"
  },

  {
    title: "💭 One Honest Moment",
    text:
      "Before I ask you anything… I want to be honest.\n\n" +
      "This isn’t just about a cute website or a Valentine’s day.\n\n" +
      "I care about you deeply.\n" +
      "I respect you.\n" +
      "And I would never want to rush or pressure your heart.\n\n" +
      "Whatever you feel—your comfort matters to me most 🤍"
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
    document.getElementById("lock").style.display = "none";
    document.getElementById("main").style.display = "flex";
    render();
  } else {
    alert("Access Denied 🚫");
  }
}

function render(){
  const page = pages[index];

  card.classList.remove("slide");
  void card.offsetWidth;
  card.classList.add("slide");

  const navButtons = `
    <div style="margin-top:25px;">
      ${index > 0 ? `<button onclick="prev()">⬅ Previous</button>` : ``}
      ${!page.final ? `<button onclick="next()">Next 💖</button>` : ``}
    </div>
  `;

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
      ${navButtons}
    `;
    return;
  }

  if(page.final){
    card.innerHTML = `
      <h2>🌹 The Question</h2>
      <p>Dr. Swagata ❤️ Will you be my Valentine for every lifetime? 💍</p>
      <div style="margin-top:25px;">
        <button onclick="prev()">⬅ Previous</button>
        <button onclick="yes()">YES ❤️</button>
        <button class="no" onmouseover="moveNo()">No 🙈</button>
      </div>
    `;
    return;
  }

  card.innerHTML = `
    <h2>${page.title}</h2>
    <p>${page.text.replace(/\n/g, "<br>")}</p>
    ${navButtons}
  `;
}

function next(){
  if(index < pages.length - 1){
    index++;
    render();
  }
}

function prev(){
  if(index > 0){
    index--;
    render();
  }
}

function yes(){
  card.innerHTML = `
    <h2>💘 CURED 💘</h2>
    <p>
      You just cured a heart and stole it forever 😌❤️<br><br>
      — Hrishu
    </p>
  `;
}

function moveNo(){
  const btn = document.querySelector(".no");
  if(!btn) return;
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}

/* FLOATING HEARTS */
setInterval(()=>{
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💗";
  h.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),8000);
},400);
