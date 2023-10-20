const con = document.getElementById("con");

function showTime() {
    const d = new Date();


    const second = d.getSeconds() <= 9 ? `0${d.getSeconds()}` : d.getSeconds();
    const h = d.getHours() <= 9 ? `0${d.getHours()}` : d.getHours();

    const m = d.getMinutes() <= 9 ? `0${d.getMinutes()}` : d.getMinutes();

    function getTime() {
        con.innerHTML = `<div>${h}</div><span>:</span><div>${m}</div><span>:</span><div>${second}</div>`;
        console.log("hi")

    }
    getTime();
}
setInterval("showTime()", 1000)