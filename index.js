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
        id: 1,
        Sname: newStudent,
        marks: newMark ,
        isPresent: false
    }

    students.push(student)
    console.log(students)

    


})