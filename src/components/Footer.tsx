import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background-color: #f5f5f5;
  margin-top: auto;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} test-cadexchanger-frontend.</p>
  </FooterContainer>
);

export default Footer;
