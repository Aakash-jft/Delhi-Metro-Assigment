let st1 = document.getElementById("start");
let st2 = document.getElementById("end");
let payment = document.getElementById("method");
let cal = document.getElementById("calculate");
let total = document.getElementById("total");

function calculate() {
  let first = Number(st1.value);
  let second = Number(st2.value);
  let meth = payment.value;

  let diff = Math.abs(first - second);
  console.log(price(diff, meth));
  let cost = price(diff, meth);
  total.innerText = `Final Prize : ₹${cost}`
}


function price(N, meth) {
  let val = 0;
  if (N < 5) {
    val = 10;
  } else if (N >= 5 && N <= 8) {
    val = 20;
  } else if (N > 8 && N <= 12) {
    val = 30;
  } else if (N > 12 && N <= 16) {
    val = 40;
  } else if (N > 16 && N <= 20) {
    val = 50;
  } else if (N > 20 && N <= 26) {
    val = 60;
  }

  if (val == 10) {
    return val;
  } else {
    if (meth == "card") {
      val = val - (val * 0.1);
      return val;
    } else {
      return val;
    }
  }
}
