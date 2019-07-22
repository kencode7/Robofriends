import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
          { robots.map ((user, id) => {
                return ( 
                <Card 
                    key={id} 
                    id={robots[id].id} 
                    name={robots[id].name} 
                    username={robots[id].username} 
                    email={robots[id].email}
                    />
                );
            })}
        </div>
    );
}

export default CardList;