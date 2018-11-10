import React from 'react';
import connect from '@vkontakte/vkui-connect';
import '@vkontakte/vkui/dist/vkui.css';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, ListItem } from '@vkontakte/vkui';


function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group title="Items">
          <List>
            <ListItem>Hello</ListItem>
            <ListItem>World</ListItem>
          </List>
        </Group>
      </Panel>
    </View>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));