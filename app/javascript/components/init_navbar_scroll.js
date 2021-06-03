const initNavbarScroll = () => {
  window.addEventListener('scroll', function(e) {
    let navbar = document.querySelector('#navbar');
    // lastKnownScrollPosition = window.scrollY;
    let scrollY = e.currentTarget.scrollY;
    if (scrollY > 370) {
      navbar.classList.add('navbar-lewagon-white')
    } else {
      navbar.classList.remove('navbar-lewagon-white')
    }
  });
}

export { initNavbarScroll }
