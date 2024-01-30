const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               topMovies: [],
               topSeries: [],
               onlyBooks: []
          }
     },
     created(){
          const url = "./js/data.json"
          fetch(url)
          .then(response => response.json())
          .then(data => {
               console.log(data);
               this.movies = data
               console.log(this.movies);
               let onlyMovies = this.movies.filter(movie => movie.clasification == "movie" && movie.web_calification)
               console.log(onlyMovies);
               this.topMovies = this.bestOnes(onlyMovies)
               let onlySeries = this.movies.filter(movie => movie.clasification == "serie" && movie.web_calification)
               this.topSeries = this.bestOnes(onlySeries)
               console.log(this.topMovies);
               let onlyBooks = this.movies.filter(movie => movie.clasification == "book" && movie.web_calification)
               this.topBooks = this.bestOnes(onlyBooks)
          })

     },
     methods:{
          bestOnes(array){
               let newObjectArray = array.map(movie => { 
                         return {
                              id: movie.id,
                              title: movie.title,
                              details: movie.details ? movie.details : '',
                              optional_title: movie.optional_title,
                              rate: movie.web_calification
                         }
               })
               return newObjectArray.sort((a,b) => b.rate - a.rate)
          }
     },
     computed:{
          filter(){
               this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
               this.filteredMovies = this.movies.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) || 
               movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() )
               )
               this.filteredMovies.length == 0 ? this.filteredMovies = this.movies : ""
          }
     }
}).mount('#app')