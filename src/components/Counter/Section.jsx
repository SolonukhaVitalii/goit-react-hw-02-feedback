import React from 'react';
import PropTypes from 'prop-types';

const Section = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>{children}
        </div>
    );
};

Section.defaultProps = {
    title: "",
};

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.object.isRequired
};

export default Section;