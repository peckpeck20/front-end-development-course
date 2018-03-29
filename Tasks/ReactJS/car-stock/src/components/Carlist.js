import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { ToastContainer, toast } from 'react-toastify';

export default class Carlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: []
    };
  }

  fetchCars = () => {
    fetch("https://carstockrest.herokuapp.com/cars")
      .then(res => res.json())
      // .then(resData => console.log(resData._embedded.cars));
      .then(resData => {
        this.setState({ cars: resData._embedded.cars });
        console.log("fetched");
      });
  };

  deleteCar = value => {
    fetch(value, { method: "DELETE" })
    .then(res => {
        this.fetchCars()
        toast.success("Car Deleted", {
            position: toast.POSITION.TOP_CENTER
          });
    });
  };

  componentDidMount() {
    this.fetchCars();
  }

  render() {
    //   const carRows =
    //   this.state.cars.map((value,index) =>
    //     <tr key={index}>
    //       <td>{index}</td>
    //       <td>{value.brand}</td>
    //       <td>{value.model}</td>
    //       <td>{value.color}</td>
    //       <td>{value.fuel}</td>
    //       <td>{value.year}</td>
    //       <td>{value.price}</td>
    //     </tr>)

    return (
      <div>
        <h3>My Cars</h3>
        {/* <table className='table'>
            <tbody>
                {carRows}
            </tbody>
        </table> */}
        <ReactTable
          data={this.state.cars}
          columns={[
            {
              columns: [
                {
                  Header: "brand",
                  accessor: "brand"
                },
                {
                  Header: "model",
                  accessor: "model"
                },
                {
                  Header: "Color",
                  accessor: "color"
                },
                {
                  Header: "Year",
                  accessor: "year"
                },
                {
                  Header: "Price",
                  accessor: "price"
                },
                {
                  Header: "Delete",
                  accessor: "_links.self.href",
                  Cell: ({ value }) => (
                    <button
                      onClick={() => {
                        this.deleteCar(value);
                      }}
                    >
                      delete
                    </button>
                  )
                }
              ]
            }
          ]}
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <ToastContainer  autoClose={1500} />
      </div>
    );
  }
}
