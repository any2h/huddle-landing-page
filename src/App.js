import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/GlobalStyles';
import content from './content'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

function App() {

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
        <Container>
          {cardElements}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
