import React from "react";

export const LoadingSpinner = () => {
  return (
    <div className="spinners__container">
      <div className="text-center">
        <div className="spinner-border spinners__spinner" role="status"></div>
        <div>
          <p className="display-4">
            Estamos generando tu documento, esto puede tardar unos minutos, no
            cierres esta pestaña.
          </p>
        </div>
      </div>
    </div>
  );
};
