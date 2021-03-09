const pannels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
  this.classList.toggle('open-active');
  }
};

pannels.forEach(pannel => pannel.addEventListener('click', toggleOpen));
pannels.forEach(pannel => pannel.addEventListener('transitionend', toggleActive));
