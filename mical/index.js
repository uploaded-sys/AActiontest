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
  if (el == 0) {
    return "infinite";
  }
  let s1 = 360 / el;
  si = si.tostring().split('').at(0)
  si = Number(si)
  if (s1 % 2 === 0) {
    return s1 - 1;
  }
  if (s1 % 2 === 1) {
    if (objst === true) {
      return s1 - 1;
    } else {
      return s1;
    }
  }
  return 'we are fixing this error at our end'
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
