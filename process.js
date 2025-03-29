function runPhp(e) {
  window.open(`https://coding-master5.github.io/php.js/output.php?q=${e}`);
  if (window.location.substr(window.location.indexOf('?q=')+1, window.location.length)) {
    document.body.append(window.location.substr(window.location.indexOf('?q=')+1, window.location.length));
  }
}
