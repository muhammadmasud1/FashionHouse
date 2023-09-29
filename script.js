
let selectItem = document.getElementById('select-items');
let couponField = document.getElementById('coupon-input-field');
let totalPrice = document.getElementById('selecPrice');
let handleCoupon = document.getElementById('handleCoupon');
let parchaseBtm = document.getElementById('parchaseBtm');
let discountField = document.getElementById('discount-field');
let finalyTotalPrice = document.getElementById('finaly_total_Price');
let sum = 0;

function addToCard(target) {
    let getItemName = target.childNodes[3].childNodes[3].innerText;
    let getPrice = target.childNodes[3].childNodes[5].innerText;
    let getPriceNumber = parseFloat(getPrice)

    let li = document.createElement('li');
   
   li.style.fontSize = '20px';
   li.style.color = 'red';
   li.style.fontWeight = 'bold'
    li.innerText = getItemName;
    selectItem.appendChild(li);
    sum = sum + getPriceNumber;

    totalPrice.innerText = sum.toFixed(2);

    if(sum > 0) {
        parchaseBtm.disabled = false;
    } else {
        parchaseBtm.disabled = true;
    }

    if(sum >= 200) {
        couponField.removeAttribute('disabled',false);
        handleCoupon.removeAttribute('disabled',false);
        return;
    } else {
        couponField.setAttribute('disabled' , true);
        handleCoupon.setAttribute('disabled',true);
        return;
    }
}

function applyCoupon() {
    const previewTotalPriceString = totalPrice.innerText;
    const previewPriceValue = parseFloat(previewTotalPriceString);
    // console.log(previewPriceValue)

    if(couponField.value.toUpperCase() === 'SELL200'){
        function discountPrice(totalPrice) {
            return (previewPriceValue*20)/100
        }
    } else {
        alert('Mistake Coupon Code!')
    }
    const totalDiscountPrice = discountPrice(previewPriceValue);
  
    discountField.innerText = totalDiscountPrice.toFixed(2),"tk";
    const finalTotal = previewPriceValue - totalDiscountPrice;

    finalyTotalPrice.innerText = finalTotal;
}








