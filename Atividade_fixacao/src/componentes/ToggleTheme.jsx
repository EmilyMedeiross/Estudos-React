    import { useState, useEffect } from 'react';
 
    export default function ToggleTheme() {
      const [modoEscuro, setModoEscuro] = useState(false);

      useEffect(() => {
        if (modoEscuro) {
            document.body.style.backgroundColor = 'black';
            document.documentElement.style.color = 'white';
            document.documentElement.style.background = 'black'
        } else {
            document.body.style.backgroundColor = 'white';
            document.documentElement.style.color = 'black';
            document.documentElement.style.background = 'white'
        }
      }, [modoEscuro]);

      const alterarTema  = () => {
        setModoEscuro(!modoEscuro);
      };

    return (
        <>
            <button onClick={alterarTema}>
                {modoEscuro ? 'Modo Escuro' : 'Modo claro'}
            </button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nobis modi possimus, harum dicta ratione corrupti facilis eaque a est cumque porro facere quo maiores commodi placeat libero illum illo!</p>
        </>
        
    );
};



