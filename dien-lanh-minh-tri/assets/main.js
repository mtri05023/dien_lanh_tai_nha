const cfg = window.SITE_CONFIG || {};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const serviceDisclaimer = "Giá thực tế phụ thuộc vào tình trạng thiết bị, linh kiện và mức độ hư hỏng. Vui lòng liên hệ Zalo hoặc hotline để được kiểm tra và báo giá chính xác.";

const services = [
  {
    id: "sua-tu-lanh",
    icon: "▣",
    title: "Sửa tủ lạnh",
    desc: "Kiểm tra và xử lý lỗi tủ lạnh gia đình tại nhà, báo rõ nguyên nhân trước khi sửa.",
    faults: [
      "Tủ lạnh không lạnh",
      "Tủ lạnh chảy nước",
      "Tủ lạnh đóng tuyết",
      "Tủ lạnh kêu to",
      "Không làm đá",
      "Không hoạt động"
    ],
    price: "Từ 350.000đ",
    priceTarget: "bang-gia-sua-tu-lanh"
  },
  {
    id: "sua-may-giat",
    icon: "◉",
    title: "Sửa máy giặt",
    desc: "Sửa máy giặt cửa trên, cửa ngang gặp lỗi vận hành, cấp xả nước, vắt hoặc bo mạch.",
    faults: [
      "Máy giặt không cấp nước",
      "Không xả nước",
      "Không vắt",
      "Rung lắc mạnh",
      "Báo mã lỗi",
      "Không khởi động"
    ],
    price: "Từ 250.000đ",
    priceTarget: "bang-gia-sua-may-giat"
  },
  {
    id: "sua-bep-tu",
    icon: "▤",
    title: "Sửa bếp từ",
    desc: "Kiểm tra bếp từ mất nguồn, báo lỗi, chập chờn, không nhận nồi hoặc lỗi phím cảm ứng.",
    faults: [
      "Bếp từ không lên nguồn",
      "Không nhận nồi",
      "Báo lỗi E0, E1, E2",
      "Liệt phím",
      "Tự tắt khi đang sử dụng",
      "Chập điện hoặc nhảy aptomat"
    ],
    price: "Từ 250.000đ",
    priceTarget: "bang-gia-sua-bep-tu"
  }
];

const priceGroups = [
  {
    id: "bang-gia-sua-tu-lanh",
    title: "Bảng giá sửa tủ lạnh",
    columns: ["Dịch vụ", "Giá tham khảo"],
    rows: [
      ["Kiểm tra và chẩn đoán lỗi", "100.000đ - 200.000đ"],
      ["Sửa tủ lạnh không lạnh", "350.000đ - 1.500.000đ"],
      ["Xử lý tủ lạnh chảy nước", "250.000đ - 800.000đ"],
      ["Xử lý tủ lạnh đóng tuyết", "300.000đ - 1.200.000đ"],
      ["Sửa tủ lạnh kêu to", "300.000đ - 1.000.000đ"],
      ["Sửa lỗi không làm đá", "350.000đ - 1.500.000đ"],
      ["Sửa tủ lạnh không hoạt động", "400.000đ - 1.800.000đ"]
    ]
  },
  {
    id: "bang-gia-sua-may-giat",
    title: "Bảng giá sửa máy giặt",
    columns: ["Dịch vụ", "Giá tham khảo"],
    rows: [
      ["Kiểm tra máy giặt", "100.000đ - 200.000đ"],
      ["Sửa máy không cấp nước", "250.000đ - 650.000đ"],
      ["Sửa máy không xả nước", "250.000đ - 700.000đ"],
      ["Sửa máy không vắt", "300.000đ - 900.000đ"],
      ["Xử lý máy rung lắc mạnh", "300.000đ - 900.000đ"],
      ["Kiểm tra mã lỗi", "250.000đ - 800.000đ"],
      ["Sửa máy không khởi động", "350.000đ - 1.500.000đ"]
    ]
  },
  {
    id: "bang-gia-sua-bep-tu",
    title: "Bảng giá sửa bếp từ",
    columns: ["Dịch vụ", "Giá tham khảo"],
    rows: [
      ["Kiểm tra bếp từ", "100.000đ - 200.000đ"],
      ["Sửa bếp từ không lên nguồn", "300.000đ - 1.500.000đ"],
      ["Xử lý bếp không nhận nồi", "250.000đ - 900.000đ"],
      ["Sửa lỗi E0, E1, E2", "250.000đ - 1.000.000đ"],
      ["Sửa liệt phím cảm ứng", "350.000đ - 1.200.000đ"],
      ["Xử lý bếp tự tắt khi dùng", "300.000đ - 1.200.000đ"],
      ["Kiểm tra chập điện hoặc nhảy aptomat", "350.000đ - 1.800.000đ"]
    ]
  }
];

