/**
 * NEXUS SUITE: State Engine, Compression, CRUD, Theme, & AI Assistant
 * MMMUT PROMPT 2 PIXEL HACKATHON (PS 03)
 */

// ============================================================
// DEFAULT SEED DATA (With requested Abhishek, Ayushman, Shivam, Prasun, SIH, Cloud, etc.)
// ============================================================
const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Team NEXUS",
    title: "Full-Stack Architects & AI System Innovators",
    intro: "Building next-generation intelligent applications, high-performance distributed systems, and cutting-edge digital experiences for hackathons and real-world impact.",
    bio: "We are an undergraduate engineering team from MMMUT Gorakhpur passionate about building high-impact software. We specialize in building cloud-native apps, fine-tuning LLMs, and crafting slick user interfaces. We design solutions that combine engineering rigor with great design.",
    college: "MMMUT, Gorakhpur",
    education: "B.Tech Computer Science & Engineering",
    location: "Gorakhpur, India",
    email: "nexus.team@mmmut.ac.in",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    otherSocial: "https://x.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
  },
  team: [
    {
      id: "mem-1",
      name: "Abhishek Kumar",
      role: "Full-Stack & Systems Lead",
      bio: "Focuses on scalable backends, microservices, and database optimization. Loves low-latency architectures.",
      skills: "Node.js, Docker, MongoDB, Distributed Systems",
      photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: "mem-2",
      name: "Ayushman Rajpoot",
      role: "AI & Machine Learning Engineer",
      bio: "Specializes in LLM orchestration, ChatGPT API pipelines, and predictive algorithms.",
      skills: "Python, PyTorch, LangChain, Cloud Computing",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: "mem-3",
      name: "Shivam Singh",
      role: "Frontend Architect & Creative Designer",
      bio: "Crafts responsive, futuristic glassmorphism UIs with accessible and fluid animations.",
      skills: "Vanilla JS, CSS3 Modern, UI/UX, WebGL Basics",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    },
    {
      id: "mem-4",
      name: "Prasun Singh",
      role: "Cloud & DevOps Specialist",
      bio: "Automates CI/CD pipelines, optimizes cloud deployments, and ensures edge resilience.",
      skills: "Cloud Infrastructure, Kubernetes, Edge Computing",
      photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=500&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com"
    }
  ],
  skills: [
    { id: "sk-1", name: "Cloud Infrastructure (AWS/GCP)", category: "Cloud & Infrastructure", proficiency: 92 },
    { id: "sk-2", name: "AntiGravity Computing Systems", category: "Advanced & AI", proficiency: 88 },
    { id: "sk-3", name: "ChatGPT & LLM Prompt Engineering", category: "Advanced & AI", proficiency: 95 },
    { id: "sk-4", name: "Modern JavaScript / TypeScript", category: "Languages & Frameworks", proficiency: 94 },
    { id: "sk-5", name: "Python Architecture", category: "Languages & Frameworks", proficiency: 90 },
    { id: "sk-6", name: "Docker & Container Orchestration", category: "Tools & DevOps", proficiency: 85 }
  ],
  projects: [
    {
      id: "proj-1",
      title: "OmniCloud AI Orchestrator",
      desc: "An intelligent platform unifying heterogeneous Cloud platforms, utilizing ChatGPT APIs for self-healing DevOps scripts.",
      tech: "Cloud, ChatGPT API, Python, Node.js",
      thumb: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "proj-2",
      title: "AntiGravity Simulator & Physics Web Engine",
      desc: "Interactive zero-gravity simulation running natively on the browser with high-throughput physics computations.",
      tech: "AntiGravity, Vanilla JS, HTML5 Canvas, Web Audio",
      thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      id: "proj-3",
      title: "Campus Smart Assistant (MMMUT Portal)",
      desc: "Context-aware AI bot answering college student queries, schedules, and club announcements automatically.",
      tech: "NLP, JavaScript, LocalStorage, CSS Glassmorphism",
      thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ],
  achievements: [
    {
      id: "ach-1",
      title: "Smart India Hackathon (SIH)",
      date: "National Finalist & Problem Solver",
      desc: "Selected among top nationwide teams for proposing scalable software architectures tackling real governmental problem statements."
    },
    {
      id: "ach-2",
      title: "MMMUT Prompt 2 Pixel Hackathon",
      date: "PS 03 Contender",
      desc: "Engineered an autonomous, fully owner-controlled developer showcase featuring complete real-time client CRUD and AI chatbot."
    }
  ],
  teamCv: {
    heading: "NEXUS Engineering Group - Curriculum Vitae",
    content: "Team NEXUS is a multi-disciplinary software engineering collective based at MMMUT Gorakhpur.\n\nCore Competencies:\n- Full-Stack Web Architecture (HTML5, Vanilla JS, Node.js)\n- Cloud Infrastructure & Scalable Edge Deployments\n- AntiGravity Computing Research & Simulation\n- Generative AI & ChatGPT Pipeline Automation\n\nNotable Track Record:\n- Smart India Hackathon (SIH) National Finalists\n- Prompt 2 Pixel Hackathon PS 03 Developer Portfolio Submission\n\nContact: nexus.team@mmmut.ac.in"
  },
  branding: {
    primaryColor: "#00f0ff",
    secondaryColor: "#8a2be2",
    bgColor: "#050814",
    brandTitle: "NEXUS.DEV",
    heroBadge: "AI-Native & Edge Optimized",
    footerText: "Built for MMMUT Prompt 2 Pixel Hackathon (PS 03). Fully Owner-Controlled."
  },
  // Default master password SHA-256 for 'admin123'
  authHash: "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"
};

