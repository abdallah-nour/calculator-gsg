let searchForm = document.querySelector('#search-form');
let searchBox = document.querySelector('#search-box');


searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(`https://api.giphy.com/v1/gifs/search?
    q=${searchBox.value}&api_key=FKKLbiaJraHksU3XWzxb2kr3eIRfrOrw`,
        {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .then(res => { console.log(res) })
        // .then(res=>{
        //     res.data.forEach(result=>{
            //         let resultImage = document.createElement('img');
        //         // resultImage.setAttribute('src',result.url);
        //         resultImage.src = result.url;
        //         document.getElementById('search-result').appendChild(resultImage);
        //     })
        // })
        .catch(console.log);
});

document.getElementById('clear-btn').addEventListener('click',(e)=>{
    searchBox.value ='';
    
});
//First Error
//Cross-Origin Read Blocking (CORB) blocked cross-origin response <URL> with MIME type text/html. See <URL> for more details

//then give response with empty data array(200).

// .then(
//     (response) =>{
//         console.log(response);
//         if (response.status !== 200) {
//             console.log('Looks like there was a problem. Status Code: ' +
//                 response.status);
//             return;
//         }
//         // Examine the text in the response
//         response.json().then(function (data) {
//             console.log(data);
//         });
//     }
// )