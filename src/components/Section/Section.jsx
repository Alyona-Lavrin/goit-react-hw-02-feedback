const Section = ({title, Children}) => {
    return (
        <>
            <h4>{title}</h4>
            {Children}
        </>
    )
}

export default Section