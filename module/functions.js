export function storyFilter(inputTextValue, array) {
     let storiesFiltered
     if (inputTextValue == "" || inputTextValue.length <= 2) {
          storiesFiltered = array.filter(movie => movie.title.toString().toLowerCase().startsWith(inputTextValue.toLowerCase()) ||
               movie.optional_title.toString().toLowerCase().startsWith(inputTextValue.toLowerCase())
          )
     } else {
          storiesFiltered = array.filter(movie => movie.title.toString().toLowerCase().includes(inputTextValue.toLowerCase()) ||
               movie.optional_title.toString().toLowerCase().includes(inputTextValue.toLowerCase())
          )
     }
     return storiesFiltered
}
