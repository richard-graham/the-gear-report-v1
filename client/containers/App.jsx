import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Header from './Header'
import Dashboard from './Dashboard'
import Login from './Login'
import Register from './Register'
import Ticket from './Ticket'
import AllTickets from './AllTickets'
import Footer from '../components/Footer'
import AddTicket from './AddTicket'
import EditTicket from './EditTicket'
import SignIn from '../containers/auth/SignIn'
import SignUp from '../containers/auth/SignUp'

import Navbar from './layout/Navbar'


export default function App() {
  return (
		<Router>
			<div className="app-container">	
				<Navbar />
					<div className="body">
						<Route exact path='/' render={() => (<Redirect to="/dashboard/104"/>)} />
						<Route exact path='/dashboard/:id' component={Dashboard} />

						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
						<Route path='/signin' component={SignIn} />
						<Route path='/signup' component={SignUp} />
						
						<Route exact path='/tickets/ticketId/:ticketId' component={Ticket} />
						<Route exact path='/tickets/add' component={AddTicket} />
						<Route exact path='/tickets/:id/edit' component={EditTicket} />
						<Route exact path='/tickets' component={AllTickets} />
					</div>
				<Footer />
			</div>
		</Router>
  )
}
