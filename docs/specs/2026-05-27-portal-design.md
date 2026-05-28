# Spécification de Conception : Portail Streamer Broinblock

Ce document détaille la refonte graphique et l'implémentation des nouvelles fonctionnalités pour le portail web de Broinblock, combinant les fonctionnalités de l'Option 1 (Setup, Planning, Live Widget) et de l'Option 2 (Dashboard réseaux, Communauté & Modération).

## 1. Identité Visuelle & Thème (UI/UX)
*   **Palette de couleurs :**
    *   Fond : `#08080a` (Noir très profond tirant vers le bleu spatial).
    *   Accent Primaire (Froid/Technologique) : `#1111ff` (Bleu néon).
    *   Accent Secondaire (Chaud/Énergie) : `#ff1111` (Rouge néon).
    *   Cartes : `rgba(255, 255, 255, 0.02)` avec bordures semi-transparentes `rgba(255, 255, 255, 0.05)` et effet de flou `backdrop-filter: blur(16px)`.
*   **Typographie :**
    *   Titres et En-têtes : `Outfit` (sans-serif, très géométrique et moderne).
    *   Corps de texte : `Poppins` (très lisible à petite échelle).
*   **Effets visuels :**
    *   Glows néon au survol des cartes.
    *   Particules subtiles en arrière-plan (réutilisation optimisée du script existant ou d'une alternative CSS plus légère).
    *   Transitions fluides (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`).

---

## 2. Structure des Pages & Fonctionnalités

### A. Navigation Globale (`assets/js/app.js`)
La navigation et le pied de page dynamiques injectés dans chaque page sont mis à jour :
*   **Navbar :** Liens vers :
    *   Accueil (`index.html`)
    *   À propos (`propos.html`)
    *   Configuration PC/Setup (`setup.html`)
    *   Communauté & Modération (`communaute.html`)
    *   *Note : Le lien vers `bingo.html` ne sera pas visible car la page n'est plus active pour le moment.*
*   **Footer :** Simplifié et modernisé (fond noir avec effet de verre, réseaux sociaux épurés).

### B. Accueil (`index.html`)
*   **Titre principal :** Logo texte "BROINBLOCK" avec dégradé et lueur néon.
*   **Twitch Live Widget :**
    *   Détection du statut en ligne via embed Twitch.
    *   Carte affichant le statut actuel du stream (Titre du stream, Catégorie, Bouton "Rejoindre le Live").
*   **Planning de la Semaine :**
    *   Grille interactive affichant le programme hebdomadaire.
    *   Mise en surbrillance automatique du jour actuel.
*   **Dashboard des Réseaux :**
    *   Grille de cartes au format Linktree gaming.
    *   Cartes pour Twitch, YouTube, Discord, TikTok, et Linktree avec animations lumineuses au survol.

### C. À propos (`propos.html`)
*   Mise à jour graphique complète de la page pour correspondre à la nouvelle charte.
*   Section de présentation biographique épurée, statistiques clés (ex: heures streamées, taille de la commu).

### D. Nouvelle Page : Configuration & Setup (`setup.html`)
*   Listes de composants présentées sous forme de cartes d'inventaire technologique :
    *   **PC Gamer/Streaming :** CPU, GPU, RAM, Boîtier.
    *   **Périphériques :** Écrans, Souris, Clavier, Casque.
    *   **Audio/Vidéo :** Micro, Caméra, Éclairage.

### E. Nouvelle Page : Communauté & Règles (`communaute.html`)
*   **Règles du chat Twitch / Discord :** Présentation sous forme de liste avec icônes modernes (ex: respect, pas de spam, entraide).
*   **Équipe de Modération :** Grid avec avatars fictifs/personnalisés pour présenter ses modérateurs.
*   **Appel à l'action Discord :** Grande carte néon invitant à rejoindre le serveur.

---

## 3. Plan d'Action & Dépendances
*   **Pas de framework lourd :** Tout restera en HTML/CSS Vanilla et Javascript pour une vitesse de chargement maximale.
*   **Icônes :** Utilisation de FontAwesome 6 (déjà inclus dans le projet).
*   **Responsivité :** Grid layouts adaptatifs (1 colonne sur mobile, 2 à 3 sur tablette, 4 sur écran PC).
