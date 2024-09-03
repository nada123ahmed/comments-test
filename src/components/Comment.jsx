
// import React, { useState } from 'react';
// import { useCommentStore } from '../store/commentStore';

// const Comment = ({ comment, depth = 0 }) => {
//   const [isReplyOpen, setIsReplyOpen] = useState(false);
//   const [newReply, setNewReply] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(comment.content);
//   const { addReply, updateComment, deleteComment, upvoteComment, downvoteComment } = useCommentStore();

//   const handleReplyChange = (e) => {
//     setNewReply(e.target.value);
//   };

//   const handleEditChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     if (newReply.trim() === '') return;

//     addReply(comment.id, {
//       id: Date.now(),
//       author: 'juliusomo',
//       img: '/images/avatars/image-juliusomo.png', 
//       timestamp: 'Just now',
//       content: `@${comment.author} ${newReply}`, 
//       voteCount: 0,
//       replies: [],
//     });
//     setNewReply('');
//     setIsReplyOpen(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     if (editedContent.trim() === '') return;

//     updateComment(comment.id, editedContent);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     deleteComment(comment.id);
//   };

//   const handleUpvote = () => {
//     upvoteComment(comment.id);
//   };

//   const handleDownvote = () => {
//     if (comment.voteCount > 0) {
//       downvoteComment(comment.id);
//     }
//   };

//   return (
//     <div className={`comment-container ${depth > 0 ? 'reply' : ''}`}>
//       <div className="comment">
//         <div className="comment-vote">
//           <button className="vote-btn" onClick={handleUpvote}>+</button>
//           <span className="vote-count">{comment.voteCount || 0}</span>
//           <button className="vote-btn" onClick={handleDownvote}>-</button>
//         </div>
//         <div className="comment-body">
//           <div className="comment-header">
//             <img src={comment.img} alt="" />
//             <div className="comment-author-info">
//               <span className="comment-author"><strong>{comment.author}</strong></span>
//               {comment.author === 'juliusomo' && <span className="comment-you-label">you</span>}
//               <span className="comment-timestamp">{comment.timestamp}</span>
//             </div>
//           </div>

//           <div className="comment-content">
//             {isEditing ? (
//               <form onSubmit={handleSubmitEdit}>
//                 <textarea value={editedContent} onChange={handleEditChange} />
//                 <button type="submit" className="update-btn">Save</button>
//               </form>
//             ) : (
//               <p>{comment.content}</p>
//             )}
//           </div>
//           <div className="comment-actions">
//             {comment.author === 'juliusomo' && (
//               <>
//                 <button onClick={() => setIsEditing(!isEditing)}>
//                   {isEditing ? 'Cancel' : 'Edit'}
//                 </button>
//                 <button className="delete-btn" onClick={handleDelete}><img src="/images/icon-delete.svg" alt="" /> Delete</button>
//               </>
//             )}
//             <button className="reply-btn" onClick={() => setIsReplyOpen(!isReplyOpen)}>
//               <img src="/images/icon-reply.svg" alt="" />
//               {isReplyOpen ? 'Cancel Reply' : 'Reply'}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isReplyOpen && (
//         <div className="reply-section">
//           <form onSubmit={handleSubmitReply} className="reply-form">
//             <img src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
//             <textarea 
//               value={newReply} 
//               onChange={handleReplyChange} 
//               placeholder={`Reply to ${comment.author}`} 
//             />
//             <button type="submit" className="reply-submit-btn">Reply</button>
//           </form>
//         </div>
//       )}
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="comment-replies">
//           {comment.replies.map((reply) => (
//             <Comment key={reply.id} comment={reply} depth={depth + 1} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Comment;















// import React, { useState } from 'react';
// import { useCommentStore } from '../store/commentStore';

// const Comment = ({ comment, depth = 0 }) => {
//   const [isReplyOpen, setIsReplyOpen] = useState(false);
//   const [newReply, setNewReply] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(comment.content);
//   const { addReply, updateComment, deleteComment, upvoteComment, downvoteComment } = useCommentStore();

