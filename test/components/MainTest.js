'use strict';

import createComponent from 'helpers/shallowRenderHelper';

import App from 'components/app';

describe('app', () => {
  let AppComponent;

  beforeEach(() => {
    AppComponent = createComponent(App);
  });

  it('should have its component name as default className', () => {
    expect(AppComponent.props.className).to.equal('container');
  });
});
