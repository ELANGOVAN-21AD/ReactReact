import { Routes, Route } from 'react-router-dom';
import Loading from './loading';
import Mapp from './mapp';
import Randimg from './randomimg';
import Strang from './StrangerTalks';
function Routerr() {
  
  return (
    

<Routes>
          <Route path="/loading" element={<Loading />} />
          <Route path="/mapp" element={<Mapp />} />
          <Route path="/raimg" element={<Randimg />} />
          <Route path="/stranger" element={<Strang />} />
       </Routes>


  );
}

export default Routerr;
