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
               onlyCortos: []
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

               this.movies.forEach(movie => movie.optional_title == undefined ? movie.optional_title = "no_optional_title" : movie.optional_title)
               this.onlyCortos = this.movies.filter(movie => movie.clasification == "corto")
               console.log(this.onlyCortos);
     
               this.onlyCortos = this.movies.filter(movie => movie.clasification == "corto")
               console.log(this.onlyCortos);

               this.onlyCortos = this.onlyCortos.map(corto => {
                    let videoID = (corto.trailer).slice(30, (corto.trailer).length);
                    console.log(videoID);
                    corto.videoId = videoID
                    console.log(corto);
                    return corto
               })
               console.log(this.onlyCortos);
          })


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
          }
     },
     computed:{
          filter(){
               this.filteredMovies = storyFilter(this.inputValue, this.onlyCortos)
          }
     }
}).mount('#app')
