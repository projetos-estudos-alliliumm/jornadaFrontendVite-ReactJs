import './Card.css'
import Tag from '../Tag/Tag'

function Card(props) {
    const item = props.item
    return (
        <>
            <div className='card'>
                <h2>{item['name']}</h2>
                <div>
                    <div className='Tags'>
                        <Tag>Status: {item['status']}</Tag>
                        <Tag>Espécie: {item['species']}</Tag>
                        <Tag>Origem: {item.origin['name']}</Tag>
                    </div>
                    <img src={item['image']}/>
                </div>
            </div>
        </>
    )
}

export default Card