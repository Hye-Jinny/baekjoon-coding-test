# 문제9997번.미니멀리즘 시계
# 시간: 2초, 메모리: 256MB



# 입력
'''
1. 테스트 케이스 T
2. 정수 θ(0≤θ<360)
- 시침이 θ°만큼 시계방향으로 돌아가 있다는 의미
'''



# 출력
'''
1. #{테스트케이스} {시침이 12로부터 몇 도(°) 정도 돌아가 있는지 주어질 때, 지금이 몇 시 몇 분인지 출력}
- 시침이 정확히 12를 가리키는 각도를 0°
- 12시는 0시로 출력
'''



# 접근방법
'''
시침이 360도 회전 = 12시간
1시간 = 시침이 30도 회전
60분 = 시침 30도 회전
2분 = 시침 1도 회전
'''



# 코드
import sys

sys.stdin = open('../input_text/9997.txt')

T = int(input())
for test_case in range(1, T + 1):
    theta = int(input())
    minute = theta * 2 % 60
    hour = theta * 2 // 60 % 12
    
    print(f'#{test_case} {hour} {minute}')
    
    
   
# 실행 결과: 성공(메모리:56,692 kb, 시간:141 ms)