const newsPosts = [
  {
    title: "Dấu hiệu tủ lạnh cần gọi thợ kiểm tra sớm",
    category: "Lỗi tủ lạnh",
    desc: "Tủ lạnh kém lạnh, đóng tuyết dày, kêu bất thường hoặc không làm đá thường là dấu hiệu cần kiểm tra sớm để tránh hư hỏng nặng hơn.",
    href: "#sua-tu-lanh"
  },
  {
    title: "Máy giặt không vắt: nên kiểm tra gì trước?",
    category: "Lỗi máy giặt",
    desc: "Kiểm tra khối lượng đồ, nắp máy, ống xả và mã lỗi hiển thị trước khi đặt lịch sửa chữa giúp kỹ thuật viên chẩn đoán nhanh hơn.",
    href: "#sua-may-giat"
  },
  {
    title: "Bếp từ báo E0, E1, E2 có nên tiếp tục dùng?",
    category: "Lỗi bếp từ",
    desc: "Khi bếp báo lỗi liên tục, tự tắt hoặc có dấu hiệu chập điện, nên ngừng sử dụng và gọi thợ kiểm tra để đảm bảo an toàn.",
    href: "#sua-bep-tu"
  },
  {
    title: "Cách sử dụng thiết bị đúng cách để giảm lỗi",
    category: "Sử dụng đúng cách",
    desc: "Đặt thiết bị nơi thông thoáng, dùng đúng tải, vệ sinh khu vực thao tác và ngắt nguồn khi có dấu hiệu bất thường giúp giảm rủi ro hư hỏng.",
    href: "#quote"
  },
  {
    title: "Khi nào nên gọi thợ sửa chữa tại nhà?",
    category: "Dấu hiệu cần gọi thợ",
    desc: "Thiết bị mất nguồn, có mùi khét, rò nước, báo lỗi lặp lại hoặc hoạt động bất thường sau khi khởi động lại đều nên được kiểm tra chuyên môn.",
    href: "#contact"
  }
];

