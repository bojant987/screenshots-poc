import { configure } from '@storybook/react';
import 'loki/configure-react';

import 'semantic-ui-css/semantic.min.css';
import '../assets/styles/main.scss';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
