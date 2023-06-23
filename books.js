import { data } from "./data.js"
import { storyFilter } from "./module/functions.js"

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
          }
     },

     computed: {
          filter(){
               this.filteredOnlyBooks = storyFilter(this.inputValue, this.onlyBooks)
          },
     }

}).mount('#app')
