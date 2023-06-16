import { data } from "./data.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               filteredOnlyMovies: [],
               notFoundObject: {}
          }
     },
     created(){
          this.movies = data
          this.filteredMovies = this.movies.filter(movie => movie.clasification === "movie")
          this.filteredOnlyMovies = this.filteredMovies
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
                    this.filteredOnlyMovies = this.filteredMovies.filter(movie => movie.title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase()) || 
                    movie.optional_title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase() )
                    )
               }else{
                    this.filteredOnlyMovies = this.filteredMovies.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
                    movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
                    )
               } 
          }
     }
}).mount('#app')