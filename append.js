//26-8-2024
// function myfunction(){
//     let node = document.createElement("li");
//     let mylist = document.createTextNode("water");
//     node.appendChild(mylist);
//     document.getElementById("list").appendChild(node)
//     }


    //hasChildNodes


    // function isfunction(){
    //     const list = document.getElementById("list");
    //     while(list.hasChildNodes){
    //         list.removeChild(list.firstChild);//all the li remove
    //     }
    // }
    
    function isfunction() {
        const list = document.getElementById("list");
        if (list.firstElementChild) {
            list.removeChild(list.firstElementChild);
        }
    }
    