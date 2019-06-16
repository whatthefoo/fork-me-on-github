import React, { Component } from 'react';
import Emoji from 'react-emojis';

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

class App extends Component {
  renderDocumentation () {
    return (
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
  }
  render () {
    return (
      <>
        <div className="app">
          <ForkMeOnGithub repo="https://github.com/whatthefoo/fork-me-on-github"/>
          <div className="fork-me-on-github-docs">
            <div className="header">
              <div className="header__content">
                <h1><Emoji emoji="octopus"/>&nbsp;Fork me on GitHub&nbsp;<Emoji emoji="octopus"/></h1>
                <h2>A fresher 'Fork me on GitHub' callout, now on React</h2>
                <p>Documentation on <em>props</em> can be found at the <a className="link" href="https://github.com/whatthefoo/fork-me-on-github">GitHub repository</a> or at <a className="link" href="https://www.npmjs.com/fork-me-on-github/">npm</a>.</p>
                {this.renderDocumentation()}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
}

export default App;
