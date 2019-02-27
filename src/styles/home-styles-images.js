import { html } from 'lit-element';

export const HomeStylesImages = html`
<style>
  /* 320x635 */
  section.first{
    background-image: url(./images/320w/ddti_960w_1x.jpg);
    background-image: -webkit-image-set(url(./images/320w/ddti_960w_1x.webp) 1x, url(./images/320w/ddti_960w_1x.jpg) 1x);
    background-size: cover;
  }
  
  @media (min-width: 321px){
    /* 640x400 */
    section.first{
      background-image: url(./images/640w/ddti_960w_1x.jpg);
      background-image: -webkit-image-set(url(./images/640w/ddti_960w_1x.webp) 1x, url(./images/640w/ddti_960w_1x.jpg) 1x);
      background-size: cover;
    }
  }

  @media (min-width: 641px){
    /* 960x350 */
    section.first{
      background-image: url(./images/960w/ddti_960w_1x.jpg);
      background-image: -webkit-image-set(url(./images/960w/ddti_960w_1x.webp) 1x, url(./images/960w/ddti_960w_1x.jpg) 1x);
      background-size: cover;
    }
  }
  @media (min-width: 961px){
    /* 1280x350 */
    section.first{
      background-image: url(./images/1280w/ddti_1280w_1x.jpg);
      background-image: -webkit-image-set(url(./images/1280w/ddti_1280w_1x.webp) 1x, url(./images/1280w/ddti_1280w_1x.jpg) 1x);
      background-size: cover;
    }
  }
  @media (min-width: 1281px){
    /* 1600x350 */
    section.first{
      background-image: url(./images/1600w/ddti_1600w_1x.jpg);
      background-image: -webkit-image-set(url(./images/1600w/ddti_1600w_1x.webp) 1x, url(./images/1600w/ddti_1600w_1x.jpg) 1x);
      background-size: cover;
    }
  }
  @media (min-width: 1601px){
    /* 1920x350 */
    section.first{
      background-image: url(./images/1920w/ddti_1x.jpg);
      background-image: -webkit-image-set(url(./images/1920w/ddti_1x.webp) 1x, url(./images/1920w/ddti_1x.jpg) 1x);
      background-size: cover;
    }
  }
  @media (min-width: 1921px){
    section.first{
      background-image: url(./images/max/ddti_1x.jpg);
      background-image: -webkit-image-set(url(./images/max/ddti_1x.webp) 1x, url(./images/max/ddti_1x.jpg) 1x);
      background-size: cover;
    }
  }
</style>
`;
