import './Tag.css'

function Tag({ children }) {
    return (
        <div className='tag'>
            <p>{children}</p>
        </div>
    )
}

export default Tag