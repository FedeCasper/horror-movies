const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               initializer: true,
               notFoundObject: {},
               dataObject: {}
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.dataObject = {
               movies: this.movies.filter(movie => movie.clasification === "movie"),
               series: this.movies.filter(movie => movie.clasification === "serie"),
               books: this.movies.filter(movie => movie.clasification === "book")
          }
     },
     beforeUpdate(){
          this.notFoundObject = {
               text: "There is no movie with that name",
               img: "./assets/not-found-ghost.png",
               text2: "Please try again..."
          }
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