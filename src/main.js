import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Top Bar -->
  <div class="top-strip bg-primary-green text-white">
    <div class="container-main top-strip-inner flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-accent-gold">✦</span>
        <span>In collaboration with <strong>Government of Bihar</strong> | बिहार सरकार के सहयोग से</span>
      </div>
      <div class="hidden md:flex items-center gap-1 text-cream/80 hover:text-white cursor-pointer transition-colors">
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
        <span>En translate a language</span>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="bg-cream sticky top-0 z-50 border-b border-border shadow-sm" id="navbar">
    <div class="container-main flex items-center justify-between h-16">
      <div class="flex items-center gap-2">
        <a href="#" class="flex items-center gap-2">
          <img src="/images/icon.svg" alt="Bihar Discovery" class="w-8 h-8 rounded-full object-cover" />
          <span class="font-heading text-xl font-normal text-primary-green leading-none">Bihar Discovery</span>
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-7">
        <div class="mega-nav-item">
          <a href="#" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Faith Journeys</a>
          <div class="faith-mega-menu">
            <a href="#" class="faith-mega-card">
              <img src="/images/sites/budh.webp" alt="Buddhist Pilgrimage Sites" />
              <span>Buddhist<br>Pilgrimage Sites</span>
            </a>
            <a href="#" class="faith-mega-card">
              <img src="/images/sites/hindu.webp" alt="Hindu Pilgrimage Sites" />
              <span>Hindu<br>Pilgrimage Sites</span>
            </a>
            <a href="#" class="faith-mega-card">
              <img src="/images/sites/jain-sites.webp" alt="Jain Pilgrimage Sites" />
              <span>Jain<br>Pilgrimage Sites</span>
            </a>
            <a href="#" class="faith-mega-card">
              <img src="/images/sites/Sikh-Pilgrimage-Sites.webp" alt="Sikh Pilgrimage Sites" />
              <span>Sikh<br>Pilgrimage Sites</span>
            </a>
          </div>
        </div>
        <a href="#" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Heritage</a>
        <a href="#" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Find Your Roots</a>
        <a href="#" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Experiences</a>
        <a href="#" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Travel Support</a>
        <a href="#" class="btn-saffron text-xs px-5 py-2.5 rounded">Plan Your Bihar Journey</a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="lg:hidden flex flex-col gap-1.5 p-2" id="mobileMenuBtn">
        <span class="w-6 h-0.5 bg-primary-green transition-all duration-300" id="menuLine1"></span>
        <span class="w-6 h-0.5 bg-primary-green transition-all duration-300" id="menuLine2"></span>
        <span class="w-6 h-0.5 bg-primary-green transition-all duration-300" id="menuLine3"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="lg:hidden max-h-0 overflow-hidden transition-all duration-300" id="mobileMenu">
      <div class="container-main py-4 bg-cream border-t border-border space-y-3">
        <a href="#" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Faith Journeys</a>
        <a href="#" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Heritage</a>
        <a href="#" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Find Your Roots</a>
        <a href="#" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Experiences</a>
        <a href="#" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Travel Support</a>
        <a href="#" class="btn-saffron w-full text-center text-xs py-2.5 rounded mt-2">Plan Your Bihar Journey</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <div class="relative min-h-[480px] md:min-h-[540px] lg:min-h-[580px]">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img src="/images/herobg.png" 
             alt="Bihar Temple Architecture" 
             class="w-full h-full object-cover" />
      </div>
      
      <!-- Hero Content -->
      <div class="relative container-main py-16 md:py-24 lg:py-28 flex items-center min-h-[480px] md:min-h-[540px]">
        <div class="max-w-xl hero-copy">
          <h1 class="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-primary-green mb-4 leading-tight">
            Many faiths.<br>
            One timeless Bihar.
          </h1>
          <p class="text-text-body text-sm md:text-base mb-7 max-w-md leading-relaxed">
            Discover sacred journeys, ancient heritage, living traditions and the stories that connect you to your roots.
          </p>
          <div class="hero-actions flex flex-wrap gap-3">
            <a href="#" class="btn-saffron rounded px-5 py-2.5 text-sm">Explore Faith Journeys</a>
            <a href="#" class="btn-outline rounded px-5 py-2.5 text-sm">Find Your Roots</a>
          </div>
          <div class="hero-badges">
            <div class="hero-badge">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              <span>Verified Local Guides</span>
            </div>
            <div class="hero-badge">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>24×7 Travel Assistance</span>
            </div>
            <div class="hero-badge">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>Subsidy/Eligibility Guidance</span>
            </div>
            <div class="hero-badge">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
              <span>Transparent Packages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Choose your spiritual journey -->
  <section class="pilgrimage-section bg-cream-light">
    <div class="container-main">
      <div class="text-center pilgrimage-heading">
        <div class="pilgrimage-title-row">
          <span></span>
          <h2 class="font-heading text-3xl md:text-4xl text-primary-green">Choose your spiritual journey</h2>
          <span></span>
        </div>
        <p>Thoughtfully planned pilgrimages across Bihar's diverse faith traditions.</p>
      </div>

      <div class="pilgrimage-grid">
        <!-- Buddhist -->
        <div class="pilgrimage-card pilgrimage-buddhist">
          <div class="pilgrimage-card-head">
            <h3>Buddhist<br>Pilgrimage Sites</h3>
          </div>
          <div class="pilgrimage-image">
            <img src="/images/sites/budh.webp" alt="Buddhist Pilgrimage Sites" />
          </div>
          <span class="journey-pill">6-10 Day Journeys</span>
          <p>Both Gaya, Rajgir, Nalanda, Vaishali</p>
          <a href="#" class="pilgrimage-button">Explore packages</a>
        </div>

        <!-- Hindu -->
        <div class="pilgrimage-card pilgrimage-hindu">
          <div class="pilgrimage-card-head">
            <h3>Hindu<br>Pilgrimage Sites</h3>
          </div>
          <div class="pilgrimage-image">
            <img src="/images/sites/hindu.webp" alt="Hindu Pilgrimage Sites" />
          </div>
          <span class="journey-pill">6-10 Day Journeys</span>
          <p>Gaya Ji, Sitamarhi, Patna and Ramayan Circuit</p>
          <a href="#" class="pilgrimage-button">Explore packages</a>
        </div>

        <!-- Jain -->
        <div class="pilgrimage-card pilgrimage-jain">
          <div class="pilgrimage-card-head">
            <h3>Jain<br>Pilgrimage Sites</h3>
          </div>
          <div class="pilgrimage-image">
            <img src="/images/sites/jain-sites.webp" alt="Jain Pilgrimage Sites" />
          </div>
          <span class="journey-pill">6-10 Day Journeys</span>
          <p>Pawapuri, Rajgir and associated sacred heritage</p>
          <a href="#" class="pilgrimage-button">Explore packages</a>
        </div>

        <!-- Sikh -->
        <div class="pilgrimage-card pilgrimage-sikh">
          <div class="pilgrimage-card-head">
            <h3>Sikh<br>Pilgrimage Sites</h3>
          </div>
          <div class="pilgrimage-image">
            <img src="/images/sites/Sikh-Pilgrimage-Sites.webp" alt="Sikh Pilgrimage Sites" />
          </div>
          <span class="journey-pill">6-10 Day Journeys</span>
          <p>Takhat Sri Patna Sahib and Sikh Circuit</p>
          <a href="#" class="pilgrimage-button">Explore packages</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Beyond pilgrimage, discover a civilisation -->
  <section class="heritage-section bg-cream-light">
    <div class="container-main">
      <div class="text-center heritage-heading">
        <h2 class="font-heading text-3xl md:text-4xl text-primary-green">Beyond pilgrimage, discover a civilisation.</h2>
      </div>

      <div class="heritage-showcase">
        <div class="heritage-card heritage-card-feature">
          <img src="/images/Nalanda-Ancient-Learning.png" alt="Nalanda & Ancient Learning" />
          <div class="heritage-label">
            <p>Nalanda &<br>Ancient Learning</p>
          </div>
        </div>
        <div class="heritage-card heritage-card-feature">
          <img src="/images/Mithila-Art-Culture.png" alt="Mithila Art & Culture" />
          <div class="heritage-label">
            <p>Mithila Art &<br>Culture</p>
          </div>
        </div>
        <div class="heritage-card heritage-card-feature">
          <img src="/images/Magadha-Heritage.png" alt="Magadha Heritage" />
          <div class="heritage-label">
            <p>Magadha<br>Heritage</p>
          </div>
        </div>
        <div class="heritage-card heritage-card-feature">
          <img src="/images/Patna-Museums.png" alt="Patna Museums & Riverfront" />
          <div class="heritage-label">
            <p>Patna Museums &<br>Riverfront</p>
          </div>
        </div>
        <div class="heritage-card heritage-card-feature">
          <img src="/images/eco-nature.png" alt="Eco & Nature" />
          <div class="heritage-label">
            <p>Eco &<br>Nature</p>
          </div>
        </div>
        <div class="heritage-card heritage-card-feature">
          <img src="/images/Cuisine-Crafts.png" alt="Cuisine & Crafts" />
          <div class="heritage-label">
            <p>Cuisine &<br>Crafts</p>
          </div>
        </div>
      </div>

      <div class="text-center heritage-button">
        <a href="#" class="btn-primary rounded px-6 py-2.5">Explore Bihar Heritage</a>
      </div>
    </div>
  </section>

  <!-- 24×7 Travel Assistance Banner -->
  <section class="assistance-section bg-white">
    <div class="container-main">
      <div class="assistance-panel">
        <div class="assistance-split">
          <div class="assistance-left">
            <svg class="assistance-main-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M18 10a6 6 0 10-12 0v3a3 3 0 003 3h1m8-6v4a4 4 0 01-4 4h-2m6-8h1a2 2 0 012 2v1a2 2 0 01-2 2h-1M6 10H5a2 2 0 00-2 2v1a2 2 0 002 2h1"/></svg>
            <div class="assistance-copy">
              <h3>24×7 Bihar Travel Assistance</h3>
              <p>Help before, during and after your journey.</p>
              <div class="assistance-actions">
                <a href="#">Call support</a>
                <a href="#">Chat with us</a>
              </div>
            </div>
          </div>

          <div class="assistance-right">
            <svg class="benefit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M6 2.75h8l4 4v14.5H6zM14 2.75V7h4M8.5 10h4.5M8.5 13h3M15.5 12.5a3.75 3.75 0 110 7.5 3.75 3.75 0 010-7.5zm-1.1 5.2l2.2-3.4m-2.05.2h.01m1.98 3h.01"/></svg>
            <div class="benefit-copy">
              <h3>Travel Benefits & Subsidy Guidance</h3>
              <p>Check eligibility under applicable<br>government tourism schemes</p>
              <div class="benefit-steps">
                <span>View scheme</span>
                <b>→</b>
                <span>Check eligibility</span>
                <b>→</b>
                <span>Submit required details</span>
              </div>
              <a href="#" class="eligibility-btn">Check eligibility</a>
            </div>
          </div>
        </div>
        <div class="assistance-note">
          <span>i</span>
          <p>Benefits and subsidies are subject to current scheme rules, eligibility, budget availability and official approval.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How it works -->
  <section class="how-section bg-white">
    <div class="container-main">
      <div class="text-center how-heading">
        <h2>How it works</h2>
      </div>

      <div class="how-timeline">
        <div class="timeline-step">
          <div class="timeline-icon">
            <svg class="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          </div>
          <p>Choose a circuit</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon">
            <svg class="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
          </div>
          <p>Customise<br>your package</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon">
            <svg class="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <p>Select<br>verified guide</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon">
            <svg class="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
          </div>
          <p>Check<br>benefits</p>
        </div>
        <div class="timeline-step">
          <div class="timeline-icon">
            <svg class="w-6 h-6 text-primary-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <p>Travel with<br>support</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Diverse faiths. Shared heritage. Stronger local communities. -->
  <section class="community-section">
    <div class="container-main">
      <div class="community-panel">
        <h2>Diverse faiths. Shared heritage. Stronger local communities.</h2>
        <div class="community-grid">
          <div class="community-item">
            <img src="/images/Longer-Stays.svg" alt="" />
            <div>
              <h4>Longer Stays</h4>
              <p>Well-planned journeys encourage longer stays and meaningful experiences across Bihar.</p>
            </div>
          </div>
          <div class="community-item">
            <img src="/images/Local-Livelihood.svg" alt="" />
            <div>
              <h4>Local Livelihoods</h4>
              <p>Tourism supports artisans, homestays, transport providers and local entrepreneurs.</p>
            </div>
          </div>
          <div class="community-item">
            <img src="/images/Accessible-Travel.svg" alt="" />
            <div>
              <h4>Accessible Travel</h4>
              <p>Inclusive facilities and information help travellers of all ages and abilities explore Bihar.</p>
            </div>
          </div>
          <div class="community-item">
            <img src="/images/Responsible-Tourism.svg" alt="" />
            <div>
              <h4>Responsible Tourism</h4>
              <p>We protect heritage, nature and culture for future generations through mindful travel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials, Help & FAQ -->
  <section class="support-faq-section">
    <div class="container-main">
      <div class="support-cards">
        <div class="trust-card">
          <div class="trust-image"></div>
          <div class="trust-content">
            <h2>Trusted by families across India</h2>
            <div class="quote-row">
              <span>“</span>
              <p id="testimonialQuote">Our experience in Gaya Ji was peaceful and well-organised. The guidance was respectful, the arrangements were smooth, and we felt completely supported throughout our journey.</p>
            </div>
            <p class="quote-author" id="testimonialAuthor">— The Sharma Family, Delhi</p>
            <div class="trust-dots" id="testimonialDots">
              <button class="active" aria-label="Show testimonial 1"></button>
              <button aria-label="Show testimonial 2"></button>
              <button aria-label="Show testimonial 3"></button>
              <button aria-label="Show testimonial 4"></button>
            </div>
          </div>
        </div>

        <div class="help-card">
          <div class="help-icon">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M18 10a6 6 0 10-12 0v3a3 3 0 003 3h1m8-6v4a4 4 0 01-4 4h-2m6-8h1a2 2 0 012 2v1a2 2 0 01-2 2h-1M6 10H5a2 2 0 00-2 2v1a2 2 0 002 2h1"/></svg>
          </div>
          <div>
            <h2>We're here to help</h2>
            <p class="help-label">Bihar Discovery Helpline</p>
            <div class="help-number">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" d="M3 5.5A2.5 2.5 0 015.5 3h2.1c.5 0 .95.32 1.12.8l1.02 2.9a1.4 1.4 0 01-.36 1.45L8.2 9.33a12.2 12.2 0 005.47 5.47l1.18-1.18a1.4 1.4 0 011.45-.36l2.9 1.02c.48.17.8.62.8 1.12v2.1A2.5 2.5 0 0117.5 20h-.75C9.16 20 3 13.84 3 6.25V5.5z"/></svg>
              <strong>1800-120-2023</strong>
            </div>
            <div class="help-meta">
              <span>(Toll-free)</span>
              <span>|</span>
              <span>7:00 AM - 9:00 PM</span>
            </div>
            <p class="help-email">Email: <a href="mailto:support@bihardiscovery.in">support@bihardiscovery.in</a></p>
          </div>
        </div>
      </div>

      <div class="faq-panel">
        <div class="faq-heading-row">
          <span></span>
          <h2>Frequently asked questions</h2>
          <span></span>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>Which religious pilgrimage packages are available?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>We offer thoughtfully planned journeys covering Bihar's major <strong>Buddhist, Hindu, Jain and Sikh pilgrimage sites</strong>. Packages can be customised according to duration, family size, budget, language, accessibility and preferred destinations.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>What is the "Find Your Roots" service?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>"Find Your Roots" helps travellers explore their ancestral district, village, family traditions and cultural connections in Bihar. Our research coordinators assist using the information and available records provided by you. Historical or genealogical results cannot be guaranteed.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>Do you provide local guides and travel coordinators?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. Travellers can select verified local guides and journey coordinators based on their language, destination expertise and availability. Guide profiles, experience, service scope and charges are displayed before booking.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>Is 24×7 travel assistance available?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. Our travel-assistance team supports guests before, during and after their journey. Support includes itinerary guidance, booking assistance, transport coordination, emergencies, service complaints and unexpected changes.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>Are government subsidies or travel benefits available?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>Eligibility depends on the applicable government scheme, traveller category, documentation, available budget and official approval. We help travellers identify relevant schemes and understand the application process, but benefits or subsidies cannot be guaranteed.</p>
            </div>
          </div>
        </div>
        <p class="faq-help-text">Need more help? <a href="#">Contact our helpline</a> or email us anytime.</p>
      </div>
    </div>
  </section>

  <!-- Footer CTA -->
  <section class="top-footer-cta">
    <div class="container-main text-center">
      <h2>Plan a journey rooted in faith and care.</h2>
      <p>Let us help you plan a meaningful and hassle-free experience.</p>
      <a href="#" class="top-footer-button">Plan Your Journey</a>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-main">
      <div class="container-main">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo">
              <img src="/images/icon.svg" alt="Bihar Discovery" />
              <span>Bihar Discovery</span>
            </div>
            <p>Your trusted guide to Pind Daan and meaningful journeys across Bihar.</p>
            <div class="footer-socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
              <a href="#" aria-label="Twitter">x</a>
              <a href="#" aria-label="WhatsApp">wa</a>
            </div>
          </div>

          <div class="footer-column">
            <h4>Pind Daan Services</h4>
            <ul>
              <li><a href="#">Pind Daan Overview</a></li>
              <li><a href="#">Sacred Sites in Gaya</a></li>
              <li><a href="#">Rituals & Significance</a></li>
              <li><a href="#">Guidelines & Tips</a></li>
              <li><a href="#">Support Services</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Explore Bihar</h4>
            <ul>
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Things to Do</a></li>
              <li><a href="#">Festivals & Culture</a></li>
              <li><a href="#">Food & Heritage</a></li>
              <li><a href="#">Travel Inspiration</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#">Travel Advisory</a></li>
              <li><a href="#">How to Reach</a></li>
              <li><a href="#">Transport Guide</a></li>
              <li><a href="#">Accommodations</a></li>
              <li><a href="#">Blogs & Stories</a></li>
            </ul>
          </div>

          <div class="footer-column footer-contact">
            <h4>Contact & Grievance</h4>
            <ul>
              <li><strong>Bihar Discovery Helpline</strong></li>
              <li>1800-120-2023 (Toll-free)</li>
              <li>7:00 AM - 9:00 PM</li>
              <li><a href="mailto:support@bihardiscovery.in">support@bihardiscovery.in</a></li>
              <li><a href="#">Grievance Redressal</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms & Conditions</a>
            <span>|</span>
            <a href="#">Refund Policy</a>
            <span>|</span>
            <a href="#">Accessibility Statement</a>
            <span>|</span>
            <a href="#">Sitemap</a>
          </div>
          <p>© 2025 Bihar Tourism. All rights reserved.</p>
        </div>
      </div>
    </div>
    <div class="footer-disclaimer">
      <span></span>
      <p>Official government marks and partnership language subject to written authorization.</p>
      <span></span>
    </div>
  </footer>
