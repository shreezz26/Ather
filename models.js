/* --- CUSTOM SMOOTH SCROLL FOR STICKY HEADERS --- */
window.smoothScrollTo = function(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const headerOffset = 130; 
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
};

/* --- EXCLUSIVE INDIVIDUAL VARIANT DATA SCHEMA --- */
const atherModels = {
  'rizta-s': { 
      name: 'Rizta S', subtitle: 'Everyday Urban Comfort', price: '₹ 1.18 Lakh', 
      specs: { accel: '4.7 SECS', speed: '80 KMPH', torque: '22 NM', range: '123 KM*' }, 
      views: { exterior: 'images/rizta-assets/White-Mono.webp' } 
  },
  'rizta-z': { 
      name: 'Rizta Z', subtitle: 'The Ultimate Family Upgrade', price: '₹ 1.34 Lakh', 
      specs: { accel: '4.7 SECS', speed: '80 KMPH', torque: '22 NM', range: '159 KM*' }, 
      views: { exterior: 'images/rizta-assets/Rizta-Terracotta-Red-Duo-New.webp' } 
  },
  '450s': { 
      name: '450S', subtitle: 'Entry to Performance', price: '₹ 1.33 Lakh', 
      specs: { accel: '3.9 SECS', speed: '90 KMPH', torque: '22 NM', range: '122 KM*' }, 
      views: { exterior: 'images/450-assets/Ather-450-colours-Stealth-Blue.webp', dashboard: 'images/450-assets/450-dashboard-s-d.webp', video: 'images/450-assets/ather-450s.mp4' },
      gallery: [
          'images/450-assets/Gallery-d-1.webp', 
          'images/450-assets/Gallery-d-2.webp', 
          'images/450-assets/Gallery-d-3.webp', 
          'images/450-assets/Gallery-d-4.webp'
      ]
  },
  '450x': { 
      name: '450X', subtitle: 'The Street Smart Scooter', price: '₹ 1.49 Lakh', 
      specs: { accel: '3.3 SECS', speed: '90 KMPH', torque: '26 NM', range: '161 KM*' }, 
      views: { exterior: 'images/450-assets/Ather-450-colours-Hyper-Sand.webp', dashboard: 'images/450-assets/450-dashboard-x-d.webp', video: 'images/450-assets/ather-450x.mp4' },
      gallery: [
          'images/450-assets/Gallery-d-1.webp', 
          'images/450-assets/Gallery-d-2.webp', 
          'images/450-assets/Gallery-d-3.webp', 
          'images/450-assets/Gallery-d-4.webp'
      ]
  },
  'apex': { 
      name: '450 Apex', subtitle: 'The Pinnacle of Speed', price: '₹ 1.91 Lakh', 
      specs: { accel: '2.9 SECS', speed: '100 KMPH', torque: '26 NM', range: '157 KM*' }, 
      views: { 
          exterior: 'images/apex-assets/apex-model.jpeg', 
          dashboard: [
              'images/apex-assets/Ather-450-Apex-Call-Music-Control.webp',
              'images/apex-assets/Ather-450-Apex-Google-Maps-Platform.webp',
              'images/apex-assets/Ather-450-Apex-WhatsApp-on-Dash.webp',
              'images/apex-assets/Live20Scores.webp'
          ],
          video: 'images/apex-assets/apex-overview.mp4' 
      },
      gallery: [
          'images/apex-assets/Ather_450_Apex_Action.jpg',
          'images/apex-assets/Ather-450-apex-traction-control-d.webp',
          'images/apex-assets/apex10.jpeg',
          'images/apex-assets/apex11.jpeg'
      ]
  }
};

