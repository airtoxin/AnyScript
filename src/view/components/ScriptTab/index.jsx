import React, { Component } from 'react';
import { Tabs, TabGroup, Tab } from 're-bulma';

export default class ScriptTab extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <Tabs>
        <TabGroup>
          <Tab>Tab1</Tab>
          <Tab>Tab2</Tab>
          <Tab>Tab3</Tab>
        </TabGroup>
      </Tabs>
    );
  }
}
