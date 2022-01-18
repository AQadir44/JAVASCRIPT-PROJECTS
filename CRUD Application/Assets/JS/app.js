let id = "no";

showData();


function btnCreate() {
    let username = document.getElementById("user-name").value;
    let userdes = document.getElementById("user-designation").value;
    let userqual = document.getElementById("user-qualification").value;
    let userexp = document.getElementById("user-Experience").value;
    let usersal = document.getElementById("user-salary").value;
    
    if (username == "" || userdes == "" || userqual == "" || userexp == "" || usersal == "") {
        alert("ENter Complete Data");
    } else {
        if (id == 'no') {
            let arr = JSON.parse(localStorage.getItem('emp'));
            //Creating array
            if (arr == null) {
                let data = [[username , userqual ,userdes, userexp , usersal]];
                localStorage.setItem('emp', JSON.stringify(data))
            } else {                                                             
                arr.push([username , userqual ,userdes, userexp , usersal])
                localStorage.setItem('emp', JSON.stringify(arr))
            }
        } else { 
            let arr = JSON.parse(localStorage.getItem('emp'));
            arr[id] = [username , userqual ,userdes, userexp , usersal];
            localStorage.setItem('emp', JSON.stringify(arr))


        }
        showData()
    }
    document.getElementById("user-name").value = '';
    document.getElementById("user-designation").value = '';
    document.getElementById("user-qualification").value= '';
    document.getElementById("user-Experience").value= '';
    document.getElementById("user-salary").value='';

}

function showData() {
    let arr = JSON.parse(localStorage.getItem('emp'));
    if (arr != null) {
        let html = '';
      
        for (let k in arr) {
            console.log(arr)
            html = html + `<tr><td>${k}</td><td>${arr[k][0]}</td><td>${arr[k][1]}</td><td>${arr[k][2]}</td><td>${arr[k][3]}</td><td>${arr[k][4]}</td><td><i class="fas fa-user-edit btn-edit" onclick = "btnEdit(${k})"></i></td><td><i class="fas fa-user-minus btn-delete" onclick = "btnDLT(${k})"></i></td></tr>`

        }
        document.querySelector(".tbody").innerHTML = html

    }
}
function btnRead() {
    showData()
    alert("Data Refresh")
}

function btnDLT(k) {
    let arr = JSON.parse(localStorage.getItem('emp'));
    arr.splice(k, 1)
    localStorage.setItem('emp', JSON.stringify(arr))
    showData()
}


function btnEdit(k) {
    id = k;
    let arr = JSON.parse(localStorage.getItem('emp'));
    document.getElementById("user-name").value = arr[k][0];
    document.getElementById("user-qualification").value = arr[k][1];
    document.getElementById("user-designation").value = arr[k][2];
    document.getElementById("user-Experience").value = arr[k][3];
    document.getElementById("user-salary").value = arr[k][4];


}

function btnDeleteAll() {
    let arr = JSON.parse(localStorage.getItem('emp'));
    localStorage.removeItem(arr);
    console.log("Data Clear Refresh Now")
    showData();
}

function btnUpdate() {
    let arr = JSON.parse(localStorage.getItem('emp'));
    if (arr == null) {
        alert('Data Deleted');
    } else {
        alert('Data Updated')
    }
}