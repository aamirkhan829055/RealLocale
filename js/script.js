document.addEventListener('DOMContentLoaded', function () {

  /* Mobile nav toggle */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
      });
    });
  }

  /* FAQ tabs */
  var faqTabs = document.querySelectorAll('.faq-tab');
  var faqPanels = document.querySelectorAll('.faq-panel');
  faqTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      faqTabs.forEach(function (t) { t.classList.remove('active'); });
      faqPanels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      document.querySelector('.faq-panel[data-panel="' + tab.getAttribute('data-tab') + '"]').classList.add('active');
    });
  });

  /* FAQ accordion */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-a').style.maxHeight = '';
      });
      if (!wasOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 24 + 'px';
      }
    });
  });

  /* Lead capture form */
  var leadForm = document.getElementById('leadForm');
  var leadSuccess = document.getElementById('leadSuccess');
  if (leadForm) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();
      leadSuccess.classList.add('show');
      leadForm.reset();
    });
  }

  /* Contact form */
  var contactForm = document.getElementById('contactForm');
  var contactSuccess = document.getElementById('contactSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      contactSuccess.classList.add('show');
      contactForm.reset();
    });
  }

});
