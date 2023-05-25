
app.component('recipe-card',{
    props:{
        image:{
            type: String
        },
        category:{
            type: String,
            default: "default category"
        },
        name:{
            type: String,
            default: "default name"
        },
        description:{
            type: String,
            default: "default description"
        },
        time:{
            type: Number,
            default: 0
        },
        level:{
            type: String,
            default: "default level"
        },
        likes:{
            type: Number,
            default: 1
        },
        index:{
            type: Number
        }
    },
 methods:{
    onClickLike(){
        //console.log("LIKE");
        this.$emit('recipelike', this.index);
        //this.recipe_likes++;
    },
    onClickUnlike(){
        //console.log("UNLIKE");
        this.$emit('recipeunlike', this.index);

    },
    onClickViewRecipe(){
        console.log("VIEW");
        this.$emit('recipedetails', this.index);
        //this.$test.emit('foo',"works!");
    },
 },
    template:
    /*html*/ 
    `
        <div class='col-sm mt-4 d-flex justify-content-center'>
            <div class='card bg-body rounded border-0'>
                <a href="./detalle.html">
                    <img v-bind:src="image" class='card-img-top rounded' alt="image">
               </a>
                <div class='card-body'>
                    <p class='card-title pointer text-decoration-none text-center d-block name-card text-truncate'>{{name}}</p>
                    <div>
                        <p class="text-cinft">{{description}}</p>
                    </div>

                    <div class="d-flex justify-content-center">
                         <button class="btn" id="green"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i></button>
                         <button class="btn" id="red"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true"></i></button>
                   </div>
                   
                    <div class='row d-flex justify-space-around mt-3'>
                        <div class='col-7 inf card-inf text-truncate'>2{{time}}</div>
                        <div class='col-5  inf-left card-inf d-flex justify-content-end pe-5'>{{level}}</div>
                    </div>
                </div>
            </div>
        </div> `
              
})

var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {
  
    if (btn2.classList.contains('red')) {
      btn2.classList.remove('red');
    } 
  this.classList.toggle('green');
  
});

btn2.addEventListener('click', function() {
  
    if (btn1.classList.contains('green')) {
      btn1.classList.remove('green');
    } 
  this.classList.toggle('red');
  
});

