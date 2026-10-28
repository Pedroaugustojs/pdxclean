(function () {
  var box = document.getElementById('ba');
  var range = document.getElementById('ba-range');
  function set() { box.style.setProperty('--pos', range.value + '%'); }
  range.addEventListener('input', set);
  set();
})();
