document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const navbarToggler = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (navbarToggler && navLinks) {
        navbarToggler.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll functionality
    document.querySelectorAll('a.js-scroll-trigger').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu after click
            if (window.innerWidth <= 992 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Language switching functionality
    const translations = {
        en: {
            title: "Blog",
            logo: "Blog",
            home: "Home",
            blog: "Blog",
            about: "About",
            latestPosts: "Latest Posts",
            post1Title: "Google's Gemini 1.5 Pro Surpasses OpenAI and Anthropic in Generative AI Benchmark",
            post1Description: "Google's experimental Gemini 1.5 Pro model has surpassed OpenAI's GPT-4o and Anthropic's Claude-3 ...",
            post2Title: "The Future of Legal Services with Generative AI",
            post2Description: "In economics, the Jevons paradox (/ˈdʒɛvənz/; sometimes Jevons effect) occurs when...",
            post3Title: "Real-life educational experiences in the virtual world with Siemens’ digital twins",
            post3Description: "Incorporating real-world experiences into engineering education is...",
            post4Title: "Grammarly's AI Revolution: Redefining Writing in the Digital Age - But Is It True?",
            post4Description: "In the 1990s tools like Microsoft Word's spell check (1980s) and grammar check...",
            post5Title: "Gandhian Engineering : Creating More From Less For More",
            post5Description: "Gandhian Engineering, inspired by Mahatma Gandhi’s principles...",
            post6Title: "Data Science in Criminal Justice: Balancing Fairness and Accuracy",
            post6Description: "I just read an insightful paper on fairness in criminal justice ...",
            post7Title: "Empower Your Coding Experience with GitHub Copilot Chat",
            post7Description: "GitHub Copilot Chat beta is now available for all GitHub Copilot...",
            post8Title: "Quantum Computing Unveiled: Beyond Bits and Into the Future",
            post8Description: "Quantum computing is a cutting-edge technology that harnesses the strange...",
            post9Title: "WhatsApp Beta Hints at Cross-Platform Interoperability!",
            post9Description: "WhatsApp for Android beta users got a sneak peek into what could be a game-change...",
            post10Title: "Cybercrime to cost Germany 206 billion euros in 2023",
            post10Description: "In an increasingly interconnected world, the threats to our digital infrastructure are ...",
            post11Title: "Microsoft Mesh: Revolutionizing Collaboration in the Virtual World",
            post11Description: "In 2017, Microsoft acquired AltspaceVR, a mixed-reality platform centered around avatars for...",
            post12Title: "From ELIZA to Google Bard: Tracing the Evolution of Conversational AI and Large Language Models",
            post12Description: "ELIZA developed by Joseph Weizenbaum at the Massachusetts Institute of Technology (MIT) ...",
            post13Title: "Discovering Siemens Healthineers' Digital Patient Twin",
            post13Description: "Imagine a digital copy of a patient, like a digital twin capturing everything about their ...",
            post14Title: "Microsoft's Kinect - From Gaming to Enterprise",
            post14Description: "Microsoft's Kinect (1st launched in 2010) was a futuristic device that used infrared...",
            readMore: "Read More",
            footer: "Made with 💙 by Raj Sinha"
        },
        de: {
            title: "Blog",
            logo: "Blog",
            home: "Startseite",
            blog: "Blog",
            about: "Über",
            latestPosts: "Neueste Beiträge",
            post1Title: "Googles Gemini 1.5 Pro übertrifft OpenAI und Anthropic im Generative AI Benchmark",
            post1Description: "Googles experimentelles Gemini 1.5 Pro Modell hat OpenAIs GPT-4o und Anthropic's Claude-3 übertroffen ...",
            post2Title: "Die Zukunft der Rechtsdienstleistungen mit generativer KI",
            post2Description: "In der Wirtschaft tritt das Jevons-Paradoxon (/ˈdʒɛvənz/; manchmal Jevons-Effekt) auf, wenn...",
            post3Title: "Realitätsnahe Bildungserfahrungen in der virtuellen Welt mit den digitalen Zwillingen von Siemens",
            post3Description: "Die Integration von realen Erfahrungen in die Ingenieurausbildung ist...",
            post4Title: "Grammarlys KI-Revolution: Neudefinition des Schreibens im digitalen Zeitalter - Aber stimmt das wirklich?",
            post4Description: "In den 1990er Jahren kamen Tools wie die Rechtschreibprüfung (1980er) und die Grammatikprüfung von Microsoft Word auf...",
            post5Title: "Gandhian Engineering: Mit Weniger Mehr für Mehr schaffen",
            post5Description: "Gandhian Engineering, inspiriert von Mahatma Gandhis Prinzipien...",
            post6Title: "Data Science in der Strafjustiz: Fairness und Genauigkeit in Einklang bringen",
            post6Description: "Ich habe gerade eine aufschlussreiche Arbeit über Fairness in der Strafjustiz gelesen...",
            post7Title: "Verbessern Sie Ihr Programmiererlebnis mit GitHub Copilot Chat",
            post7Description: "GitHub Copilot Chat Beta ist jetzt für alle GitHub Copilot verfügbar...",
            post8Title: "Quantum Computing enthüllt: Jenseits von Bits und hinein in die Zukunft",
            post8Description: "Quantum Computing ist eine Spitzentechnologie, die das Seltsame nutzt...",
            post9Title: "WhatsApp Beta deutet auf plattformübergreifende Interoperabilität hin!",
            post9Description: "WhatsApp für Android Beta-Nutzer erhielten einen Einblick in das, was ein Game-Change sein könnte...",
            post10Title: "Cyberkriminalität wird Deutschland im Jahr 2023 206 Milliarden Euro kosten",
            post10Description: "In einer zunehmend vernetzten Welt sind die Bedrohungen für unsere digitale Infrastruktur...",
            post11Title: "Microsoft Mesh: Revolutionierung der Zusammenarbeit in der virtuellen Welt",
            post11Description: "Im Jahr 2017 erwarb Microsoft AltspaceVR, eine Mixed-Reality-Plattform, die sich um Avatare dreht...",
            post12Title: "Von ELIZA zu Google Bard: Die Entwicklung von Conversational AI und Large Language Models verfolgen",
            post12Description: "ELIZA wurde von Joseph Weizenbaum am Massachusetts Institute of Technology (MIT) entwickelt...",
            post13Title: "Den digitalen Patientenzwilling von Siemens Healthineers entdecken",
            post13Description: "Stellen Sie sich eine digitale Kopie eines Patienten vor, wie einen digitalen Zwilling, der alles über ihre...",
            post14Title: "Microsofts Kinect - Vom Gaming zum Unternehmen",
            post14Description: "Microsofts Kinect (erstmals 2010 auf den Markt gebracht) war ein futuristisches Gerät, das Infrarot verwendete...",
            readMore: "Weiterlesen",
            footer: "Gemacht mit 💙 von Raj Sinha"
        }
    };


    const languageSelect = document.getElementById('languageSelect');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;
        localStorage.setItem('preferredLang', lang);
    }

    // Initialize language
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    languageSelect.value = savedLang;
    updateLanguage(savedLang);

    // Language selector change handler
    languageSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

     // Blog posts data (IDs correspond to translation keys)
     const blogPostsData = [
            { id: "post1", date: "March 15, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_ai-machinelearning-google-activity-7227331350318465025-GH0-?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" },
            { id: "post2", date: "February 28, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_legaltech-generativeai-jevonsparadox-activity-7227327619136987136-q4uB?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"},
            { id: "post3", date: "March 15, 2023",link: "https://www.linkedin.com/posts/raj-sinha-bit_airevolution-digitaltwins-engineeringeducation-activity-7225742262289219584-XfaJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" },
            { id: "post4",  date: "February 28, 2023",link: "https://www.linkedin.com/posts/raj-sinha-bit_grammarly-ai-grammarly-activity-7224775924343275520-L2MO?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" },
            { id: "post5",  date: "March 15, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_gandhianengineering-sustainability-innovation-activity-7223703868302364674-EYC8?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"},
            { id: "post6",  date: "February 28, 2023",link: "https://www.linkedin.com/posts/raj-sinha-bit_2017-10-berkfairnesscrimjustriskpdf-activity-7223372787053170691-M9Vg?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" },
            { id: "post7", date: "March 15, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_visualstudio-visualstudiocode-githubcopilot-activity-7110598849743708160-TQ8p?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"},
            { id: "post8",  date: "February 28, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_quantumcomputing-futuretech-innovation-activity-7110217495218647041-VbmO?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"}
            ,
            { id: "post9",  date: "February 28, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_whatsapp-signal-whatsapp-activity-7106739502991187968-IaLm?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"},
            { id: "post10",  date: "March 15, 2023",link: "https://www.linkedin.com/posts/raj-sinha-bit_cybercrime-to-cost-germany-206-billion-euros-activity-7104542565827256321-mh51?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" },
            { id: "post11",  date: "February 28, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_microsoftmesh-mixedreality-futureofwork-activity-7100835778426990592-EEBV?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"},
            { id: "post12",  date: "March 15, 2023",link: "https://www.linkedin.com/posts/raj-sinha-bit_artificialintelligence-aievolution-googlebard-activity-7100210466362118144-tDyX?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" },
            { id: "post13", date: "February 28, 2023", link: "https://www.linkedin.com/posts/raj-sinha-bit_digitaltwin-ai-healthcareinnovation-activity-7099050957237297152-5GhJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM"},
            { id: "post14", date: "March 15, 2023",link: "https://www.linkedin.com/posts/raj-sinha-bit_work-artificialintelligence-health-activity-7058781206284234752-MISd?utm_source=share&utm_medium=member_desktop&rcm=ACoAACH0jgYBqjDdhzkq4_KHm7gzAAcM7_Gr7gM" }
        ];

       // Pagination functionality
       const blogGrid = document.querySelector('.blog-grid');
       const postsPerPage = 9;
       let currentPage = 1;

       function generateBlogCards(lang, posts) {
           return posts.map(post => `
               <article class="blog-card">
                   <img src="${post.img}" alt="${translations[lang][post.id + 'Title']}">
                   <div class="card-content">
                       <span class="card-date">${post.date}</span>
                       <h2 data-i18n="${post.id + 'Title'}">${translations[lang][post.id + 'Title']}</h2>
                       <p data-i18n="${post.id + 'Description'}">${translations[lang][post.id + 'Description']}</p>
                       <a href="${post.link}" class="read-more" data-i18n="readMore" target="_blank" rel="noopener noreferrer">${translations[lang].readMore}</a>
                   </div>
               </article>
           `).join('');
       }

       function displayPosts(page) {
           const startIndex = (page - 1) * postsPerPage;
           const endIndex = startIndex + postsPerPage;
           const currentPosts = blogPostsData.slice(startIndex, endIndex);
           blogGrid.innerHTML = generateBlogCards(localStorage.getItem('preferredLang') || 'en', currentPosts);
       }

       function updatePaginationButtons() {
           const totalPages = Math.ceil(blogPostsData.length / postsPerPage);
           let paginationHTML = '';

           for (let i = 1; i <= totalPages; i++) {
               paginationHTML += `<a href="#" class="page-link ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</a>`;
           }

           const paginationContainer = document.querySelector('.pagination');
           if (paginationContainer) {
               paginationContainer.innerHTML = paginationHTML;
           }
       }

       function setupPagination() {
           const paginationContainer = document.createElement('div');
           paginationContainer.classList.add('pagination');
           blogGrid.parentNode.insertBefore(paginationContainer, blogGrid.nextSibling);

           paginationContainer.addEventListener('click', function (e) {
               if (e.target.classList.contains('page-link')) {
                   e.preventDefault();
                   currentPage = parseInt(e.target.dataset.page);
                   displayPosts(currentPage);
                   updatePaginationButtons();
                   updateLanguage(localStorage.getItem('preferredLang') || 'en');  // Keep translations updated
               }
           });
       }

       // Initialization
       const latestPostsHeader = document.querySelector('.blog-header h1');
       if (latestPostsHeader) {
           latestPostsHeader.textContent = translations[savedLang].pageUnderConstruction;
       }
       setupPagination();
       displayPosts(currentPage);
       updatePaginationButtons();
        // Close mobile menu when clicking outside
       document.addEventListener('click', function (e) {
           if (window.innerWidth <= 992 &&
               !navbarToggler.contains(e.target) &&
               !navLinks.contains(e.target) &&
               e.target !== navbarToggler) {  // Also check the toggler itself
               navLinks.classList.remove('active');
           }
       });
   });