import React from "react";
export const handleNewsBadge = (status = null) => {
  switch (status) {
    case "NEW!":
      return <span className="tag is-danger">{status}</span>;
    case "RETURNING":
      return <span className="tag is-light">{status}</span>;
    case "RETURNING!":
      return <span className="tag is-light">{status}</span>;
    default:
      return <span className="tag is-warning">{status}</span>;
  }
};
