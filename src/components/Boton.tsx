

interface BotonProps {
    label: string;
    onClick: () => void;
    className?: string;
}

const Boton = ({ label, onClick, className }: BotonProps) =>{
    return <button onClick={onClick} className={`w-[60px] h-[60px] rounded-full text-[30px] ${className === 'operacion' ? 'bg-green-900' : 'bg-black'}`}>{label}</button>
}

export default Boton;