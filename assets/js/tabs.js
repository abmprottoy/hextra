document.querySelectorAll('.tabs-toggle').forEach(function (button) {
  button.addEventListener('click', function (e) {
    // set parent tabs to unselected
    const tabs = Array.from(e.target.parentElement.querySelectorAll('.tabs-toggle'));
    tabs.map(tab => tab.setAttribute('data-state', ''));

    // set current tab to selected
    e.target.setAttribute('data-state', 'selected');

    // set all panels to unselected
    const panelsContainer = e.target.parentElement.nextElementSibling;
    Array.from(panelsContainer.children).forEach(function (panel) {
      panel.setAttribute('data-state', '');
    });

    const panelId = e.target.getAttribute('aria-controls');
    const panel = panelsContainer.querySelector(`#${panelId}`);
    panel.setAttribute('data-state', 'selected');
  });
});
