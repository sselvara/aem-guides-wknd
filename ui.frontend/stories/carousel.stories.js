import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import '../src/site/main.scss';
import '../.storybook/story-styles.css';




storiesOf('Carousel', module)
  .add('Default', () => new Carousel("default").markup)
  .add('Hero', () => new Carousel("cmp-carousel--hero").markup)



  class Carousel {
      constructor(styleClass) {
          this.styleClass = styleClass;
      }

      get markup() {
          return '<div class=\'' + this.styleClass + '\' >'+
          '<div class=\'cmp-carousel\' role=\'group\' aria-roledescription=\'carousel\' data-cmp-delay=\'5000\'>'+
          '<div class=\'cmp-carousel__content\'>'+
          '<div class=\'cmp-carousel__item cmp-carousel__item--active\' role=\'tabpanel\' aria-label=\'Slide 1 of 3\' data-cmp-hook-carousel=\'item\'>'+
          '<div class="cmp-teaser--slide">'+
            '<div class="cmp-teaser">'+
                '<div class="cmp-teaser__image">'+
                '<div data-title="Aerial photo of mountain range" class="cmp-image" itemscope="" itemtype="http://schema.org/ImageObject">'+
                '<img src="https://www.fillmurray.com/1280/800" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="Aerial photo of mountain range" title="Aerial photo of mountain range">'+
                '<meta itemprop="caption" content="Aerial photo of mountain range">'+
                '</div>'+
                '</div>'+
                '<div class="cmp-teaser__content">'+
                '<h2 class="cmp-teaser__title">'+
                '<a class="cmp-teaser__title-link" href="#">Teaser Title</a>'+
                '</h2>'+
                '<div class="cmp-teaser__description">'+
                '<p>Teaser Description</p>'+
                '</div>'+
                '<div class="cmp-teaser__action-container">'+
                '<a class="cmp-teaser__action-link" href="#">Read More</a>'+
                '</div>'+
                '</div>'+
                '</div>'+
          '</div>' +
          '</div>'+
          '</div>'+
          '<div class=\'cmp-carousel__item\' role=\'tabpanel\' aria-label=\'Slide 2 of 3\' data-cmp-hook-carousel=\'item\' aria-hidden=\'true\'>'+
          '<div class=\'image\'>'+
          '<div data-title=\'Snowy mountain glacier\' class=\'cmp-image\' itemscope=\'\' itemtype=\'http://schema.org/ImageObject\'>'+
          '<img src=\'http://fpoimg.com/1280x720?text=Slide 2&bg_color=0085bd&text_color=ffffff\' class=\'cmp-image__image\' itemprop=\'contentUrl\' data-cmp-hook-image=\'image\' alt=\'Snowy mountain glacier\' title=\'Snowy mountain glacier\'>'+
          '<meta itemprop=\'caption\' content=\'Snowy mountain glacier\'>'+
          '</div>'+
          '</div>'+
          '</div>'+
          '<div class=\'cmp-carousel__item\' role=\'tabpanel\' aria-label=\'Slide 3 of 3\' data-cmp-hook-carousel=\'item\' aria-hidden=\'true\'>'+
          '<div class=\'image\'>'+
          '<div data-title=\'Gray lava rock formation\' class=\'cmp-image\' itemscope=\'\' itemtype=\'http://schema.org/ImageObject\'>'+
          '<img src=\'http://fpoimg.com/1280x720?text=Slide 3&bg_color=0085bd&text_color=ffffff\' class=\'cmp-image__image\' itemprop=\'contentUrl\' data-cmp-hook-image=\'image\' alt=\'Gray lava rock formation\' title=\'Gray lava rock formation\'>'+
          '<meta itemprop=\'caption\' content=\'Gray lava rock formation\'>'+
          '</div>'+
          '</div>'+
          '</div>'+
          '<div class=\'cmp-carousel__actions\'>'+
          '<button class=\'cmp-carousel__action cmp-carousel__action--previous\' role=\'button\' aria-label=\'Previous\' data-cmp-hook-carousel=\'previous\'>'+
          '<span class=\'cmp-carousel__action-icon\'></span>'+
          '<span class=\'cmp-carousel__action-text\'>Previous</span>'+
          '</button>'+
          '<button class=\'cmp-carousel__action cmp-carousel__action--next\' role=\'button\' aria-label=\'Next\' data-cmp-hook-carousel=\'next\'>'+
          '<span class=\'cmp-carousel__action-icon\'></span>'+
          '<span class=\'cmp-carousel__action-text\'>Next</span>'+
          '</button>'+
          '</div>'+
          '<ol class=\'cmp-carousel__indicators\' role=\'tablist\' aria-label=\'Choose a slide to display\' data-cmp-hook-carousel=\'indicators\'>'+
          '<li class=\'cmp-carousel__indicator cmp-carousel__indicator--active\' role=\'tab\' aria-label=\'Slide 1\' data-cmp-hook-carousel=\'indicator\' aria-selected=\'true\' tabindex=\'0\'>Title</li>'+
          '<li class=\'cmp-carousel__indicator\' role=\'tab\' aria-label=\'Slide 2\' data-cmp-hook-carousel=\'indicator\' aria-selected=\'false\' tabindex=\'-1\'></li>'+
          '<li class=\'cmp-carousel__indicator\' role=\'tab\' aria-label=\'Slide 3\' data-cmp-hook-carousel=\'indicator\' aria-selected=\'false\' tabindex=\'-1\'></li>'+
          '</ol>'+
          '</div>'+
          '</div>'+
          '</div>';
      }
  }