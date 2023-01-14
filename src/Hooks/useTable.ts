const useTable = () => {
  const getNumberOfPages = (
    rowCount: any,
    rowsPerPage: any
  ) => {
    return Math.ceil(rowCount / rowsPerPage);
  };

  const toPages = (pages: number) => {
    const results = [];

    for (let i = 1; i < pages; i++) {
      results.push(i);
    }

    return results;
  };

  return { getNumberOfPages, toPages };
};

export default useTable;
