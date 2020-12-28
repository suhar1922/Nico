//Обращение к элементам сайта
var s = document.getElementById('iput_S');
var v0 = document.getElementById('iput_V0');
var t = document.getElementById('iput_t');
var a = document.getElementById('iput_a');
var resault = document.getElementsByClassName('resault_window');

/*var s = s_0.value;
var v0 = v0_0.value;
var t = t_0.value;
var a = a_0.value;
*/
//вычисление при нажатии на кнопку:
function operation() {

  var s = document.getElementById('iput_S');
  var v0 = document.getElementById('iput_V0');
  var t = document.getElementById('iput_t');
  var a = document.getElementById('iput_a');

  if (s.value == "") {
    s = (v0.value*t.value)+((a.value*t.value*t.value)/2);
    console.log(s);
    resault[0].innerHTML = "S=" + s;
  }
  else if (t.value == "") {
    t = Math.sqrt((2*(s.value))/a.value)
    resault[0].innerHTML = "t=" + t;
  }
  else if (v0.value == "") {
    v0 = ((a.value*t.value*t.value)-2*s.value)/(2*t.value);
    resault[0].innerHTML = "V0=" + v0;
  }
  else if (a.value == "") {
    a = ((2*(s.value-v0.value*t.value))/(t.value*t.value));
    resault[0].innerHTML = "a=" + a;
  }  
}
