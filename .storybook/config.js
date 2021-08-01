import { configure, setAddon } from "@storybook/react";
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

function loadStories() {
    const context = require.context('../src/stories', true, /Story\.jsx$/);
  
    context.keys().forEach(srcFile => {
      interopRequireDefault(context(srcFile));
    });
  }

setAddon(JSXAddon);
configure(loadStories, module); // Input 스토리를 스토리북에 연결함