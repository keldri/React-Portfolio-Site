import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


let projectData = [
        {
          "id": 1,
          "title": "Mackenzie",
          "description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
          "img": "https://bb2.mysd.us/media/gene-cms/b/b/bb2-hp-monday_mono.jpg",
          "tags": ["react", "javascript", "sass"],
          "url": "https://www.mackenzie.com",
        },
        {
          "id": 2,
          "title": "Maddie Style",
          "description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
          "img": "https://bb2.mysd.us/media/gene-cms/b/b/bb2-hp-monday_mono.jpg",
          "tags": ["react", "javascript", "css"],
          "url": "https://www.mackenzie.com",
        },
        {
          "id": 3,
          "title": "Robert Allen Design",
          "description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
          "img": "https://bb2.mysd.us/media/gene-cms/b/b/bb2-hp-monday_mono.jpg",
          "tags": ["react", "javascript", "magento"],
          "url": "https://www.mackenzie.com",
        },
        {
          "id": 4,
          "title": "Andersen Tax",
          "description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
          "img": "https://bb2.mysd.us/media/gene-cms/b/b/bb2-hp-monday_mono.jpg",
          "tags": ["react", "javascript", "test2"],
          "url": "https://www.mackenzie.com",
        },
        {
          "id": 5,
          "title": "Vanguard Promotions",
          "description": "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla quis lorem ut libero malesuada feugiat.",
          "img": "https://bb2.mysd.us/media/gene-cms/b/b/bb2-hp-monday_mono.jpg",
          "tags": ["test", "javascript", "css"],
          "url": "https://www.mackenzie.com",
        }];

ReactDOM.render((
	<BrowserRouter>
		<App projects={projectData}/>
	</BrowserRouter>
), document.getElementById('root'))