function formatZaloUrl(message = "") {
  const baseUrl = `https://zalo.me/${cfg.zaloNumber || ""}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}

function applyConfig() {
  const brandName = cfg.brandName || "SỬA CHỮA ĐIỆN LẠNH TẠI NHÀ";
  const phoneLabel = cfg.phoneDisplay || cfg.phoneRaw || "";
  $$(".js-brand-name").forEach((el) => { el.textContent = brandName; });
  $$(".js-phone-text").forEach((el) => { el.textContent = cfg.phoneDisplay || ""; });
  $$(".js-phone-link").forEach((el) => {
    el.href = `tel:${cfg.phoneRaw || ""}`;
    el.target = "_self";
    el.removeAttribute("rel");
    el.setAttribute("aria-label", `Gọi điện thoại ${phoneLabel}`);
  });
  $$(".js-zalo-link").forEach((el) => {
    el.href = formatZaloUrl();
    el.target = "_blank";
    el.rel = "noopener noreferrer";
    el.setAttribute("aria-label", `Nhắn tin Zalo ${phoneLabel}`);
  });
  $$(".js-email").forEach((el) => { el.textContent = cfg.email || ""; });
  $$(".js-area").forEach((el) => { el.textContent = cfg.serviceArea || ""; });
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function renderServices() {
  const grid = $("#serviceGrid");
  if (!grid) return;
  grid.innerHTML = services.map((service) => `
    <article class="service-card" id="${service.id}">
      <div class="service-top">
        <span class="service-icon" aria-hidden="true">${service.icon}</span>
        <div>
          <h3>${service.title}</h3>
          <p>${service.desc}</p>
        </div>
      </div>
      <div>
        <strong>Lỗi thường gặp</strong>
        <ul>${service.faults.map((fault) => `<li>${fault}</li>`).join("")}</ul>
      </div>
      <div class="price-line">Giá tham khảo: ${service.price}</div>
      <div class="service-note">${serviceDisclaimer}</div>
      <div class="service-actions">
        <a class="btn btn-outline" href="#${service.priceTarget}" data-price-link>Xem bảng giá</a>
        <a class="btn btn-zalo js-zalo-link" href="${formatZaloUrl()}" target="_blank" rel="noopener noreferrer">Liên hệ Zalo</a>
        <a class="btn btn-primary js-phone-link" href="tel:${cfg.phoneRaw || ""}">Gọi ngay</a>
      </div>
    </article>
  `).join("");
}

function renderPrices() {
  const tabs = $("#priceTabs");
  const panels = $("#pricePanels");
  if (!tabs || !panels) return;

  tabs.innerHTML = priceGroups.map((group, index) => `
    <button type="button" class="${index === 0 ? "active" : ""}" data-price-tab="${group.id}" aria-controls="${group.id}">
      ${group.title.replace("Bảng giá ", "")}
    </button>
  `).join("");

  panels.innerHTML = priceGroups.map((group, index) => `
    <section class="price-panel ${index === 0 ? "active" : ""}" id="${group.id}">
      <h3>${group.title}</h3>
      <div class="table-wrap">
        <table class="price-table">
          <thead>
            <tr>${group.columns.map((column) => `<th>${column}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${group.rows.map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
      <div class="price-disclaimer">
        <p>${serviceDisclaimer}</p>
        <div class="price-cta">
          <a class="btn btn-zalo js-zalo-link" href="${formatZaloUrl()}" target="_blank" rel="noopener noreferrer">Nhận báo giá qua Zalo</a>
          <a class="btn btn-primary js-phone-link" href="tel:${cfg.phoneRaw || ""}">Gọi báo giá ngay</a>
        </div>
      </div>
    </section>
  `).join("");
}

function renderNews() {
  const grid = $("#newsGrid");
  if (!grid) return;
  grid.innerHTML = newsPosts.map((post) => `
    <article class="news-card">
      <span>${post.category}</span>
      <h3>${post.title}</h3>
      <p>${post.desc}</p>
      <a href="${post.href}">Xem hướng xử lý</a>
    </article>
  `).join("");
}

function openDrawer() {
  const drawer = $("#serviceDrawer");
  const backdrop = $(".drawer-backdrop");
  if (!drawer || !backdrop) return;
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
  backdrop.hidden = false;
  document.body.classList.add("drawer-open");
  $$("[data-open-services]").forEach((btn) => btn.setAttribute("aria-expanded", "true"));
}

function closeDrawer() {
  const drawer = $("#serviceDrawer");
  const backdrop = $(".drawer-backdrop");
  if (!drawer || !backdrop) return;
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
  backdrop.hidden = true;
  document.body.classList.remove("drawer-open");
  $$("[data-open-services]").forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function activatePrice(id, shouldScroll = false) {
  const tab = $(`[data-price-tab="${id}"]`);
  const panel = $(`#${id}`);
  if (!tab || !panel) return;
  $$(".price-tabs button").forEach((item) => item.classList.remove("active"));
  $$(".price-panel").forEach((item) => item.classList.remove("active"));
  tab.classList.add("active");
  panel.classList.add("active");
  if (shouldScroll) panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bindInteractions() {
  $$("[data-open-services]").forEach((button) => button.addEventListener("click", openDrawer));
  $$("[data-close-services]").forEach((button) => button.addEventListener("click", closeDrawer));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeDrawer();
  });
  $("#serviceDrawer")?.addEventListener("click", (event) => {
    const link = event.target.closest("[data-service-link]");
    if (!link) return;
    closeDrawer();
  });
  $("#priceTabs")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-price-tab]");
    if (!button) return;
    activatePrice(button.dataset.priceTab);
  });
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-price-link]");
    if (!link) return;
    event.preventDefault();
    const id = link.getAttribute("href").slice(1);
    activatePrice(id, true);
  });
}

