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
    <div class="modal-content" style="width:150%">
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
      
          <div class="mrr">
            <div class="text-center mb-5">
              <button class='btn-like mt-3'>
                  Like
              </button>
            </div>
          </div>
      
             
      <section class="container mt-xx-5 me-d">
          <div class="row ">
              <div class="col ms-xxl-5">
                  <p class="text-t-d">Ingredientes</p>
                  <ol class="text-id">
                      <li>{{instructions}}</li>
                  </ol>
              </div>
      
              <div class="col ml-d">
                  <p class="text-t-d">Preparación de la Receta</p>
                  <ol class="text-id">
                      <li>
                          Retirarles a la galletas la crema y reservar por separado tanto la crema con las galletas sin relleno.
                      </li>
                      <li>
                          Procesar las galletas, reservar ¼ de taza y colocar el resto en un molde desmontable.
                         </li>
                      <li>
                          Añadir al molde mantequilla derretida y mezclar con los dedos. Compactar para forra la base del molde. Llevar al congelador por 30 minutos.
                      </li>
                      <li>
                          Hidratar la gelatina en al agua y luego de 5 minutos fundir a baño maría.
                      </li>
                      <li>
                          En un bol mezclar con batidora de mano queso crema, el relleno de las galletitas, azúcar, jugo de limón, esencia de vainilla y sin dejar de batir añadir crema de leche.
                      </li>
                      <li>
                          Incorporar la gelatina fundida y seguir batiendo hasta integrar todo.
                      </li>
                      <li>
                          Verter este relleno sobre el molde con la base fría y llevar al frío hasta que tome consistencia, aproximadamente 120 minutos.
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
