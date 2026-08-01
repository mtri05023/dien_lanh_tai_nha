(function () {
  const config = window.REVIEW_SYSTEM_CONFIG || {};
  const reviewUrl = config.reviewsJsonUrl || "reviews.json";
  const grid = document.querySelector("[data-review-list]");

  if (!grid) return;

  const escapeHtml = (value) => String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  const clampRating = (rating) => {
    const parsed = Number(rating);
    if (!Number.isFinite(parsed)) return 5;
    return Math.min(5, Math.max(1, Math.round(parsed)));
  };

  const maskName = (name) => {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (parts.length === 0) return "Khách hàng";
    if (parts.length === 1) return parts[0];
    const lastInitial = parts[parts.length - 1].charAt(0).toUpperCase();
    return `${parts.slice(0, -1).join(" ")} ${lastInitial}.`;
  };

  const formatDate = (value) => {
    if (!value) return "";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return String(value);
    return parsed.toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
  };

  const renderStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

  const getApprovedReviews = (reviews) => reviews
    .filter((review) => review && review.approved === true)
    .map((review) => ({
      name: maskName(review.name),
      service: String(review.service || "").trim(),
      rating: clampRating(review.rating),
      comment: String(review.comment || "").trim(),
      date: String(review.date || "").trim()
    }))
    .filter((review) => review.comment && review.service);

  const renderAggregateRating = (reviews) => {
    if (!reviews.length) return;
    const schemaTag = document.getElementById("localBusinessSchema");
    if (!schemaTag) return;

    try {
      const schema = JSON.parse(schemaTag.textContent || "{}");
      const graph = Array.isArray(schema["@graph"]) ? schema["@graph"] : [];
      const business = graph.find((item) => item["@type"] === "HomeAndConstructionBusiness");
      if (!business) return;

      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      business.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": (total / reviews.length).toFixed(1),
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": String(reviews.length)
      };
      schemaTag.textContent = JSON.stringify(schema);
    } catch (error) {
      console.warn("Could not update AggregateRating schema.", error);
    }
  };

  const renderReviews = (reviews) => {
    if (!reviews.length) {
      grid.innerHTML = '<p class="review-empty">Chưa có đánh giá được duyệt.</p>';
      return;
    }

    grid.innerHTML = reviews.map((review, index) => `
      <article class="review-card" style="animation-delay:${index * 90}ms">
        <div class="review-stars" aria-label="${review.rating} trên 5 sao">${renderStars(review.rating)}</div>
        <h3>${escapeHtml(review.name)}</h3>
        <div class="review-meta">
          <span>${escapeHtml(review.service)}</span>
          <span>${escapeHtml(formatDate(review.date))}</span>
        </div>
        <p class="review-comment">${escapeHtml(review.comment)}</p>
      </article>
    `).join("");
  };

  fetch(reviewUrl, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error(`Reviews request failed: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      const approvedReviews = getApprovedReviews(Array.isArray(data) ? data : []);
      renderReviews(approvedReviews);
      renderAggregateRating(approvedReviews);
    })
    .catch((error) => {
      console.warn("Could not load reviews.", error);
      grid.innerHTML = '<p class="review-error">Không tải được đánh giá khách hàng.</p>';
    });
})();
