import Article from '../Article/Article';
import Container from '../Container/Container';
import './App.css'

const App = () => {
    const data = {
        title: 'Learn to code by watching others',
        content: 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.'
    }

    return (
        <>
            <Article title={data.title} content={data.content} />
            <Container>
                <p>Lorem ipsum</p>
            </Container>
        </>
    );
}

export default App;