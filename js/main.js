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

          fetch("https://mindhub-xj03.onrender.com/api/petshop")
          .then(res => res.json())
          .then(data => {
               console.log(data);
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
          },
     handleFileSelect(event) {
          const file = event.target.files[0];
          if (file) {
               this.convertToJson(file)
                    .then(objects => {
                         console.log(objects); // Array de objetos
                         // Aquí puedes hacer lo que necesites con el array de objetos
                    })
                    .catch(error => {
                         console.error(error);
                    });
               }
          },
          
          convertToJson(file) {
          return new Promise((resolve, reject) => {
               const reader = new FileReader();

               reader.onload = (e) => {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });

                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];

                    const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

                    // Convertir el array de arrays en array de objetos
                    const keys = json[0]; // Suponiendo que la primera fila contiene los nombres de las columnas
                    const objects = json.slice(1).map(row => {
                         return keys.reduce((obj, key, index) => {
                              obj[key] = row[index];
                              return obj;
                         }, {});
                    });

                    resolve(objects);
               };

               reader.onerror = (error) => {
                    reject(error);
               };

               reader.readAsArrayBuffer(file);
          });
          }
     },

     computed: {
          filter() {
               this.filteredMovies = storyFilter(this.inputValue, this.movies)
          },
     }
}).mount('#app')