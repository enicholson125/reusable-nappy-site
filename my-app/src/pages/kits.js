import React from 'react';
import NappyKitTitle from '../components/NappyKitTitle';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Kits = () => {
return (
	<div
	style={{
		display: 'flex',
		alignItems: 'Right',
		justifyContent: 'center',
		flexDirection: 'column',
		paddingBottom: 20
	}}
	>
	<h1>Nappy Kits Available</h1>
	<NappyKitTitle 
		id="newborn_blue"
		>
		Newborn Blue
	</NappyKitTitle>
	<div style={{
            flexDirection: 'row',
			justifyContent: 'space-evenly',
			display: 'flex',
			alignItems: 'space-between'
        }}>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" alt="blue newborn kit" src={require(`../static/example-nappy.jpg`)} />
		<Card.Body>
			<Card.Title>Day Nappies</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>3 x baba & boo</ListGroup.Item>
			<ListGroup.Item>2 part pocket nappy</ListGroup.Item>
			<ListGroup.Item>bamboo insert</ListGroup.Item>
			<ListGroup.Item>no liner</ListGroup.Item>
		</ListGroup>
		</Card>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" alt="blue newborn kit" src={require(`../static/example-nappy.jpg`)} />
		<Card.Body>
			<Card.Title>Night Nappies</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>2 x SHA night nappy</ListGroup.Item>
			<ListGroup.Item>colour matching double booster</ListGroup.Item>
			<ListGroup.Item>can be worn for up to 12 hours if no poo</ListGroup.Item>
		</ListGroup>
		</Card>
	</div>
	<NappyKitTitle 
		id="newborn_green"
		>
		Newborn Green
	</NappyKitTitle>
	<div style={{
            flexDirection: 'row',
			justifyContent: 'space-evenly',
			display: 'flex',
			alignItems: 'space-between'
        }}>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" alt="green newborn kit" src={require(`../static/example-nappy.jpg`)} />
		<Card.Body>
			<Card.Title>Day Nappies</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>3 x baba & boo</ListGroup.Item>
			<ListGroup.Item>2 part pocket nappy</ListGroup.Item>
			<ListGroup.Item>bamboo insert</ListGroup.Item>
			<ListGroup.Item>no liner</ListGroup.Item>
		</ListGroup>
		</Card>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" alt="green newborn kit" src={require(`../static/example-nappy.jpg`)} />
		<Card.Body>
			<Card.Title>Night Nappies</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>2 x SHA night nappy</ListGroup.Item>
			<ListGroup.Item>colour matching double booster</ListGroup.Item>
			<ListGroup.Item>can be worn for up to 12 hours if no poo</ListGroup.Item>
		</ListGroup>
		</Card>
	</div>
	<NappyKitTitle 
		id="1_year_yellow"
		>
		1 Year Yellow
	</NappyKitTitle>
	<div style={{
            flexDirection: 'row',
			justifyContent: 'space-evenly',
			display: 'flex',
			alignItems: 'space-between'
        }}>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" alt="1 year yellow kit" src={require(`../static/example-nappy.jpg`)} />
		<Card.Body>
			<Card.Title>Day Nappies</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>3 x baba & boo</ListGroup.Item>
			<ListGroup.Item>2 part pocket nappy</ListGroup.Item>
			<ListGroup.Item>bamboo insert</ListGroup.Item>
			<ListGroup.Item>no liner</ListGroup.Item>
		</ListGroup>
		</Card>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" alt="1 year yellow kit" src={require(`../static/example-nappy.jpg`)} />
		<Card.Body>
			<Card.Title>Night Nappies</Card.Title>
		</Card.Body>
		<ListGroup className="list-group-flush">
			<ListGroup.Item>2 x SHA night nappy</ListGroup.Item>
			<ListGroup.Item>colour matching double booster</ListGroup.Item>
			<ListGroup.Item>can be worn for up to 12 hours if no poo</ListGroup.Item>
		</ListGroup>
		</Card>
	</div>
	</div>
);
};

export default Kits;
