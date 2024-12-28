function build(elim, valuestat) {
  let h1el = document.getElementById("θ-disp");
  let el = document.getElementById(elim);
  console.log(el.value);
  h1el.innerText = `${valuestat} ${el.value}`;
}

function cal() {
  let el = document.getElementById("θ_val").value;
  let asors = document.getElementById("statelabel").checked;
  console.log(asors);
  let calval = document.getElementById("calval");
  let answer = caltheta(el, asors);
  console.log(answer);
  calval.innerText = `no of images: ${answer}`;
}
const caltheta = (el, objst) => {
  // Normalize angle
  el = parseFloat(el);
  el = ((Math.abs(el) % 360) + 360) % 360;
  
  // Handle special cases
  if (el === 0 || el === 360) return "infinite";
  if (el === 180) return 1;
  if (el === 1) return 359;
  if (el === 359) return 1;
  
  // Calculate number of images more precisely
  let s1 = Math.round(360 / el);
  
  // Handle odd/even cases with symmetry
  if (s1 % 2 === 0) {
    return s1 - 1;
  }
  return objst ? s1 - 1 : s1;
};

function buildsymetrics() {
  let asors = document.getElementById("statelabel").checked;
  console.log(asors);
  let a = document.getElementById("pos");
  let st = "";
  if (asors === true) {
    st = "symmetrical";
  }
  if (asors === false) {
    st = "asymmetrical";
  }
  a.innerText = `object_positon: ${st}`;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { caltheta };
}
