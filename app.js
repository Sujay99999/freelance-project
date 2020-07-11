const on = () => {
  document.querySelector('.burger-menu').classList.toggle('hidden');
  document.querySelector('.burger-close').classList.toggle('hidden');
  document.querySelector('.top-links').style.display = "block";
};
const off = () => {
  document.querySelector('.burger-close').classList.toggle('hidden');
  document.querySelector('.burger-menu').classList.toggle('hidden');
  document.querySelector('.top-links').style.display = "none";
}
on();
off();

const resetForm = () => {
  document.querySelectorAll('input-heading').reset();
};

resetForm();



