import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css'



function Booklist() {
  return (
    
    <section className='booklist'>
      
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>

    </section>
  );
  

}
const Book=()=>{
  return (
    <article>
      <Image/>
      <Title/>
      <Author/>

    </article>
  )
};
const Image=()=><img src="https://cdn.dsmcdn.com/ty324/product/media/images/20220206/6/45542573/380901818/1/1_org.jpg" alt="" /> 


const Author=()=><h4>ROBERT WALDINGER</h4>;
const Title=()=><h5>Lessons from world's best writer</h5>;

ReactDOM.render(<Booklist/>, document.getElementById('root')); 
  