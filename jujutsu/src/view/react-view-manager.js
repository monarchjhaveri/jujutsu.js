const React = require('react');
const ReactDom = require('react-dom');

export default class ReactViewManager {
  constructor(options) {
    this.options = options;
  }

  init() {
    ReactDom.render(this.options.element, this.options.container);  
  }
}