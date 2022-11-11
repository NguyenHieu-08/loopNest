let text;
text = "<table border='1' width=50% cellspacing='0' cellpadding='3'>";
//Dòng
for(let i = 1; i <= 10; i++){
    text += '<tr>';
    //Cột
    for(let j = 1; j <= 10; j++) {
        text += '<td>'+i*j+'</td>';
    }
    text += '</tr>';
}
text += '</table>';
document.write(text);