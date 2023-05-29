app.component('recipe-category-button',{
    props:{
        name:{
            type: String
        }
    },

    methods:{
        onClickCategoryButton(){
            console.log(this.name);
            this.$emit('selectedcategory', this.name);
        }
    },

    template:
    /*html*/ 
    `
            <li><a class="dropdown-item" v-on:click="onClickCategoryButton">{{name}}</a></li>
              
    `
})