// ============================================================
// STORAGE & UTILITY CONTROLLERS
// ============================================================
const STORAGE_KEY = "NEXUS_PORTFOLIO_DB_V1";

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveData(DEFAULT_PORTFOLIO_DATA);
      return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error("Storage load error, fallback to default", e);
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }
}

function saveData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    if (err.name === 'QuotaExceededError' || err.code === 22) {
      alert("Storage limit reached! Please use direct image URLs instead of heavy local images or export your current backup.");
    }
  }
}

// Client-Side Image Resizer/Compressor (prevents QuotaExceededError in LocalStorage)
function compressImage(file, maxWidth = 600, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const elem = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(elem.toDataURL('image/jpeg', quality));
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

// SHA-256 for Admin Authentication
async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// ============================================================
// MAIN APPLICATION RUNTIME
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  let db = loadData();

  // Canvas particle starfield
  initBackgroundCanvas();

  // Initial Public Render
  renderPublicSite(db);
  applyBranding(db.branding);

  // Bind Navigation & UI Interactions
  bindNavigation();
  bindTeamCVModal(db);
  bindChatbot(db);
  bindOwnerAdminSuite(db);

  console.log("%c NEXUS DEV ENGINE LOADED [MMMUT PS 03 READY] ", "background: #00f0ff; color: #000; font-weight: bold;");
});