//   const handleReplyChange = (e) => {
//     setNewReply(e.target.value);
//   };

//   const handleEditChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     if (newReply.trim() === '') return;

//     addReply(comment.id, {
//       id: Date.now(),
//       author: 'juliusomo',
//       img: '/images/avatars/image-juliusomo.png', 
//       timestamp: 'Just now',
//       content: `@${comment.author} ${newReply}`, 
//       voteCount: 0,
//       replies: [],
//     });
//     setNewReply('');
//     setIsReplyOpen(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     if (editedContent.trim() === '') return;

//     updateComment(comment.id, editedContent);
//     setIsEditing(false);
//   };

//   const handleDelete = () => {
//     deleteComment(comment.id);
//   };

//   const handleUpvote = () => {
//     upvoteComment(comment.id);
//   };

//   const handleDownvote = () => {
//     if (comment.voteCount > 0) {
//       downvoteComment(comment.id);
//     }
//   };

//   return (
//     <div className={`comment-container ${depth > 0 ? 'reply' : ''}`}>
//       <div className="comment">
//         <div className="comment-vote">
//           <button className="vote-btn" onClick={handleUpvote}>+</button>
//           <span className="vote-count">{comment.voteCount || 0}</span>
//           <button className="vote-btn" onClick={handleDownvote}>-</button>
//         </div>
//         <div className="comment-body">
//           <div className="comment-header">
//             <img src={comment.img} alt="" />
//             <div className="comment-author-info">
//               <span className="comment-author"><strong>{comment.author}</strong></span>
//               {comment.author === 'juliusomo' && <span className="comment-you-label">you</span>}
//               <span className="comment-timestamp">{comment.timestamp}</span>
//             </div>
//           </div>

//           <div className="comment-content">
//             {isEditing ? (
//               <form onSubmit={handleSubmitEdit}>
//                 <textarea value={editedContent} onChange={handleEditChange} />
//                 <button type="submit" className="update-btn">Save</button>
//               </form>
//             ) : (
//               <p>{comment.content}</p>
//             )}
//           </div>
//           <div className="comment-actions">
//             {comment.author === 'juliusomo' && (
//               <>
//                 <button className="delete-btn" onClick={handleDelete}><img src="/images/icon-delete.svg" alt="" /> Delete</button>
//                 <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
//                   <img src="/images/icon-edit.svg" alt="" />
//                   {isEditing ? 'Cancel' : 'Edit'}
//                 </button>
//               </>
//             )}
//             {comment.author !== 'juliusomo' && (
//               <button className="reply-btn" onClick={() => setIsReplyOpen(!isReplyOpen)}>
//                 <img src="/images/icon-reply.svg" alt="" />
//                 {isReplyOpen ? 'Cancel Reply' : 'Reply'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//       {isReplyOpen && (
//         <div className="reply-section">
//           <form onSubmit={handleSubmitReply} className="reply-form">
//             <img src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
//             <textarea className='reply-input'
//               value={newReply} 
//               onChange={handleReplyChange} 
//               placeholder={`Reply to ${comment.author}`} 
//             />
//             <button type="submit" className="reply-submit-btn">Reply</button>
//           </form>
//         </div>
//       )}
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="comment-replies">
//           {comment.replies.map((reply) => (
//             <Comment key={reply.id} comment={reply} depth={depth + 1} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Comment;







// import React, { useState } from 'react';
// import { useCommentStore } from '../store/commentStore';
// import DeleteModal from './DeleteModal';

// const Comment = ({ comment, depth = 0 }) => {
//   const [isReplyOpen, setIsReplyOpen] = useState(false);
//   const [newReply, setNewReply] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(comment.content);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const { addReply, updateComment, deleteComment, upvoteComment, downvoteComment } = useCommentStore();

//   const handleReplyChange = (e) => {
//     setNewReply(e.target.value);
//   };

//   const handleEditChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     if (newReply.trim() === '') return;

