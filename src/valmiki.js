import './style.css'
import './valmiki.css'

const highlightIcon = (name) => {
  const icons = {
    safari: '<path d="M3 13l1.8-5.1A2 2 0 0 1 6.7 6.6h8.8a2 2 0 0 1 1.8 1.1L20 13M5 17h14M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm11 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM3 13h18v4H3v-4z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/>',
    bird: '<path d="M4 16c5.5 0 8-3.5 8-8 2.4 3.1 4.9 4.6 8 4.5-2 2.8-5.1 4.5-9 4.5H7l-3 2v-3z"/><path d="M15 9c1.5-1.8 3-2.5 5-2"/>',
    river: '<path d="M3 7c3-2 5 2 8 0s5 2 10 0M3 12c3-2 5 2 8 0s5 2 10 0M3 17c3-2 5 2 8 0s5 2 10 0"/>',
    trail: '<path d="M8.5 4.5c1.2 0 2 1 2 2.2s-.8 2.3-2 2.3-2-1-2-2.3.8-2.2 2-2.2zM15.5 13c1.2 0 2 1 2 2.2s-.8 2.3-2 2.3-2-1-2-2.3.8-2.2 2-2.2zM5 11c2.5.4 4.4 1.6 5.5 3.5M12 7.5c1.8.5 3.3 1.5 4.2 3"/>',
    community: '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3.5 19c.4-4 2.4-6 5.5-6s5.1 2 5.5 6M14 14c3.5-.6 5.8 1 6.5 4"/>',
    stay: '<path d="M3 11 12 4l9 7v9H3v-9zM8 20v-6h8v6"/>',
    coordinator: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8.5 10h7M8.5 14h7M8.5 18h4"/>',
    kit: '<path d="M5 8h14l-1 13H6L5 8zM9 8V6a3 3 0 0 1 6 0v2"/><path d="M12 18c-2-1.4-3-3-3-5 2.2 0 3.4.8 3.8 2.2.6-1.8 1.8-2.8 3.7-3.2 0 3-1.4 5-4.5 6z"/>',
    assistance: '<path d="M4 13v-2a8 8 0 0 1 16 0v2M4 13H2v5h4v-5H4zm16 0h2v5h-4v-5h2zM18 18c0 2-1.5 3-4 3h-2"/>',
    helicopter: '<path d="M4 13h12a4 4 0 0 1 4 4H9a5 5 0 0 1-5-5V9M8 13l3-5h4l2 5M2 7h12M8 4v3M18 20h3"/>',
    group: '<circle cx="12" cy="7" r="3"/><circle cx="5" cy="10" r="2"/><circle cx="19" cy="10" r="2"/><path d="M7 20c.3-4 2-6 5-6s4.7 2 5 6M1.5 19c.2-3 1.4-4.5 3.5-4.5 1 0 1.8.3 2.4.9M16.6 15.4c.6-.6 1.4-.9 2.4-.9 2.1 0 3.3 1.5 3.5 4.5"/>'
  }
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`
}

document.querySelector('#app').innerHTML = `
  <div class="top-strip bg-primary-green text-white">
    <div class="container-main top-strip-inner flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-accent-gold">✦</span>
        <span>In collaboration with <strong>Government of Bihar</strong> | बिहार सरकार के सहयोग से</span>
      </div>
      <a href="tel:18001202023" class="package-top-help">Travel assistance: 1800-120-2023</a>
    </div>
  </div>

  <nav class="package-nav" id="navbar">
    <div class="container-main package-nav-inner">
      <a href="/index.html" class="package-brand">
        <img src="/images/icon.svg" alt="Bihar Discovery" />
        <span>Bihar Discovery</span>
      </a>
      <div class="package-nav-links">
        <a href="#overview">Overview</a>
        <a href="#itinerary">Itinerary</a>
        <a href="#helicopter">Helicopter</a>
        <a href="#inclusions">Inclusions</a>
        <a href="#availability" class="package-nav-cta availability-trigger">Check availability</a>
      </div>
      <button class="package-menu-button" id="mobileMenuBtn" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="package-mobile-menu" id="mobileMenu">
      <a href="#overview">Overview</a>
      <a href="#itinerary">Itinerary</a>
      <a href="#helicopter">Helicopter</a>
      <a href="#inclusions">Inclusions</a>
      <a href="#availability" class="availability-trigger">Check availability</a>
    </div>
  </nav>

  <main>
    <section class="package-hero">
      <img class="package-hero-image" src="/images/valmiki-forest-3.jpg" alt="Forest canopy walkway at Valmiki Tiger Reserve" />
      <div class="package-hero-overlay"></div>
      <div class="container-main package-hero-content">
        <a href="/index.html" class="package-back-link">← Back to Ecotourism</a>
        <div class="package-kicker">Valmiki Tiger Reserve · West Champaran, Bihar</div>
        <h1>Spend a Weekend<br><em>in the Wild</em></h1>
        <p class="package-hero-lead">Four peaceful days in Bihar’s Himalayan Terai landscape—forest safaris, birdwatching, Gandak River views, naturalist-led activities and responsible community experiences.</p>
        <div class="package-hero-tags">
          <span>3 nights / 4 days</span>
          <span>Safari & birdwatching</span>
          <span>Community eco-tourism</span>
        </div>
        <div class="package-hero-actions">
          <a href="#itinerary" class="package-button package-button-primary">View detailed itinerary</a>
          <a href="#availability" class="package-button package-button-light availability-trigger">Check forest availability</a>
        </div>
      </div>
      <div class="package-hero-credit">Official Valmiki Tiger Reserve gallery · Bihar Tourism</div>
    </section>

    <section class="package-facts" id="overview">
      <div class="container-main package-facts-grid">
        <div class="package-fact"><span>Duration</span><strong>3 nights / 4 days</strong></div>
        <div class="package-fact"><span>Suggested schedule</span><strong>Thursday–Sunday or Friday–Monday</strong></div>
        <div class="package-fact"><span>Recommended entry</span><strong>Gorakhpur Airport / railway station</strong></div>
        <div class="package-fact"><span>Departure</span><strong>Gorakhpur, Patna or authorised helicopter</strong></div>
      </div>
    </section>

    <section class="package-video-section">
      <div class="container-main package-video-shell">
        <div class="package-video-copy">
          <span class="package-eyebrow">Bihar Tourism presents</span>
          <h2>See the wild<br>before you arrive</h2>
          <p>Step into the forests, river landscapes and natural beauty of Valmiki Tiger Reserve through this official destination film.</p>
          <div class="package-video-meta"><span>Valmiki Tiger Reserve</span><span>West Champaran, Bihar</span></div>
        </div>
        <div class="package-video-frame">
          <iframe src="https://www.youtube.com/embed/iGrCBYhsHko?si=kIJUYkAiPZUb-ljG" title="Valmiki Tiger Reserve, West Champaran, Bihar — Bihar Tourism" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" loading="lazy" allowfullscreen></iframe>
        </div>
      </div>
    </section>

    <section class="package-section package-intro-section">
      <div class="container-main package-intro-grid">
        <div class="package-intro-copy">
          <span class="package-eyebrow">Valmiki Tiger Reserve Eco-Nature Package</span>
          <h2>Bihar’s only tiger reserve.<br>A landscape made for slow travel.</h2>
          <p>Bihar Tourism identifies Valmiki Tiger Reserve as Bihar’s only tiger reserve. The reserve lies in the Himalayan Terai landscape and supports safaris, birdwatching and nature-based experiences.</p>
          <p class="package-type"><strong>Package type:</strong> Wildlife, forest, birdwatching, river landscape and community-based eco-tourism.</p>
          <div class="package-source-links">
            <a href="https://tourism.bihar.gov.in/en/destinations/west-champaran/valmiki-tiger-reserve" target="_blank" rel="noreferrer">Bihar Tourism destination information ↗</a>
            <a href="https://valmikitigerreserve.com/accomodation-safari/" target="_blank" rel="noreferrer">VTR accommodation & safari information ↗</a>
          </div>
        </div>
        <div class="package-intro-visual">
          <img src="/images/valmiki-forest-2.jpg" alt="Boat journey through the forest landscape at Valmiki" loading="lazy" />
          <div class="package-image-caption"><strong>Gandak landscape</strong><span>Forest, water and Himalayan foothills</span></div>
        </div>
      </div>
    </section>

    <section class="package-section package-map-section" id="location">
      <div class="container-main package-map-shell">
        <div class="package-map-frame">
          <iframe src="https://www.google.com/maps?q=Valmiki%20Tiger%20Reserve%2C%20West%20Champaran%2C%20Bihar&z=10&output=embed" title="Map showing Valmiki Tiger Reserve in West Champaran, Bihar" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          <div class="package-map-badge"><span>Destination</span><strong>Valmiki Tiger Reserve</strong><small>West Champaran, Bihar</small></div>
        </div>
        <div class="package-map-copy">
          <span class="package-eyebrow">Location & arrival</span>
          <h2>Find your way<br>to the wild</h2>
          <p>Valmiki Tiger Reserve lies in north-west Bihar in the Himalayan Terai landscape. Choose the route that best suits your onward travel plan.</p>
          <div class="package-map-routes">
            <article><span>Recommended</span><h3>Via Gorakhpur</h3><p>Pickup from Gorakhpur Airport or railway station, followed by a private road transfer to Valmiki Nagar.</p></article>
            <article><span>Extended road journey</span><h3>Via Patna</h3><p>Available for travellers already in Patna. An early departure or an additional Patna night is recommended.</p></article>
            <article><span>Premium · Subject to approval</span><h3>By helicopter</h3><p>Authorised origin to a notified nearby helipad only after aviation, forest and operator confirmation.</p></article>
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=Valmiki+Tiger+Reserve%2C+West+Champaran%2C+Bihar" target="_blank" rel="noreferrer" class="package-map-link">Open directions in Google Maps ↗</a>
        </div>
      </div>
    </section>

    <section class="package-section package-highlights-section">
      <div class="container-main">
        <div class="package-section-heading">
          <span class="package-eyebrow">Package highlights</span>
          <h2>Everything your wild weekend needs</h2>
          <p>No religious or pilgrimage programme—this journey is dedicated entirely to nature, conservation and local communities.</p>
        </div>
        <div class="package-highlights-grid">
          ${[
            ['Safari', 'Valmiki Tiger Reserve forest safari', 'safari'],
            ['Naturalist', 'Authorised guide and conservation interpretation', 'compass'],
            ['Birding', 'Naturalist-led birdwatching experience', 'bird'],
            ['Gandak', 'River landscape and sunset experience', 'river'],
            ['Nature walk', 'Forest-edge walking experience', 'trail'],
            ['Community', 'Responsible Tharu community experience', 'community'],
            ['Stays', 'Two nights Valmiki Nagar + one night Ganauli', 'stay'],
            ['Coordinator', 'Dedicated eco-journey coordinator', 'coordinator'],
            ['Eco kit', 'Responsible-tourism kit for every traveller', 'kit'],
            ['Assistance', 'Emergency and travel assistance', 'assistance'],
            ['Helicopter', 'Optional authorised arrival and departure', 'helicopter'],
            ['Small groups', 'Capacity-sensitive forest experience', 'group']
          ].map(([title, text, icon]) => `<div class="package-highlight"><span>${highlightIcon(icon)}</span><div><strong>${title}</strong><p>${text}</p></div></div>`).join('')}
        </div>
      </div>
    </section>

    <section class="package-section package-route-section">
      <div class="container-main">
        <div class="package-section-heading package-heading-light">
          <span class="package-eyebrow">Suggested package structure</span>
          <h2>Four days, one unforgettable landscape</h2>
        </div>
        <div class="package-route-grid">
          <div class="package-route-day"><span>Day 1</span><strong>Arrival, helipad reception and Gandak sunset</strong><small>Night: Valmiki Nagar</small></div>
          <div class="package-route-day"><span>Day 2</span><strong>Forest safari, birdwatching and nature interpretation</strong><small>Night: Valmiki Nagar</small></div>
          <div class="package-route-day"><span>Day 3</span><strong>Ganauli forest experience and Tharu culture</strong><small>Night: Ganauli</small></div>
          <div class="package-route-day"><span>Day 4</span><strong>Sunrise nature walk and departure</strong><small>No stay</small></div>
        </div>
      </div>
    </section>

    <section class="package-section package-itinerary-section" id="itinerary">
      <div class="container-main package-itinerary-layout">
        <aside class="package-itinerary-aside">
          <span class="package-eyebrow">Detailed itinerary</span>
          <h2>Your day-by-day journey</h2>
          <p>Every activity remains subject to forest advice, weather, permissions, guest mobility and daylight availability.</p>
          <a href="tel:18001202023" class="package-button package-button-primary">Talk to a journey coordinator</a>
        </aside>
        <div class="package-day-list">
          <details class="package-day" open>
            <summary><span>01</span><div><small>Day 1</small><strong>Arrival in the Himalayan Terai</strong></div><b>+</b></summary>
            <div class="package-day-content">
              <h3>Recommended arrival options</h3>
              <div class="package-option-grid">
                <article><h4>Option A — Gorakhpur road arrival</h4><p>This is the recommended standard option.</p><ul><li>Pickup from Gorakhpur Airport or railway station</li><li>Welcome by the dedicated eco-journey coordinator</li><li>Private transfer towards Valmiki Nagar</li><li>One planned comfort stop</li><li>Drinking water and refreshments</li><li>Landscape briefing during the drive</li><li>Arrival and eco-stay check-in</li></ul><p class="package-note">Final travel time must be confirmed according to the selected route, border-area traffic and road conditions.</p></article>
                <article><h4>Option B — Patna road arrival</h4><p>Available for travellers already in Patna.</p><ul><li>Pickup from Patna Airport, hotel or railway station</li><li>Early departure in a comfortable intercity vehicle</li><li>Two or three comfort stops and en-route lunch</li><li>Evening arrival at Valmiki Nagar</li></ul><p class="package-note">Guests should arrive in Patna one day earlier or depart very early because this journey is considerably longer.</p></article>
                <article><h4>Option C — Premium helicopter arrival</h4><p><strong>Patna or another authorised origin → notified helipad near Valmiki Nagar.</strong></p><p>Only sold after approved operator, operational helipad, landing permission, district and forest coordination, aviation clearance, passenger eligibility, aircraft availability, weather, visibility, ground handling, fire and medical services are confirmed.</p><p class="package-note">Premium helicopter transfer—available subject to government, aviation, forest and operator confirmation. No unnotified helipad is displayed as operational.</p></article>
              </div>
              <h3>Helipad arrival experience</h3>
              <div class="package-three-columns">
                <div><h4>Before departure</h4><ul><li>Names and government ID verified</li><li>Passenger weights recorded where required</li><li>Baggage restrictions communicated</li><li>Weather and emergency contact confirmed</li></ul></div>
                <div><h4>At the origin</h4><ul><li>Meet-and-assist service</li><li>Passenger and baggage check</li><li>Safety briefing</li><li>Assigned seating and supervised boarding</li></ul></div>
                <div><h4>At the destination</h4><ul><li>Secure passenger reception</li><li>District or forest coordination where applicable</li><li>Luggage, refreshments and road transfer</li></ul></div>
              </div>
              <h3>Valmiki Nagar check-in</h3>
              <p>Recommended accommodation includes an eco-hut, bamboo or nature cottage, approved forest accommodation, recognised eco-resort, or a tree-hut only where operationally suitable. Availability must be reconfirmed at booking.</p>
              <div class="package-split-list"><div><h4>Welcome eco-kit</h4><ul><li>Detailed itinerary and forest-code booklet</li><li>Bird and wildlife checklist</li><li>Reusable water bottle and cloth bag</li><li>Waste-return pouch</li><li>Emergency and naturalist contacts</li><li>Weather, clothing and insect-protection guidance</li></ul></div><div><h4>Late afternoon — Gandak landscape</h4><ul><li>Guided walk in an authorised landscape area</li><li>Gandak River ecosystem introduction</li><li>Bird observation and landscape photography</li><li>Himalayan foothill interpretation</li><li>Sunset and Terai environment explanation</li></ul><p class="package-note">This is not a wildlife safari and remains within approved visitor areas.</p></div></div>
              <div class="package-day-meta"><span><b>Meals</b> Evening refreshments and dinner</span><span><b>Stay</b> Valmiki Nagar</span><span><b>Activity</b> Light</span><span><b>Wear</b> Full sleeves, neutral colours, closed footwear</span></div>
            </div>
          </details>

          <details class="package-day">
            <summary><span>02</span><div><small>Day 2</small><strong>Forest safari and birdwatching</strong></div><b>+</b></summary>
            <div class="package-day-content">
              <div class="package-split-list"><div><h3>Early morning preparation</h3><ul><li>Wake-up call and light refreshments</li><li>Packed water</li><li>Forest permit verification</li><li>Passenger-list confirmation</li><li>Guide and vehicle allocation</li><li>Transfer to the authorised entry point</li></ul></div><div><h3>Morning forest safari</h3><ul><li>Authorised vehicle and approved driver</li><li>Trained forest guide or naturalist</li><li>Habitat, bird, track and sign interpretation</li><li>Landscape photography</li><li>Conservation discussion</li></ul></div></div>
              <h3>Possible wildlife interpretation</h3>
              <div class="package-chip-list"><span>Bengal tiger</span><span>Leopard</span><span>Deer species</span><span>Wild boar</span><span>Forest mammals</span><span>Reptiles & amphibians</span><span>Resident & migratory birds</span><span>Native forest trees</span></div>
              <blockquote>This is a natural forest experience, not a zoo visit. Wildlife sightings depend entirely on habitat, season, weather and animal movement.</blockquote>
              <h3>Mandatory safari conduct</h3>
              <ul class="package-rules-grid"><li>Remain in the authorised vehicle</li><li>Follow forest-staff instructions</li><li>Speak quietly and silence phones</li><li>Avoid flash photography</li><li>Never feed or chase wildlife</li><li>Do not leave without permission</li><li>Carry no alcohol</li><li>Bring back all waste</li><li>Avoid single-use plastic</li><li>Respect entry and exit timings</li></ul>
              <div class="package-split-list"><div><h3>After safari and naturalist session</h3><ul><li>Breakfast, rest and charging time</li><li>Optional wildlife-documentary screening</li><li>Terai ecosystem and tiger conservation</li><li>Forest corridors and Gandak birds</li><li>Human-wildlife coexistence</li><li>Forest communities and responsible photography</li></ul></div><div><h3>Afternoon birdwatching</h3><ul><li>Guided bird and butterfly observation</li><li>Native-tree and medicinal-plant interpretation</li><li>Forest-edge photography</li><li>Quiet observation from an approved location</li></ul><p>Route selection considers forest advice, weather, animal movement, guest age, mobility and daylight.</p></div></div>
              <div class="package-note-card"><h4>Senior-friendly alternative</h4><p>Vehicle-assisted nature route, accessible observation point, seated naturalist presentation, short riverside experience and binocular-assisted birdwatching.</p></div>
              <p class="package-note">Open fires, loud music and outdoor parties are not included near wildlife habitat.</p>
              <div class="package-day-meta"><span><b>Meals</b> Breakfast, lunch and dinner</span><span><b>Stay</b> Valmiki Nagar</span><span><b>Activity</b> Moderate</span><span><b>Highlight</b> Safari and birdwatching</span></div>
            </div>
          </details>

          <details class="package-day">
            <summary><span>03</span><div><small>Day 3</small><strong>Ganauli forest and community experience</strong></div><b>+</b></summary>
            <div class="package-day-content">
              <p>The official VTR accommodation information describes Ganauli’s wooden forest rest house as having four double-bed rooms. Capacity is limited and remains subject to availability and forest approval.</p>
              <div class="package-split-list"><div><h3>Transfer and check-in</h3><ul><li>Early breakfast and checkout</li><li>Approved route transfer to Ganauli</li><li>Forest and landscape interpretation en route</li><li>Room allocation and safety briefing</li><li>Drinking-water and emergency-procedure check</li></ul><p>Operator verifies road condition, permission, guest list, meal arrangements, power, water and emergency communication.</p></div><div><h3>Capacity management</h3><ul><li>Keep groups small and avoid overbooking</li><li>No extra bedding without permission</li><li>Twin/double sharing as approved</li><li>Backup stay at Valmiki Nagar</li><li>Forest accommodation may be simple, not luxurious</li></ul></div></div>
              <h3>Forest landscape experience</h3>
              <p>Subject to approval: guided forest-edge walk, landscape interpretation, tree and plant identification, bird-call recognition, butterfly observation, responsible photography and forest-rest-house history—all within authorised visitor areas.</p>
              <h3>Tharu community experience</h3>
              <p>Where arranged through an approved community partner: community welcome, village orientation, Tharu culture and architecture, agriculture and forest livelihoods, craft demonstration, food preparation, folk music or dance, and direct purchase from artisans.</p>
              <ul class="package-rules-grid"><li>Ask before photography</li><li>Enter homes only when invited</li><li>Pay guides, artists and performers fairly</li><li>Never present residents as exhibits</li><li>Avoid stereotypes</li><li>Keep groups small</li><li>Let the community tell its story</li><li>Publish pricing transparently</li><li>Never pressure purchases</li></ul>
              <div class="package-note-card"><h4>Suggested livelihood activities</h4><p>Basket or natural-fibre craft, local food tasting, agricultural demonstration, folk storytelling, traditional music, women-led enterprise interaction and community conservation discussion—depending on local availability.</p></div>
              <h3>Forest silence experience</h3>
              <p>Subject to safety and permission: sunset from an approved location, guided forest listening, no torches directed at wildlife, no loud conversation, no music and no unauthorised night walk. Dinner is followed by a naturalist Q&A, species review and optional journaling or sketching.</p>
              <div class="package-day-meta"><span><b>Meals</b> Breakfast, lunch and dinner</span><span><b>Stay</b> Ganauli Forest Rest House</span><span><b>Activity</b> Light to moderate</span><span><b>Highlight</b> Forest immersion and community culture</span></div>
            </div>
          </details>

          <details class="package-day">
            <summary><span>04</span><div><small>Day 4</small><strong>Sunrise birding and departure</strong></div><b>+</b></summary>
            <div class="package-day-content">
              <h3>Final nature experience</h3>
              <p>Subject to forest permission: sunrise observation, guided birdwatching, forest-edge nature walk, bird-call identification, landscape photography and tea or coffee. This remains optional for guests who prefer additional rest.</p>
              <p>After breakfast: room inspection, waste-return check, luggage assistance, checkout and departure briefing.</p>
              <div class="package-option-grid">
                <article><h4>Departure A — Gorakhpur</h4><p>Recommended standard option with private transfer, one comfort stop, packed refreshments and coordinator-supported drop at the airport or railway station. Select an afternoon or evening flight/train for a safe road buffer.</p></article>
                <article><h4>Departure B — Patna</h4><p>Suitable for late-night departures, an additional Patna night, or private groups comfortable with an extended road journey. An additional Patna night is recommended over a tightly timed same-day flight.</p></article>
                <article><h4>Departure C — Helicopter</h4><p>If authorised: road transfer from Ganauli to the helipad, reporting, identity and weight verification, safety briefing, helicopter transfer and post-landing ground assistance. The Ganauli–helipad road transfer is included in the operating plan.</p></article>
              </div>
              <div class="package-day-meta"><span><b>Meals</b> Breakfast and packed refreshments</span><span><b>Stay</b> None</span><span><b>Activity</b> Light</span></div>
            </div>
          </details>
        </div>
      </div>
    </section>

    <section class="package-section package-helicopter-section" id="helicopter">
      <div class="container-main">
        <div class="package-helicopter-card">
          <div class="package-helicopter-main">
            <div class="package-helicopter-image">
              <img src="/helipad.webp" alt="Helicopter for premium transfer" loading="lazy" />
              <span>Premium transfer · Subject to approval</span>
            </div>
            <div class="package-helicopter-copy">
              <span class="package-eyebrow">Premium upgrade</span>
              <h2>Fly into the Wild</h2>
              <p class="package-helicopter-lead">Upgrade your journey with an authorised helicopter transfer to the Valmiki landscape.</p>
              <div class="package-helicopter-process">
                <div><span>01</span><strong>Submit passenger details</strong></div>
                <i>→</i>
                <div><span>02</span><strong>Operator & landing approval</strong></div>
                <i>→</i>
                <div><span>03</span><strong>Weather confirmation</strong></div>
                <i>→</i>
                <div><span>04</span><strong>Helipad reception</strong></div>
              </div>
              <div class="package-helicopter-facilities">
                <div><span>✓</span>Secure perimeter</div>
                <div><span>✓</span>Fire & medical readiness</div>
                <div><span>✓</span>Ground transfer</div>
                <div><span>✓</span>Passenger assistance</div>
              </div>
              <a href="mailto:support@bihardiscovery.in?subject=Valmiki%20Helicopter%20Transfer%20Request" class="package-button package-button-light">Request helicopter transfer</a>
            </div>
          </div>
          <div class="package-helicopter-warning"><span>!</span><p>Helicopter confirmation is separate from confirmation of the land package and is always subject to government, aviation, forest, weather and operator approval.</p></div>
          <div class="package-helicopter-details">
            <details><summary>What the upgrade may include <b>+</b></summary><ul><li>Passenger seat</li><li>Origin meet-and-assist</li><li>Safety briefing</li><li>Destination helipad reception</li><li>Helipad-to-hotel transfer</li><li>Basic ground handling</li><li>Dedicated coordinator</li><li>Applicable taxes</li></ul></details>
            <details><summary>Passenger information required <b>+</b></summary><ul><li>Full legal name, age and nationality</li><li>Valid identification</li><li>Passenger weight where required</li><li>Emergency contact</li><li>Mobility requirements</li><li>Relevant medical information</li><li>Baggage details</li></ul><p>Only information required by the authorised operator is collected.</p></details>
            <details><summary>Minimum helipad operating requirements <b>+</b></summary><h4>Physical</h4><p>Approved landing area, marked touchdown zone, obstacle-free approach, secure perimeter, barriers, wind indicator, debris-free surface, drainage, vehicle and ambulance access, and safe distance from power lines/buildings.</p><h4>Passenger & emergency facilities</h4><p>Reporting and ID check, waiting area, toilets, drinking water, wheelchair access, baggage control, parking, communication, firefighting, trained personnel, first aid, ambulance, hospital linkage, police coordination and evacuation plan.</p><h4>Required coordination</h4><p>Civil aviation, authorised operator, state government, district administration, Forest Department, local police, landowner or helipad authority, fire and medical services, weather and flight-operation teams.</p></details>
          </div>
        </div>
      </div>
    </section>

    <section class="package-section package-inclusions-section" id="inclusions">
      <div class="container-main">
        <div class="package-section-heading">
          <span class="package-eyebrow">Package details</span>
          <h2>What is included</h2>
        </div>
        <div class="package-inclusion-grid">
          <article><span>01</span><h3>Accommodation</h3><ul><li>Two nights in Valmiki Nagar</li><li>One night at Ganauli, subject to availability</li><li>Twin/double room</li><li>Specified meal plan</li><li>Applicable accommodation taxes</li></ul></article>
          <article><span>02</span><h3>Nature activities</h3><ul><li>One authorised forest safari</li><li>Birdwatching and naturalist session</li><li>Gandak landscape experience</li><li>Ganauli forest experience</li><li>Tharu community programme</li><li>Forest-safety briefing</li></ul></article>
          <article><span>03</span><h3>Transportation</h3><ul><li>Gorakhpur or selected arrival pickup</li><li>Local Valmiki Nagar transportation</li><li>Valmiki Nagar–Ganauli transfer</li><li>Ganauli–departure transfer</li><li>Helipad transfers when purchased</li></ul></article>
          <article><span>04</span><h3>Support</h3><ul><li>Journey coordinator</li><li>Authorised guide or naturalist</li><li>Daily itinerary reminders</li><li>Emergency assistance</li><li>First-aid availability in vehicle</li><li>Grievance support</li></ul></article>
        </div>

        <div class="package-detail-panels">
          <div class="package-meal-panel">
            <h3>Meal plan</h3>
            <div class="package-table-wrap"><table><thead><tr><th>Day</th><th>Included meals</th></tr></thead><tbody><tr><td>Day 1</td><td>Evening refreshments and dinner</td></tr><tr><td>Day 2</td><td>Breakfast, lunch and dinner</td></tr><tr><td>Day 3</td><td>Breakfast, lunch and dinner</td></tr><tr><td>Day 4</td><td>Breakfast and packed refreshments</td></tr></tbody></table></div>
            <p><strong>Dietary information collected at booking:</strong> vegetarian, non-vegetarian, vegan, Jain food, child meal, food allergies and diabetic-friendly requests. Special meals are confirmed only after accommodation approval.</p>
          </div>
          <div class="package-exclusion-panel">
            <h3>Package exclusions</h3>
            <ul><li>Airfare and train tickets</li><li>Helicopter unless selected</li><li>Additional safari</li><li>Unlisted camera fees</li><li>Travel or medical insurance</li><li>Personal shopping and alcohol</li><li>Medical treatment</li><li>Unscheduled transportation</li><li>Activities outside approved visitor areas</li><li>Weather-related extra costs</li><li>Anything not listed under inclusions</li></ul>
          </div>
        </div>

        <div class="package-room-section">
          <div class="package-section-heading package-heading-left"><span class="package-eyebrow">Suggested room categories</span><h2>Stay close to the forest</h2><p>Ganauli is not presented as a luxury stay. Its value is its forest character, limited capacity and immersive location.</p></div>
          <div class="package-table-wrap"><table><thead><tr><th>Package level</th><th>Valmiki Nagar</th><th>Ganauli</th></tr></thead><tbody><tr><td>Eco Comfort</td><td>Eco-hut or standard nature room</td><td>Forest rest-house room</td></tr><tr><td>Premium Nature</td><td>Premium eco-property</td><td>Forest rest house, subject to approval</td></tr><tr><td>Small Group</td><td>Reserved eco-hut allocation</td><td>Limited group booking</td></tr><tr><td>Senior-friendly</td><td>Low-floor accessible room</td><td>Only after accessibility assessment</td></tr></tbody></table></div>
        </div>
      </div>
    </section>

    <section class="package-section package-booking-section">
      <div class="container-main">
        <div class="package-section-heading package-heading-light"><span class="package-eyebrow">Booking flow</span><h2>From dates to final confirmation</h2></div>
        <ol class="package-booking-flow"><li>Select travel dates</li><li>Choose accommodation</li><li>Request forest safari</li><li>Add birdwatching or community experience</li><li>Add helicopter transfer</li><li>Enter traveller and accessibility details</li><li>Review permits and conditions</li><li>Pay and receive provisional confirmation</li><li>Receive final forest and helicopter confirmation</li></ol>
        <p class="package-status-note">Hotel booking, forest permit and helicopter request have separate confirmation statuses.</p>
      </div>
    </section>

    <section class="package-disclaimer-section">
      <div class="container-main">
        <div class="package-disclaimer"><span>Important</span><p><strong>Forest entry, safari routes, accommodation at Ganauli, birdwatching trails, community programmes and helicopter services are subject to seasonal opening, carrying capacity, room availability, permits, weather, visibility, technical conditions and directions from the Forest Department and other authorised agencies. Wildlife sightings, including tiger sightings, cannot be guaranteed. Helicopter confirmation is separate from confirmation of the land package.</strong></p></div>
      </div>
    </section>

    <section class="package-final-cta">
      <img src="/images/valmiki-forest-1.jpg" alt="Valmiki Nagar riverside landscape" loading="lazy" />
      <div class="package-final-overlay"></div>
      <div class="container-main package-final-content"><span class="package-eyebrow">3 nights / 4 days</span><h2>Ready to spend a weekend in the wild?</h2><p>Valmiki Nagar · Forest Safari · Ganauli · Gandak · Birdwatching</p><div><a href="#availability" class="package-button package-button-gold availability-trigger">Check forest availability</a><a href="mailto:support@bihardiscovery.in?subject=Valmiki%20Package%20Enquiry" class="package-button package-button-light">Email an enquiry</a></div></div>
    </section>
  </main>

  <footer class="package-footer">
    <div class="container-main package-footer-inner"><div class="package-brand"><img src="/images/icon.svg" alt="Bihar Discovery" /><span>Bihar Discovery</span></div><p>Responsible journeys through Bihar’s forests, wildlife and living landscapes.</p><div><a href="/index.html">Home</a><a href="mailto:support@bihardiscovery.in">Support</a><a href="tel:18001202023">1800-120-2023</a></div></div>
  </footer>

  <div class="package-sticky-cta"><div><strong>Valmiki Tiger Reserve</strong><span>3 nights / 4 days</span></div><a href="#availability" class="availability-trigger">Check availability</a></div>

  <div class="availability-modal" id="availabilityModal" aria-hidden="true">
    <button class="availability-backdrop" type="button" data-close-modal aria-label="Close availability form"></button>
    <section class="availability-panel" role="dialog" aria-modal="true" aria-labelledby="availabilityTitle">
      <button class="availability-close" type="button" data-close-modal aria-label="Close availability form">×</button>
      <div class="availability-modal-head">
        <span class="package-eyebrow">Valmiki Tiger Reserve</span>
        <h2 id="availabilityTitle">Check forest availability</h2>
        <p>Tell us your preferred dates first, then add traveller details and journey preferences.</p>
      </div>

      <div class="availability-progress" aria-label="Form progress">
        <div class="is-active" data-progress-step="1"><span>1</span><small>Travel dates</small></div>
        <div data-progress-step="2"><span>2</span><small>Travellers</small></div>
        <div data-progress-step="3"><span>3</span><small>Journey options</small></div>
      </div>

      <form class="availability-form" id="availabilityForm">
        <div class="availability-step is-active" data-form-step="1">
          <div class="availability-step-heading"><span>Step 1 of 3</span><h3>When would you like to travel?</h3><p>Choose your preferred start date for the 3 nights / 4 days package.</p></div>
          <div class="availability-field availability-date-field">
            <label for="travelDate">Preferred travel date <em>*</em></label>
            <input type="date" id="travelDate" name="Preferred travel date" required />
            <small>Forest access and safari availability will be checked for this date.</small>
          </div>
          <div class="availability-field">
            <span class="availability-label">Are your dates flexible?</span>
            <div class="availability-choice-grid">
              <label class="availability-choice"><input type="radio" name="Date flexibility" value="Exact dates" required /><span><b>Exact dates</b><small>I can travel only on this date</small></span></label>
              <label class="availability-choice"><input type="radio" name="Date flexibility" value="Flexible by 2–3 days" required /><span><b>Flexible</b><small>I can adjust by 2–3 days</small></span></label>
            </div>
          </div>
          <div class="availability-summary-strip"><span>Duration</span><strong>3 nights / 4 days</strong><span>Suggested</span><strong>Thursday–Sunday or Friday–Monday</strong></div>
        </div>

        <div class="availability-step" data-form-step="2">
          <div class="availability-step-heading"><span>Step 2 of 3</span><h3>Who is travelling?</h3><p>Add the primary contact and the total traveller count.</p></div>
          <div class="availability-form-grid">
            <div class="availability-field"><label for="guestName">Full name <em>*</em></label><input type="text" id="guestName" name="Full name" autocomplete="name" placeholder="Enter your full name" required /></div>
            <div class="availability-field"><label for="guestPhone">Phone number <em>*</em></label><input type="tel" id="guestPhone" name="Phone" autocomplete="tel" inputmode="tel" placeholder="+91 98765 43210" pattern="[0-9+() -]{8,18}" required /></div>
            <div class="availability-field"><label for="guestEmail">Email address <em>*</em></label><input type="email" id="guestEmail" name="Email" autocomplete="email" placeholder="name@example.com" required /></div>
            <div class="availability-field"><label for="guestCity">City</label><input type="text" id="guestCity" name="City" autocomplete="address-level2" placeholder="Your city" /></div>
            <div class="availability-field"><label for="adultCount">Adults <em>*</em></label><select id="adultCount" name="Adults" required><option value="1">1 adult</option><option value="2" selected>2 adults</option><option value="3">3 adults</option><option value="4">4 adults</option><option value="5">5 adults</option><option value="6+">6+ adults</option></select></div>
            <div class="availability-field"><label for="seniorCount">Senior citizens</label><select id="seniorCount" name="Senior citizens"><option value="0">None</option><option value="1">1 senior</option><option value="2">2 seniors</option><option value="3+">3+ seniors</option></select></div>
          </div>
          <div class="availability-field">
            <span class="availability-label">Are children travelling? <em>*</em></span>
            <div class="availability-choice-grid availability-choice-grid-compact">
              <label class="availability-choice"><input type="radio" name="Children travelling" value="No" required /><span><b>No</b></span></label>
              <label class="availability-choice"><input type="radio" name="Children travelling" value="Yes" required /><span><b>Yes</b></span></label>
            </div>
          </div>
          <div class="availability-child-fields" id="childFields" hidden>
            <div class="availability-field"><label for="childCount">Number of children <em>*</em></label><select id="childCount" name="Number of children"><option value="">Select</option><option value="1">1 child</option><option value="2">2 children</option><option value="3">3 children</option><option value="4+">4+ children</option></select></div>
            <div class="availability-field"><label for="childAges">Children’s ages <em>*</em></label><input type="text" id="childAges" name="Children ages" placeholder="Example: 4, 8" /></div>
          </div>
        </div>

        <div class="availability-step" data-form-step="3">
          <div class="availability-step-heading"><span>Step 3 of 3</span><h3>Choose your journey preferences</h3><p>These selections help us check the correct transport, stay and permit availability.</p></div>
          <div class="availability-form-grid">
            <div class="availability-field"><label for="arrivalPoint">Preferred arrival point <em>*</em></label><select id="arrivalPoint" name="Arrival point" required><option value="">Select arrival</option><option>Gorakhpur Airport</option><option>Gorakhpur railway station</option><option>Patna Airport / city</option><option>Authorised helicopter origin</option><option>Need guidance</option></select></div>
            <div class="availability-field"><label for="roomCategory">Accommodation preference <em>*</em></label><select id="roomCategory" name="Accommodation" required><option value="">Select stay</option><option>Eco Comfort</option><option>Premium Nature</option><option>Small Group</option><option>Senior-friendly</option><option>Need guidance</option></select></div>
            <div class="availability-field"><label for="mealPreference">Meal preference</label><select id="mealPreference" name="Meal preference"><option>Vegetarian</option><option>Non-vegetarian</option><option>Vegan</option><option>Jain food</option><option>Mixed group</option></select></div>
            <div class="availability-field"><label for="departurePoint">Preferred departure</label><select id="departurePoint" name="Departure point"><option>Gorakhpur</option><option>Patna</option><option>Authorised helicopter transfer</option><option>Need guidance</option></select></div>
          </div>
          <div class="availability-field">
            <span class="availability-label">Include authorised helicopter / helipad transfer? <em>*</em></span>
            <div class="availability-choice-grid availability-choice-grid-three">
              <label class="availability-choice"><input type="radio" name="Helicopter transfer" value="Yes, include it" required /><span><b>Yes</b><small>Check premium transfer</small></span></label>
              <label class="availability-choice"><input type="radio" name="Helicopter transfer" value="Maybe, share details" required /><span><b>Maybe</b><small>Share price and conditions</small></span></label>
              <label class="availability-choice"><input type="radio" name="Helicopter transfer" value="No, road transfer" required /><span><b>No</b><small>Use road transfer</small></span></label>
            </div>
          </div>
          <div class="availability-field"><label for="accessibilityNeeds">Accessibility, medical or mobility requirements</label><textarea id="accessibilityNeeds" name="Accessibility requirements" rows="2" placeholder="Wheelchair access, low-floor room, medical information relevant to the journey..."></textarea></div>
          <div class="availability-field"><label for="specialNotes">Anything else we should know?</label><textarea id="specialNotes" name="Additional notes" rows="2" placeholder="Food allergies, celebration, preferred activities or other requests..."></textarea></div>
          <label class="availability-consent"><input type="checkbox" name="Consent" value="Accepted" required /><span>I agree to be contacted about this availability request. Forest safari, Ganauli stay and helicopter confirmation remain subject to permits, weather and availability.</span></label>
        </div>

        <div class="availability-form-actions">
          <button type="button" class="availability-back-button" id="formBack" hidden>Back</button>
          <button type="button" class="availability-next-button" id="formNext">Continue</button>
          <button type="submit" class="availability-submit-button" id="formSubmit" hidden>Prepare availability request</button>
        </div>
      </form>

      <div class="availability-success" id="availabilitySuccess" hidden>
        <div class="availability-success-icon">✓</div>
        <span class="package-eyebrow">Request ready</span>
        <h3>Your Valmiki journey details are prepared.</h3>
        <p>Send the structured request to Bihar Discovery so the team can check forest, stay and helicopter availability separately.</p>
        <div class="availability-request-preview" id="requestPreview"></div>
        <a class="availability-email-button" id="sendRequestEmail" href="#">Send availability request</a>
        <button type="button" class="availability-reset-button" id="startNewRequest">Start a new request</button>
      </div>
    </section>
  </div>
`

const mobileMenuBtn = document.getElementById('mobileMenuBtn')
const mobileMenu = document.getElementById('mobileMenu')

mobileMenuBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open')
  mobileMenuBtn.classList.toggle('is-open', isOpen)
  mobileMenuBtn.setAttribute('aria-expanded', String(isOpen))
})

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open')
    mobileMenuBtn.classList.remove('is-open')
    mobileMenuBtn.setAttribute('aria-expanded', 'false')
  })
})

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('is-scrolled', window.scrollY > 40)
})

const availabilityModal = document.getElementById('availabilityModal')
const availabilityForm = document.getElementById('availabilityForm')
const availabilitySuccess = document.getElementById('availabilitySuccess')
const formSteps = Array.from(document.querySelectorAll('[data-form-step]'))
const progressSteps = Array.from(document.querySelectorAll('[data-progress-step]'))
const formBack = document.getElementById('formBack')
const formNext = document.getElementById('formNext')
const formSubmit = document.getElementById('formSubmit')
const childFields = document.getElementById('childFields')
const childCount = document.getElementById('childCount')
const childAges = document.getElementById('childAges')
const travelDate = document.getElementById('travelDate')
const sendRequestEmail = document.getElementById('sendRequestEmail')
const requestPreview = document.getElementById('requestPreview')
let currentFormStep = 1
let lastAvailabilityTrigger = null

const today = new Date()
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split('T')[0]
travelDate.min = localToday

function showFormStep(step) {
  currentFormStep = step
  formSteps.forEach((element) => element.classList.toggle('is-active', Number(element.dataset.formStep) === step))
  progressSteps.forEach((element) => {
    const progressStep = Number(element.dataset.progressStep)
    element.classList.toggle('is-active', progressStep === step)
    element.classList.toggle('is-complete', progressStep < step)
  })
  formBack.hidden = step === 1
  formNext.hidden = step === formSteps.length
  formSubmit.hidden = step !== formSteps.length
  availabilityModal.querySelector('.availability-panel').scrollTop = 0
}

function validateCurrentStep() {
  const currentPanel = formSteps.find((element) => Number(element.dataset.formStep) === currentFormStep)
  const requiredFields = Array.from(currentPanel.querySelectorAll('[required]'))
  for (const field of requiredFields) {
    if (!field.checkValidity()) {
      field.reportValidity()
      return false
    }
  }
  return true
}

function openAvailabilityModal(trigger) {
  lastAvailabilityTrigger = trigger
  availabilityModal.classList.add('is-open')
  availabilityModal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('availability-modal-open')
  window.setTimeout(() => travelDate.focus(), 120)
}

function closeAvailabilityModal() {
  availabilityModal.classList.remove('is-open')
  availabilityModal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('availability-modal-open')
  if (lastAvailabilityTrigger) lastAvailabilityTrigger.focus()
}

document.querySelectorAll('.availability-trigger').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault()
    openAvailabilityModal(trigger)
  })
})

document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeAvailabilityModal))

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && availabilityModal.classList.contains('is-open')) closeAvailabilityModal()
})

formNext.addEventListener('click', () => {
  if (validateCurrentStep()) showFormStep(Math.min(formSteps.length, currentFormStep + 1))
})

formBack.addEventListener('click', () => showFormStep(Math.max(1, currentFormStep - 1)))

document.querySelectorAll('input[name="Children travelling"]').forEach((input) => {
  input.addEventListener('change', () => {
    const hasChildren = input.value === 'Yes'
    childFields.hidden = !hasChildren
    childCount.required = hasChildren
    childAges.required = hasChildren
    if (!hasChildren) {
      childCount.value = ''
      childAges.value = ''
    }
  })
})

availabilityForm.addEventListener('submit', (event) => {
  event.preventDefault()
  if (!validateCurrentStep()) return

  const formData = new FormData(availabilityForm)
  const entries = Array.from(formData.entries()).filter(([key]) => key !== 'Consent')
  const requestId = `VTR-${Date.now().toString().slice(-6)}`
  const summaryLines = entries.map(([key, value]) => `${key}: ${value}`)
  const emailBody = [
    'Valmiki Tiger Reserve availability request',
    `Reference: ${requestId}`,
    '',
    ...summaryLines,
    '',
    'Please check accommodation, forest safari and helicopter availability separately.'
  ].join('\n')

  requestPreview.replaceChildren()
  const reference = document.createElement('strong')
  reference.textContent = `Reference: ${requestId}`
  requestPreview.appendChild(reference)
  ;[
    ['Travel date', formData.get('Preferred travel date')],
    ['Travellers', `${formData.get('Adults')}, children: ${formData.get('Children travelling')}`],
    ['Helicopter', formData.get('Helicopter transfer')],
    ['Contact', `${formData.get('Full name')} · ${formData.get('Phone')}`]
  ].forEach(([label, value]) => {
    const row = document.createElement('p')
    const labelElement = document.createElement('span')
    const valueElement = document.createElement('b')
    labelElement.textContent = label
    valueElement.textContent = value
    row.append(labelElement, valueElement)
    requestPreview.appendChild(row)
  })

  sendRequestEmail.href = `mailto:support@bihardiscovery.in?subject=${encodeURIComponent(`Valmiki availability request — ${requestId}`)}&body=${encodeURIComponent(emailBody)}`
  availabilityForm.hidden = true
  availabilitySuccess.hidden = false
  availabilityModal.querySelector('.availability-progress').hidden = true
  availabilityModal.querySelector('.availability-panel').scrollTop = 0
})

document.getElementById('startNewRequest').addEventListener('click', () => {
  availabilityForm.reset()
  childFields.hidden = true
  childCount.required = false
  childAges.required = false
  availabilitySuccess.hidden = true
  availabilityForm.hidden = false
  availabilityModal.querySelector('.availability-progress').hidden = false
  showFormStep(1)
})

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

document.querySelectorAll('.package-section-heading, .package-highlight, .package-route-day, .package-day, .package-inclusion-grid article').forEach((element) => {
  element.classList.add('package-reveal')
  revealObserver.observe(element)
})
