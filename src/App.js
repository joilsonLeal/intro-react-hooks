import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTechs([...techs, newTech]);
    setNewTech('');
  },[newTech, techs]);

  // componentDidMount
  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if(storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }

    // componentWillUnmount
    // return () => {
    //   document.removeEventListener();
    // };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        { techs.map(tech => <li key={tech}>{tech}</li>) }
      </ul>
      <div><strong>Você tem {techSize} tecnologias</strong></div>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
