async function fectData() {

    await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // when sucess
        .then((res) => {
            console.log(res.data);

        })
      

    
       
        
}

fectData()
