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
               universeStories: [],
               url: "",
               message: ""
          }
     },
     created(){
          const url = "./js/data.json"
          fetch(url)
          .then(response => response.json())
          .then(data => {
               this.movies = data
               console.log(this.movies);
               this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title)

               this.overAllObject = {
                    movies: this.findMovieGlobalIndex("movie"),
                    series: this.findMovieGlobalIndex("serie"),
                    books: this.findMovieGlobalIndex("book")
               }

               this.universeStories = this.getStoryUniverse()
               console.log(this.universeStories);
     
               this.relatedStories = this.getStoryGenre()
               console.log(this.relatedStories);
          })

          let params = new URLSearchParams (location.search)
          console.log(params);
          this.captureId = params.get("id")
          console.log(this.captureId);


          
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
          },
          getStoryGenre(){
               if(this.storySelected.gender){
                    let related = this.movies.filter( story => ( ( story.gender === this.storySelected.gender ) && ( story.title !== this.storySelected.title ) ) )
                    console.log(related);
                    if(related.length > 3 ){
                         let newRelated = []
                         for( let i=0 ; i <= 2 ; i++ ){
                              let randomNumber = Math.ceil( Math.random()* (related.length-1))
                              console.log(randomNumber);
                              newRelated.push(related[randomNumber])
                         } 
                         console.log(newRelated);
                         related = newRelated
                         return related
                    }
                    return related
               }
          },
          shareContent(){
               let storyURL = location.href;
               console.log(storyURL);
               this.url = encodeURIComponent(storyURL);
               this.message = encodeURIComponent('¡Mira esta aterradora historia en Casper Horror Site!');
               window.open('https://api.whatsapp.com/send?text=' + this.message + ' ' + this.url);
          }
     },
     computed:{
          // Computed methods
     }
}).mount('#app')
