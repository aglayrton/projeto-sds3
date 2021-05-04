import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Datatable from 'components/Datatables';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <BarChart />
          </div>
          <div className="col-sm-6">
            <DonutChart />
          </div>
        </div>
        <Datatable />
      </div>
      <Footer />
    </>
  );
}

export default App;
