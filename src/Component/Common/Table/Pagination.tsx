import useTable from "../../../Hooks/useTable";

const RenderCustomPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  currentPage,
}: any) => {
  const { getNumberOfPages, toPages } =
    useTable();
  const handlePageNumber = (
    e: React.SyntheticEvent
  ) => {
    let target = e.target as HTMLInputElement;
    onChangePage(Number(target.value));
  };

  const pages = getNumberOfPages(
    rowCount,
    rowsPerPage
  );
  const pageItems = toPages(pages);

  return (
    <nav>
      <ul className="pagination">
        {pageItems.map((page: any) => {
          const className =
            page === currentPage
              ? "page-item active"
              : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default RenderCustomPagination;
