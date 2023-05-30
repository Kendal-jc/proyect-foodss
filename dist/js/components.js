const app = Vue.createApp({
    data() {
        return {
            loading: true,
            selectedIndex: 0,
            recipes: [
            ],
            top_recipes:[],
            categories: [
                { name: 'main course' },
                { name: 'side dish' },
                { name: 'dessert' },
                { name: 'appetizer' },
                { name: 'salad' },
                { name: 'bread' },
                { name: 'breakfast' },
                { name: 'soup' },
                { name: 'beverage' },
                { name: 'sauce' },
                { name: 'marinade' },
                { name: 'fingerfood' },
                { name: 'snack' },
                { name: 'drink' },
            ],
            recipe: {},
            all_recipes: [],
            hasRecipes: true,
        }
    },
    mounted: function () {
        this.all_recipes = this.recipes;

        //connect to API
        /*
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        })
            .then(
                (response) => {
                    console.log(response.data.meals);
                    //this.categories = response.data.meals;
                    let items = response.data.meals;
                    items.forEach((element, index) => {
                        this.categories.push({ id: index, name: element.strCategory });
                    });
                    console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
            );*/

        axios({
            method: 'get',
           // url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=4a795667898e4967b51ab2e5dbc88e4e'
           url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=533a1fdf875644e49b9c7e07fe64295b'
        })
            .then(
                (response) => {

                    let items = response.data.results;
                    console.log(items);


                    this.recipes = [];

                    if (items.length > 0) this.loading = false;

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.id,
                            image: element.image,
                            name: element.title
                        })
                    });
                    this.recipedetai();
                }
            )
            .catch(
                error => console.log(error)
            );

        //connect to API get a default recipes list

        /*
        axios({
            method: 'get',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        })
            .then(
                (response) => {

                    let items = response.data.meals;
                    console.log(items);

                    this.recipes = [];

                    if (items.length > 0) this.loading = false;

                    items.forEach(element => {
                        this.recipes.push({
                            id: element.idMeal,
                            image: element.strMealThumb,
                            name: element.strMeal,
                            time: "20 mins",
                            level: "Easy",
                            likes: 18,
                            ingredients: "NA",
                            instructions: "NA"
                        })
                    })
                }
            )
            .catch(
                error => console.log(error)
            );*/
            axios({
                method: 'get',
               // url:'https://api.spoonacular.com/recipes/complexSearch?type=main course&apiKey=4a795667898e4967b51ab2e5dbc88e4e'
               url:'https://api.spoonacular.com/recipes/complexSearch?&sort=popularity&number=5&apiKey=533a1fdf875644e49b9c7e07fe64295b'
            })
                .then(
                    (response) => {
    
                        let items = response.data.results;
                        console.log(items);
    
    
                        this.top_recipes = [];
    
                        if (items.length > 0) this.loading = false;
    
                        items.forEach(element => {
                            this.top_recipes.push({
                                id: element.id,
                                image: element.image,
                                name: element.title
                            })
                        });
                        this.recipedetai();
                    }
                )
                .catch(
                    error => console.log(error)
                );
    },
    methods: {
        recipedetai(){
            for (let index= 0; index<this.recipes.length;index++){
               /// console.log(this.recipes[index].id);

                axios({
                    method: 'get',
                    url: 'https://api.spoonacular.com/recipes/'+this.recipes[index].id+'/information?includeNutrition=false&apiKey=533a1fdf875644e49b9c7e07fe64295b'

                })
                    .then(
                        (response) => {
                            let items=response.data;
                            console.log(response.data);
                           this.recipes[index].time=items.readyInMinutes+"mins";
                           this.recipes[index].level=items.servings;
                           this.recipes[index].description=items.summary;
                           this.recipes[index].likes=items.aggregateLikes;

                           if(this.recipes[index].level>=1 && this.recipes[index].level<=2){
                            this.recipes[index].level="Easy";
                           }else if(this.recipes[index].level>=3  && this.recipes[index].level<=5){
                            this.recipes[index].level="Intermediate";
                           }else if(this.recipes[index].level>=6 && this.recipes[index].level<=8){
                            this.recipes[index].level="Difficult";
                           }
                           return this.recipes[index].level;
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            }
        },
        onClickRecipeLike(index) {
            this.recipes[index].likes += 1;
        },
        onClickRecipeUnlike(index) {
            if (this.recipes[index].likes > 0) this.recipes[index].likes -= 1;
        },
        onClickPrev() {
            this.selectedIndex--;
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.recipes.length - 1;
            }
        },
        onClickNext() { 
            this.selectedIndex++;
            if (this.selectedIndex >= this.recipes.length) {
                this.selectedIndex = 0;
            }
        },
        onClickRecipeDetails(index) {
            //this.selectedIndex = index;
            console.log("RECIPE ID: " + index);

            //get recipe details
            axios({
                method: 'get',
                url: 'https://api.spoonacular.com/recipes/'+index+'/information?includeNutrition=false&apiKey=533a1fdf875644e49b9c7e07fe64295b'
            })
                .then(
                    (response) => {

                        let item = response.data;
                        console.log(item);
                        
                        this.recipe.id = index;
                        this.recipe.image = item.image;
                        this.recipe.name = item.title;
                        this.recipe.category = item.dishTypes[0];
                        this.recipe.time = item.readyInMinutes + "mins";
                        this.recipe.level = item.servings;
                        this.recipe.likes = item.aggregateLikes;
                        this.recipe.ingredients = item.summary;
                        this.recipe.instructions = item.instructions;

                        
                        let instructionsList = "";
                        for(let i = 0; i < item.extendedIngredients.length; i++){
                            instructionsList += item.extendedIngredients[i].original + "\n";
                        }

                        this.recipe.instructions = instructionsList;

                        if(this.recipe.level>=1 && this.recipe.level<=2){
                            this.recipe.level="Easy";
                           }else if(this.recipe.level>=3  && this.recipe.level<=5){
                            this.recipes[index].level="Intermediate";
                           }else if(this.recipe.level>=6 && this.recipe.level<=8){
                            this.recipe.level="Difficult";
                           }
                           return this.recipe.level;
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickSelectedCategory(category) {

                axios({
                    method: 'get',
                    url: 'https://api.spoonacular.com/recipes/complexSearch?type='+category+'&apiKey=6e4c66576c5b47b392d9d1a090ccd33c' 
                })
                    .then(
                        (response) => {
        
                            let items = response.data.results;
                            console.log(items);
        
        
                            this.recipes = [];
        
                            if (items.length > 0) this.loading = false;
        
                            items.forEach(element => {
                                this.recipes.push({
                                    id: element.id,
                                    image: element.image,
                                    name: element.title,
                                })
                            })
                            this.recipedetai();
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
        }
    }
})

//init custom events for components
const emitter = new mitt();

//global property for custom events
app.config.globalProperties.$test = emitter;