/* --- RIZTA COLOUR DATA --- */
const riztaColors = [
    { category: 'matte', name: 'Terracotta Red', hex: '#942B28', bg: '#4A1514', src: 'images/rizta-assets/Rizta-Red-Super-Matte.webp' },
    { category: 'matte', name: 'Stealth Blue', hex: '#1C2938', bg: '#0E141C', src: 'images/rizta-assets/Blue-Mono.webp' },
    { category: 'duo', name: 'Terracotta Red Duo', hex: 'linear-gradient(135deg, #942B28 50%, #F2F2F2 50%)', bg: '#4A1514', src: 'images/rizta-assets/Rizta-Terracotta-Red-Duo-New.webp' },
    { category: 'duo', name: 'Stealth Blue Duo', hex: 'linear-gradient(135deg, #1C2938 50%, #F2F2F2 50%)', bg: '#0E141C', src: 'images/rizta-assets/Blue-Duo.webp' },
    { category: 'duo', name: 'Yellow Duo', hex: 'linear-gradient(135deg, #D4B856 50%, #F2F2F2 50%)', bg: '#6A5C2B', src: 'images/rizta-assets/Yellow-Duo.webp' },
    { category: 'duo', name: 'Green Duo', hex: 'linear-gradient(135deg, #7A8B7A 50%, #F2F2F2 50%)', bg: '#3D453D', src: 'images/rizta-assets/Green-Duo.webp' },
    { category: 'duo', name: 'Grey Duo', hex: 'linear-gradient(135deg, #6B6D6C 50%, #F2F2F2 50%)', bg: '#353636', src: 'images/rizta-assets/Grey-Duo.webp' },
    { category: 'mono', name: 'Grey Mono', hex: '#6B6D6C', bg: '#353636', src: 'images/rizta-assets/Grey-Mono.webp' },
    { category: 'mono', name: 'Pristine White', hex: '#F2F2F2', bg: '#222222', src: 'images/rizta-assets/White-Mono.webp' }
];

/* --- 450/APEX COLOUR DATA --- */
const perfColors = [
    { category: 'series', name: 'Cosmic Black', hex: '#111111', bg: '#050505', src: 'images/450-assets/Ather-450-colours-Cosmic-Black.webp' },
    { category: 'series', name: 'Hyper Sand', hex: '#D2C4B3', bg: '#1A1714', src: 'images/450-assets/Ather-450-colours-Hyper-Sand.webp' },
    { category: 'series', name: 'Lunar Grey', hex: '#8C8C8C', bg: '#111111', src: 'images/450-assets/Ather-450-colours-Lunar-Grey.webp' },
    { category: 'series', name: 'Space Grey', hex: '#4A4A4A', bg: '#0A0A0A', src: 'images/450-assets/Ather-450-colours-Space-Grey.webp' },
    { category: 'series', name: 'Stealth Blue', hex: '#1C2938', bg: '#0A0F14', src: 'images/450-assets/Ather-450-colours-Stealth-Blue.webp' },
    { category: 'series', name: 'Still White', hex: '#F2F2F2', bg: '#1A1A1A', src: 'images/450-assets/Ather-450-colours-Still-White.webp' },
    { category: 'series', name: 'True Red', hex: '#B21E23', bg: '#1A0505', src: 'images/450-assets/Ather-450-colours-True-Red.webp' },
    { category: 'apex', name: 'Indium Blue', hex: 'linear-gradient(135deg, #0B1B2B 50%, #FF6600 50%)', bg: '#050a14', src: 'images/apex-assets/apex-model.jpeg' }
];

/* --- INTERACTIVE BOOM ASSETS --- */
const boomAssets = [
  'images/rizta-assets/ather-battery-duo-red.avif',
  'images/rizta-assets/ather-detail-duo-red.avif',
  'images/rizta-assets/ather-display-red-duo.avif',
  'images/rizta-assets/ather-footrest-red-duo.avif',
  'images/rizta-assets/ather-storage-duo-red.avif',
  'images/rizta-assets/ather-suspension-red-duo.avif',
  'images/rizta-assets/ather-switches-buttons-duo-red.avif'
];

const perfBoomAssets = [
  'images/450-assets/450-chassis-d.webp',
  'images/450-assets/Ather-450-monoshock-d.webp',
  'images/450-assets/Ather-450-dash-Google-Map-Platform.webp',
  'images/450-assets/Ather-450-dash-Live-Location-Sharing.webp',
  'images/450-assets/Ather-450-dash-WhatsApp-on-Dash.webp',
  'images/450-assets/45020Live20Scores20450.webp',
  'images/450-assets/450s-right-side-throttle-grip.avif',
  'images/450-assets/450s-electric-bike-charging-input-plug.avif',
  'images/450-assets/450s-floorboard.avif'
];

