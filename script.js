// Edit your personal details and projects below.
const PROFILE = {
  name: 'Mohan Sirvi',
  title: 'Software Engineer II · Full-Stack Developer',
  bio: 'Passionate software engineer with 4.5+ years of professional experience building scalable, high-performance applications using modern technologies. Currently at Q2 Software, specialized in .NET Core, Azure, and distributed systems.',
  github: 'https://github.com/mohansirvi',
  linkedin: 'https://www.linkedin.com/in/mohansirvi',
  email: 'mohansirvi999@gmail.com',
  phone: '+91-6350271502',
  resume: 'resume.pdf',
  photo: 'mohan.jpg'
}

const PROJECTS = [
  {
    title: 'Orange Micro Services',
    desc: 'The project is a comprehensive e-commerce solution built using .NET 8 and Blazor, consisting of multiple microservices, a web application, and an API gateway. This project is designed to be modular, with separate services for authentication, product management, coupon management, shopping cart management, email notifications, reward management, and order processing. A Blazor-based web frontend is provided for user interaction. Azure Service Bus ensures reliable messaging between microservices, promoting smooth communication and scalability. Stripe is integrated for secure and efficient payment processing. The Ocelot API Gateway manages routing, load balancing, and security for the microservices, while Azure App Service provides a scalable and managed environment for hosting the application. Below is a detailed summary of the key components.',
    link: 'https://github.com/mohansirvi/OrangeMicroServices'
  },
  {
    title: 'Document Management',
    desc: 'The DocumentManagement project is a robust and scalable document management system built using C# 12.0 and .NET 8. It offers a secure and modular RESTful API for managing documents, user authentication, and ingestion workflows. Designed for enterprise-level use cases, the system emphasizes clean architecture, security, and extensibility.',
    link: 'https://github.com/mohansirvi/DocumentManagement'
  },
  {
    title: 'Ask The AI',
    desc: 'Ask the AI is a web application that harnesses the power of artificial intelligence to engage in conversations, answer questions, and provide insights based on user queries. Leveraging the cutting-edge GPT-3.5 model from OpenAI, this application enables users to interact with an AI assistant in a natural and intuitive way.',
    link: 'https://github.com/mohansirvi/ask-the-ai'
  }
]

const EXPERIENCE = [
  {
    role: 'Software Engineer (SDE2)',
    company: 'Q2',
    type: 'Full-time',
    duration: 'May 2025 - Present',
    location: 'Bengaluru, Karnataka, India',
    locationtype: 'On-site',
    highlights: [
      'Building a dispute tracking system (DTS) to streamline fraud management and paperless dispute resolution for financial institutions, enabling faster transaction resolutions.',
      'Developing scalable solutions to manage disputes across multiple transaction types, improving efficiency and accuracy in handling complex financial disputes in integration-heavy banking environment.'
    ],
    skills: ['C#', '.NET Core', 'Azure', 'Microservices']
  },
  {
    role: 'Senior Software Development Engineer',
    company: 'Aptean',
    type: 'Full-time',
    duration: 'Apr 2024 - May 2025',
    location: 'Bengaluru, Karnataka, India',
    locationtype: 'On-site',
    highlights: [
      'Enhanced system interoperability and scalability by designing and developing RESTful APIs in C# and .NET, supporting seamless integration with external modules.',
      'Led end-to-end migration of document storage to Wasabi Cloud, reducing document management costs and optimizing storage efficiency.',
      'Collaborated cross-functionally with product managers, designers, and stakeholders to translate business requirements into technical specifications.',
      'Mentored and coached junior engineers, fostering a culture of innovation, continuous learning, and technical excellence within the team.',
      'Spearheaded code reviews, refactoring initiatives, and adoption of modern development practices to improve code quality and maintainability.',
      'Successfully delivered 5 product releases on time by facilitating Scrum ceremonies and improving velocity by 20%.'
    ],
    skills: ['.NET Core', 'C#', 'RESTful APIs', 'Cloud Migration', 'Agile/Scrum', 'Team Leadership']
  },
  {
    role: 'Engineer, Development',
    company: 'Aptean',
    type: 'Full-time',
    duration: 'Jul 2021 - Apr 2024',
    location: 'Bengaluru, Karnataka, India',
    locationtype: 'On-site',
    highlights: [
      'Built advanced job scheduling functionality using cron expressions, enabling flexible scheduling options like hourly, weekly, bi-weekly, monthly, yearly, and custom day-based recurrence.',
      'Engineered an interactive tooltip system across the web application, supporting internal navigation and external links to enhance accessibility and user engagement.',
      'Reduced average response times by 30% by implementing advanced in-memory caching techniques in C#, including time-based expiration and sliding expiration.'
    ],
    skills: ['C#', '.NET Framework', 'Job Scheduling', 'Caching', 'Web Development']
  }
]

