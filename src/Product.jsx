function Product({name , features}){
  let i  = 0
  let list = features.map((feat , index) => <li key = {index}>{feat}</li>)
  return <> 
  <h1>{name}</h1>
          <p>{list}</p>
  </>
};
export default Product ;