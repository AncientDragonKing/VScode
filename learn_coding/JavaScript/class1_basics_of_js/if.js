
// javascipt和 python一樣有四則運算
// 字串也可以做合併(+)

let score = 80;

if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
// 這是條件判斷
// if (條件) {動作}

const score2 = 75;

if (score2 >= 90) {
  console.log("優秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// 和python不同的是在elif在這裡沒有被簡化

// if裡面也可以放if

// 三位運算子(簡化寫法)
let age = 20;
let result = (age >= 18) ? "成年人" : "未成年";
console.log(result);

// 在這裡python條件判斷的and被寫成&&，or被寫成||，not被寫成！