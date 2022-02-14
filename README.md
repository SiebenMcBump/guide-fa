# Contenu du dossier

`guide-base.html` : Version du guide au header "allégé" puisque le CSS et le JS sont importés depuis les fichiers de ce dossier.

`guide-full.html` : Version du guide au header "lourd" puisqu'il contient tout le CSS et le JS.

`guide.css` : Fichier CSS

`guide.js` : Fichier javascript

`README.md` : C'est ici :) Comme j'en profite pour préparer un passage en LS de ce tuto, il a peut-être des notions ultra basiques que tu connais déjà, mais au moins elles sont déjà écrites et j'aurai plus qu'à mettre en forme haha. En tout cas hésite pas à me ping sur discord si t'as un soucis quelconque !


## Disclaimer

Le code ne peut fonctionner que dans le cas où le navigateur accepte le javascript.

La mise en page de base vient de [Foolish Developer](https://www.foolishdeveloper.com/2021/06/sidebar-menu-using-html-css-javascript.html)

Chronologie récupérée du codepen de [Niels Voogt](https://codepen.io/NielsVoogt/details/MbMMxv)

Toutes les modifications sont possibles, de l'esthétique à la structure globale, j'aime voir vivre mes codes c: Même si au final ça résulte juste d'un "inspiré par le truc de Sieben", tant que le résultat final te plaît, fais-toi plaisir.

*Normalement* j'ai collé un peu de responsive pour que l'affichage rende pas trop dég' sur téléphone (les modifs en question s'appliquent à partir de 950px), mais je ne jure de rien haha.


## Pôtit conseil de début

Pour moins te fatiguer la vie, je te conseille grandement de commencer par personnaliser le guide en local en utilisant guide-base.html : ça te permettra d'avoir les fichiers CSS et JS (même si normalement y a pas besoin de toucher au JS) séparés, et c'est bien plus simple pour coder haha.

Pour avoir le rendu en direct, rien de plus simple : Il suffit de double-cliquer sur le fichier et ça t'ouvrira un onglet sur ton navigateur préféré.


## Ajouter une section de texte

### Code pour la zone active dès l'ouverture du guide

```html
<!-- PREMIERE ZONE -->
<div id="zone1" class="tabcontent active">
    <h1>Titre de zone</h1>
    <p>Votre navigateur doit accepter le JavaScript pour permettre le bon fonctionnement de ce guide.
        <br><br>
        <strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Maiores sapiente,
        molestiae non ipsa praesentium voluptatum <em>odit</em> esse fugit est ut explicabo iste, autem vel
        quasi officia accusamus delectus dicta! Expedita.
    </p>
</div>
```


### Code pour une zone cachée à l'ouverture du guide

```html
<!-- SECONDE ZONE -->
<div id="zone2" class="tabcontent hidden">
    <h1>Titre de zone</h1>
    <p>
        <strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Maiores sapiente,
        molestiae non ipsa praesentium voluptatum <em>odit</em> esse fugit est ut explicabo iste, autem vel
        quasi officia accusamus delectus dicta! Expedita.
    </p>
</div>
```

La seule différence se trouve dans la class de la première div : `active` ou `hidden`. Pense bien à systématiquement ajouter le `hidden` ou le JS risque de pas aimer~


### Code pour une section avec plusieurs niveaux

```html
<!-- TROISIEME ZONE -->
<div id="zone3" class="tabcontent hidden">
    <h1>Titre de zone</h1>
    <h2 id="nomDeSection1">Sous-titre de zone</h2>
    <p>
        <strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Maiores sapiente,
        molestiae non ipsa praesentium voluptatum <em>odit</em> esse fugit est ut explicabo iste, autem vel
        quasi officia accusamus delectus dicta! Expedita.
    </p>
    <br><br>

    <h2 id="nomDeSection2">Sous-titre de zone 2</h2>
    <p>
        <strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Maiores sapiente,
        molestiae non ipsa praesentium voluptatum <em>odit</em> esse fugit est ut explicabo iste, autem vel
        quasi officia accusamus delectus dicta! Expedita.
    </p>
    <ul>
        <li>Premier item</li>
        <li>Second item</li>
    </ul>
    <p>
        <br>
        <strong>Lorem ipsum</strong> dolor, sit amet consectetur adipisicing elit. Maiores sapiente,
        molestiae non ipsa praesentium voluptatum <em>odit</em> esse fugit est ut explicabo iste, autem vel
        quasi officia accusamus delectus dicta! Expedita.
    </p>
</div>
```


### Ajouter un lien

Pour les zones longues que tu souhaites séparer et rendre cliquables pour une navigation plus facile depuis la navbar, il suffit de modifier une des balises comme suit : `<h2 id="nomDeSection1">`. L'id peut s'appliquer à toutes les balises : `div`, `span`, `titre`, `p`...


## Balises déjà codées

- `h1` : Gros titre
- `h2` : Titre de section (Celui avec la barre au-dessus et à droite) (Sauf pour le premier `<h2>` d'une section, je conseille deux mettre deux `<br><br>` avant, parce que j'ai codé ça comme un sagouin et sinon le titre se retrouve trop collé avec la section au-dessus de lui)
- `h3` : Sous-titre
- `h4` : Sous-sous-titre (Celui utilisé dans la navbar)

- `p` : Zone de texte (Pense bien à l'utiliser pour entourer tous tes textes ! Elle ne peut contenir QUE du texte (et des `<span>`, `<strong>`, `<em>`, bref des balises "inline"). Les titres doivent être utilisés en-dehors, idem pour les listes.)

- `strong` : Affichage en gras
- `em` : Affichage en italique

- `ul/li` : Affichage des listes (Pour reprendre avec une balise `<p>` après une liste, je conseille de la commencer par un `<br>` sinon les zones sont trop collées)



## Ajouter une section à la navbar

### Code des titres

`<h4>Titre de section</h4>`

### Fonctionnement

La première balise (`<li onclick="openTab(event, 'zone1')">`) est celle qui permet d'ouvrir l'onglet sélectionné. La seule chose à modifier est (dans ce cas) `'zone1'`.

La valeur remplie doit **OBLIGATOIREMENT** être la même que l'id de la div que l'on veut afficher. Ca correspond à la première div quand on remplit une section de texte (`<div id="zone1">`)

**ATTENTION** cette valeur (`'zone1'`) doit impérativement être renseignée entre apostrophes ( `'` ) sinon le JS ne peut pas fonctionner.


### Code pour la zone active dès l'ouverture du guide

```html
<li onclick="openTab(event, 'zone1')">
    <a href="#" class="tablink active">
        <span>Zone 1</span>
    </a>
</li>
```


### Code pour une zone inactive à l'ouverture du guide

```html
<li onclick="openTab(event, 'zone2')">
    <a href="#" class="tablink">
        <span>Zone 1</span>
    </a>
</li>
```

La seule différence se trouve dans la classe du premier lien (`<a href>`) : `active` ou rien.


### Code pour une zone à plusieurs niveaux

```html
<li onclick="openTab(event, 'zone3')">
    <a href="#" class="tablink collapse" onclick="collapse(event)">
        <span>Zone 3</span>
    </a>
    <ul class="hidden">
        <li>
            <a href="#nomDeSection1" class="tablink">
                <span>Section 1</span>
            </a>
        </li>
        <li>
            <a href="#nomDeSection2" class="tablink">
                <span>Section 2</span>
            </a>
        </li>
    </ul>
</li>
```

- Le premier lien doit IMPERATIVEMENT avoir la classe `collapse`, sinon l'onglet ne s'ouvrira pas.
- Les liens qui suivent (`<a href="#nomDeSection1">`) correspondent à l'id de la zone sur laquelle tu souhaites renvoyer (cf ### Ajouter un lien)


## Finalisation de la balise <head> : le javascript et le CSS

#### Hébergement externe

C'est le même principe que ce qu'on retrouve dans guide-base.html, sauf qu'au lieu d'héberger le code sur ton ordinateur on va le rendre disponible sur internet (un service cloud par exemple) : De ce fait, on garde HTML, CSS et JS dans des fichiers distincts. Personnellement, c'est ma méthode préférée parce que ça facilite le maintien du CSS/JS mais si on n'y touche qu'une fois par an c'est pas forcément un investissement de temps très rentable :P

Pour ma part, j'héberge mes fichiers sur DropBox mais j'ai ouïe dire que Google Drive permet une utilisation du même genre.

Attention petit trick concernant DropBox, quand on génère les liens de partage ils sont sous la forme : https://www.dropbox.com/s/blablabla/ids?dl=0. Pour qu'ils fonctionnent à l'import, il faut juste changer le "www" par "dl" et voilà~

Importer le CSS :

`<link rel="stylesheet" href="guide.css">`

Importer le JS :

`<script src="guide.js"></script>`

(Ces balises sont déjà présentes dans guide-base.html, il suffit juste d'en changer les liens)


### Hébergement depuis la page HTML

Et du coup pour l'autre variante, je te renvoie à guide-full.html. Si tout va bien, le JS (entre les balises `<script></script>`) n'a pas besoin d'être modifié, il y a juste à remplacer le contenu CSS qui se trouve entre les balises `<style></style>`.


## Héberger la page HTML

### Depuis forumactif

- Panneau d'administration >> Module >> HTML & JAVASCRIPT >> Gestion des pages HTML
- Bouton "Création en mode avancé (HTML)"
- Donner un titre à la page, coller son code, valider
    - Voulez-vous utiliser le haut et le bas de page de votre forum ? : Non
    - Utiliser cette page en tant que page d'accueil ? : Non
- Récupérer l'URL (par exemple https://streetwyrd-rpg.forumactif.com/h3-guide) : C'est lui qui permettra de renvoyer sur la page de guide


### Depuis tumblr

Si, comme moi, t'es du genre à avoir trop d'infos tu vas vite avoir droit à la limiète de caractère des pages hébergées par FA (snif).
Dans ce cas, mon meilleur conseil est de passer par tumblr, qui permet une personnalisation complète du HTML/CSS.

Modifier le HTML : https://aefeevenement2018.tumblr.com/post/168510836044/modifier-le-code-html-du-blog

Modifier le CSS (non nécessaire avec hébergement externe ou dans la balise `<head>`) : https://aefeevenement2018.tumblr.com/post/168500087454/tumblr-modifier-le-th%C3%A8me-du-blog-styles-css?is_related_post=1

Pour enlever les boutons par défaut de tumblr, il suffit de rajouter ce bout de CSS :

```css
.tmblr-iframe-compact .tmblr-iframe--unified-controls,
.tumblr_controls, .tmblr-iframe {
    display: none !important;
}
```


## Installer sur ton forum

### Par simple lien

Si tu veux simplement avoir un lien qui renvoie vers la page HTML du guide, rien de plus simple, il suffit de renvoyer vers l'URL de ta page forumactif ou de ton tumblr :p
Soit en utilisant un `<a href="#">Texte</a>`, soit avec `[url=#]Texte[/url]` sur FA.


### Depuis le titre d'une catégorie

- Panneau d'administration >> Général >> Forum >> Catégorie et forums
- Clique sur la catégorie qui doit renvoyer vers le guide

Dans le champ "Nom du Forum :" il va falloir forcer le lien vers ta page HTML comme suit :

`<a class="forumtitle" href="https://streetwyrd-rpg.forumactif.com/h3-guide" target="_blank">Nom de catégorie</a>`

- L'attribut class est TRES important, il faut absolument que ce soit le même que pour les autres titres de tes catégories, sinon le CSS ne pourra pas s'appliquer. (En gros, ce qu'on fait là c'est ce qu'on appelle surcharger du code : on force le navigateur à renvoyer vers notre lien au lieu de celui auquel FA aurait normalement renvoyé. De fait, la classe habituelle de ces liens ne peut pas s'appliquer et on doit la renseigner nous-mêmes pour que le style s'y ajoute.)
- L'attribut `target="_blank"` est facultatif, il permet de forcer le navigateur à ouvrir le guide dans un nouvel onglet.
