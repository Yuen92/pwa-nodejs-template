import { html } from 'lit-element';

export const HomeStyles = html`
<style>
  section {
    padding: 1.5rem 0rem;
    background: var(--app-section-even-color);
  }

  /* :first-of-type doesn't work on iPhone */
  section.cards-container  > * {
    max-width: none;
  }
  section.first {
    box-shadow: none;
    display: block;
    padding: 1.5rem;
    background-color: var(--app-secondary-color);
  }
  section.first h1 {
    color: var(--app-section-even-color);
  }
  section.first article {
    color: var(--app-light-text-color);
  }

  .wrapper{
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
  }
  section.primary {
    height: auto;
    width: 100%;
    max-width: none;
    padding: 1.5rem;
    background: var(--app-section-odd-color);
  }
  section.primary:nth-of-type(2n){
    background: var(--app-section-even-color);
  }

  section, article {
    height: fit-content;
  }
  section.cards-container {
    padding: 0;
  }

  article.secondary:last-of-type, article.secondary:nth-of-type(even) {
    margin: 1.5rem 0rem 1.5rem 0rem;
  }

  article.secondary {
    padding: 1.5rem 1.5rem;
    width: 100%;
    background: var(--app-section-odd-color);
    height: auto;
  }
  
  article.secondary:nth-of-type(odd){
    background: var(--app-section-even-color);
  }

  aside {
    font-size: 12px;
    background: var(--app-sixth-color);
    padding: 0.1rem 2rem 0.1rem 2rem;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
    border-radius: 5px;
    color: var(--app-primary-color);
  }
  aside a {
    color: var(--app-primary-color);
  }
  ul {
    list-style-type: square;
  }
</style>
`;
