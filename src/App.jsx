import './App.css'
import Counter from './Counter'

function App() {

  return (
    <>
      <h1>Weekly Fitness tracker</h1>
      <section>
        <Counter title="Cardio session"/>
        <Counter title="Weight session"/> 
        <Counter title="Glasses of water"/>


      </section>
    </>
  )
}

export default App
