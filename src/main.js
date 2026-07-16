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
            <a href="/hindu-pilgrimage.html" class="faith-mega-card">
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
        <a href="/about.html" class="btn-saffron text-xs px-5 py-2.5 rounded">Plan Your Bihar Journey</a>
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
        <a href="/about.html" class="btn-saffron w-full text-center text-xs py-2.5 rounded mt-2">Plan Your Bihar Journey</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative overflow-hidden">
    <div class="relative min-h-[480px] md:min-h-[540px] lg:min-h-[580px]">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img src="/images/herobanner.png" 
             alt="Bihar Temple Architecture" 
             class="w-full h-full object-cover" />
      </div>
      
      <!-- Hero Content -->
      <div class="relative container-main py-16 md:py-24 lg:py-28 flex items-center min-h-[480px] md:min-h-[540px] lg:min-h-[580px]">
        <div class="max-w-xl hero-copy text-left">
          <h1 class="font-heading text-4xl md:text-5xl lg:text-[4rem] text-primary-green mb-4 leading-none text-left">
            Discover Bihar's<br>
            <span class="text-primary-green-dark font-semibold inline-flex items-center whitespace-nowrap">
              Wild Side.
              <svg class="w-8 h-8 text-primary-green ml-1 shrink-0" fill="currentColor" viewBox="0 0 24 24" style="transform: rotate(15deg); display: inline-block;"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.58,20C9.58,20 17.6,18 20.36,10.38C21.68,6.72 19.33,2.65 17,2C19,5 18,7 17,8Z"/></svg>
            </span>
          </h1>
          <h3 class="text-primary-green font-body font-bold text-lg md:text-xl tracking-wide mb-3 text-left">Forests. Wildlife. Rivers. Nature.</h3>
          <p class="text-text-body text-sm md:text-base mb-16 max-w-lg leading-relaxed text-left">
            Explore Bihar's breathtaking forests, tiger reserves, wildlife sanctuaries, river ecosystems and nature safaris through thoughtfully curated ecotourism experiences.
          </p>
          <div class="hero-actions flex flex-wrap gap-3">
            <a href="#" class="btn-primary rounded text-xs px-5 py-2.5 shadow-sm">Explore Ecotourism Packages</a>
            <a href="#" class="btn-outline bg-white rounded text-xs px-5 py-2.5 shadow-sm">Plan Your Nature Journey</a>
          </div>
          
          <!-- Hero Badges (Green Glass Effect) -->
          <div class="hero-badges">
            <!-- USP 1 -->
            <div class="hero-badge" style="background: rgba(15, 42, 28, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); color: white; backdrop-filter: blur(8px);">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M5 19a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H5zm14 0a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h2zM9 12h6"/></svg>
              <div class="text-left leading-none">
                <span class="block text-[11px] font-bold">Certified</span>
                <span class="block text-[9px] text-white/80">Nature Guides</span>
              </div>
            </div>
            <!-- USP 2 -->
            <div class="hero-badge" style="background: rgba(15, 42, 28, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); color: white; backdrop-filter: blur(8px);">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z"/></svg>
              <div class="text-left leading-none">
                <span class="block text-[11px] font-bold">Responsible</span>
                <span class="block text-[9px] text-white/80">Wildlife Tourism</span>
              </div>
            </div>
            <!-- USP 3 -->
            <div class="hero-badge" style="background: rgba(15, 42, 28, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); color: white; backdrop-filter: blur(8px);">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3C13 6.9 11.8 6.5 11 6.5H5c-.8 0-1.5.5-1.8 1.2L2 11v5c0 .6.4 1 1 1h2m10 0h2m-6 0h2M7.5 19.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/></svg>
              <div class="text-left leading-none">
                <span class="block text-[11px] font-bold">Guided</span>
                <span class="block text-[9px] text-white/80">Jungle Safaris</span>
              </div>
            </div>
            <!-- USP 4 -->
            <div class="hero-badge" style="background: rgba(15, 42, 28, 0.85); border: 1px solid rgba(255, 255, 255, 0.1); color: white; backdrop-filter: blur(8px);">
              <svg class="w-4 h-4 text-accent-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8l3 3m-3-3l-3 3m3-3v8"/></svg>
              <div class="text-left leading-none">
                <span class="block text-[11px] font-bold">Sustainable</span>
                <span class="block text-[9px] text-white/80">Eco Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Explore Bihar's Top Forest & Ecotourism Destinations -->
  <section class="ecotourism-destinations bg-[#f7f4ee]">
    <div class="container-main">
      
      <div class="eco-destinations-heading text-center pilgrimage-heading">
        <div class="pilgrimage-title-row">
          <span></span>
          <h2 class="font-heading text-3xl md:text-4xl text-primary-green">Explore Bihar's Top Forest & Ecotourism Destinations</h2>
          <span></span>
        </div>
        <p class="text-text-light text-sm md:text-base mt-3">Thoughtfully curated eco journeys across Bihar’s most spectacular forests, wildlife sanctuaries and river ecosystems.</p>
      </div>

      <div class="eco-destinations-grid">
        
        <!-- Card 1 -->
        <article class="eco-destination-card">
          <div class="eco-destination-card-head">
            <h3>Valmiki Tiger<br>Reserve</h3>
          </div>
          <div class="eco-destination-image">
            <img src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=600&q=80" alt="Valmiki Tiger Reserve">
          </div>
          <span class="eco-journey-pill">3-5 Day Safari</span>
          <div class="eco-destination-description">
            <p>Tiger safaris, birdwatching, river trails, forest camping and rich Himalayan foothill biodiversity.</p>
          </div>
          <a href="#" class="eco-destination-cta">Explore packages</a>
        </article>

        <!-- Card 2 -->
        <article class="eco-destination-card">
          <div class="eco-destination-card-head">
            <h3>Rajgir Nature<br>Safari</h3>
          </div>
          <div class="eco-destination-image">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80" alt="Rajgir Nature Safari">
          </div>
          <span class="eco-journey-pill">2-3 Day Experience</span>
          <div class="eco-destination-description">
            <p>Adventure meets nature with glass skywalk, ropeway, scenic forests, cycling trails and eco recreation.</p>
          </div>
          <a href="#" class="eco-destination-cta">Explore packages</a>
        </article>

        <!-- Card 3 -->
        <article class="eco-destination-card">
          <div class="eco-destination-card-head">
            <h3>Bhimbandh Wildlife<br>Sanctuary</h3>
          </div>
          <div class="eco-destination-image">
            <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80" alt="Bhimbandh Wildlife Sanctuary">
          </div>
          <span class="eco-journey-pill">3-4 Day Escape</span>
          <div class="eco-destination-description">
            <p>Discover natural hot springs, dense forests, trekking routes and abundant wildlife in one of Bihar's oldest protected forests.</p>
          </div>
          <a href="#" class="eco-destination-cta">Explore packages</a>
        </article>

        <!-- Card 4 -->
        <article class="eco-destination-card">
          <div class="eco-destination-card-head">
            <h3>Vikramshila Dolphin<br>Sanctuary</h3>
          </div>
          <div class="eco-destination-image">
            <img src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80" alt="Vikramshila Dolphin Sanctuary">
          </div>
          <span class="eco-journey-pill">2-3 Day Safari</span>
          <div class="eco-destination-description">
            <p>Witness the endangered Gangetic Dolphins, enjoy river cruises, birdwatching and breathtaking Ganga landscapes.</p>
          </div>
          <a href="#" class="eco-destination-cta">Explore packages</a>
        </article>

        <!-- Card 5 -->
        <article class="eco-destination-card">
          <div class="eco-destination-card-head">
            <h3>Kaimur Wildlife<br>Sanctuary</h3>
          </div>
          <div class="eco-destination-image">
            <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80" alt="Kaimur Wildlife Sanctuary">
          </div>
          <span class="eco-journey-pill">3-5 Day Wilderness</span>
          <div class="eco-destination-description">
            <p>Explore waterfalls, forests, caves, scenic valleys and wildlife across Bihar's largest forest landscape.</p>
          </div>
          <a href="#" class="eco-destination-cta">Explore packages</a>
        </article>
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
          <a href="/hindu-pilgrimage.html" class="pilgrimage-button">Explore packages</a>
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

  <!-- Visual Inspiration Section -->
  <section class="inspiration-section bg-cream-light" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main">
      <div class="text-center">
        <h2 class="font-heading text-3xl md:text-4xl text-primary-green" style="margin-bottom: 10px;">Visual Inspiration</h2>
        <p class="text-text-light text-sm md:text-base" style="margin-bottom: 25px;">Experience the sacred aura and timeless beauty of Bihar through travel stories.</p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
        <!-- Video 1 -->
        <div class="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-sm border border-border bg-white">
          <iframe src="https://www.instagram.com/reel/DaSmLavo0-Q/embed" class="absolute w-full" style="height: calc(100% + 165px); top: -78px; left: 0;" allowtransparency="true" frameborder="0" scrolling="no" loading="lazy"></iframe>
        </div>
        <!-- Video 2 -->
        <div class="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-sm border border-border bg-white">
          <iframe src="https://www.instagram.com/reel/DZqyXlDvjve/embed" class="absolute w-full" style="height: calc(100% + 165px); top: -78px; left: 0;" allowtransparency="true" frameborder="0" scrolling="no" loading="lazy"></iframe>
        </div>
        <!-- Video 3 -->
        <div class="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-sm border border-border bg-white">
          <iframe src="https://www.instagram.com/reel/DXec1dsjxFN/embed" class="absolute w-full" style="height: calc(100% + 165px); top: -78px; left: 0;" allowtransparency="true" frameborder="0" scrolling="no" loading="lazy"></iframe>
        </div>
        <!-- Video 4 -->
        <div class="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-sm border border-border bg-white">
          <iframe src="https://www.instagram.com/reel/DZSnrlxI68k/embed" class="absolute w-full" style="height: calc(100% + 165px); top: -78px; left: 0;" allowtransparency="true" frameborder="0" scrolling="no" loading="lazy"></iframe>
        </div>
        <!-- Video 5 -->
        <div class="col-span-2 lg:col-span-1 flex justify-center w-full">
          <div class="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-sm border border-border bg-white w-full max-w-[calc(50%-0.5rem)] lg:max-w-none">
            <iframe src="https://www.instagram.com/reel/DYCmAm7T59d/embed" class="absolute w-full" style="height: calc(100% + 165px); top: -78px; left: 0;" allowtransparency="true" frameborder="0" scrolling="no" loading="lazy"></iframe>
          </div>
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

  <!-- 24×7 Ecotourism Assistance & Forest Permits Section -->
  <section class="assistance-section bg-[#faf8f5] py-12 md:py-16">
    <div class="container-main">
      <div class="assistance-panel overflow-hidden border border-black/5 rounded-2xl bg-white shadow-sm">
        
        <!-- Attached Split Boxes -->
        <div class="grid grid-cols-1 lg:grid-cols-2">
          
          <!-- Left Box: Ecotourism Assistance -->
          <div class="relative overflow-hidden flex flex-col md:flex-row items-center gap-6 text-white min-h-[240px] mt-[18px]" style="background-image: url('/24×7-Bihar-Ecotourism-Assistance.png'); background-size: cover; background-position: center; padding: 36px 40px;">
            <div class="shrink-0 flex items-center justify-center">
              <!-- Headphones Icon (White) -->
              <svg class="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25"><path stroke-linecap="round" stroke-linejoin="round" d="M18.75 12c0 3.728-3.022 6.75-6.75 6.75v-13.5C15.728 5.25 18.75 8.272 18.75 12zm0 0h1.5a.75.75 0 01.75.75v3a.75.75 0 01-.75.75h-1.5m-13.5-4.5c0-3.728 3.022-6.75 6.75-6.75v13.5c-3.728 0-6.75-3.022-6.75-6.75zm0 0h-1.5a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h1.5"/></svg>
            </div>
            <div class="flex flex-col justify-center flex-1">
              <div>
                <h3 class="font-heading text-2xl md:text-3xl font-normal leading-tight text-white" style="padding-bottom: 8px;">24×7 Bihar Ecotourism Assistance</h3>
                <p class="text-xs md:text-sm text-white/80 leading-relaxed">Helping you before, during and after your adventure.</p>
              </div>
              <div class="flex flex-wrap gap-4" style="margin-top: 18px;">
                <a href="#" class="inline-flex items-center justify-center bg-[#faf7f2]/95 hover:bg-white text-primary-green rounded-lg text-sm font-medium transition-colors shadow-sm" style="padding: 10px 22px;">Call Support</a>
                <a href="#" class="inline-flex items-center justify-center bg-transparent border border-white/60 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-all" style="padding: 10px 22px;">Chat with Nature Expert</a>
              </div>
            </div>
          </div>

          <!-- Right Box: Forest Permits & Travel Guidance -->
          <div class="relative overflow-hidden flex flex-col md:flex-row items-center gap-6 text-[#0f2a1c] min-h-[240px] mt-[18px]" style="background-image: url('/Forest-Permits-Travel-Guidance.png'); background-size: cover; background-position: center; padding: 36px 40px; border-top: 1px solid rgba(0,0,0,0.05); lg:border-top: 0; lg:border-left: 1px solid rgba(0,0,0,0.05);">
            <div class="shrink-0 flex items-center justify-center">
              <!-- Document / Permit Icon -->
              <svg class="w-16 h-16 text-[#0f2a1c]/90" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.25"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
            </div>
            <div class="flex flex-col justify-center flex-1">
              <div>
                <h3 class="font-heading text-2xl md:text-3xl font-normal leading-tight text-[#0f2a1c]" style="padding-bottom: 8px;">Forest Permits & Travel Guidance</h3>
                <p class="text-xs md:text-sm text-[#0f2a1c]/80 leading-relaxed" style="padding-bottom: 10px;">Check permits, safari bookings, timings and seasonal recommendations.</p>
                
                <!-- Checklist of items -->
                <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-[11px] md:text-xs text-[#0f2a1c] font-medium">
                  <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#0f2a1c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                    <span>Park timings</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#0f2a1c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                    <span>Seasonal Bookings</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#0f2a1c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                    <span>Safari bookings</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5 text-[#0f2a1c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                    <span>Entry information & permits</span>
                  </div>
                </div>
              </div>
              <div style="margin-top: 18px;">
                <a href="#" class="inline-flex items-center justify-center bg-[#0f2a1c] hover:bg-[#081810] text-[#faf7f2] rounded-lg text-sm font-semibold transition-colors shadow-sm" style="padding: 10px 24px;">Plan My Eco Trip</a>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Warning/Info Note Banner -->
        <div class="flex items-center justify-center gap-3 px-4 text-center bg-[#faf7f2]/95 border-t border-black/5 text-[#4a3f35] text-xs md:text-sm" style="padding-top: 10px; padding-bottom: 10px;">
          <div class="w-5 h-5 rounded-full border border-[#c49a3c] flex items-center justify-center text-[#9c6f2a] font-bold text-[10px] shrink-0">i</div>
          <p class="leading-relaxed">Benefits and subsidies are subject to current scheme rules, eligibility, budget availability and official approval.</p>
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
      <a href="/about.html" class="top-footer-button">Plan Your Journey</a>
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

// Background Forest Ambience Audio
(function initBackgroundAudio() {
  const audioFile = '/audiopapkin-forest-ambience-296528.mp3';
  const bgAudio = new Audio(audioFile);
  bgAudio.loop = true;
  bgAudio.volume = 0.1; // Default 10% volume

  let isPlaying = false;
  let hasInteracted = false;

  // Create floating toggle button container dynamically
  const audioContainer = document.createElement('div');
  audioContainer.id = 'floatingAudioContainer';
  audioContainer.className = 'fixed bottom-6 left-6 z-50 flex items-center bg-primary-green text-white rounded-full shadow-lg border border-white/10 p-1 transition-all duration-300 hover:w-[150px] w-12 h-12 overflow-hidden';
  audioContainer.style.willChange = 'width';

  // Toggle button itself
  const audioBtn = document.createElement('button');
  audioBtn.id = 'floatingAudioBtn';
  audioBtn.className = 'w-10 h-10 rounded-full flex items-center justify-center cursor-pointer shrink-0 transition-transform active:scale-95';
  audioBtn.style.background = 'transparent';
  audioBtn.style.border = 'none';
  audioBtn.style.outline = 'none';
  audioBtn.style.padding = '0';
  audioBtn.setAttribute('aria-label', 'Toggle Forest Ambience');
  
  // Mute state icon (speaker with slash)
  const muteIcon = `
    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H2.25A.75.75 0 001.5 9.75v4.5c0 .414.336.75.75.75h2.25l2.25 2.25m6.5-12.75V21" />
    </svg>
  `;
  
  // Playing state icon (speaker with waves)
  const playIcon = `
    <svg class="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.113 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>
  `;

  audioBtn.innerHTML = muteIcon;
  audioContainer.appendChild(audioBtn);

  // Volume slider container
  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'flex items-center justify-center pl-1 pr-3 shrink-0';
  sliderWrapper.innerHTML = `
    <input type="range" id="audioVolumeSlider" min="0" max="1" step="0.05" value="0.1" class="w-20 cursor-pointer accent-accent-gold" style="height: 4px; background: rgba(255,255,255,0.25); border-radius: 2px; -webkit-appearance: none; outline: none;">
  `;
  audioContainer.appendChild(sliderWrapper);

  document.body.appendChild(audioContainer);

  function startAudio() {
    if (hasInteracted) return;
    hasInteracted = true;
    bgAudio.play()
      .then(() => {
        isPlaying = true;
        audioBtn.innerHTML = playIcon;
      })
      .catch(err => {
        console.log('Autoplay blocked, waiting for click/scroll', err);
        hasInteracted = false;
      });
  }

  // Play on first interaction (scroll, click, touch)
  window.addEventListener('scroll', startAudio, { once: true });
  window.addEventListener('click', startAudio, { once: true });
  window.addEventListener('touchstart', startAudio, { once: true });

  // Toggle button functionality
  audioBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!hasInteracted) {
      hasInteracted = true;
    }
    if (isPlaying) {
      bgAudio.pause();
      isPlaying = false;
      audioBtn.innerHTML = muteIcon;
    } else {
      bgAudio.play()
        .then(() => {
          isPlaying = true;
          audioBtn.innerHTML = playIcon;
        })
        .catch(err => console.log('Error playing audio:', err));
    }
  });

  // Volume slider listener
  const slider = audioContainer.querySelector('#audioVolumeSlider');
  slider.addEventListener('input', (e) => {
    bgAudio.volume = e.target.value;
    if (e.target.value > 0 && !isPlaying) {
      bgAudio.play()
        .then(() => {
          isPlaying = true;
          audioBtn.innerHTML = playIcon;
        });
    }
  });
})();