//     addReply(comment.id, {
//       id: Date.now(),
//       author: 'juliusomo',
//       img: '/images/avatars/image-juliusomo.png', 
//       timestamp: 'Just now',
//       content: `@${comment.author} ${newReply}`, 
//       voteCount: 0,
//       replies: [],
//     });
//     setNewReply('');
//     setIsReplyOpen(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     if (editedContent.trim() === '') return;

//     updateComment(comment.id, editedContent);
//     setIsEditing(false);
//   };

//   const handleDeleteClick = () => {
//     setIsDeleteModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleDeleteConfirm = () => {
//     deleteComment(comment.id);
//     setIsDeleteModalOpen(false);
//   };

//   const handleUpvote = () => {
//     upvoteComment(comment.id);
//   };

//   const handleDownvote = () => {
//     if (comment.voteCount > 0) {
//       downvoteComment(comment.id);
//     }
//   };

//   return (
//     <div className={`comment-container ${depth > 0 ? 'reply' : ''}`}>
//       <div className="comment">
//         <div className="comment-vote">
//           <button className="vote-btn" onClick={handleUpvote}>+</button>
//           <span className="vote-count">{comment.voteCount || 0}</span>
//           <button className="vote-btn" onClick={handleDownvote}>-</button>
//         </div>
//         <div className="comment-body">
//           <div className="comment-header">
//             <img src={comment.img} alt="" />
//             <div className="comment-author-info">
//               <span className="comment-author"><strong>{comment.author}</strong></span>
//               {comment.author === 'juliusomo' && <span className="comment-you-label">you</span>}
//               <span className="comment-timestamp">{comment.timestamp}</span>
//             </div>
//           </div>

//           <div className="comment-content">
//             {isEditing ? (
//               <form onSubmit={handleSubmitEdit}>
//                 <textarea value={editedContent} onChange={handleEditChange} />
//                 <button type="submit" className="update-btn">Save</button>
//               </form>
//             ) : (
//               <p>{comment.content}</p>
//             )}
//           </div>
//           <div className="comment-actions">
//             {comment.author === 'juliusomo' && (
//               <>
//                 <button className="delete-btn" onClick={handleDeleteClick}>
//                   <img src="/images/icon-delete.svg" alt="" /> Delete
//                 </button>
//                 <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
//                   <img src="/images/icon-edit.svg" alt="" />
//                   {isEditing ? 'Cancel' : 'Edit'}
//                 </button>
//               </>
//             )}
//             {comment.author !== 'juliusomo' && (
//               <button className="reply-btn" onClick={() => setIsReplyOpen(!isReplyOpen)}>
//                 <img src="/images/icon-reply.svg" alt="" />
//                 {isReplyOpen ? 'Cancel Reply' : 'Reply'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {isReplyOpen && (
//         <div className="reply-section">
//           <form onSubmit={handleSubmitReply} className="reply-form">
//             <img src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
//             <textarea className='reply-input'
//               value={newReply} 
//               onChange={handleReplyChange} 
//               placeholder={`Reply to ${comment.author}`} 
//             />
//             <button type="submit" className="reply-submit-btn">Reply</button>
//           </form>
//         </div>
//       )}
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="comment-replies">
//           {comment.replies.map((reply) => (
//             <Comment key={reply.id} comment={reply} depth={depth + 1} />
//           ))}
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       <DeleteModal 
//         isOpen={isDeleteModalOpen} 
//         onClose={handleCloseModal} 
//         onDelete={handleDeleteConfirm} 
//       />
//     </div>
//   );
// };

// export default Comment;








// import React, { useState } from 'react';
// import { useCommentStore } from '../store/commentStore';
// import DeleteModal from './DeleteModal';

// const Comment = ({ comment, depth = 0 }) => {
//   const [isReplyOpen, setIsReplyOpen] = useState(false);
//   const [newReply, setNewReply] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(comment.content);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const { addReply, updateComment, deleteComment, upvoteComment, downvoteComment } = useCommentStore();

//   // Handle input changes
//   const handleReplyChange = (e) => {
//     setNewReply(e.target.value);
//   };

//   const handleEditChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   // Handle form submissions
//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     if (newReply.trim() === '') return;

