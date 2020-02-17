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
fetch('./js/appetizers.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    for (let i = 0; i < myJson.appetizers.length; i++) {
      createAppetizerData(myJson.appetizers[i]);
    }
  });

/**
 * A function takes inputs
 * does something with those inputs
 * either returns something back, or doesn't
 */
function createAppetizerData(appetizerData) {
  let appetizer = document.createElement("DIV");

  let appetizerChild = document.createElement("DIV");
  appetizerChild.className = "card section2";

  let appImg = document.createElement("IMG");
  appImg.className = "card-img-top";
  appImg.style = 'width: 18rem;';
  appImg.src = appetizerData.image;
  appImg.alt = 'test alt attribute';

  let appDescription = document.createElement("DIV");
  appDescription.className = "card-body";

  let appName = document.createElement("P");
  appName.className = "card-text";

  let appButton = document.createElement("BUTTON");
  appButton.className = "btn btn-primary";
  appButton.type = 'button';
  appButton.dataset.toggle = 'modal';
  appButton.dataset.target = appetizerData.dataTarget;

  appetizer.appendChild(appetizerChild);

  appetizerChild.appendChild(appImg);
  appetizerChild.appendChild(appDescription);

  appDescription.appendChild(appName);
  appDescription.appendChild(appButton);

  document.body.appendChild(appetizer);
}

// createAppetizerData(calamariAppetizer);
// createAppetizerData(pizzaAppetizer);




















