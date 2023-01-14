export const avoidedDuplicationData = (
  currentData: any[] | null,
  newData: any[] | undefined,
  key: string
) => {
  if (!newData) {
    return currentData;
  }

  const existingValues = currentData?.map(
    (item) => item[key]
  );

  const filteredData = newData.filter(
    (item) => !existingValues?.includes(item[key])
  );

  return [
    ...(currentData || []),
    ...filteredData,
  ];
};
