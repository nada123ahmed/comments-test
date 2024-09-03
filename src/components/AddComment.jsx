// // AddComment.js
// import React from 'react';
// import { useCommentStore } from '../store/commentStore';

// const AddComment = () => {
//   const { newComment, setNewComment, addComment } = useCommentStore();

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     if (newComment.trim() === '') return;

//     addComment({
//       id: Date.now(),
//       author: 'Your Name', // Ideally, this should be dynamic based on the logged-in user
//       timestamp: 'Just now',
//       content: newComment,
//       voteCount: 0,
//       replies: [],
//     });

//     setNewComment(''); // Clear the input after adding
//   };

//   return (
//     <form onSubmit={handleSubmitComment}>
//       <textarea
//         value={newComment}
//         onChange={handleCommentChange}
//         placeholder="Add a comment..."
//         aria-label="New comment"
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default AddComment;




// import { useCommentStore } from '../store/commentStore';

// const AddComment = () => {
//   const { newComment, setNewComment, addComment } = useCommentStore();

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value); // Update the new comment state
//   };

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     if (newComment.trim() === '') return; // Ensure the comment is not empty

//     // Create a new comment object
//     const newCommentObj = {
//       id: Date.now(),
//       author: 'Your Name', // Replace with dynamic user data if available
//       timestamp: 'Just now',
//       content: newComment,
//       voteCount: 0,
//       replies: [],
//     };

//     addComment(newCommentObj); // Add the new comment to the store
//     setNewComment(''); // Clear the input after adding
//   };

//   return (
//     <form onSubmit={handleSubmitComment}>
//       <textarea
//         value={newComment}
//         onChange={handleCommentChange}
//         placeholder="Add a comment..."
//         aria-label="New comment"
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default AddComment;

// import React, { useState } from 'react';
// import { useCommentStore } from '../store/commentStore';

// const AddComment = () => {
//   const { addComment } = useCommentStore();
//   const [tempComment, setTempComment] = useState('');
//   const [userImage] = useState('/images/avatars/image-juliusomo.png'); // User image URL

//   const handleCommentChange = (e) => {
//     setTempComment(e.target.value); // Update the temporary comment state
//   };

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     if (tempComment.trim() === '') return; // Ensure the comment is not empty

//     // Create a new comment object
//     const newCommentObj = {
//       id: Date.now(),
//       author: 'juliusomo', // Replace with dynamic user data if available
//       timestamp: 'Just now',
//       content: tempComment,
//       voteCount: 0,
//       replies: [],
//       img: userImage, // Include user image
//     };

//     addComment(newCommentObj); // Add the new comment to the store
//     setTempComment(''); // Clear the input after adding
//   };

//   return (
//     <form onSubmit={handleSubmitComment} className="add-comment-form">
//       <div className="comment-input-container">
//         <img src={userImage} alt="User" className="user-image" /> {/* Display user image */}
//         <textarea
//           value={tempComment}
//           onChange={handleCommentChange}
//           placeholder="Add a comment..."
//           aria-label="New comment"
//           className="comment-textarea"
//         />
//       </div>
//       <button type="submit" className="submit-btn">Send</button>
//     </form>
//   );
// };

// export default AddComment;
import React from 'react';
import { useCommentStore } from '../store/commentStore';

const AddComment = () => {
  const { addComment, newComment, setNewComment } = useCommentStore();
  const [userImage] = React.useState('/images/avatars/image-juliusomo.png'); // User image URL

  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Update the new comment in the store
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === '') return; // Ensure the comment is not empty

    // Create a new comment object
    const newCommentObj = {
      id: Date.now(),
      author: 'juliusomo', // Replace with dynamic user data if available
      timestamp: 'Just now',
      content: newComment,
      voteCount: 0,
      replies: [],
      img: userImage, // Include user image
    };

    addComment(newCommentObj); // Add the new comment to the store
    setNewComment(''); // Clear the input after adding
  };

  return (
    <form onSubmit={handleSubmitComment} className="add-comment-form">
      <div className="comment-input-container">
        <img src={userImage} alt="User" className="user-image" /> {/* Display user image */}
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Add a comment..."
          aria-label="New comment"
          className="comment-textarea"
        />
      </div>
      <button type="submit" className="submit-btn">Send</button>
    </form>
  );
};

export default AddComment;
