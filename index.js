// 問題
const qustions = [
  ["1", "2", "3", "4", "5"],
  ["2", "4", "6", "8", "10"],
  ["5", "10", "15", "20", "25"],
  ["3", "6", "9", "12", "15"],
  ["11", "12", "13", "14", "15"],
];

const correct = [12345, 246810, 510152025, 3691215, 1112131415];

// 問題の場所
const numContainer = document.querySelectorAll(".num");
const num1 = document.querySelector(".A");
const num2 = document.querySelector(".B");
const num3 = document.querySelector(".C");
const num4 = document.querySelector(".D");
const num5 = document.querySelector(".E");
const numArry = [num1, num2, num3, num4, num5];
// 答えの場所
const ansContainer = document.querySelectorAll(".ans");
const ans1 = document.querySelector(".F");
const ans2 = document.querySelector(".G");
const ans3 = document.querySelector(".H");
const ans4 = document.querySelector(".I");
const ans5 = document.querySelector(".J");
const ansArry = [ans1, ans2, ans3, ans4, ans5];
// ボタンの要素
const start = document.querySelector(".startBtn");
const end = document.querySelector(".desideBtn");

// 問題を生成
let n = 0;
const makeQuestion = () => {
  /////ランダムの数字を生成(arry2に格納)///
  let arry1 = [];
  let arry2 = [];
  /////配列の範囲を設定
  let startNum = 0;
  let endNum = 5;
  for (let i = startNum; i < endNum; i++) {
    arry1.push(i);
  }
  const len = arry1.length;
  for (let n = len; n > 0; n--) {
    const index = Math.floor(Math.random() * n);
    arry2.push(arry1[index]);
    arry1.splice(index, 1);
  }
  numArry[0].textContent = qustions[n][arry2[0]];
  numArry[1].textContent = qustions[n][arry2[1]];
  numArry[2].textContent = qustions[n][arry2[2]];
  numArry[3].textContent = qustions[n][arry2[3]];
  numArry[4].textContent = qustions[n][arry2[4]];

  n++;
};
makeQuestion();

// クリックして答えに追加
let i = 0;
numArry.forEach((num) => {
  num.addEventListener("click", (e) => {
    if (i < numArry.length) {
      ansContainer[i].textContent = e.target.textContent;
      i++;
    }
  });
});

// クリックして答えから削除
const nams = document.querySelectorAll(".ans");
nams.forEach((nam) => {
  nam.addEventListener("click", (e) => {
    if (e.target.textContent !== "") {
      e.target.textContent = "";
      i--;
    }
  });
});

// スタートボタンを押して問題を生成
// start.addEventListener("click", () => {
//   let count = 0;
//   ansContainer.forEach((ans) => {
//     if (ans.textContent !== "") {
//       count++;
//       ans.textContent = "";
//     }
//   });
//   console.log(count);
//   i = i - count;
//   makeQuestion();
// });

console.log(qustions[0]);
let k = 0;
end.addEventListener("click", () => {
  const final =
    document.querySelector(".F").textContent +
    document.querySelector(".G").textContent +
    document.querySelector(".H").textContent +
    document.querySelector(".I").textContent +
    document.querySelector(".J").textContent;

  const aaa = correct[k].toString();
  console.log(typeof aaa);
  console.log(typeof final);

  if (final === aaa) {
    k++;
    alert("すばらしぃぃぃぃ！！");
    let count = 0;
    ansContainer.forEach((ans) => {
      if (ans.textContent !== "") {
        count++;
        ans.textContent = "";
      }
    });
    console.log(count);
    i = i - count;
    makeQuestion();
  } else {
  }
});
