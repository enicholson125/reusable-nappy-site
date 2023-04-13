import React from 'react';
import NappyKit from '../components/NappyKit';

const Kits = () => {
return (
	<div
	style={{
		display: 'flex',
		alignItems: 'Right',
		justifyContent: 'center',
		flexDirection: 'column',
	}}
	>
	<h1>Nappy Kits Available</h1>
	<NappyKit id="newborn_blue" title="Newborn Blue" image='example-nappy' alt='image of blue newborn kit'>This is the blue newborn kit, containing 5 nappies and 3 wipes.</NappyKit>
	<NappyKit id="newborn_green" title="Newborn Green" image='example-nappy' alt='image of green newborn kit'>This is the green newborn kit, containing 6 nappies and 2 wipes.</NappyKit>
	<NappyKit id="1_year_yellow" title="1 Year Yellow" image='example-nappy' alt='image of yellow 1 year kit'>This is the yellow 1 year old kit, containing 5 nappies and 3 wipes.</NappyKit>
	</div>
);
};

export default Kits;
