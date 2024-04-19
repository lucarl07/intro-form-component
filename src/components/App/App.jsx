import Article from '../Article/Article';
import Button from '../Button/Button';
import Container from '../Container/Container';
import Input from '../Input/Input';
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
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
                <Input type='text' placeholder='Email address' />
                <Input type='password' placeholder='password' />
                <Button value='Claim your free trial' />
            </Container>
        </>
    );
}

export default App;