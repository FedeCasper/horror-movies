const { createApp } = Vue 

  

 createApp({ 

      data() { 

           return { 

                inputValue: "", 

                movies: [], 

                filteredMovies: [], 

                filteredOnlySeries: [],
             
             onlyBooks:[]

           } 

      }, 

      created(){ 

           this.movies = data 

           console.log(this.movies); 

           this.filteredSeries = this.movies.filter(movie => movie.clasification === "serie") 

           console.log(this.filteredSeries); 

           this.filteredOnlySeries = this.filteredSeries 

           console.log(this.filteredOnlySeries); 
        
        this.onlyBooks = this.movies.filter(movie => movie.clasification == "book")

  

      }, 

      computed:{ 

           filter(){ 

                this.filteredSeries.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title) 

                this.filteredOnlySeries = this.filteredSeries.filter(movie => movie.title.toString().toLowerCase().includes(this.inputValue.toLowerCase()) ||  

                movie.optional_title.toString().toLowerCase().includes(this.inputValue.toLowerCase() ) 

                ) 

                // this.filteredMovies.length == 0 ? this.filteredMovies = this.onlyMoviesArray : "" 

           } 

      } 

 }).mount('#app')
