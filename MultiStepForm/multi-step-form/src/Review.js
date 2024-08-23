import React from 'react';
import { useNavigate } from 'react-router-dom';


const Review = () => {
  const navigate = useNavigate();
  const [review, setReview] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails'));
    const data = { ...userDetails, review, message };
    localStorage.setItem('reviewDetails', JSON.stringify(data));
    navigate.push('/confirmation');
  };

  return (
    <div>
      <h2>Comment évalueriez-vous notre service ?</h2>
      <div>
        <input type="radio" id="unhappy" name="review" value="mécontent" onChange={() => setReview('mécontent')} />
        <label htmlFor="unhappy">😞 Mécontent</label>
        <input type="radio" id="better" name="review" value="pourrait être mieux" onChange={() => setReview('pourrait être mieux')} />
        <label htmlFor="better">😐 Pourrait être mieux</label>
        <input type="radio" id="satisfied" name="review" value="satisfait" onChange={() => setReview('satisfait')} />
        <label htmlFor="satisfied">😊 Satisfait</label>
        <input type="radio" id="very-satisfied" name="review" value="très satisfait" onChange={() => setReview('très satisfait')} />
        <label htmlFor="very-satisfied">😁 Très satisfait</label>
      </div>
      <textarea
        placeholder="Commentaires..."
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Suivant</button>
    </div>
  );
};

export default Review;
