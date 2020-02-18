import React,{useState} from 'react';
import '../App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
function Informationform() {
    const [data,setData] = useState({sex:''});

    const handleChange = (e) => {setData({...data,[e.target.name]:e.target.value})
    console.log(data)
}
    return (

        <div>

            <form style={{padding:'2%'}}>

                {/*<div class="row"><div class="col" style={{textAlign: "left"}}><label style={{marginLeft:"6px"} }>
                Error MSG:
               
      </label>*/}


                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Username:</label></div>
                    <div class="col-sm-6">
                        <input class="form-control" type="text" name="username" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange} />
                    </div>
                </div>



                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Name:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="name" style={{ marginLeft: '10px' }} placeholder="" />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Surname:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="text" name="surname" style={{ marginLeft: '10px' }} placeholder="" />
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Email:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="email" name="email" style={{ marginLeft: '10px' }} placeholder="someone@outlook.com" onChange={handleChange}/>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Password:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="password" name="password" style={{ marginLeft: '10px' }} placeholder="" aria-describedby="passwordHelp" onChange={handleChange}/>
                        <small id='passwordHelp' class="form-text text-muted">between 6 - 30 characters including alphabet and number</small>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Address:</label></div>
                    <div class='col-sm-6'>
                        <textarea class="form-control" name='address' rows="3" style={{ marginLeft: '10px' }} onChange={handleChange}></textarea>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Tel:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="number" name="tel" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange}/>
                    </div></div>

                <div class="form-group row">
                    <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>Birthdate:</label></div>
                    <div class='col-sm-6'>
                        <input class="form-control" type="date" name="Birthdate" style={{ marginLeft: '10px' }} placeholder="" onChange={handleChange}/>
                    </div></div>
                <div class='form-group row'>
                <legend class="col-form-label col-sm-2">Sex</legend>
                <div class="col-sm-3">
                <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="sex" id="inlineRadio1" value="Male" onChange={handleChange}/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="sex" id="inlineRadio2" value="Female" onChange={handleChange}/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
      </div>
      </div>

                            <div class="form-group row">
                                <div class='col-form-label col-sm-2' style={{ position: 'static', left: '0px' }}><label style={{ color: "red" }}>*</label><label>NationalID:</label></div>
                                <div class='col-sm-6'>
                                    <input class="form-control" type="number" name="nationalID" onChange={handleChange} style={{ marginLeft: '10px' }} placeholder="x-xxxx-xxxxx-xx-x" />
                                </div></div>

            <div class='col-sm-8'>
                            <button type='submit' class='btn btn-primary' style={{position:'absolute',right:'0px'}}>Register</button>
                            </div>
        </form>

                    </div>

                    );
                }
                
  export default Informationform;