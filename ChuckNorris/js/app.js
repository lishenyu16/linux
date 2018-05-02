// -----Retrieve a random chuck joke in JSON format.
// https://api.chucknorris.io/jokes/random

// -----Retrieve a random chuck norris joke from a given category.
// https://api.chucknorris.io/jokes/random?category={category}

// -----Retrieve a list of available categories.
// https://api.chucknorris.io/jokes/categories

// -----Free text search.
// https://api.chucknorris.io/jokes/search?query={query}


let app=new Vue({
    el:"#chuck",
    data:{
        categories:[],
        cat:'',
        random:true,
        facts:[],
        keyword:'',
        selectedCat:'Any',
        randomFact:''
    },
    methods:{
        getCategories:function(){
            let viewModel = this
            axios.get('https://api.chucknorris.io/jokes/categories', {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                viewModel.categories=[]
                for(let i=0;i<response.data.length;i++){
                    viewModel.categories.push(response.data[i])
                }
            })
            .catch(function(err){
                alert(err)
            })
        },
        search: function(){
            this.random=false
            let vm = this
            vm.facts=[]
            let query = "https://api.chucknorris.io/jokes/search?query="+this.keyword
            axios.get(query, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                for(let i=0;i<response.data.result.length;i++){
                    vm.facts.push(response.data.result[i].value)
                }
            })
            .catch(function(err){
                alert(err)
            })
        },
        getFact:function(){
            let vm = this
            this.random = true
            vm.response=[]
            let query = ''
            if(this.selectedCat!="Any"){
                query = "https://api.chucknorris.io/jokes/random?category="+this.selectedCat
            }
            else{
                query="https://api.chucknorris.io/jokes/random"
            }
            axios.get(query, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then(function(response){
                console.log(response)
                vm.randomFact=response.data.value
            })
            .catch(function(err){
                alert(err)
            })
        }
    }
})