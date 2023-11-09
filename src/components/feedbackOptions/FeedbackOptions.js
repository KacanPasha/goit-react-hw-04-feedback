import React from 'react';
import { Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onGoodFeedback,
  onNeutralFeedback,
  onBadFeedback,
}) => (
  <div>
    <Btn type="button" onClick={() => onGoodFeedback('good')}>
      Good
    </Btn>
    <Btn type="button" onClick={() => onNeutralFeedback('neutral')}>
      Neutral
    </Btn>
    <Btn type="button" onClick={() => onBadFeedback('bad')}>
      Bad
    </Btn>
  </div>
);
