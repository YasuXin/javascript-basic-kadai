const date = new Date();
const year = String(date.getFullYear());
const month = String(date.getMonth() + 1);
const day = String(date.getDate());

console.log(year + "年" + month + "月" + day + "日");