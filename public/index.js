// function loadDoc() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() {
//         if (this.readyState === 4 && this.status === 200) {
//             myFunction(this);
//         }
//     };
//     xhttp.open("GET", 'http://localhost:2000/api/books', true);
//     xhttp.send();
// }

// loadDoc();

// function getBooks(){
//     fetch(`http:/localhost:9000/api/books'`)
//      .then(function(response) {
//        return response.json();
//      })
//      .then(function(json) {
//        console.log(json);
//      });
//    };
   
//    //get user data
//    getBooks();
//okej :D 
async function getBooksAsync() 
{
  let response = await fetch('http:/localhost:9000/api/books');
  let data = await response.json()
  return data;

  
}

getBookAsync()
  .then(data => console.log(data)); 