'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Add click event listeners to all navigation links

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault(); // Prevent default anchor behavior
//     const id = this.getAttribute('href'); // Get the target section ID
//     const targetSection = document.querySelector(id); // Select the target section
//     if (targetSection) {
//       targetSection.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the target section
//     }
//   });

// });
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     console.log(id);
//     console.log("Hi there")
//     document.querySelector(id).scrollIntoView({behaviour:'smooth'})
//   });
// });
// //add enent listner to common parent element
// //determine what element originated the event
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   // console.log(e.target);
//      e.preventDefault();
//   if(e.target.classList.contains('nav__link')){
//     console.log('LINK')
//     const id=e.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behaviour:'smooth'});}
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header=document.querySelector('.header');
// const allSections=document.querySelectorAll('.section');
// console.log(allSections);
// document.getElementById('section--1');
// const allButtons=document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));
// const message=document.createElement('div');
// message.classList.add('cookie-messsage');
// message.textContent='We use cookies for improved functionality and analytics.';
// message.innerHTML='We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>';
// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);
// document.querySelector('.btn--close-cookie').addEventListener('click',function(){
//     // message.remove();
//     message.parentElement.removeChild(message);
// });
// message.style.backgroundColor='#37383d';
// message.style.width='120%';
// message.style.color='white';
// message.style.fontWeight='bold';
// console.log(message.style.height);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// message.style.height =Number.parseFloat(getComputedStyle(message).height + 40 + 'px');
// document.documentElement.style.setProperty('--color-primary','orangered');
// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.alt);
// console.log(logo.className);

// logo.alt='Beautiful minimalist logo';
// //Non Standards
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','Bankist');
// console.log(logo.getAttribute('company'));
// console.log(logo.src);
// console.log(logo.getAttribute('src'));
// const link=document.querySelector('.new__link__btn');
// // console.log(link.href);
// console.log(link.getAttribute('herf'));
// console.log(link.className);
// //Data Attribute
// console.log(logo.dataset.versionNumber);
// //Classes
// logo.classList.add('c','j');
// logo.classList.remove('c','j');
// logo.classList.toggles('c');//not include
// logo.classList.contains('c');
// logo.className='jonas';
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  section1.scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// tabs.forEach(t=>t.addEventListener('click',()=>{
// console.log('TAB');
// }))
// tabsContainer.addEventListener('click',function (e){
// const clicked = e.target.closest('.operations__tab');
// // console.log(clicked);
// if(!clicked) return;
// //remove active classes
// tabs.forEach( t => t.classList.remove
//   ('operations__tab--active'));
// tabsContent.forEach(c =>c.classList.remove
//   ('operations__tab--active'))
// clicked.classList.add('operations__tab--active');
// // console.log(clicked.dataset.tab);
// document
// .querySelector(`.operations__content--${clicked.
//   dataset.tab}`)
//   .classList.add(`operations__content--active`);
// });
tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
const handleHover=function(e,opacity){
if(e.target.classList.contains('nav__link')){
  const link=e.target;
  const siblings=link.closest('.nav').querySelectorAll('.nav__link');
  const logo=link.closest('.nav').querySelector('.images');

  siblings.forEach(el=>{
    if(el!==link) el.style.opacity=opacity;
  });
  logo.style.opacity=opacity;
  return 
}
}
nav.addEventListener('mouseover',function(e){
  handleHover(e,0.5);});

nav.addEventListener('mouseout',function(e){
  handleHover(e,1);});

  //sticky navigation
 const initialCoords= section1.getBoundingClientRect();
 console.log(initialCoords);
  window.addEventListener('scroll',function(){
    console.log(window.scrollY);
  });
  if(window.scrollY> initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');


//   nav.addEventListener('mouseover',handleHover.bind(0.5));
//   nav.addEventListener('mouseout',handleHover.bind(1));
// //   if(e.target.classList.contains('nav__link')){
//     const link=e.target;
//     const siblings=link.closest('.nav').querySelectorAll('.nav__link');
//     const logo=link.closest('.nav').querySelector('.images');
//   sibilings.forEach(el =>{
//     if(el !==link) el.style.opacity=1;
//   });
//   logo.style.opacity=1;
//   };
// });
// const  obsCallback=function(entries,observer){
//   entries.forEach(entry=>{
//     console.log(entry)
//   });
// };
// const obsOptions={
//   root:null,
//   threshold:[0,1,0.2],
// };
// const observer=new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);
// tabsContent
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // BUG in v2: This way, we're not keeping track of the current slide when clicking on a slide
      // const { slide } = e.target.dataset;

      curSlide = Number(e.target.dataset.slide);
      goToSlide(curSlide);
      activateDot(curSlide);
    }
  });
};
slider();
  // const entry=entries[0];
  // if(!entry.isIntersecting) return;
  // // entry.target.src=entry.target.dataset.src;
  // // entry.target.addEventListener('load',function(){
  // //   entry.target.classList.remove('lazy-img');
  // //   observer.unobserve(entry.target);
  // // });
  //   observer.unobserve(entry.target);};
// const btnScrollTo=document.querySelector('btn--scroll-To');
// const section1=document.querySelector('#section--1');
// btnScrollTo.addEventListener('click',function(e){
//     const s1coords=section1.getBoundingClientRect();
//     console.log(s1coords);
//     console.log(e.target.getBoundingClientRect());
//     console.log('Current scroll (X/Y)'.window.pageXOffset,pageYOffset);
// });

// const h1 =document.querySelector('h1');
// h1.addEventListener('mouseenter',function(e){
//     alert('addEventListener: Great! You are reading the heading :D');
// });
// // 42...97
// const alertH1 =function(e){
//     alert('addEventListener: Great! You are reading the heading :D');
   
// };
// //  h1.removeEventListener('mouseenter',alertH1);
// setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);
// const randomInt = (min, max) => 
// Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => {
//   return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
// };

// document.querySelector('.nav__link').addEventListener('click', function(e) {

//   this.style.backgroundColor = randomColor(); 
//    console.log('LINK',e.target,e.currentTarget);
//  // this is the element to which the event handler is attached
//     console.log(e.currentTarget === this); // true
// });

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER',e.target,e.currentTarget);
// //   e.stopPropagation(); // Stop the event from bubbling up to parent elements
// });

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor();
//     console.log('NAV',e.target,e.currentTarget);
// });

// const h1=document.querySelector('h1');
//  console.log(h1.querySelectorAll('.highlight'));
//  console.log(h1.childNodes);
//  console.log(h1.children);
//  h1.firstElementChild.style.color='white';
//  h1.lastElementChild.style.color='orangered';
//  console.log(h1.parentNode);
//  console.log(h1.parentElement);
//  h1.closest('.header').style.background='var(--gradient-secondary)';
//  h1.closest('h1').style.background='var(--gradient-primary)';
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !==h1) el.style.transform='scale(0,5)'
// });




