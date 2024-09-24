import React, { useState } from 'react';

const CommentForm = ({ productName }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Comment:', comment);
    alert(`Ваш відгук: "${comment}" додано успішно!`);
    setComment(''); // очищаємо поле після відправки
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>Додати відгук до {productName}</h3>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Напишіть свій відгук"
        required
      />
      <button type="submit">Надіслати</button>
    </form>
  );
};

export default CommentForm;
