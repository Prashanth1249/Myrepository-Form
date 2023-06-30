// import React from 'react';
import './App.css';
// import { Formik, Form } from 'formik';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// function App() {
//   const validation=useFormik({
//     validationSchema:"",
//     initialValues:{
//       Name:"",
//       Address:"",
//       UnitedStates:"",
//       male:"",
//       Reading:""
//     }
//   })
//   return (
//     <div className='APP' style={{ padding: '5% 20% 5% 15%' }}>
//       <h1>User Information</h1>
//       <form onSubmit={validation.handleSubmit}>
//         <div>
//           <label htmlFor='name'>Name:</label>  
//           <input type='text' id='name' name='name' required />
//         </div>

//         <div>
//           <label htmlFor='address'>Address:</label>
//           <textarea id='address' name='address' rows='4' required></textarea>
//         </div>

//         <div>
//           <label htmlFor='country'>Country:</label>
//           <select id='country' name='country' required>
//             <option value=''>-- Select Country --</option>
//             <option value='USA'>United States</option>
//             <option value='UK'>United Kingdom</option>
//             <option value='Canada'>Canada</option>
//             <option value='Australia'>Australia</option>
//             {/* Add more countries as needed */}
//           </select>
//         </div>

//         <div>
//           <label>Gender:</label>
//           <div className='radio-buttons'>
//             <label htmlFor='male'>
//               <input type='radio' id='male' name='gender' value='male' required />
//               Male
//             </label>
//             <label htmlFor='female'>
//               <input type='radio' id='female' name='gender' value='female' required />
//               Female
//             </label>
//             <label htmlFor='other'>
//               <input type='radio' id='other' name='gender' value='other' required />
//               Other
//             </label>
//           </div>
//         </div>

//         <div>
//           <label htmlFor='hobbies'>Hobbies/Interests:</label>
//           <select id='hobbies' name='hobbies' multiple required>
//             <option value='reading'>Reading</option>
//             <option value='traveling'>Traveling</option>
//             <option value='cooking'>Cooking</option>
//             <option value='sports'>Sports</option>
//             {/* Add more hobbies/interests as needed */}
//           </select>
//         </div>

//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Form from './Form.jsx';

const App = () => {
  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
