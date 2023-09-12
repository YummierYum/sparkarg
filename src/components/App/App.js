import { Bedroom } from '../';

import { useState } from 'react';
import styles from './styles.module.css';

export const App = () => {

  const [mode, setMode] = useState('bedroom');

  return (<div className = {styles.main}>
      {mode === 'bedroom' && <Bedroom 
        onPassEntry = {() => setMode('hospital')}
      />}

      {mode === 'hospital' && <Bedroom/>}

      {mode === 'firstMaze' && <>First Maze</>}

    </div>
  );
};