const apexBoomAssets = [
  'images/apex-assets/apex1.jpeg',
  'images/apex-assets/apex2.jpeg',
  'images/apex-assets/apex3.jpeg',
  'images/apex-assets/apex4.jpeg',
  'images/apex-assets/apex5.jpeg',
  'images/apex-assets/apex6.jpeg',
  'images/apex-assets/apex7.jpeg',
  'images/apex-assets/apex8.avif',
  'images/apex-assets/apex9.avif',
  'images/apex-assets/apex12.jpeg',
  'images/apex-assets/apex13.jpeg'
];

let selectedModel = 'home'; 
let homeSliderInterval;
let riztaGalleryInterval;
let perfGalleryInterval;
let dashboardInterval; 

let isBoomActive = false;
let currentBoomBaseSrc = ''; 

let isPerfBoomActive = false;
let currentPerfBoomBaseSrc = '';

const domRefs = {
  pageTitle: document.getElementById('pageTitle'),
  
  perfHeroTitle: document.getElementById('perfHeroTitle'),
  heroSubtitle: document.getElementById('heroSubtitle'),
  heroPrice: document.getElementById('heroPrice'),
  dashboardImage: document.getElementById('dashboardImage'),
  perfVideo: document.getElementById('perfVideo'),
  specAccel: document.getElementById('specAccel'),
  specSpeed: document.getElementById('specSpeed'),
  specTorque: document.getElementById('specTorque'),
  specRange: document.getElementById('specRange'),
  perfConfigImage: document.getElementById('perfConfigImage'), 
  perfLeftFloating: document.getElementById('perfLeftFloatingImages'),
  perfRightFloating: document.getElementById('perfRightFloatingImages'),
  perfBannerText: document.getElementById('perfBannerText'),

  // Dynamic Perf Configurator Details Box
  perfConfigDetails: document.getElementById('perfConfigDetails'),
  perfDetailName: document.getElementById('perfDetailName'),
  perfDetailColor: document.getElementById('perfDetailColor'),
  perfDetailPrice: document.getElementById('perfDetailPrice'),

  riztaHeroTitle: document.getElementById('riztaHeroTitle'),
  riztaHeroSubtitle: document.getElementById('riztaHeroSubtitle'),
  riztaHeroPrice: document.getElementById('riztaHeroPrice'),
  riztaConfigImage: document.getElementById('riztaConfigImage'),
  leftFloating: document.getElementById('leftFloatingImages'),
  rightFloating: document.getElementById('rightFloatingImages'),
  riztaBannerText: document.getElementById('riztaBannerText'),
  riztaSpecAccel: document.getElementById('riztaSpecAccel'),
  riztaSpecSpeed: document.getElementById('riztaSpecSpeed'),
  riztaSpecTorque: document.getElementById('riztaSpecTorque'),
  riztaSpecRange: document.getElementById('riztaSpecRange'),

  // Dynamic Rizta Configurator Details Box
  riztaConfigDetails: document.getElementById('riztaConfigDetails'),
  riztaDetailName: document.getElementById('riztaDetailName'),
  riztaDetailColor: document.getElementById('riztaDetailColor'),
  riztaDetailPrice: document.getElementById('riztaDetailPrice')
};

window.selectVariant = function(variantKey) {
  window.location.hash = variantKey; 
};