//     addReply(comment.id, {
//       id: Date.now(),
//       author: 'juliusomo',
//       img: '/images/avatars/image-juliusomo.png', 
//       timestamp: 'Just now',
//       content: `@${comment.author} ${newReply}`, 
//       voteCount: 0,
//       replies: [],
//     });
//     setNewReply('');
//     setIsReplyOpen(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     if (editedContent.trim() === '') return;

//     updateComment(comment.id, editedContent);
//     setIsEditing(false);
//   };

//   // Handle delete modal
//   const handleDeleteClick = () => {
//     setIsDeleteModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleDeleteConfirm = () => {
//     deleteComment(comment.id);
//     setIsDeleteModalOpen(false);
//   };

//   // Handle upvote and downvote
//   const handleUpvote = () => {
//     upvoteComment(comment.id);
//   };

//   const handleDownvote = () => {
//     if (comment.voteCount > 0) {
//       downvoteComment(comment.id);
//     }
//   };

//   return (
//     <div className={`comment-container ${depth > 0 ? 'reply' : ''}`}>
//       <div className="comment">
//         <div className="comment-vote">
//           <button className="vote-btn" onClick={handleUpvote}>+</button>
//           <span className="vote-count">{comment.voteCount || 0}</span>
//           <button className="vote-btn" onClick={handleDownvote}>-</button>
//         </div>
//         <div className="comment-body">
//           <div className="comment-header">
//             <img src={comment.img} alt="" />
//             <div className="comment-author-info">
//               <span className="comment-author"><strong>{comment.author}</strong></span>
//               {comment.author === 'juliusomo' && <span className="comment-you-label">you</span>}
//               <span className="comment-timestamp">{comment.timestamp}</span>
//             </div>
//           </div>

//           <div className="comment-content">
//             {isEditing ? (
//               <form onSubmit={handleSubmitEdit}>
//                 <textarea value={editedContent} onChange={handleEditChange} />
//                 <button type="submit" className="update-btn">Save</button>
//               </form>
//             ) : (
//               <p>{comment.content}</p>
//             )}
//           </div>
//           <div className="comment-actions">
//             {comment.author === 'juliusomo' && (
//               <>
//                 <button className="delete-btn" onClick={handleDeleteClick}>
//                   <img src="/images/icon-delete.svg" alt="" /> Delete
//                 </button>
//                 <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
//                   <img src="/images/icon-edit.svg" alt="" />
//                   {isEditing ? 'Cancel' : 'Edit'}
//                 </button>
//               </>
//             )}
//             {comment.author !== 'juliusomo' && (
//               <button className="reply-btn" onClick={() => setIsReplyOpen(!isReplyOpen)}>
//                 <img src="/images/icon-reply.svg" alt="" />
//                 {isReplyOpen ? 'Cancel Reply' : 'Reply'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {isReplyOpen && (
//         <div className="reply-section">
//           <form onSubmit={handleSubmitReply} className="reply-form">
//             <img src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
//             <textarea className='reply-input'
//               value={newReply} 
//               onChange={handleReplyChange} 
//               placeholder={`Reply to ${comment.author}`} 
//             />
//             <button type="submit" className="reply-submit-btn">Reply</button>
//           </form>
//         </div>
//       )}
//       {comment.replies && comment.replies.length > 0 && (
//         <div className="comment-replies">
//           {comment.replies.map((reply) => (
//             <Comment key={reply.id} comment={reply} depth={depth + 1} />
//           ))}
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       <DeleteModal 
//         isOpen={isDeleteModalOpen} 
//         onClose={handleCloseModal} 
//         onDelete={handleDeleteConfirm} 
//       />
//     </div>
//   );
// };

// export default Comment;
// import React, { useState } from 'react';
// import { useCommentStore } from '../store/commentStore';
// import DeleteModal from './DeleteModal';

// const Comment = ({ comment, depth = 0 }) => {
//   // State from the store
//   const {
//     addReply,
//     updateComment,
//     deleteComment,
//     upvoteComment,
//     downvoteComment,
//   } = useCommentStore();

