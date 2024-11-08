import './App.css';

function App() {
  return (
    <div className="App">
      <div className='flex justify-center items-center min-w-screen min-h-screen bg-blue-500'>
        <div className='p-5 rounded-xl w-6/12 bg-white space-y-5'>
          <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
            <li className="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 rtl:space-x-reverse">
                <span className="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                    1
                </span>
                <span>
                    <h3 className="font-medium leading-tight">User info</h3>
                    <p className="text-sm">Step details here</p>
                </span>
                <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                </svg>
            </li>
            <li className="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                    2
                </span>
                <span>
                    <h3 className="font-medium leading-tight">Company info</h3>
                    <p className="text-sm">Step details here</p>
                </span>
            </li>
          </ol>

          <div className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm'>
            <div className="mb-5">
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Name</label>
              <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your name" required />
            </div>
            <div className='mb-5'>
              <label for="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Name</label>
              <div className="flex">
                  <div className="flex items-center me-4">
                      <input id="male" type="radio" value="" name="gender-group" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="male" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Male</label>
                  </div>
                  <div className="flex items-center me-4">
                      <input id="female" type="radio" value="" name="gender-group" className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label for="female" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">Female</label>
                  </div>
              </div>
            </div>
          </div>

          <div className='p-3 bg-white border border-gray-200 rounded-lg shadow-sm'>
            <div className="mb-5">
              <label for="desc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Description</label>
              <textarea id="desc" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter a description"></textarea>
            </div>
            <div className='mb-5'>
            <label for="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-start">Title</label>
              <select id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Enter a title</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>

          <div className='flex justify-end'>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
