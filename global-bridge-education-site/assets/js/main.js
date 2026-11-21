/* Global Bridge Education — réalisé par B-KIN TECH
 * Pour modifier les coordonnées ou la liste des universités, changez seulement CONFIG et UNIVERSITES ci-dessous.
 */
document.documentElement.classList.add("js");
const CONFIG = {
  whatsapp: '8619706874325',          // numéro WhatsApp, chiffres seulement, avec l'indicatif
  whatsappLabel: '+86 197 0687 4325',
  email: 'mafuheritier17@gmail.com',
  // Facultatif : adresse d'un service de formulaires (ex. Formspree) pour recevoir aussi les préinscriptions par e-mail.
  formEndpoint: ''
};

const SERVICES = [
  ['orient', 'Orientation', 'Les filières et les universités qui correspondent à votre profil et à votre budget.'],
  ['info', 'Information claire', "Conditions d'admission, calendriers, pièces demandées : tout est expliqué simplement."],
  ['doc', 'Préparation du dossier', 'Nous vous aidons à préparer et à vérifier votre dossier avant le dépôt.'],
  ['bourse', 'Bourses', 'Les bourses existantes et les voies officielles pour y candidater.'],
  ['plane', 'Préparation au départ', "Les étapes, les documents et l'organisation de votre voyage."],
  ['home', 'Arrivée en Chine', 'Les informations pour vous installer, selon les services convenus.']
];
const ICONS = {
  orient: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  doc: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h5"/>',
  bourse: '<path d="M3 9l9-5 9 5-9 5z"/><path d="M7 11v5c3 2 7 2 10 0v-5"/>',
  plane: '<path d="M2 16l20-8-3 10-6-3-3 4v-5"/>',
  home: '<path d="M3 11l9-8 9 8v10H3z"/><path d="M9 21v-6h6v6"/>'
};

// [nom, ville, région du filtre, filières]
const UNIVERSITES = [
  ['Zhejiang University', 'Hangzhou', 'Hangzhou', 'Génie civil, architecture, informatique, sciences, médecine, économie et management'],
  ['Zhejiang University of Technology', 'Hangzhou', 'Hangzhou', 'Génie civil, mécanique, informatique, génie électrique, finance, commerce international'],
  ['Zhejiang Sci-Tech University (ZSTU)', 'Hangzhou', 'Hangzhou', 'Textile, matériaux, informatique, mécanique, génie civil, architecture, économie'],
  ['Jiangsu University (UJS)', 'Zhenjiang', 'Jiangsu', 'Ingénierie, mécanique, agriculture, sciences, médecine et gestion'],
  ['Jiangsu University of Science and Technology (JUST)', 'Zhenjiang', 'Jiangsu', 'Génie civil, mécanique, informatique, génie électrique, énergie, administration des affaires'],
  ['Tsinghua University', 'Pékin', 'Pékin', 'Génie civil, ingénierie, informatique, sciences, économie, management, architecture'],
  ['Peking University', 'Pékin', 'Pékin', 'Sciences, informatique, ingénierie, économie, gestion, droit, médecine, sciences humaines'],
  ['Beijing University of Technology (BJUT)', 'Pékin', 'Pékin', 'Génie civil, architecture, informatique, ingénierie, sciences, management'],
  ['Fudan University', 'Shanghai', 'Shanghai', 'Économie, finance, médecine, sciences, informatique, données, sciences humaines'],
  ['Shanghai Jiao Tong University (SJTU)', 'Shanghai', 'Shanghai', 'Génie civil, mécanique, énergie, informatique, médecine, commerce'],
  ['Tongji University', 'Shanghai', 'Shanghai', 'Génie civil, architecture, urbanisme, transport, environnement, ingénierie'],
  ['Nankai University', 'Tianjin', 'Tianjin', 'Économie, finance, commerce, chimie, mathématiques, sciences, médecine, sciences humaines'],
  ['Tianjin University (TJU)', 'Tianjin', 'Tianjin', 'Génie chimique, architecture, génie civil, ingénierie, sciences et technologie'],
  ['Dalian University of Technology (DUT)', 'Dalian', 'Autres villes', 'Génie civil, mécanique, ingénierie, sciences, informatique, gestion'],
  ['Nanjing University (NJU)', 'Nanjing', 'Jiangsu', 'Sciences, informatique, environnement, économie, sciences humaines, ingénierie'],
  ['Southeast University (SEU)', 'Nanjing', 'Jiangsu', 'Génie civil, architecture, urbanisme, transport, médecine, économie internationale'],
  ['Wuhan University (WHU)', 'Wuhan', 'Wuhan', 'Génie, géosciences, ressources en eau, informatique, économie, droit, sciences'],
  ['Huazhong University of Science and Technology (HUST)', 'Wuhan', 'Wuhan', 'Génie civil, structures, architecture, informatique, médecine, énergie, gestion'],
  ['Xiamen University (XMU)', 'Xiamen', 'Autres villes', 'Sciences, ingénierie, économie, commerce, médecine, sciences de la mer'],
  ['Sun Yat-sen University (SYSU)', 'Guangzhou', 'Autres villes', 'Médecine, sciences, ingénierie, agriculture, économie, arts, sciences humaines'],
  ['Zhejiang A&F University (ZAFU)', 'Hangzhou', 'Hangzhou', 'Filières : nous consulter']
];

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const waLink = (text = '') => `https://wa.me/${CONFIG.whatsapp}${text ? '?text=' + encodeURIComponent(text) : ''}`;

