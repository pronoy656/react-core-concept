export default function Use ({use}){
  const {name,email} = use
    return(
        <div className="single">
            <h3>Name :{name}</h3>
            <p>Email :{email}</p>
        </div>
    )
}