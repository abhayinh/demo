// ########################################################################
// with axios we can send the get post put and delete req 

const { default: axios } = require("axios");

async function a(){
    const responce=await axios.post(
        "https://httpdump.app/dumps/82bf7dd5-6d4f-468f-b8dd-fffb377f71ab",
        {
            data:
             {
            username:"Abhaysinh",
            password:"123"
        }
       },
        {
            headers:{
                cookies:"isdfbsdfbisidofbsjdfhsdfffhsbf"
            }
        }
    );
    console.log(responce.data)

}
a()


// ##############################################################################
// using the axios 



// async function imp(){
//     const responce=await axios.get("https://jsonplaceholder.typicode.com/posts")
//     const randomindex=Math.floor(Math.random()*responce.data.length)
//     document.getElementById("div").innerHTML=responce.data[randomindex].body;
// }
// imp()


// async function getdata() {
//     const content = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     document.getElementById("div").innerHTML = content.data[1].body;
// }
// getdata();



//########################################################
// using the feach 


// async function main(){
//     const responce = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const final_jsonn=await responce.json()

//     const randomindex = Math.floor(Math.random()*final_jsonn.length)    
//     document.getElementById("div").innerHTML=final_jsonn[randomindex].body
    
// }
// main()



