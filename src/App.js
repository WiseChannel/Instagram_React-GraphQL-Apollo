// import React, { useState, useEffect } from 'react';
//
// import Header from './Components/Header';
// import Login from './Components/Login';
// import CreatePost from './Components/CreatePost'
//
// const App = () => {
//
//   const [user, setUser] = useState('Ilya')
//   const [posts, setPosts] = useState([])
//
//   useEffect(() => {
//     document.title = user ? `${user}'s Feed` : 'Please login'
//   }, [user])
//
//   if (!user) return <Login setUser={setUser} />
//
//   return (
//     <>
//       <Header
//         user={user}
//         setUser={setUser}
//       />
//       <CreatePost
//         user={user}
//         setPosts={setPosts}
//         posts={posts}
//       />
//       {posts.map((post, i) => (
//         <React.Fragment key={i}>
//           {post.image && (
//             <img
//               style={{ height: 100, width: 100, objectFit: 'cover' }}
//               src={URL.createObjectURL(post.image)}
//               alt='Post Cover'
//             />
//           )}
//           <p>{post.content}</p>
//           <div>{user}</div>
//         </React.Fragment>
//       ))}
//     </>
//   );
// }
//
// export default App
//
//
