import { data } from "./data.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               filteredOnlyMovies: [],
               notFoundObject: {},
               scrollYPosition: 0,
               arrowDirection: false
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

     mounted(){
          window.addEventListener( 'scroll', this.scrollSpy )
     },
     
     destroyed(){
          window.removeEventListener('scroll', this.scrollSpy);
     }, 

     methods:{
          scrollSpy(){
               this.scrollYPosition = window.scrollY
               if(this.scrollYPosition > 3000){
                    this.arrowDirection = true
               }else{
                    this.arrowDirection = false
               }
          },
          moveTo(){
               window.scrollTo(0, 0)
          },
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