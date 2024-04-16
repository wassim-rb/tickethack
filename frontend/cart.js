console.log('je suis bien sur la page cart et je lance cart.js')

const cart = {result : true}

if (cart) {
    console.log('Panier non vide')

    const result = `<p>My cart</p>
    <div class="trajetLine">  
        <p class="trajet">Paris > Lyon</p> 
        <p class="heure">20:09</p> 
        <p class="prix">103€</p> 
        <p class="delete">X</p> 
    </div>
    <div class="totalLine">
        <p class="total">Total : 103€</p> 
        <p class="acheter">Purchase</p> 
    </div>`

    document.querySelector('#results').innerHTML = result;

}