import react, {useState} from "react";




const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const clickedItem = (index) =>{
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((item, index)=>{
        const active = index === activeIndex ? 'active' : '';

        return (
            <react.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={()=>clickedItem(index)}>
                    <i className='dropdown icon' />
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </react.Fragment>
        );
    });

    return (
        <div className='ui styled accordion'> 
            {renderedItems}
        </div>
    );
}

export default Accordion;