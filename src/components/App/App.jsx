import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Container, Title } from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleVote = voteName => {
    this.setState(prevState => {
      const value = this.state[voteName];
      return {
        [voteName]: value + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (!totalFeedback) {
      return 0;
    }
    const result = (good / totalFeedback) * 100;
    return Number(result.toFixed(2));
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const onHandleVote = this.handleVote;
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions onLeaveFeedback={onHandleVote} />
        </Section>
        <Section>
          <Title>Statistics</Title>
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          )}
        </Section>
      </Container>
    );
  }
}
