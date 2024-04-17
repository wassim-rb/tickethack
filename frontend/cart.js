

let cart = [ {departure : "Marseille" , arrival : "Lyon" , time : "18:33" , price : 103} ,
{departure : "Lyon" , arrival : "Paris" , time : "15:00" , price : 103},
{departure : "Paris" , arrival : "Bruxelles" , time : "12:45" , price : 90},
{departure : "Marseille" , arrival : "Lyon" , time : "18:33" , price : 103} 
]

gestionAffichage(cart)


function gestionAffichage(cart) {



if (cart.length > 0) {

    console.log('Panier non vide')
    const mycart = `<p id="mycart">My cart</p>`
    let trajets = '';
    let totalPrice = 0;
for (let i = 0 ; i < cart.length ; i++) {

    trajets +=  `<div class="trajetLine">  
    <p class="trajet">${cart[i].departure} > ${cart[i].arrival}</p> 
    <p class="heure">${cart[i].time}</p> 
    <p class="prix">${cart[i].price}€</p> 
    <input type="submit" id="delete_${i}" class="delete" value ="X"/> 
</div>`;
    
totalPrice += cart[i].price;
}


const total = `<div class="totalLine">
<p class="total">Total : ${totalPrice}€</p> 
<input id="acheter" type="submit" value="Purchase" />
</div>`
const result = (mycart + trajets + total)
    // console.log(result)


    document.querySelector('#results').innerHTML = result;
    document.querySelector('#results').style.borderRadius = "5px";
    document.querySelector('#results').style.height = "auto" ;

    document.querySelector('#acheter').addEventListener('click', () => {
        window.location.href = "booking.html";
    })
    suppressionElement()


} else {

const result = `    <div>No tickets in your cart.</div>
<div>Why not plan a trip ?</div>`

document.querySelector('#results').innerHTML = result;
document.querySelector('#results').style.height = "20%";


}

}




function suppressionElement() {
    const suppression = document.querySelectorAll('.delete')
    for (let i = 0; i < suppression.length ; i++) {
        document.querySelector(`#delete_${i}`).addEventListener('click', () => {
            // console.log(document.querySelector(`#delete_${i}`))
            document.querySelector(`#delete_${i}`).parentNode.remove()
            // console.log(suppression.length)
            console.log(i)
            cart.splice(i,1)
            console.log(cart)
           gestionAffichage(cart)
            

        })
    }

}