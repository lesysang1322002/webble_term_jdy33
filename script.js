document.addEventListener('DOMContentLoaded', function () {
  var infoButton = document.getElementById('infoButton');
  var infoContent = document.getElementById('infoContent');

  infoButton.addEventListener('click', function (event) {
      event.stopPropagation(); // Ngăn chặn sự kiện click lan sang các phần tử cha
      if (infoContent.style.display === 'block') {
          infoContent.style.display = 'none';
      } else {
          infoContent.style.display = 'block';
      }
  });

  document.addEventListener('click', function () {
      infoContent.style.display = 'none';
  });
});