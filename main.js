import { data } from "./data.js"
import { storyFilter } from "./module/functions.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               initializer: true,
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
          this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
     },
     methods:{
          checkNewMovies(movieDate){
               let todayMonth = new Date().getMonth();
               let todayYear = new Date().getFullYear()
               let movieMonth = new Date(movieDate).getMonth();
               let movieYear = new Date(movieDate).getFullYear();
               return (movieMonth === todayMonth || movieMonth === (todayMonth - 1)) && todayYear === movieYear
          }
     },
     computed:{
          filter(){
               this.filteredMovies = storyFilter(this.inputValue, this.movies)
          },
     }
}).mount('#app')