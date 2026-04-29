let students = []

const s = document.getElementById("name")
const m = document.getElementById("marks")
const a = document.getElementById("attend")
const btn = document.getElementById("btn")
const list = document.querySelector(".list")

btn.addEventListener("click", function(){

    const newStudent = s.value 
    const newMark = m.value
    const student = {
        id: Date.now(),
        Sname: newStudent,
        marks: Number(newMark) ,
        isPresent: false
    }

    students.push(student)
    console.log(students)
    ResetStudentList()

})

function ResetStudentList(){
    
    list.innerHTML = ""

    for (let index = 0; index < students.length; index++) {

        const student = students[index]
        
        const studentName = document.createElement("h2")
        studentName.textContent = student.Sname

        const mark = document.createElement("h2")
        mark.textContent = student.marks

        const btn = document.createElement("button")
        btn.textContent = student.isPresent ? "Present" : "Absent"

        btn.addEventListener("click", function(){
            toggleAttendance(student.id)
        })

        list.appendChild(studentName)
        list.appendChild(mark)
        list.appendChild(btn)
        
    }
}

function toggleAttendance(id) {
    let student = students.find(s => s.id === id);
    
    if (student) {
        student.isPresent = !student.isPresent;
    }
    ResetStudentList();
    
}
