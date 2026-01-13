(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const u of e)if(u.type==="childList")for(const r of u.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const u={};return e.integrity&&(u.integrity=e.integrity),e.referrerPolicy&&(u.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?u.credentials="include":e.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(e){if(e.ep)return;e.ep=!0;const u=c(e);fetch(e.href,u)}})();const S={currentSpace:"center",previousSpace:null,isTransitioning:!1,history:["center"]},De={center:{right:"skills",left:"projects",down:"terminal"},skills:{left:"center"},projects:{right:"center"},terminal:{up:"center"}},ct={ArrowUp:"up",ArrowDown:"down",ArrowLeft:"left",ArrowRight:"right",w:"up",W:"up",s:"down",S:"down",a:"left",A:"left",d:"right",D:"right",k:"up",K:"up",j:"down",J:"down",h:"left",H:"left",l:"right",L:"right"};let ne={},N=null;function ut(){ne={center:document.getElementById("space-center"),skills:document.getElementById("space-skills"),projects:document.getElementById("space-projects"),terminal:document.getElementById("space-terminal")},N=document.getElementById("nav-hints"),dt(),mt(),ht(),_e(),console.log("🧭 Navigation initialized")}function dt(){document.addEventListener("keydown",i=>{const n=document.getElementById("detail-modal");if(n&&n.classList.contains("is-open"))return;if(i.key==="Escape"){S.currentSpace!=="center"&&Ce("center",!0);return}const c=ct[i.key];c&&(i.preventDefault(),G(c))})}function mt(){document.querySelectorAll(".nav-hint").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.direction;n&&G(n)})})}function ht(){let i=0,n=0;const c=50;document.addEventListener("touchstart",l=>{i=l.touches[0].clientX,n=l.touches[0].clientY},{passive:!0}),document.addEventListener("touchend",l=>{const e=l.changedTouches[0].clientX,u=l.changedTouches[0].clientY,r=e-i,d=u-n;Math.abs(r)>Math.abs(d)?Math.abs(r)>c&&(r>0?G("left"):G("right")):Math.abs(d)>c&&(d>0?G("up"):G("down"))},{passive:!0})}function G(i){if(S.isTransitioning)return;const n=De[S.currentSpace]?.[i];n&&Ce(n)}function Ce(i,n=!1){S.isTransitioning||i!==S.currentSpace&&ne[i]&&(S.isTransitioning=!0,S.previousSpace=S.currentSpace,S.currentSpace=i,S.history.push(i),Object.values(ne).forEach(c=>{c.classList.remove("is-active")}),ne[i].classList.add("is-active"),_e(),window.dispatchEvent(new CustomEvent("spaceChange",{detail:{from:S.previousSpace,to:i}})),setTimeout(()=>{S.isTransitioning=!1},500))}function _e(){if(!N)return;N.dataset.space=S.currentSpace;const i=De[S.currentSpace]||{},n={up:N.querySelector(".nav-hint--up"),down:N.querySelector(".nav-hint--down"),left:N.querySelector(".nav-hint--left"),right:N.querySelector(".nav-hint--right")};Object.entries(n).forEach(([c,l])=>{if(l)if(i[c]){l.style.display="flex";const e=l.querySelector(".nav-hint__label");e&&S.currentSpace!=="center"&&(e.textContent="BACK")}else l.style.display="none"}),S.currentSpace==="center"&&Object.entries({up:"ABOUT",right:"ABOUT ME",down:"TERMINAL",left:"PROJECTS"}).forEach(([l,e])=>{const u=n[l]?.querySelector(".nav-hint__label");u&&(u.textContent=e)})}function we(i){G(i)}const p={theme:{accentColor:"#a855f7",accentColorLight:"#7c3aed"},memoji:"/memoji.png",name:"Vanshik Waghela",title:"AI Engineer",location:"Mumbai, India",email:"vanshik.learn@gmail.com",phone:"+91 8356010837",education:{college:"SVKM's Dwarkadas J. Sanghvi College of Engineering",degree:"B.Tech in Computer Science (Data Science)",honors:"Computational Finance",cgpa:"8.825/10",graduation:"July 2026"},links:{github:"https://github.com/vanshikwaghela",linkedin:"https://www.linkedin.com/in/vanshikwaghela/",email:"mailto:vanshik.learn@gmail.com",resume:"/Vanshik Waghela Resume .pdf"},experience:[{company:"AureliaX",location:"Amsterdam, Netherlands",role:"AI Engineer Intern (Remote)",period:"Aug 2025 – Dec 2025",highlights:["Built production-grade agentic data analysis platform using LangChain/LangGraph","Engineered 6 specialized reasoning agents with autonomous tool use","Achieved 60% reduction in data exploration time, 45% improvement in query accuracy"]},{company:"Globestar Edutech",location:"Mumbai, India",role:"Data Engineer Intern",period:"Apr 2025 – Aug 2025",highlights:["Developed scalable web scraping pipelines extracting 3,000+ practice questions","Improved data quality scores from 48% to 95%","Built automated metadata extraction improving dataset consistency by 90%"]}],projects:[{name:"CLARITY",description:"Multimodal spectroscopy framework using contrastive learning for polymer classification",tech:["PyTorch","GANs","Transformers","FTIR/Raman Spectroscopy"],highlight:"98.2% accuracy - Paper accepted at ICWSNUCA 2026 (Springer)",stars:0},{name:"blueVision",description:"YOLOv8-based electrical symbol detection in architectural blueprints",tech:["YOLOv8","OpenCV","Multi-scale Inference","HuggingFace"],highlight:"83% mAP@0.5, 95% precision - Deployed on HuggingFace Spaces",stars:0},{name:"AirAuth",description:"Touchless gesture-controlled interface with face authentication",tech:["MediaPipe","OpenCV","Kalman Filtering","Face Recognition"],highlight:"94% gesture accuracy, sub-200ms latency",stars:0},{name:"Ballzy",description:"Real-time football player tracking & performance analysis",tech:["YOLOv8","OpenCV","Object Tracking","Speed Estimation"],highlight:"Real-time detection with FPS monitoring",stars:0}],skills:{languages:["Python","SQL","Java","C","C++","Git","Docker"],aiml:["PyTorch","TensorFlow","Scikit-Learn","GANs","Contrastive Learning","Transformers"],cv_llm:["OpenCV","YOLOv8/Ultralytics","LangChain","DSpy"],data:["Pandas","NumPy","Tableau","Matplotlib","Plotly"],certifications:["AWS Data Engineering","AWS Cloud Foundations","Advanced Learning Algorithms"]},achievements:['Lead Editor of "Turing Tested" - monthly AI/ML publication with 200+ subscribers',"Best Project Award - AI in Open Source Domain by Databricks (Dec 2024)","Runner-up at Code4AI Hackathon for Generative AI (Nov 2024)","Trinity College London Grade 6 Communication Skills - Distinction","Organized DataHack (1000+ participants) and Xtract events"]};let O=[],M=-1,y=null,j=null,B=null,_=null,q=!1,L={active:!1,stage:0},ie=!1,Le=Date.now();const H={help:{desc:"Show available commands with descriptions",usage:"help [command]"},about:{desc:"Display personal information",usage:"about"},education:{desc:"View academic background",usage:"education"},experience:{desc:"Show work experience",usage:"experience"},projects:{desc:"List all projects",usage:"projects"},skills:{desc:"Display technical skills",usage:"skills"},achievements:{desc:"View awards and recognitions",usage:"achievements"},contact:{desc:"Get contact information",usage:"contact"},resume:{desc:"Download resume PDF",usage:"resume"},neofetch:{desc:"System info with ASCII art",usage:"neofetch"},sysinfo:{desc:"Show browser and system details",usage:"sysinfo"},clear:{desc:"Clear terminal screen",usage:"clear"},theme:{desc:"Toggle dark/light mode",usage:"theme"},hack:{desc:"Start hacking challenge",usage:"hack"},matrix:{desc:"Enter the Matrix",usage:"matrix"},clarity:{desc:"Details about CLARITY project",usage:"clarity"},bluevision:{desc:"Details about blueVision project",usage:"bluevision"},airauth:{desc:"Details about AirAuth project",usage:"airauth"},ballzy:{desc:"Details about Ballzy project",usage:"ballzy"},open:{desc:"Open external links",usage:"open [linkedin|github|email]"},whoami:{desc:"Display current user",usage:"whoami"},pwd:{desc:"Print working directory",usage:"pwd"},ls:{desc:"List directory contents",usage:"ls"},date:{desc:"Show current date and time",usage:"date"},uptime:{desc:"Show session uptime",usage:"uptime"},cowsay:{desc:"ASCII cow with a message",usage:"cowsay [message]"},echo:{desc:"Print text to terminal",usage:"echo [text]"},history:{desc:"Show command history",usage:"history"}};function pt(){if(y=document.getElementById("terminal-input"),j=document.querySelector(".terminal__body"),B=document.querySelector(".terminal__output"),!y){console.log("❌ Terminal input not found");return}ke();const i=y.cloneNode(!0);y.parentNode.replaceChild(i,y),y=i,y.addEventListener("keydown",gt),y.addEventListener("input",ft),window.addEventListener("spaceChange",n=>{n.detail.to==="terminal"&&setTimeout(()=>y.focus(),150)}),j?.addEventListener("click",()=>y.focus()),document.addEventListener("click",n=>{!n.target.closest(".terminal__suggestions")&&!n.target.closest(".terminal__input")&&D()}),console.log("🖥️ Terminal v2.0 initialized")}function ke(){_=document.createElement("div"),_.className="terminal__suggestions-ghost",_.style.display="none";const i=document.querySelector(".terminal__input-line");i&&i.parentNode&&i.parentNode.insertBefore(_,i.nextSibling)}function Ie(i){if(!_||i.length===0){D();return}let n='<div class="ghost-header">Suggestions:</div>';n+='<div class="ghost-list">',i.forEach(c=>{const l=H[c]?.usage||c,e=H[c]?.desc||"";n+=`<div class="ghost-item" data-cmd="${c}">`,n+=`<span class="ghost-cmd">${l}</span>`,n+=`<span class="ghost-desc">- ${e}</span>`,n+="</div>"}),n+="</div>",_.innerHTML=n,_.querySelectorAll(".ghost-item").forEach(c=>{c.addEventListener("click",()=>{y.value=c.dataset.cmd,D(),y.focus()})}),_.style.display="block"}function D(){_&&(_.style.display="none")}function ft(i){const n=y.value.toLowerCase().trim();if(L.active){D();return}if(n.length===0){D();return}const c=Object.keys(H).filter(l=>l.startsWith(n)&&l!==n);c.length>0&&c.length<=6?Ie(c):D()}function gt(i){if(i.stopPropagation(),i.ctrlKey&&i.key==="c"&&q){q=!1;return}if(i.key==="Enter"){i.preventDefault(),D();const n=y.value.trim();if(n&&(O.push(n),M=O.length),L.active){bt(n),y.value="",V();return}Fe(n);const c=Et(n);c!=null&&yt(c),y.value="",V()}i.key==="ArrowUp"&&(i.preventDefault(),D(),M>0&&(M--,y.value=O[M])),i.key==="ArrowDown"&&(i.preventDefault(),D(),M<O.length-1?(M++,y.value=O[M]):(M=O.length,y.value="")),i.key==="Tab"&&(i.preventDefault(),vt()),i.key==="Escape"&&(D(),L.active&&de(),y.blur())}function vt(){const i=y.value.toLowerCase().trim(),n=Object.keys(H).filter(c=>c.startsWith(i));n.length===1?(y.value=n[0],D()):n.length>1&&Ie(n.slice(0,6))}async function yt(i){if(!i)return;const n=document.createElement("div");n.className="terminal__line terminal__line--output";const c=B.querySelector(".terminal__input-line");if(c.parentNode.insertBefore(n,c),i.length>500){n.innerHTML=W(i).replace(/\n/g,"<br>"),V();return}q=!0;const l=i.split("");let e="";for(let u=0;u<l.length&&q;u++){const r=l[u];r===`
`?e+="<br>":e+=W(r),n.innerHTML=e+'<span class="typing-cursor">▌</span>',V(),await Tt(r===" "?5:r===`
`?30:15)}n.innerHTML=W(i).replace(/\n/g,"<br>"),q=!1,V()}function Tt(i){return new Promise(n=>setTimeout(n,i))}function Et(i){const n=i.toLowerCase().trim();if(!n)return null;const c=n.split(" "),l=c[0],e=c.slice(1);if(l==="clear")return Lt(),null;if(l==="hack")return xt(),null;if(l==="matrix")return wt(),null;const u={help:()=>St(e[0]),about:()=>`
┌─────────────────────────────────────────────┐
│  ${p.name.toUpperCase()}
│  ${p.title}
│  
│  📍 ${p.location}
│  📧 ${p.email}
│  🎓 ${p.education.college}
│     ${p.education.degree}
│     CGPA: ${p.education.cgpa}
└─────────────────────────────────────────────┘
        `.trim(),education:()=>`
🎓 EDUCATION
═══════════════════════════════════════

${p.education.college}
${p.education.degree}
Honors: ${p.education.honors}
CGPA: ${p.education.cgpa}
Expected: ${p.education.graduation}
        `.trim(),experience:()=>{let r=`💼 WORK EXPERIENCE
═══════════════════════════════════════

`;return p.experience.forEach(d=>{r+=`${d.company} | ${d.location}
`,r+=`${d.role}
`,r+=`${d.period}
`,d.highlights.forEach(T=>{r+=`  • ${T}
`}),r+=`
`}),r.trim()},projects:()=>{let r=`🚀 PROJECTS
═══════════════════════════════════════

`;return p.projects.forEach(d=>{r+=`[${d.name}]
`,r+=`${d.description}
`,r+=`✨ ${d.highlight}
`,r+=`Tech: ${d.tech.join(", ")}

`}),r.trim()},skills:()=>{let r=`⚡ SKILLS
═══════════════════════════════════════

`;return r+=`Languages & Tools:
  `+p.skills.languages.join(", ")+`

`,r+=`AI & ML:
  `+p.skills.aiml.join(", ")+`

`,r+=`Computer Vision & LLMs:
  `+p.skills.cv_llm.join(", ")+`

`,r+=`Data & Visualization:
  `+p.skills.data.join(", ")+`

`,r+=`Certifications:
  `+p.skills.certifications.join(", "),r},achievements:()=>{let r=`🏆 ACHIEVEMENTS
═══════════════════════════════════════

`;return p.achievements.forEach((d,T)=>{r+=`${T+1}. ${d}
`}),r.trim()},contact:()=>`
📬 CONTACT
═══════════════════════════════════════

Email:    ${p.email}
Phone:    ${p.phone}
LinkedIn: ${p.links.linkedin}
GitHub:   ${p.links.github}

Run 'open linkedin' or 'open github' to visit
        `.trim(),resume:()=>(window.open(p.links.resume,"_blank"),"📄 Opening resume in new tab..."),neofetch:()=>`
       ██╗   ██╗██╗    ██╗
       ██║   ██║██║    ██║
       ██║   ██║██║ █╗ ██║       ${p.name}
       ╚██╗ ██╔╝██║███╗██║       ──────────────────
        ╚████╔╝ ╚███╔███╔╝       Role: ${p.title}
         ╚═══╝   ╚══╝╚══╝        Location: ${p.location}
                                 Education: ${p.education.college.split(",")[0]}
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄         CGPA: ${p.education.cgpa}
  ██████████████████████         
  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀         Prev: AI Engineer @ AureliaX
                                 Stack: LangChain, PyTorch, YOLOv8
  Shell: VanshikTerm v2.0        
  Theme: ${document.body.classList.contains("theme-light")?"Light":"Dark"} Mode
        `.trim(),sysinfo:()=>{const r=navigator.userAgent,d=r.includes("Chrome")?"Chrome":r.includes("Firefox")?"Firefox":r.includes("Safari")?"Safari":"Unknown",T=r.includes("Mac")?"macOS":r.includes("Windows")?"Windows":r.includes("Linux")?"Linux":"Unknown",Y=Ae(Date.now()-Le);return`
🖥️ SYSTEM INFORMATION
═══════════════════════════════════════

Browser:     ${d}
Platform:    ${T}
Resolution:  ${window.screen.width}x${window.screen.height}
Viewport:    ${window.innerWidth}x${window.innerHeight}
Theme:       ${document.body.classList.contains("theme-light")?"Light":"Dark"}
Shell:       VanshikTerm v2.0
Session:     ${Y}
Language:    ${navigator.language}
Cookies:     ${navigator.cookieEnabled?"Enabled":"Disabled"}
            `.trim()},theme:()=>{document.body.classList.toggle("theme-light");const r=document.body.classList.contains("theme-light")?"Light":"Dark";return localStorage.setItem("theme",r.toLowerCase()),`Theme switched to ${r} mode`},clarity:()=>`
🔬 CLARITY
══════════════════════════════════════════════

Contrastive Learning for Analysis and Representation 
of Infrared and Transmission Spectroscopy

A multimodal framework that unifies FTIR and Raman 
spectroscopy data using contrastive learning.

HIGHLIGHTS:
• 98.2% classification accuracy
• KLT-enhanced attention mechanism for interpretability
• Synthetic spectra generation using conditional GANs
• Research paper accepted at ICWSNUCA 2026 (Springer)

Tech: PyTorch, GANs, Transformers, FTIR/Raman Spectroscopy
        `.trim(),bluevision:()=>`
📐 blueVision
══════════════════════════════════════════════

Electrical Symbol Detection in Architectural Blueprints

YOLOv8n-based system automating component detection
in construction blueprints.

HIGHLIGHTS:
• 83% mAP@0.5, 95% precision
• Custom tiling with 30-50% overlap
• Multi-scale inference (640px, 960px, 1280px)
• Deployed on HuggingFace Spaces

Tech: YOLOv8, OpenCV, Multi-scale Inference, HuggingFace
        `.trim(),airauth:()=>`
✋ AirAuth
══════════════════════════════════════════════

Touchless Gesture-Controlled Interface 
with Face Authentication

HIGHLIGHTS:
• 94% gesture recognition accuracy (7 gesture types)
• 98% accuracy on precision gestures (fist, victory)
• Sub-200ms response latency (32ms mean)
• Multi-user biometric enrollment

Tech: MediaPipe, OpenCV, Kalman Filtering, Face Recognition
        `.trim(),ballzy:()=>`
⚽ Ballzy
══════════════════════════════════════════════

Real-Time Football Player Tracking & Analysis

YOLOv8-based system for player detection, tracking,
speed estimation, and motion-trail visualization.

HIGHLIGHTS:
• Real-time processing with FPS monitoring
• Speed estimation and motion trails
• Detection confidence metrics
• Multi-output video pipelines

Tech: YOLOv8, OpenCV, Object Tracking, Speed Estimation
        `.trim(),open:()=>{const r=e[0]?.toLowerCase();return r==="linkedin"?(window.open(p.links.linkedin,"_blank"),"Opening LinkedIn..."):r==="github"?(window.open(p.links.github,"_blank"),"Opening GitHub..."):r==="email"?(window.open(p.links.email,"_blank"),"Opening email client..."):"Usage: open [linkedin|github|email]"},whoami:()=>"guest@vanshik.dev",pwd:()=>"/home/vanshik/portfolio",ls:()=>"about.txt  projects/  skills.json  resume.pdf  achievements.md  .secret/",date:()=>new Date().toLocaleString(),uptime:()=>`Session uptime: ${Ae(Date.now()-Le)}`,history:()=>O.length===0?"No commands in history":O.map((r,d)=>`  ${d+1}  ${r}`).join(`
`),echo:()=>e.join(" ")||"",cowsay:()=>{const r=e.join(" ")||`${p.name} says hi!`;return`
 ${"_".repeat(r.length+2)}
< ${r} >
 ${"-".repeat(r.length+2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
            `.trim()},sudo:()=>"🔒 Nice try! But guests don't have sudo access.",rm:()=>"💥 Whoa there! This is a read-only filesystem.",cat:()=>'Try: cat about.txt → use the "about" command instead',hello:()=>'Hey there! 👋 Type "help" to see what I can do.',hi:()=>'Hello! 👋 Type "help" to get started.'};return u[l]?typeof u[l]=="function"?u[l]():u[l]:`Command not found: ${i}
Type 'help' for available commands.`}function St(i){if(i&&H[i]){const l=H[i];return`
${i.toUpperCase()}
Usage: ${l.usage}
${l.desc}
        `.trim()}let n=`
Available commands:
═══════════════════════════════════════

`;const c={Info:["about","education","experience","projects","skills","achievements","contact"],System:["help","clear","theme","sysinfo","neofetch","uptime","history"],Fun:["hack","matrix","cowsay"],Projects:["clarity","bluevision","airauth","ballzy"],Navigation:["open","resume"]};for(const[l,e]of Object.entries(c))n+=`${l}:
`,e.forEach(u=>{const r=H[u]?.desc||"";n+=`  ${u.padEnd(14)} ${r}
`}),n+=`
`;return n+="Pro tip: Press Tab for autocomplete, type partial commands for suggestions",n.trim()}const X=[{prompt:"[STAGE 1/3] Network Reconnaissance",question:`Scanning ports... Found open service on 31337/tcp
What's the name of port 31337? (hint: elite hackers)`,answer:"elite",progress:"████░░░░░░ 33%"},{prompt:"[STAGE 2/3] Decrypt the Message",question:`Intercepted encoded message: "WDQVKLN"
It's a Caesar cipher with shift=3. What does it say?`,answer:"vanshik",progress:"███████░░░ 67%"},{prompt:"[STAGE 3/3] Final Access",question:`Access code required.
Hint: What framework combines LLMs with agents? (Lang____)`,answer:"langchain",progress:"██████████ 100%"}];function xt(){L={active:!0,stage:0};const i=`
╔══════════════════════════════════════════════════════╗
║  🔓 PRIVILEGE ESCALATION CHALLENGE                   ║
║                                                      ║
║  Objective: Gain root access to vanshik.dev         ║
║  Stages: 3                                           ║
║  Type 'exit' to abort mission                        ║
╚══════════════════════════════════════════════════════╝

Initializing exploit framework...
[▓▓▓▓▓▓▓▓▓▓] Loading modules...

${X[0].prompt}
${X[0].progress}

${X[0].question}
    `.trim();U(i),Pe()}function bt(i){const n=X[L.stage],c=i.toLowerCase().trim();if(Fe(i),c==="exit"||c==="quit"){de();return}if(c==="hint"){U("💡 "+n.question.split("hint:")[1]?.trim()||"No additional hints available.");return}if(c===n.answer)if(L.stage++,L.stage>=X.length){const l=`
✓ ACCESS GRANTED

╔══════════════════════════════════════════════════════╗
║  🎉 CONGRATULATIONS, HACKER!                         ║
║                                                      ║
║  You've successfully gained root access.             ║
║  Flag: VW{y0u_4r3_4_r34l_h4ck3r}                    ║
║                                                      ║
║  Achievement Unlocked: Terminal Master 🏆            ║
╚══════════════════════════════════════════════════════╝
            `.trim();U(l),de()}else{const l=X[L.stage],e=`
✓ Stage ${L.stage} complete!

${l.prompt}
${l.progress}

${l.question}
            `.trim();U(e),Pe()}else U('✗ Incorrect. Try again or type "hint" for help.')}function Pe(){const i=document.querySelector(".prompt-user"),n=document.querySelector(".prompt-host");i&&(i.textContent="root"),n&&(n.textContent="exploit")}function de(){L={active:!1,stage:0},U("Mission aborted. Returning to normal shell...");const i=document.querySelector(".prompt-user"),n=document.querySelector(".prompt-host");i&&(i.textContent="guest"),n&&(n.textContent="vanshik.dev")}function wt(){if(ie)return;ie=!0;const i=document.createElement("canvas");i.id="matrix-canvas",i.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        background: #000;
    `,document.body.appendChild(i);const n=i.getContext("2d");i.width=window.innerWidth,i.height=window.innerHeight;const c="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=14,e=i.width/l,u=Array(Math.floor(e)).fill(1);function r(){if(!ie){i.remove();return}n.fillStyle="rgba(0, 0, 0, 0.05)",n.fillRect(0,0,i.width,i.height),n.fillStyle="#0F0",n.font=l+"px monospace";for(let T=0;T<u.length;T++){const Y=c[Math.floor(Math.random()*c.length)];n.fillText(Y,T*l,u[T]*l),u[T]*l>i.height&&Math.random()>.975&&(u[T]=0),u[T]++}requestAnimationFrame(r)}r();const d=T=>{ie=!1,document.removeEventListener("keydown",d),U("Exited the Matrix. Welcome back to reality.")};setTimeout(()=>{document.addEventListener("keydown",d)},100),U("Entering the Matrix... Press any key to exit.")}function Lt(){const i=B.querySelector(".terminal__input-line");B.innerHTML="";const n=document.createElement("div");n.className="terminal__line terminal__line--accent",n.textContent="Terminal cleared.",B.appendChild(n),i&&B.appendChild(i),ke()}function Fe(i){const n=document.createElement("div");n.className="terminal__line";const c=L.active?"root":"guest",l=L.active?"exploit":"vanshik.dev";n.innerHTML=`<span class="prompt-user">${c}</span><span class="prompt-at">@</span><span class="prompt-host">${l}</span><span class="prompt-path">~</span><span class="prompt-symbol">$</span> ${W(i)}`;const e=B.querySelector(".terminal__input-line");e.parentNode.insertBefore(n,e)}function U(i){if(!i)return;const n=document.createElement("div");n.className="terminal__line terminal__line--output",n.innerHTML=W(i).replace(/\n/g,"<br>");const c=B.querySelector(".terminal__input-line");c.parentNode.insertBefore(n,c),V()}function V(){j&&(j.scrollTop=j.scrollHeight)}function W(i){const n=document.createElement("div");return n.textContent=i,n.innerHTML}function Ae(i){const n=Math.floor(i/1e3),c=Math.floor(n/60),l=Math.floor(c/60);return l>0?`${l}h ${c%60}m ${n%60}s`:c>0?`${c}m ${n%60}s`:`${n}s`}function At(){const i=document.getElementById("fluid");if(!i)return;Te();let n={SIM_RESOLUTION:128,DYE_RESOLUTION:1440,DENSITY_DISSIPATION:3.5,VELOCITY_DISSIPATION:2,PRESSURE:.1,PRESSURE_ITERATIONS:20,CURL:3,SPLAT_RADIUS:.2,SPLAT_FORCE:6e3,SHADING:!0,COLOR_UPDATE_SPEED:10};function c(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}const l=[];l.push(new c);const{gl:e,ext:u}=r(i);if(!e)return;u.supportLinearFiltering||(n.DYE_RESOLUTION=256,n.SHADING=!1);function r(t){const o={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let a=t.getContext("webgl2",o);const s=!!a;if(s||(a=t.getContext("webgl",o)||t.getContext("experimental-webgl",o)),!a)return{gl:null,ext:{}};let m,h;s?(a.getExtension("EXT_color_buffer_float"),h=a.getExtension("OES_texture_float_linear")):(m=a.getExtension("OES_texture_half_float"),h=a.getExtension("OES_texture_half_float_linear")),a.clearColor(0,0,0,1);const f=s?a.HALF_FLOAT:m?.HALF_FLOAT_OES;let E,v,F;return s?(E=d(a,a.RGBA16F,a.RGBA,f),v=d(a,a.RG16F,a.RG,f),F=d(a,a.R16F,a.RED,f)):(E=d(a,a.RGBA,a.RGBA,f),v=d(a,a.RGBA,a.RGBA,f),F=d(a,a.RGBA,a.RGBA,f)),{gl:a,ext:{formatRGBA:E,formatRG:v,formatR:F,halfFloatTexType:f,supportLinearFiltering:h}}}function d(t,o,a,s){if(!T(t,o,a,s))switch(o){case t.R16F:return d(t,t.RG16F,t.RG,s);case t.RG16F:return d(t,t.RGBA16F,t.RGBA,s);default:return null}return{internalFormat:o,format:a}}function T(t,o,a,s){const m=t.createTexture();t.bindTexture(t.TEXTURE_2D,m),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.NEAREST),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,o,4,4,0,a,s,null);const h=t.createFramebuffer();return t.bindFramebuffer(t.FRAMEBUFFER,h),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,m,0),t.checkFramebufferStatus(t.FRAMEBUFFER)===t.FRAMEBUFFER_COMPLETE}class Y{constructor(o,a){this.vertexShader=o,this.fragmentShaderSource=a,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(o){let a=0;for(let m=0;m<o.length;m++)a+=lt(o[m]);let s=this.programs[a];if(s==null){let m=A(e.FRAGMENT_SHADER,this.fragmentShaderSource,o);s=me(this.vertexShader,m),this.programs[a]=s}s!==this.activeProgram&&(this.uniforms=he(s),this.activeProgram=s)}bind(){e.useProgram(this.activeProgram)}}class k{constructor(o,a){this.uniforms={},this.program=me(o,a),this.uniforms=he(this.program)}bind(){e.useProgram(this.program)}}function me(t,o){let a=e.createProgram();return e.attachShader(a,t),e.attachShader(a,o),e.linkProgram(a),e.getProgramParameter(a,e.LINK_STATUS)||console.trace(e.getProgramInfoLog(a)),a}function he(t){let o=[],a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<a;s++){let m=e.getActiveUniform(t,s).name;o[m]=e.getUniformLocation(t,m)}return o}function A(t,o,a){o=Me(o,a);const s=e.createShader(t);return e.shaderSource(s,o),e.compileShader(s),e.getShaderParameter(s,e.COMPILE_STATUS)||console.trace(e.getShaderInfoLog(s)),s}function Me(t,o){if(o==null)return t;let a="";return o.forEach(s=>{a+="#define "+s+`
`}),a+t}const C=A(e.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
      vUv = aPosition * 0.5 + 0.5;
      vL = vUv - vec2(texelSize.x, 0.0);
      vR = vUv + vec2(texelSize.x, 0.0);
      vT = vUv + vec2(0.0, texelSize.y);
      vB = vUv - vec2(0.0, texelSize.y);
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `),Oe=A(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () { gl_FragColor = texture2D(uTexture, vUv); }
  `),Be=A(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () { gl_FragColor = value * texture2D(uTexture, vUv); }
  `),Ue=`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
      color = max(color, vec3(0));
      return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
      vec3 c = texture2D(uTexture, vUv).rgb;
      #ifdef SHADING
      vec3 lc = texture2D(uTexture, vL).rgb;
      vec3 rc = texture2D(uTexture, vR).rgb;
      vec3 tc = texture2D(uTexture, vT).rgb;
      vec3 bc = texture2D(uTexture, vB).rgb;
      float dx = length(rc) - length(lc);
      float dy = length(tc) - length(bc);
      vec3 n = normalize(vec3(dx, dy, length(texelSize)));
      vec3 l = vec3(0.0, 0.0, 1.0);
      float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
      c *= diffuse;
      #endif
      float a = max(c.r, max(c.g, c.b));
      gl_FragColor = vec4(c, a);
    }
  `,Ne=A(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
      vec2 p = vUv - point.xy;
      p.x *= aspectRatio;
      vec3 splat = exp(-dot(p, p) / radius) * color;
      vec3 base = texture2D(uTarget, vUv).xyz;
      gl_FragColor = vec4(base + splat, 1.0);
    }
  `),Ge=A(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
      vec2 st = uv / tsize - 0.5;
      vec2 iuv = floor(st);
      vec2 fuv = fract(st);
      vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
      vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
      vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
      vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
      return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
      #ifdef MANUAL_FILTERING
      vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
      vec4 result = bilerp(uSource, coord, dyeTexelSize);
      #else
      vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
      vec4 result = texture2D(uSource, coord);
      #endif
      float decay = 1.0 + dissipation * dt;
      gl_FragColor = result / decay;
    }
  `,u.supportLinearFiltering?null:["MANUAL_FILTERING"]),He=A(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).x;
      float R = texture2D(uVelocity, vR).x;
      float T = texture2D(uVelocity, vT).y;
      float B = texture2D(uVelocity, vB).y;
      vec2 C = texture2D(uVelocity, vUv).xy;
      if (vL.x < 0.0) { L = -C.x; }
      if (vR.x > 1.0) { R = -C.x; }
      if (vT.y > 1.0) { T = -C.y; }
      if (vB.y < 0.0) { B = -C.y; }
      float div = 0.5 * (R - L + T - B);
      gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
  `),$e=A(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).y;
      float R = texture2D(uVelocity, vR).y;
      float T = texture2D(uVelocity, vT).x;
      float B = texture2D(uVelocity, vB).x;
      float vorticity = R - L - T + B;
      gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
  `),ze=A(e.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
      float L = texture2D(uCurl, vL).x;
      float R = texture2D(uCurl, vR).x;
      float T = texture2D(uCurl, vT).x;
      float B = texture2D(uCurl, vB).x;
      float C = texture2D(uCurl, vUv).x;
      vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
      force /= length(force) + 0.0001;
      force *= curl * C;
      force.y *= -1.0;
      vec2 velocity = texture2D(uVelocity, vUv).xy;
      velocity += force * dt;
      velocity = min(max(velocity, -1000.0), 1000.0);
      gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `),Xe=A(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      float C = texture2D(uPressure, vUv).x;
      float divergence = texture2D(uDivergence, vUv).x;
      float pressure = (L + R + B + T - divergence) * 0.25;
      gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
  `),Ve=A(e.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      vec2 velocity = texture2D(uVelocity, vUv).xy;
      velocity.xy -= vec2(R - L, T - B);
      gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `),b=(e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(0),(t,o=!1)=>{t==null?(e.viewport(0,0,e.drawingBufferWidth,e.drawingBufferHeight),e.bindFramebuffer(e.FRAMEBUFFER,null)):(e.viewport(0,0,t.width,t.height),e.bindFramebuffer(e.FRAMEBUFFER,t.fbo)),o&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT)),e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0)});let x,g,oe,ae,I;const pe=new k(C,Oe),re=new k(C,Be),P=new k(C,Ne),R=new k(C,Ge),se=new k(C,He),le=new k(C,$e),$=new k(C,ze),K=new k(C,Xe),J=new k(C,Ve),Q=new Y(C,Ue);function fe(){let t=xe(n.SIM_RESOLUTION),o=xe(n.DYE_RESOLUTION);const a=u.halfFloatTexType,s=u.formatRGBA,m=u.formatRG,h=u.formatR,f=u.supportLinearFiltering?e.LINEAR:e.NEAREST;e.disable(e.BLEND),x==null?x=ce(o.width,o.height,s.internalFormat,s.format,a,f):x=ge(x,o.width,o.height,s.internalFormat,s.format,a,f),g==null?g=ce(t.width,t.height,m.internalFormat,m.format,a,f):g=ge(g,t.width,t.height,m.internalFormat,m.format,a,f),oe=z(t.width,t.height,h.internalFormat,h.format,a,e.NEAREST),ae=z(t.width,t.height,h.internalFormat,h.format,a,e.NEAREST),I=ce(t.width,t.height,h.internalFormat,h.format,a,e.NEAREST)}function z(t,o,a,s,m,h){e.activeTexture(e.TEXTURE0);let f=e.createTexture();e.bindTexture(e.TEXTURE_2D,f),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,a,t,o,0,s,m,null);let E=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,E),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,f,0),e.viewport(0,0,t,o),e.clear(e.COLOR_BUFFER_BIT),{texture:f,fbo:E,width:t,height:o,texelSizeX:1/t,texelSizeY:1/o,attach(v){return e.activeTexture(e.TEXTURE0+v),e.bindTexture(e.TEXTURE_2D,f),v}}}function ce(t,o,a,s,m,h){let f=z(t,o,a,s,m,h),E=z(t,o,a,s,m,h);return{width:t,height:o,texelSizeX:f.texelSizeX,texelSizeY:f.texelSizeY,get read(){return f},set read(v){f=v},get write(){return E},set write(v){E=v},swap(){let v=f;f=E,E=v}}}function Ye(t,o,a,s,m,h,f){let E=z(o,a,s,m,h,f);return pe.bind(),e.uniform1i(pe.uniforms.uTexture,t.attach(0)),b(E),E}function ge(t,o,a,s,m,h,f){return t.width===o&&t.height===a||(t.read=Ye(t.read,o,a,s,m,h,f),t.write=z(o,a,s,m,h,f),t.width=o,t.height=a,t.texelSizeX=1/o,t.texelSizeY=1/a),t}function je(){let t=[];n.SHADING&&t.push("SHADING"),Q.setKeywords(t)}je(),fe();let ve=Date.now(),Z=0;function ye(){const t=qe();Te()&&fe(),We(t),Ke(),Je(t),Qe(null),requestAnimationFrame(ye)}function qe(){let t=Date.now(),o=(t-ve)/1e3;return o=Math.min(o,.016666),ve=t,o}function Te(){let t=w(i.clientWidth),o=w(i.clientHeight);return i.width!==t||i.height!==o?(i.width=t,i.height=o,!0):!1}function We(t){Z+=t*n.COLOR_UPDATE_SPEED,Z>=1&&(Z=st(Z,0,1),l.forEach(o=>{o.color=ee()}))}function Ke(){l.forEach(t=>{t.moved&&(t.moved=!1,et(t))})}function Je(t){e.disable(e.BLEND),le.bind(),e.uniform2f(le.uniforms.texelSize,g.texelSizeX,g.texelSizeY),e.uniform1i(le.uniforms.uVelocity,g.read.attach(0)),b(ae),$.bind(),e.uniform2f($.uniforms.texelSize,g.texelSizeX,g.texelSizeY),e.uniform1i($.uniforms.uVelocity,g.read.attach(0)),e.uniform1i($.uniforms.uCurl,ae.attach(1)),e.uniform1f($.uniforms.curl,n.CURL),e.uniform1f($.uniforms.dt,t),b(g.write),g.swap(),se.bind(),e.uniform2f(se.uniforms.texelSize,g.texelSizeX,g.texelSizeY),e.uniform1i(se.uniforms.uVelocity,g.read.attach(0)),b(oe),re.bind(),e.uniform1i(re.uniforms.uTexture,I.read.attach(0)),e.uniform1f(re.uniforms.value,n.PRESSURE),b(I.write),I.swap(),K.bind(),e.uniform2f(K.uniforms.texelSize,g.texelSizeX,g.texelSizeY),e.uniform1i(K.uniforms.uDivergence,oe.attach(0));for(let a=0;a<n.PRESSURE_ITERATIONS;a++)e.uniform1i(K.uniforms.uPressure,I.read.attach(1)),b(I.write),I.swap();J.bind(),e.uniform2f(J.uniforms.texelSize,g.texelSizeX,g.texelSizeY),e.uniform1i(J.uniforms.uPressure,I.read.attach(0)),e.uniform1i(J.uniforms.uVelocity,g.read.attach(1)),b(g.write),g.swap(),R.bind(),e.uniform2f(R.uniforms.texelSize,g.texelSizeX,g.texelSizeY),u.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,g.texelSizeX,g.texelSizeY);let o=g.read.attach(0);e.uniform1i(R.uniforms.uVelocity,o),e.uniform1i(R.uniforms.uSource,o),e.uniform1f(R.uniforms.dt,t),e.uniform1f(R.uniforms.dissipation,n.VELOCITY_DISSIPATION),b(g.write),g.swap(),u.supportLinearFiltering||e.uniform2f(R.uniforms.dyeTexelSize,x.texelSizeX,x.texelSizeY),e.uniform1i(R.uniforms.uVelocity,g.read.attach(0)),e.uniform1i(R.uniforms.uSource,x.read.attach(1)),e.uniform1f(R.uniforms.dissipation,n.DENSITY_DISSIPATION),b(x.write),x.swap()}function Qe(t){e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA),e.enable(e.BLEND),Ze(t)}function Ze(t){let o=e.drawingBufferWidth,a=e.drawingBufferHeight;Q.bind(),n.SHADING&&e.uniform2f(Q.uniforms.texelSize,1/o,1/a),e.uniform1i(Q.uniforms.uTexture,x.read.attach(0)),b(t)}function et(t){let o=t.deltaX*n.SPLAT_FORCE,a=t.deltaY*n.SPLAT_FORCE;Ee(t.texcoordX,t.texcoordY,o,a,t.color)}function tt(t){const o=ee();o.r*=10,o.g*=10,o.b*=10;let a=10*(Math.random()-.5),s=30*(Math.random()-.5);Ee(t.texcoordX,t.texcoordY,a,s,o)}function Ee(t,o,a,s,m){P.bind(),e.uniform1i(P.uniforms.uTarget,g.read.attach(0)),e.uniform1f(P.uniforms.aspectRatio,i.width/i.height),e.uniform2f(P.uniforms.point,t,o),e.uniform3f(P.uniforms.color,a,s,0),e.uniform1f(P.uniforms.radius,it(n.SPLAT_RADIUS/100)),b(g.write),g.swap(),e.uniform1i(P.uniforms.uTarget,x.read.attach(0)),e.uniform3f(P.uniforms.color,m.r,m.g,m.b),b(x.write),x.swap()}function it(t){let o=i.width/i.height;return o>1&&(t*=o),t}window.addEventListener("mousedown",t=>{let o=l[0],a=w(t.clientX),s=w(t.clientY);Se(o,-1,a,s),tt(o)}),document.body.addEventListener("mousemove",function t(o){let a=l[0],s=w(o.clientX),m=w(o.clientY),h=ee();ye(),ue(a,s,m,h),document.body.removeEventListener("mousemove",t)}),window.addEventListener("mousemove",t=>{let o=l[0],a=w(t.clientX),s=w(t.clientY);ue(o,a,s,o.color)}),window.addEventListener("touchstart",t=>{const o=t.targetTouches;let a=l[0];for(let s=0;s<o.length;s++){let m=w(o[s].clientX),h=w(o[s].clientY);Se(a,o[s].identifier,m,h)}}),window.addEventListener("touchmove",t=>{const o=t.targetTouches;let a=l[0];for(let s=0;s<o.length;s++){let m=w(o[s].clientX),h=w(o[s].clientY);ue(a,m,h,a.color)}},!1),window.addEventListener("touchend",t=>{const o=t.changedTouches;let a=l[0];for(let s=0;s<o.length;s++)nt(a)});function Se(t,o,a,s){t.id=o,t.down=!0,t.moved=!1,t.texcoordX=a/i.width,t.texcoordY=1-s/i.height,t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.deltaX=0,t.deltaY=0,t.color=ee()}function ue(t,o,a,s){t.prevTexcoordX=t.texcoordX,t.prevTexcoordY=t.texcoordY,t.texcoordX=o/i.width,t.texcoordY=1-a/i.height,t.deltaX=ot(t.texcoordX-t.prevTexcoordX),t.deltaY=at(t.texcoordY-t.prevTexcoordY),t.moved=Math.abs(t.deltaX)>0||Math.abs(t.deltaY)>0,t.color=s}function nt(t){t.down=!1}function ot(t){let o=i.width/i.height;return o<1&&(t*=o),t}function at(t){let o=i.width/i.height;return o>1&&(t/=o),t}function ee(){const t=window.themeColors;if(t&&t.rgb){const s=t.rgb,m=.25,h=.15,f=Math.max(s.r/255*m,.05)*(.9+Math.random()*h),E=Math.max(s.g/255*m,.05)*(.9+Math.random()*h),v=Math.max(s.b/255*m,.05)*(.9+Math.random()*h);return{r:f,g:E,b:v}}const o=.5+Math.random()*.1;let a=rt(o,.8,1);return a.r*=.2,a.g*=.2,a.b*=.2,a}function rt(t,o,a){let s,m,h,f,E,v,F,te;switch(f=Math.floor(t*6),E=t*6-f,v=a*(1-o),F=a*(1-E*o),te=a*(1-(1-E)*o),f%6){case 0:s=a,m=te,h=v;break;case 1:s=F,m=a,h=v;break;case 2:s=v,m=a,h=te;break;case 3:s=v,m=F,h=a;break;case 4:s=te,m=v,h=a;break;case 5:s=a,m=v,h=F;break}return{r:s,g:m,b:h}}function st(t,o,a){const s=a-o;return(t-o)%s+o}function xe(t){let o=e.drawingBufferWidth/e.drawingBufferHeight;o<1&&(o=1/o);const a=Math.round(t),s=Math.round(t*o);return e.drawingBufferWidth>e.drawingBufferHeight?{width:s,height:a}:{width:a,height:s}}function w(t){const o=window.devicePixelRatio||1;return Math.floor(t*o)}function lt(t){if(t.length===0)return 0;let o=0;for(let a=0;a<t.length;a++)o=(o<<5)-o+t.charCodeAt(a),o|=0;return o}let be=!0;window.addEventListener("spaceChange",t=>{be=t.detail.to==="center",be?(i.style.opacity="1",i.style.pointerEvents="auto"):(i.style.opacity="0",i.style.pointerEvents="none")}),i.style.transition="opacity 0.3s ease",console.log("🌊 Fluid cursor initialized (landing page only)")}document.addEventListener("DOMContentLoaded",async()=>{console.log("🚀 Initializing Vanshik Grid Portfolio"),await Ft(),Rt(),Dt(),ut(),kt(),It(),pt(),At(),Ct(),_t(),Pt(),console.log("✅ All systems initialized")});function Rt(){const{accentColor:i,accentColorLight:n}=p.theme,c=u=>{const r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(u);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null},l=c(i),e=c(n);document.documentElement.style.setProperty("--accent-primary",i),document.documentElement.style.setProperty("--accent-glow",`rgba(${l.r}, ${l.g}, ${l.b}, 0.2)`),document.documentElement.style.setProperty("--accent-hover",i),window.themeColors={accentColor:i,accentColorLight:n,rgb:l,rgbLight:e},console.log("🎨 Theme colors applied from config:",i)}function Dt(){const i=document.getElementById("memoji-container");i&&p.memoji&&(i.innerHTML=`<img src="${p.memoji}" alt="${p.name}" class="center__memoji-img">`)}function Ct(){document.querySelectorAll(".tier-card[data-nav]").forEach(i=>{i.addEventListener("click",()=>{const n=i.dataset.nav;if(n==="terminal")we("down");else if(n==="skills")we("right");else if(n==="resume"){const c=document.createElement("a");c.href="/Vanshik Waghela Resume .pdf",c.download="Vanshik_Waghela_Resume.pdf",c.click()}})})}function _t(){const i=document.getElementById("detail-modal"),n=document.getElementById("detail-content"),c=i?.querySelector(".detail-modal__overlay"),l=i?.querySelector(".detail-modal__close");if(!i||!n)return;const e={experience:{title:"Experience",content:`
        <div class="detail-section">
          <h4>AureliaX, Amsterdam, Netherlands</h4>
          <p class="detail-role">AI Engineer Intern (Remote) • Aug 2025 – Dec 2025</p>
          <ul>
            <li>Built production-grade agentic data analysis platform using LangChain/LangGraph</li>
            <li>Engineered 6 specialized reasoning agents with autonomous tool use</li>
            <li>60% reduction in data exploration time, 45% improvement in query accuracy</li>
            <li>Integrated DuckDB with custom token-efficient serialization (33% memory reduction)</li>
          </ul>
        </div>
        <div class="detail-section">
          <h4>Globestar Edutech, Mumbai, India</h4>
          <p class="detail-role">Data Engineer Intern • Apr 2025 – Aug 2025</p>
          <ul>
            <li>Developed scalable Python web scraping pipelines extracting 3,000+ questions</li>
            <li>Improved data quality scores from 48% to 95%</li>
            <li>Built automated metadata extraction improving dataset consistency by 90%</li>
          </ul>
        </div>
      `},education:{title:"Education",content:`
        <div class="detail-section">
          <h4>SVKM's Dwarkadas J. Sanghvi College of Engineering</h4>
          <p class="detail-role">Mumbai, Maharashtra • Expected: May 2026</p>
          <ul>
            <li>B.Tech in Computer Science and Engineering (Data Science)</li>
            <li>Honors in Computational Finance</li>
            <li>CGPA: 8.825/10 (6 Semesters)</li>
          </ul>
        </div>
      `},achievements:{title:"Achievements",content:`
        <ul class="detail-list">
          <li>Research paper accepted at ICWSNUCA 2026 (Springer Proceedings)</li>
          <li>Best Project Award for AI in Open Source Domain by Databricks (Dec 2024)</li>
          <li>Second runner-up at Code4AI Hackathon for Generative AI (Nov 2024)</li>
          <li>Trinity College London Grade 6 Communication Skills - Distinction</li>
          <li>Lead Editor of "Turing Tested" newsletter with 200+ subscribers</li>
          <li>Organized DataHack (1000+ participants) and Xtract events</li>
        </ul>
      `},skills:{title:"Skills",content:`
        <div class="detail-grid">
          <div class="detail-skill-group">
            <h4>Languages & Tools</h4>
            <p>Python, SQL, Java, C, C++, Git, Docker</p>
          </div>
          <div class="detail-skill-group">
            <h4>AI & ML</h4>
            <p>PyTorch, TensorFlow, Scikit-Learn, GANs, Contrastive Learning, Transformers</p>
          </div>
          <div class="detail-skill-group">
            <h4>Computer Vision & LLMs</h4>
            <p>OpenCV, YOLOv8/Ultralytics, LangChain, DSpy</p>
          </div>
          <div class="detail-skill-group">
            <h4>Data & Visualization</h4>
            <p>Pandas, NumPy, Tableau, Matplotlib, Plotly</p>
          </div>
        </div>
      `},community:{title:"Community",content:`
        <ul class="detail-list">
          <li>Lead Editor of "Turing Tested" - monthly AI/ML publication with 200+ subscribers</li>
          <li>Member of "The Barabari Collective" - upskilling students for Tech & Design</li>
          <li>Technical mentor at 3+ college hackathons, guiding 25+ teams</li>
          <li>Organized DataHack (1000+ participants) and Xtract events at DJ Sanghvi</li>
        </ul>
      `},certifications:{title:"Certifications",content:`
        <ul class="detail-list">
          <li>AWS Academy Data Engineering</li>
          <li>AWS Academy Cloud Foundations</li>
          <li>Coursera Advanced Learning Algorithms</li>
        </ul>
      `},clarity:{title:"CLARITY",content:`
        <p class="detail-subtitle">Contrastive Learning for Analysis and Representation of Infrared and Transmission Spectroscopy</p>
        <p>Sep 2023 - May 2025</p>
        <ul>
          <li>Multimodal framework unifying FTIR and Raman spectroscopy data</li>
          <li>98.2% classification accuracy - outperforming existing baselines</li>
          <li>Dataset of 3,773 spectra with synthetic augmentation via conditional GANs</li>
          <li>KLT-enhanced attention mechanism for model interpretability</li>
          <li><strong>Research paper accepted at ICWSNCUA 2026 (Springer Proceedings)</strong></li>
        </ul>
        <p class="detail-tech">Tech: PyTorch, GANs, Transformers, FTIR/Raman Spectroscopy</p>
      `},bluevision:{title:"blueVision",content:`
        <p class="detail-subtitle">Electrical Symbol Detection in Architectural Blueprints</p>
        <p>May 2025</p>
        <ul>
          <li>YOLOv8n-based system automating electrical component detection</li>
          <li>83% mAP@0.5 and 95% precision on dense blueprint layouts</li>
          <li>Custom tiling strategies with 30-50% overlap for tiny symbol detection</li>
          <li>Multi-scale inference across 640px, 960px, and 1280px tiles</li>
          <li>Deployed on HuggingFace Spaces</li>
        </ul>
        <p class="detail-tech">Tech: YOLOv8, OpenCV, Multi-scale Inference, HuggingFace</p>
        <div class="detail-links">
          <a href="https://github.com/VanshikWaghela/blueVision" target="_blank" class="detail-link">GitHub →</a>
          <a href="https://huggingface.co/spaces/vanshik03/blueVision" target="_blank" class="detail-link">Live Demo →</a>
        </div>
      `},airauth:{title:"AirAuth",content:`
        <p class="detail-subtitle">Touchless Gesture-Controlled Computer Interface with Face Authentication</p>
        <p>May 2025</p>
        <ul>
          <li>Touchless computer control with facial recognition + hand-gesture tracking</li>
          <li>94% gesture recognition accuracy across 7 gesture types</li>
          <li>98% accuracy on precision gestures (fist, victory)</li>
          <li>Sub-200ms response latency (32ms mean, 45ms 95th percentile)</li>
          <li>Kalman filtering for smooth, high-precision gesture interaction</li>
        </ul>
        <p class="detail-tech">Tech: MediaPipe, OpenCV, Kalman Filtering, Face Recognition</p>
        <div class="detail-links">
          <a href="https://github.com/VanshikWaghela/AirAuth" target="_blank" class="detail-link">GitHub →</a>
        </div>
      `},ballzy:{title:"Ballzy",content:`
        <p class="detail-subtitle">Real-Time Football Player Tracking & Performance Analysis</p>
        <p>Nov 2024</p>
        <ul>
          <li>YOLOv8-based system for real-time player detection and tracking</li>
          <li>Speed estimation and motion-trail visualization</li>
          <li>Synchronized multi-output video pipelines</li>
          <li>Real-time FPS monitoring and detection confidence metrics</li>
        </ul>
        <p class="detail-tech">Tech: YOLOv8, OpenCV, Object Tracking, Speed Estimation</p>
        <div class="detail-links">
          <a href="https://github.com/VanshikWaghela/Ballzy" target="_blank" class="detail-link">GitHub →</a>
        </div>
      `},aureliax:{title:"Agentic Data Platform",content:`
        <p class="detail-subtitle"> Multi-Agent Data Analysis System @ AureliaX</p>
        <p>Aug 2025 – December 2025</p>
        <ul>
          <li>Natural language conversations with data using LangChain/LangGraph</li>
          <li>6 specialized reasoning agents with autonomous tool use</li>
          <li>60% reduction in client data exploration time</li>
          <li>45% improvement in query accuracy</li>
          <li>DuckDB integration with 33% memory footprint reduction</li>
        </ul>
        <p class="detail-tech">Tech: LangChain, LangGraph, DuckDB, Chainlit, Plotly</p>
      `},portfolio:{title:"This Portfolio",content:`
        <p class="detail-subtitle">Interactive Grid Portfolio with Spatial Navigation</p>
        <ul>
          <li>2D spatial navigation with keyboard, touch, and click support</li>
          <li>WebGL fluid cursor effect</li>
          <li>Interactive terminal with real commands</li>
          <li>Dark/Light theme support</li>
          <li> minimal aesthetic</li>
        </ul>
        <p class="detail-tech">Tech: Vanilla JS, CSS, Vite, WebGL</p>
      `}};document.querySelectorAll(".tier-box[data-content], .tier-box[data-project]").forEach(r=>{r.addEventListener("click",()=>{const d=r.dataset.content||r.dataset.project,T=e[d];T&&(n.innerHTML=`
          <h2 class="detail-modal__title">${T.title}</h2>
          ${T.content}
        `,i.classList.add("is-open"),document.body.style.overflow="hidden")})});function u(){i.classList.remove("is-open"),document.body.style.overflow=""}c?.addEventListener("click",u),l?.addEventListener("click",u),document.addEventListener("keydown",r=>{r.key==="Escape"&&i.classList.contains("is-open")&&u()})}function kt(){const i=document.getElementById("theme-toggle");if(!i)return;const n=localStorage.getItem("theme"),c=window.matchMedia("(prefers-color-scheme: dark)").matches;(n==="light"||!n&&!c)&&(document.body.classList.add("theme-light"),Re(!0)),i.addEventListener("click",()=>{document.body.classList.toggle("theme-light");const l=document.body.classList.contains("theme-light");localStorage.setItem("theme",l?"light":"dark"),Re(l),window.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:l?"light":"dark"}}))})}function Re(i){const{accentColor:n,accentColorLight:c}=p.theme,l=i?c:n,u=(r=>{const d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return d?{r:parseInt(d[1],16),g:parseInt(d[2],16),b:parseInt(d[3],16)}:null})(l);document.documentElement.style.setProperty("--accent-primary",l),document.documentElement.style.setProperty("--accent-glow",`rgba(${u.r}, ${u.g}, ${u.b}, 0.2)`),document.documentElement.style.setProperty("--accent-hover",l),window.themeColors={...window.themeColors,rgb:u,currentColor:l}}function It(){const i=document.getElementById("live-date"),n=document.getElementById("live-time");function c(){const l=new Date;if(i){const e={weekday:"long",day:"numeric",month:"short",year:"numeric"};i.textContent=l.toLocaleDateString("en-US",e).toUpperCase()}if(n){const e=String(l.getHours()).padStart(2,"0"),u=String(l.getMinutes()).padStart(2,"0");n.textContent=`${e}:${u}`}}c(),setInterval(c,1e3)}function Pt(){const i=document.getElementById("nav-guide-modal"),n=document.getElementById("help-btn"),c=i?.querySelector(".nav-guide-modal__close"),l=document.getElementById("nav-guide-close"),e=i?.querySelector(".nav-guide-modal__overlay");if(!i)return;function u(){i.classList.add("is-open"),document.body.style.overflow="hidden"}function r(){i.classList.remove("is-open"),document.body.style.overflow="",localStorage.setItem("nav-guide-seen","true")}n?.addEventListener("click",u),c?.addEventListener("click",r),l?.addEventListener("click",r),e?.addEventListener("click",r),document.addEventListener("keydown",d=>{if(i.classList.contains("is-open")){d.key==="Escape"&&r();return}if(d.key==="?"||d.shiftKey&&d.key==="/"){if(document.activeElement?.id==="terminal-input")return;u()}}),localStorage.getItem("nav-guide-seen")||setTimeout(u,2e3),console.log("📖 Navigation guide initialized")}async function Ft(){if(sessionStorage.getItem("boot-complete"))return;const i=document.createElement("div");i.className="boot-overlay",i.innerHTML=`
    <div class="boot-content"></div>
    <div class="boot-progress"><div class="boot-progress__bar"></div></div>
  `,document.body.appendChild(i);const n=i.querySelector(".boot-content"),c=i.querySelector(".boot-progress__bar"),l=[{text:"VanshikOS v2.0.26 BIOS",delay:100,class:"boot-line--info"},{text:"Copyright © 2026 Vanshik Waghela",delay:100},{text:"",delay:50},{text:"Checking Memory... 16384 MB OK",delay:200,class:"boot-line--success"},{text:"Initializing GPU... OK",delay:150,class:"boot-line--success"},{text:"Loading Portfolio Modules...",delay:200},{text:"  → navigation.js ✓",delay:100,class:"boot-line--success"},{text:"  → terminal.js ✓",delay:100,class:"boot-line--success"},{text:"  → fluidCursor.js ✓",delay:100,class:"boot-line--success"},{text:"  → config.js ✓",delay:100,class:"boot-line--success"},{text:"",delay:50},{text:"Mounting Virtual Filesystem... OK",delay:200,class:"boot-line--success"},{text:"Starting shell: VanshikTerm v2.0",delay:150},{text:"",delay:100},{text:"Welcome to vanshik.dev",delay:200,class:"boot-line--info"}];let e=0;const u=100/l.length;for(const r of l){if(r.text){const d=document.createElement("div");d.className=`boot-line ${r.class||""}`,d.textContent=r.text,n.appendChild(d)}e+=u,c.style.width=`${e}%`,await new Promise(d=>setTimeout(d,r.delay))}await new Promise(r=>setTimeout(r,300)),i.classList.add("fade-out"),await new Promise(r=>setTimeout(r,500)),i.remove(),sessionStorage.setItem("boot-complete","true"),console.log("🖥️ Boot sequence complete")}
