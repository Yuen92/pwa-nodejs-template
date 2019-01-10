import { html } from '@polymer/lit-element';

export const HomeStyles = html`
<style>
  /* :first-of-type doesn't work on iPhone */
  section.first  > *{
    max-width: 600px;
  }
  section.first {
    box-shadow: none;
    display: block;
  }
  section.first h1 {
    color: var(--app-section-even-color);
  }
  section.first article {
    color: var(--app-light-text-color);
  }
  section.primary {
    box-shadow: 0 0 5px rgba(0,0,0,.2);
  }
  section, article {
    height: fit-content;
  }
  section.cards-container {
    padding: 0px;
  }
  article.secondary {
    padding: 24px 24px;
    box-shadow: 0 0 5px rgba(0,0,0,.2);
  }
  aside {
    font-size: 12px;
    background: var(--app-sixth-color);
    padding: 1px 20px 1px 20px;
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
