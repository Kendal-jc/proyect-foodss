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
            type: String,
            default: "default time"
        },
        level:{
            type: String,
            default:""
           
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
    onClicklikes(){
    console.log("LIKE");
        this.$emit('recipelikes', this.index);
        //this.recipe_likes++;
    },
    onClickUnlikes(){
        //console.log("UNLIKE");
        this.$emit('recipeunlikes', this.index);

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
        <div class="col-sm mt-4 d-flex justify-content-center">
            <div class="card bg-body rounded border-0">
                <a v-on:click="onClickViewRecipe()" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <img v-bind:src="image" class="card-img-top rounded" alt="image">
               </a>
                <div class="card-body">
                    <p class="card-title pointer text-decoration-none text-center d-block name-card text-truncate">{{name}}</p>
                    <div>
                        <p class="text-cinft d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et. </p>
                    </div>
                        <p class="text-cinft text-center">{{ likes }}</p>
                    <div class="d-flex justify-content-center">
                            
                         <button class="btn" id="green"><i class="fa fa-thumbs-up fa-lg" aria-hidden="true" v-on:click="onClicklikes()"></i></button>
                         <button class="btn" id="red"><i class="fa fa-thumbs-down fa-lg" aria-hidden="true" v-on:click="onClickUnlikes()"></i></button>
                   </div>
                   
                    <div class="row d-flex justify-space-around mt-3">
                        <div class="col-7 inf card-inf text-truncate">{{time}}</div>
                        <div class="col-5  inf-left card-inf d-flex justify-content-end pe-5">{{level}}</div>
                    </div>
                </div>
            </div>
        </div> `    
})



