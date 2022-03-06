"use strict";

const content = document.getElementById("content"),
    writeBtn = document.getElementById("writeBtn");

    writeBtn.addEventListener('click', write);

function write() {
    if(!content.value) return alert("할 일을 입력해주세요!");

    // const req = {
    //     todo: todo.value
    // };
    
    // fetch('/todo/write', {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(req)
    // })
    // .then((res) => res.json())
    // .then((res) => {
    //     if(res.success) {
    //         location.href = "/todo";
    //     } else {
    //         alert(res.msg);
    //     }
    // })
    // .catch((err) => {
    //     console.error(err);
    // })
}