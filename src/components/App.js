import React, { useState } from 'react';

import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const GoodFeedback = () => {
    setGood(prevState => prevState + 1);
  };

  const NeutralFeedback = () => {
    setNeutral(prevState => prevState + 1);
  };

  const BadFeedback = () => {
    setBad(prevState => prevState + 1);
  };
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

  return (
    <div>
      <Section title="Please level feedback">
        <FeedbackOptions
          onGoodFeedback={GoodFeedback}
          onNeutralFeedback={NeutralFeedback}
          onBadFeedback={BadFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          'There is no feedback'
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};
