import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ result }) => (
    <li>
        <h2>Result</h2>
        {result.codeResult.code} [{result.codeResult.format}]
    </li>
);

Result.propTypes = {
    result: PropTypes.object
};

export default Result;
