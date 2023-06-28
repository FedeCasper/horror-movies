import { data } from "../js/data.js"
import { storyFilter } from "../module/functions.js"

const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               filteredOnlySeries: [],
               onlyBooks: [],
               filteredOnlyBooks: [],
               scrollYPosition: 0,
               arrowDirection: false
          }
     },

     created() {
          this.movies = data
          // console.log(this.movies);
          this.onlyBooks = this.movies.filter(movie => movie.clasification == "book")
          // console.log(this.onlyBooks);
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

     computed: {
          filter(){
               this.filteredOnlyBooks = storyFilter(this.inputValue, this.onlyBooks)
          },
     }

}).mount('#app')
