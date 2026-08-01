window.REVIEW_FORM_CONFIG = {
  googleForm: {
    formAction: "",
    entries: {
      fullName: "",
      phone: "",
      zalo: "",
      district: "",
      address: "",
      service: "",
      repairDate: "",
      repairCost: "",
      technician: "",
      rating: "",
      comment: ""
    }
  }
};

(function () {
  const form = document.getElementById("customerReviewForm");
  const status = document.getElementById("reviewFormStatus");
  if (!form) return;

  const getValue = (name) => new FormData(form).get(name)?.toString().trim() || "";

  const setStatus = (message) => {
    if (status) status.textContent = message;
  };

  const validateGoogleFormConfig = (googleForm) => {
    if (!googleForm?.formAction) return false;
    return Object.values(googleForm.entries || {}).every(Boolean);
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const googleForm = window.REVIEW_FORM_CONFIG.googleForm;
    if (!validateGoogleFormConfig(googleForm)) {
      setStatus("Biểu mẫu đã sẵn sàng. Vui lòng cấu hình Google Form trong assets/js/review.js trước khi nhận đánh giá thật.");
      return;
    }

    const payload = new FormData();
    const entries = googleForm.entries;
    payload.append(entries.fullName, getValue("fullName"));
    payload.append(entries.phone, getValue("phone"));
    payload.append(entries.zalo, getValue("zalo"));
    payload.append(entries.district, getValue("district"));
    payload.append(entries.address, getValue("address"));
    payload.append(entries.service, getValue("service"));
    payload.append(entries.repairDate, getValue("repairDate"));
    payload.append(entries.repairCost, getValue("repairCost"));
    payload.append(entries.technician, getValue("technician"));
    payload.append(entries.rating, getValue("rating"));
    payload.append(entries.comment, getValue("comment"));

    try {
      setStatus("Đang gửi đánh giá...");
      await fetch(googleForm.formAction, {
        method: "POST",
        mode: "no-cors",
        body: payload
      });
      form.reset();
      const defaultRating = form.querySelector('input[name="rating"][value="5"]');
      if (defaultRating) defaultRating.checked = true;
      setStatus("Cảm ơn quý khách. Đánh giá sẽ hiển thị sau khi được duyệt.");
    } catch (error) {
      console.warn("Could not submit review.", error);
      setStatus("Không gửi được đánh giá. Vui lòng thử lại sau.");
    }
  });
})();
