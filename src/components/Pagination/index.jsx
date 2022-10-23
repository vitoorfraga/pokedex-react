import React from "react";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;

  return (
    <div className="pagination-container">
      <button onClick={onLeftClick}>Left</button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>Right</button>
    </div>
  );
};

export default Pagination;
