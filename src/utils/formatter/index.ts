export const groupArrayByColumn = (array: any[], size: number) => {
  return array.reduce(
    (acc: any[], curr: object, index: number) =>
      (index % size === 0
        ? acc.push([curr])
        : acc[acc.length - 1].push(curr)) && acc,
    []
  );
};
