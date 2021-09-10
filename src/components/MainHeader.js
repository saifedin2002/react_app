import React from 'react';
import '../App.scss';

class MainHeader extends React.Component {
	render() {
		const title = {
			develpoer: 'web ',
			Design: 'Design'
		};
		let client = 'web';
		let clientInfo = {
			firstName: 'Saifedin',
			lastName: 'AbdAlhadi'
		};
		return (
			<header className="main_header">
				<div> hello {`${clientInfo.firstName} ${clientInfo.lastName}`} </div>
				<h1>
					{
						client === 'web' ? title.develpoer :
						title.Design}
					is my life
				</h1>
			</header>
		);
	}
}

export default MainHeader;
