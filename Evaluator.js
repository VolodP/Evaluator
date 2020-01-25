var n1=1;
var n2=2;
//    Користувацький клас - Cпівробітник
var oEmployee=new cEmployee("Арсен Аваков", 2400);

function evalExpr() {
/* Функція eval() бачить локальні змінні 
-Функція window.eval() бачить локальні змінні, визначені в evalExpr(),
-змінні, визначені в глобальному контексті,
-методи об'єкта Math(), доступні через об'єкт, як-от Math.random() ,
-користувацькі функції, як-от mult(n1, n2), 
-формули за участі вбудованих об'єктів та користувацьких функцій, як-от:
(Math.sin(1))**2+(Math.cos(1))**2  ,
-об'єкти мають бути створені в глобальному контексті, тоді доступні їх 
властивості і функції.
*/
// var n1=2;
// var n2=3;
    // document.write("1");
    // alert("2");
    // document.fEval.fldRes.value="1";
    // Створюємо і використовуємо об'єкт
    // var oEmployee=new cEmployee("Арсен Аваков", 2400);
    // alert(oEmployee.name);
    // alert(oEmployee.rate);

    var tExp=document.fEval.fldExpr.value;
    var tRes=window.eval(tExp);
    // var tRes=eval(tExp);
    document.fEval.fldRes.value=tRes;
}
function mult(num1, num2) {return num1 * num2;}
function testMath(cornRad) 
// Перевірка роботи тригонометричних функцій
{
    return (Math.sin(cornRad))**2+(Math.cos(cornRad))**2;
// document.write(Math.random());
}
function cEmployee(name, rate)
{
   //    Користувацький клас - Cпівробітник
   this.name=name;
   this.rate=rate;
   this.wage=wage;
}
function wage()
//    Обчислення місячної зарплати виходячи з 20 робочих днів і погодинної 
//    тарифної ставки
{
return this.rate*20*8;
}
function openDoc()
{
    // var oEmployee=new cEmployee("Арсен Аваков", 2400);
    // alert(oEmployee.name);
    // alert(oEmployee.rate);
    // alert(oEmployee.wage());
}
