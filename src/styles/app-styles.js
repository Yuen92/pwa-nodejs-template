import { html } from 'lit-element';

export const AppStyles = html`
<style>
  :host {
    --app-drawer-width: 256px;
    display: block;

    --app-primary-color: rgb(0, 155, 230);
    --app-secondary-color: rgb(40, 50, 55);
    --app-third-color: rgb(0, 135, 125);
    --app-fourth-color: rgb(240, 240, 240);
    --app-fifth-color: rgb(120, 145, 155);
    --app-sixth-color: rgb(225, 240, 240);
    --app-seventh-color: rgb(195, 230, 250);
    --app-eighth-color: rgb(210, 220, 220);

    --app-dark-text-color: var(--app-secondary-color);
    --app-light-text-color: white;
    --app-light-secondary-text-color: var(--app-fifth-color);
    --app-section-even-color: var(--app-fourth-color);
    --app-section-odd-color: white;

    --app-header-background-color: var(--app-drawer-background-color);
    --app-header-text-color: var(--app-light-text-color);
    --app-header-selected-color: var(--app-primary-color);

    --app-drawer-background-color: var(--app-secondary-color);
    --app-drawer-text-color: var(--app-light-text-color);
    --app-drawer-selected-color: var(--app-light-secondary-text-color);
  }

  @-webkit-keyframes fadeIn {
    from { opacity: 0 }
      to { opacity: 1 }
  }  
  @keyframes fadeIn {
      from { opacity: 0 }
        to { opacity: 1 }
  }
  @-webkit-keyframes translate {
    from { -webkit-transform: translate(200px) }
      to { -webkit-transform: none }
  }  
  @keyframes translate {
      from { transform: translate(200px) }
        to { transform: none }
  }

  app-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background: var(--app-header-background-color);
    color: var(--app-header-text-color);
    
    /* Workaround for standalone install application on iOS */
    /* Look Read Me */
    /* transform: translateY(-50px); */
    /* padding-top: 50px; */
  }

  .toolbar-top {
    background: var(--app-header-background-color);
  }

  [main-title] {
    font-size: 30px;
    /* In the narrow layout, the toolbar is offset by the width of the
    drawer button, and the text looks not centered. Add a padding to
    match that button */
    padding-right: 44px;
  }

  .toolbar-list {
    display: none;
  }

  .toolbar-list > a {
    display: inline-block;
    color: var(--app-header-text-color);
    text-decoration: none;
    line-height: 30px;
    padding: 4px 24px;
  }

  .toolbar-list > a[selected] {
    color: var(--app-header-selected-color);
    border-bottom: 4px solid var(--app-header-selected-color);
  }

  .menu-btn {
    background: none;
    border: none;
    fill: var(--app-header-text-color);
    cursor: pointer;
    height: 44px;
    width: 44px;
  }

  .drawer-list {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px;
    background: var(--app-drawer-background-color);
    position: relative;
  }

  .drawer-list > a {
    display: block;
    text-decoration: none;
    color: var(--app-drawer-text-color);
    line-height: 40px;
    padding: 0 24px;
  }

  .drawer-list > a[selected] {
    color: var(--app-drawer-selected-color);
  }

  /* Workaround for IE11 displaying <main> as inline */
  main {
    display: block;
    background: white;
    
    /* Workaround for display header color in standalone iOS when swipe to bottom */
    /* background: linear-gradient(to bottom, var(--app-header-background-color) -20%, var(--app-header-background-color) 30%, white 0%,white 100%); */
  }

  .main-content {
    padding-top: 64px;
    min-height: 100vh;
  }

  .page {
    display: none;
  }

  .page[active] {
    display: block;
  }

  .page.repeat-view[active] {
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  /* Animation Entry*/
  my-app-install.page.repeat-view[active],
  my-staging.page.repeat-view[active] {
    -webkit-animation: fadeIn 1s,translate 500ms;
    animation: fadeIn 1s, translate 500ms;
  }

  footer {
    padding: 24px;
    background: var(--app-header-background-color);
    color: var(--app-drawer-text-color);
    text-align: center;
  }
</style>
`;
