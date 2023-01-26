// 주석넣기: 텍스트 입력 후 ctrl+/
// 새로고침 할 때마다 시간이 동기화되는 코드
$(document).ready(function () {
    renderCurrentTime();
    renderQuote();
});


function renderCurrentTime() {
let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`;
fetch(url)
.then(res => res.json()).then((data) => {
    let datetime = data['datetime'].substr(11,5);
    $('#time').text(datetime);
});
}


function renderQuote() {
    let url = `https://api.quotable.io/random`;
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`;
            let author = `- ${data['author']} -`;
            $('#content').text(content);
            $('#author').text(author);
        });
}