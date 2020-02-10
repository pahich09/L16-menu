console.log('App was loaded...');

const a = document.querySelectorAll('ul.main-menu a');
const ul = document.querySelectorAll('ul.main-menu ul');

[].map.call(a, el => el.addEventListener('click', event => {
  event.preventDefault();
  [...ul].map(el => el.classList.remove('open'));

  const openParent = curEventTarget => {
    let parent = curEventTarget.parentElement.parentElement;
    if (parent.classList.contains('main-menu')) {
      return;
    } else {
      parent.classList.add('open');
      parent.nextElementSibling.classList.add('selected');
      openParent(parent)
    }
  }
  if (event.target.classList.contains('selected')) {
    event.target.previousElementSibling ? event.target.classList.remove('selected') : null;
  } else {
    [...a].map(el => el.classList.remove('selected'));
    event.target.classList.add('selected');
    event.target.previousElementSibling ? event.target.previousElementSibling.classList.add('open') : null;
  }
  openParent(event.target);
}))
