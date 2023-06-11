const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               alphabet: []
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
     },
     computed:{
          filter(){
               
               this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
               
                    

               
               
               this.filteredMovies = this.movies.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
               movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
               )
               this.filteredMovies.length == 0 ? this.filteredMovies = this.movies : ""
                    
          }
     }
}).mount('#app')
