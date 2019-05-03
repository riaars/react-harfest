import React from 'react';
import $ from 'jquery';
import './addproject.css';
//import $ from 'jquery'
//import Button from '../components/button/button';
//import * as ROUTES from '../constants/routes';
//import {Link} from 'react-router-dom';
const AddProject= props => {
  
  return (
    <React.Fragment>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"></link>
        <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
      <div class="container" id ='ap-container'>
        <div class ='row'>
            <h2 id="HeadTitle"> Add New Project</h2>
        </div>
        <div class = 'row'>
            <div class = 'ap-title'>
                Project Name
            </div>
        </div>
        <div class = 'row'>
            <input type="text" id="ap-input"></input>
        </div>
        <div class = 'row'>
            <div class = 'ap-title'>
                Add Image
            </div>
        </div>
        <div class = 'row'>
        <div class="input-group" id="browse-select">
            <span class="input-group-btn">
                <span class="btn btn-default btn-file">
                   Browse<input type="file" id="imgInp"></input>
                </span>
            </span>
            <input type="text" class="form-control" readonly></input>
        </div>
     
        </div>
        <div class = 'row' id ='caRow'>
        <div id= 'imgHolder'>
        <img id='img-upload'/>
        </div>
        </div>
        <div class = 'row' id ='caRow'>
            <div class = 'ap-title'>
                Category</div>
        </div>
        <div class = 'row'>
        <select  class="ap-select" id="cropInput" required>
              <option value="">Farm</option>
              <option>Fish</option>
            </select>
        </div>
    
        <div class = 'row'>
            <div class = 'ap-title'>
                Project Duration
            </div>
        </div>
        <div class = 'row'>
        <select  class="ap-select" id="durationInput" required>
              <option value="">3 months</option>
              <option>6 months</option>
              <option>9 months</option>
              <option>1 year</option>
            </select>
        </div>
        <div class = 'row' >
            <div class = 'ap-title'>
                Location</div>
        </div>
        <div class = 'row'>
            
        <input type="text" id="ap-input" placeholder="Street,City,Country,PostCode"></input>
        </div>
        <div class = 'row' >
            <div class ='col' id='ap-col'>
               <div class = 'ap-title'>
                Prize</div>
            </div>
            <div class ='col' id='ap-col'>
            <div class = 'ap-title'>
             Date</div>
            </div>
        </div>
        <div class = 'row'>
            <div class ='col' id='ap-col'>
            <input type="text" id="ap-input"></input>
                </div>
                <div class ='col' id='ap-col'>
                <input type="text" id="ap-input"></input>
                </div>
        </div>
        <div class = 'row' >
            <div class ='col' id='ap-col'>
               <div class = 'ap-title'>
                Max People</div>
            </div>
            <div class ='col' id='ap-col'>
            <div class = 'ap-title'>
             Package Quatity</div>
            </div>
        </div>
        <div class = 'row'>
            <div class ='col' id='ap-col'>
            <input type="text" id="ap-input"></input>
                </div>
                <div class ='col' id='ap-col'>
                <input type="text" id="ap-input"></input>
                </div>
        </div>
        <div class = 'row' >
            <div class ='col' id='ap-col'>
               <div class = 'ap-title'>
                Discount</div>
            </div>
            <div class ='col' id='ap-col'>
            <div class = 'ap-title'>
             Insurance</div>
            </div>
        </div>
        <div class = 'row'>
            <div class ='col' id='ap-col'>
            <select  class="ap-select" id="durationInput" required>
              <option value="">No</option>
              <option>10% off</option>
              <option>20% off</option>
              <option>30 off</option>
            </select>
                </div>
                <div class ='col' id='ap-col'>
                <select  class="ap-select" id="durationInput" required>
              <option value="">Included</option>
              <option>Not Included</option>
            </select>
                </div>
        </div>
        <div class = 'row' >
            <div class = 'ap-title'>
                Project Description</div>
        </div>
        <div class = 'row' >
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <div class = 'row justify-content-center' >
          <button class="btn-add-project">ADD PROJECT</button>            
        </div>
      </div>
    </React.Fragment>
  );
};

$(document).ready( function() {
    $(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
        readURL(this);
    }); 	
});

export default AddProject;