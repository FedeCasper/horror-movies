import { data } from "./data.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               filteredOnlySeries: [],
               notFoundObject: {},
               scrollYPosition: 0,
               arrowDirection: false
          }
     },

     created(){
          this.movies = data
          console.log(this.movies);
          this.filteredSeries = this.movies.filter(movie => movie.clasification === "serie")
          console.log(this.filteredSeries);
          this.filteredOnlySeries = this.filteredSeries
          console.log(this.filteredOnlySeries);

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
          checkNewMovies(date){
               this.rangeDate = (new Date().getMonth() -1);
               return (new Date(date).getMonth() === this.rangeDate && new Date(date).getFullYear() === new Date().getFullYear());
          }
     },

     computed:{
          filter(){
               this.filteredSeries.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
               if(this.inputValue == "" || this.inputValue.length <= 2){
                    this.filteredOnlySeries = this.filteredSeries.filter(serie => serie.title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase()) || 
                    serie.optional_title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase() )
                    )
               }else{
                    this.filteredOnlySeries = this.filteredSeries.filter(serie => serie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
                    serie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
                    )
               } 
          }
     }
}).mount('#app')