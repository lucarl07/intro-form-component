import Article from '../Article/Article';
import './App.css'

const App = () => {
    const data = {
        title: 'Learn to code by watching others',
        content: 'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.'
    }

    return (
        <>
            <Article title={data.title} content={data.content} />
        </>
    );
}

export default App;