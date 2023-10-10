import "../../components/Host/host.scss"

export default function Host({ host }) {
   const splittedHost = host.name.split(' ')
   const [name, lastname] = splittedHost
   return (
      <div className="host">
         <div className="host_name">
            <p className="host__firstname">{name.trim()}</p>
            <p className="host__lastname">{lastname.trim()}</p>
         </div>

         <img src={host.picture} alt="" className="host__picture" />
      </div>
   )
}