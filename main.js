const { createApp } = Vue

createApp({
     data() {
          return {
               message: 'Hello Vue!',
               movies: []
          }
     },
     created(){
          this.movies = data.movies
          console.log(this.movies);
     }
}).mount('#app')