import React, {forwardRef} from 'react';

const forwardComponent = forwardRef((props, ref) => (
    <button ref={ref}>{props.name}</button>
));

export default forwardComponent;