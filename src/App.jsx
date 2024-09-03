
// import React, { useState } from 'react';
// import { useCommentStore } from './store/commentStore';
// import Comment from './components/Comment';
// import './App.css';

// const App = () => {
//   const { comments, addComment } = useCommentStore();
//   const [newComment, setNewComment] = useState('');

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     addComment({
//       id: Date.now(),
//       author: 'Your Name',
//       timestamp: 'Just now',
//       content: newComment,
//       replies: [],
//     });
//     setNewComment('');
//   };

//   return (
//     <div className="app">
//       <div className="comments">
//         {comments.map((comment) => (
//           <Comment key={comment.id} comment={comment} />
//         ))}
//       </div>
//       <form onSubmit={handleSubmitComment}>
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           placeholder="Add a comment..."
//           aria-label="New comment"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import { useCommentStore } from './store/commentStore';
// import Comment from './components/Comment';
// import './App.css';

// const App = () => {
//   // Accessing state and actions from the store
//   const { comments, newComment, setNewComment, addComment } = useCommentStore();

//   const handleCommentChange = (e) => {
//     setNewComment(e.target.value);
//   };

//   const handleSubmitComment = (e) => {
//     e.preventDefault();
//     if (newComment.trim() === '') return;

//     addComment({
//       id: Date.now(),
//       author: 'Your Name',
//       timestamp: 'Just now',
//       content: newComment,
//       voteCount: 0,
//       replies: [],
//     });

//     setNewComment(''); // Clear the newComment state after adding
//   };

//   return (
//     <div className="app">
//       <div className="comments">
//         {comments.map((comment) => (
//           <Comment key={comment.id} comment={comment} />
//         ))}
//       </div>
//       <form onSubmit={handleSubmitComment}>
//         <textarea
//           value={newComment}
//           onChange={handleCommentChange}
//           placeholder="Add a comment..."
//           aria-label="New comment"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default App;


// App.js
import React from 'react';
import { useCommentStore } from './store/commentStore';
import Comment from './components/Comment';
import AddComment from './components/AddComment'; // Import the new AddComment component
import './App.css';

const App = () => {
  const { comments } = useCommentStore(); // No need to destructure newComment or setNewComment

  return (
    <div className="app">
      <div className="comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <AddComment /> {/* Use the new AddComment component */}
    </div>
  );
};

export default App;
