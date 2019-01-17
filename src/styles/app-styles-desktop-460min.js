import { html } from '@polymer/lit-element';

export const AppStylesDesktop = html`
<style>
  /* Wide layout: when the viewport width is bigger than 460px, layout
  changes to a wide layout. */
  @media (min-width: 460px) {
    .toolbar-list {
      display: block;
    }

    .menu-btn {
      display: none;
    }

    .main-content {
      padding-top: 106px;
    }

    /* The drawer button isn't shown in the wide layout, so we don't
    need to offset the title */
    [main-title] {
      padding-right: 0px;
    }
  }
</style>
`;
