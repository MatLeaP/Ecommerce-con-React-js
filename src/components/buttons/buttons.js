const Button = ({label, borderRadius = '40%', backgroundColor= 'yellow'}) =>{
    return(
        <button style ={{borderRadius, backgroundColor}}  >{label}
        </button>
    )
}
export default Button