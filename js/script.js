let preveiwContainer = document.querySelector(".products-preview");
let previewBox = preveiwContainer.querySelectorAll(".preview");
// let SumbitModal = preveiwContainer.querySelectorAll('#submit-modal');

document.querySelectorAll(".products-container").forEach((product) => {
  product.onclick = () => {
    preveiwContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

document.getElementById('phone').addEventListener('input', function (e) {
  const errorElement = document.getElementById('error');
  let value = this.value.replace(/[^0-9]/g, '');
  let isValid = true;
  
  // Regular expression to check for repeated digits and common patterns
  const repeatedPattern = /^(.)\1+$/;
  const sequences = ["123", "234", "345", "456", "567", "678", "789", "890", "012"];

  if (value.length > 10) {
      value = value.slice(0, 10);
  }

  // Check for repeated patterns
  if (value === '') {
    errorElement.textContent = '';
    isValid = false;
  } else if (value.length < 5) {
    errorElement.textContent = '';
  } else if (repeatedPattern.test(value) || sequences.some(seq => value.includes(seq.repeat(Math.ceil(value.length / seq.length)).slice(0, value.length)))) {
      isValid = false;
      errorElement.textContent = '*ไม่อนุญาตให้ใช้ตัวเลขซ้ำกันหรือรูปแบบตัวเลขที่ซ้ำกัน';
  } else {
      errorElement.textContent = '';
  }

  this.value = value;
});

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});

const btn = document.querySelector("button[aria-expanded='false']");
const menu = document.querySelector("#mobile-menu");

if (btn) {
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true" || false;
    btn.setAttribute("aria-expanded", !expanded);
    menu.classList.toggle("hidden");
  });
} else {
  console.log("Button is not found in the document");
}
// Javascript to handle user profile dropdown toggling
const userMenuBtn = document.querySelector("button#user-menu");
const userMenu = document.querySelector('div[role="menu"]');

document.addEventListener("DOMContentLoaded", () => {
  const userMenuBtn = document.querySelector("#userMenuBtn");
  const userMenu = document.querySelector("#userMenu");

  if (!userMenuBtn) {
    console.log('Button with id "userMenuBtn" is not found in the document');
    return;
  }

  userMenuBtn.addEventListener("click", () => {
    if (!userMenu) {
      console.log('Menu with id "userMenu" is not found in the document');
      return;
    }
    userMenu.classList.toggle("hidden");
  });
});

// Click outside to close the user menu
window.addEventListener("click", function (e) {
  if (!userMenuBtn.contains(e.target)) {
    userMenu.classList.add("hidden");
  }
});
