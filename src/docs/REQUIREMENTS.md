## STEP 1. 콘솔 기반 로또 게임

- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력한다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
  - 1등: 6개 번호 일치 / 2,000,000,000원
  - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
  - 3등: 5개 번호 일치 / 1,500,000원
  - 4등: 4개 번호 일치 / 50,000원
  - 5등: 3개 번호 일치 / 5,000원

## STEP 1-1. 추가 요구 사항

- 로또 구매 금액은 0원 및 음수, 공백 포함 값은 입력할 수 없다.
- 로또 구매 금액 입력 시 1000원 단위만 입력이 가능하다.
- 로또 번호와 당첨 번호, 보너스 번호 모두 1 ~ 45까지의 수이다.
- 보너스 번호는 당첨 번호와 겹칠 수 없다.
- 모든 로또 번호 내의 숫자는 중복이 될 수 없다.
- 모든 로또 번호는 6개의 숫자로만 이루어져 있다.

## STEP 2. 요구 사항

- 로또 번호는 오름차순으로 정렬하여 보여준다.
- 당첨 통계를 출력한 뒤에는 재시작/종료 여부를 입력받는다.
- 재시작할 경우 구입 금액 입력부터 게임을 다시 시작하고, 종료하는 경우 그대로 프로그램을 종료시킨다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 예외를 발생시키고, 에러 메시지를 출력 후 그 부분부터 입력을 다시 받는다.
