export function TaskSearch() {
  const search = document.createElement('div');
  search.innerHTML = `
  <h2>Filter</h2>
  <div>
      <input type="checkbox" id="scales" name="scales" checked/>
    <input type="date" id="date"> 
    <input type="date" id="date"> </div>
    <input type="text" id="text-search" placeholder="Text search">

    `;
  const container = document.getElementById('container');
  container?.appendChild(search);
}
