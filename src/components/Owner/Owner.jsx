import "../../components/Host/host.scss"

export default function Host({ host }) {
   const splittedHost = host.name.split(' ')
   const [name, lastname] = splittedHost
   return (
      <div className="host">
         <div className="host">
            <p className="host">{name.trim()}</p>
            <p className="host">{lastname.trim()}</p>
         </div>

         <img src={host.picture} alt="" className="host" />
      </div>
   )
}
