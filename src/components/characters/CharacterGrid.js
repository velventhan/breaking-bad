import React from 'react';

import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
	return (
		<>
			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div className='cards'>
					{items.map(item => (
						<CharacterItem key={item.char_id} item={item} />
					))}
				</div>
			)}
		</>
	);
};

export default CharacterGrid;
