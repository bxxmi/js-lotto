import { SINGLE_LOTTO_PRICE } from "../data/constant.js";

export const calcLottoCount = (price) => {
  return price / SINGLE_LOTTO_PRICE;
};

<<<<<<< HEAD
export const createRandomLottoNumber = () => {
  return Math.floor(Math.random() * 45) + 1;
};

export const priceWithCommas = (price) => {
  return price.toLocaleString();
};
=======
// 1부터 45까지의 랜덤 숫자 생성
export const createRandomLottoNumber = () => {
  return Math.floor(Math.random() * 45) + 1;
};
>>>>>>> b3ae1c8 ([feat] 랜덤 번호 생성 로직 추가)
