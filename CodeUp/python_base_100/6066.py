# 6066: 정수 3개 입력받아 짝/홀 출력하기
# 시간제한:1초 / 메모리제한:128MB

for i in map(int, input().split()):
    if i % 2 == 0:
        print('even')
    else:
        print('odd')