// CREATE AN ARRAY OF EMPLOYEES
let arrEmployees = []

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY

if(localStorage.getItem('employees') != null){
    arrEmployees = JSON.parse(localStorage.getItem('employees'))
}
else{
    arrEmployees = [
        [34567892,'Zak Ruvalcaba',3456,'zak@outlook.com','Administrative'],
        [45678321,'Thanh Vo',4567,'thanh@gmail.com','Engineering'],
        [56784321,'Jessica',5678,'jessica@outlook.com','Marketing'],
        [67895432,'Mark',6789,'mark@gmail.com','Sales'],
        [78954321,'Garcia',7865,'garcia@hotmail.com','Executive']
    ]
}
// GET DOM ELEMENTS
let $ = (id) => document.getElementById(id)
let form        = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')
// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

buildGrid()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()
    // GET THE VALUES FROM THE TEXT BOXES
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let idList = ['id','name','extension','email','department']
    let employee = []
    for(let i = 0; i < 5; i++){
        employee[i] = $(idList[i]).value
    }
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    arrEmployees.push(employee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    $('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {  
    // GET THE SELECTED ROWINDEX FOR THE TR
    let btn = e.target
    let rowIndex = btn.closest('tr').rowIndex;
    // GET THE NAME WANTED TO DELETE
    let d_name = arrEmployees[rowIndex- 1][1]
    // CONFIRM THE NAME TO DELETE
    if(confirm(`Are you sure you want to delete ${d_name} user?`)){
        // REMOVE EMPLOYEE FROM ARRAY
        arrEmployees.splice(rowIndex - 1, 1)
        // BUILD THE GRID
        buildGrid()
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    for(let employee of arrEmployees){
        tbody.innerHTML += 
            `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td>${employee[3]}</td>
                <td>${employee[4]}</td>
                <td><button class='btn btn-light btn-sm delete'><i class="fa-solid fa-trash-can"></i></button></td>
            </tr>
            `        
    }
    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.appendChild(tbody)
    // UPDATE EMPLOYEE COUNT
    empCount.value = `(${arrEmployees.length})`
    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(arrEmployees))
};
