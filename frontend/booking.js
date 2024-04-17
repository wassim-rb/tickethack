const cart = [ {departure : "Marseille" , arrival : "Lyon" , time : "18:33" , price : 103} ,
{departure : "Lyon" , arrival : "Paris" , time : "15:00" , price : 103},
{departure : "Paris" , arrival : "Bruxelles" , time : "12:45" , price : 90},
{departure : "Marseille" , arrival : "Lyon" , time : "18:33" , price : 103} 
]


if (cart) {
    console.log('Panier non vide')

    console.log('Panier non vide')
    const mybook = `<p id="mybook">My bookings</p>`
    let trajets = '';
   
    for (let i = 0 ; i < cart.length ; i++) {

        trajets +=  `<div class="trajetLine">  
        <p class="trajet">${cart[i].departure} > ${cart[i].arrival}</p> 
        <p class="heure">${cart[i].time}</p> 
        <p class="prix">${cart[i].price}€</p> 
        <p class="delay">Departure in 5 hours</p> 
    </div>`;
        
    
    }
    
 
       const end =   `<p id="line">______________________________</p> 
        <p id="enjoy">Enjoy your travel with Tickethack!</p> `
    
        const result = mybook + trajets + end;

    // const heightResult = 3 * 100;
    document.querySelector('#results').innerHTML = result;
    document.querySelector('#results').style.borderRadius = "5px";
    document.querySelector('#results').style.height = "auto" ;
    //`${heightResult}px`

}