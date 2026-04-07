const translations = {
  fr: {
    'nav.solutions': 'Solutions',
    'nav.produits': 'Produits',
    'nav.comment': 'Comment ça marche',
    'nav.cta': 'Devenir Partenaire',
    'hero.h1': 'Vos clients ne tomberont plus à court de <span class="text-primary-container bg-on-surface px-2 whitespace-nowrap">batterie.</span>',
    'hero.p': 'Bod installe des stations de location de batteries portables dans votre établissement — gratuitement, sans engagement, personnalisées à vos couleurs.',
    'hero.cta1': 'Installer une station',
    'hero.cta2': 'Comment ça marche',
    'hero.badge.label': 'Installation gratuite',
    'hero.badge.text': 'Station personnalisée à vos couleurs',
    'how.h2': 'Comment ça marche',
    'how.step1.title': 'Scan du QR code',
    'how.step1.text': 'Le client scanne directement sur la station — aucune app à télécharger.',
    'how.step2.title': 'Location de la batterie',
    'how.step2.text': 'Paiement Stripe par carte — <strong>€1 / 30 min</strong>. €30 bloqués en garantie, remboursés au retour.',
    'how.step3.title': 'Retour avant de partir',
    'how.step3.text': 'La batterie est rendue dans la station. La garantie est libérée automatiquement.',
    'sectors.h2': 'Secteurs d\'activité',
    'sectors.s1.title': 'Bars & Restaurants',
    'sectors.s1.text': 'Le client qui attend sa batterie rechargée consomme davantage. Résout le "vous avez un câble ?" définitivement.',
    'sectors.s2.title': 'Hôtels',
    'sectors.s2.text': 'Service premium sans coût. Un client qui a rechargé son téléphone à l\'hôtel met 5 étoiles.',
    'sectors.s3.title': 'Centres commerciaux',
    'sectors.s3.text': 'Un client dont le téléphone est mort repart. Un client qui peut recharger reste et continue à consommer.',
    'sectors.s4.title': 'Salles de sport',
    'sectors.s4.text': 'Les membres viennent souvent avec une batterie faible (musique, tracking). Station en accueil ou vestiaires.',
    'sectors.s5.title': 'Événementiel',
    'sectors.s5.text': 'Concerts, festivals, parcs de loisirs. Besoin fort et ponctuel — visibilité maximale pour la marque.',
    'sectors.s6.title': 'Votre établissement',
    'sectors.s6.text': 'Installation gratuite, zéro engagement, station personnalisée à vos couleurs.',
    'sectors.s6.cta': 'Devenir partenaire',
    'avantages.h2': 'Zéro risque.<br/>100% service.',
    'cta.h2': 'Prêt à électriser<br/>votre établissement ?',
    'cta.p': 'Installation gratuite, station personnalisée à vos couleurs, zéro engagement.',
    'cta.btn': 'Devenir partenaire',
    'footer.tagline': 'La batterie de vos clients, c\'est notre affaire.',
  },
  en: {
    'nav.solutions': 'Solutions',
    'nav.produits': 'Products',
    'nav.comment': 'How it works',
    'nav.cta': 'Become a Partner',
    'hero.h1': 'Your customers will never run out of <span class="text-primary-container bg-on-surface px-2 whitespace-nowrap">battery.</span>',
    'hero.p': 'Bod installs portable battery rental stations in your venue — for free, with no commitment, customised to your brand.',
    'hero.cta1': 'Install a station',
    'hero.cta2': 'How it works',
    'hero.badge.label': 'Free installation',
    'hero.badge.text': 'Station customised to your brand',
    'how.h2': 'How it works',
    'how.step1.title': 'Scan the QR code',
    'how.step1.text': 'The customer scans directly on the station — no app required.',
    'how.step2.title': 'Rent the battery',
    'how.step2.text': 'Card payment via Stripe — <strong>€1 / 30 min</strong>. €30 held as deposit, refunded on return.',
    'how.step3.title': 'Return before leaving',
    'how.step3.text': 'The battery is returned to the station. The deposit is released automatically.',
    'sectors.h2': 'Industries',
    'sectors.s1.title': 'Bars & Restaurants',
    'sectors.s1.text': 'Customers waiting for their battery to charge spend more. Solves "do you have a cable?" forever.',
    'sectors.s2.title': 'Hotels',
    'sectors.s2.text': 'Premium service at no cost. A guest who charged their phone at your hotel leaves a 5-star review.',
    'sectors.s3.title': 'Shopping Centres',
    'sectors.s3.text': 'A customer whose phone dies leaves. One who can recharge stays and keeps spending.',
    'sectors.s4.title': 'Gyms',
    'sectors.s4.text': 'Members often arrive with low battery (music, tracking). Station at reception or locker rooms.',
    'sectors.s5.title': 'Events',
    'sectors.s5.text': 'Concerts, festivals, leisure parks. High demand at peak moments — maximum brand visibility.',
    'sectors.s6.title': 'Your venue',
    'sectors.s6.text': 'Free installation, no commitment, station customised to your brand.',
    'sectors.s6.cta': 'Become a partner',
    'avantages.h2': 'Zero risk.<br/>100% service.',
    'cta.h2': 'Ready to power up<br/>your venue?',
    'cta.p': 'Free installation, station customised to your brand, no commitment.',
    'cta.btn': 'Become a partner',
    'footer.tagline': 'Your customers\' battery is our business.',
  }
};

