import React from "react";

const ProductPage = ({ productInfo }) => {
    // Don't need to map. Create styled components in this folder, <div> <h1>{productInfo.cbd}</h1></div> will function the same
    return (
        <div>
            {Object.values(productInfo).map(info => {
                return <h1>{info}</h1>;
            })}
        </div>
    );
};

export default ProductPage;