function renderQuoteOptions() {
  const device = $("#quoteDevice");
  const service = $("#quoteService");
  if (!device || !service) return;
  const devices = ["Tủ lạnh", "Máy giặt", "Bếp từ"];
  device.innerHTML = `<option value="">Chọn loại thiết bị</option>${devices.map((item) => `<option>${item}</option>`).join("")}`;
  service.innerHTML = `<option value="">Chọn dịch vụ</option>${services.map((item) => `<option>${item.title}</option>`).join("")}`;
}

function bindQuoteForm() {
  const form = $("#quoteForm");
  const hint = $("#formHint");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const requiredFields = [
      { el: $("#quoteName"), label: "Họ và tên" },
      { el: $("#quotePhone"), label: "Số điện thoại" },
      { el: $("#quoteDevice"), label: "Loại thiết bị" },
      { el: $("#quoteService"), label: "Dịch vụ cần sửa" },
      { el: $("#quoteIssue"), label: "Tình trạng thiết bị" },
      { el: $("#quoteArea"), label: "Khu vực" }
    ];
    const missingField = requiredFields.find((field) => !field.el.value.trim());
    if (missingField) {
      if (hint) hint.textContent = `Vui lòng nhập ${missingField.label.toLowerCase()}.`;
      missingField.el.focus();
      return;
    }

    const name = $("#quoteName").value.trim();
    const phone = $("#quotePhone").value.trim();
    const device = $("#quoteDevice").value.trim();
    const service = $("#quoteService").value.trim();
    const issue = $("#quoteIssue").value.trim();
    const area = $("#quoteArea").value.trim();
    const time = $("#quoteTime").value.trim();
    const message = [
      `Xin chào ${cfg.brandName || "SỬA CHỮA ĐIỆN LẠNH TẠI NHÀ"}!`,
      "",
      "Tôi cần kiểm tra và báo giá sửa thiết bị tại nhà.",
      "",
      `Họ tên: ${name}`,
      `Số điện thoại: ${phone}`,
      `Thiết bị: ${device}`,
      `Dịch vụ: ${service}`,
      `Tình trạng: ${issue}`,
      `Khu vực: ${area}`,
      `Thời gian mong muốn: ${time || "Chưa xác định"}`,
      "",
      "Nhờ kỹ thuật viên liên hệ tư vấn giúp tôi."
    ].join("\n");

    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard is not available");
      await navigator.clipboard.writeText(message);
      if (hint) hint.textContent = "Nội dung yêu cầu đã được sao chép. Vui lòng dán vào Zalo và bấm Gửi.";
    } catch (error) {
      if (hint) hint.textContent = "Nếu Zalo không tự điền nội dung, vui lòng sao chép thông tin đã nhập và gửi cho kỹ thuật viên.";
    }
    window.open(formatZaloUrl(message), "_blank", "noopener,noreferrer");
  });
}

function renderSchema() {
  const target = $("#localBusinessSchema");
  if (!target) return;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": cfg.brandName || "SỬA CHỮA ĐIỆN LẠNH TẠI NHÀ",
    "url": cfg.websiteUrl || window.location.href,
    "telephone": cfg.phoneRaw || "",
    "email": cfg.email || "",
    "areaServed": cfg.serviceArea || "",
    "openingHours": "Mo-Su 07:00-21:00",
    "priceRange": "$$",
    "image": `${cfg.websiteUrl || window.location.origin}/assets/hero-service.webp`,
    "description": "Dịch vụ sửa tủ lạnh, sửa máy giặt và sửa bếp từ tại nhà. Kỹ thuật viên trên 10 năm kinh nghiệm, kiểm tra tận nơi, báo giá trước khi sửa.",
    "makesOffer": services.map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc
      }
    }))
  };
  target.textContent = JSON.stringify(schema);
}

applyConfig();
renderServices();
renderPrices();
renderNews();
applyConfig();
renderQuoteOptions();
bindInteractions();
bindQuoteForm();
renderSchema();
