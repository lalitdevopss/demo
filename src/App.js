import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import NxtNow from './components/pages/NxtNow';
import Communications from './components/pages/Communications';
import MediaEnt from './components/pages/MediaEnt';
import Manufacturing from './components/pages/Manufacturing';
import InfranCloud from './components/pages/InfranCloud';
import DesignServices from './components/pages/DesignServices';
import InnovationOverview from './components/pages/InnovationOverview';
import MarkersTab from './components/pages/MarkersTab';
import StraregynDesgin from './components/pages/StraregynDesgin';

function App() {
  return (
    <>
      <div class="light-control" style={{ opacity: '0.2' }}></div><div class="hibernate-control"></div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} >
            <Route path='/' element={<Content />} />
            <Route path='/nxtNow' element={<NxtNow />} />
            <Route path='/communications' element={<Communications />} />
            <Route path='/mediaent' element={<MediaEnt />} />
            <Route path='/manufacturing' element={<Manufacturing />} />
            <Route path='/infrancloud' element={<InfranCloud />} />
            <Route path='/designservice' element={<DesignServices />} />
            <Route path='/innovation-overview' element={<InnovationOverview />} />
            <Route path='/markers-tab' element={<MarkersTab />} />
            <Route path='/staregy-design' element={<StraregynDesgin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
