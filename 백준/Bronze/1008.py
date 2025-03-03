# https://www.acmicpc.net/problem/1008
# 문제10998번.A / B
# 시간: 2초, 메모리: 128MB



# 입력
'''
1. 정수 A, B
- 1 < A,B < 10
'''



# 출력
'''
1. A / B 결과 출력
'''



# 코드
import sys

sys.stdin = open('input_text/1008.txt')

A, B = list(map(int, input().split()))
print(A / B)


# 실행 결과: 성공(메모리:30864kb, 시간:68ms)