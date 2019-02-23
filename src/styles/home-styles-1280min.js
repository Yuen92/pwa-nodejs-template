import { html } from 'lit-element';

export const HomeStyles1280 = html`
<style>
  @media (min-width: 1281px){
    section.primary:first-of-type{
      margin: 1.5rem 0rem 0rem 0rem;
    }

    section.primary {
      /* 2 margin => 2 * 1.5 rem */
      /* 6 padding => 6 * 1.5 rem */
      width: calc((100% - (2 * 1.5rem) - (6 * 1.5rem))/ 3);
      margin: 1.5rem 0rem 0rem 1.5rem;
    }

    article.secondary {
      /* 1 margin => 1 * 1.5 rem */
      /* 4 padding => 4 * 1.5 rem */
      width: calc((100% - (1 * 1.5rem) - (4 * 1.5rem))/ 2);
    }
    
    article.secondary:nth-of-type(even){
      margin: 1.5rem 0rem 0rem 1.5rem;
    }

    article.secondary:last-of-type:nth-of-type(odd) {
      width: 100%;
    }
  }
</style>
`;