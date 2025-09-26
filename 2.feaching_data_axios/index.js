async function getdata() {
    const content = await axios.get("https://jsonplaceholder.typicode.com/posts");
    document.getElementById("div").innerHTML = content.data[1].title;
}

getdata();