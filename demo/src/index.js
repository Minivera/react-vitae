import React, {Component} from 'react'
import {render} from 'react-dom'

import { Resume } from '../../src'
import resumeData from './resume.json';

class Demo extends Component {
  render() {
    return (
      <Resume schema={resumeData}/>  
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
const bulmaCss = document.createElement('link');
bulmaCss.href = 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css';
bulmaCss.rel = 'stylesheet';
const fontAwesome = document.createElement('script');
fontAwesome.src = 'https://use.fontawesome.com/releases/v5.0.8/js/all.js';

document.querySelector('head').appendChild(bulmaCss);
document.querySelector('body').appendChild(fontAwesome);