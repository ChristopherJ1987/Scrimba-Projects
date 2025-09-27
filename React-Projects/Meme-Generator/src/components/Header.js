import Image from 'next/image';
import Logo from '/public/edvardMunch.png';

export default function Header() {
    return (
        <header className="header">
            <Image
                src={Logo}
                width={75}
                height={95}
                alt="Meme Logo"
                className='header--image'
            />
            <h2 className='header--title'>Meme Generator</h2>
            <h4 className='header--project'>React Course - Project 3</h4>
        </header>
    )
}