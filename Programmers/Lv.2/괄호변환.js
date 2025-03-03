// https://school.programmers.co.kr/learn/courses/30/lessons/60058
// 코딩테스트연습 < 2020 KAKAO BLIND RECRUITMENT < 문제.괄호 변환

// 입력
/*
1. "균형잡힌 괄호 문자열" p
- p: '(' 와 ')' 로만 이루어진 문자열
- 2 <= p 길이 <= 1,000인 짝수
- 문자열 p를 이루는 '(' 와 ')' 의 개수는 항상 같음
*/

// 출력
/*
1. 주어진 알고리즘을 수행해 "올바른 괄호 문자열"로 변환한 결과를 return
- 만약 p가 이미 "올바른 괄호 문자열"이라면 그대로 return

<알고리즘>
1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다. 
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다. 
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다. 
  3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다. 
  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다. 
  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다. 
  4-3. ')'를 다시 붙입니다. 
  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다. 
  4-5. 생성된 문자열을 반환합니다.
*/

// 코드
// '올바른 괄호 문자열'인지 확인하는 함수
function isCorrectParenthesis(par) {
  let leftParCnt = 0; // 왼쪽 괄호 개수

  for (let p of par) {
    if (p === "(") leftParCnt += 1;
    else leftParCnt -= 1;

    if (leftParCnt < 0) return false;
  }

  return !leftParCnt;
}

// 괄호를 반대로 바꾸는 함수
function reverseParenthesis(par) {
  let reversedPar = "";

  for (let p of par) {
    if (p === "(") reversedPar += ")";
    else reversedPar += "(";
  }

  return reversedPar;
}

// 두 '균형 잡힌 괄호 문자열'로 쪼개는 함수
function splitParenthesis(par) {
  if (!par) return "";

  // '균형 잡힌 괄호 문자열'이 되는 u 찾기
  let leftParCnt = 0;
  for (let lastIdx = 0; lastIdx < par.length; lastIdx++) {
    if (par[lastIdx] === "(") leftParCnt += 1;
    else leftParCnt -= 1;

    if (leftParCnt === 0) {
      const u = par.slice(0, lastIdx + 1);
      const v = par.slice(lastIdx + 1);
      if (isCorrectParenthesis(u)) return u + splitParenthesis(v);
      else
        return (
          "(" +
          splitParenthesis(v) +
          ")" +
          reverseParenthesis(u.slice(1, lastIdx))
        );
    }
  }
}

function solution(p) {
  return splitParenthesis(p);
}

const inputs = require("fs")
  .readFileSync("./input_text/괄호변환.txt")
  .toString()
  .trim()
  .split("\n");

inputs.forEach((testCase) => {
  console.log(solution(testCase.trim()));
});

// 실행 결과: 성공
