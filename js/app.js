const performer = document.getElementById('singer');
const performerContainer = document.createElement('div');
performerContainer.id = 'performer';
performer.appendChild(performerContainer);
const featureTitle = document.createElement('h3');
featureTitle.innerHTML = 'FEATURED PERFORMER';
featureTitle.classList = 'featureTitle';
performerContainer.appendChild(featureTitle);

const mainContainer = document.createElement('div');
mainContainer.id = 'main';
performerContainer.insertAdjacentElement('afterend', mainContainer);

const singer = [
  {
    id: 1,
    name: 'Erin Gilmore',
    occupation: 'Erin she/her',
    description: 'Yoga, but also: Pilates, dance, modern sages, autonomy, and nonviolent communication that girl from Down Dog,',
    image: './images/speakers/1.png',
  },
  {
    id: 2,
    name: 'Alexa Romano',
    occupation: 'Anthropology | Ethics | Photography',
    description: 'BA & MA @Stanford Alumn San Francisco, CA,',
    image: './images/speakers/2.png',
  },
  {
    id: 3,
    name: 'Xinia Alderson',
    occupation: 'Yoga + Moves + Travel | E-YT-500hr',
    description:
      'Kiwi Ashtangi | KPJAYI L2 Authorized Teacher by S.Jois 📍NZ Summer',
    image: './images/speakers/3.png',
  },
  {
    id: 4,
    name: 'Lauriane Fargier',
    occupation: 'lauriane.fargier@gmail.com.',
    description:
      '🎙️French voice-over @lauriane.voixoff 🧘 Certified 200H Hatha Yoga teacher ⛰️ Nature lover',
    image: './images/speakers/4.png',
  },
  {
    id: 5,
    name: 'Lena',
    occupation: ' www.lena-jenschovar.de',
    description:
      'Come find me at @pranachronic God is alive, Magic is afoot',
    image: './images/speakers/5.png',
  },
  {
    id: 6,
    name: 'Tina Louise',
    occupation: 'Yoga Instructor',
    description: 'Core Strengthening, Hatha, Viniyoga, Vinyasa Flow Meditation, Pranayama, Private / Individual',
    image: './images/speakers/6.png',
  },
];

const htmlStructure = (id, name, occupation, description, image) => ` 
<div class="singer-container" id="singer-${id}">
    <div class="singer-image">
        <img src="${image}"/>
    </div>
    <div class="singer-info">
        <h3 class="singer-name">${name}</h3>
        <hr class="singer-line">
        <p class="singer-occupation">${occupation}</p>
        <p class="singer-description">${description}</p>
    </div>
</div>
`;

singer.forEach((sing) => {
  const html = htmlStructure(
    sing.id,
    sing.name,
    sing.occupation,
    sing.description,
    sing.image,
  );
  mainContainer.innerHTML += html;
});

// more singer button
const moreSingers = document.createElement('div');
performer.appendChild(moreSingers);
moreSingers.classList.add('moreSingerBtn-Container');
const moreSingersBtn = document.createElement('button');
moreSingersBtn.textContent = 'More Singers';
moreSingersBtn.classList.add('moreSingerBtn');
moreSingers.appendChild(moreSingersBtn);
const moreSingersBtnIcon = document.createElement('img');
moreSingersBtnIcon.src = './images/more-singers.png';
moreSingersBtnIcon.classList.add('moreSingerBtn-Icon');
moreSingersBtn.appendChild(moreSingersBtnIcon);

// event listener for more singer btn;
const moreBtn = document.querySelector('.moreSingerBtn');
const hiddenSingers = [
  document.getElementById('singer-3'),
  document.getElementById('singer-4'),
  document.getElementById('singer-5'),
  document.getElementById('singer-6'),
];

moreBtn.addEventListener('click', () => {
  hiddenSingers.forEach((singer) => {
    singer.style.display = 'flex';
  });
});

// Mobile menu

const ham = document.querySelector('.hamBtn');
const closeBtn = document.querySelector('.closeBtn');
const mobMenu = document.querySelector('.mob-menu');

ham.addEventListener('click', () => {
  mobMenu.style.display = 'flex';
  mainContainer.style.filter = 'blur(100px)';
});

closeBtn.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  mainContainer.style.filter = 'blur(0)';
});

mobMenu.addEventListener('click', () => {
  mobMenu.style.display = 'none';
  mainContainer.style.filter = 'blur(0)';
});
