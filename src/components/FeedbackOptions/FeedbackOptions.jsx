import PropTypes from 'prop-types';
import { OptionsWrapper, OptionButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      <OptionButton type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </OptionButton>
      <OptionButton type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </OptionButton>
      <OptionButton type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </OptionButton>
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
