import React, { useState } from 'react';
import Emoji from 'react-emojis';
import validateColor from 'validate-color';

// React Syntax Highlighter
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco';

// Import components
import ForkMeOnGithub from './components/ForkMeOnGithub';
import Footer from './components/Footer';

// Import styles
import './App.scss';
import ButtonCopyToClipboard from './components/ButtonCopyToClipboard';

SyntaxHighlighter.registerLanguage('javascript', js);

const renderStaticDocumentation = () => (
  <>
    <div className="fork-me-on-github__item">
      <ForkMeOnGithub
        repo="https://github.com/whatthefoo/fork-me-on-github"
        colorBackground="red"
        colorOctocat="yellow"
        isDocumentation
      />
      <ButtonCopyToClipboard
        text={
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="red"
  colorOctocat="yellow"
/>`
        }
      />
      <SyntaxHighlighter style={docco}>
        {
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="red"
  colorOctocat="yellow"
/>`
        }
      </SyntaxHighlighter>
    </div>
    <div className="fork-me-on-github__item">
      <ForkMeOnGithub
        repo="https://github.com/whatthefoo/fork-me-on-github"
        colorBackground="green"
        colorOctocat="#bada55"
        isDocumentation
      />
      <ButtonCopyToClipboard
        text={
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="green"
  colorOctocat="#bada55"
/>`
        }
      />
      <SyntaxHighlighter style={docco}>
        {
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="green"
  colorOctocat="#bada55"
/>`
        }
      </SyntaxHighlighter>
    </div>
    <div className="fork-me-on-github__item">
      <ForkMeOnGithub
        repo="https://github.com/whatthefoo/fork-me-on-github"
        colorBackground="blue"
        colorOctocat="lightblue"
        side="left"
        isDocumentation
      />
      <ButtonCopyToClipboard
        text={
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="blue"
  colorOctocat="lightblue"
  side="left"
/>`
        }
      />
      <SyntaxHighlighter style={docco}>
        {
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="blue"
  colorOctocat="lightblue"
  side="left"
/>`
        }
      </SyntaxHighlighter>
    </div>
    <div className="fork-me-on-github__item">
      <ForkMeOnGithub
        repo="https://github.com/whatthefoo/fork-me-on-github"
        colorBackground="purple"
        colorOctocat="pink"
        isDocumentation
      />
      <ButtonCopyToClipboard
        text={
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="purple"
  colorOctocat="pink"
/>`
        }
      />
      <SyntaxHighlighter style={docco}>
        {
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="purple"
  colorOctocat="pink"
/>`
        }
      </SyntaxHighlighter>
    </div>
    <div className="fork-me-on-github__item">
      <ForkMeOnGithub
        repo="https://github.com/whatthefoo/fork-me-on-github"
        colorBackground="white"
        colorOctocat="black"
        side="left"
        isDocumentation
      />
      <ButtonCopyToClipboard
        text={
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="white"
  colorOctocat="black"
  side="left"
/>`
        }
      />
      <SyntaxHighlighter style={docco}>
        {
`<ForkMeOnGithub
  repo="https://github.com/whatthefoo/fork-me-on-github"
  colorBackground="white"
  colorOctocat="black"
  side="left"
/>`
        }
      </SyntaxHighlighter>
    </div>
  </>
);

const App = () => {
  const [colorBackgroundState, setColorBackgroundState] = useState('');
  const [colorOctocatState, setColorOctocatState] = useState('');
  const [repoState, setRepoState] = useState('');
  const colorBackgroundIsValid = colorBackgroundState && validateColor(colorBackgroundState);
  const colorOctocatIsValid = colorOctocatState && validateColor(colorOctocatState);
  const repoIsValid = url => /https:\/\/github.com\/([a-z0-9/\-%@?&])+/.test(url);
  const theString = () => (`<ForkMeOnGithub
  repo="${repoIsValid(repoState) ? repoState : 'https://github.com/whatthefoo/fork-me-on-github'}"
  colorBackground="${colorBackgroundIsValid ? colorBackgroundState : 'black'}"
  colorOctocat="${colorOctocatIsValid ? colorOctocatState : 'white'}"
/>`);
  return (
    <>
      <div className="app">
        <ForkMeOnGithub repo="https://github.com/whatthefoo/fork-me-on-github"/>
        <div className="fork-me-on-github-docs">
          <div className="header">
            <div className="logo-top">
              <Emoji emoji="octopus"/>
            </div>
            <h1>Fork me on GitHub</h1>
            <h2>A fresher 'Fork me on GitHub' callout, now on React</h2>
            <p>Documentation on <em>props</em> can be found at the <a className="link" href="https://github.com/whatthefoo/fork-me-on-github">GitHub repository</a> or at <a className="link" href="https://www.npmjs.com/fork-me-on-github/">npm</a>.</p>
            <div className="build-me-one-of-those">
              <h3>Build yours right here!</h3>
              <div className="user-input">
                <div className="user-input__item">
                  <label htmlFor="repoState" className="visually-hidden">
                    Repository
                  </label>
                  <input
                    type="text"
                    id="repoState"
                    onChange={e => {
                      setRepoState(e.target.value);
                    }}
                    value={repoState ? repoState : ''}
                    placeholder={repoState ? repoState : 'URL to repository'}
                    autoComplete="lol"
                    className={`input-text${repoIsValid(repoState) ? ' valid' : repoState === '' ? '' : ' invalid'}`}
                  />
                  {!repoIsValid(repoState) && repoState !== '' &&
                    <p className="warning">URL to repository is not valid</p>
                  }
                </div>
                <div className="user-input__item">
                  <label htmlFor="colorBackgroundState" className="visually-hidden">
                    Background color
                  </label>
                  <input
                    type="text"
                    id="colorBackgroundState"
                    onChange={e => {
                      setColorBackgroundState(e.target.value);
                    }}
                    value={colorBackgroundState ? colorBackgroundState : ''}
                    placeholder="Background color"
                    autoComplete="lol"
                    className={`input-text${colorBackgroundIsValid ? ' valid' : colorBackgroundState === '' ? '' : ' invalid'}`}
                  />
                  {!colorBackgroundIsValid && colorBackgroundState !== '' &&
                    <p className="warning">Background color is not valid</p>
                  }
                </div>
                <div className="user-input__item">
                  <label htmlFor="colorOctocatState" className="visually-hidden">
                    Octocat color
                  </label>
                  <input
                    type="text"
                    id="colorOctocatState"
                    onChange={e => {
                      setColorOctocatState(e.target.value);
                    }}
                    value={colorOctocatState ? colorOctocatState : ''}
                    placeholder="Octocat color"
                    autoComplete="lol"
                    className={`input-text${colorOctocatIsValid ? ' valid' : colorOctocatState === '' ? '' : ' invalid'}`}
                  />
                  {!colorOctocatIsValid && colorOctocatState !== '' &&
                    <p className="warning">Octocat color is not valid</p>
                  }
                </div>
              </div>
              <div className="fork-me-on-github__item">
                <ForkMeOnGithub
                  repo={`https://github.com/${repoState}`}
                  colorBackground={colorBackgroundState}
                  colorOctocat={colorOctocatState}
                  isDocumentation
                />
                <ButtonCopyToClipboard
                  text={theString()}
                />
                <div className="limited">
                  <SyntaxHighlighter style={docco}>
                    {theString()}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="limited">
          {renderStaticDocumentation()}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default App;