/* Coordonnées */
$$('.js-wa').forEach(a => { a.href = waLink("Bonjour Global Bridge Education, je voudrais des informations pour étudier en Chine."); });
$$('.js-wa-label').forEach(s => { s.textContent = CONFIG.whatsappLabel; });
$$('.js-mail').forEach(a => { a.href = 'mailto:' + CONFIG.email; });
$$('.js-mail-label').forEach(s => { s.textContent = CONFIG.email; });
$('#year').textContent = new Date().getFullYear();

/* Services */
$('#services-list').innerHTML = SERVICES.map(([k, t, p]) =>
  `<article class="card reveal"><div class="card__ic"><svg viewBox="0 0 24 24" fill="none" stroke="#c8102e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg></div><h3>${t}</h3><p>${p}</p></article>`).join('');

/* Universités + filtres */
const regions = ['Toutes', 'Hangzhou', 'Pékin', 'Shanghai', 'Jiangsu', 'Tianjin', 'Wuhan', 'Autres villes'];
const list = $('#unis-list');
function renderUnis(region) {
  const items = UNIVERSITES.map((u, i) => [i + 1, ...u]).filter(u => region === 'Toutes' || u[3] === region);
  list.innerHTML = items.map(([n, nom, ville, , fil]) =>
    `<li class="uni"><span class="uni__n">${String(n).padStart(2, '0')}</span><h3>${nom}</h3><span class="uni__city">📍 ${ville}</span><p>${fil}</p></li>`).join('');
}
$('#filters').innerHTML = regions.map(r => {
  const n = r === 'Toutes' ? UNIVERSITES.length : UNIVERSITES.filter(u => u[2] === r).length;
  return `<button type="button" data-r="${r}" aria-pressed="${r === 'Toutes'}">${r} (${n})</button>`;
}).join('');
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  $$('#filters button').forEach(x => x.setAttribute('aria-pressed', x === b));
  renderUnis(b.dataset.r);
});
renderUnis('Toutes');

/* Navigation */
const nav = $('#nav');
const onScroll = () => nav.classList.toggle('is-solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
const drawer = $('#drawer'), burger = $('#burger');
const setDrawer = open => { drawer.classList.toggle('is-open', open); burger.setAttribute('aria-expanded', open); document.body.style.overflow = open ? 'hidden' : ''; };
burger.addEventListener('click', () => setDrawer(true));
$('#close').addEventListener('click', () => setDrawer(false));
$$('#drawer a').forEach(a => a.addEventListener('click', () => setDrawer(false)));
addEventListener('keydown', e => { if (e.key === 'Escape') setDrawer(false); });

/* Apparition au défilement */
const io = 'IntersectionObserver' in window ? new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .12 }) : null;
$$('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('is-in'));

/* Formulaire de préinscription en 4 étapes */
const form = $('#form'), steps = $$('.form__step', form), bars = $$('.form__prog span', form);
const prev = $('#prev'), next = $('#next');
let cur = 0;
function show(i) {
  cur = i;
  steps.forEach((s, k) => s.classList.toggle('is-active', k === i));
  bars.forEach((b, k) => b.classList.toggle('is-done', k <= i));
  prev.hidden = i === 0;
  next.textContent = i === steps.length - 1 ? 'Envoyer ma préinscription →' : 'Continuer →';
}
function validStep(i) {
  let ok = true;
  $$('input[required],select[required],textarea[required]', steps[i]).forEach(f => {
    if (f.type === 'radio' || f.type === 'checkbox') return;
    const wrap = f.closest('.field');
    const bad = !f.value.trim() || (f.type === 'email' && f.value && !f.checkValidity());
    if (wrap) wrap.classList.toggle('has-error', bad);
    if (bad && ok) { f.focus(); ok = false; }
  });
  const mail = $('#email', steps[i]);
  if (mail && mail.value && !mail.checkValidity()) { mail.closest('.field').classList.add('has-error'); ok = false; }
  if (i === steps.length - 1) {
    const c = $('#consent'); $('#consent-err').style.display = c.checked ? 'none' : 'block';
    if (!c.checked) ok = false;
  }
  return ok;
}
$$('input,textarea', form).forEach(f => f.addEventListener('input', () => f.closest('.field')?.classList.remove('has-error')));
prev.addEventListener('click', () => show(Math.max(0, cur - 1)));
next.addEventListener('click', () => {
  if (!validStep(cur)) return;
  if (cur < steps.length - 1) { show(cur + 1); form.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
  submit();
});
function submit() {
  const data = new FormData(form);
  const lines = ['*PRÉINSCRIPTION — Global Bridge Education*', ''];
  for (const [k, v] of data.entries()) if (String(v).trim()) lines.push(`• ${k} : ${v}`);
  lines.push('', '✅ Consentement donné pour l’évaluation de mon projet d’études.');
  const text = lines.join('\n');
  if (CONFIG.formEndpoint) {
    fetch(CONFIG.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(Object.fromEntries(data)) }).catch(() => {});
  }
  const url = waLink(text);
  $('#done-wa').href = url;
  steps.forEach(s => s.hidden = true); $('#form-nav').hidden = true; $('.form__prog').hidden = true;
  $('#done').hidden = false;
  window.open(url, '_blank', 'noopener');
}
show(0);
