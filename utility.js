const allButtons = document.querySelectorAll('.kbd')
// console.log(allButtons)
for(btn of allButtons){
// console.log(btn)
btn.addEventListener('click',function(event){
   event.target.style.background='#0061ff';
   event.target.setAttribute("disabled", true);
   // event.target.setAttribute()
   
   seatName=event.target.parentNode.childNodes[1].innerText;
   price=event.target.parentNode.childNodes[3].innerText;
   // console.log(seatName,price)

   
  
  
   const newContainer=document.getElementById('new-container');
   // console.log(newContainer)

   const div=document.createElement('div');
   div.classList.add('grid');
   div.classList.add('grid-cols-3');

   const p1=document.createElement('p');
   const p2=document.createElement('p');
   const p3=document.createElement('p');

   div.appendChild(p1);
   div.appendChild(p2);
   div.appendChild(p3);

   newContainer.appendChild(div);
// console.log(newContainer)
p1.innerText=seatName;
p2.innerText='economy'
p3.innerText=price;


const totalPrice=document.getElementById('total-price');
const newTotalPrice=parseInt(totalPrice.innerText)+parseInt(price);

totalPrice.innerText=newTotalPrice;

// console.log(totalPrice)
// console.log(typeof totalPrice.innerText)

const seatLeft =document.getElementById('seat-left');
const seatLeftCount=parseInt( seatLeft.innerText) - 1 ;
seatLeft.innerText=seatLeftCount;


// -------------------
 
const grandTotal=document.getElementById('grand-total');
const grandTotalNumber=parseInt(grandTotal.innerText);
grandTotal.innerText=newTotalPrice;
// console.log(grandTotalNumber)





})

// addBacgroundColor('btn')

}


function applyButton(){
  const coupenCode=document.getElementById('coupen-code')
  const coupenCodeValue=coupenCode.value;
  const grandTotalPrice=convertNumber("total-price");

   // console.log(grandTotalPrice);
  if(coupenCodeValue=='offer code'){
   const offerAmount=grandTotalPrice*0.2;
   const newGrandTotal=grandTotalPrice-offerAmount;
   // console.log(newGrandTotal);
   // console.log(newGrandTotal);
   const finalGrandTotal=document.getElementById('grand-total');
   finalGrandTotal.innerText=newGrandTotal;
   

  }
}





// console.log(grandTotalPrice);
// console.log(typeof grandTotalPrice)



function convertNumber(elementId){
   const oldNumber=document.getElementById(elementId);
   const newNumber=parseInt(oldNumber.innerText);
   // console.log(newNumber)
   // console.log(typeof newNumber)
   return newNumber;
}
 

    