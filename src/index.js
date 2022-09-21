import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const defaultPosts = [
    {
        id: 1,
        author: 'Subhas Chandra Bose',
        text: 'One individual may die for an idea, but that idea will, after his death, incarnate itself in a thousand lives',
        comments: [
            {
                id: 11,
                text: 'Very True'
            }
        ]
    },
    {
        id: 2,
        author: 'APJ Abdul Kalam',
        text: 'A dream is not that which you see while sleeping, it is something that does not let you sleep.',
        comments: [
            {
                id: 21,
                text: 'Respect'
            },
            {
                id: 22,
                text: 'Choose your dream wisely'
            }
        ]
    },
    {
        id: 3,
        author: 'Steve Jobs',
        text: 'Don’t let the noise of others’ opinions drown out your own inner voice.',
        comments: []
    }
]
if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(defaultPosts));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /> </BrowserRouter>);
