import '../Dish/dish.css'
const Dish = ({title, description, img}) => (
    <div className='dish'>
        <p>{title}</p>
        <p>{description}</p>
        <img src={img}></img>
    </div>
);

export { Dish }