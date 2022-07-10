import React from "react";

const VariantForm = () => {
  return (
    <>
      <div className="d-flex mb-3">
        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-1"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-1">
              XS
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-2"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-2">
              S
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-3"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-3">
              M
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-4"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-4">
              L
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-5"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-5">
              XL
            </label>
          </div>
        </form>
      </div>
      <div className="d-flex mb-4">
        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-1"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-1">
              Black
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-2"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-2">
              White
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-3"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-3">
              Red
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-4"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-4">
              Blue
            </label>
          </div>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-5"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-5">
              Green
            </label>
          </div>
        </form>
      </div>
    </>
  );
};

export default VariantForm;
