const translations = {
  fr: {
    // NAV
    'nav.how': 'Comment ça marche',
    'nav.tarifs': 'Tarifs',
    'nav.lieux': 'Lieux',
    'nav.contact': 'Contact',
    'nav.cta': 'Devenir Partenaire',
    // NAV (old keys kept for index.html compatibility)
    'nav.solutions': 'Solutions',
    'nav.produits': 'Produits',
    'nav.comment': 'Comment ça marche',

    // FOOTER
    'footer.tagline': 'La batterie de vos clients, c\'est notre affaire.',
    'footer.partner': 'Devenir partenaire',
    'footer.legal': 'Mentions légales',

    // INDEX — hero
    'hero.h1': 'Vos clients ne tomberont plus à court de <span class="text-primary-container bg-on-surface px-2 whitespace-nowrap">batterie.</span>',
    'hero.p': 'Bod installe des stations de location de batteries portables dans votre établissement, gratuitement, sans engagement, personnalisées à vos couleurs.',
    'hero.cta1': 'Installer une station',
    'hero.cta2': 'Comment ça marche',
    'hero.badge.label': 'Installation gratuite',
    'hero.badge.text': 'Station personnalisée à vos couleurs',
    // INDEX — how
    'how.h2': 'Comment ça marche',
    'how.step1.title': 'Scan du QR code',
    'how.step1.text': 'Le client scanne directement sur la station, aucune app à télécharger.',
    'how.step2.title': 'Location de la batterie',
    'how.step2.text': 'Paiement Stripe par carte, <strong>€1 / 30 min</strong>. €30 bloqués en garantie, remboursés au retour.',
    'how.step3.title': 'Retour avant de partir',
    'how.step3.text': 'La batterie est rendue dans la station. La garantie est libérée automatiquement.',
    // INDEX — sectors
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
    'sectors.s5.text': 'Concerts, festivals, parcs de loisirs. Besoin fort et ponctuel, visibilité maximale pour la marque.',
    'sectors.s6.title': 'Votre établissement',
    'sectors.s6.text': 'Installation gratuite, zéro engagement, station personnalisée à vos couleurs.',
    'sectors.s6.cta': 'Devenir partenaire',
    // INDEX — avantages / cta
    'avantages.h2': 'Zéro risque.<br/>100% service.',
    'cta.h2': 'Prêt à électriser<br/>votre établissement ?',
    'cta.p': 'Installation gratuite, station personnalisée à vos couleurs, zéro engagement.',
    'cta.btn': 'Devenir partenaire',

    // TARIFS
    'tarifs.label': 'Tarifs',
    'tarifs.h1': 'Transparent.<br/>Sans surprise.',
    'tarifs.intro': 'Un modèle simple : gratuit pour l\'établissement, accessible pour l\'utilisateur.',
    'tarifs.user.label': 'Pour vos clients',
    'tarifs.user.sub': 'par tranche de 30 minutes',
    'tarifs.user.f1.title': 'Scan du QR code',
    'tarifs.user.f1.text': 'Aucune application à télécharger. Paiement direct sur le navigateur.',
    'tarifs.user.f2.title': '€30 de caution bloquée',
    'tarifs.user.f2.text': 'Pré-autorisation Stripe remboursée automatiquement au retour de la batterie.',
    'tarifs.user.f3.title': '3 câbles intégrés',
    'tarifs.user.f3.text': 'USB-C, Lightning et Micro-USB. Aucun câble à apporter.',
    'tarifs.user.f4.title': '5 000 mAh',
    'tarifs.user.f4.text': 'Charge complète d\'un iPhone en moins de 2h. La batterie se rend dans n\'importe quelle station BOD.',
    'tarifs.user.note': '<span class="font-bold text-on-surface">Non rendue après 48h ?</span> €30 débités définitivement. La batterie vous appartient.',
    'tarifs.venue.label': 'Pour votre établissement',
    'tarifs.venue.price': 'Gratuit.',
    'tarifs.venue.sub': 'Zéro coût, zéro engagement',
    'tarifs.venue.f1.title': 'Installation et matériel offerts',
    'tarifs.venue.f1.text': 'Station, câbles, configuration. Seule l\'électricité est à votre charge (~€5/mois).',
    'tarifs.venue.f2.title': 'Vos clients restent plus longtemps',
    'tarifs.venue.f2.text': 'Un client qui peut recharger son téléphone ne repart pas. Il commande une autre tournée.',
    'tarifs.venue.f3.title': 'Maintenance incluse',
    'tarifs.venue.f3.text': 'Intervention garantie sous 72h en cas de panne. Vous n\'avez rien à gérer.',
    'tarifs.venue.f4.title': 'Résiliation libre à tout moment',
    'tarifs.venue.f4.text': 'Un email suffit. Récupération du matériel sous 14 jours.',
    'tarifs.venue.cta': 'Devenir partenaire',
    'tarifs.stats.label': 'Ce que les chiffres disent',
    'tarifs.stats.h2': 'La batterie, c\'est un vrai sujet.',
    'tarifs.stats.sub': 'Pour vos clients autant que pour votre établissement.',
    'tarifs.faq.label': 'Questions fréquentes',
    'tarifs.faq.h2': 'FAQ Tarifs',
    'tarifs.faq.q1': 'Est-ce vraiment gratuit pour l\'établissement ?',
    'tarifs.faq.a1': 'Oui. L\'installation, le matériel, la configuration et la maintenance sont entièrement pris en charge par BOD. Votre seule dépense est l\'électricité nécessaire au fonctionnement de la station, soit environ €5 par mois.',
    'tarifs.faq.q2': 'Le tarif de €1 / 30 min peut-il changer ?',
    'tarifs.faq.a2': 'Toute modification tarifaire fait l\'objet d\'une notification 30 jours avant son application. Vous pouvez résilier librement si le nouveau tarif ne vous convient pas.',
    'tarifs.faq.q3': 'Que se passe-t-il si un client part avec la batterie ?',
    'tarifs.faq.a3': 'Les €30 de caution sont débités automatiquement par Stripe après 48h sans retour. L\'établissement n\'a aucune démarche à faire. BOD prend en charge la gestion des litiges et le remplacement des batteries manquantes.',
    'tarifs.faq.q4': 'La station génère-t-elle une consommation électrique importante ?',
    'tarifs.faq.a4': 'Non. La station consomme environ 15W en veille et 30W en charge active. Cela représente moins de €5 par mois sur votre facture électrique.',
    'tarifs.cta.h2': 'Prêt à offrir ce service<br/>à vos clients ?',
    'tarifs.cta.p': 'Installation gratuite, station personnalisée à vos couleurs, zéro engagement.',
    'tarifs.cta.btn': 'Devenir partenaire',

    // STATS (shared)
    'stats.s1': 'des clients ont quitté un lieu à cause d\'une batterie morte',
    'stats.s1.source': 'Source : Powermat Consumer Study',
    'stats.s2': 'de présence en moyenne quand le client peut recharger',
    'stats.s3': 'des clients en bar ou restaurant demande un câble',
    'stats.s3.source': 'Source : IFOP France',

    // LIEUX
    'lieux.label': 'Lieux',
    'lieux.h1': 'BOD arrive<br/>bientôt<br/><span class="text-primary-container bg-on-surface px-2 whitespace-nowrap">près de vous.</span>',
    'lieux.intro': 'Notre réseau est en cours de déploiement. Les premières stations seront en ligne dans les prochaines semaines.',
    'lieux.map.label': 'Exemple — à quoi ressemblera la carte',
    'lieux.deploy.label': 'Déploiement',
    'lieux.deploy.h2': 'Comment ça se passe ?',
    'lieux.deploy.sub': 'Le réseau grandit au rythme des partenaires. Chaque établissement signé = une station de plus sur la carte.',
    'lieux.deploy.s1.title': 'Un établissement signe',
    'lieux.deploy.s1.text': 'Un bar, un restaurant, un hôtel devient partenaire. Aucun coût, zéro engagement.',
    'lieux.deploy.s2.title': 'La station est installée',
    'lieux.deploy.s2.text': 'BOD installe, configure et référence la station. En moins de 48h l\'établissement est opérationnel.',
    'lieux.deploy.s3.title': 'Elle apparaît sur la carte',
    'lieux.deploy.s3.text': 'Les utilisateurs trouvent la station, l\'établissement est visible. Le réseau grandit.',
    'lieux.sectors.label': 'Où trouver BOD',
    'lieux.sectors.h2': 'Partout où vous sortez',
    'lieux.cta1.label': 'Utilisateurs',
    'lieux.cta1.h3': 'Soyez alerté<br/>à l\'ouverture.',
    'lieux.cta1.btn': 'Me notifier',
    'lieux.cta2.label': 'Établissements',
    'lieux.cta2.h3': 'Vous gérez un<br/>établissement ?',
    'lieux.cta2.p': 'Installation gratuite. Zéro engagement.<br/>Vos clients sur la carte dès le premier jour.',
    'lieux.cta2.btn': 'Devenir partenaire',

    // CONTACT
    'contact.label': 'Contact',
    'contact.h1': 'Une question ?<br/><span class="text-primary-container bg-on-surface px-2">On répond.</span>',
    'contact.intro': 'Utilisateur, presse, partenariat — écrivez-nous. Réponse sous 24h.',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Sujet',
    'contact.form.opt1': 'Question générale',
    'contact.form.opt2': 'Devenir partenaire',
    'contact.form.opt3': 'Problème avec une station',
    'contact.form.opt4': 'Presse / Média',
    'contact.form.opt5': 'Autre',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'contact.sidebar.h2': 'Autres façons de nous joindre',
    'contact.sidebar.email.label': 'Email',
    'contact.sidebar.delay.label': 'Délai de réponse',
    'contact.sidebar.delay.value': 'Moins de 24h',
    'contact.sidebar.hq.label': 'Siège',
    'contact.sidebar.hq.value': 'France',
    'contact.sidebar.venue.h3': 'Vous avez un établissement ?',
    'contact.sidebar.venue.p': 'Déposez directement une demande de partenariat pour une réponse prioritaire.',
    'contact.sidebar.venue.cta': 'Devenir partenaire',
    'contact.sidebar.press.h3': 'Presse & Médias',
    'contact.sidebar.press.p': 'Pour toute demande presse, interview ou partenariat éditorial, écrivez directement à <a href="mailto:hello@bodcharge.com" class="font-semibold text-primary hover:underline">hello@bodcharge.com</a> avec "Presse" en objet.',
  },

  en: {
    // NAV
    'nav.how': 'How it works',
    'nav.tarifs': 'Pricing',
    'nav.lieux': 'Locations',
    'nav.contact': 'Contact',
    'nav.cta': 'Become a Partner',
    // NAV (old keys)
    'nav.solutions': 'Solutions',
    'nav.produits': 'Products',
    'nav.comment': 'How it works',

    // FOOTER
    'footer.tagline': 'Your customers\' battery is our business.',
    'footer.partner': 'Become a partner',
    'footer.legal': 'Legal notice',

    // INDEX — hero
    'hero.h1': 'Your customers will never run out of <span class="text-primary-container bg-on-surface px-2 whitespace-nowrap">battery.</span>',
    'hero.p': 'Bod installs portable battery rental stations in your venue, for free, with no commitment, customised to your brand.',
    'hero.cta1': 'Install a station',
    'hero.cta2': 'How it works',
    'hero.badge.label': 'Free installation',
    'hero.badge.text': 'Station customised to your brand',
    // INDEX — how
    'how.h2': 'How it works',
    'how.step1.title': 'Scan the QR code',
    'how.step1.text': 'The customer scans directly on the station, no app required.',
    'how.step2.title': 'Rent the battery',
    'how.step2.text': 'Card payment via Stripe, <strong>€1 / 30 min</strong>. €30 held as deposit, refunded on return.',
    'how.step3.title': 'Return before leaving',
    'how.step3.text': 'The battery is returned to the station. The deposit is released automatically.',
    // INDEX — sectors
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
    'sectors.s5.text': 'Concerts, festivals, leisure parks. High demand at peak moments, maximum brand visibility.',
    'sectors.s6.title': 'Your venue',
    'sectors.s6.text': 'Free installation, no commitment, station customised to your brand.',
    'sectors.s6.cta': 'Become a partner',
    // INDEX — avantages / cta
    'avantages.h2': 'Zero risk.<br/>100% service.',
    'cta.h2': 'Ready to power up<br/>your venue?',
    'cta.p': 'Free installation, station customised to your brand, no commitment.',
    'cta.btn': 'Become a partner',

    // TARIFS
    'tarifs.label': 'Pricing',
    'tarifs.h1': 'Transparent.<br/>No surprises.',
    'tarifs.intro': 'A simple model: free for the venue, affordable for the user.',
    'tarifs.user.label': 'For your customers',
    'tarifs.user.sub': 'per 30-minute block',
    'tarifs.user.f1.title': 'QR code scan',
    'tarifs.user.f1.text': 'No app to download. Payment directly in the browser.',
    'tarifs.user.f2.title': '€30 deposit held',
    'tarifs.user.f2.text': 'Stripe pre-authorisation, automatically released when the battery is returned.',
    'tarifs.user.f3.title': '3 built-in cables',
    'tarifs.user.f3.text': 'USB-C, Lightning and Micro-USB. No cable needed.',
    'tarifs.user.f4.title': '5,000 mAh',
    'tarifs.user.f4.text': 'Full charge of an iPhone in under 2h. The battery can be returned to any BOD station.',
    'tarifs.user.note': '<span class="font-bold text-on-surface">Not returned after 48h?</span> €30 is charged permanently. The battery is yours to keep.',
    'tarifs.venue.label': 'For your venue',
    'tarifs.venue.price': 'Free.',
    'tarifs.venue.sub': 'Zero cost, zero commitment',
    'tarifs.venue.f1.title': 'Installation & equipment included',
    'tarifs.venue.f1.text': 'Station, cables, setup. Your only expense is electricity (~€5/month).',
    'tarifs.venue.f2.title': 'Your customers stay longer',
    'tarifs.venue.f2.text': 'A customer who can charge their phone doesn\'t leave. They order another round.',
    'tarifs.venue.f3.title': 'Maintenance included',
    'tarifs.venue.f3.text': 'Response guaranteed within 72h in case of breakdown. Nothing to manage on your end.',
    'tarifs.venue.f4.title': 'Cancel at any time',
    'tarifs.venue.f4.text': 'One email is all it takes. Equipment collected within 14 days.',
    'tarifs.venue.cta': 'Become a partner',
    'tarifs.stats.label': 'What the numbers say',
    'tarifs.stats.h2': 'Battery life is a real issue.',
    'tarifs.stats.sub': 'For your customers and for your venue.',
    'tarifs.faq.label': 'Frequently asked questions',
    'tarifs.faq.h2': 'Pricing FAQ',
    'tarifs.faq.q1': 'Is it really free for the venue?',
    'tarifs.faq.a1': 'Yes. Installation, equipment, setup and maintenance are entirely covered by BOD. Your only expense is the electricity needed to run the station, around €5 per month.',
    'tarifs.faq.q2': 'Can the €1 / 30 min rate change?',
    'tarifs.faq.a2': 'Any pricing change comes with 30 days\' notice before it takes effect. You can cancel freely if the new rate doesn\'t suit you.',
    'tarifs.faq.q3': 'What happens if a customer leaves with the battery?',
    'tarifs.faq.a3': 'The €30 deposit is automatically charged by Stripe after 48h with no return. The venue has nothing to do. BOD handles disputes and replaces missing batteries.',
    'tarifs.faq.q4': 'Does the station use a lot of electricity?',
    'tarifs.faq.a4': 'No. The station uses around 15W on standby and 30W when actively charging. That\'s less than €5 per month on your electricity bill.',
    'tarifs.cta.h2': 'Ready to offer this service<br/>to your customers?',
    'tarifs.cta.p': 'Free installation, station customised to your brand, no commitment.',
    'tarifs.cta.btn': 'Become a partner',

    // STATS (shared)
    'stats.s1': 'of customers have left a venue because of a dead battery',
    'stats.s1.source': 'Source: Powermat Consumer Study',
    'stats.s2': 'longer average stay when customers can charge',
    'stats.s3': 'of bar and restaurant customers ask for a cable',
    'stats.s3.source': 'Source: IFOP France',

    // LIEUX
    'lieux.label': 'Locations',
    'lieux.h1': 'BOD is coming<br/>soon<br/><span class="text-primary-container bg-on-surface px-2 whitespace-nowrap">near you.</span>',
    'lieux.intro': 'Our network is being deployed. The first stations will go live in the coming weeks.',
    'lieux.map.label': 'Example — what the map will look like',
    'lieux.deploy.label': 'Rollout',
    'lieux.deploy.h2': 'How does it work?',
    'lieux.deploy.sub': 'The network grows with each new partner. Every signed venue = one more station on the map.',
    'lieux.deploy.s1.title': 'A venue signs up',
    'lieux.deploy.s1.text': 'A bar, restaurant or hotel becomes a partner. No cost, no commitment.',
    'lieux.deploy.s2.title': 'The station is installed',
    'lieux.deploy.s2.text': 'BOD installs, configures and lists the station. The venue is up and running within 48h.',
    'lieux.deploy.s3.title': 'It appears on the map',
    'lieux.deploy.s3.text': 'Users find the station, the venue gains visibility. The network grows.',
    'lieux.sectors.label': 'Where to find BOD',
    'lieux.sectors.h2': 'Everywhere you go out',
    'lieux.cta1.label': 'Users',
    'lieux.cta1.h3': 'Be notified<br/>at launch.',
    'lieux.cta1.btn': 'Notify me',
    'lieux.cta2.label': 'Venues',
    'lieux.cta2.h3': 'Do you manage<br/>a venue?',
    'lieux.cta2.p': 'Free installation. No commitment.<br/>Your customers on the map from day one.',
    'lieux.cta2.btn': 'Become a partner',

    // CONTACT
    'contact.label': 'Contact',
    'contact.h1': 'Got a question?<br/><span class="text-primary-container bg-on-surface px-2">We\'ll answer.</span>',
    'contact.intro': 'User, press, partnership — write to us. Reply within 24h.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.opt1': 'General question',
    'contact.form.opt2': 'Become a partner',
    'contact.form.opt3': 'Issue with a station',
    'contact.form.opt4': 'Press / Media',
    'contact.form.opt5': 'Other',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.sidebar.h2': 'Other ways to reach us',
    'contact.sidebar.email.label': 'Email',
    'contact.sidebar.delay.label': 'Response time',
    'contact.sidebar.delay.value': 'Under 24h',
    'contact.sidebar.hq.label': 'HQ',
    'contact.sidebar.hq.value': 'France',
    'contact.sidebar.venue.h3': 'Do you have a venue?',
    'contact.sidebar.venue.p': 'Submit a partnership request directly for a priority response.',
    'contact.sidebar.venue.cta': 'Become a partner',
    'contact.sidebar.press.h3': 'Press & Media',
    'contact.sidebar.press.p': 'For any press enquiry, interview or editorial partnership, write directly to <a href="mailto:hello@bodcharge.com" class="font-semibold text-primary hover:underline">hello@bodcharge.com</a> with "Press" in the subject line.',
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
