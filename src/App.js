import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const theSpecs = [
    {
      model: "arg-trimon",
      processor: "Ryzen 3 5300X",
      ram: "8GB",
      gpu: "RX 5600 XT ",
      cost: "53000",
      releaseDate: new Date(2020, 10, 8),
    },
    {
      model: "arg-pentax",
      processor: "Ryzen 5 3600X",
      ram: "16GB",
      gpu: "RX 5600 XT ",
      cost: "77000",
      releaseDate: new Date(2019, 7, 7),
    },
    {
      model: "arg-penton",
      processor: "Ryzen 5 5600X",
      ram: "16GB",
      gpu: "AMD RX 6600 XT",
      cost: "90000",
      releaseDate: new Date(2020, 11, 5),
    },
  ];
  return (
    <div>
      <h1>The RigBuilder</h1>
      <ExpenseItem
        model={theSpecs[0].model}
        procs={theSpecs[0].processor}
        ramz={theSpecs[0].ram}
        tym={theSpecs[0].releaseDate}
      />
      <ExpenseItem
        model={theSpecs[1].model}
        procs={theSpecs[1].processor}
        ramz={theSpecs[1].ram}
        tym={theSpecs[1].releaseDate}
      />
    </div>
  );
}

export default App;
