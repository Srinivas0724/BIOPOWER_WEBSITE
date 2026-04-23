/* ==========================================
   BIO POWER - Main JavaScript
   Animations & Interactions
   ========================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // Initialize AOS (Animate On Scroll)
    // ==========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100,
            delay: 100
        });
    }



    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ==========================================
    // Smooth Scroll for Navigation Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Ignore plain "#" links (no target)
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Animated Counter for Statistics
    // ==========================================
    const counters = document.querySelectorAll('.counter');
    const counterSpeed = 200;

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / counterSpeed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => animateCounter(counter), 20);
        } else {
            counter.innerText = target;
        }
    };

    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => counterObserver.observe(counter));
    }

    // ==========================================
    // Products Swiper Slider
    // FIX: Wrapped in typeof check so it doesn't
    // crash on product pages that don't load Swiper
    // ==========================================
    if (typeof Swiper !== 'undefined') {
        const productsSwiperEl = document.querySelector('.products-swiper');
        if (productsSwiperEl) {
            const wrapper = productsSwiperEl.querySelector('.swiper-wrapper');
            if (wrapper) {
                const slides = wrapper.querySelectorAll('.swiper-slide');
                if (slides.length > 0 && slides.length <= 4) {
                    slides.forEach(slide => wrapper.appendChild(slide.cloneNode(true)));
                }
            }

            new Swiper('.products-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                    1200: { slidesPerView: 4 },
                },
            });
        }

        const testimonialSwiperEl = document.querySelector('.testimonial-swiper');
        if (testimonialSwiperEl) {
            const wrapper = testimonialSwiperEl.querySelector('.swiper-wrapper');
            if (wrapper) {
                const slides = wrapper.querySelectorAll('.swiper-slide');
                if (slides.length > 0 && slides.length <= 2) {
                    slides.forEach(slide => wrapper.appendChild(slide.cloneNode(true)));
                }
            }

            new Swiper('.testimonial-swiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                effect: 'fade',
                fadeEffect: { crossFade: true },
            });
        }
    }

    // ==========================================
    // Back to Top Button
    // FIX: Added null check so product pages
    // without .back-to-top don't crash all JS
    // ==========================================
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ==========================================
    // Hero Text Animation
    // ==========================================
    const heroLines = document.querySelectorAll('.hero-title .line');

    heroLines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.transform = 'translateY(50px)';

        setTimeout(() => {
            line.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, 600 + (index * 150));
    });

    // ==========================================
    // Parallax Effect for Hero Video
    // ==========================================
    const heroVideo = document.querySelector('.hero-video');

    if (heroVideo) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }

    // ==========================================
    // Section Reveal Animation
    // ==========================================
    const revealSections = document.querySelectorAll('section');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { threshold: 0.1 });

    revealSections.forEach(section => revealObserver.observe(section));

    // ==========================================
    // Process Steps Animation
    // ==========================================
    const processSteps = document.querySelectorAll('.process-step');

    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';

        setTimeout(() => {
            step.style.transition = 'all 0.6s ease';
            step.style.opacity = '1';
            step.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // ==========================================
    // Benefit Cards Hover Effect
    // ==========================================
    const benefitCards = document.querySelectorAll('.benefit-card');

    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-10px)'; });
        card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0)'; });
    });

    // ==========================================
    // Product Cards Hover Effect
    // ==========================================
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => { card.style.transform = 'translateY(-10px) scale(1.02)'; });
        card.addEventListener('mouseleave', () => { card.style.transform = 'translateY(0) scale(1)'; });
    });

    // ==========================================
    // Feature Items Stagger Animation
    // ==========================================
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 800 + (index * 150));
    });

    // ==========================================
    // Stat Items Line Animation
    // ==========================================
    const statItems = document.querySelectorAll('.stat-item');

    statItems.forEach((item, index) => {
        const line = item.querySelector('.stat-line');
        if (line) {
            setTimeout(() => {
                line.style.transform = 'scaleX(1)';
            }, 1000 + (index * 200));
        }
    });

    // ==========================================
    // Navigation Active State
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // Hamburger Menu Toggle (Mobile)
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a nav link is clicked on mobile
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // ==========================================
    // Preloader Logic
    // ==========================================
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
                preloader.classList.add('hidden');
                setTimeout(() => { preloader.style.display = 'none'; }, 500);
            }, 1000);
        }
    });

    // Failsafe to hide preloader after 5 seconds no matter what
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader && !preloader.classList.contains('hidden')) {
            preloader.style.display = 'none';
        }
    }, 5000);

    // ==========================================
    // FAQ Accordion Interaction
    // ==========================================
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            // Close all other open items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // ==========================================
    // Contact Form Submission
    // ==========================================
    const contactForm = document.getElementById('contactInquiryForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const btn = this.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span>Sending...</span>';
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert('Thank you! Your inquiry has been sent to the BIOPOWER expert team.');
                btn.innerHTML = originalText;
                btn.style.opacity = '1';
                contactForm.reset();
            }, 1500);
        });
    }

    console.log('🚀 BIO POWER Scripts Loaded Successfully!');

}); 