let students = []

const s = document.getElementById("name")
const m = document.getElementById("marks")
const btn = document.getElementById("btn")
const list = document.querySelector(".list")

btn.addEventListener("click", function(){
    if (s.value.trim() && m.value.trim() === "") {
        alert("Please enter your name and mark");
        return 
    }
    const newStudent = s.value 
    const newMark = m.value
    const student = {
        id: students.length,
        Sname: newStudent,
        marks: Number(newMark) ,
        isPresent: false
    }

    students.push(student)
    ResetStudentList()

})

function ResetStudentList(){
    
    list.innerHTML = ""

    for (let index = 0; index < students.length; index++) {

        const student = students[index]

        const id = document.createElement("h2")
        id.textContent = student.id
        
        const studentName = document.createElement("h2")
        studentName.textContent = student.Sname

        const mark = document.createElement("h2")
        mark.textContent = student.marks

        const btn = document.createElement("button")
        btn.textContent = student.isPresent ? "Present" : "Absent"

        btn.addEventListener("click", function(){
            toggleAttendance(student.id)
        })

        list.appendChild(id)
        list.appendChild(studentName)
        list.appendChild(mark)
        list.appendChild(btn)
        
    }

    s.value = ""
    m.value = ""
}

function toggleAttendance(id) {
    let student = students.find(s => s.id === id);
    
    if (student) {
        student.isPresent = !student.isPresent;
    }
    ResetStudentList();
    
}
