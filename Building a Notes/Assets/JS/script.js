
showNotes();

//Adding the Note in Local Storage
function addBtn() {
    let addText = document.getElementById("addText").value
    let addTitle = document.getElementById("addTitle").value

    if (addText == "") {
        alert("Enter Note")
    } else {
        let noteElement = localStorage.getItem("notes");
        console.log(noteElement)
        if (noteElement == null) {
            noteObj = [];

        } else {
            noteObj = JSON.parse(noteElement);
        }
        noteObj.push([addTitle, addText]);
        localStorage.setItem("notes", JSON.stringify(noteObj));
        addText = "";
        addTitle = "";
    }


    showNotes();
}

function showNotes() {
    let noteElement = JSON.parse(localStorage.getItem("notes"));
    if (noteElement != null) {
        let html = '';
        for (let k in noteElement) {
            console.log(noteElement)
            if (noteElement[k][0] == "") {
                html = html + `
            <div class="myNotes mx-2 my-2 card" id="myNotes" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${parseInt(k) + 1}</h5>
                    <p class="card-text" ><textarea class="form-control pra"  id="text" rows="1" disabled = true>${noteElement[k][1]}</textarea></p>
                    <button class="btn btn-primary" onclick = "btnDLT(${k})"> Delete </button>
                    <button class="btn btn-primary editbtn" onclick = "btnEdit( this , ${k} ) "> Edit </button>
                </div>
            </div>
            `
            } else {
                html = html + `
                <div class="myNotes mx-2 my-2 card" id="myNotes" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${noteElement[k][0]}</h5>
                        <p class="card-text" ><textarea class="form-control pra"  id="text" rows="1" disabled = true>${noteElement[k][1]}</textarea></p>
                        <button class="btn btn-primary" onclick = "btnDLT(${k})"> Delete </button>
                        <button class="btn btn-primary editbtn" onclick = "btnEdit( this , ${k} ) "> Edit </button>
                    </div>
                </div>
            `
            }
        }
        document.querySelector("#notes").innerHTML = html;
    }

}

function btnDLT(k) {

    let noteElement = JSON.parse(localStorage.getItem('notes'));
    noteElement.splice(k, 1)
    localStorage.setItem('notes', JSON.stringify(noteElement));
    showNotes();

}

let searchValue = document.getElementById("search");
searchValue.addEventListener("input", function (element) {

    let searchVal = searchValue.value.toUpperCase();
    //console.log(searchVal)
    let noteCards = document.getElementsByClassName("myNotes");
    Array.from(noteCards).forEach(function (elements) {
        let cardText = elements.getElementsByTagName("p")[0].innerText.toUpperCase();
        console.log(cardText)
        if (cardText.includes(searchVal)) {
            elements.style.display = "block";
        } else {
            elements.style.display = "none";
        }
    })

})

function btnEdit(this1, k) {

    let noteElement = JSON.parse(localStorage.getItem('notes'));
    let pTag = this1.parentNode.getElementsByTagName("p")[0];
    pTag.disabled = true;
    for (let x in noteElement) {
        if (x == k) {
            pTag.innerHTML = `
            <textarea class="form-control" id="updateText" rows="1">${noteElement[x]}</textarea>
            <button class="btn btn-primary my-3 savebtn" onclick = "saveBtn(this , ${x}) ">Save</button>  `
        }
    }

}

function saveBtn(this2, k) {

    let updateText = document.getElementById("updateText").value;
    let noteElement = JSON.parse(localStorage.getItem('notes'));
    noteElement[k] = updateText;
    localStorage.setItem('notes', JSON.stringify(noteElement));

    //Removing the save button
    this2.style.display = 'none';


    //Removing the textarea border
    let textStyle = this2.parentNode.firstChild.nextElementSibling
    textStyle.style.border = 'none'
    textStyle.style.resize = 'none'
    textStyle.disabled = true
    textStyle.style.background = 'transparent'

}