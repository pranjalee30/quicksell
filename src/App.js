import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/TopNavBar';
import { useDispatch} from 'react-redux'
import { fetchAllData } from './store/Actions/DataAction';
import AllTickets from './components/TicketsContainer';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return <div style={{ paddingTop: "10px" }} >
           <NavBar />
           <hr style={{ marginTop: "10px" }} />
          <AllTickets />
         </div>
}
export default App