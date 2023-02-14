const priceCal = (fieldId, isIncrease) => {
  const qytField = document.getElementById(fieldId).value;
  let quantity = parseInt(qytField);
  if (isIncrease) {
    quantity++;
    document.getElementById(fieldId).value = quantity;
    return quantity;
  } else {
    if (quantity > 1) {
      quantity--;
      document.getElementById(fieldId).value = quantity;
      return quantity;
    } else {
      alert("Can't Remove The Last Product");
    }
  }
};

const setValue = (fieldId, value) => {
  const field = document.getElementById(fieldId);
  field.innerText = value;
};

const setTotalValue = () => {
  const phonePrice = Number(document.getElementById("phone-price").innerText);
  const casePrice = Number(document.getElementById("case-price").innerText);

  const subTotal = phonePrice + casePrice;
  setValue("sub-total", subTotal);
  const taxAmount = Number((subTotal * 0.15).toFixed(2));
  setValue("tax", taxAmount);
  const finalTotal = subTotal + taxAmount;
  setValue("total", finalTotal);
};
