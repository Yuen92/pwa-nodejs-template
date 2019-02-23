import { html } from 'lit-element';

export const HomeStyles640 = html`
<style>
  @media (min-width: 641px){
    .wrapper{
      padding: 0rem 1.5rem;
    }
    section.primary {
      /* 2 margin => 2 * 1.5 rem */
      /* 6 padding => 6 * 1.5 rem */
      /* width: calc((100% - (2 * 1.5rem) - (4 * 1.5rem))/ 2); */
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      margin: 1.5rem 0rem 0rem 0rem;
    }

    article.secondary {
      margin: 1.5rem 0rem 0rem 0rem;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
      background: var(--app-section-odd-color);
    }

    section.primary:nth-of-type(2n), article.secondary:nth-of-type(odd){
      background: var(--app-section-odd-color);
    }
  }
</style>
`;