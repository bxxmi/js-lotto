import {
  checkInputPrice,
  createLottosForAmount,
} from "./controller/lottoController";
import "../src/css/index.css";
import { calcLottoCount } from "./utils/calculate";

let lottoPrice = 0;
let lottoCount = 0;
let lottoNumbers = [];

function getInputPrice() {
  const $priceInput = document.querySelector("#priceInput");
  const price = $priceInput.value;

  let isValidPrice = false;

  isValidPrice = checkInputPrice(price);

  if (isValidPrice) lottoPrice = price;

  return isValidPrice;
}

function showBuyLottoResult() {
  const $resultSection = document.querySelector("#buyResult");
  const $resultLabel = document.querySelector("#buyResultLabel");
  const $lottoForm = document.querySelector("#lottoForm");

  lottoCount = calcLottoCount(lottoPrice);

  $resultSection.classList.remove("hide");
  $lottoForm.classList.remove("hide");
  $resultLabel.innerText = `총 ${lottoCount}개를 구매했습니다.`;
}

function createLottoIcons() {
  const $lottoIconContainer = document.querySelector("#lottos");
  $lottoIconContainer.innerHTML = "";

  for (let i = 0; i < lottoCount; i++) {
    const $iconContainer = document.createElement("div");
    $iconContainer.classList.add("lotto-item", "mx-1", "text-4xl");

    const $icon = document.createElement("span");
    $icon.textContent = "🎟️ ";
    $iconContainer.appendChild($icon);

    $lottoIconContainer.appendChild($iconContainer);
  }
}

function toggleLottoNumbers() {
  const $lottoIconContainer = document.querySelector("#lottos");

  [...$lottoIconContainer.children].forEach((iconContainer, index) => {
    let $numberContainer = iconContainer.querySelector(".number-container");
    if (!$numberContainer) {
      $numberContainer = document.createElement("div");
      $numberContainer.classList.add("number-container");
      $numberContainer.textContent = lottoNumbers[index].join(", ");
      iconContainer.appendChild($numberContainer);
    } else {
      $numberContainer.classList.toggle("hide");
    }
  });
}

function playGame() {
  showBuyLottoResult();
  createLottoIcons();

  lottoNumbers = createLottosForAmount(lottoCount);

  const $showLottoNumberButton = document.querySelector("#showLottoNumbers");
  $showLottoNumberButton.removeEventListener("click", toggleLottoNumbers);
  $showLottoNumberButton.addEventListener("click", toggleLottoNumbers);
}

function startGame() {
  const $buyButton = document.querySelector("#buyButton");

  $buyButton.addEventListener("click", () => {
    const isPossiblePlay = getInputPrice();

    if (!isPossiblePlay) return;

    playGame();
  });
}

startGame();
