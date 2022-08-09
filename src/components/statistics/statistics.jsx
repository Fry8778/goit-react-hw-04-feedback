import React from 'react';
import PropTypes from 'prop-types';
import styles from '../formFeedback/formFeedback.module.css';

const Statistics = ({ stGood, stNeutral, stBad, total, positivePercentage }) => (
  <div className={styles.state}>
    <span>good: {stGood}</span>
    <span>bad: {stBad}</span>
    <span>neutral: {stNeutral}</span>
    <span>total: {total}</span>
    <span>positive feedback: {Math.round(positivePercentage)}%</span>
  </div>
);

Statistics.propTypes = {
  stGood: PropTypes.number.isRequired,
  stBad: PropTypes.number.isRequired,
  stNeutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};



export default Statistics;