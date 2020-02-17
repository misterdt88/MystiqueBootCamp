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

let appetizer = document.createElement("DIV");

let appetizerChild = document.createElement("DIV");
appetizerChild.className = "card section2";

let appImg = document.createElement("IMG");
appImg.className = "card-img-top";

let appDescription = document.createElement("DIV");
appDescription.className = "card-body";

let appName = document.createElement("P");
appName.className = "card-text";

let appButton = document.createElement("BUTTON");
appButton.className = "btn btn-primary";

appetizer.appendChild(appetizerChild);

appetizerChild.appendChild(appImg);
appetizerChild.appendChild(appDescription);

appDescription.appendChild(appName);
appDescription.appendChild(appButton);

document.body.appendChild(appetizer);




















