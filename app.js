var first_btn = document.getElementById('first_btn');
var hide_btn = document.getElementById('hide_btn');
var content = document.getElementById('content');
var heading = document.getElementById('heading');
// var h1 = heading.children;
// console.log(h1)



// GET Request: to view or get data
getData();
function getData() {
    let url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        // return response.text(); //text mei dikhayega parse nhi krega
        return response.json(); //text se parse hokar dikhayega
    }).then((data)=>{
        // console.log(data)
        // content.innerHTML = data;
        console.log("successfully fetched images url from")
        

        // to fetch random: 
        // console.log(data[0].avatar_url)
        // console.log(data[3].avatar_url)


         //    Fetching all avatar_url's in API:: 
         first_btn.addEventListener("click", ()=>{
             for (let index = 0; index < data.length; index++) {
                 const element = data[index]; 
                 
                 //    for all avatar_url's:  
                 console.log(element.avatar_url) 
                 
                       $("#content").append("<img src="+element.avatar_url+"alt=''>")
                        
                    //    $("#data").html(data)
                    
        }
    })
    
    first_btn.addEventListener("click", function show(){
        // heading.style.display = ""
        content.style.display = "";
    })
    
    hide_btn.addEventListener("click", function clearData (){
        // heading.style.display = "none"
        content.style.display = "none"
    })
    // function refData() {
    //         clearData();
    //         init();
    //     }
        // function clearData(){
        //     $("#data").empty;
        // }
        


        })
    }





// POST Request: to insert data  
// function postData() {
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"ateh","salary":"12341","age":"23"}'; //yeh objects ki form mei hai
//     // data = "{"name":"test","salary":"123","age":"23"}"; //yeh objects string ki form mei hai
//     params = {
//         method: 'POST',
//         headers :{
//             'Content-Type' : 'application/json'
//         },
//         // body: JSON.stringify(data) //upar data object ki form hai tabhi yaha stringify use kiya hai
//         body: data, //upar data string ki form k liye hai

//             }


//     // In ES6 way: Array () fnction shortcut:::
//     fetch(url, params).then(response=> response.json())
//     .then(data=> console.log(data))


    // ES5 way:
    // fetch(url, params).then((response)=>{
    //     // return response.text(); //text mei dikhayega parse nhi krega
    //     return response.json(); //text se parse hokar dikhayega
    // }).then((data)=>{
    //     console.log(data)
    // })

// }

// postData();


