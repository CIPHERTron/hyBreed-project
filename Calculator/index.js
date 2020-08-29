var s = '';
var n = document.querySelectorAll('.button').length;
for (var i = 0; i < n; i++) {
  document
    .querySelectorAll('.button')
    [i].addEventListener('click', function () {
      var inner = this.innerHTML;
      if (inner === 'C') {
        s = '';
        document.getElementById('display').value = s;
      } else if (inner === 'X') {
        insert(inner);
      } else {
        if (inner === '=') {
          calculate();
        } else {
          insert(inner);
        }
      }
    });
}

function insert(key) {
  if (key == 'X') {
    var str = document.getElementById('display').value;
    var newstr = str.substr(0, str.length - 1);
    document.getElementById('display').value = newstr;
    s = newstr;
  } else {
    s = s + key;
    document.getElementById('display').value = s;
  }
}

function calculate() {
  var ind = s.length - 1;
  if (s[ind] === '!') {
    var temp = document.getElementById('display').value;
    var newtemp = temp.substr(0, temp.length - 1);
    var number = parseInt(newtemp, 10);
    var fact = 1;
    for (var j = 1; j <= number; j++) {
      fact = fact * j;
    }
    console.log(fact);

    document.getElementById('display').value = fact.toString();
  } else {
    var result = eval(s);
    document.getElementById('display').value = result;
  }
}