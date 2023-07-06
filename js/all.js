import { data } from "../js/data.js"
import { storyFilter } from "../module/functions.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               notFoundObject: {},
               scrollYPosition: 0,
               arrowDirection: false,
               todayDate: ""
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title)
          let categories = this.movies.map( movie => movie.gender ? movie.gender : "none")
          let setCategories = [...new Set(categories)].slice(1, categories.length)
          console.log(categories);
          console.log(setCategories);
          let array = setCategories.map( category => this.movies.filter(movie => movie.gender == category))
          console.log(array);
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
               this.filteredMovies = storyFilter(this.inputValue, this.movies)
          }
     }
}).mount('#app')
