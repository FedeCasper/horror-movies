const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               alphabet: [],
               notFoundText: ""
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
     },
     beforeUpdate(){
          this.filteredMovies.length == 0 ? this.notFoundText = "We couldn't find that movie" : ""
     },
     computed:{
          filter(){
               this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
               if(this.inputValue == "" || this.inputValue.length <= 2){
                    this.filteredMovies = this.movies.filter(movie => movie.title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase()) || 
                    movie.optional_title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase() )
                    )
               }else{
                    this.filteredMovies = this.movies.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
                    movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
                    )
               } 
          }
     }
}).mount('#app')
