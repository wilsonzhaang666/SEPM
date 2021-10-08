import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BookCell } from "./BookCell";
import { Link } from "react-router-dom";

const frameStyle = {
    border: "solid",
    borderWidth: 1,
    paddingLeft: 48,
    paddingRight: 48,
    paddingTop: 12,
};

class SoldBook extends Component {
    
    state = {
        soldBooks: null,
    };
    componentDidMount() {
        this.getSoldBooks();
        this.filter = "True"

    }
    handleFilter(event) {
        event.preventDefault();
        this.filter ="false"
        this.thepostcode =event.target[0].value;
        return 
    }

    getSoldBooks = () => {
        setTimeout(() => {
            const books = [
                {
                    id: 1,
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlMZY1F2L96s7TqGJ99-Pbcaa3vRt2NHL7Q&usqp=CAU",
                    name: "Book1",
                    postcode: 3000,
                    customer: "Melbourne",
                },
                { id: 2, name: "SomeWhere", postcode: 3088, customer: "Jack" },
                {
                    id: 3,
                    name: "Carlton",
                    postcode: 3053,
                    customer: "Jack",
                },
                {
                    id: 4,
                    name: "Docklands",
                    postcode: 3008,
                    customer: "Jack",
                },
                {
                    id: 5,
                    image: "https://images.squarespace-cdn.com/content/v1/56bf8adad51cd4587e5f14b2/1514572181808-ERMYYQNWJQXHHRC2NO1H/best-books-book-youll-ever-read.jpg",
                    name: "South Bank",
                    postcode: 3006,
                    customer: "Jack",
                },
                {
                    id: 6,
                    name: "Melbourne",
                    postcode: 3004,
                    customer: "Jack",
                },
            ];

            this.setState({ ...this.state, soldBooks: books });
        }, 2000);



    };


    render() {

        if(this.filter==!"True"){
            return(
                <div>
                    <div className="container">
                <h2>Sold Book</h2>
                <hr class="solid"></hr>

                <div className="container" style={frameStyle}>
                    <h5>My Sold Book</h5>
                    <hr class="solid"></hr>
                    <form onSubmit={this.handleFilter}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search by postcode</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter Postcode"
            name="s" 
            value={this.postcode}
            onChange={this.handleChange}
        />
        <button type="submit">Search</button>
    </form>
                    <div class="row">
                        
                        {this.state.soldBooks
                            ? this.state.soldBooks.map((book) => (
                                  <div
                                      class="col-4"
                                      style={{
                                          height: 500,
                                          width: 300,
                                          border: "solid 1px",
                                      }}
                                  >
                                      
                                      <Link to={`/book/${book.id}`}>
                                      {(() => {
                                         if (book.postcode == this.thepostcode){
                                        return (
                                            <BookCell book={book} />
                                           )
                                            }
              
                                      return null;
                                        })()}


                                       
                                      </Link>
                                  </div>
                              ))
                            : "Loading"}
                    </div>
                </div>
            </div>
                </div>
            )
        }
        return (
            <div className="container">
                <h2>Sold Book</h2>
                <hr class="solid"></hr>

                <div className="container" style={frameStyle}>
                    <h5>My Sold Book</h5>
                    <hr class="solid"></hr>
                    <form onSubmit={this.handleFilter}>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search by postcode</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Enter Postcode"
            name="s" 
            value={this.postcode}
            onChange={this.handleChange}
        />
        <button type="submit">Search</button>
    </form>
                    <div class="row">
                        
                        {this.state.soldBooks
                            ? this.state.soldBooks.map((book) => (
                                  <div
                                      class="col-4"
                                      style={{
                                          height: 500,
                                          width: 300,
                                          border: "solid 1px",
                                      }}
                                  >
                                      
                                      <Link to={`/book/${book.id}`}>

                                            

                                          {<BookCell book={book} />}
                                      </Link>
                                  </div>
                              ))
                            : "Loading"}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {})(SoldBook);
