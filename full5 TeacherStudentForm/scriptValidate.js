let fname = document.getElementById('name');
let lname = document.getElementById('lname');
let bday = document.getElementById('bday');
let student = document.getElementById('student');
let teacher = document.getElementById('teacher');
let work = document.getElementById('work');
let group = document.getElementById('group');
let code = document.getElementById('code');

function Add() {
    if (fname.value && lname.value && bday.value && code.value) {
        let id = 1;

        if (localStorage.getItem('id')) {
            id = +localStorage.getItem('id') + 1;
        }

        let isStudent = student.checked;
        let isTeacher = teacher.checked;

        if (isStudent) {
            work.value = "He/She is Student";

            let studentCode = /^(?!.*(\d)\1{2})\d{7}$/;

            if (!studentCode.test(code.value)) {
                alert("Code should be a 7 digit number with no digit repeating more than twice");
                return;
            }

        } else if (isTeacher) {
            group.value = "He/She is Teacher";
            let teacherCode = /^(?=.*[a-zA-Z]{3,})(?!.*(\d)\1{2})[a-zA-Z0-9]{9}$/;

            if (!teacherCode.test(code.value)) {
                alert("Code should contain 9 characters, contain at least 3 letters, and no digit should repeat more than twice");
                return;
            }
        } else {
            alert("Are you a Student or a Teacher");
            return;
        }

        let user = {
            id: id,
            fname: fname.value,
            lname: lname.value,
            bday: bday.value,
            work: work.value,
            group: group.value,
            code: code.value,
        };

        localStorage.setItem(`user_${id}`, JSON.stringify(user));
        localStorage.setItem('id', id);

    } else {
        alert("All fields are required");
    }
}