// ============================================================
// PUBLIC SITE RENDER ENGINE
// ============================================================
function renderPublicSite(data) {
  const { profile, team, skills, projects, achievements, branding } = data;

  // Hero & Profile
  document.getElementById("hero-name-display").textContent = profile.name;
  document.getElementById("hero-title-display").textContent = profile.title;
  document.getElementById("hero-intro-display").textContent = profile.intro;
  document.getElementById("hero-avatar-img").src = profile.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";

  // About
  document.getElementById("about-bio-display").textContent = profile.bio;
  document.getElementById("about-college-display").textContent = profile.college;
  document.getElementById("about-education-display").textContent = profile.education;
  document.getElementById("about-location-display").textContent = profile.location;

  // Social Links
  const heroSocialWrap = document.getElementById("hero-social-links");
  const contactSocialWrap = document.getElementById("contact-social-links");
  const socialHtml = `
    ${profile.github ? `<a href="${profile.github}" target="_blank" class="social-pill-link">GitHub ↗</a>` : ''}
    ${profile.linkedin ? `<a href="${profile.linkedin}" target="_blank" class="social-pill-link">LinkedIn ↗</a>` : ''}
    ${profile.otherSocial ? `<a href="${profile.otherSocial}" target="_blank" class="social-pill-link">Social ↗</a>` : ''}
  `;
  if (heroSocialWrap) heroSocialWrap.innerHTML = socialHtml;
  if (contactSocialWrap) contactSocialWrap.innerHTML = socialHtml;

  // Contact
  document.getElementById("contact-email-display").textContent = profile.email;

  // Skills Section Render
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = "";
  const categories = [...new Set(skills.map(s => s.category || "General"))];
  categories.forEach(cat => {
    const catSkills = skills.filter(s => (s.category || "General") === cat);
    const card = document.createElement("div");
    card.className = "glass-card skill-category-card";
    card.innerHTML = `
      <div class="skill-cat-title">
        <span>${escapeHtml(cat)}</span>
        <span>${catSkills.length}</span>
      </div>
      <div class="skill-items-list">
        ${catSkills.map(s => `
          <div class="skill-item-row">
            <div class="skill-row-top">
              <span>${escapeHtml(s.name)}</span>
              <span>${s.proficiency || 85}%</span>
            </div>
            <div class="skill-meter">
              <div class="skill-progress" style="width: ${s.proficiency || 85}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    skillsContainer.appendChild(card);
  });

  // Projects Section Render
  const projectsContainer = document.getElementById("projects-container");
  projectsContainer.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "glass-card project-card";
    const tags = (p.tech || "").split(",").map(t => t.trim()).filter(Boolean);
    card.innerHTML = `
      <div class="project-thumb-box">
        <img src="${p.thumb || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80'}" alt="${escapeHtml(p.title)}" class="project-thumb" />
      </div>
      <div class="project-card-body">
        <h3 class="project-card-title">${escapeHtml(p.title)}</h3>
        <p class="project-card-desc">${escapeHtml(p.desc)}</p>
        <div class="project-tags">
          ${tags.map(tag => `<span class="tech-tag">${escapeHtml(tag)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `<a href="${p.github}" target="_blank" class="btn btn-outline-cyan btn-sm">GitHub</a>` : ''}
          ${p.demo ? `<a href="${p.demo}" target="_blank" class="btn btn-primary-cyan btn-sm">Live Demo</a>` : ''}
        </div>
      </div>
    `;
    projectsContainer.appendChild(card);
  });

  // Team Section Render (Abhishek, Ayushman, Shivam, Prasun, etc.)
  const teamContainer = document.getElementById("team-container");
  teamContainer.innerHTML = "";
  team.forEach(m => {
    const card = document.createElement("div");
    card.className = "glass-card team-card";
    const skillsList = (m.skills || "").split(",").map(s => s.trim()).filter(Boolean);
    card.innerHTML = `
      <div class="team-photo-wrap">
        <img src="${m.photo || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80'}" alt="${escapeHtml(m.name)}" class="team-photo" />
      </div>
      <h3 class="team-name">${escapeHtml(m.name)}</h3>
      <p class="team-role">${escapeHtml(m.role)}</p>
      <p class="team-bio">${escapeHtml(m.bio)}</p>
      <div class="team-skills-pills">
        ${skillsList.map(sk => `<span class="tech-tag">${escapeHtml(sk)}</span>`).join('')}
      </div>
      <div class="team-socials">
        ${m.github ? `<a href="${m.github}" target="_blank" class="social-pill-link">GitHub</a>` : ''}
        ${m.linkedin ? `<a href="${m.linkedin}" target="_blank" class="social-pill-link">LinkedIn</a>` : ''}
      </div>
    `;
    teamContainer.appendChild(card);
  });

  // Achievements Render (SIH & Hackathon)
  const achContainer = document.getElementById("achievements-container");
  achContainer.innerHTML = "";
  achievements.forEach(a => {
    const card = document.createElement("div");
    card.className = "glass-card achievement-card";
    card.innerHTML = `
      <div class="ach-header">
        <h4 class="ach-title">${escapeHtml(a.title)}</h4>
        <span class="ach-date">${escapeHtml(a.date)}</span>
      </div>
      <p class="ach-desc">${escapeHtml(a.desc)}</p>
    `;
    achContainer.appendChild(card);
  });

  // Footer & Branding Details
  document.getElementById("footer-brand-title").textContent = branding.brandTitle || "NEXUS TEAM PORTFOLIO";
  document.getElementById("footer-custom-text").textContent = branding.footerText;
  document.getElementById("footer-owner-name").textContent = profile.name;
  document.getElementById("brand-logo-display").querySelector(".logo-text").innerHTML = `${escapeHtml(branding.brandTitle || 'NEXUS')}<span class="dot">.</span>`;
  document.getElementById("hero-badge-text").textContent = branding.heroBadge || "AI-Native & Edge Optimized";
}

function applyBranding(branding) {
  if (!branding) return;
  const root = document.documentElement;
  if (branding.primaryColor) {
    root.style.setProperty('--primary-cyan', branding.primaryColor);
    root.style.setProperty('--primary-cyan-glow', `${branding.primaryColor}55`);
  }
  if (branding.secondaryColor) {
    root.style.setProperty('--secondary-purple', branding.secondaryColor);
    root.style.setProperty('--secondary-purple-glow', `${branding.secondaryColor}55`);
  }
  if (branding.bgColor) {
    root.style.setProperty('--bg-dark', branding.bgColor);
  }
}

// ============================================================
// TEAM CV / RESUME VIEWER & DOWNLOADER
// ============================================================
function bindTeamCVModal(data) {
  const modal = document.getElementById("cv-modal");
  const openBtn = document.getElementById("open-cv-modal-btn");
  const closeBtn = document.getElementById("close-cv-modal");
  const dismissBtn = document.getElementById("dismiss-cv-modal");
  const downloadBtn = document.getElementById("download-cv-btn");

  function openCV() {
    const current = loadData();
    document.getElementById("cv-modal-heading").textContent = current.teamCv.heading || "Consolidated Team CV";
    document.getElementById("cv-team-name").textContent = current.profile.name;
    document.getElementById("cv-main-text").textContent = current.teamCv.content;

    const memberSummaryWrap = document.getElementById("cv-members-summary");
    memberSummaryWrap.innerHTML = current.team.map(m => `
      <div style="margin-bottom:0.8rem; padding:0.5rem; background:rgba(255,255,255,0.03); border-radius:6px;">
        <strong>${escapeHtml(m.name)}</strong> - <span style="color:var(--primary-cyan);">${escapeHtml(m.role)}</span>
        <br><small style="color:var(--text-dim);">${escapeHtml(m.skills)}</small>
      </div>
    `).join('');

    modal.classList.add("open");
  }

  function closeCV() {
    modal.classList.remove("open");
  }

  if (openBtn) openBtn.addEventListener("click", openCV);
  if (closeBtn) closeBtn.addEventListener("click", closeCV);
  if (dismissBtn) dismissBtn.addEventListener("click", closeCV);

  // Trigger Native Clean Print / PDF Generation of CV block
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

// ============================================================
// INTERACTIVE AI ASSISTANT CHATBOT
// ============================================================
function bindChatbot(data) {
  const toggleBtn = document.getElementById("chatbot-toggle-btn");
  const chatWindow = document.getElementById("chatbot-window");
  const closeBtn = document.getElementById("chatbot-close-btn");
  const form = document.getElementById("chatbot-input-form");
  const input = document.getElementById("chatbot-query-input");
  const msgsBox = document.getElementById("chatbot-messages-container");
  const unreadDot = document.getElementById("chat-unread-dot");

  toggleBtn.addEventListener("click", () => {
    chatWindow.classList.toggle("hidden");
    if (!chatWindow.classList.contains("hidden")) {
      unreadDot.style.display = "none";
      input.focus();
    }
  });

  closeBtn.addEventListener("click", () => {
    chatWindow.classList.add("hidden");
  });

  // Handle Quick Chips
  document.querySelectorAll(".chip-query").forEach(chip => {
    chip.addEventListener("click", () => {
      const q = chip.getAttribute("data-query");
      input.value = q;
      form.dispatchEvent(new Event("submit"));
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    // Append User Message
    appendMessage(query, "user-msg");
    input.value = "";

    // Generate Contextual AI Response
    setTimeout(() => {
      const reply = generateAiAnswer(query, loadData());
      appendMessage(reply, "ai-msg");
      msgsBox.scrollTop = msgsBox.scrollHeight;
    }, 450);
  });

  function appendMessage(text, type) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${type}`;
    bubble.textContent = text;
    msgsBox.appendChild(bubble);
    msgsBox.scrollTop = msgsBox.scrollHeight;
  }

  function generateAiAnswer(query, currentDb) {
    const q = query.toLowerCase();
    const { profile, team, skills, achievements, projects } = currentDb;

    if (q.includes("team") || q.includes("who are") || q.includes("member") || q.includes("engineers")) {
      const names = team.map(t => `${t.name} (${t.role})`).join(", ");
      return `Our core engineering team includes: ${names}. All members are undergraduate engineers from ${profile.college}.`;
    }
    if (q.includes("abhishek")) {
      const m = team.find(t => t.name.toLowerCase().includes("abhishek"));
      return m ? `${m.name} is our ${m.role}. ${m.bio} Specializes in: ${m.skills}.` : "Abhishek is a lead engineer in Team NEXUS.";
    }
    if (q.includes("ayushman")) {
      const m = team.find(t => t.name.toLowerCase().includes("ayushman"));
      return m ? `${m.name} is our ${m.role}. ${m.bio} Specializes in: ${m.skills}.` : "Ayushman is our AI & ML specialist.";
    }
    if (q.includes("shivam")) {
      const m = team.find(t => t.name.toLowerCase().includes("shivam"));
      return m ? `${m.name} is our ${m.role}. ${m.bio} Specializes in: ${m.skills}.` : "Shivam heads our frontend architecture.";
    }
    if (q.includes("prasun")) {
      const m = team.find(t => t.name.toLowerCase().includes("prasun"));
      return m ? `${m.name} is our ${m.role}. ${m.bio} Specializes in: ${m.skills}.` : "Prasun is our Cloud & DevOps engineer.";
    }
    if (q.includes("skill") || q.includes("cloud") || q.includes("antigravity") || q.includes("chatgpt")) {
      const skillNames = skills.map(s => s.name).join(", ");
      return `We possess deep technical expertise in: ${skillNames}. We actively leverage Cloud, AntiGravity concepts, and ChatGPT LLM orchestration.`;
    }
    if (q.includes("sih") || q.includes("smart india") || q.includes("hackathon") || q.includes("achievement")) {
      const sih = achievements.find(a => a.title.toLowerCase().includes("smart india"));
      return sih ? `Achievement Highlight: ${sih.title} (${sih.date}). ${sih.desc}` : "We are national contenders and hackathon innovators at MMMUT.";
    }
    if (q.includes("project") || q.includes("built")) {
      const projNames = projects.map(p => p.title).join(", ");
      return `Our key showcased projects include: ${projNames}. Check the Projects section for live demos and code links!`;
    }
    if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
      return `You can reach us directly at ${profile.email} or through the interactive Contact form below.`;
    }

    return `Thank you for asking! Team NEXUS is focused on building high-impact software combining Cloud, AI, and AntiGravity computing. Feel free to ask about our members, projects, or hackathons!`;
  }
}

