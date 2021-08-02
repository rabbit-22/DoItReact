function multiply(a, b) {
    return a * b;
  }
  
  function multiplyTwo(a) {
    return multiply(a, 2);
  }

function multiplyX(x){           // 화살표 함수 표현식
    return function(a){          // function multiply = x => a => multiply(a,x);
        return multiply(a,x);
    }
}



const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

const result1 = multiplyThree(3); // 3 * 3 = 9
const result2 = multiplyFour(3);  // 4 * 3 = 12

const result1 = multiplyX(3)(3); // 9
const result2 = multiplyX(4)(3); // 12


 /* -----커링 한번 더 사용해보기----- */
const equation = (a,b,c) => x => ((x*a)*b)+c; // 커링함수: 인자를 나중에 받아 실행할 함수를 생성해주는 함수
const formula = equation(2,3,4);
const x = 10;
const result = formula(x);

/* -----커링 응용하기----- */
const multiply = (a,b) => a * b;
const add = (a,b) => a + b;

const multiplyX = x => a => multiply(a,2);
const addX = x => a => add(x,a);

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);
const formula = x => addFour(multiplyThree(multiplyTwo(x)));
                                   // <--  함수가 실행되는 순서(왼쪽방향)
