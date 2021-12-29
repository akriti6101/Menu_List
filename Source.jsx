
import Dish from './Dish.jsx';
import Card from './Card.jsx';
function Breakfast(){
    return (<>
     {Dish.map((item)=>{
           return  item.timing==="breakfast" ?
               <Card  image={item.image} price={item.price} title={item.title} key={item.id} />:"";
     } )
     }

    
    </>);
}
function Lunch(){
    return (<>
        {Dish.map((item)=>{
           return  item.timing==="lunch" ?
               <Card  image={item.image} price={item.price} title={item.title} key={item.id} />:"";
     } )
     }
    </>);
}
function Evening(){
    return (<>{Dish.map((item)=>{
        return  item.timing==="evening" ?
            <Card  image={item.image} price={item.price} title={item.title} key={item.id} />:"";
  } )
  }
  </>);
}
function Dinner(){
    return (<>{Dish.map((item)=>{
        return  item.timing==="dinner" ?
            <Card  image={item.image} price={item.price} title={item.title} key={item.id} />:"";
  } )
  }
  </>);
}

function All(){
    return (<>{Dish.map((item)=>{
           return  <Card  image={item.image} price={item.price} title={item.title} key={item.id} />;
  } )
  }</>);
}
export default Breakfast;
export {Lunch,Dinner,Evening,All};
