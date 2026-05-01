// dark-light mode

// specific
const btoo = document.getElementById("theme-btn");
const hero = document.getElementById("pricing");

btoo.addEventListener("click", function () {
  hero.classList.toggle("light");
});



const carSelect = document.getElementById("carSelect");
  const bankSelect = document.getElementById("bankSelect");
  const downPaymentInput = document.getElementById("downPayment");
  const yearsInput = document.getElementById("years");
  const monthlySpan = document.getElementById("monthly");
  const yearsValueSpan = document.getElementById("yearsValue");
  const downValueSpan = document.getElementById("downValue");
  const cashPriceSpan = document.getElementById("cashPrice");
  const carImg = document.getElementById("carImg");
  const specSpeed = document.getElementById("spec-speed");
  const specEngine = document.getElementById("spec-engine");
  const specPower = document.getElementById("spec-power");

  // hidden images references
  const imgBmw = document.getElementById("img-bmw");
  const imgTesla = document.getElementById("img-tesla");
  const imgHyundai = document.getElementById("img-hyundai");
  const imgLamborghini = document.getElementById("img-lamborghini");
  const imgFerrari = document.getElementById("img-ferrari");
  const imgBugatti = document.getElementById("img-bugatti");

  function animateValue(element, start, end, duration = 400) {
    if(!element) return;
    let startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentVal = Math.floor(progress * (end - start) + start);
      element.innerText = currentVal.toLocaleString();
      if(progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function updateCarImageAndSpecs() {
    const selectedOption = carSelect.options[carSelect.selectedIndex];
    const carType = selectedOption.getAttribute("data-car");
    let imgSrc = "";
    if(carType === "bmw") imgSrc = imgBmw.src;
    else if(carType === "tesla") imgSrc = imgTesla.src;
    else if(carType === "hyundai") imgSrc = imgHyundai.src;
    else if(carType === "lamborghini") imgSrc = imgLamborghini.src;
    else if(carType === "ferrari") imgSrc = imgFerrari.src;
    else if(carType === "bugatti") imgSrc = imgBugatti.src;
    
    if(carImg && imgSrc) {
      carImg.classList.add("fade-out");
      setTimeout(() => {
        carImg.src = imgSrc;
        carImg.classList.remove("fade-out");
      }, 150);
    }
    // update specs based on data attributes
    const speed = selectedOption.getAttribute("data-speed") || "280 km/h";
    const engine = selectedOption.getAttribute("data-engine") || "Turbo";
    const power = selectedOption.getAttribute("data-power") || "450 HP";
    if(specSpeed) specSpeed.innerText = `Speed: ${speed}`;
    if(specEngine) specEngine.innerText = `Engine: ${engine}`;
    if(specPower) specPower.innerText = `Horsepower: ${power}`;
  }

  function calculateInstallment() {
    const totalPrice = parseInt(carSelect.value) || 1200000;
    // update cash price with animation
    const currentCash = parseInt(cashPriceSpan.innerText.replace(/,/g, "")) || 1200000;
    if(currentCash !== totalPrice) animateValue(cashPriceSpan, currentCash, totalPrice, 350);
    else cashPriceSpan.innerText = totalPrice.toLocaleString();

    const interestRate = parseFloat(bankSelect.value);
    const years = parseInt(yearsInput.value);
    yearsValueSpan.innerText = years;
    
    let maxDown = totalPrice * 0.8;
    let minDown = totalPrice * 0.1;
    if(minDown < 50000) minDown = 50000;
    downPaymentInput.max = maxDown;
    downPaymentInput.min = minDown;
    let downPayment = parseInt(downPaymentInput.value);
    if(downPayment > maxDown) { downPayment = maxDown; downPaymentInput.value = downPayment; }
    if(downPayment < minDown) { downPayment = minDown; downPaymentInput.value = downPayment; }
    
    downValueSpan.innerText = downPayment.toLocaleString();
    const remaining = totalPrice - downPayment;
    const months = years * 12;
    const totalInterest = remaining * interestRate;
    const totalWithInterest = remaining + totalInterest;
    let monthly = Math.round(totalWithInterest / months);
    if(monthly < 0) monthly = 0;
    monthlySpan.innerText = monthly.toLocaleString();
    
    updateCarImageAndSpecs();
  }

  // attach events
  if(carSelect && bankSelect && downPaymentInput && yearsInput) {
    carSelect.addEventListener("change", () => {
      calculateInstallment();
      const selectedPrice = parseInt(carSelect.value);
      let newMaxDown = selectedPrice * 0.8;
      let newMinDown = selectedPrice * 0.1;
      downPaymentInput.max = newMaxDown;
      downPaymentInput.min = newMinDown;
      let currDown = parseInt(downPaymentInput.value);
      if(currDown > newMaxDown) downPaymentInput.value = newMaxDown;
      if(currDown < newMinDown) downPaymentInput.value = newMinDown;
      calculateInstallment();
    });
    bankSelect.addEventListener("change", calculateInstallment);
    downPaymentInput.addEventListener("input", calculateInstallment);
    yearsInput.addEventListener("input", calculateInstallment);
  }
  calculateInstallment();

  // close mobile menu on link click (optional)
  document.querySelectorAll('.mobile-menu a, .mobile-menu .btn').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById("mobile-menu")?.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });
  window.addEventListener("resize", () => {
    if(window.innerWidth > 900) {
      document.getElementById("mobile-menu")?.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });