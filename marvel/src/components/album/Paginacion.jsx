import Pagination from "react-bootstrap/Pagination";
import "./pagination.css"

export const Paginacion = ({ currentPage, totalPages, setCurrentPage }) => {
	const previousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(currentPage + 1);
		}
	};

	const firstPage = () => {
		setCurrentPage(1);
	};

	const lastPage = () => {
		setCurrentPage(totalPages);
	};

	const selectedPage = (page) => {
		setCurrentPage(page);
	};

	return (
		<Pagination
			className="justify-content-center pagination-lg m-0 p-4">
			{/* <Pagination.First onClick={firstPage} disabled={currentPage === 1} /> */}
			<Pagination.Prev
				onClick={previousPage}
				disabled={currentPage === 1}
			/>
			{currentPage > 2 && (
				<Pagination.Item onClick={firstPage}>{1}</Pagination.Item>
			)}
			{currentPage > 2 && <Pagination.Ellipsis disabled />}

			{currentPage > 2 && (
				<Pagination.Item onClick={(e) => selectedPage(currentPage - 2)}>
					{currentPage - 2}
				</Pagination.Item>
			)}
			{currentPage > 1 && (
				<Pagination.Item onClick={previousPage}>
					{currentPage - 1}
				</Pagination.Item>
			)}
			<Pagination.Item active>{currentPage}</Pagination.Item>
			{currentPage < totalPages - 1 && (
				<Pagination.Item onClick={nextPage}>
					{currentPage + 1}
				</Pagination.Item>
			)}
			{currentPage < totalPages - 2 && (
				<Pagination.Item onClick={(e) => selectedPage(currentPage + 2)}>
					{currentPage + 2}
				</Pagination.Item>
			)}

			{currentPage < totalPages - 2 && <Pagination.Ellipsis disabled />}
			{currentPage < totalPages && (
				<Pagination.Item onClick={lastPage}>
					{totalPages}
				</Pagination.Item>
			)}
			<Pagination.Next
				onClick={nextPage}
				disabled={currentPage === totalPages}
			/>
			{/* <Pagination.Last
				onClick={lastPage}
				disabled={currentPage === totalPages}
			/> */}
		</Pagination>
	);
};
