import i from "./2input";
let p = 0;
const input = [1, 1, 1, 4, 99, 5, 6, 0, 99];

/* FIRST PART OF THE PUZZLE */

function calculateState(i) {
  while (p < i.length) {
    i[p] == 1
      ? (i[i[p + 3]] = i[i[p + 1]] + i[i[p + 2]])
      : i[p] == 2
      ? (i[i[p + 3]] = i[i[p + 1]] * i[i[p + 2]])
      : console.log(i[0]);
    p += 4;
  }
}
calculateState(i);
