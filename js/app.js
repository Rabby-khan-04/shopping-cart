document.getElementById("phone-plus").addEventListener("click", () => {
  let quantity = priceCal("phone-qyt", true);
  let phonePrice = quantity * 1219;
  setValue("phone-price", phonePrice);

  setTotalValue();
});

document.getElementById("phone-minus").addEventListener("click", () => {
  let quantity = priceCal("phone-qyt", false);
  let phonePrice = quantity * 1219;
  setValue("phone-price", phonePrice);
  setTotalValue();
});

document.getElementById("case-plus").addEventListener("click", () => {
  let quantity = priceCal("case-qyt", true);
  let casePrice = quantity * 59;
  setValue("case-price", casePrice);
  setTotalValue();
});

document.getElementById("case-minus").addEventListener("click", () => {
  let quantity = priceCal("case-qyt", false);
  let casePrice = quantity * 59;
  setValue("case-price", casePrice);
  setTotalValue();
});
