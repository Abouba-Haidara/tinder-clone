import React, {useState, useEffect} from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import database from './firebase';
function TinderCards() {
    const [people, setPeople] = useState([]);

  // useEffect -> run a piece of code base on a specific condition
  useEffect(() => {
   const unsubscribe = database
      .collection("peoples")
      .onSnapshot(snapshop => {
        setPeople(
          snapshop.docs.map(doc => ({
            id: doc.id,
            people: doc.data()
          }))
        );
      });

      return () =>{
          unsubscribe();
      }
      
  }, []);

    return (
        <div>
            <div className="tinderCards__cardContainer"> 
                {people.map(({id,people})=>(
                    <TinderCard
                    key = {id}
                    className="swipe"
                    key={people.name}
                    preventSwipe = {['up','down']}
                    >
                    <div
                        style={{ backgroundImage: `url(${people.urlImage})` }}
                        className="card">
                        <h3>{people.name}</h3>
                    </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards

