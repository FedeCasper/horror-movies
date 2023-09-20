import { storyFilter } from "../module/functions.js"
const { createApp } = Vue

createApp({
     data() {
          return {
               inputValue: "",
               movies: [],
               filteredMovies: [],
               initializer: true,
               dataObject: {},
               Toast: undefined,
               scrollYPosition: 0,
               arrowDirection: false,
          }
     },
     created() {
          const url = "./js/data.json"
          fetch(url)
          .then(response => response.json())
          .then(data => {
               console.log(data);
               this.movies = data
               console.log(this.movies);

               this.dataObject = this.lengthClasificationCalculator();

               this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no-title" : movie.optional_title)
          })
          this.Toast = Swal.mixin({
               toast: true,
               position: 'top-end',
               showConfirmButton: false,
               timer: 3000,
               timerProgressBar: true,
               didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
               }
          })
     },

     methods: {
          checkNewMovies(movieDate) {
               let todayMonth = new Date().getMonth();
               let todayYear = new Date().getFullYear()
               let movieMonth = new Date(movieDate).getMonth();
               let movieYear = new Date(movieDate).getFullYear();
               return (movieMonth === todayMonth || movieMonth === (todayMonth - 1)) && todayYear === movieYear
          },
          preventNullInputText() {
               if (this.inputValue === "") {
                    this.Toast.fire({
                         icon: 'error',
                         title: 'No data entered'
                    })
               }else{
                    this.initializer = false
               }
          },
          lengthClasificationCalculator(){
               const noRepeatClasification = [...new Set(this.movies.map(movie => movie.clasification))]
               const arrayOfClasification = noRepeatClasification.map( clasification => this.movies.filter( movie => movie.clasification == clasification) )
               console.log(arrayOfClasification);
               return {
                    movies: arrayOfClasification[0].length,
                    series: arrayOfClasification[2].length,
                    books: arrayOfClasification[3].length,
                    cortos: arrayOfClasification[1].length
               }
          }
     },

     computed: {
          filter() {
               this.filteredMovies = storyFilter(this.inputValue, this.movies)
          },
     }
}).mount('#app')