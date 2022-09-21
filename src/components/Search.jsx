const { useState } = React;
var Search = (props) => {
  const [entry, setEntry] = useState('');
  // console.log(event, 'events');
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={entry}
        onChange={(event) => setEntry(event.target.value)}/>
      <button className="btn hidden-sm-down" onClick={(event) => props.handleInput(entry)}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// onChange event in input field
  //event.target, event.target.value
//set value equal to state vaiable

// function TaskForm({ handleSubmission }) {

//   const [entry, setEntry] = useState("");
//   return (
//     <form onSubmit={(event) => {
//       event.preventDefault();
//       handleSubmission(entry);
//     }}>
//       <input type="text" placeholder="Add a new task..." value={entry}
//         onChange={(event) => setEntry(event.target.value)} />
//       <button type="submit">Add</button>
//     </form>
//   )

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
