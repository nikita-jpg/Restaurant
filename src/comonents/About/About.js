
import './about.css'
const About = () => {
    const texts = 
    [{
        title:"Дневные скидки по будням",
        description: "До -50% с 12 до 17 часов на основное меню: пн – 50%, вт – 40%, ср – 30%, чт – 20%",
        img:"./img/discount.svg"
    },
    {
        title:"Дневные скидки по будням",
        description: "До -50% с 12 до 17 часов на основное меню: пн – 50%, вт – 40%, ср – 30%, чт – 20%",
        img:"./img/parking.svg"
    },
    {
        title:"Дневные скидки по будням",
        description: "До -50% с 12 до 17 часов на основное меню: пн – 50%, вт – 40%, ср – 30%, чт – 20%",
        img:"./img/present.svg"
    }]
    return(
        <div className="About">
            <div className="About__discounts">
                {
                texts.map(text => (
                    <div className="About__discount-block">
                        <div className="About__logo" style={{backgroundImage: `url(${text.img})`}}></div>
                        <div className="About__text-block">
                            <span class="About__title_bold">{text.title}</span>
                            <span class="About__title_normal">{text.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export {About}