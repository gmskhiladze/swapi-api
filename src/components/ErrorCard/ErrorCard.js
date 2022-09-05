import React from "react";

function ErrorCard({errors}) {
    const {errorCode, errorMessage} = errors;

    return (
        <div>
            <div>
                <span>{errorCode}</span>
                <p>{errorMessage}</p>
            </div>
        </div>
    );
}

export default ErrorCard;
