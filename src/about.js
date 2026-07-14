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
  <section class="relative overflow-hidden bg-cream-light border-b border-border" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7 space-y-6">
        <h1 class="font-heading text-4xl md:text-5xl lg:text-[4rem] text-primary-green leading-tight">
          A Vision for Sacred & <br>
          <span class="text-saffron font-italic">Sustainable Tourism in Bihar</span>
        </h1>
        <p class="text-text-body text-base md:text-lg max-w-2xl leading-relaxed">
          Bihar Discovery is an official collaborative initiative designed to showcase the profound spiritual heritage, ancient history, and vibrant local communities of Bihar to the world.
        </p>
      </div>
      <div class="lg:col-span-5 flex justify-center lg:justify-end">
        <div class="w-48 h-48 md:w-64 md:h-64 p-6 bg-white rounded-3xl shadow-xl border border-border/60 flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <img src="/images/Bihar_Government.svg" alt="Bihar Government Seal" class="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  </section>

  <!-- Banner / Core Philosophy Section -->
  <section class="bg-white" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
      <div class="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
        <img src="/images/Diverse-faiths-Shared-heritage-Stronger-local-communities..png" alt="Bihar Heritage and Local Communities" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>
      <div class="lg:col-span-6 space-y-6">
        <span class="text-saffron font-semibold text-xs uppercase tracking-widest">Our Initiative | हमारी पहल</span>
        <h2 class="font-heading text-3xl md:text-4xl text-primary-green">Empowering Communities, Preserving Heritage</h2>
        <p class="text-text-body text-sm md:text-base leading-relaxed">
          Under the guidance of the Government of Bihar, this portal unites pilgrimage management, environmental conservation, and local hospitality to deliver seamless journeys.
        </p>
        <p class="text-text-body text-sm md:text-base leading-relaxed">
          Our initiative helps protect ancient monuments like Bodh Gaya, Pavapuri, Nalanda, and Mundeshwari Hill while driving tourism-led livelihoods for local guides, artisans, and family-run homestays.
        </p>
        <div class="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div>
            <h4 class="font-heading text-2xl text-saffron">Verified Guides</h4>
            <p class="text-xs text-text-light">Govt. certified local guides in 4 major languages</p>
          </div>
          <div>
            <h4 class="font-heading text-2xl text-saffron">Eco Tourism</h4>
            <p class="text-xs text-text-light">Responsible travel across forest reserves & sacred hills</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Leadership Profiles Section -->
  <section class="bg-cream-light border-t border-b border-border" style="padding-top: 3.75rem; padding-bottom: 3.75rem;">
    <div class="container-main space-y-16">
      <div class="max-w-2xl mx-auto text-center space-y-3">
        <span class="text-saffron font-semibold text-xs uppercase tracking-widest">Leadership & Administration</span>
        <h2 class="font-heading text-3xl md:text-4xl text-primary-green">Key Dignitaries & Visionaries</h2>
        <p class="text-text-body text-sm md:text-base">
          Meet the leaders steering the preservation of Bihar's rich heritage and natural ecosystems.
        </p>
        <div class="w-16 h-0.5 bg-saffron mx-auto mt-4"></div>
      </div>

      <!-- Leaders Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Samrat Choudhary -->
        <div class="bg-white rounded-3xl border border-border shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
          <div class="aspect-[4/5] w-full bg-cream relative overflow-hidden group">
            <img src="/images/smrat.jpeg" alt="Shri Samrat Choudhary" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-green/90 via-primary-green/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span class="text-accent-gold text-[10px] font-bold uppercase tracking-wider">Government of Bihar</span>
              <h3 class="font-heading text-2xl font-bold">Shri Samrat Choudhary</h3>
              <p class="text-xs text-cream/80">Hon'ble Deputy Chief Minister, Bihar</p>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-xs md:text-sm text-text-body leading-relaxed">
              Dr. Samrat Choudhary is a prominent political leader guiding Bihar's socio-economic growth. He is actively spearheading infrastructure updates, tourism corridor developments, and public initiatives to place Bihar's historical circuits on the international map.
            </p>
            <div class="border-t border-border pt-4 text-[10px] uppercase font-semibold text-saffron tracking-wider">
              Focus: Tourism Infrastructure & Development
            </div>
          </div>
        </div>

        <!-- Anand Kishore -->
        <div class="bg-white rounded-3xl border border-border shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
          <div class="aspect-[4/5] w-full bg-cream relative overflow-hidden group">
            <img src="/images/anand kishore.jpg" alt="Shri Anand Kishore, IAS" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-green/90 via-primary-green/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span class="text-accent-gold text-[10px] font-bold uppercase tracking-wider">Administrative Officer</span>
              <h3 class="font-heading text-2xl font-bold">Shri Anand Kishore, IAS</h3>
              <p class="text-xs text-cream/80">Senior Bureaucrat & Chairman</p>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-xs md:text-sm text-text-body leading-relaxed">
              Shri Anand Kishore is a distinguished IAS officer known for executing massive public reforms and urban renewal initiatives in Bihar. He guides the strategic deployment of digitized travel services, public infrastructure, and administrative logistics across the state.
            </p>
            <div class="border-t border-border pt-4 text-[10px] uppercase font-semibold text-saffron tracking-wider">
              Focus: Digital Infrastructure & Urban Amenities
            </div>
          </div>
        </div>

        <!-- Dr. Ram Chandra Prasad -->
        <div class="bg-white rounded-3xl border border-border shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden">
          <div class="aspect-[4/5] w-full bg-cream relative overflow-hidden group">
            <img src="/images/Dr.-Ram-Chandra-Prasad..jpeg" alt="Dr. Ram Chandra Prasad" class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-green/90 via-primary-green/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span class="text-accent-gold text-[10px] font-bold uppercase tracking-wider">Environment & Forests</span>
              <h3 class="font-heading text-2xl font-bold">Dr. Ram Chandra Prasad</h3>
              <p class="text-xs text-cream/80">Hon'ble Minister for Forests, Bihar</p>
            </div>
          </div>
          <div class="p-6 flex-1 flex flex-col justify-between space-y-4">
            <p class="text-xs md:text-sm text-text-body leading-relaxed">
              Dr. Ram Chandra Prasad leads the Department of Environment, Forest, and Climate Change in Bihar. He steers efforts in eco-tourism, tree planting campaigns, biodiversity conservation, and the development of nature sanctuaries on Bihar's sacred hills.
            </p>
            <div class="border-t border-border pt-4 text-[10px] uppercase font-semibold text-saffron tracking-wider">
              Focus: Eco-Tourism & Nature Conservation
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
  '.footer-column',
  '.footer-brand'
];

document.querySelectorAll(revealSelectors.join(',')).forEach((element, index) => {
  element.classList.add('reveal-on-scroll');
  if (element.classList.contains('footer-column')) {
    element.style.transitionDelay = `${Math.min(index % 6, 5) * 70}ms`;
  }
  observer.observe(element);
});