const SKILLS = {
  backend: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'Web API', 'Microservices', '.NET Framework'],
  cloud: ['Microsoft Azure', 'Azure Functions', 'Azure Service Bus', 'Azure DevOps'],
  database: ['SQL Server', 'SQL', 'NoSQL', 'Stored Procedures'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'Sencha Ext.js'],
  tools: ['Git/Github', 'CI/CD', 'Agile Development'],
  concepts: ['Distributed Systems', 'Scalable Systems', 'OOPS', 'Data Structures & Algorithms', 'RESTful APIs']
}

function populateProfile(){
  document.getElementById('name').textContent = PROFILE.name
  document.getElementById('title').textContent = PROFILE.title
  document.getElementById('bio').textContent = PROFILE.bio
  document.getElementById('githubLink').href = PROFILE.github
  document.getElementById('linkedinLink').href = PROFILE.linkedin
  document.getElementById('resumeLink').href = PROFILE.resume
  document.getElementById('emailLink').href = 'mailto:' + PROFILE.email
  document.getElementById('emailLink').textContent = PROFILE.email
  document.getElementById('phone').textContent = PROFILE.phone
  document.getElementById('profileImage').src = PROFILE.photo
  document.getElementById('year').textContent = new Date().getFullYear()

  // Populate projects
  const grid = document.getElementById('projectsGrid')
  PROJECTS.forEach(p => {
    const el = document.createElement('article')
    el.className = 'project'
    el.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><div class="links"><a class="btn ghost" target="_blank" rel="noopener" href="${p.link}">View</a></div>`
    grid.appendChild(el)
  })

  // Populate skills
  const skillsContainer = document.getElementById('skillsContainer')
  if(skillsContainer){
    Object.entries(SKILLS).forEach(([category, items]) => {
      const section = document.createElement('div')
      section.className = 'skill-category'
      const title = category.replace(/([A-Z])/g, ' $1').trim().toUpperCase()
      section.innerHTML = `<h4>${title}</h4><div class="skills-list">${items.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}</div>`
      skillsContainer.appendChild(section)
    })
  }

  // Populate experience
  const experienceContainer = document.getElementById('experienceContainer')
  if(experienceContainer){
    EXPERIENCE.forEach(exp => {
      const expEl = document.createElement('div')
      expEl.className = 'experience-item'
      const highlightsHtml = exp.highlights.map(h => `<li>${h}</li>`).join('')
      const skillsHtml = exp.skills.map(s => `<span class="exp-skill-tag">${s}</span>`).join('')
      expEl.innerHTML = `
        <div class="exp-header">
          <div class="exp-title-company">
            <h3>${exp.role}</h3>
            <p class="exp-company">${exp.company}</p>
          </div>
          <div class="exp-meta">
            <span class="exp-duration">${exp.duration}</span>
            <span class="exp-location">📍 ${exp.location}</span>
          </div>
        </div>
        <ul class="exp-highlights">${highlightsHtml}</ul>
        <div class="exp-skills">${skillsHtml}</div>
      `
      experienceContainer.appendChild(expEl)
    })
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  populateProfile()

  document.getElementById('contactForm').addEventListener('submit', e=>{
    e.preventDefault()
    const name = document.getElementById('cfName').value || 'Someone'
    const email = document.getElementById('cfEmail').value || PROFILE.email
    const message = document.getElementById('cfMessage').value || ''
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} — ${email}`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
  })
})