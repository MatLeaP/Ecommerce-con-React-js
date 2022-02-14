const Button = ({label, borderRadius = '40%', backgroundColor= 'yellow', handleClick}) =>{
    return(
        <button style ={{borderRadius, backgroundColor}} onClick={handleClick}  >{label}
        </button>
    )
}
export default Button