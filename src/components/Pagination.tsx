import React from "react";

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
        <div className="d-flex justify-content-center my-4">
            <button
                className="btn btn-primary mx-2"
                onClick={handlePrevious}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            <span className="align-self-center">
                Page {currentPage} of {totalPages}
            </span>
            <button
                className="btn btn-primary mx-2"
                onClick={handleNext}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

// This component renders the pagination buttons for the user to navigate between pages of results.
