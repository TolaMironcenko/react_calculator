import React from 'react';
import styles from './CalcButton.module.css'
import classNames from 'classnames';

const CalcButton = ({doubleortripple, children, ...props}) => {
    return (
        <button 
            className={
                doubleortripple === 'double'
                    ? classNames(styles.calc_button, styles.double)
                    : styles.calc_button} {...props}
        >
            {children}
        </button>
    );
};

export default CalcButton;