const blurElements = document.querySelectorAll('.blur');

blurElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    element.classList.add('unblurred'); // Добавляем класс .unblurred
  });
});