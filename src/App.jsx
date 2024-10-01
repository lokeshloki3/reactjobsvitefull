import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import AddJobPage from './pages/AddJobPage'
import JobPage from './pages/JobPage'
import { addJob , removeJob , editJob} from './helper/jobs'
import EditJobPage from './pages/EditJobPage'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />}/>
      <Route path='/jobs' element={<JobsPage />}/>
      <Route path='/reactjobsvite' element={<HomePage />}/>
      <Route path='/add-job' element={<AddJobPage addJob={addJob}/>} />
      <Route path='/edit-job/:id' element={<EditJobPage editJob={editJob}/>} />
      <Route path='/jobs/:id' element={<JobPage removeJob={removeJob}/>}/>
      <Route path='*' element={<NotFoundPage />}/>
    </Route>)
  )
  
  return <RouterProvider router={router}/>
}

export default App