//   // Local component state
//   const [isReplyOpen, setIsReplyOpen] = useState(false);
//   const [newReply, setNewReply] = useState('');
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedContent, setEditedContent] = useState(comment.content);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   // Handle input changes
//   const handleReplyChange = (e) => {
//     setNewReply(e.target.value);
//   };

//   const handleEditChange = (e) => {
//     setEditedContent(e.target.value);
//   };

//   // Handle form submissions
//   const handleSubmitReply = (e) => {
//     e.preventDefault();
//     if (newReply.trim() === '') return;

//     addReply(comment.id, {
//       id: Date.now(),
//       author: 'juliusomo',
//       img: '/images/avatars/image-juliusomo.png',
//       timestamp: 'Just now',
//       content: `@${comment.author} ${newReply}`,
//       voteCount: 0,
//       replies: [],
//     });

//     setNewReply('');
//     setIsReplyOpen(false);
//   };

//   const handleSubmitEdit = (e) => {
//     e.preventDefault();
//     if (editedContent.trim() === '') return;

//     updateComment(comment.id, editedContent);
//     setIsEditing(false);
//   };

//   // Handle delete modal
//   const handleDeleteClick = () => {
//     setIsDeleteModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsDeleteModalOpen(false);
//   };

//   const handleDeleteConfirm = () => {
//     deleteComment(comment.id);
//     setIsDeleteModalOpen(false);
//   };

//   // Handle upvote and downvote
//   const handleUpvote = () => {
//     upvoteComment(comment.id);
//   };

//   const handleDownvote = () => {
//     if (comment.voteCount > 0) {
//       downvoteComment(comment.id);
//     }
//   };

//   return (
//     <div className={`comment-container ${depth > 0 ? 'reply' : ''}`}>
//       <div className="comment">
//         <div className="comment-vote">
//           <button className="vote-btn" onClick={handleUpvote}>+</button>
//           <span className="vote-count">{comment.voteCount || 0}</span>
//           <button className="vote-btn" onClick={handleDownvote}>-</button>
//         </div>
//         <div className="comment-body">
//           <div className="comment-header">
//             <img src={comment.img} alt="" />
//             <div className="comment-author-info">
//               <span className="comment-author"><strong>{comment.author}</strong></span>
//               {comment.author === 'juliusomo' && <span className="comment-you-label">you</span>}
//               <span className="comment-timestamp">{comment.timestamp}</span>
//             </div>
//           </div>

//           <div className="comment-content">
//             {isEditing ? (
//               <form onSubmit={handleSubmitEdit}>
//                 <textarea value={editedContent} onChange={handleEditChange} />
//                 <button type="submit" className="update-btn">Save</button>
//               </form>
//             ) : (
//               <p>{comment.content}</p>
//             )}
//           </div>
//           <div className="comment-actions">
//             {comment.author === 'juliusomo' && (
//               <>
//                 <button className="delete-btn" onClick={handleDeleteClick}>
//                   <img src="/images/icon-delete.svg" alt="" /> Delete
//                 </button>
//                 <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
//                   <img src="/images/icon-edit.svg" alt="" />
//                   {isEditing ? 'Cancel' : 'Edit'}
//                 </button>
//               </>
//             )}
//             {comment.author !== 'juliusomo' && (
//               <button className="reply-btn" onClick={() => setIsReplyOpen(!isReplyOpen)}>
//                 <img src="/images/icon-reply.svg" alt="" />
//                 {isReplyOpen ? 'Cancel Reply' : 'Reply'}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {isReplyOpen && (
//         <div className="reply-section">
//           <form onSubmit={handleSubmitReply} className="reply-form">
//             <img src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
//             <textarea
//               className='reply-input'
//               value={newReply}
//               onChange={handleReplyChange}
//               placeholder={`Reply to ${comment.author}`}
//             />
//             <button type="submit" className="reply-submit-btn">Reply</button>
//           </form>
//         </div>
//       )}

//       {comment.replies && comment.replies.length > 0 && (
//         <div className="comment-replies">
//           {comment.replies.map((reply) => (
//             <Comment key={reply.id} comment={reply} depth={depth + 1} />
//           ))}
//         </div>
//       )}

