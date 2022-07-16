import {type, type as typeLoop} from '../utils/typical.js';
import React, {useRef, useEffect, memo} from 'react';

const WordTyper = ({
                           sequence,
                           className,
                       }) => {
    const typeRef = useRef(null);

    let finalClassName = '';

    if (className) {
        finalClassName += className();
    }

    useEffect(() => {
        type(typeRef.current, ...sequence, typeLoop);
    });

    return <span className={finalClassName} ref={typeRef}/>;
};

export default memo(WordTyper);