// ============================================================
// OWNER ADMIN SUITE & CRUD CONTROLLER
// ============================================================
function bindOwnerAdminSuite(initialDb) {
  const loginModal = document.getElementById("login-modal");
  const dashboardModal = document.getElementById("admin-dashboard-modal");
  const openLoginBtn = document.getElementById("open-login-btn");
  const closeLoginBtn = document.getElementById("close-login-modal");
  const loginForm = document.getElementById("owner-login-form");
  const loginError = document.getElementById("login-error-msg");
  const logoutBtn = document.getElementById("admin-logout-btn");

  let isAuthenticated = sessionStorage.getItem("NEXUS_OWNER_AUTH") === "true";

  // Check initial state
  if (isAuthenticated) {
    document.getElementById("admin-btn-text").textContent = "Admin Suite (Active)";
  }

  openLoginBtn.addEventListener("click", () => {
    if (isAuthenticated) {
      openAdminDashboard();
    } else {
      loginModal.classList.add("open");
    }
  });

  closeLoginBtn.addEventListener("click", () => {
    loginModal.classList.remove("open");
  });

  // Login handler
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginError.textContent = "";
    const entered = document.getElementById("login-password").value;
    const currentDb = loadData();
    const hash = await sha256(entered);

    if (hash === currentDb.authHash) {
      isAuthenticated = true;
      sessionStorage.setItem("NEXUS_OWNER_AUTH", "true");
      document.getElementById("admin-btn-text").textContent = "Admin Suite (Active)";
      loginModal.classList.remove("open");
      loginForm.reset();
      openAdminDashboard();
    } else {
      loginError.textContent = "Invalid master password. Default is admin123.";
    }
  });

  logoutBtn.addEventListener("click", () => {
    isAuthenticated = false;
    sessionStorage.removeItem("NEXUS_OWNER_AUTH");
    document.getElementById("admin-btn-text").textContent = "Owner Portal";
    dashboardModal.classList.remove("open");
  });

  function openAdminDashboard() {
    populateAdminForms();
    dashboardModal.classList.add("open");
  }

  // Admin Tab Navigation
  document.querySelectorAll(".admin-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".admin-tab-pane").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-tab");
      document.getElementById(target).classList.add("active");
    });
  });

  // Populate Admin Forms & Tables
  function populateAdminForms() {
    const db = loadData();

    // Stats
    document.getElementById("stat-count-team").textContent = db.team.length;
    document.getElementById("stat-count-projects").textContent = db.projects.length;
    document.getElementById("stat-count-skills").textContent = db.skills.length;
    document.getElementById("stat-count-achievements").textContent = db.achievements.length;

    // Profile Tab
    document.getElementById("edit-profile-name").value = db.profile.name;
    document.getElementById("edit-profile-title").value = db.profile.title;
    document.getElementById("edit-profile-intro").value = db.profile.intro;
    document.getElementById("edit-profile-bio").value = db.profile.bio;
    document.getElementById("edit-profile-college").value = db.profile.college;
    document.getElementById("edit-profile-education").value = db.profile.education;
    document.getElementById("edit-profile-location").value = db.profile.location;
    document.getElementById("edit-profile-email").value = db.profile.email;
    document.getElementById("edit-profile-github").value = db.profile.github;
    document.getElementById("edit-profile-linkedin").value = db.profile.linkedin;
    document.getElementById("edit-profile-other").value = db.profile.otherSocial;
    document.getElementById("edit-hero-avatar-url").value = db.profile.avatar;
    document.getElementById("edit-hero-avatar-preview").src = db.profile.avatar;

    // Render CRUD lists
    renderAdminTeamList(db);
    renderAdminProjectsList(db);
    renderAdminSkillsList(db);
    renderAdminAchievementsList(db);

    // Team CV Tab
    document.getElementById("edit-cv-heading").value = db.teamCv.heading;
    document.getElementById("edit-cv-text").value = db.teamCv.content;

    // Appearance
    document.getElementById("edit-primary-color").value = db.branding.primaryColor || "#00f0ff";
    document.getElementById("edit-secondary-color").value = db.branding.secondaryColor || "#8a2be2";
    document.getElementById("edit-bg-color").value = db.branding.bgColor || "#050814";
    document.getElementById("edit-brand-title").value = db.branding.brandTitle;
    document.getElementById("edit-hero-badge").value = db.branding.heroBadge;
    document.getElementById("edit-footer-text").value = db.branding.footerText;
  }

  // --- SAVE PROFILE & HERO AVATAR ---
  const heroFileInput = document.getElementById("edit-hero-avatar-file");
  heroFileInput.addEventListener("change", async (e) => {
    if (e.target.files && e.target.files[0]) {
      const compressed = await compressImage(e.target.files[0], 500);
      document.getElementById("edit-hero-avatar-url").value = compressed;
      document.getElementById("edit-hero-avatar-preview").src = compressed;
    }
  });

  document.getElementById("admin-profile-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    db.profile.name = document.getElementById("edit-profile-name").value;
    db.profile.title = document.getElementById("edit-profile-title").value;
    db.profile.intro = document.getElementById("edit-profile-intro").value;
    db.profile.bio = document.getElementById("edit-profile-bio").value;
    db.profile.college = document.getElementById("edit-profile-college").value;
    db.profile.education = document.getElementById("edit-profile-education").value;
    db.profile.location = document.getElementById("edit-profile-location").value;
    db.profile.email = document.getElementById("edit-profile-email").value;
    db.profile.github = document.getElementById("edit-profile-github").value;
    db.profile.linkedin = document.getElementById("edit-profile-linkedin").value;
    db.profile.otherSocial = document.getElementById("edit-profile-other").value;
    db.profile.avatar = document.getElementById("edit-hero-avatar-url").value;

    saveData(db);
    renderPublicSite(db);
    alert("Profile and Hero Avatar successfully updated!");
  });

  // --- TEAM CRUD HANDLERS ---
  const memberDrawer = document.getElementById("member-editor-card");
  const memberForm = document.getElementById("member-editor-form");
  const memPhotoFile = document.getElementById("mem-photo-file");

  memPhotoFile.addEventListener("change", async (e) => {
    if (e.target.files && e.target.files[0]) {
      const compressed = await compressImage(e.target.files[0], 400);
      document.getElementById("mem-photo-url").value = compressed;
      document.getElementById("mem-photo-preview").src = compressed;
    }
  });

  document.getElementById("btn-add-team-member").addEventListener("click", () => {
    memberForm.reset();
    document.getElementById("mem-edit-id").value = "";
    document.getElementById("member-editor-title").textContent = "Add New Team Member";
    document.getElementById("mem-photo-preview").src = "";
    memberDrawer.classList.remove("hidden");
  });

  document.getElementById("cancel-member-edit").addEventListener("click", () => {
    memberDrawer.classList.add("hidden");
  });

  memberForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    const editId = document.getElementById("mem-edit-id").value;
    const memberData = {
      id: editId || ("mem-" + Date.now()),
      name: document.getElementById("mem-name").value,
      role: document.getElementById("mem-role").value,
      photo: document.getElementById("mem-photo-url").value || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
      bio: document.getElementById("mem-bio").value,
      skills: document.getElementById("mem-skills").value,
      github: document.getElementById("mem-github").value,
      linkedin: document.getElementById("mem-linkedin").value
    };

    if (editId) {
      const idx = db.team.findIndex(m => m.id === editId);
      if (idx !== -1) db.team[idx] = memberData;
    } else {
      db.team.push(memberData);
    }

    saveData(db);
    renderPublicSite(db);
    renderAdminTeamList(db);
    populateAdminForms();
    memberDrawer.classList.add("hidden");
  });

  function renderAdminTeamList(db) {
    const list = document.getElementById("admin-team-list");
    list.innerHTML = "";
    db.team.forEach(m => {
      const item = document.createElement("div");
      item.className = "admin-crud-item";
      item.innerHTML = `
        <div class="item-main-info">
          <h5>${escapeHtml(m.name)} <small style="color:var(--primary-cyan)">(${escapeHtml(m.role)})</small></h5>
          <p>${escapeHtml(m.skills)}</p>
        </div>
        <div class="crud-actions">
          <button class="btn btn-outline-cyan btn-sm" onclick="editMember('${m.id}')">Edit</button>
          <button class="btn btn-outline-red btn-sm" onclick="deleteMember('${m.id}')">Delete</button>
        </div>
      `;
      list.appendChild(item);
    });
  }

  window.editMember = function(id) {
    const db = loadData();
    const m = db.team.find(item => item.id === id);
    if (!m) return;
    document.getElementById("mem-edit-id").value = m.id;
    document.getElementById("mem-name").value = m.name;
    document.getElementById("mem-role").value = m.role;
    document.getElementById("mem-photo-url").value = m.photo;
    document.getElementById("mem-photo-preview").src = m.photo;
    document.getElementById("mem-bio").value = m.bio;
    document.getElementById("mem-skills").value = m.skills;
    document.getElementById("mem-github").value = m.github || "";
    document.getElementById("mem-linkedin").value = m.linkedin || "";
    document.getElementById("member-editor-title").textContent = `Edit Member: ${m.name}`;
    memberDrawer.classList.remove("hidden");
  };

  window.deleteMember = function(id) {
    if (!confirm("Are you sure you want to remove this team member?")) return;
    const db = loadData();
    db.team = db.team.filter(m => m.id !== id);
    saveData(db);
    renderPublicSite(db);
    renderAdminTeamList(db);
    populateAdminForms();
  };

  // --- PROJECTS CRUD ---
  const projectDrawer = document.getElementById("project-editor-card");
  const projectForm = document.getElementById("project-editor-form");
  const projPhotoFile = document.getElementById("proj-photo-file");

  projPhotoFile.addEventListener("change", async (e) => {
    if (e.target.files && e.target.files[0]) {
      const compressed = await compressImage(e.target.files[0], 500);
      document.getElementById("proj-photo-url").value = compressed;
      document.getElementById("proj-photo-preview").src = compressed;
    }
  });

  document.getElementById("btn-add-project").addEventListener("click", () => {
    projectForm.reset();
    document.getElementById("proj-edit-id").value = "";
    document.getElementById("project-editor-title").textContent = "Add New Project";
    document.getElementById("proj-photo-preview").src = "";
    projectDrawer.classList.remove("hidden");
  });

  document.getElementById("cancel-project-edit").addEventListener("click", () => {
    projectDrawer.classList.add("hidden");
  });

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    const editId = document.getElementById("proj-edit-id").value;
    const projData = {
      id: editId || ("proj-" + Date.now()),
      title: document.getElementById("proj-title").value,
      desc: document.getElementById("proj-desc").value,
      tech: document.getElementById("proj-tech").value,
      thumb: document.getElementById("proj-photo-url").value || "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      github: document.getElementById("proj-github").value,
      demo: document.getElementById("proj-demo").value
    };

    if (editId) {
      const idx = db.projects.findIndex(p => p.id === editId);
      if (idx !== -1) db.projects[idx] = projData;
    } else {
      db.projects.push(projData);
    }

    saveData(db);
    renderPublicSite(db);
    renderAdminProjectsList(db);
    populateAdminForms();
    projectDrawer.classList.add("hidden");
  });

  function renderAdminProjectsList(db) {
    const list = document.getElementById("admin-projects-list");
    list.innerHTML = "";
    db.projects.forEach(p => {
      const item = document.createElement("div");
      item.className = "admin-crud-item";
      item.innerHTML = `
        <div class="item-main-info">
          <h5>${escapeHtml(p.title)}</h5>
          <p>${escapeHtml(p.tech)}</p>
        </div>
        <div class="crud-actions">
          <button class="btn btn-outline-cyan btn-sm" onclick="editProject('${p.id}')">Edit</button>
          <button class="btn btn-outline-red btn-sm" onclick="deleteProject('${p.id}')">Delete</button>
        </div>
      `;
      list.appendChild(item);
    });
  }

  window.editProject = function(id) {
    const db = loadData();
    const p = db.projects.find(x => x.id === id);
    if (!p) return;
    document.getElementById("proj-edit-id").value = p.id;
    document.getElementById("proj-title").value = p.title;
    document.getElementById("proj-desc").value = p.desc;
    document.getElementById("proj-tech").value = p.tech;
    document.getElementById("proj-photo-url").value = p.thumb;
    document.getElementById("proj-photo-preview").src = p.thumb;
    document.getElementById("proj-github").value = p.github || "";
    document.getElementById("proj-demo").value = p.demo || "";
    document.getElementById("project-editor-title").textContent = `Edit Project: ${p.title}`;
    projectDrawer.classList.remove("hidden");
  };

  window.deleteProject = function(id) {
    if (!confirm("Delete this project from your showcase?")) return;
    const db = loadData();
    db.projects = db.projects.filter(p => p.id !== id);
    saveData(db);
    renderPublicSite(db);
    renderAdminProjectsList(db);
    populateAdminForms();
  };

  // --- SKILLS CRUD ---
  const skillDrawer = document.getElementById("skill-editor-card");
  const skillForm = document.getElementById("skill-editor-form");

  document.getElementById("btn-add-skill").addEventListener("click", () => {
    skillForm.reset();
    document.getElementById("skill-edit-id").value = "";
    skillDrawer.classList.remove("hidden");
  });

  document.getElementById("cancel-skill-edit").addEventListener("click", () => {
    skillDrawer.classList.add("hidden");
  });

  skillForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    const editId = document.getElementById("skill-edit-id").value;
    const skillData = {
      id: editId || ("sk-" + Date.now()),
      name: document.getElementById("skill-name").value,
      category: document.getElementById("skill-category").value,
      proficiency: parseInt(document.getElementById("skill-proficiency").value, 10) || 85
    };

    if (editId) {
      const idx = db.skills.findIndex(s => s.id === editId);
      if (idx !== -1) db.skills[idx] = skillData;
    } else {
      db.skills.push(skillData);
    }

    saveData(db);
    renderPublicSite(db);
    renderAdminSkillsList(db);
    populateAdminForms();
    skillDrawer.classList.add("hidden");
  });

  function renderAdminSkillsList(db) {
    const list = document.getElementById("admin-skills-list");
    list.innerHTML = "";
    db.skills.forEach(s => {
      const item = document.createElement("div");
      item.className = "admin-crud-item";
      item.innerHTML = `
        <div class="item-main-info">
          <h5>${escapeHtml(s.name)} <small>(${s.category})</small></h5>
          <p>Proficiency: ${s.proficiency}%</p>
        </div>
        <div class="crud-actions">
          <button class="btn btn-outline-cyan btn-sm" onclick="editSkill('${s.id}')">Edit</button>
          <button class="btn btn-outline-red btn-sm" onclick="deleteSkill('${s.id}')">Delete</button>
        </div>
      `;
      list.appendChild(item);
    });
  }

  window.editSkill = function(id) {
    const db = loadData();
    const s = db.skills.find(x => x.id === id);
    if (!s) return;
    document.getElementById("skill-edit-id").value = s.id;
    document.getElementById("skill-name").value = s.name;
    document.getElementById("skill-category").value = s.category;
    document.getElementById("skill-proficiency").value = s.proficiency;
    skillDrawer.classList.remove("hidden");
  };

  window.deleteSkill = function(id) {
    if (!confirm("Delete this skill?")) return;
    const db = loadData();
    db.skills = db.skills.filter(s => s.id !== id);
    saveData(db);
    renderPublicSite(db);
    renderAdminSkillsList(db);
    populateAdminForms();
  };

  // --- ACHIEVEMENTS CRUD ---
  const achDrawer = document.getElementById("achievement-editor-card");
  const achForm = document.getElementById("achievement-editor-form");

  document.getElementById("btn-add-achievement").addEventListener("click", () => {
    achForm.reset();
    document.getElementById("ach-edit-id").value = "";
    achDrawer.classList.remove("hidden");
  });

  document.getElementById("cancel-achievement-edit").addEventListener("click", () => {
    achDrawer.classList.add("hidden");
  });

  achForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    const editId = document.getElementById("ach-edit-id").value;
    const achData = {
      id: editId || ("ach-" + Date.now()),
      title: document.getElementById("ach-title").value,
      date: document.getElementById("ach-date").value,
      desc: document.getElementById("ach-desc").value
    };

    if (editId) {
      const idx = db.achievements.findIndex(a => a.id === editId);
      if (idx !== -1) db.achievements[idx] = achData;
    } else {
      db.achievements.push(achData);
    }

    saveData(db);
    renderPublicSite(db);
    renderAdminAchievementsList(db);
    populateAdminForms();
    achDrawer.classList.add("hidden");
  });

  function renderAdminAchievementsList(db) {
    const list = document.getElementById("admin-achievements-list");
    list.innerHTML = "";
    db.achievements.forEach(a => {
      const item = document.createElement("div");
      item.className = "admin-crud-item";
      item.innerHTML = `
        <div class="item-main-info">
          <h5>${escapeHtml(a.title)}</h5>
          <p>${escapeHtml(a.date)}</p>
        </div>
        <div class="crud-actions">
          <button class="btn btn-outline-cyan btn-sm" onclick="editAchievement('${a.id}')">Edit</button>
          <button class="btn btn-outline-red btn-sm" onclick="deleteAchievement('${a.id}')">Delete</button>
        </div>
      `;
      list.appendChild(item);
    });
  }

  window.editAchievement = function(id) {
    const db = loadData();
    const a = db.achievements.find(x => x.id === id);
    if (!a) return;
    document.getElementById("ach-edit-id").value = a.id;
    document.getElementById("ach-title").value = a.title;
    document.getElementById("ach-date").value = a.date;
    document.getElementById("ach-desc").value = a.desc;
    achDrawer.classList.remove("hidden");
  };

  window.deleteAchievement = function(id) {
    if (!confirm("Delete this achievement?")) return;
    const db = loadData();
    db.achievements = db.achievements.filter(a => a.id !== id);
    saveData(db);
    renderPublicSite(db);
    renderAdminAchievementsList(db);
    populateAdminForms();
  };

  // --- SAVE TEAM CV TAB ---
  document.getElementById("admin-team-cv-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    db.teamCv.heading = document.getElementById("edit-cv-heading").value;
    db.teamCv.content = document.getElementById("edit-cv-text").value;
    saveData(db);
    alert("Team CV information saved! It can now be viewed on the home page.");
  });

  // --- SAVE APPEARANCE & BRANDING ---
  document.getElementById("admin-appearance-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const db = loadData();
    db.branding.primaryColor = document.getElementById("edit-primary-color").value;
    db.branding.secondaryColor = document.getElementById("edit-secondary-color").value;
    db.branding.bgColor = document.getElementById("edit-bg-color").value;
    db.branding.brandTitle = document.getElementById("edit-brand-title").value;
    db.branding.heroBadge = document.getElementById("edit-hero-badge").value;
    db.branding.footerText = document.getElementById("edit-footer-text").value;

    saveData(db);
    applyBranding(db.branding);
    renderPublicSite(db);
    alert("Branding and theme customized successfully!");
  });

  // --- SECURITY / PASSWORD CHANGE ---
  document.getElementById("admin-security-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const currentPw = document.getElementById("sec-current-pw").value;
    const newPw = document.getElementById("sec-new-pw").value;
    const confirmPw = document.getElementById("sec-confirm-pw").value;
    const status = document.getElementById("sec-status-msg");

    if (newPw !== confirmPw) {
      status.textContent = "New passwords do not match!";
      status.className = "status-msg error";
      return;
    }

    const db = loadData();
    const curHash = await sha256(currentPw);
    if (curHash !== db.authHash) {
      status.textContent = "Current password is incorrect!";
      status.className = "status-msg error";
      return;
    }

    db.authHash = await sha256(newPw);
    saveData(db);
    status.textContent = "Password successfully updated! Keep your new password safe.";
    status.className = "status-msg success";
    document.getElementById("admin-security-form").reset();
  });

  // --- BACKUP EXPORT & IMPORT ---
  document.getElementById("admin-export-btn").addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(loadData(), null, 2));
    const dlAnchor = document.createElement("a");
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `nexus_portfolio_backup_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchor.click();
  });

  const importTrigger = document.getElementById("admin-import-trigger");
  const importFile = document.getElementById("admin-import-file");
  importTrigger.addEventListener("click", () => importFile.click());

  importFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (parsed.profile && parsed.team && parsed.projects) {
          saveData(parsed);
          renderPublicSite(parsed);
          applyBranding(parsed.branding);
          populateAdminForms();
          alert("Backup data successfully imported and synced!");
        } else {
          alert("Invalid backup format. Required fields missing.");
        }
      } catch (err) {
        alert("Failed to parse JSON backup file.");
      }
    };
    reader.readAsText(file);
  });

  document.getElementById("admin-reset-btn").addEventListener("click", () => {
    if (confirm("Reset everything back to competition defaults? Unsaved custom data will be cleared.")) {
      saveData(DEFAULT_PORTFOLIO_DATA);
      renderPublicSite(DEFAULT_PORTFOLIO_DATA);
      applyBranding(DEFAULT_PORTFOLIO_DATA.branding);
      populateAdminForms();
      alert("Reset to official default data completed.");
    }
  });
}

// ============================================================
// NAVIGATION & CONTACT FORM
// ============================================================
function bindNavigation() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  mobileToggle.addEventListener("click", () => {
    navMenu.classList.toggle("mobile-open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("mobile-open");
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // Contact form submission simulator
  const contactForm = document.getElementById("public-contact-form");
  const contactStatus = document.getElementById("contact-status-msg");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = document.getElementById("contact-submit-btn");
    btn.disabled = true;
    btn.querySelector("span").textContent = "Transmitting...";

    setTimeout(() => {
      contactStatus.textContent = "Thank you! Your message has been logged successfully. The team will get back to you shortly.";
      contactStatus.className = "status-msg success";
      contactForm.reset();
      btn.disabled = false;
      btn.querySelector("span").textContent = "Send Message";
    }, 800);
  });
}

// ============================================================
// DYNAMIC PARTICLE BACKGROUND (CANVAS)
// ============================================================
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.5 + 0.2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  const count = Math.min(Math.floor(window.innerWidth / 18), 75);
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.12 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(loop);
  }
  loop();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
