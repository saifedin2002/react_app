import React from 'react';

function Items(_props) {
	return (
		<li className="list_item">
			<img src={_props.p.img} alt={`icon of ${_props.p.media}`} />
			<input type="checkbox" id={_props.p.id} />
			<label htmlFor={_props.p.id}>{_props.p.media}</label>
		</li>
	);
}

export default Items;
