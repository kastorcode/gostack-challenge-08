import React from 'react';
import { Container, FooterText, Icon } from './style';

export default function Footer() {
	return(
		<Container>
			<FooterText>Made with <Icon name="react" color="#6978ff" /> and <Icon name="heart" color="#ff6978" /> by Matheus Ramalho de Oliveira</FooterText>
		</Container>
	);
}