app.component("recipe-details", {
  props: {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    instructions: {
      type: String,
    },
    time: {
      type: String,
    },
    likes: {
      type: Number,
    },
  },
  mounted() {
    this.$test.on("foo", function (data) {
      console.log(data);
    });
  },
  methods: {
    onClickPrev() {
      console.log("PREV");
    },
    onClickNext() {
      console.log("NEXT");
    },
  },

  template:
    /*html*/
    `
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content modal-1" style="width:150%">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="container text-center">
              <h1 class="text-detalils">
              {{ name }}
              </h1>
          </div>
      
          <div class="col-sm mt-xxl-5">
                  <img class="d-block m-auto img-fluid img-responsive imgs" v-bind:src="image" alt="{{ name }}">
          </div>

          <section class="container-modal ">
              <ul class="nav nav-pills align-items-center">
                  <li class="nav-item">
                       <img class="img-iconss" src="./imgs/time.png" alt="image">
                      <p class="nav-link nav-text text-id">{{ time }}</p>
                  </li>
                  <li class="nav-item m-r-img">
                      <img class=" img-iconss" src="./imgs/food.png" alt="image">
                     <p class="nav-link nav-text text-id">Almuerzo</p>
                 </li>
                 <li class="nav-item">
                  <img class=" img-iconss" src="./imgs/level.png" alt="image">
                 <p class="nav-link nav-text text-id">Facil</p>
             </li>
                 </ul>
          </section>
      
          <div class="mrr mt-3">
            <div class="text-center mb-5">
            <p class="text-cinft text-center">{{ likes }}</p>
            <div class="d-flex justify-content-center">
                    
                 <button class="btn" id="green"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true" v-on:click="onClickLike()"></i></button>
                 <button class="btn" id="red"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true" v-on:click="onClickUnlike()"></i></button>
           </div>
            </div>
          </div>
      
             
      <section class="container mt-xx-5 me-d">
          <div class="row ">
              <div class="col ms-xxl-5">
                  <p class="text-t-d">Ingredientes</p>
                  <ol class="text-id">
                      <li>{{ingredients}}</li>
                  </ol>
              </div>
      
              <div class="col ml-d">
                  <p class="text-t-d">Preparación de la Receta</p>
                  <ol class="text-id">
                      <li>
                          {{instructions}}
                      </li>
                     
                  
                  </ol>
              </div>
      
          </div>
      </section>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
`
});
