(function () {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  function bindBlogFilters() {
    const search = $("#blogSearch");
    const tabs = $$(".category-tabs button");
    const cards = $$(".blog-card[data-title]");
    if (!cards.length) return;

    const params = new URLSearchParams(window.location.search);
    let activeCategory = params.get("category") || "all";
    if (search && params.get("q")) search.value = params.get("q");

    function apply() {
      const term = (search?.value || "").trim().toLowerCase();
      tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.category === activeCategory));
      cards.forEach((card) => {
        const matchesCategory = activeCategory === "all" || card.dataset.category === activeCategory;
        const text = `${card.dataset.title} ${card.dataset.excerpt}`.toLowerCase();
        card.hidden = !(matchesCategory && text.includes(term));
      });
    }

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        activeCategory = tab.dataset.category;
        apply();
      });
    });
    search?.addEventListener("input", apply);
    apply();
  }

  bindBlogFilters();
})();
