// // import React from 'react';
// // import { useCommentStore } from '../store/commentStore';
// // import AddComment from './AddComment';
// // import Comment from './Comment';

// // const CommentsList = () => {
// //   const { comments } = useCommentStore();

// //   return (
// //     <div>
// //       <AddComment />
// //       {comments.map((comment) => (
// //         <Comment key={comment.id} comment={comment} />
// //       ))}
// //     </div>
// //   );
// // };

// // export default CommentsList;
// // import React from 'react';
// // import { useCommentStore } from './path/to/your/store';
// // import DeleteModal from './DeleteModal';

// // const CommentList = () => {
// //   const { comments, deleteComment } = useCommentStore((state) => ({
// //     comments: state.comments,
// //     deleteComment: state.deleteComment,
// //   }));

// //   const [selectedCommentId, setSelectedCommentId] = React.useState(null);
// //   const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);

// //   const handleDeleteClick = (id) => {
// //     setSelectedCommentId(id);
// //     setDeleteModalOpen(true);
// //   };

// //   const handleDelete = () => {
// //     if (selectedCommentId !== null) {
// //       deleteComment(selectedCommentId);
// //       setDeleteModalOpen(false);
// //       setSelectedCommentId(null);
// //     }
// //   };

// //   return (
// //     <div>
// //       {/* Render comments */}
// //       {comments.map((comment) => (
// //         <div key={comment.id}>
// //           <p>{comment.content}</p>
// //           <button onClick={() => handleDeleteClick(comment.id)}>Delete</button>
// //         </div>
// //       ))}
// //       <DeleteModal
// //         isOpen={isDeleteModalOpen}
// //         onClose={() => setDeleteModalOpen(false)}
// //         onDelete={handleDelete}
// //       />
// //     </div>
// //   );
// // };

// // export default CommentList;

// import React from 'react';
// import { useCommentStore } from './path/to/your/store';
// import DeleteModal from './DeleteModal';

// const CommentList = () => {
//   const { comments, deleteComment } = useCommentStore((state) => ({
//     comments: state.comments,
//     deleteComment: state.deleteComment,
//   }));

//   const [selectedCommentId, setSelectedCommentId] = React.useState(null);
//   const [isDeleteModalOpen, setDeleteModalOpen] = React.useState(false);

//   const handleDeleteClick = (id) => {
//     setSelectedCommentId(id);
//     setDeleteModalOpen(true);
//   };

//   const handleDelete = () => {
//     if (selectedCommentId !== null) {
//       deleteComment(selectedCommentId);
//       setDeleteModalOpen(false);
//       setSelectedCommentId(null);
//     }
//   };

//   return (
//     <div>
//       {/* Render comments */}
//       {comments.map((comment) => (
//         <div key={comment.id}>
//           <p>{comment.content}</p>
//           <button onClick={() => handleDeleteClick(comment.id)}>Delete</button>
//         </div>
//       ))}
//       <DeleteModal
//         isOpen={isDeleteModalOpen}
//         onClose={() => setDeleteModalOpen(false)}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// };

// export default CommentList;
