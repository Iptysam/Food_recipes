const hamburger = document.querySelector('.hamburger');
const Menu = document.querySelector('.menu');
const navlinks = document.querySelectorAll('.nav-link');
const closeBtn = document.querySelector('.close_btn');

function open() {
  hamburger.classList.toggle('active');
  Menu.classList.toggle('active');
}

hamburger.addEventListener('click', open);
closeBtn.addEventListener('click', open);
navlinks.forEach((link) => {
  link.addEventListener('click', open);
});

const featureCard = [{
  title: 'Rasmalai',
	bgimg: 'images/abstract-pixel-seamless-pattern-of-gray-vector-10316938.jpg',
  picimg: 'images/rasmalai.webp',
  sdescrip: 'indian sweet dish',
  lineimg: 'images/minus.png',
  ldescrip: 'One of the best desserts that I love and easy to make.',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  class: 'block1',
},
{
  title: 'Biryani',
	bgimg: 'images/abstract-pixel-seamless-pattern-of-gray-vector-10316938.jpg',
  picimg: 'images/biryani.jpg',
  sdescrip: 'famous indian main dish',
  lineimg: 'images/minus.png',
  ldescrip: 'Mostly a festival food especially in Eid holiday.',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  class: 'block2',
},
{
  title: 'Rasmalai',
	bgimg: 'images/abstract-pixel-seamless-pattern-of-gray-vector-10316938.jpg',
  picimg: 'images/rasmalai.webp',
  sdescrip: 'indian sweet dish',
  lineimg: 'images/minus.png',
  ldescrip: 'One of the best desserts that I love and easy to make.',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  class: 'block1',
},
{
  title: 'Biryani',
	bgimg: 'images/abstract-pixel-seamless-pattern-of-gray-vector-10316938.jpg',
  picimg: 'images/biryani.jpg',
  sdescrip: 'famous indian main dish',
  lineimg: 'images/minus.png',
  ldescrip: 'Mostly a festival food especially in Eid holiday.',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  class: 'block2',
},
{
  title: 'Rasmalai',
	bgimg: 'images/abstract-pixel-seamless-pattern-of-gray-vector-10316938.jpg',
  picimg: 'images/rasmalai.webp',
  sdescrip: 'indian sweet dish',
  lineimg: 'images/minus.png',
  ldescrip: 'One of the best desserts that I love and easy to make.',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  class: 'block1',
},
{
  title: 'Biryani',
	bgimg: 'images/abstract-pixel-seamless-pattern-of-gray-vector-10316938.jpg',
  picimg: 'images/biryani.jpg',
  sdescrip: 'famous indian main dish',
  lineimg: 'images/minus.png',
  ldescrip: 'Mostly a festival food especially in Eid holiday.',
  liveLink: 'https://iptysam.github.io/The_Portfolio/',
  class: 'block2',
},
];

const cards = document.querySelector('.featurecard');
featureCard.forEach((card) => {
  cards.innerHTML += `
  <div class="block1 c-card">
	<img src="${card.bgimg}" alt="snaphot" class="b-img">
  <img src="${card.picimg}" alt="snaphot" class="p-img">
  <div>
    <h2>${card.title}</h2>
    <p class="short">${card.sdescrip}</p>
    <img src="${card.lineimg}" alt="line" class="l-img">
    <p class="long">${card.ldescrip}</p>
  </div> 
</div>`;
});
