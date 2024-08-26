import React from "react";
import "../styles/Pagination.css"; // Custom CSS for Pagination

interface PaginationProps {
    currentPage: number;
    totalResults: number;
    resultsPerPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalResults,
    resultsPerPage,
    onPageChange,
}) => {
    const totalPages = Math.ceil(totalResults / resultsPerPage);

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="d-flex justify-content-start my-4 pagination-wrapper">
            <div className="pagination-container">
                <button
                    className="btn btn-dark btn-sm mx-2 pagination-prev"
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-left"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                        />
                    </svg>
                </button>
                <span className="pagination-page-numbers align-self-center">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="btn btn-dark btn-sm mx-2 pagination-next"
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-right"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Pagination;

// This component renders the pagination buttons for the user to navigate between pages of results.