//       {/* Delete Confirmation Modal */}
//       <DeleteModal
//         isOpen={isDeleteModalOpen}
//         onClose={handleCloseModal}
//         onDelete={handleDeleteConfirm}
//       />
//     </div>
//   );
// };

// export default Comment;



import { useCommentStore } from '../store/commentStore';
import DeleteModal from './DeleteModal';

const Comment = ({ comment, depth = 0 }) => {
  // State from the store
  const {
    addReply,
    updateComment,
    deleteComment,
    upvoteComment,
    downvoteComment,
    isReplyOpen,
    setIsReplyOpen,
    newReply,
    setNewReply,
    isEditing,
    setIsEditing,
    editedContent,
    setEditedContent,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
  } = useCommentStore();

  // Handle input changes
  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };

  const handleEditChange = (e) => {
    setEditedContent(e.target.value);
  };

  // Handle form submissions
  const handleSubmitReply = (e) => {
    e.preventDefault();
    if (newReply.trim() === '') return;

    addReply(comment.id, {
      id: Date.now(),
      author: 'juliusomo',
      img: '/images/avatars/image-juliusomo.png',
      timestamp: 'Just now',
      content: `@${comment.author} ${newReply}`,
      voteCount: 0,
      replies: [],
    });

    setNewReply('');
    setIsReplyOpen(false);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    if (editedContent.trim() === '') return;

    updateComment(comment.id, editedContent);
    setIsEditing(false);
  };

  // Handle delete modal
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    deleteComment(comment.id);
    setIsDeleteModalOpen(false);
  };

  // Handle upvote and downvote
  const handleUpvote = () => {
    upvoteComment(comment.id);
  };

  const handleDownvote = () => {
    if (comment.voteCount > 0) {
      downvoteComment(comment.id);
    }
  };

  return (
    <div className={`comment-container ${depth > 0 ? 'reply' : ''}`}>
      <div className="comment">
        <div className="comment-vote">
          <button className="vote-btn" onClick={handleUpvote}>+</button>
          <span className="vote-count">{comment.voteCount || 0}</span>
          <button className="vote-btn" onClick={handleDownvote}>-</button>
        </div>
        <div className="comment-body">
          <div className="comment-header">
            <img src={comment.img} alt="" />
            <div className="comment-author-info">
              <span className="comment-author"><strong>{comment.author}</strong></span>
              {comment.author === 'juliusomo' && <span className="comment-you-label">you</span>}
              <span className="comment-timestamp">{comment.timestamp}</span>
            </div>
          </div>

          <div className="comment-content">
            {isEditing ? (
              <form onSubmit={handleSubmitEdit}>
                <textarea value={editedContent} onChange={handleEditChange} />
                <button type="submit" className="update-btn">Save</button>
              </form>
            ) : (
              <p>{comment.content}</p>
            )}
          </div>
          <div className="comment-actions">
            {comment.author === 'juliusomo' && (
              <>
                <button className="delete-btn" onClick={handleDeleteClick}>
                  <img src="/images/icon-delete.svg" alt="" /> Delete
                </button>
                <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
                  <img src="/images/icon-edit.svg" alt="" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </>
            )}
            {comment.author !== 'juliusomo' && (
              <button className="reply-btn" onClick={() => setIsReplyOpen(!isReplyOpen)}>
                <img src="/images/icon-reply.svg" alt="" />
                {isReplyOpen ? 'Cancel Reply' : 'Reply'}
              </button>
            )}
          </div>
        </div>
      </div>

      {isReplyOpen && (
        <div className="reply-section">
          <form onSubmit={handleSubmitReply} className="reply-form">
            <img src="/images/avatars/image-juliusomo.png" alt="juliusomo" />
            <textarea
              className='reply-input'
              value={newReply}
              onChange={handleReplyChange}
              placeholder={`Reply to ${comment.author}`}
            />
            <button type="submit" className="reply-submit-btn">Reply</button>
          </form>
        </div>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteConfirm}
      />
    </div>
  );
};

export default Comment;
