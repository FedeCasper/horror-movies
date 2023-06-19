import { data } from "./data.js"

const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               filteredOnlySeries: [],
               onlyBooks: [],
               scrollYPosition: 0,
               arrowDirection: false
          }
     },

     created() {
          this.movies = data
          console.log(this.movies);
          this.filteredSeries = this.movies.filter(movie => movie.clasification === "serie")
          console.log(this.filteredSeries);
          this.filteredOnlySeries = this.filteredSeries
          console.log(this.filteredOnlySeries);
          this.onlyBooks = this.movies.filter(movie => movie.clasification == "book")
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
          filter() {
               this.filteredSeries.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
               this.filteredOnlySeries = this.filteredSeries.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) ||
                    movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase())
               )
               // this.filteredMovies.length == 0 ? this.filteredMovies = this.onlyMoviesArray : "" 
          }
     }

}).mount('#app')
