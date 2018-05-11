// var xhr = new XMLHttpRequest();
// var parseJson = {};
// xhr.open('GET', 'https://api.myjson.com/bins/i6sj6', false);
// xhr.send();
//
// if (xhr.status != 200) {
//     alert(xhr.status + ': ' + xhr.statusText);
// } else {
//     parseJson = JSON.parse(xhr.responseText);
//
//     for (var i = 0; i < parseJson.wigdets.length; i++) {
//         Object.keys(parseJson.wigdets[i]).map(function (key, index) {
//
//             //replace null
//
//             if (parseJson.wigdets[i][key] === null) {
//                 parseJson.wigdets[i][key] = "null";
//
//                 console.log('Заміна null на стрінг "null"', parseJson);
//             }
//
//             // count null
//
//             if (parseJson.wigdets[i][key] instanceof Array) {
//
//                 var count = 0;
//
//                 for (var j = 0; j < parseJson.wigdets[i][key].length; j++) {
//
//                     if (parseJson.wigdets[i][key][j] === null) {
//                         count++;
//
//                     }
//                 }
//
//                 console.log('Кількість null у внутрішніх масивах', count);
//             }
//         });
//     }
// }
//
// var textblock = document.getElementsByClassName('text-block')[0];
// var textarea = document.getElementsByClassName('textarea')[0];
//
// textblock.addEventListener("click", function () {
//     textarea.focus()
// });
//
// textarea.addEventListener("input", function () {
//     var valueText = this.value;
//     textblock.innerHTML = valueText;
//
//     var blockString = textblock.innerText;
//     var redWord =  /\sале\s/g;
//     var blueWord = /\sабо\s/g;
//     var greenWord = /<span class='text-red'> але <\/span>або\s/g;
//     var brownWord = /<span class='text-blue'> або <\/span>але\s/g;
//     var resultRed = blockString
//         .replace(redWord, "<span class='text-red'> але </span>")
//         .replace(blueWord, "<span class='text-blue'> або </span>")
//         .replace(greenWord, "<span class='text-green'> але або </span>")
//         .replace(brownWord, "<span class='text-brown'> або але </span>");
//
//     textblock.innerHTML = resultRed;
//
// });


var tbody = document.getElementById("tbody");
var numRows = tbody.rows.length;

var names = [];
var employments = [];
var dates = [];
var count = 0;

for (var i = 0; i < numRows; i++) {
    var cells = tbody.rows[i].getElementsByTagName('td');
    for (var j = 0; j < cells.length; j++) {

        if (j === 0) {
            names.push(cells[j].innerHTML);
        }

        if (j === 1) {
            employments.push(cells[j].innerHTML);
        }

        if (j === 2) {
            dates.push(cells[j].innerHTML);
        }
    }
}

function sortAsc(array) {
    return array.sort(function (a, b) {
        return a - b;
    })
}

employments = sortAsc(employments);
console.log(employments);

for (var c = 0; c < numRows; c++) {
    var cells1 = tbody.rows[c].getElementsByTagName('td');
    for (var k = 0; k < cells1.length; k++) {

        if (k === 1) {
            cells1[k].innerHTML = employments[count];
            count++;
        }
    }
}

