import Card from'./Card'

function App() {
  return (
    <div>
      <Card
        title = "Why Learn ReactJS?"
        text = "ReactJS offers graceful solutions to some of front-end programming’s most persistent issues, allowing you to build dynamic and interactive web apps with ease. It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. There’s never been a better time to learn React."
     />
     <Card
     title ="Take-Away Skills:"
     text = "You’ll develop a strong understanding of React’s most essential concepts: JSX, class and function components, props, state, lifecycle methods, and hooks. You’ll be able to combine these ideas in React’s modular programming style."
     />
    </div>
    
  )
}

export default App;
