// pricing logic + calculations

// main elements
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

  // hidden images references ( to be filled ya rgala)
  // bmw
  const imgBmw1 = document.getElementById("img-bmw1");
  const imgBmw2 = document.getElementById("img-bmw2");
  const imgBmw3 = document.getElementById("img-bmw3");
  const imgBmw4 = document.getElementById("img-bmw4");
  // toyota
  const imgtoyota1 = document.getElementById("img-toyota1");
  const imgtoyota2 = document.getElementById("img-toyota2");
  const imgtoyota3 = document.getElementById("img-toyota3");
  const imgtoyota4 = document.getElementById("img-toyota4");
  // tesla
  const imgTesla1 = document.getElementById("img-tesla1");
  const imgTesla2 = document.getElementById("img-tesla2");
  const imgTesla3 = document.getElementById("img-tesla3");
  const imgTesla4 = document.getElementById("img-tesla4");
  // lambur
  const imgLamborghini1 = document.getElementById("img-lamborghini1");
  const imgLamborghini2 = document.getElementById("img-lamborghini2");
  const imgLamborghini3 = document.getElementById("img-lamborghini3");
  const imgLamborghini4 = document.getElementById("img-lamborghini4");
  // bugatti
  const imgBugatti1 = document.getElementById("img-bugatti1");
  const imgBugatti2 = document.getElementById("img-bugatti2");
  const imgBugatti3 = document.getElementById("img-bugatti3");
  const imgBugatti4 = document.getElementById("img-bugatti4");
  // hyundai
  const imgHyundai1 = document.getElementById("img-hyundai1");
  const imgHyundai2 = document.getElementById("img-hyundai2");
  const imgHyundai3 = document.getElementById("img-hyundai3");
  const imgHyundai4 = document.getElementById("img-hyundai4");

 // simple number animation (increase gradualily)
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
 // to be filled brdo 
  function updateCarImageAndSpecs() {
    const selectedOption = carSelect.options[carSelect.selectedIndex];
    const carType = selectedOption.getAttribute("data-car");
    let imgSrc = "";
    if(carType === "bmw1")imgSrc = imgBmw1.src;
    else if(carType == "bmw2") imgSrc = imgBmw2.src;
    else if(carType == "bmw3") imgSrc = imgBmw3.src;
    else if(carType == "bmw4") imgSrc = imgBmw4.src;

    else if(carType == "toyota1") imgSrc = imgtoyota1.src;
    else if(carType == "toyota2") imgSrc = imgtoyota2.src;
    else if(carType == "toyota3") imgSrc = imgtoyota3.src;
    else if(carType == "toyota4") imgSrc = imgtoyota4.src;

    else if(carType === "tesla1") imgSrc = imgTesla1.src;
    else if(carType === "tesla2") imgSrc = imgTesla2.src;
    else if(carType === "tesla3") imgSrc = imgTesla3.src;
    else if(carType === "tesla4") imgSrc = imgTesla4.src;

    else if(carType === "lamborghini1") imgSrc = imgLamborghini1.src;
    else if(carType === "lamborghini2") imgSrc = imgLamborghini2.src;
    else if(carType === "lamborghini3") imgSrc = imgLamborghini3.src;
    else if(carType === "lamborghini4") imgSrc = imgLamborghini4.src;
    
    else if(carType === "bugatti1") imgSrc = imgBugatti1.src;
    else if(carType === "bugatti2") imgSrc = imgBugatti2.src;
    else if(carType === "bugatti3") imgSrc = imgBugatti3.src;
    else if(carType === "bugatti4") imgSrc = imgBugatti4.src;

    else if(carType === "hyundai1") imgSrc = imgHyundai1.src;
    else if(carType === "hyundai2") imgSrc = imgHyundai2.src;
    else if(carType === "hyundai3") imgSrc = imgHyundai3.src;
    else if(carType === "hyundai4") imgSrc = imgHyundai4.src;
    
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
// main calculation (cash + monthly)
  function calculateInstallment() {
    const totalPrice = parseInt(carSelect.value) || 1200000;
    // update cash price with animation 
    // might clean this later 
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

  // update when user changes anything

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