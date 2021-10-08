//fullpage.js init 
let myFullpage = new fullpage('#fullpage', {
	//Навигация
	menu: '#menu',
	lockAnchors: false,
	anchors:[],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['intro/anima.js', 'dark mode/2d/tilt.js', 'autotyping/typeit.js', 'css hover effect', 'svg/css animation', 'game on js','3d model/three.js', 'slider/swiper.js'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Скроллинг
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	bigSectionsDestination: null,

	//Доступ
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Дизайн
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#eadd46', '#fff9f1', '#eadd46', '#485123', '#fff9f1', '#eadd46', '#fff9f1', '#eadd46'],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	dropEffect: false,
	dropEffectOptions: { speed: 2300, color: '#F82F4D', zIndex: 9999},
	waterEffect: false,
	waterEffectOptions: { animateContent: true, animateOnMouseMove: true},
	cards: false,
	cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

	//Настроить селекторы
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//события
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterReBuild: function(){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});
// first slide text animation, animate.js//
anime({
  targets: '#web', // item #web selector
  translateX: 0,
  rotate: '1turn',
  duration: 3600,
  loop: true
});
//typeit.js animation
document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#element", {
	  speed: 500,
      waitUntilVisible: true,
	})
      .type("webbb", { delay: 300 })
	  .pause(500)
      .delete(2)
      .type(" ")
      .type("developer", { delay: 300 })
	  .go();
});

// dark theme button logic
const switchBt = document.getElementById('switch');
const sectionImg = document.getElementById('section_2');
switchBt.addEventListener('change', (e) => {
	sectionImg.classList.toggle('dark_mode', e.target.checked);
});
//game logic and animation
const computerChoiceDisplay = document.getElementById('computer-choise');
const userChoiceDisplay = document.getElementById('user-choise');
const resultDisplay = document.getElementById('resultdisp');
const possibleChoices = document.querySelectorAll('button');

let userChoiceGame;
let computerChoiceGame;
let resultdisp;

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoiceGame = e.target.id;
	userChoiceDisplay.innerText = `your choice - ${userChoiceGame}`;
	userChoiceDisplay.style.visibility = 'visible';
	generateComputerChoice();
	const animAiSelec = document.getElementById(computerChoiceGame + '_ai');
	animAiSelec.classList.add('activebtn');
	resultDisplay.innerText = '...';
	resultDisplay.style.visibility = 'visible';
	setTimeout(() => {
		animAiSelec.classList.remove('activebtn');
	}, 1990);
	setTimeout(getResult, 2000);
	setTimeout(() => {
		resultDisplay.innerText = resultdisp;
	}, 2010);

}));


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        computerChoiceGame = 'rock';
    }
    if (randomNumber === 2) {
        computerChoiceGame = 'scissors';
    }
    if (randomNumber === 3) {
        computerChoiceGame = 'papper';
    }
	computerChoiceDisplay.innerText = `computer choice - ${computerChoiceGame}`;
	computerChoiceDisplay.style.visibility = 'visible';
}
function getResult() {
    if (computerChoiceGame === userChoiceGame) {
        resultdisp = 'draw';
    }
    if (computerChoiceGame === 'rock' && userChoiceGame === 'papper') {
        resultdisp = 'you win';
    }
    if (computerChoiceGame === 'rock' && userChoiceGame === 'scissors') {
        resultdisp = 'ai win';
    }
    if (computerChoiceGame === 'papper' && userChoiceGame === 'scissors') {
        resultdisp = 'you win';
    }
    if (computerChoiceGame === 'papper' && userChoiceGame === 'rock') {
        resultdisp = 'ai win';
    }
    if (computerChoiceGame === 'scissors' && userChoiceGame === 'rock') {
        resultdisp = 'you win';
    }
    if (computerChoiceGame === 'scissors' && userChoiceGame === 'papper') {
        resultdisp = 'ai win';
    }
}
//3d model
const sevenScreen = document.getElementById('model_car');
let scene;

function init3d() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, 480 / 360, 0.1, 5000);
    // camera.rotation.y = 45 / 180 * Math.PI;
    // camera.position.x = 100;
    camera.position.y = 20;
    camera.position.z = 270;
    
    
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor = (0x000000, 0);
    renderer.setSize(480, 360);
    sevenScreen.appendChild(renderer.domElement);
    
    // controls =  new THREE.OrbitControls(camera,renderer.domElement);
    // controls.addEventListener('change', renderer);
    
    hlight = new THREE.AmbientLight(0xeadd46, 1);
	scene.add(hlight);
	

    directionalLight = new THREE.DirectionalLight(0xfff9f1, 1);
    directionalLight.position.set(0, 100, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    light = new THREE.PointLight(0xfff9f1, 2);
    light.position.set(0, 300, 500);
    scene.add(light);
    
    light2 = new THREE.PointLight(0xfff9f1, 2);
    light2.position.set(500, 100, 0);
    scene.add(light2);

    light3 = new THREE.PointLight(0xfff9f1, 2);
    light3.position.set(0, 100, -500);
    scene.add(light3);

    light4 = new THREE.PointLight(0xfff9f1, 2);
    light4.position.set(-500, 300, 0);
    scene.add(light4);


    //loading model
    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function (gltf) {
        car = gltf.scene.children[0];
        car.scale.set(0.5, 0.5, 0.5);

        scene.add(gltf.scene);
        animate3d();
    });
}
function animate3d() {
    scene.rotation.y += 0.005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate3d);
}
init3d();

//swiper js lib on last page, animated cards
const swiper = new Swiper('.swiper', {
  // Optional parameters
	effect: "cards",
    grabCursor: true,
});

