//Barre de recherche cliquée
document.querySelector('#departure').addEventListener("keyup", (event) => {
    console.log(event.key)
    console.log(document.querySelector('#departure').value)
});


// Bouton Search cliqué
document.querySelector('#rechercher').addEventListener('click',() =>  {
    console.log('Bouton rechercher cliqué');
    console.log(document.querySelector('#date-bar').value)


    if (document.querySelector('#departure').value == '' || document.querySelector('#arrival').value == '' ) {
        document.querySelector('#trainPhoto').src = './images/notfound.png';
        document.querySelector('#timeToBook').textContent = 'No trip found.'

    } else {
        let result = '';
        for (let i = 0 ; i < 9 ; i++) {
            result += `<div class="resultTrajet" id="trajet${i}">
            <div>Paris > Lyon</div>
            <div id="heure">18:33</div>
            <div id="prix">103€</div>
            <input class="book" type="submit" value="Book" />
        </div>`

        }
       console.log(result)
        
        document.querySelector('.results').innerHTML = result;

        document.querySelectorAll('.resultTrajet')

        const trajets = document.querySelectorAll(".resultTrajet");

        for (let i = 0; i < trajets.length; i++) {
            trajets[i].addEventListener("click", function() {
            console.log(trajets[i]);
            window.location.href = "cart.html";

            });
        }
        // document.querySelectorAll('.resultTrajet').style.height = "600px";
        // document.querySelectorAll('.resultTrajet').setAttribute("style","height:20%")
        // document.querySelector('#timeToBook').textContent = document.querySelector('#search-bar').value;
    }
})


