const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               filteredOnlyMovies: []
          }
     },
     created(){
          this.movies = data
          this.filteredMovies = this.movies.filter(movie => movie.clasification === "movie")
          this.filteredOnlyMovies = this.filteredMovies

     },
     computed:{
          filter(){
               this.filteredMovies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
               this.filteredOnlyMovies = this.filteredMovies.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
               movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
               )
               // this.filteredMovies.length == 0 ? this.filteredMovies = this.onlyMoviesArray : ""
          }
     }
}).mount('#app')