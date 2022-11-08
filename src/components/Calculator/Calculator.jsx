import React from 'react';
import styles from './Calculator.module.css'
import CalcButton from '../Calc_button/CalcButton';

const Calculator = () => {
    return (
        <div className={styles.calculator}>
            <section className={styles.screen}>
                0
            </section>
            <section className={styles.buttons}>
                <div className={styles.row_buttons}>
                    <CalcButton>C</CalcButton>
                    <CalcButton>&plusmn;</CalcButton>
                    <CalcButton>&larr;</CalcButton>
                    <CalcButton>&divide;</CalcButton>
                </div>
                <div className={styles.row_buttons}>
                    <CalcButton>7</CalcButton>
                    <CalcButton>8</CalcButton>
                    <CalcButton>9</CalcButton>
                    <CalcButton>&times;</CalcButton>
                </div>
                <div className={styles.row_buttons}>
                    <CalcButton>4</CalcButton>
                    <CalcButton>5</CalcButton>
                    <CalcButton>6</CalcButton>
                    <CalcButton>&#43;</CalcButton>
                </div>
                <div className={styles.row_buttons}>
                    <CalcButton>1</CalcButton>
                    <CalcButton>2</CalcButton>
                    <CalcButton>3</CalcButton>
                    <CalcButton>&minus;</CalcButton>
                </div>
                <div className={styles.row_buttons}>
                    <CalcButton>0</CalcButton>
                    <CalcButton doubleortripple={"double"}>00</CalcButton>
                    <CalcButton>&#61;</CalcButton>
                </div>
            </section>
        </div>
    );
};

export default Calculator;