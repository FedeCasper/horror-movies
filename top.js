const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               topMovies: [],
               topBest:[]
          }
     },
     created(){
          this.movies = data
          console.log(this.movies);
          this.topMovies = this.bestMovies()
          console.log(this.topMovies);
          this.topBest = this.topMovies.slice(0,10)
          console.log(this.topBest);
     },
     methods:{
          bestMovies(){
               let newObjectArray = this.movies.map(movie => { 
                    return {
                         title: movie.title,
                         optional_title: movie.optional_title,
                         rate: movie.web_calification,
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