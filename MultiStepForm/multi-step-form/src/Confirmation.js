import React from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Confirmation = () => {
  const navigate = useNavigate();
  const reviewDetails = JSON.parse(localStorage.getItem('reviewDetails'));

  const handleSend = () => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', reviewDetails, 'YOUR_USER_ID')
      .then(() => {
        alert('Email envoyé avec succès');
        localStorage.clear();
        navigate.push('/');
      }, error => {
        console.error('Erreur:', error);
      });
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <p><strong>Nom :</strong> {reviewDetails.name}</p>
      <p><strong>Email :</strong> {reviewDetails.email}</p>
      <p><strong>Avis :</strong> {reviewDetails.review}</p>
      <p><strong>Message :</strong> {reviewDetails.message}</p>
      <button onClick={handleSend}>Envoyer</button>
    </div>
  );
};

export default Confirmation;
