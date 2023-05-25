app.component('recipe-details',{
    props:{
        name:{
            type:String
        },
        image:{
            type:String
        },
        ingredients:{
            type:String
        },
        instructions:{
            type:String
        },
    },
    mounted(){
      this.$test.on('foo', function(data){
        console.log(data);
      });
    },
methods:{
    onClickPrev(){
        console.log("PREV");

    },
    onClickNext(){
        console.log("NEXT");
    }

},
    template:
    /*html*/ 
    `
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">{{ name }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <img class="d-block m-auto img-fluid" v-bind:src="image" alt="{{ name }}">
              <p class="text-center fs-6">{{ ingredients }}</p>
              <p class="fst-italic fw-light fs-5">{{ instructions }}</p>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" v-on:click="onClickPrev()">Prev</button>
          <button type="button" class="btn btn-secondary" v-on:click="onClickNext()">Next</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
  `
})


