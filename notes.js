console.log('lets start making the notes')
shownotes();

let  addBtn = document.getElementById('addBtn')
addBtn.addEventListener("click", function(e){
    let txtArea = document.getElementById("txtArea");
    let notes = localStorage.getItem("notes");

    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(txtArea.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    txtArea.value = "";
    console.log(notesObj);

    shownotes();

})

function shownotes() {
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes)
    }

    let html = "";
    notesObj.forEach(function(element, index){
        html += `
        <div class="flex flex-col mb-10 lg:items-start items-center w-40 mx-4 bg-blue-100 p-3 border-4">
            <div class="flex-grow">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Note ${index + 1}</h2>
                <p class="leading-relaxed text-base">${element}</p>
                </div>
                <a class="mt-3 text-grey-100 pl-2 pr-2 py-1 float-right bg-red-400 items-center rounded">Delete</a>
        </div>
        `
        let notesElm = document.getElementById('notes-box')
        if (notesObj.length != 0){
            notesElm.innerHTML = html;
        }
    })
}