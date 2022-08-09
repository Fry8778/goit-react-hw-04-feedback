import React from 'react';
import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/feedbackOptions';
import Statistics from '../statistics/statistics';
import NotificationMessage from '../notificationMessage/notificationMessage';
import styles from '../formFeedback/formFeedback.module.css';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const options = ['good', 'bad', 'neutral'];
  const total = good + bad + neutral;
  const positivePercentage = total ? Math.ceil((good / total) * 100) : 0;

  const handleLeaveFedback = e => {
    e.preventDefault();
    const name = e.target.name;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      default:
        console.log('default case');
    }
  };

  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Please leave feedback</h1>
      <div>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFedback}
        />
      </div>

      <h2>Statistics</h2>
      {total ? (
        <Statistics
          stGood={good}
          stBad={bad}
          stNeutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <NotificationMessage title="There is no feedback" />
      )}
    </div>
  );
};

export default Feedback;