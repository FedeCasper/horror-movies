
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               notFoundObject: {},
               movieSelected: {},
               onlyIdsArray: [],
               globalPosition: 0
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title)
          const params = new URLSearchParams (location.search)
          console.log(params);
          const captureId = params.get("id")
          console.log(captureId);
          this.movieSelected = this.movies.find( movie => movie.id == captureId)
          console.log(this.movieSelected);
          this.findGlobalIndex()
     },
     beforeUpdate(){
          // this.notFoundObject = {
          //      text: "There is no movie with that name",
          //      img: "./assets/not-found-ghost.png",
          //      text2: "Please try again..."
          // }
     },
     methods:{
          findGlobalIndex(){
               this.onlyIdsArray = Array.from(this.movies.filter(movie => movie.clasification == "movie" && movie.web_calification))
                    .sort((a,b) => b.web_calification - a.web_calification)
                    .map(movie => movie.id)
               return this.globalPosition = this.onlyIdsArray.indexOf(this.movieSelected.id); 
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
