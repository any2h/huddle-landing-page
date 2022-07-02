import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/GlobalStyles';
import Header from './components/Header';
import Card from './components/Card';
import Cta from './components/Cta';
import Footer from './components/Footer';
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#00252E',
    fontColor: '#00252E',
  },
  mobile: '768px',
}

export default function App() {

  const cardElements = content.map(card =>
    <Card
      key={card.id}
      card={card}
    />
  )

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Header />
        <Container as="main" padding="80px 20px 0 20px">
          {cardElements}
          <Cta />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}
