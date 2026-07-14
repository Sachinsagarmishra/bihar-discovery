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
        <a href="/index.html" class="flex items-center gap-2">
          <img src="/images/icon.svg" alt="Bihar Discovery" class="w-8 h-8 rounded-full object-cover" />
          <span class="font-heading text-xl font-normal text-primary-green leading-none">Bihar Discovery</span>
        </a>
      </div>
      
      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-7">
        <div class="mega-nav-item">
          <a href="#" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Faith Journeys</a>
          <div class="faith-mega-menu">
            <a href="/index.html" class="faith-mega-card">
              <img src="/images/sites/budh.webp" alt="Buddhist Pilgrimage Sites" />
              <span>Buddhist<br>Pilgrimage Sites</span>
            </a>
            <a href="/hindu-pilgrimage.html" class="faith-mega-card">
              <img src="/images/sites/hindu.webp" alt="Hindu Pilgrimage Sites" />
              <span>Hindu<br>Pilgrimage Sites</span>
            </a>
            <a href="/index.html" class="faith-mega-card">
              <img src="/images/sites/jain-sites.webp" alt="Jain Pilgrimage Sites" />
              <span>Jain<br>Pilgrimage Sites</span>
            </a>
            <a href="/index.html" class="faith-mega-card">
              <img src="/images/sites/Sikh-Pilgrimage-Sites.webp" alt="Sikh Pilgrimage Sites" />
              <span>Sikh<br>Pilgrimage Sites</span>
            </a>
          </div>
        </div>
        <a href="/index.html" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Heritage</a>
        <a href="/index.html" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Find Your Roots</a>
        <a href="/index.html" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Experiences</a>
        <a href="/index.html" class="text-sm text-text-dark hover:text-primary-green transition-colors font-medium">Travel Support</a>
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
        <a href="/index.html" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Faith Journeys</a>
        <a href="/index.html" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Heritage</a>
        <a href="/index.html" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Find Your Roots</a>
        <a href="/index.html" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Experiences</a>
        <a href="/index.html" class="block text-sm text-text-dark hover:text-primary-green transition-colors font-medium py-2">Travel Support</a>
        <a href="/about.html" class="btn-saffron w-full text-center text-xs py-2.5 rounded mt-2">Plan Your Bihar Journey</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="relative overflow-hidden bg-cream-light" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-saffron/10 border border-saffron/20 rounded-full text-saffron text-xs font-semibold uppercase tracking-wider">
          <span class="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse"></span>
          Sanatan Vedic Circuit | सनातन वैदिक सर्किट
        </div>
        <h1 class="font-heading text-4xl md:text-5xl lg:text-[4rem] text-saffron leading-tight">
          Where Devotion Meets Eternity: <br>
          <span class="text-primary-green font-italic">The Hindu Pilgrimage of Bihar</span>
        </h1>
        <p class="text-text-body text-base md:text-lg max-w-2xl leading-relaxed">
          From the moksha-giving banks of Phalgu river in Gaya to the sacred birthplace of Goddess Sita in Sitamarhi, embark on a spiritual odyssey through the ancient heartlands of Sanatana Dharma.
        </p>
        <div class="flex flex-wrap gap-3">
          <a href="#packages" class="btn-saffron rounded px-6 py-3 text-sm font-semibold shadow-md hover:bg-saffron/90 transition-all duration-200">View Spiritual Packages</a>
          <a href="#destinations" class="btn-outline rounded px-6 py-3 text-sm font-semibold hover:bg-cream-dark transition-all duration-200">Explore Sacred Sites</a>
        </div>
      </div>
      <div class="lg:col-span-5 relative">
        <div class="aspect-square w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/images/sites/hindu.webp" alt="Hindu Temple Bihar" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
        </div>
        <div class="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-border flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
            🕉️
          </div>
          <div>
            <h4 class="font-bold text-xs text-text-dark">Heritage Authenticity</h4>
            <p class="text-[10px] text-text-light">Govt. Certified Pandits & Guides</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Sacred Narrative Section -->
  <section id="destinations" class="bg-white border-t border-border" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main space-y-16">
      <div class="max-w-3xl mx-auto text-center space-y-4">
        <span class="text-accent-gold font-heading text-2xl">पावन तीर्थ स्थल</span>
        <h2 class="font-heading text-3xl md:text-4xl text-primary-green">Sacred Destinations of Eternal Bihar</h2>
        <p class="text-text-light text-sm md:text-base">
          Bihar houses some of the oldest and most spiritually significant sites in Hindu cosmology. Explore the legendary stories and sacred significance of each region.
        </p>
        <div class="w-24 h-0.5 bg-accent-gold mx-auto mt-4"></div>
      </div>

      <!-- Gaya Ji -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div class="lg:col-span-6 space-y-6">
          <div class="text-saffron font-semibold text-sm tracking-widest uppercase">01. Moksha Dham Gaya Ji</div>
          <h3 class="font-heading text-3xl md:text-4xl text-primary-green">Gaya Ji & the Sacred Vishnupad Temple</h3>
          <p class="text-text-body text-sm md:text-base leading-relaxed">
            Mentioned in the Ramayana and Mahabharata, Gaya is the ultimate destination for performing <strong>Pind Daan</strong> (ancestral rites). Pilgrims from across the world visit the historic <strong>Vishnupad Temple</strong>, which features a 40cm footprint of Lord Vishnu engraved in solid basalt rock.
          </p>
          <p class="text-text-body text-sm md:text-base leading-relaxed">
            Performing rituals on the banks of the <strong>Phalgu River</strong> is believed to liberate the souls of ancestors, bringing peace and blessings to the family. Our packages provide complete coordination with certified local Pandits to ensure hassle-free rituals.
          </p>
          <div class="flex flex-wrap gap-4 text-xs font-semibold text-saffron mt-6 border-t border-border/45 pt-4" style="margin-top: 1.75rem !important;">
            <span>✦ Holy Phalgu River</span>
            <span>✦ Akshayavat Tree</span>
            <span>✦ Mangla Gauri Shaktipeeth</span>
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img src="/images/Magadha-Heritage.png" alt="Gaya Temple" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end card-overlay-container">
              <span class="text-white font-heading text-xl">The Sacred Vishnupad Temple on the banks of Phalgu</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sitamarhi -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div class="lg:col-span-6 lg:order-2 space-y-6">
          <div class="text-saffron font-semibold text-sm tracking-widest uppercase">02. Goddess Sita's Birthplace</div>
          <h3 class="font-heading text-3xl md:text-4xl text-primary-green">Sitamarhi & The Janaki Trail</h3>
          <p class="text-text-body text-sm md:text-base leading-relaxed">
            Discover the birthplace of Goddess Sita at <strong>Punaura Dham</strong> in Sitamarhi. Legends tell of King Janak plowing the fields during a severe drought, leading to the discovery of baby Sita in a golden vessel.
          </p>
          <p class="text-text-body text-sm md:text-base leading-relaxed">
            Today, the temple complex features a serene lake (Janaki Kund) and acts as the heart of Mithila’s deep artistic and spiritual heritage. Walking through Sitamarhi gives you an authentic glimpse of Mithila art, traditional folk music, and divine feminine devotion.
          </p>
          <div class="flex flex-wrap gap-4 text-xs font-semibold text-saffron mt-6 border-t border-border/45 pt-4" style="margin-top: 1.75rem !important;">
            <span>✦ Punaura Dham</span>
            <span>✦ Janaki Kund</span>
            <span>✦ Haleshwar Sthan</span>
          </div>
        </div>
        <div class="lg:col-span-6 lg:order-1">
          <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img src="/images/Mithila-Art-Culture.png" alt="Mithila Art and Devotion" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end card-overlay-container">
              <span class="text-white font-heading text-xl">Punaura Dham Temple Complex in Sitamarhi</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Mundeshwari Temple -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div class="lg:col-span-6 space-y-6">
          <div class="text-saffron font-semibold text-sm tracking-widest uppercase">03. Ancient Heritage</div>
          <h3 class="font-heading text-3xl md:text-4xl text-primary-green">Mundeshwari Temple (India's Oldest Functional Temple)</h3>
          <p class="text-text-body text-sm md:text-base leading-relaxed">
            Perched on the summit of the scenic Pavra Hill in Kaimur district, the <strong>Mundeshwari Devi Temple</strong> is certified by the Archaeological Survey of India (ASI) as the oldest functional temple in the country, dating back to 108 AD.
          </p>
          <p class="text-text-body text-sm md:text-base leading-relaxed">
            Dedicated to Lord Shiva and Shakti, this octagonal stone marvel has preserved ancient rituals for nearly two millennia. The temple is famous for a unique and gentle ritual: a symbolic goat sacrifice where the animal is temporarily put to sleep by the priest chanting mantras, then revived and released unharmed.
          </p>
          <div class="flex flex-wrap gap-4 text-xs font-semibold text-saffron mt-6 border-t border-border/45 pt-4" style="margin-top: 1.75rem !important;">
            <span>✦ Octagonal Stone Architecture</span>
            <span>✦ 108 AD Heritage</span>
            <span>✦ Pavra Hill Views</span>
          </div>
        </div>
        <div class="lg:col-span-6">
          <div class="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] relative group">
            <img src="/images/eco-nature.png" alt="Kaimur Pavra Hill" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end card-overlay-container">
              <span class="text-white font-heading text-xl">Mundeshwari Temple, Kaimur Hills</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Interactive Package Section -->
  <section id="packages" class="bg-cream-light border-t border-b border-border" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main space-y-12">
      <div class="max-w-2xl space-y-3 about-header-container" style="margin: 0 auto 2.5rem auto !important; text-align: center;">
        <span class="text-saffron font-semibold text-xs uppercase tracking-widest">Explore Tour Packages</span>
        <h2 class="font-heading text-4xl text-primary-green">Vedic Pilgrimage Packages</h2>
        <p class="text-text-body text-sm md:text-base">
          Choose from our thoughtfully curated packages. Each includes comfortable local transport, verified guides, hotel accommodations, and ritual assistance.
        </p>
        <div class="choti-line"></div>
      </div>

      <!-- Packages Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- 7 Days -->
        <div class="bg-white rounded-3xl border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden">
          <div class="bg-saffron text-white space-y-2 relative card-header-padding">
            <div class="absolute top-6 right-6 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Heritage</div>
            <span class="text-xs uppercase tracking-wider text-cream/80">01. Ramayana & Mithila Trail</span>
            <h3 class="font-heading text-3xl font-bold">7 Days Package</h3>
            <p class="text-xs text-cream/70">Trace the footprints of Lord Ram & Goddess Sita</p>
          </div>
          <div class="card-text-container-large flex-1 flex flex-col justify-between space-y-6">
            <div class="space-y-5">
              <div class="space-y-4 text-xs md:text-sm text-text-body">
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">📍</span>
                  <span><strong>Route:</strong> Patna ➔ Buxar ➔ Ahilya Asthan ➔ Sitamarhi ➔ Janakpur</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">✨</span>
                  <span><strong>Highlights:</strong> Ram Rekha Ghat, Punaura Dham, Mithila Art Tour, Janaki Mandir</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">🏨</span>
                  <span><strong>Includes:</strong> 3-Star Hotels, AC Sedan, Breakfast, Certified Heritage Guide</span>
                </div>
              </div>
              <hr class="border-border" style="margin-top: 1.25rem !important; margin-bottom: 1.25rem !important;" />
              <div class="bg-cream-light/60 rounded-2xl border border-border/50 space-y-3 itinerary-box-padding">
                <h4 class="text-xs font-semibold text-primary-green uppercase tracking-wider">Itinerary Overview:</h4>
                <ul class="text-[11px] md:text-xs space-y-2 text-text-light list-disc list-inside leading-relaxed">
                  <li>Day 1-2: Arrival in Patna, Ganga Aarti, Buxar travel</li>
                  <li>Day 3-4: Vishwamitra Ashram, Ram Rekha Ghat, Ahilya Asthan</li>
                  <li>Day 5-6: Sitamarhi, Janaki Kund, Mithila Art workshop</li>
                  <li>Day 7: Indo-Nepal border tour to Janakpur & departure</li>
                </ul>
              </div>
            </div>
            <a href="tel:1800-120-2023" class="btn-saffron w-full text-center py-3 rounded-xl text-xs font-bold transition-all hover:bg-saffron/95 hover:shadow-lg mt-4">Book Now / Enquire</a>
          </div>
        </div>

        <!-- 8 Days -->
        <div class="bg-white rounded-3xl border-2 border-saffron shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden relative">
          <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent-gold text-white text-[9px] font-bold uppercase py-1.5 px-5 rounded-full tracking-widest shadow-md z-10">Most Popular</div>
          <div class="bg-primary-green text-white space-y-2 relative card-header-padding">
            <div class="absolute top-6 right-6 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Devotion</div>
            <span class="text-xs uppercase tracking-wider text-cream/80">02. Moksha & Shakti Tour</span>
            <h3 class="font-heading text-3xl font-bold">8 Days Package</h3>
            <p class="text-xs text-cream/70">Ancestral homage, ancient shrines & sacred hill treks</p>
          </div>
          <div class="card-text-container-large flex-1 flex flex-col justify-between space-y-6">
            <div class="space-y-5">
              <div class="space-y-4 text-xs md:text-sm text-text-body">
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">📍</span>
                  <span><strong>Route:</strong> Patna ➔ Gaya Ji ➔ Mundeshwari (Kaimur) ➔ Rajgir ➔ Nalanda</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">✨</span>
                  <span><strong>Highlights:</strong> Pind Daan at Vishnupad, Mangla Gauri Shaktipeeth, Mundeshwari Hill climb</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">🏨</span>
                  <span><strong>Includes:</strong> 4-Star Stays, AC Innova, All Meals, Pandit Booking assistance</span>
                </div>
              </div>
              <hr class="border-border" style="margin-top: 1.25rem !important; margin-bottom: 1.25rem !important;" />
              <div class="bg-cream-light/60 rounded-2xl border border-border/50 space-y-3 itinerary-box-padding">
                <h4 class="text-xs font-semibold text-primary-green uppercase tracking-wider">Itinerary Overview:</h4>
                <ul class="text-[11px] md:text-xs space-y-2 text-text-light list-disc list-inside leading-relaxed">
                  <li>Day 1-2: Patna Ghat visit, drive to Gaya Ji, evening orientation</li>
                  <li>Day 3-4: Pind Daan Rites, Vishnupad Mandir, Mangla Gauri puja</li>
                  <li>Day 5: Mundeshwari temple visit on Kaimur hills, eco-nature park</li>
                  <li>Day 6-7: Rajgir hot springs, Vishwa Shanti Stupa, Nalanda ruins</li>
                  <li>Day 8: Departure from Patna Airport / Station</li>
                </ul>
              </div>
            </div>
            <a href="tel:1800-120-2023" class="btn-saffron w-full text-center py-3 rounded-xl text-xs font-bold transition-all hover:bg-saffron/95 hover:shadow-lg mt-4">Book Now / Enquire</a>
          </div>
        </div>

        <!-- 10 Days -->
        <div class="bg-white rounded-3xl border border-border shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden">
          <div class="bg-warm-brown text-white space-y-2 relative card-header-padding">
            <div class="absolute top-6 right-6 bg-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">Grand Tour</div>
            <span class="text-xs uppercase tracking-wider text-cream/80">03. Complete Vedic Circuit</span>
            <h3 class="font-heading text-3xl font-bold">10 Days Package</h3>
            <p class="text-xs text-cream/70">The ultimate pilgrimage across Northern & Southern Bihar</p>
          </div>
          <div class="card-text-container-large flex-1 flex flex-col justify-between space-y-6">
            <div class="space-y-5">
              <div class="space-y-4 text-xs md:text-sm text-text-body">
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">📍</span>
                  <span><strong>Route:</strong> Patna ➔ Buxar ➔ Sitamarhi ➔ Gaya Ji ➔ Kaimur ➔ Sultanganj ➔ Bhagalpur</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">✨</span>
                  <span><strong>Highlights:</strong> Complete Ramayan Circuit, Mundeshwari, Ganga holy water collection at Sultanganj</span>
                </div>
                <div class="flex gap-3">
                  <span class="text-saffron shrink-0">🏨</span>
                  <span><strong>Includes:</strong> Deluxe Hotels, AC SUV, All Meals, Local expert guides in all locations</span>
                </div>
              </div>
              <hr class="border-border" style="margin-top: 1.25rem !important; margin-bottom: 1.25rem !important;" />
              <div class="bg-cream-light/60 rounded-2xl border border-border/50 space-y-3 itinerary-box-padding">
                <h4 class="text-xs font-semibold text-primary-green uppercase tracking-wider">Itinerary Overview:</h4>
                <ul class="text-[11px] md:text-xs space-y-2 text-text-light list-disc list-inside leading-relaxed">
                  <li>Day 1-2: Arrival, Buxar (Ganga Aarti, Ram Rekha Ghat)</li>
                  <li>Day 3-4: Sitamarhi Punaura Dham, Janakpur border excursion</li>
                  <li>Day 5-6: Gaya Ji, Phalgu river rituals, Mangla Gauri Devi puja</li>
                  <li>Day 7: Mundeshwari ancient temple visit & scenic hill trekking</li>
                  <li>Day 8-9: Sultanganj Ajgaibinath temple, Vikramshila ruins in Bhagalpur</li>
                  <li>Day 10: Return to Patna & Departure</li>
                </ul>
              </div>
            </div>
            <a href="tel:1800-120-2023" class="btn-saffron w-full text-center py-3 rounded-xl text-xs font-bold transition-all hover:bg-saffron/95 hover:shadow-lg mt-4">Book Now / Enquire</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 24×7 Travel Assistance Banner -->
  <section class="assistance-section bg-white" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main">
      <div class="assistance-panel">
        <div class="assistance-split">
          <div class="assistance-left">
            <svg class="assistance-main-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M18 10a6 6 0 10-12 0v3a3 3 0 003 3h1m8-6v4a4 4 0 01-4 4h-2m6-8h1a2 2 0 012 2v1a2 2 0 01-2 2h-1M6 10H5a2 2 0 00-2 2v1a2 2 0 002 2h1"/></svg>
            <div class="assistance-copy">
              <h3>24×7 Bihar Travel Assistance</h3>
              <p>Help before, during and after your journey.</p>
              <div class="assistance-actions">
                <a href="tel:1800-120-2023">Call support</a>
                <a href="mailto:support@bihardiscovery.in">Email us</a>
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

  <!-- FAQ Section -->
  <section class="support-faq-section bg-cream-light" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main">
      <div class="faq-panel mx-auto max-w-4xl">
        <div class="faq-heading-row">
          <span></span>
          <h2>Frequently Asked Questions</h2>
          <span></span>
        </div>
        <div class="faq-list mt-8">
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>What is the best time to visit Hindu Pilgrimage Sites in Bihar?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>The ideal time is from <strong>October to March</strong> when the weather is pleasant. Additionally, visiting during major festivals like Chhath Puja, Pitru Paksha Mela in Gaya (September-October), and Rama Navami (March-April) offers a highly immersive cultural experience.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>How do we arrange Pind Daan rituals in Gaya?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>Our 8-day and 10-day packages include booking assistance for local verified Pandits (Gayawal pandas). We coordinate your arrival, pre-arrange the necessary items for the puja (puja samagri), and guide you through the designated ghats of the Phalgu River or under the Akshayavat tree.</p>
            </div>
          </div>
          <div class="faq-item">
            <button class="faq-question" onclick="toggleFaq(this)">
              <span>Is transport accessible for senior citizens?</span>
              <span class="faq-plus">+</span>
            </button>
            <div class="faq-answer">
              <p>Yes. All our tours prioritize comfort. We use premium AC sedans or SUVs (Innova Crysta) with courteous drivers. For temple visits involving walking or climbing (like Mundeshwari Temple or Vishnupad), local e-rickshaw or helper facilities can be pre-arranged on request.</p>
            </div>
          </div>
        </div>
      </div>
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

// Premium entrance animations using IntersectionObserver
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
  '.assistance-panel',
  '.faq-item',
  '.footer-column',
  '.footer-brand'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((element, index) => {
  element.classList.add('reveal-on-scroll');
  if (
    element.classList.contains('faq-item') ||
    element.classList.contains('footer-column')
  ) {
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  }
  observer.observe(element);
});
