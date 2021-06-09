console.log("testing");
const insert = (num) => {
  $(".calc-display").val($(".calc-display").val() + num);
};
const equal = () => {
  $(".calc-display").val(eval($(".calc-display").val()));
};
const clearScreen = () => {
  $(".calc-display").val("");
};
const back = () => {
  let value = $(".calc-display").val();
  $(".calc-display").val(value.substring(0, value.length - 1));
};
