document.addEventListener('DOMContentLoaded', function () {

  /* Mobile & Tablet nav toggle */
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('active');
    });

    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside header
    document.addEventListener('click', function (e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
      }
    });

    // Close menu when resizing to desktop (>991px)
    window.addEventListener('resize', function () {
      if (window.innerWidth > 991) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
      }
    });
  }

  /* Pricing Billing Toggle */
  var pricingToggleBtns = document.querySelectorAll('.pricing-toggle-btn');
  var pricingGrid = document.getElementById('pricingGrid');
  if (pricingToggleBtns.length && pricingGrid) {
    pricingToggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        pricingToggleBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cycle = btn.getAttribute('data-cycle');
        if (cycle === 'quarterly') {
          pricingGrid.classList.remove('monthly-active');
          pricingGrid.classList.add('quarterly-active');
        } else {
          pricingGrid.classList.remove('quarterly-active');
          pricingGrid.classList.add('monthly-active');
        }
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
