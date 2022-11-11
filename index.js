let text, i, j;
text = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
i = j = 1;
while (i <= 10) {
    text = text + "<tr>";
    // console.log("Dòng i: " + i);
    while (j <= 10) {
        text = text + "<td>" + i * j + "</td>";
        // console.log("j: " + j);
        j++;
    }
    text = text + "</tr>";
    j=1;
    // console.log("j: " + j);
    i++;
}
text = text + "</table>";
document.write(text);