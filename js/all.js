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
               todayDate: "",
               arrayOfObjectCategories: []
          }
     },
     created(){
          this.movies = data;
          console.log(this.movies);
          this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title);
          this.arrayOfObjectCategories = this.createCategoriesArray();
          console.log(this.arrayOfObjectCategories);
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
          },
          createCategoriesArray(){
               let arrayWithCategoryNone = this.movies.map( movie => movie.gender ? movie.gender : movie.gender = "none")
               console.log(arrayWithCategoryNone);
               let categoriesNoRepeat = [...new Set(arrayWithCategoryNone)]
               console.log(categoriesNoRepeat);
               let auxiliarArray = categoriesNoRepeat.map( category => this.movies.filter(movie => movie.gender == category && (movie.clasification === "movie" || movie.clasification === "serie")))
               console.log(auxiliarArray);
               let arrayOfCategories = auxiliarArray.reduce( (acc, actual) => {
                    acc[actual[0].gender] = actual;
                    return acc
               }, {})
               console.log(arrayOfCategories);
               return arrayOfCategories
          }
     },
     computed:{
          filter(){
               this.filteredMovies = storyFilter(this.inputValue, this.movies)
               console.log(this.filteredMovies);
          }
     }
}).mount('#app')
