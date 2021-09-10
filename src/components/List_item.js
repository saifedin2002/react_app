import React from 'react';
import '../App.scss';
import Items from './Items';

class List_item extends React.Component {
	render() {
		return (
			<div>
				<Items
					p={{
						media: 'Facebook',
						id: 'facebook',
						img: 'https://picsum.photos/seed/picsum/60'
					}}
				/>
				<Items
					p={{
						media: 'Youtube',
						id: 'youtube',
						img: 'https://picsum.photos/seed/picsum/61'
					}}
				/>
				<Items
					p={{
						media: 'Instagram',
						id: 'instagram',
						img: 'https://picsum.photos/seed/picsum/62'
					}}
				/>
			</div>
		);
	}
}

export default List_item;
