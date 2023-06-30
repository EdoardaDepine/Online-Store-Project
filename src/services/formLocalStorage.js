const EVALUATION_ITEM_FORM = "evaluation_item";

if (!JSON.parse(localStorage.getItem(EVALUATION_ITEM_FORM))) {
  localStorage.setItem(EVALUATION_ITEM_FORM, JSON.stringify([]));
}

const readEvaluations = () =>
  JSON.parse(localStorage.getItem(EVALUATION_ITEM_FORM));

const saveEvaluationsInCart = (evaluations) =>
  localStorage.setItem(EVALUATION_ITEM_FORM, JSON.stringify(evaluations));

export const addEvaluationsInCart = (evaluation) => {
  const evaluationItem = {
    email: evaluation.email,
    message: evaluation.message,
  };
  if (evaluationItem) {
    const cartEvaluations = readEvaluations();
    cartEvaluations.length === 0
      ? saveEvaluationsInCart([evaluationItem])
      : saveEvaluationsInCart([...cartEvaluations, evaluationItem]);
  }
};
