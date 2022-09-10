export const getPercentage = (firstValue: number, secondValue: number) => {
  const likes = firstValue && firstValue > 0 ? firstValue : 0;
  const dislikes = secondValue && secondValue > 0 ? secondValue : 0;

  if (likes === dislikes) return { firstValue: 50, secondValue: 50 };

  const total = likes + dislikes;
  return {
    firstValue: (likes / total) * 100,
    secondValue: (dislikes / total) * 100,
  };
};
