<p align="center">
    <a href="https://splidejs.com" target="_blank">
        <img width="120px" src="images/splide-logo.png">
    </a>
    <a href="https://reactjs.org/" target="_blank">
        <img width="120px" src="images/react-logo.png">
    </a>
</p>

# React Splide

**React Splide is the [Splide](https://github.com/Splidejs/splide) component for React.**
* [Document](https://splidejs.com/integration-react-splide/)
* [Splide Demos](https://splidejs.com/)
* [Working Examples](https://splidejs.github.io/react-splide/)

## About

This package is a fork version of [@splidejs/react-splide](https://github.com/Splidejs/react-splide)

**This alternate version contains:**
- Fix `mount` event not trigger from the original one PR [#7](https://github.com/Splidejs/react-splide/pull/7/)
- Async load `@splidejs/splide` module when react component mounted. To make this react component small and also take care of SSR content.


## Installation
Get the latest version by NPM:
```bash
$ npm install @splidejs/react-splide
```

## Usage
### Components
Import `Splide` and `SplideSlide` components:
```javascript
import { Splide, SplideSlide } from '@splidejs/react-splide';
```
And render them like this:
```javascript
<Splide>
  <SplideSlide>
    <img src="image1.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="image2.jpg" alt="Image 2"/>
  </SplideSlide>
</Splide>
```

### CSS
Import [styles](https://splidejs.com/themes/) if you need.
```javascript
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
```

## Options
The `Splide` component accepts [options](https://splidejs.com/options/) as an object:
```javascript
<Splide
  options={ {
    rewind : true,
    width  : 800,
    gap    : '1rem',
  } }
>
</Splide>
```

## Listening to Events
You can listen to all [Splide events](https://splidejs.com/events/) through the `Splide` component. The callback function name is generated by the original event name, adding an "on" prefix, converted to the camelcase without colons. For example, "arrows:mounted" will be "onArrowsMounted".
```javascript
<Splide onArrowsMounted={ ( splide, prev, next ) => { console.log( prev, next ) } }>
```
Note that the first argument is the splide instance, meaning original arguments are shifted by one.

## Examples
Here is a small example:
```javascript
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default () => {
  return (
    <Splide
      options={ {
        rewind : true,
        width  : 800,
        gap    : '1rem',
      } }
    >
      <SplideSlide>
        <img src="image1.jpg" alt="Image 1"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image2.jpg" alt="Image 2"/>
      </SplideSlide>
      <SplideSlide>
        <img src="image3.jpg" alt="Image 3"/>
      </SplideSlide>
    </Splide>
  );
}
```
More examples:
* [Basic example](https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/BasicExample.jsx)
* [Autoplay](https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/AutoplayExample.jsx)
* [Thumbnails](https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/ThumbnailsExample.jsx)
* [Dynamic slides](https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/DynamicSlidesExample.jsx)

## License
React Splide and Splide are released under the MIT license.  
© 2020 Naotoshi Fujita