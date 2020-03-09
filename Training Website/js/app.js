//console.log('test');
/*
let header = document.getElementById('our-header');
header.innerHTML = "Our New Header";
header.style.color = 'red';
console.log('header :', header);
*/

/*
<div appcard-wrapper>
            <div class="card section2" style="width: 18rem;">
                <img class="card-img-top" src="..." alt="Card image cap">
                <div class="card-body">
                    <p class="card-text"><b>'Salt and Pepper' Calamari</b></p>
                    <button type="button appmodal" class="btn btn-primary" data-toggle="modal" data-target="#calamariModal">
                        Description
                    </button>
                </div>
            </div>

        </div>
*/

// Appetizer Data Model
/*
let calamariApp = {
    name: "'Salt and Pepper' Calamari",
    image: "https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/calamari.jpg?itok=vNUZfHNl",
    dataTarget: '#calamariModal'
}

let uniToastApp = {
    name: "Uni Toast'Salt and Pepper' CalamariUni Toast",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/0e/a6/8e/2a/uni-toast-1200-yen.jpg",
    dataTarget: '#calamariModal'
}
*/

fetch('./js/appetizers.json')
    .then((response) => {
        return response.json();  
})
    .then((myJson) => {
        for (let i = 0; i < myJson.appetizers.length; i++) {
            createAppetizerData(myJson.appetizers[i]);
        }
});
/*
    * A function takes input
    * does something with those inputs
    * either returns something back, or doesn't
*/

function createAppetizerData(appetizerData) {
    let appContainer = document.getElementById("appetizerBox");
    
    let appetizer = document.createElement("DIV");
    appetizer.className = "appcard-wrapper";
    
    appContainer.appendChild(appetizer);

    let appetizerChild = document.createElement("DIV");
    appetizerChild.className = "card section2";
    appetizerChild.style = 'width: 22rem';
    appetizerChild.style = 'height: 22rem';


    let appImg = document.createElement("IMG");
    appImg.className = "card-img-top";
    appImg.src = appetizerData.image;
    appImg.alt = "test alt attribute";

    let appDescription = document.createElement("DIV");
    appDescription.className = "card-body";

    let appName = document.createElement("P");
    appName.className = "card-text";

    let appNameStyle = document.createElement("B");
    appName.appendChild(appNameStyle);

    appNameStyle.textContent = appetizerData.name;


    let appButton = document.createElement("BUTTON");
    appButton.className = "btn btn-primary";
    appButton.type = 'button appmodal';
    appButton.dataset.toggle = "modal";
    appButton.dataset.target = appetizerData.dataTarget;
    appButton.textContent = "Description";

    appetizer.appendChild(appetizerChild);

    appetizerChild.appendChild(appImg);
    appetizerChild.appendChild(appDescription);

    appDescription.appendChild(appName);
    appDescription.appendChild(appButton);

    //document.body.appendChild(appetizer);
}

//createAppetizerData(calamariApp);
//createAppetizerData(uniToastApp);
