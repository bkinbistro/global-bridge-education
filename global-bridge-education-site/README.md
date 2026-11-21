# Global Bridge Education · site internet

Site vitrine de **Global Bridge Education** (Hangzhou · Kinshasa), réalisé par **B-KIN TECH**.

Site statique : HTML, CSS et JavaScript, sans outil de compilation. Il se met en ligne tel quel sur Vercel, Netlify ou GitHub Pages.

## Structure
- `index.html` : la page d'accueil (toutes les sections)
- `assets/css/style.css` : le design
- `assets/js/main.js` : les coordonnées, les services, la liste des universités, le formulaire
- `assets/img/` : logo, favicon, photos, image de partage
- `404.html`, `robots.txt`, `sitemap.xml`, `vercel.json`

## Modifier les informations courantes
Tout se trouve en haut de `assets/js/main.js` :
- `CONFIG.whatsapp` : le numéro WhatsApp (chiffres seulement, avec l'indicatif)
- `CONFIG.email` : l'adresse e-mail
- `CONFIG.formEndpoint` : facultatif, l'adresse d'un service de formulaires (ex. Formspree) pour recevoir aussi les préinscriptions par e-mail
- `UNIVERSITES` : la liste des universités (nom, ville, région du filtre, filières)

## Le formulaire de préinscription
Le formulaire en 4 étapes reprend la fiche papier de l'agence. À l'envoi, WhatsApp s'ouvre avec la fiche complète du candidat, prête à être envoyée au numéro de l'agence. Aucun document sensible n'est demandé à cette étape.

## Mise en ligne (Vercel)
1. Pousser ce dossier dans un dépôt GitHub.
2. Sur vercel.com : « Add New Project », choisir le dépôt, sans réglage particulier, puis « Deploy ».
3. Ajouter le nom de domaine dans « Settings → Domains », puis mettre à jour l'adresse dans `index.html` (balises canonical et og), `robots.txt` et `sitemap.xml`.

## À remplacer par les contenus réels du client
- `assets/img/hero.jpg` / `hero.webp` : photo provisoire générée, à remplacer par une vraie photo
- Le logo provisoire (`logo.svg`, `favicon.svg`) si l'agence fait créer son logo officiel
- Les filières de Zhejiang A&F University (ZAFU)
