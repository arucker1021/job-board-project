import { mount } from 'enzyme';
import React from 'react';
import { Copy } from '../Copy';
import { SkipToMainLink } from './SkipToMainLink';
import { NavigationBar } from './';
import { RoundedProfileIcon } from './RoundedProfileIcon';


describe('NavigationBar component tests', () => {
  test('NavigationBar should output skip to main content Link', () => {
      const dom = mount(
          <NavigationBar name={"Spiderman"} role={"Friendly Neighbor"} />
      );

      const skipToMain = dom.find(SkipToMainLink);

      expect(skipToMain.at(0).text()).toEqual('Skip to Main Content');
  });

  test('NavigationBar should output Profile Info with expected values', () => {
    const dom = mount(
        <NavigationBar name={"Spiderman"} role={"Friendly Neighbor"} />
    );

    const copyText = dom.find(Copy);

    expect(copyText.at(0).text()).toEqual('Spiderman');
    expect(copyText.at(1).text()).toEqual('Friendly Neighbor');

  });

  test('NavigationBar should output a RoundedProfileIcon', () => {
    const dom = mount(
        <NavigationBar name={"Spiderman"} role={"Friendly Neighbor"} />
    );

    const icon = dom.find(RoundedProfileIcon);

    expect(icon.at(0).props().image.alt).toEqual('Profile picture for Spiderman');

  });
});