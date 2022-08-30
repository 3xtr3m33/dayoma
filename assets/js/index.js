document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
  window.onscroll = function () {
    document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
      ? document.querySelector('header').classList.add("scroll")
      : document.querySelector('header').classList.remove("scroll");

    const sections = document.querySelectorAll("section.menu");
    sections.forEach((section) => {
      let viewport_div = section.querySelector('.viewport');
      if (isInViewport(viewport_div)) {
        document.querySelectorAll('a[data-id]').forEach((a_el) => {
          console.log(a_el);
          a_el.classList.remove('active');
        });
        
        document.querySelector(`a[data-id='${viewport_div.id}']`).classList.add("active");
      }
    });
  };

  for (let i = 0; i < 42; i++) {
    let wrapper_div = document.createElement('div');
    wrapper_div.className = 'splide__slide gallery-img';
    let img = document.createElement('img');
    img.src = `${window.location.origin}/assets/images/slider/${i + 1}.JPG`;
    wrapper_div.appendChild(img);
    document.querySelector('.splide__list').appendChild(wrapper_div);
  }

  const splide = new Splide('.splide', {
    type: 'loop',
    perPage: 1,
    direction: 'rtl',
    pagination: false,
  });

  splide.mount();
});

function isInViewport(element) {
  const rect = element?.getBoundingClientRect();
  return (
    rect?.top >= 0 &&
    rect?.left >= 0 &&
    rect?.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function setActive(clicked_el) {
  document.querySelectorAll('header ul.menu li.menu-item a').forEach((el) => {
    el.classList.remove('active');
  });
  clicked_el.classList.add('active');
}

function toggleClass(el_id) {
    document.getElementById(el_id).classList.toggle('open');
}
//if header item in viewport change style
