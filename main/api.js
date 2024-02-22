
let myArray = []
const getListOfPost = () => {
    let url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url, {
        method: "GET",
        headers: {
            // authorization: `Bearer ${token}`,
            ContentType: "application/json"
        },
        // body: JSON.stringify()

    }).then((response) => {
        response.json().then((data) => {
            // myArray.push(val)
            myArray = data
            
        })
    })
}



getListOfPost();

function checkDataInArray() {
    console.log(myArray);
}



















