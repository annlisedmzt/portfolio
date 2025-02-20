const text1_options = [
    "🎶FestiWeekend",
    "⛅L'inéluctable app météo"
];
const text2_options = [
    "Création d'un site web ainsi que des visuels pour les réseaux sociaux, dans le cadre d'un weekend musical entre ami(e)s. L'idée étant de rassembler les informations pour les invités, le visuel du site évoluant à chaque nouveau festival.",
    "Que le dev qui n'a jamais codé une app météorologique parle maintenant ou se taise à jamais !"
];

// const text3_options = [
//     "Création du site web + visuelles",
//     "Création du site"
// ];

const technos_options = [
    "🌐 HTML - CSS - JS",
    "🌐 React"
]

const link_options = [
    "https://festiwknd.netlify.app/",
    "https://queltempsfaitil.netlify.app/",
];

// const color_options = ["#E64E16", "#F6E187"];

const image_options = [
    "images/projet-festiwknd.png",
    "images/projet-queltempsfaitil.png"
];

var i = 0;
const currentOptionText1 = document.getElementById("current-option-project-name");
const currentOptionText2 = document.getElementById("current-option-project-description");
// const currentOptionText3 = document.getElementById("current-option-text3");
const currentOptionTechnos = document.getElementById("current-option-technos")
const currentOptionLink = document.getElementById("current-option-link");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
// currentOptionText3.innerText = text3_options[i];
currentOptionTechnos.innerText = technos_options[i];
currentOptionLink.href = link_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
// mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
    i = i + 1;
    i = i % text1_options.length;

    currentOptionText1.dataset.nextText = text1_options[i];
    currentOptionText2.dataset.nextText = text2_options[i];
    // currentOptionText3.dataset.nextText = text3_options[i];
    currentOptionTechnos.dataset.nextText = technos_options[i]
    // mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-next");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        // Mettre à jour le lien
        currentOptionLink.href = link_options[i];
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        // currentOptionText3.innerText = text3_options[i];
        currentOptionTechnos.innerText = technos_options[i]
        carousel.classList.remove("anim-next");
    }, 650);
};

optionPrevious.onclick = function () {
    if (i === 0) {
        i = text1_options.length;
    }
    i = i - 1;

    currentOptionText1.dataset.previousText = text1_options[i];
    currentOptionText2.dataset.previousText = text2_options[i];
    // currentOptionText3.dataset.previousText = text3_options[i];
    currentOptionTechnos.dataset.previousText = technos_options[i]
    // mainMenu.style.background = color_options[i];
    carousel.classList.add("anim-previous");

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
        // Mettre à jour le lien
        currentOptionLink.href = link_options[i];
    }, 455);

    setTimeout(() => {
        currentOptionText1.innerText = text1_options[i];
        currentOptionText2.innerText = text2_options[i];
        // currentOptionText3.innerText = text3_options[i];
        currentOptionTechnos.innerText = technos_options[i]
        carousel.classList.remove("anim-previous");
    }, 650);
};

// 1. Récupérer les éléments du DOM
const openPopupBtn = document.getElementById('openPopupBtn');
const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('closePopupBtn');

// 2. Afficher la popup au clic sur le bouton “Ouvrir”
openPopupBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
    // on utilise “flex” pour activer justify-content/align-items
});

// 3. Fermer la popup au clic sur la croix de fermeture
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// 4. Fermer la popup en cliquant à l’extérieur du contenu
popup.addEventListener('click', (event) => {
    // Si l’utilisateur clique sur le fond transparent (et non pas dans la .popup-content)
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});