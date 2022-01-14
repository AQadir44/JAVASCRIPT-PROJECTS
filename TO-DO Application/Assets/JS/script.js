var list = document.getElementById('list')


function deleteItem(e) {
    e.parentNode.remove()
}




function addItem() {

    var item = document.getElementById('Item');

    if (item.value.length == 1) {
        alert("enter value");

    } else {

        var li = document.createElement('li')
        var liText = document.createTextNode(item.value)
        li.setAttribute("class", "listitem")
        li.appendChild(liText)


        let date = new Date();
        // console.log(date.getHours())

        var editBt = document.createElement('button');
        var editText = document.createTextNode("Edit")
        editBt.appendChild(editText)
        editBt.setAttribute('onclick', 'EditItem(this)')

        var delBt = document.createElement('button');
        var delText = document.createTextNode("Delete")
        delBt.setAttribute('onclick', 'deleteItem(this)')
        delBt.appendChild(delText)

       

        li.appendChild(editBt)
        li.appendChild(delBt)
        list.appendChild(li)
        localStorage.setItem('item', item.value)
        item.value = " ";


    }
}

function dltAll() {
    list.innerHTML = "";

}

function EditItem(m) {

    var val = m.parentNode.firstChild.nodeValue;
    m.parentNode.firstChild.nodeValue = ' ';
    

    if (m.parentElement.classList.contains('new')) {
        var saveBt = document.createElement('button');
        saveBt.setAttribute('class', 'save')
        var SaveText = document.createTextNode("Save")

        m.parentNode.insertBefore(saveBt, m.previousSibling)

        saveBt.setAttribute('onclick', 'Save()')
        saveBt.appendChild(SaveText)

    } else {

        var editValue = document.createElement('input');
        editValue.type = 'text'
        editValue.placeholder = val
        editValue.setAttribute('class', 'new')
        console.log(editValue)


        var saveBt = document.createElement('button');
        saveBt.setAttribute('class', 'save')

        var SaveText = document.createTextNode("Save")

        console.log(saveBt)
        m.parentNode.insertBefore(editValue, m.previousSibling)
        m.parentNode.insertBefore(saveBt, m.previousSibling)

        if (editValue.length == 0) {
            alert("Enter New Value")
        } else {
            saveBt.setAttribute('onclick', 'Save()')
            saveBt.appendChild(SaveText)

        }
        
    }




}

function Save() {
    document.querySelector('.save').style.display = 'none';

    var elem = document.querySelector('.save');
    elem.parentNode.removeChild(elem);
}