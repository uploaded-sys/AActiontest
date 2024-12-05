// * you can read the code to under stand what is happening:
// * link[https://github.com/uploaded-sys/AActiontest/tree/main/mical]
// * It is the main function you can understnd the code and use it accordingly
const caltheta = (el, objst) => {
  if (el == 0) {
    return "infinite";
  }
  let s1 = Math.floor(360 / el);
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
};
