let app = new Vue({
  el: '#appetizerBox',
  data: {
    appetizers: [],
  },
  methods: {
    proveButtonWorks(appetizer) {
      console.log('This works', appetizer);
      
    },
  },
  created() {
    fetch('./js/appetizers.json')
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        
        this.appetizers = myJson.appetizers;
      });
  },
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
