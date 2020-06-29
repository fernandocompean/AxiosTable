import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url).then(json => setData(json.data))
  }, [])

  const dataTable = () => {
    return data.map(user => {
      return (
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.company.name}</td>
        </tr>
      )
    })
  }
  return (
    <div>
      <h1>Axios Table</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            </tr> 
        </thead>
        <tbody>{dataTable()}</tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App;
