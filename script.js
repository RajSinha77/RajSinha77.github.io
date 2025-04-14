document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu functionality
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function () {
            navbarCollapse.classList.toggle('show');
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
            if (window.innerWidth <= 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Language switching functionality
    const translations = {
        en: {
            title: " Blog",
            logo: "Blog",
            home: "Home",
            blog: "Blog",
            about: "About",
            latestPosts: "Latest Posts",
            post1Title: "Optimizing Hyperparameters in Production ML Systems",
            post1Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post2Title: "Time Series Forecasting with Transformers",
            post2Description: "Implementing transformer architectures for multivariate time series prediction...",
            post3Title: "Optimizing Hyperparameters in Production ML Systems",
            post3Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post4Title: "Time Series Forecasting with Transformers",
            post4Description: "Implementing transformer architectures for multivariate time series prediction...",
            post5Title: "Optimizing Hyperparameters in Production ML Systems",
            post5Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post6Title: "Time Series Forecasting with Transformers",
            post6Description: "Implementing transformer architectures for multivariate time series prediction...",
            post7Title: "Optimizing Hyperparameters in Production ML Systems",
            post7Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post8Title: "Time Series Forecasting with Transformers",
            post8Description: "Implementing transformer architectures for multivariate time series prediction...",
            post9Title: "Optimizing Hyperparameters in Production ML Systems",
            post9Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post10Title: "Time Series Forecasting with Transformers",
            post10Description: "Implementing transformer architectures for multivariate time series prediction...",
            post11Title: "Optimizing Hyperparameters in Production ML Systems",
            post11Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post12Title: "Time Series Forecasting with Transformers",
            post12Description: "Implementing transformer architectures for multivariate time series prediction...",
            post13Title: "Optimizing Hyperparameters in Production ML Systems",
            post13Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post14Title: "Time Series Forecasting with Transformers",
            post14Description: "Implementing transformer architectures for multivariate time series prediction...",
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
            post1Title: "Optimierung von Hyperparametern in Produktions-ML-Systemen",
            post1Description: "Best Practices für die Hyperparameter-Optimierung in Unternehmens-ML-Pipelines...",
            post2Title: "Zeitreihenvorhersage mit Transformern",
            post2Description: "Implementierung von Transformer-Architekturen für multivariate Zeitreihenvorhersagen...",
            post3Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post4Title: "Time Series Forecasting with Transformers",
            post4Description: "Implementing transformer architectures for multivariate time series prediction...",
            post5Title: "Optimizing Hyperparameters in Production ML Systems",
            post5Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post6Title: "Time Series Forecasting with Transformers",
            post6Description: "Implementing transformer architectures for multivariate time series prediction...",
            post7Title: "Optimizing Hyperparameters in Production ML Systems",
            post7Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post8Title: "Zeitreihenvorhersage mit Transformern",
            post8Description: "Implementing transformer architectures for multivariate time series prediction...",
            post9Title: "Optimizing Hyperparameters in Production ML Systems",
            post9Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post10Title: "Time Series Forecasting with Transformers",
            post10Description: "Implementing transformer architectures for multivariate time series prediction...",
            post11Title: "Optimizing Hyperparameters in Production ML Systems",
            post11Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post12Title: "Time Series Forecasting with Transformers",
            post12Description: "Implementing transformer architectures for multivariate time series prediction...",
            post13Title: "Optimizing Hyperparameters in Production ML Systems",
            post13Description: "Best practices for hyperparameter tuning in enterprise machine learning pipelines...",
            post14Title: "Time Series Forecasting with Transformers",
            post14Description: "Implementing transformer architectures for multivariate time series prediction...",
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
            { id: "post1", img: "blog1.jpg", date: "March 15, 2023" },
            { id: "post2", img: "blog2.jpg", date: "February 28, 2023" },
            { id: "post3", img: "blog1.jpg", date: "March 15, 2023" },
            { id: "post4", img: "blog2.jpg", date: "February 28, 2023" },
            { id: "post5", img: "blog1.jpg", date: "March 15, 2023" },
            { id: "post6", img: "blog2.jpg", date: "February 28, 2023" },
            { id: "post7", img: "blog1.jpg", date: "March 15, 2023" },
            { id: "post8", img: "blog2.jpg", date: "February 28, 2023" }
            ,
            { id: "post9", img: "blog2.jpg", date: "February 28, 2023" },
            { id: "post10", img: "blog1.jpg", date: "March 15, 2023" },
            { id: "post11", img: "blog2.jpg", date: "February 28, 2023" },
            { id: "post12", img: "blog1.jpg", date: "March 15, 2023" },
            { id: "post13", img: "blog2.jpg", date: "February 28, 2023" },
            { id: "post14", img: "blog1.jpg", date: "March 15, 2023" }
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
                        <a href="#" class="read-more" data-i18n="readMore">${translations[lang].readMore}</a>
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
        setupPagination();
        displayPosts(currentPage);
        updatePaginationButtons();
         // Close mobile menu when clicking outside
         document.addEventListener('click', function (e) {
            if (window.innerWidth <= 992 && 
                !navbarToggler.contains(e.target) && 
                !navbarCollapse.contains(e.target)) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
