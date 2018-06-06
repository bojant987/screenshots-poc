import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import { Button, Input } from 'semantic-ui-react';

import Logo from '../src/Components/Shared/Logo';
import { _Login as Login } from '../src/Components/Auth/Login';
import { SignUp } from '../src/Components/Auth/SignUp';

storiesOf('Logo', module).add('look, a logo', () => <Logo />);

storiesOf('Button', module)
	// .add("loading", () => <Button loading>Click here!</Button>)
	.add('plain', () => <Button primary>Click here!</Button>)
	.add('disabled', () => (
		<Button primary disabled>
			Click here!
		</Button>
	))
	.add('full width', () => (
		<Button primary fluid>
			Click here!
		</Button>
	));

storiesOf('Input', module)
	.add('plain', () => <Input />)
	.add('disabled', () => <Input disabled />)
	.add('error', () => <Input error />)
	.add('label', () => <Input label="Type here" />);

storiesOf('SignUp', module)
	.addDecorator(StoryRouter())
	// .add('with loading', () => <SignUp isLoading />)
	.add('with error message', () => <SignUp errorMessage="Ooops! Something went wrong." />)
	.add('with success message', () => <SignUp successMessage="Oh yeah!" />);

storiesOf('Login', module)
	.addDecorator(StoryRouter())
	// .add('with loading', () => <Login isLoading />)
	.add('with error message', () => <Login errorMessage="Ooops! Something went wrong." />)
	.add('with account activated', () => <Login location={{ search: '?accActivated=true' }} />);
