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
var trNum = tbody.rows.length;
var nameBtn = document.getElementById("name-btn");
var employmentBtn = document.getElementById("employment-btn");
var dateBtn = document.getElementById("date-btn");
var names = [];
var employments = [];
var dates = [];
var count = 0;
var countClicks = 0;

for (var i = 0; i < trNum; i++) {
    var tdValue = tbody.rows[i].getElementsByTagName('td');
    for (var j = 0; j < tdValue.length; j++) {

        if (j === 0) {
            names.push(tdValue[j].innerHTML);
        }

        if (j === 1) {
            employments.push(tdValue[j].innerHTML);
        }

        if (j === 2) {
            dates.push(tdValue[j].innerHTML);
        }
    }
}

function sortAsc(array) {
    return array.sort(function (a, b) {
        return a - b;
    })
}

function sortDesc(array) {
    return array.sort(function (a, b) {
        return  b - a;
    })
}

function sortAscNames(array) {
    return array.sort(function (a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    })
}

function sortAscDates(array) {
    return array.sort(function (a, b) {
        var dateA = new Date(a), dateB = new Date(b);
        return dateA - dateB;
    })
}

function counClickFunc (){
    if (countClicks === 3) {
        countClicks = 0
    } else  {
        countClicks++
    }
}


employmentBtn.addEventListener("click", function () {

    counClickFunc();

    if (countClicks === 1)  {
        var employmentsAsc = sortAsc(employments);
        pushSort(employmentsAsc, 1);
    }

    if (countClicks === 2)  {

        count = 0;
        var employmentsDesc = sortDesc(employments);
        pushSort(employmentsDesc, 1);
    }

    if (countClicks === 3)  {
        count = 0;
        console.log(initEmployments);
        pushSort(initEmployments, 1);
    }

});


// document.addEventListener("click", function () {
//     if (event.target.classList.contains('sortAscNum')) {
//         event.target.classList.remove('sortAscNum');
//         event.target.classList.add('sortDescNum');
//         count = 0;
//         console.log(employmentBtn.classList.length);
//         var employmentsDesc = sortDesc(employments);
//         pushSort(employmentsDesc, 1);
//     }
// });
//
// document.addEventListener("click", function () {
//     if (event.target.classList.contains('sortDescNum')) {
//         event.target.classList.remove('sortDescNum');
//         count = 0;
//         pushSort(employments, 1);
//         console.log(employmentBtn.classList.length);
//     }
// });







nameBtn.addEventListener("click", function () {
    this.classList.add('sortAscNames');
    var namesAsc = sortAscNames(names);
    pushSort(namesAsc, 0);
});


dateBtn.addEventListener("click", function () {
    this.classList.add('sortAscDates');
    var datesAsc = sortAscNames(dates);
    pushSort(datesAsc, 2);
});


function pushSort(sortArray, arrayIndex) {
    for (var c = 0; c < trNum; c++) {
        var tdValueSort = tbody.rows[c].getElementsByTagName('td');
        for (var k = 0; k < tdValueSort.length; k++) {

            if (k === arrayIndex) {
                tdValueSort[k].innerHTML = sortArray[count];
                count++;
            }
        }
    }
}




