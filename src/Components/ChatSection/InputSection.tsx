import { AiOutlinePaperClip } from 'react-icons/ai';
import { BsEmojiSmile } from 'react-icons/bs';
import { IoMdSend } from 'react-icons/io';
import { useSelector } from 'react-redux';
import './chatSection.scss';
import { allMessageType } from './types';

const InputSection = ({ setText, text, send }: allMessageType) => {
  const permission = useSelector((state: any) => state.message.sendPermission);

  const textEntry = (e) => {
    setText(e.target.value);
  };
  return (
    <form className="send-box" onSubmit={send}>
      <div className="send-box-input">
        <div className="input-style">
          <button>
            <BsEmojiSmile color="#A8ABAD" size="25px" />
          </button>
          <input
            autoFocus={true}
            value={text}
            placeholder="Message"
            type="text"
            onChange={textEntry}
          />
          <button>
            <AiOutlinePaperClip color="#A8ABAD" size="25px" />
          </button>
        </div>
      </div>
      <div className="send-box-button">
        <button type="submit" onClick={send} disabled={!permission}>
          <IoMdSend size="2.1rem" color="#3390EC" />
        </button>
      </div>
    </form>
  );
};

export default InputSection;
