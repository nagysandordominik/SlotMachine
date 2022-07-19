class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot machines!</h1>
        <Machine 
          s1="X"
          s2="X"
          s3="O"
        />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)