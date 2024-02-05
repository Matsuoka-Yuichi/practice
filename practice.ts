function increment(num: number) {
    //                 ^^^^^^^^型注釈
      return num + 1;
    }
     
    console.log(increment(999));

    // <input id="email">の文字色を赤色にするDOM操作の例
const emailInput = document.getElementById("email");

emailInput.style.color = "red";