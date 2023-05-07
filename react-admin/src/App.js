import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import Team from './scenes/team';
import Contacts from './scenes/contacts';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
// import Line from './scenes/line';
// import Bar from './scenes/bar';
// import Pie from './scenes/pie';
// import FAQ from './scenes/faq';
// import Geography from './scenes/geography';
import { Route, Routes } from 'react-router-dom';
import MainProvider from './providers/MainProvider';

function App() {
	return (
		<MainProvider>
			<div className="app">
				<Sidebar />
				<main className="content">
					<Topbar />
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/team" element={<Team />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/invoices" element={<Invoices />} />
						<Route path="/form" element={<Form />} />
						<Route path="/calendar" element={<Calendar />} />
						{/* <Route path="/bar" element={<Bar />} /> */}
						{/* <Route path="/line" element={<Line />} /> */}
						{/* <Route path="/faq" element={<FAQ />} /> */}
						{/* <Route path="/geography" element={<Geography />} /> */}
						{/* <Route path="/pie" element={<Pie />} /> */}
					</Routes>
				</main>
			</div>
		</MainProvider>
	);
}

export default App;
