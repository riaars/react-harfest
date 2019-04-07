import React from 'react';
import ReactDOM from 'react-dom';
import "./transactionlistf.css";
import Button from '../components/button/button';

const transactionlistf = props => { 
        return (
            <html lang="en">
                <head>
                    <meta charset="utf-8"></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <title>Transaction List</title>
                </head>

                <body>                   
                    <div className = "container">  
                       <div className="row justify-content-center">
                            <button type = "button" className = "btn">
                            <div className="-2">
                            <span className = "general">
                                ALL
                            </span>
                            </div>
                            </button>
                            <button type = "button" className = "btn" onclick = "displayUV()">
                            <div className="-2">
                            <span className = "specific" id ="keke">
                                Under Review
                            </span>
                            </div>
                            </button>
                            <button type = "button" className = "btn">
                            <div className="-2">
                            <span className = "specific">
                                In Porgress
                            </span>
                            </div>
                            </button>
                            <button type = "button" className = "btn">
                            <div className="-2">
                            <span className = "specific">
                                Completed
                            </span>
                            </div>
                            </button>
                       </div>

                        <hr className = "line"></hr>

                       <div className = "module" id = "module1">
                             <div className = "name">
                             Cattle Farm New Zealand
                             </div>
                             <div>
                             <span className = "bitmap-icon">
                             &nbsp;&nbsp;&nbsp;&nbsp;
                             </span>
                             <span className = "status">
                             Under Review
                             </span>
                             </div>
                             <div className = "date">
                             Date
                             </div>
                             <div>
                             <div className = "concretetime">
                             2019-03-20 
                             </div>
                             <button type= "button" className = "bedit">
                             <span className = "etext">
                             Edit
                             </span>
                             </button>
                             </div>
                       </div>
                      
                       <hr className = "line"></hr>

                       <div className = "module" id = "module2">
                             <div className = "name">
                             Cattle Farm New Zealand
                             </div>
                             <div>
                             <span className = "bitmap-iconY">
                             &nbsp;&nbsp;&nbsp;&nbsp;
                             </span>
                             <span className = "statusY">
                             In Progress
                             </span>
                             </div>
                             <div>
                             <span className = "date">
                             Date
                             </span>
                             <span className = "remaining">
                             Remaining time
                             </span>
                             </div>
                             <div>
                             <div className = "concretetime">
                             2019-05-01 
                             </div>
                             <span className = "remainingvalue">
                             33 days
                             </span>
                             </div>
                       </div>

                       <hr className = "line"></hr>

                       <div className = "module" id = "module3">
                             <div className = "name">
                             Corn Field Vietnam
                             </div>
                             <div>
                             <span className = "bitmap-iconG">
                             &nbsp;&nbsp;&nbsp;&nbsp;
                             </span>
                             <span className = "statusG">
                             Completed
                             </span>
                             </div>
                             <div>
                             <span className = "date">
                             Date
                             </span>
                             <span className = "return">
                             Return
                             </span>
                             </div>
                             <div>
                             <span className = "concretetime">
                             2019-03-24
                             </span>
                             <span className = "returnvalue">
                                 $2700
                             </span>
                             </div>
                       </div>
                       <hr className = "line"></hr>

                        <div className = "module" id = "module4">
                            <div className = "name">
                            Shrimp Central Java
                            </div>
                            <div>
                            <span className = "bitmap-iconG">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                            <span className = "statusG">
                            Completed
                            </span>
                            </div>
                            <div>
                            <span className = "date">
                            Date
                            </span>
                            <span className = "return">
                                Return
                            </span>
                            </div>
                            <div>
                            <span className = "concretetime">
                            2019-02-22 
                            </span>
                            <span className = "returnvalue">
                            $900
                            </span>
                            </div>
                        </div>

                        <hr className = "line"></hr>

                        <button type = "button" className = "btnbottom">
                        <span className = "more">
                        See More
                        </span>
                        </button>
                    </div>   

                    <script src="https://code.jquery.com/jquery.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </html>
        ); 
};
 
export default transactionlistf;