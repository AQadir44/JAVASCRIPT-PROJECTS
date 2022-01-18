//Data From Input
// const userName = document.querySelector('#user-name');
// const userQual = document.querySelector('#user-qualification');
// const userDes = document.getElementById('user-designation');
// const userCode = document.getElementById('user-code');
// const userSal = document.getElementById('user-salary');

// Button 

const btCreate = document.getElementById('btn-create');
const btRead = document.getElementById('btn-read');
const btUpdate = document.getElementById('btn-update');
const btdelete = document.getElementById('btn-delete');


const userID = document.querySelector('#user-id');
const userName = document.querySelector('#user-name');
const userQual = document.querySelector('#user-qualification');
const userDes = document.getElementById('user-designation');
const userCode = document.getElementById('user-code');
const userSal = document.getElementById('user-salary');

let id = "";

// let data = {
//     ID: userID.value,
//     name: userName.value,
//     qual: userQual.value,
//     des: userDes.value,
//     code: userCode.value,
//     sal: userSal.value,
// }

// let data = {
//     ID: ++id,
//     name: userName.value,
//     qual: userQual.value,
//     des: userDes.value,
//     code: userCode.value,
//     sal: userSal.value,
// }



//Validation Data:
function valiData(data) {
    let flag = false;
    for (const value in data) {
        if (data[value] != '' && data.hasOwnProperty(value)) {
            flag = true;
        } else {
            flag = false;
        }
    }


    return flag

}



function btnCreate() {
    let now = new Date()
    let data = {
        name: userName.value,
        qual: userQual.value,
        des: userDes.value,
        code: userCode.value,
        sal: userSal.value,
    }
    let flag = valiData(data);

    if (flag) {
        console.log('Data Save Successfully')
        document.getElementById('user').reset();

        window.localStorage.setItem('user', JSON.stringify(data))





    } else {
        alert("ENter data")
    }
}



function btnRead() {


    let tbody = document.querySelector('.tbody');

    //convert the Data From string to Object:
    var arrayOfStrings = JSON.parse(localStorage.getItem("emp"));
    if (arrayOfStrings != null) {
        let html = " ";
        let id = 1;

        for (let k in arrayOfStrings) {
            html = html +
                arrayOfStrings.forEach(user => {
                    let row = document.createElement('tr');
                    Object.values(user).forEach(text => {
                        let cell = document.createElement('td');
                        let cellText = document.createTextNode(text);
                        cell.appendChild(cellText);
                        row.appendChild(cell);
                    })

                    tbody.appendChild(row)







                    // var i = 0;


                    // while (i < tbody.rows.length) {

                    //     console.log(i)

                    //     let btn = document.createElement("button");
                    //     btn.innerHTML = "Click Me";
                    //     row.appendChild(btn)

                    //     console.log(i)
                    //     ++i
                    //     console.log(i)


                    // }

                })


            let rows = tbody.rows
            for (var i = 0; i < rows.length; ++i) {
                var td = document.createElement("td");
                let btn = document.createElement("a");
                btn.innerHTML = '<i class="fas fa-user-edit btn-edit"></i>';
                btn.setAttribute("onclick", "btnEdit()")
                td.appendChild(btn);
                rows[i].appendChild(td);
            }

            for (var i = 0; i < rows.length; ++i) {
                var td = document.createElement("td");
                let btn = document.createElement("a");
                btn.innerHTML = '<i class="fas fa-user-minus btn-delete"></i>';
                btn.setAttribute("onclick", "btnDlt()")
                td.appendChild(btn);
                rows[i].appendChild(td);
            }
            id++;
        }
    }
}


// userID.value = keyID + 1 || 1;
// var arrayofObject = [];
// arrayOfStrings.forEach(user => {
//     let users = JSON.parse(user);
//     arrayofObject.push(users)






// let userObj = {};
// let key = [];

// for (var i = 1; i <= arrayOfStrings.length; i++) {
//     key.push(i)
// }

// key.forEach((key, i) => userObj['user_' + key] = arrayOfStrings[i])


//To Display Only One Time
// if (tbody.rows.length == arrayofObject.length) {
//     alert("Page Updated");
// } else {
//     arrayofObject.forEach(user => {
//         let row = document.createElement('tr');
//         Object.values(user).forEach(text => {
//             let cell = document.createElement('td');
//             let cellText = document.createTextNode(text);


//             cell.appendChild(cellText);

//             row.appendChild(cell);






//         })

//         tbody.appendChild(row)







//         // var i = 0;


//         // while (i < tbody.rows.length) {

//         //     console.log(i)

//         //     let btn = document.createElement("button");
//         //     btn.innerHTML = "Click Me";
//         //     row.appendChild(btn)

//         //     console.log(i)
//         //     ++i
//         //     console.log(i)


//         // }

//     })


//     let rows = tbody.rows
//     for (var i = 0; i < rows.length; ++i) {
//         var td = document.createElement("td");
//         let btn = document.createElement("a");
//         btn.innerHTML = '<i class="fas fa-user-edit btn-edit"></i>';
//         btn.setAttribute("onclick", "btnEdit()")
//         td.appendChild(btn);
//         rows[i].appendChild(td);
//     }

//     for (var i = 0; i < rows.length; ++i) {
//         var td = document.createElement("td");
//         let btn = document.createElement("a");
//         btn.innerHTML = '<i class="fas fa-user-minus btn-delete"></i>';
//         btn.setAttribute("onclick", "btnDlt()")
//         td.appendChild(btn);
//         rows[i].appendChild(td);
//     }
// }




function btnEdit(event) {

}