function startHomeSlider() {
    let slides = document.querySelectorAll('.home-slide');
    if (!slides.length) return;
    let currentIndex = 0;
    if(homeSliderInterval) clearInterval(homeSliderInterval);
    homeSliderInterval = setInterval(() => {
        slides = document.querySelectorAll('.home-slide');
        if (!slides.length) return;
        slides.forEach(s => s.classList.remove('active'));
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 3000); 
}

function startRiztaGallerySlider() {
    let slides = document.querySelectorAll('#riztaGallerySlider .gallery-slide');
    if (!slides.length) return;
    let currentIndex = 0;
    if(riztaGalleryInterval) clearInterval(riztaGalleryInterval);
    riztaGalleryInterval = setInterval(() => {
        slides = document.querySelectorAll('#riztaGallerySlider .gallery-slide');
        if (!slides.length) return;
        slides.forEach(s => s.classList.remove('active'));
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 3000); 
}

function startPerfGallerySlider() {
    if(perfGalleryInterval) clearInterval(perfGalleryInterval);
    let currentIndex = 0;
    perfGalleryInterval = setInterval(() => {
        let slides = document.querySelectorAll('#perfGallerySlider .gallery-slide');
        if (!slides.length) return;
        
        slides.forEach(s => s.classList.remove('active'));
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 3000);
}

function stopAllSliders() {
    if(homeSliderInterval) clearInterval(homeSliderInterval);
    if(riztaGalleryInterval) clearInterval(riztaGalleryInterval);
    if(perfGalleryInterval) clearInterval(perfGalleryInterval);
    if(dashboardInterval) clearInterval(dashboardInterval); 
}

function resetBoomState() {
    if(!isBoomActive || !domRefs.riztaConfigImage) return;
    isBoomActive = false;
    domRefs.riztaConfigImage.src = currentBoomBaseSrc; 
    domRefs.riztaConfigImage.classList.remove('boom-active');
    domRefs.leftFloating.classList.remove('boom');
    domRefs.rightFloating.classList.remove('boom');
    
    // Bring back the specific model details panel
    if(domRefs.riztaConfigDetails) {
        domRefs.riztaConfigDetails.classList.remove('hidden-details');
    }
    
    if(domRefs.riztaBannerText) {
        domRefs.riztaBannerText.style.opacity = '1';
        domRefs.riztaBannerText.style.transform = 'scale(1)';
    }

    setTimeout(() => {
        domRefs.leftFloating.classList.add('hidden-floating');
        domRefs.rightFloating.classList.add('hidden-floating');
    }, 500); 
}

if(domRefs.riztaConfigImage) {
    domRefs.riztaConfigImage.addEventListener('click', () => {
        if (!isBoomActive) {
            isBoomActive = true;
            currentBoomBaseSrc = domRefs.riztaConfigImage.src;
            domRefs.riztaConfigImage.classList.add('boom-active');
            domRefs.leftFloating.innerHTML = ''; domRefs.rightFloating.innerHTML = '';
            
            // Hide the specific model details panel
            if(domRefs.riztaConfigDetails) {
                domRefs.riztaConfigDetails.classList.add('hidden-details');
            }

            if(domRefs.riztaBannerText) {
                domRefs.riztaBannerText.style.opacity = '0';
                domRefs.riztaBannerText.style.transform = 'scale(0.9)';
            }

            boomAssets.forEach((src, idx) => {
                const img = document.createElement('img');
                img.src = src; 
                img.className = 'floating-image';
                
                img.onclick = (e) => {
                    e.stopPropagation();
                    const tempSrc = domRefs.riztaConfigImage.src;
                    domRefs.riztaConfigImage.src = img.src; img.src = tempSrc;
                };
                if (idx < Math.ceil(boomAssets.length / 2)) domRefs.leftFloating.appendChild(img);
                else domRefs.rightFloating.appendChild(img);
            });
            domRefs.leftFloating.classList.remove('hidden-floating');
            domRefs.rightFloating.classList.remove('hidden-floating');
            setTimeout(() => {
                domRefs.leftFloating.classList.add('boom'); domRefs.rightFloating.classList.add('boom');
            }, 10);
        } else { resetBoomState(); }
    });
}

function resetPerfBoomState() {
    if(!isPerfBoomActive || !domRefs.perfConfigImage) return;
    isPerfBoomActive = false;
    domRefs.perfConfigImage.src = currentPerfBoomBaseSrc; 
    domRefs.perfConfigImage.classList.remove('boom-active');
    domRefs.perfLeftFloating.classList.remove('boom');
    domRefs.perfRightFloating.classList.remove('boom');
    
    domRefs.perfConfigImage.style.mixBlendMode = 'normal';
    
    // Bring back the specific model details panel
    if(domRefs.perfConfigDetails) {
        domRefs.perfConfigDetails.classList.remove('hidden-details');
    }
    
    if(domRefs.perfBannerText) {
        domRefs.perfBannerText.style.opacity = '1';
        domRefs.perfBannerText.style.transform = 'scale(1)';
    }

    setTimeout(() => {
        domRefs.perfLeftFloating.classList.add('hidden-floating');
        domRefs.perfRightFloating.classList.add('hidden-floating');
    }, 500); 
}

if(domRefs.perfConfigImage) {
    domRefs.perfConfigImage.addEventListener('click', () => {
        if (!isPerfBoomActive) {
            isPerfBoomActive = true;
            currentPerfBoomBaseSrc = domRefs.perfConfigImage.src;
            domRefs.perfConfigImage.classList.add('boom-active');
            domRefs.perfLeftFloating.innerHTML = ''; domRefs.perfRightFloating.innerHTML = '';
            
            // Hide the specific model details panel
            if(domRefs.perfConfigDetails) {
                domRefs.perfConfigDetails.classList.add('hidden-details');
            }

            if(domRefs.perfBannerText) {
                domRefs.perfBannerText.style.opacity = '0';
                domRefs.perfBannerText.style.transform = 'scale(0.9)';
            }

            const activeBannerText = domRefs.perfBannerText ? domRefs.perfBannerText.textContent : '';
            const isCurrentlyApex = (selectedModel === 'apex' || activeBannerText === 'Indium Blue');
            const assetsToUse = isCurrentlyApex ? apexBoomAssets : perfBoomAssets;

            assetsToUse.forEach((src, idx) => {
                const img = document.createElement('img');
                img.src = src; 
                img.className = 'floating-image';

                img.style.width = '110px';
                img.style.height = '75px';
                img.style.objectFit = 'cover'; 
                img.style.objectPosition = 'center';
                img.style.borderRadius = '10px';
                img.style.border = '2px solid rgba(255,255,255,0.15)';
                img.style.backgroundColor = 'rgba(0,0,0,0.6)';
                img.style.cursor = 'pointer';
                img.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                
                img.onmouseover = () => {
                    img.style.transform = 'scale(1.15)';
                    img.style.borderColor = '#00E296';
                };
                img.onmouseout = () => {
                    img.style.transform = 'scale(1)';
                    img.style.borderColor = 'rgba(255,255,255,0.15)';
                };

                if (isCurrentlyApex) {
                    img.style.mixBlendMode = 'lighten';
                }

                img.onclick = (e) => {
                    e.stopPropagation();
                    const tempSrc = domRefs.perfConfigImage.src;
                    domRefs.perfConfigImage.src = img.src; img.src = tempSrc;
                    
                    if (isCurrentlyApex) {
                        domRefs.perfConfigImage.style.mixBlendMode = 'lighten';
                    }
                };
                if (idx < Math.ceil(assetsToUse.length / 2)) domRefs.perfLeftFloating.appendChild(img);
                else domRefs.perfRightFloating.appendChild(img);
            });
            domRefs.perfLeftFloating.classList.remove('hidden-floating');
            domRefs.perfRightFloating.classList.remove('hidden-floating');
            setTimeout(() => {
                domRefs.perfLeftFloating.classList.add('boom'); domRefs.perfRightFloating.classList.add('boom');
            }, 10);
        } else { resetPerfBoomState(); }
    });
}

function initColorPickers() {
    const matteContainer = document.getElementById('mattePills');
    const duoContainer = document.getElementById('duoPills');
    const monoContainer = document.getElementById('monoPills');
    
    if (matteContainer && duoContainer && monoContainer && domRefs.riztaConfigImage) {
        matteContainer.innerHTML = ''; duoContainer.innerHTML = ''; monoContainer.innerHTML = '';
        
        riztaColors.forEach((color, i) => {
            const pill = document.createElement('div');
            pill.className = `color-pill`;
            pill.style.cssText = `background: ${color.hex}; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; border: 3px solid #333; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.5);`;
            
            if (color.name === 'Terracotta Red Duo') {
                pill.classList.add('active');
                pill.style.borderColor = '#ffffff';
                pill.style.transform = 'scale(1.15)';
                domRefs.riztaBannerText.textContent = color.name;
                document.getElementById('riztaColorBanner').style.background = color.bg;
                domRefs.riztaConfigImage.src = color.src;
                domRefs.riztaConfigImage.style.cursor = 'pointer'; 
                if(domRefs.riztaDetailColor) domRefs.riztaDetailColor.textContent = color.name;
            }

            pill.onclick = () => {
                resetBoomState();
                
                document.querySelectorAll('#colour .color-pill').forEach(p => {
                    p.classList.remove('active');
                    p.style.transform = 'scale(1)';
                    p.style.borderColor = '#333';
                });
                
                pill.classList.add('active');
                pill.style.transform = 'scale(1.15)';
                pill.style.borderColor = '#ffffff';
                
                domRefs.riztaBannerText.style.transform = 'scale(0.9)';
                domRefs.riztaBannerText.style.opacity = '0';
                domRefs.riztaConfigImage.style.opacity = '0.5';
                
                setTimeout(() => {
                    domRefs.riztaConfigImage.src = color.src;
                    domRefs.riztaBannerText.textContent = color.name;
                    if(domRefs.riztaDetailColor) domRefs.riztaDetailColor.textContent = color.name;
                    document.getElementById('riztaColorBanner').style.background = color.bg;
                    
                    domRefs.riztaConfigImage.style.opacity = '1';
                    domRefs.riztaBannerText.style.opacity = '1';
                    domRefs.riztaBannerText.style.transform = 'scale(1)';
                    domRefs.riztaConfigImage.style.cursor = 'pointer'; 
                }, 200);
            };
            
            if (color.category === 'matte') matteContainer.appendChild(pill);
            if (color.category === 'duo') duoContainer.appendChild(pill);
            if (color.category === 'mono') monoContainer.appendChild(pill);
        });
    }

    const seriesContainer = document.getElementById('perfSeriesPills');
    const apexContainer = document.getElementById('perfApexPills');

    if (seriesContainer && apexContainer && domRefs.perfConfigImage) {
        seriesContainer.innerHTML = ''; apexContainer.innerHTML = '';

        perfColors.forEach((color, i) => {
            const pill = document.createElement('div');
            pill.className = `color-pill`;
            pill.dataset.colorName = color.name; 
            pill.style.cssText = `background: ${color.hex}; width: 45px; height: 45px; border-radius: 50%; cursor: pointer; border: 3px solid #333; transition: all 0.3s ease; box-shadow: 0 4px 10px rgba(0,0,0,0.5);`;

            if (color.name === 'Hyper Sand') {
                pill.classList.add('active');
                pill.style.borderColor = '#ffffff';
                pill.style.transform = 'scale(1.15)';
                domRefs.perfBannerText.textContent = color.name;
                document.getElementById('perfColorBanner').style.background = color.bg;
                domRefs.perfConfigImage.src = color.src;
                domRefs.perfConfigImage.style.cursor = 'pointer';
                if(domRefs.perfDetailColor) domRefs.perfDetailColor.textContent = color.name;
            }

            pill.onclick = () => {
                resetPerfBoomState();

                document.querySelectorAll('#perf-colour .color-pill').forEach(p => {
                    p.classList.remove('active');
                    p.style.transform = 'scale(1)';
                    p.style.borderColor = '#333';
                });

                pill.classList.add('active');
                pill.style.transform = 'scale(1.15)';
                pill.style.borderColor = '#ffffff';

                domRefs.perfBannerText.style.transform = 'scale(0.9)';
                domRefs.perfBannerText.style.opacity = '0';
                domRefs.perfConfigImage.style.opacity = '0.5';

                setTimeout(() => {
                    domRefs.perfConfigImage.src = color.src;
                    domRefs.perfBannerText.textContent = color.name;
                    if(domRefs.perfDetailColor) domRefs.perfDetailColor.textContent = color.name;
                    document.getElementById('perfColorBanner').style.background = color.bg;

                    domRefs.perfConfigImage.style.opacity = '1';
                    domRefs.perfBannerText.style.opacity = '1';
                    domRefs.perfBannerText.style.transform = 'scale(1)';
                    domRefs.perfConfigImage.style.cursor = 'pointer';
                    
                    if(color.category === 'apex') {
                        domRefs.perfConfigImage.style.mixBlendMode = 'lighten';
                        if(domRefs.perfDetailPrice) domRefs.perfDetailPrice.style.color = '#FF6600';
                    } else {
                        domRefs.perfConfigImage.style.mixBlendMode = 'normal';
                        if(domRefs.perfDetailPrice) domRefs.perfDetailPrice.style.color = '#00E296';
                    }
                    
                }, 200);
            };

            if (color.category === 'series') seriesContainer.appendChild(pill);
            if (color.category === 'apex') apexContainer.appendChild(pill);
        });
    }
}

function parseActiveHash() {
  const targetHash = window.location.hash.substring(1).trim().toLowerCase();
  stopAllSliders();

  document.getElementById('homeView').classList.add('hidden');
  document.getElementById('performanceView').classList.add('hidden');
  document.getElementById('riztaView').classList.add('hidden');

  if (!targetHash || targetHash === 'home') {
    selectedModel = 'home';
    document.getElementById('homeView').classList.remove('hidden');
    startHomeSlider();
  } else if (targetHash === 'rizta') {
    window.location.hash = 'rizta-z'; return;
  } else if (targetHash.startsWith('rizta')) {
    selectedModel = targetHash;
    document.getElementById('riztaView').classList.remove('hidden');
    startRiztaGallerySlider();
  } else if (targetHash === '450') {
    window.location.hash = '450x'; return;
  } else if (targetHash === '450x' || targetHash === '450s' || targetHash === 'apex') {
    selectedModel = targetHash;
    document.getElementById('performanceView').classList.remove('hidden');
    startPerfGallerySlider(); 
  }
  
  renderTemplate();
}

function updateModelToggle(modelType) {
  const toggle450 = document.getElementById('series450Toggle');
  const toggleRizta = document.getElementById('seriesRiztaToggle');

  if (toggle450) { toggle450.classList.remove('hidden'); toggle450.style.display = 'none'; }
  if (toggleRizta) { toggleRizta.classList.remove('hidden'); toggleRizta.style.display = 'none'; }

  if (modelType === '450s' || modelType === '450x' || modelType === 'apex') {
    if (toggle450) {
      toggle450.style.display = 'flex';
      document.getElementById('btn-toggle-450s').classList.toggle('active', modelType === '450s');
      document.getElementById('btn-toggle-450x').classList.toggle('active', modelType === '450x');
      document.getElementById('btn-toggle-apex').classList.toggle('active', modelType === 'apex');
    }
  } else if (modelType === 'rizta-s' || modelType === 'rizta-z') {
    if (toggleRizta) {
      toggleRizta.style.display = 'flex';
      document.getElementById('btn-toggle-rizta-s').classList.toggle('active', modelType === 'rizta-s');
      document.getElementById('btn-toggle-rizta-z').classList.toggle('active', modelType === 'rizta-z');
    }
  }
}

function renderTemplate() {
  if (selectedModel !== 'home') {
    const model = atherModels[selectedModel] || atherModels['450x'];
    if (domRefs.pageTitle) domRefs.pageTitle.textContent = `Ather Select | ${model.name}`;

    if (selectedModel.startsWith('rizta')) {
        if (domRefs.riztaHeroTitle) domRefs.riztaHeroTitle.textContent = `Meet ${model.name}`;
        if (domRefs.riztaHeroSubtitle) domRefs.riztaHeroSubtitle.textContent = model.subtitle;
        if (domRefs.riztaHeroPrice) domRefs.riztaHeroPrice.textContent = `Starts at ${model.price}`;
        
        if (domRefs.riztaSpecAccel) domRefs.riztaSpecAccel.textContent = model.specs.accel;
        if (domRefs.riztaSpecSpeed) domRefs.riztaSpecSpeed.textContent = model.specs.speed;
        if (domRefs.riztaSpecTorque) domRefs.riztaSpecTorque.textContent = model.specs.torque;
        if (domRefs.riztaSpecRange) domRefs.riztaSpecRange.textContent = model.specs.range;

        // Sync details panel
        if (domRefs.riztaDetailName) domRefs.riztaDetailName.textContent = model.name;
        if (domRefs.riztaDetailPrice) domRefs.riztaDetailPrice.textContent = model.price;

        // Toggle Duo colours visibility based on selected model
        const duoPillsContainer = document.getElementById('duoPills');
        if (duoPillsContainer && duoPillsContainer.parentElement) {
            if (selectedModel === 'rizta-s') {
                duoPillsContainer.parentElement.style.display = 'none';
                
                // Switch to a Mono colour automatically if a Duo colour is currently active
                const activePill = document.querySelector('#colour .color-pill.active');
                if (activePill && activePill.parentElement.id === 'duoPills') {
                    const firstMono = document.querySelector('#monoPills .color-pill');
                    if (firstMono) firstMono.click();
                }
            } else {
                duoPillsContainer.parentElement.style.display = 'flex';
            }
        }

    } else {
        if (domRefs.perfHeroTitle) domRefs.perfHeroTitle.textContent = `Meet ${model.name}`;
        if (domRefs.heroSubtitle) domRefs.heroSubtitle.textContent = model.subtitle;
        if (domRefs.heroPrice) domRefs.heroPrice.textContent = `Starts at ${model.price}`;
        
        if (domRefs.specAccel) domRefs.specAccel.textContent = model.specs.accel;
        if (domRefs.specSpeed) domRefs.specSpeed.textContent = model.specs.speed;
        if (domRefs.specTorque) domRefs.specTorque.textContent = model.specs.torque;
        if (domRefs.specRange) domRefs.specRange.textContent = model.specs.range;

        // Sync details panel & toggle price color dynamically for apex
        if (domRefs.perfDetailName) domRefs.perfDetailName.textContent = model.name;
        if (domRefs.perfDetailPrice) {
            domRefs.perfDetailPrice.textContent = model.price;
            domRefs.perfDetailPrice.style.color = selectedModel === 'apex' ? '#FF6600' : '#00E296';
        }
        
        // HIDE OR SHOW THE APPROPRIATE COLOUR PILL WRAPPERS BASED ON MODEL
        const seriesWrapper = document.getElementById('perfSeriesWrapper');
        const apexWrapper = document.getElementById('perfApexWrapper');
        
        if (selectedModel === 'apex') {
            if (seriesWrapper) seriesWrapper.style.display = 'none';
            if (apexWrapper) apexWrapper.style.display = 'flex';
        } else {
            if (seriesWrapper) seriesWrapper.style.display = 'flex';
            if (apexWrapper) apexWrapper.style.display = 'none';
        }
        
        if (dashboardInterval) clearInterval(dashboardInterval); 
        
        if (Array.isArray(model.views.dashboard)) {
            let dashIndex = 0;
            domRefs.dashboardImage.src = model.views.dashboard[dashIndex];
            domRefs.dashboardImage.style.opacity = '1';
            
            dashboardInterval = setInterval(() => {
                domRefs.dashboardImage.style.opacity = '0'; 
                setTimeout(() => {
                    dashIndex = (dashIndex + 1) % model.views.dashboard.length;
                    domRefs.dashboardImage.src = model.views.dashboard[dashIndex];
                    domRefs.dashboardImage.style.opacity = '1'; 
                }, 300); 
            }, 3000); 
            
        } else {
            domRefs.dashboardImage.src = model.views.dashboard;
            domRefs.dashboardImage.style.opacity = '1';
        }
        
        const gallerySlider = document.getElementById('perfGallerySlider');
        if (gallerySlider && model.gallery) {
            gallerySlider.innerHTML = ''; 
            model.gallery.forEach((src, idx) => {
                const img = document.createElement('img');
                img.src = src;
                img.className = idx === 0 ? 'gallery-slide active' : 'gallery-slide';
                img.alt = `${model.name} Gallery ${idx + 1}`;
                img.onerror = function() { this.src = 'https://placehold.co/1000x500/111/00E296?text=Image+Not+Found'; };
                gallerySlider.appendChild(img);
            });
            startPerfGallerySlider(); 
        }

        setTimeout(() => {
            if (selectedModel === 'apex') {
                const apexPill = document.querySelector('.color-pill[data-color-name="Indium Blue"]');
                if(apexPill && !apexPill.classList.contains('active')) apexPill.click();
            } else if (selectedModel === '450x') {
                const xPill = document.querySelector('.color-pill[data-color-name="Hyper Sand"]');
                if(xPill && !xPill.classList.contains('active')) xPill.click();
            } else if (selectedModel === '450s') {
                const sPill = document.querySelector('.color-pill[data-color-name="Stealth Blue"]');
                if(sPill && !sPill.classList.contains('active')) sPill.click();
            }
        }, 100);

        if (model.views.video) {
            domRefs.perfVideo.innerHTML = `<source src="${model.views.video}" type="video/mp4">`;
            domRefs.perfVideo.parentElement.style.display = 'block';
            domRefs.perfVideo.load();
            let playPromise = domRefs.perfVideo.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => console.log("Playback prevented:", error));
            }
        } else {
            domRefs.perfVideo.pause();
            domRefs.perfVideo.innerHTML = '';
            domRefs.perfVideo.load();
            domRefs.perfVideo.parentElement.style.display = 'none'; 
        }
    }
    updateModelToggle(selectedModel); 
  }
}

window.addEventListener('DOMContentLoaded', () => {
    initColorPickers();
    parseActiveHash();
});
window.addEventListener('hashchange', parseActiveHash);