`;

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuLine1 = document.getElementById('menuLine1');
const menuLine2 = document.getElementById('menuLine2');
const menuLine3 = document.getElementById('menuLine3');
let menuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    menuLine1.style.transform = 'rotate(45deg) translate(4px, 4px)';
    menuLine2.style.opacity = '0';
    menuLine3.style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    mobileMenu.style.maxHeight = '0';
    menuLine1.style.transform = 'none';
    menuLine2.style.opacity = '1';
    menuLine3.style.transform = 'none';
  }
});

// FAQ Toggle
window.toggleFaq = function(btn) {
  const answer = btn.nextElementSibling;
  const isActive = answer.classList.contains('active');
  
  document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('active'));
  document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('active'));
  
  if (!isActive) {
    answer.classList.add('active');
    btn.classList.add('active');
  }
};

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('shadow-md');
  }
});

// Traveller Stories Slider
(function initSlider() {
  const track = document.getElementById('storiesTrack');
  if (!track) return;
  const slides = track.querySelectorAll('.story-slide');
  const prevBtn = document.getElementById('sliderPrev');
  const nextBtn = document.getElementById('sliderNext');
  const dotsContainer = document.getElementById('sliderDots');
  
  let currentIndex = 0;
  let slidesPerView = 1;
  
  function updateSlidesPerView() {
    if (window.innerWidth >= 1024) {
      slidesPerView = 1; // In the left column, show 1 at a time
    } else {
      slidesPerView = 1;
    }
  }
  
  function getMaxIndex() {
    return Math.max(0, slides.length - slidesPerView);
  }
  
  function updateSlider() {
    const slideWidth = 100 / slidesPerView;
    track.style.transform = 'translateX(-' + (currentIndex * slideWidth) + '%)';
    updateDots();
  }
  
  function createDots() {
    dotsContainer.innerHTML = '';
    const totalDots = getMaxIndex() + 1;
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }
  
  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, i) => {
      dot.className = 'slider-dot' + (i === currentIndex ? ' active' : '');
    });
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : getMaxIndex();
    updateSlider();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
    updateSlider();
  });
  
  // Auto-play
  let autoPlay = setInterval(() => {
    currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
    updateSlider();
  }, 5000);
  
  const slider = document.getElementById('storiesSlider');
  slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
  slider.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
      currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
      updateSlider();
    }, 5000);
  });
  
  window.addEventListener('resize', () => {
    updateSlidesPerView();
    if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
    createDots();
    updateSlider();
  });
  
  updateSlidesPerView();
  createDots();
  updateSlider();
})();

// Testimonial Auto Slider
(function initTestimonials() {
  const quote = document.getElementById('testimonialQuote');
  const author = document.getElementById('testimonialAuthor');
  const dotsContainer = document.getElementById('testimonialDots');
  if (!quote || !author || !dotsContainer) return;

  const testimonials = [
    {
      quote: 'Our experience in Gaya Ji was peaceful and well-organised. The guidance was respectful, the arrangements were smooth, and we felt completely supported throughout our journey.',
      author: '— The Sharma Family, Delhi'
    },
    {
      quote: 'The team helped us plan every step with care. From arrival to ritual coordination, everything felt calm, clear and dependable.',
      author: '— Rajiv Mehta, Mumbai'
    },
    {
      quote: 'Our parents travelled comfortably and the local guide explained each tradition with patience. It became a meaningful family journey.',
      author: '— Ananya Sinha, Bengaluru'
    },
    {
      quote: 'We wanted a simple, respectful itinerary for Gaya Ji and nearby heritage sites. Bihar Discovery made the whole experience smooth.',
      author: '— Priya Verma, Kolkata'
    }
  ];

  const dots = Array.from(dotsContainer.querySelectorAll('button'));
  let current = 0;

  function showTestimonial(index) {
    current = index;
    quote.textContent = testimonials[current].quote;
    author.textContent = testimonials[current].author;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('active', dotIndex === current);
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  setInterval(() => {
    showTestimonial((current + 1) % testimonials.length);
  }, 4500);
})();

// Premium entrance animations
const observerOptions = {
  threshold: 0.14,
  rootMargin: '0px 0px -70px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const revealSelectors = [
  'section:not(:first-of-type)',
  '.pilgrimage-card',
  '.heritage-card',
  '.timeline-step',
  '.community-item',
  '.trust-card',
  '.help-card',
  '.faq-item',
  '.footer-column',
  '.footer-brand'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((element, index) => {
  element.classList.add('reveal-on-scroll');
  if (
    element.classList.contains('pilgrimage-card') ||
    element.classList.contains('heritage-card') ||
    element.classList.contains('timeline-step') ||
    element.classList.contains('community-item') ||
    element.classList.contains('faq-item') ||
    element.classList.contains('footer-column')
  ) {
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  }
  observer.observe(element);
});
