import Lottie from 'react-lottie';
import animationData from 'src/lotties/construction';

const OnGoing = () => {

    const currentYear = new Date().getFullYear();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        isClickToPauseDisabled: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className={'construction'}>
            <Lottie
                options={defaultOptions}
                height={250}
                width={400}
                style={{margin: '0 auto', padding: '0'}}
            />
            <h1 className={'title'}>Em construção</h1>
            <h2>Muito obrigado pela visita!</h2>
            <p>No momento, o meu espaço pessoal está sendo construído aqui.</p>
            <p>Em breve, espero apresentar conteúdos como:</p>
            <ul className={'features-list'}>
                <li>Portifólio</li>
                <li>Blog</li>
                <li>Tutoriais</li>
            </ul>
            <p className={'copyright'}>© {currentYear} | <strong>thimnz</strong> - Todos os direitos reservados</p>
        </div>
    )
}

export default OnGoing;