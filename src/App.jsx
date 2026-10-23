import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// Added imports.
import PropsDisplayer from './PropsDisplayer'
import City from './City'
import Address from './Address'
import Pet from './Pet'
import Greeting from './Greeting'
import FullName from './FullName'
import ComplexComment from './ComplexComment'
import Comment from './Comment'
import Callout from './Callout'
import MoviesList from './MovieList'
import BigCats from './BigCats'
import MoodChanger from './MoodChanger'
import Emoji from './Emoji'
import BirthdayTranslator from './BirthdayTranslator'
import Weather from './Weather'
import LoginForm from './LoginForm'
import ExplodingBomb from './Bomb'
import Calculator from './Calculator'
// Added imports end.
import './App.css'

const divStyle = {
  background: 'lightblue',
  padding: '1em',
  fontWeight: 'bold'
};

function ExampleComponent() {
  return (
    <div style={divStyle} className="ExampleComponent componentBox">
      <h1>My Example Component</h1>
      <p>My first React component!</p>
    </div>
  )
}

function Welcome(props) { // custom Welcome component
  return (
    <div className="componentBox"> {/* if the 'name' prop exists, render it on the screen */}
      <h3 style={{color: 'blue', textTransform: 'uppercase'}} >Welcome {props.name}!</h3> {/* if this component has children, render them here */}
      {props.children}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  const spiderman = { name: 'Spiderman', alterEgo: 'Peter Parker', catchPhrase: 'With great power comes great responsibility' };
  // single parent <div> element
  const spideyJSX = (<div>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </div>);
  // single parent fragment element
  const spideyJSXFragment = (<>
    <h3>{spiderman.name}</h3>
    <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
  </>);

  const jsxElement = <h1 className="greeting">Hello World</h1>

  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://avatarfiles.alphacoders.com/163/thumb-350-163637.webp'
    },
  };

  return (
    <>
      {/* Added code. */}
      <ExampleComponent />
      {/* Exercise 1. */}
      <Greeting />
      <Greeting name="Wendy">
        <p>Im Petter Pan</p>
      </Greeting>
      {/* Exercise 1 end. */}
      {/* Exercise 2, 4 & 5. */}
      <BigCats />
      {/* Exercise 2, 4 & 5 end. */}
      {/* Exercise 3. */}
      <Emoji />
      {/* Exercise 3 end. */}
      {/* Exercise 6. */}
      <Calculator />
      {/* Exercise 6 end. */}
      <ExplodingBomb />
      <LoginForm />
      <Weather />
      <BirthdayTranslator />
      <MoodChanger />
      <MoviesList />
      <ComplexComment
      author={comment.author}
      date={comment.date}
      text={comment.text} />
      <Comment
      author={comment.author}
      date={comment.date}
      text={comment.text} />
      <FullName first="Kendrick" middle="Lamar" last="Duckworth" />
      <Callout title="Nested React Component"
        message="Simple message with a fancy box applied via composition">
          <FullName first="Elon" last="Musk" />
      </Callout>
      <Pet type="Turtle" name="Flash" colour="Green" />
      <Address street="9 Cloud Dr" />
      <City name="Sydney" />
      <City name="Melbourn" state="VIC" />
      <City name="Chicago" state="Illinois" country="USA" />
      <City name="Newcastle">
        <p>Newcastle is a harbour city in the Australian state of New South Wales.</p> {/* children elements of City */}
        <p><strong>Population:</strong> 322,278 (2016)</p> {/* children elements of City */}
      </City>
      <PropsDisplayer name="Harry Styles" age={29} pets={["cat", "dog", "goldfish"]} reactLogo={reactLogo} buttonCount={count} />
      <Welcome name="students"> <p>Children of Welcome</p></Welcome>
      <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      {jsxElement}
      {spideyJSX}
      {spideyJSXFragment}
      {/* Added code end. */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
