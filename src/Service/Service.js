import'./Service.css'
import'./ServiceItem'
import ServiceItem from './ServiceItem';
function Service(){
    let services=[
        {
            seviceIcon :'bi bi-briefcase' ,
            serviceTitle :'WEB DESIGN', 
            serviceInfo :'alirezaLorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
        },
         {
            seviceIcon :'bi bi-card-checklist' ,
            serviceTitle :'WEB DEVELOPMENT', 
            serviceInfo :'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
        },
         {
            seviceIcon :'bi bi-bar-chart' ,
            serviceTitle :'PHOTOGRAPHY', 
            serviceInfo :'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
        },
         {
            seviceIcon :'bi bi-binoculars' ,
            serviceTitle :'RESPONSIVE DESIGN', 
            serviceInfo :'3Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
        },
         {
            seviceIcon :'bi bi-brightness-high' ,
            serviceTitle :'GRAPHIC DESING', 
            serviceInfo :'4Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
        },
         {
            seviceIcon :'bi bi-calendar4-week' ,
            serviceTitle :'MARKETING SEVICES', 
            serviceInfo :'5Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
        },
    ]
    return(
<section id="services">
      <div className="container">
        <div className="section-info">
          <h2 className="section-title">SERVICES</h2>
          <p className="section-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="row">

<ServiceItem {...services[0]}/>
<ServiceItem {...services[1]}/>
<ServiceItem {...services[2]}/>
<ServiceItem {...services[3]}/>
<ServiceItem {...services[4]}/>
<ServiceItem {...services[5]}/>

        </div>
      </div>
    </section>
    )
}
export default Service;
