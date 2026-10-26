const btn = document.getElementById('themeToggle');
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  btn.textContent = '☀️';
}
btn.addEventListener('click', () => {
  const dark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (dark) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    btn.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    btn.textContent = '☀️';
  }
});
