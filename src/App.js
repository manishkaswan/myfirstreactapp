import './App.css';
import ExpenceItems from './components/ExpenceItems';


const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    LocationOfExpenditure: 'home',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    LocationOfExpenditure: 'home',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    LocationOfExpenditure: 'car',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    LocationOfExpenditure: 'home',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  return (
    <>
    <h2>This is me live using react</h2>
    <ExpenceItems 
      title = {expenses[0].title}
      LocationOfExpenditure = {expenses[0].LocationOfExpenditure}
      amount = {expenses[0].amount} 
      date = {expenses[0].date}>
    </ExpenceItems>
    <ExpenceItems 
      title = {expenses[1].title}
      LocationOfExpenditure = {expenses[1].LocationOfExpenditure}
      amount = {expenses[1].amount} 
      date = {expenses[1].date}>
    </ExpenceItems>
    <ExpenceItems 
      title = {expenses[2].title}
      LocationOfExpenditure = {expenses[2].LocationOfExpenditure}
      amount = {expenses[2].amount} 
      date = {expenses[2].date}>
    </ExpenceItems>
    <ExpenceItems 
      title = {expenses[3].title}
      LocationOfExpenditure = {expenses[3].LocationOfExpenditure}
      amount = {expenses[3].amount} 
      date = {expenses[3].date}>
    </ExpenceItems>
    </>
  );
}
export default App;
