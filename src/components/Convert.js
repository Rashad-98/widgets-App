import react, {useState, useEffect} from "react";
import axios from "axios";

const Convert = ({text, language}) => {
    const [translated, setTranslated] = useState('');
    const [languageOld, setLanguageOld] = useState(language);

    useEffect(()=>{
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
            params: {
                q: text,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }})
            setTranslated(data.data.translations[0].translatedText);
        }
        
        if(!(language === languageOld) && !(text === '')){
            doTranslation();
            setLanguageOld(language);
        }else if(!(text === '')) {
            const timerId = setTimeout(()=>{doTranslation()},2000)
            return ()=>{clearTimeout(timerId)}
        }
        
    }, [text, language]);

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    );
}

export default Convert;
