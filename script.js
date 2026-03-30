(function () {
  const current = document.body.dataset.page || 'home';
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');

  const navItems = [
    ['home', 'Home', 'index.html'],
    ['services', 'Services', 'index.html#services'],
    ['laptop-repair', 'Laptop Repair', 'laptop-repair.html'],
    ['remote-support', 'Remote Support', 'remote-support.html'],
    ['mail-in-repair', 'Mail-In Repair', 'mail-in-repair.html'],
    ['contact', 'Contact', 'contact.html'],
    ['collection', 'Collect & Return', 'collection.html'],
    ['book', 'Book & Pay', 'book.html']
  ];

  if (header) {
    header.innerHTML = `
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Fix My PC Now home">
          <div class="brand-mark">F</div>
          <div>
            <strong>Fix My PC Now</strong>
            <small>UK-wide support service</small>
          </div>
        </a>
        <nav class="nav" aria-label="Primary navigation">
          ${navItems.map(([id, label, href]) => `<a href="${href}" class="${current === id ? 'active' : ''}">${label}</a>`).join('')}
        </nav>
        <button class="btn btn-primary nav-toggle" type="button" aria-expanded="false" aria-controls="mobileNav">Menu</button>
      </div>
      <div class="container mobile-nav" id="mobileNav">
        ${navItems.map(([id, label, href]) => `<a href="${href}" class="${current === id ? 'active' : ''}">${label}</a>`).join('')}
      </div>
    `;

    const toggle = header.querySelector('.nav-toggle');
    const mobile = header.querySelector('#mobileNav');

    toggle?.addEventListener('click', () => {
      const open = mobile.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
  }

  if (footer) {
    footer.innerHTML = `
      <div class="container">
        <div class="top">
          <div>
            <strong>UK-wide support service</strong><br>
            Available 8AM–10PM Monday–Sunday
          </div>
          <div>
            <a href="mailto:support@fixmypcnow.co.uk">support@fixmypcnow.co.uk</a><br>
            <a href="tel:08001234567">0800 123 4567</a>
          </div>
        </div>
        <div class="bottom">
          <div><strong>Service areas:</strong> London · Birmingham · Manchester · Leeds · Liverpool · Bristol · Glasgow · Cardiff · Nationwide UK coverage</div>
          <div><strong>Keywords covered:</strong> computer repair, laptop repair, pc repair, remote computer repair UK, mail-in computer repair UK, remote PC support UK, nationwide computer repair, computer repair near me, laptop repair near me, virus removal service, hard drive recovery, full Windows system reload.</div>
          <div><strong>Collection note:</strong> Republic of Ireland excluded for collection and return.</div>
        </div>
      </div>
    `;
  }
})();