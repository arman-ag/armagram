
import { useState } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

const ScrollButton = () => {

    const [visible, setVisible] = useState(true)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled)
        if (scrolled > 0) {
            setVisible(false)
        }
        else if (scrolled <= 0) {
            setVisible(true)
        }
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'auto'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button>
            <FaArrowCircleDown onClick={scrollToBottom}
                style={{ display: visible ? 'inline' : 'none' }} />
        </button>
    );
}

export default ScrollButton;