function getLang() {
  return localStorage.getItem('bod-lang') || 'fr';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('bod-lang', lang);
  // Update nav button
  const flagEl = document.getElementById('lang-flag');
  const labelEl = document.getElementById('lang-label');
  if (flagEl) flagEl.textContent = lang === 'fr' ? '🇫🇷' : '🇬🇧';
  if (labelEl) labelEl.textContent = lang === 'fr' ? 'FR' : 'EN';
  // Update modal active state
  document.querySelectorAll('.bod-lang-opt').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.style.background = active ? '#e6f5c9' : '#f0ede9';
    btn.style.fontWeight = active ? '700' : '500';
    const check = btn.querySelector('.bod-check');
    if (check) check.style.display = active ? 'block' : 'none';
  });
  closeModal();
}

function closeModal() {
  const overlay = document.getElementById('bod-lang-overlay');
  const sheet = document.getElementById('bod-lang-sheet');
  if (!overlay || overlay.style.display === 'none') return;
  sheet.style.transform = 'translateY(100%)';
  sheet.style.opacity = '0';
  setTimeout(() => { overlay.style.display = 'none'; }, 280);
}

function openModal() {
  const overlay = document.getElementById('bod-lang-overlay');
  const sheet = document.getElementById('bod-lang-sheet');
  if (!overlay) return;
  overlay.style.display = 'flex';
  requestAnimationFrame(() => {
    sheet.style.transform = 'translateY(0)';
    sheet.style.opacity = '1';
  });
}

function injectModal() {
  const overlay = document.createElement('div');
  overlay.id = 'bod-lang-overlay';
  overlay.style.cssText = 'display:none;position:fixed;inset:0;z-index:300;background:rgba(0,0,0,0.4);align-items:flex-end;justify-content:center;padding-bottom:env(safe-area-inset-bottom,0);';
  overlay.innerHTML = `
    <div id="bod-lang-sheet" style="background:#fbf9f8;border-radius:24px 24px 0 0;padding:0 24px 40px;width:100%;max-width:480px;transform:translateY(100%);opacity:0;transition:transform 0.28s cubic-bezier(0.32,0.72,0,1),opacity 0.28s ease;">
      <div style="padding:14px 0 8px;text-align:center;">
        <div style="width:36px;height:4px;border-radius:4px;background:#d4d0cc;margin:0 auto;"></div>
      </div>
      <p style="font-size:10px;font-weight:800;letter-spacing:0.12em;text-transform:uppercase;color:#9a9690;margin:16px 0 12px;font-family:Inter,sans-serif;">Langue · Language</p>
      <div style="display:flex;flex-direction:column;gap:8px;">
        <button class="bod-lang-opt" data-lang="fr" style="display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:16px;border:none;cursor:pointer;font-size:15px;font-family:Inter,sans-serif;width:100%;text-align:left;transition:background 0.15s;background:#f0ede9;font-weight:500;">
          <span style="font-size:22px;flex-shrink:0;">🇫🇷</span>
          <span style="color:#1a1a1a;">Français</span>
          <span class="bod-check" style="display:none;margin-left:auto;color:#5a7a00;font-size:18px;font-weight:900;">✓</span>
        </button>
        <button class="bod-lang-opt" data-lang="en" style="display:flex;align-items:center;gap:14px;padding:15px 18px;border-radius:16px;border:none;cursor:pointer;font-size:15px;font-family:Inter,sans-serif;width:100%;text-align:left;transition:background 0.15s;background:#f0ede9;font-weight:500;">
          <span style="font-size:22px;flex-shrink:0;">🇬🇧</span>
          <span style="color:#1a1a1a;">English</span>
          <span class="bod-check" style="display:none;margin-left:auto;color:#5a7a00;font-size:18px;font-weight:900;">✓</span>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  overlay.querySelectorAll('.bod-lang-opt').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.getAttribute('data-lang')));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectModal();
  applyLang(getLang());
  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', openModal);
});
