import { data } from "./data.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               notFoundObject: {},
               storySelected: {},
               onlyIdsArray: [],
               globalPosition: 0,
               overAllObject:{},
               captureId: 0
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title)
          const params = new URLSearchParams (location.search)
          console.log(params);
          this.captureId = params.get("id")
          console.log(this.captureId);
          this.overAllObject = {
               movies: this.findMovieGlobalIndex("movie"),
               series: this.findMovieGlobalIndex("serie"),
               books: this.findMovieGlobalIndex("book")
          }
     },
     beforeUpdate(){
          // this.notFoundObject = {
          //      text: "There is no movie with that name",
          //      img: "./assets/not-found-ghost.png",
          //      text2: "Please try again..."
          // }
     },
     methods:{
          findMovieGlobalIndex(clasificationType){
               console.log(this.captureId);
               this.onlyIdsArray = Array.from(this.movies.filter(movie => movie.clasification == clasificationType && movie.web_calification))
                    .sort((a,b) => b.web_calification - a.web_calification)
                    .map(movie => movie.id)
                    console.log(this.onlyIdsArray.length);
               this.storySelected = this.movies.find( story => story.id == this.captureId)
               return this.globalPosition = this.onlyIdsArray.indexOf(this.storySelected.id); 
          }
     },
     computed:{
          // filter(){
          //      if(this.inputValue == "" || this.inputValue.length <= 2){
          //           this.filteredMovies = this.movies.filter(movie => movie.title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase()) || 
          //                movie.optional_title.toString().toLowerCase().startsWith(this.inputValue.toLowerCase() )
          //           )
          //      }else{
          //           this.filteredMovies = this.movies.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
          //                movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
          //           )
          //      } 
          // }
     }
}).mount('#app')
