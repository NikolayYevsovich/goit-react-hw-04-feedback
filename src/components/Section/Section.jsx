import PropTypes from 'prop-types';
import { SectionTitle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
