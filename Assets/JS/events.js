// Events Functionality

document.addEventListener("DOMContentLoaded", () => {

const packageData = {
  
  motherEvents: {
    title: "Upcoming Mother Chapter Events",
    content: `
      <p>
          <strong>Bike Night at 1 More 2026:</strong><br>
          - April 18th<br>
          - 1 More Bar in Piqua<br>
          - Starts at 6pm<br>
          - Food<br>
          - Music<br>
          - 50/50 raffle<br>
          - Plus a good time with family & friends<br>
      </p>
    `
  }
  
};
  
const modalOverlay = document.createElement("div");
modalOverlay.className = "modalOverlay";

modalOverlay.innerHTML = `
  <div class="modal">
    <button class="closeModal" aria-label="Close Modal">&times;</button>
    <h2 id="modalTitle"></h2>
    <div id="modalContent"></div>
  </div>
`;

document.body.appendChild(modalOverlay);

const modalTitle = modalOverlay.querySelector("#modalTitle");
const modalContent = modalOverlay.querySelector("#modalContent");
const closeModalBtn = modalOverlay.querySelector(".closeModal");


function openModal(packageKey) {
  modalTitle.textContent = packageData[packageKey].title;
  modalContent.innerHTML = packageData[packageKey].content;
  modalOverlay.classList.add("active");
}

function closeModal() {
  modalOverlay.classList.remove("active");
}

document.querySelectorAll("[data-package]").forEach(btn => {
  btn.addEventListener("click", () => {
    openModal(btn.dataset.package);
  });
});


// Close when clicking the X button
closeModalBtn.addEventListener("click", closeModal);

// Close when clicking outside the modal box
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

// Close modal with Escape key (professional UX)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

});
