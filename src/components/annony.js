import React, { useState, useEffect } from 'react';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import './App.css';

const Messege = () => {
  const [todo, setTodo] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'todos'), (snapshot) => {
      const data = snapshot.docs.map((doc) => doc.data());
      setMessages(data.reverse())
    });

    return () => unsubscribe(); 
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'todos'), {
        message: todo,
      });
      console.log('Document written with ID: ', docRef.id);
      setTodo('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <section >
      <div >
        <h1>Stranger Talks</h1>
        <p>Realtime annonymous Chat - integrated with firestore</p>

        <div>
          <div>
            <input
              type="text"
              placeholder="What do you have to say?"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button type="submit" className="btn" onClick={addTodo}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div>
        {messages.map((message, index) => (
          <div key={index} className="message-card">
            <p className='messege'>....{message.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Messege;
