import Cards from './Cards'

function CardGrid (props){
        return ( <span>
{props.token!==null?
 <div className="cards">
   <Cards/>
 </div>:
 <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
    <blockquote className="welcome">
        <p>There is only one happiness in this life, to love and be loved.</p>
    </blockquote>
    <footer className="author">George Sand</footer>
</div>
}    
</span>  

    )
}
export default CardGrid;