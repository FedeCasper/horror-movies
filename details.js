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
               captureId: 0,
               relatedStories: [],
               universeStories: []
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title)
          const params = new URLSearchParams (location.search)
          // console.log(params);
          this.captureId = params.get("id")
          // console.log(this.captureId);
          this.overAllObject = {
               movies: this.findMovieGlobalIndex("movie"),
               series: this.findMovieGlobalIndex("serie"),
               books: this.findMovieGlobalIndex("book")
          }

          this.relatedStories = (this.movies.filter( story => story.gender === this.storySelected.gender)).slice(0,3)
          // console.log(this.relatedStories);

          this.universeStories = this.getStoryUniverse()
          console.log(this.universeStories);
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
          },
          getStoryUniverse(){
               if(this.storySelected.universe != "None"){
                    let universe = this.movies.filter( story => ((story.universe === this.storySelected.universe) && (story.title !== this.storySelected.title)) )
                    console.log(universe);
                    return universe
               }
          }
     },
     computed:{
          // Computed methods
     }
}).mount('#app')
