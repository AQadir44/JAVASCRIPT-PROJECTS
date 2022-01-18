function data( name , qual , des , exp , sal  ) {
    this.name = name ; 
    this.qual = qual;
    this.des = des;
    this.exp = exp ;
    this.sal = sal;
}

let id = "no"


function showData() {
    let localData = JSON.parse(localStorage.getItem("emp"));
    if(localData != null){
        let html = '';

        for(let k in localData){


            html = html + `<tr><td>${k}</td><td>${localData[k].name}</td><td>${localData[k].qual}</td><td>${localData[k].des}</td><td>${localData[k].exp}</td><td>${localData[k].sal}</td><td><i class="fas fa-user-edit btn-edit" onclick = "btnEdit(${k})"></i></td><td><i class="fas fa-user-minus btn-delete" onclick = "btnDLT(${k})"></i></td></tr>`

        }
        document.querySelector(".tbody").innerHTML = html
    }
}


function btnCreate(params) {
    let username = document.getElementById("user-name").value;
    let userdes = document.getElementById("user-designation").value;
    let userqual = document.getElementById("user-qualification").value;
    let userexp = document.getElementById("user-Experience").value;
    let usersal = document.getElementById("user-salary").value;

    if(username == "" || userdes == "" || userqual == "" || userexp == "" || usersal == ""){
        alert("Enter Data");
    }else{
        if(id == 'no'){
            let localData = JSON.parse(localStorage.getItem("emp"));
            if(localData == null){
                let newData = [new data(username,userqual,userdes , userexp,usersal)]
                localStorage.setItem('emp', JSON.stringify(newData))
                
            }else{
                localData.push(new data(username,userqual,userdes , userexp,usersal))
                localStorage.setItem('emp', JSON.stringify(localData))
                console.log(localData)
            }
        }else{
            let localData = JSON.parse(localStorage.getItem('emp'));
            localData[id] = new data(username,userqual,userdes , userexp,usersal);
            localStorage.setItem('emp', JSON.stringify(localData))
            alert("Data Updated Kindly Click the Update Button")
        }
    }
    document.getElementById("user-name").value = '';
    document.getElementById("user-designation").value = '';
    document.getElementById("user-qualification").value= '';
    document.getElementById("user-Experience").value= '';
    document.getElementById("user-salary").value='';
}

function btnRead() {
    showData()
}

function btnUpdate() {
    showData()
}

function btnEdit(k) {
    id = k;
    let localData = JSON.parse(localStorage.getItem('emp'));
    document.getElementById("user-name").value = localData[k].name;
    document.getElementById("user-qualification").value = localData[k].qual;
    document.getElementById("user-designation").value = localData[k].des;
    document.getElementById("user-Experience").value = localData[k].exp;
    document.getElementById("user-salary").value = localData[k].sal;


}

function btnDLT(k) {
    let localData = JSON.parse(localStorage.getItem('emp'));
    localData.splice(k, 1)
    localStorage.setItem('emp', JSON.stringify(localData))
    showData()
}