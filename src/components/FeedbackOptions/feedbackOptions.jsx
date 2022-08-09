import React from 'react';
import PropTypes from 'prop-types';
import styles from '../formFeedback/formFeedback.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.feedoptions}>
      {options.map(nameEl => {
        return (
          <li key={nameEl} className={styles.button}>
            <button
            type="button"
            name={nameEl}
              onClick={onLeaveFeedback}
            >
              {nameEl}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;