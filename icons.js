var articles = document.querySelectorAll('article');

articles.forEach(function(article) {
article.addEventListener('click', function() {
    document.getElementById('sidebar').classList.add('open');
});
});

document.getElementById('close-sidebar').addEventListener('click', function() {
  document.getElementById('sidebar').classList.remove('open');
});