import { html } from 'lit-element';

export const SharedStyles = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 1.5rem;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h1, h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  h3 {
    color: var(--app-dark-text-color);
  }

  h1 > a, h2 > a, h3 > a {
    color: var(--app-dark-text-color);
  }

  a {
    font-weight: bold;
    color: var(--app-primary-color);
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }
</style>
`;
