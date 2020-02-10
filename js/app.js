console.log('App was loaded...');

const a = document.querySelectorAll('ul.main-menu a');
const ul = document.querySelectorAll('ul.main-menu ul');

[].map.call(a, el => el.addEventListener('click', event => {
  event.preventDefault();
  [...ul].map(el => el.classList.remove('open'));

  const openParentsUl = () => {
    [].map.call((event.composedPath()).filter(el => el.tagName === 'UL').filter(el => el.matches('.main-menu ul')), el => {
      el.classList.add('open');
      el.nextElementSibling.classList.add('selected');
    })
  }
  if (event.target.classList.contains('selected')) {
    event.target.previousElementSibling ? event.target.classList.remove('selected') : null;
  } else {
    [...a].map(el => el.classList.remove('selected'));
    event.target.classList.add('selected');
    event.target.previousElementSibling ? event.target.previousElementSibling.classList.add('open') : null;
  }
  openParentsUl();
}))
