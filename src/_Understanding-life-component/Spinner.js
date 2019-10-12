import React from 'react';

const Spinner = (prop) => {
    return (
        <div className={"ui active dimmer"}>
            <div className={"ui big text loader"}>
                {prop.message}
            </div>
        </div>
    );
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;