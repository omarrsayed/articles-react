export default function actionError(type, error) {
  return {
    type: type,
    error: error.toString(),
  };
}
