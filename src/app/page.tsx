'use client';

import { useState } from 'react';
import Boton from '@/components/Boton';
import {
  PiBackspace,
  PiDivide,
  PiInstagramLogo,
  PiGithubLogo,
} from 'react-icons/pi';

const Home = () => {
  const [resultado, setResultado] = useState('0');
  const [operacion, setOperacion] = useState('');
  const [pantalla, setPantalla] = useState('0');

  const resetInput = async () => {
    setPantalla('0');
    setResultado('0');
  };

  const porcentaje = () => {
    setPantalla((parseFloat(pantalla) / 100).toString());
  };

  const addPunto = () => {
    if (!pantalla.includes('.') && pantalla.length !== 14) {
      setPantalla(pantalla + '.');
    }
  };

  const operar = () => {
    const formatResult = (value: number) => {
      const stringValue = value.toString();

      // Si el número es menor a 10 caracteres, usa notación decimal
      if (stringValue.includes('e') || stringValue.length > 10) {
        return value.toExponential(10); // Notación científica con 10 dígitos significativos
      }

      // Si es menor a 14 caracteres y no está en notación científica
      return value.toString();
    };

    if (operacion === '+') {
      if (resultado === '0') {
        setResultado(pantalla);
      } else {
        const result = parseFloat(resultado) + parseFloat(pantalla);
        setResultado(formatResult(result));
      }
    } else if (operacion === '-') {
      if (resultado === '0') {
        setResultado(pantalla);
      } else {
        const result = parseFloat(resultado) - parseFloat(pantalla);
        setResultado(formatResult(result));
      }
    } else if (operacion === '*') {
      if (resultado === '0') {
        setResultado(pantalla);
      } else {
        const result = parseFloat(resultado) * parseFloat(pantalla);
        setResultado(formatResult(result));
      }
    } else if (operacion === '/') {
      if (resultado === '0') {
        setResultado(pantalla);
      } else {
        const result = parseFloat(resultado) / parseFloat(pantalla);
        setResultado(formatResult(result));
      }
    } else {
      setResultado(pantalla);
    }
  };

  const dividir = () => {
    operar();
    setOperacion('/');
    setPantalla('0');
  };

  const multiplicar = () => {
    operar();
    setOperacion('*');
    setPantalla('0');
  };

  const restar = () => {
    operar();
    setOperacion('-');
    setPantalla('0');
  };

  const sumar = () => {
    operar();
    setOperacion('+');
    setPantalla('0');
  };

  const terminar = () => {
    operar();
    setOperacion('');
    setPantalla('0');
  };

  const addInput = (input: string) => {
    if (pantalla === '0') {
      setPantalla(input);
    } else if (pantalla.length !== 14) {
      setPantalla(pantalla + input);
    }
  };

  const deleteInput = () => {
    if (pantalla.length > 1) {
      setPantalla(pantalla.slice(0, -1));
    } else {
      setPantalla('0');
    }
  };

  return (
    <div className='bg-[#2c5545] w-full h-screen flex flex-col items-center'>
      <p className=' mb-5 mt-4 text-[30px]'>Calculadora online</p>
      <div className='bg-[#303030] w-[20rem] h-[33rem] rounded-[20px] flex flex-col items-center'>
        <div className='w-[90%] h-[120px] bg-[#ececec] mt-4 rounded-[10px] flex flex-col align-center'>
          <div className='h-[60px]'>
            <p
              className={`text-black ${
                resultado.length > 10 ? 'text-[25px]' : 'text-[40px]'
              } text-right w-[90%] lcd-pantalla`}
            >
              {resultado}
            </p>
          </div>
          <div className='h-[60px]'>
            <p
              className={`text-black ${
                pantalla.length > 10 ? 'text-[30px]' : 'text-[40px]'
              } text-right w-[90%] lcd-pantalla`}
            >
              {pantalla}
            </p>
          </div>
        </div>
        <div className='flex flex-col w-[90%] my-8 space-y-2'>
          <div className='flex flex-row w-full space-x-3 justify-center'>
            <Boton label='C' onClick={resetInput} className='operacion' />
            <button
              onClick={deleteInput}
              className={`w-[60px] h-[60px] rounded-full text-[30px] bg-green-900 flex items-center justify-center`}
            >
              <PiBackspace />
            </button>
            <Boton label='%' onClick={porcentaje} className='operacion' />
            <button
              onClick={dividir}
              className={`w-[60px] h-[60px] rounded-full text-[30px] bg-green-900 flex items-center justify-center`}
            >
              <PiDivide />
            </button>
          </div>
          <div className='flex flex-row w-full space-x-3 justify-center'>
            <Boton label='7' onClick={() => addInput('7')} />
            <Boton label='8' onClick={() => addInput('8')} />
            <Boton label='9' onClick={() => addInput('9')} />
            <Boton label='x' onClick={multiplicar} className='operacion' />
          </div>
          <div className='flex flex-row w-full space-x-3 justify-center'>
            <Boton label='4' onClick={() => addInput('4')} />
            <Boton label='5' onClick={() => addInput('5')} />
            <Boton label='6' onClick={() => addInput('6')} />
            <Boton label='-' onClick={restar} className='operacion' />
          </div>
          <div className='flex flex-row w-full space-x-3 justify-center'>
            <Boton label='1' onClick={() => addInput('1')} />
            <Boton label='2' onClick={() => addInput('2')} />
            <Boton label='3' onClick={() => addInput('3')} />
            <Boton label='+' onClick={sumar} className='operacion' />
          </div>
          <div className='flex flex-row w-full space-x-3 justify-center'>
            <p className='w-[60px] h-[60px]'></p>
            <Boton label='0' onClick={() => addInput('0')} />
            <Boton label='.' onClick={addPunto} />
            <Boton label='=' onClick={terminar} className='operacion' />
          </div>
        </div>
      </div>
      <a
        className='my-2 flex flex-row'
        target='_blank'
        href='https://www.instagram.com/kevin_tarazona2/'
      >
        <PiInstagramLogo className='text-[30px] rounded-lg bg-black mx-2' />
        <p>@kevin_tarazona2</p>
      </a>
      <a
        className='flex flex-row'
        target='_blank'
        href='https://github.com/Tkalejadro122'
      >
        <PiGithubLogo className='text-[30px] rounded-lg bg-black mx-2' />
        <p>@Tkalejadro122</p>
      </a>
    </div>
  );
};

export default Home;
