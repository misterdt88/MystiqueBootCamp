/* <div appcard-wrapper>
      <div class="card section2" style="width: 18rem;">
          <img class="card-img-top" src="..." alt="Card image cap">
          <div class="card-body">
              <p class="card-text"><b>'Salt and Pepper' Calamari</b></p>
              <button type="button appmodal" class="btn btn-primary" data-toggle="modal" data-target="#calamariModal">
                  Description
              </button>
          </div>
      </div>
</div> */

let document = {
  "head": {

  },
  "body": {
    appendChild: function (element) {

    },
    'div': {
      'div': {
        'class': 'card section2'
      }
    }
  }
};

let appetizer = document.createElement("DIV");

let appetizerChild = document.createElement("DIV");
appetizerChild.className = "card section2";

appetizer.appendChild(appetizerChild);
document.body.appendChild(appetizer);



