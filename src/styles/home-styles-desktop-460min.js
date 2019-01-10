import { html } from '@polymer/lit-element';

export const HomeStyles = html`
<style>
  @media (min-device-width: 767px){
    /* TODO: use url(./images/desktop/ddti.jpg) when server-pushed based on viewport will be available */
    section.first{
      background-image: url(./images/shared/ddti.jpg);
      background-size: cover;
    }
    .wrapper {
      max-width: 1280px;
      display: flex;
      flex-wrap: wrap;
    }
    .wrapper > section {
      margin: 12px auto;
    }
    .primary{
      width: calc(100% - 72px);
    }
    .secondary {
      width: calc(100% - 72px);
    }
    article.secondary {
      margin: 12px auto;
      box-shadow: 0 0 5px rgba(0,0,0,.2);
    }
  }
  @media (max-device-width: 767px){
    /* Do not use "background-size: cover;" or it will break the workaround with transform translate for iPhone */
    section.first{
      background-image: url(./images/mobile/ddti.jpg);
      transform: translateY(-70px);
      padding-top: 70px;
      margin-bottom: -70px;
    }
  }
</style>
`;
