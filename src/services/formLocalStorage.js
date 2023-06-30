const EVALUATION_ITEM_FORM = "evaluation_item";

if (!JSON.parse(localStorage.getItem(EVALUATION_ITEM_FORM))) {
  localStorage.setItem(EVALUATION_ITEM_FORM, JSON.stringify([]));
}

const readEvaluations = () =>
  JSON.parse(localStorage.getItem(EVALUATION_ITEM_FORM));
