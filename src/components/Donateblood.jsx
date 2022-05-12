import { Input } from 'reactstrap';
import './DonateBlood.css'

function Donateblood() {
  return (
    <div className='form'>
      <div className="modal-header">
        <h4 className="modal-title text-danger" id="myModalLabel" style={{ align: "center" }}>Donor Details</h4>
      </div>
      <div className="modal-body">
        <div className="row form-group">
          <div className="col-sm-12">
            <div className="well">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <label for="username" className="control-label">Name<font color="red">*</font></label>
                  <Input type="text" name="donorFName" maxlength="50" tabindex="1" value="" onkeypress="return validateAlphaOnlyWithDotAndSpace(event)" className="form-control" id="txtBbFName">
                    <div align="center">
                      <div id="enterename" style={{ display: "none" }}>
                        <h4 className="text-danger">Please enter your name</h4>
                      </div>
                    </div>
                  </Input>
                </div>
                <div className=" col-12 col-sm-4">
                  <label for="Gender" className="control-label">Gender<font color="red">*</font></label>
                  <select name="donorGender" tabindex="1" className="form-control"><option value="-1">Select Value</option>
                    <option value="F">Female</option>
                    <option value="M">Male</option>
                    <option value="T">Transgender</option></select>
                  <div id="entergender" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your gender</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label for="Age" className="control-label">Date of Birth<font color="red">*</font></label>
                  <Input className="form-control hasDatepicker" type="text" name="dob" tabindex="0" id="datepicker" placeholder="dd-mm-yyyy" onkeydown="return false" onkeypress="return validateAlphaNumeric(event)">
                    <div id="enterdob" style={{ display: "none" }}>
                      <h4 className="text-danger">Please enter your dob</h4>
                    </div>
                  </Input>
                </div>
              </div>


              <div className="row">

                <div className="col-12 col-sm-4">
                  <label for="Mobile" className="control-label">Mobile Number<font color="red">*</font></label>
                  <Input type="text" name="donorMobile" maxlength="10" tabindex="1" value="" onkeypress="return validateNumeric(event)" className="form-control" id="txtBbLName">
                    <div id="entermobile" style={{ display: "none" }}>
                      <h4 className="text-danger">Mobile Number is required</h4>
                    </div>
                    <div id="dmobileNoTen" sstyle={{ display: "none" }}>
                      <h4 className="text-danger">Mobile Number should be 10 digit</h4>
                    </div>

                  </Input>
                </div>
                <div className="col-12 col-sm-4">
                  <label for="Address" className="control-label">Address</label>
                  <Input type="text" name="donorAddress" maxlength="150" tabindex="1" value="" onkeypress="return validateAlphaNumeric(event)" className="form-control" id="txtBbLName">
                  </Input>
                </div>

                <div className=" col-12 col-sm-4">
                  <label for="password" className="control-label">Tentative Date</label>
                  <Input className="form-control hasDatepicker" type="text" name="tentdob" id="datepicker1" tabindex="1" placeholder="dd-mm-yyyy" onkeydown="return false">
                  </Input>
                </div>

              </div>
              <div className="row">
                <div className=" col-12 col-sm-4">
                  <label for="State" className="control-label">State<font color="red">*</font></label>
                  <select name="donorState" tabindex="1" onchange="loadAddressDistrictList(this.value)" className="form-control"><option value="-1">Select State</option>
                    <option value="35">Andaman &amp; Nicobar Islands</option>
                    <option value="28">Andhra Pradesh</option>
                    <option value="12">Arunachal Pradesh</option>
                    <option value="18">Assam</option>
                    <option value="10">Bihar</option>
                    <option value="94">Chandigarh</option>
                    <option value="22">Chhattisgarh</option>
                    <option value="26">Dadra &amp; Nagar Haveli</option>
                    <option value="25">Daman &amp; Diu</option>
                    <option value="97">Delhi</option>
                    <option value="30">Goa</option>
                    <option value="24">Gujarat</option>
                    <option value="96">Haryana</option>
                    <option value="92">Himachal Pradesh</option>
                    <option value="91">Jammu and Kashmir</option>
                    <option value="20">Jharkhand</option>
                    <option value="29">Karnataka</option>
                    <option value="32">Kerala</option>
                    <option value="37">Ladakh</option>
                    <option value="31">Lakshadweep</option>
                    <option value="23">Madhya Pradesh</option>
                    <option value="27">Maharashtra</option>
                    <option value="14">Manipur</option>
                    <option value="17">Meghalaya</option>
                    <option value="15">Mizoram</option>
                    <option value="13">Nagaland</option>
                    <option value="21">Odisha</option>
                    <option value="34">Puducherry</option>
                    <option value="93">Punjab</option>
                    <option value="98">Rajasthan</option>
                    <option value="11">Sikkim</option>
                    <option value="33">Tamil Nadu</option>
                    <option value="36">Telangana</option>
                    <option value="16">Tripura</option>
                    <option value="95">Uttarakhand</option>
                    <option value="99">Uttar Pradesh</option>
                    <option value="19">West Bengal</option></select>

                  <div id="enterstate" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your state</h4>
                  </div>
                </div>
                <div className=" col-12 col-sm-4">
                  <label for="District/City" className="control-label">District/City<font color="red">*</font></label>
                  <select name="addressDistrict" id="addressDistList" onchange="loadNewBBList(this.value)" tabindex="1" className="form-control">
                    <option value="-1">Select District</option>
                  </select>
                  <div id="enterdistrict" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your district</h4>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <label for="Pincode" className="control-label">Blood Bank Name<font color="red">*</font></label>
                  <select tabindex="1" id="bbnamelist" name="bloodBankName" className="form-control">
                    <option value="-1">Select Blood Bank</option>
                  </select>
                  <div id="enterbloodbankname" style={{ display: "none" }}>
                    <h4 className="text-danger">Please enter your blood bank name</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-4">
                  <label for="username" className="control-label">Blood Group</label>
                  <select tabindex="1" name="bloodgroup" className="form-control">
                    <option value="-1">Select Blood Group </option>
                    <option value="1">A+Ve</option>
                    <option value="2">A-Ve</option>
                    <option value="3">B+Ve</option>
                    <option value="4">B-Ve</option>
                    <option value="5">AB+Ve</option>
                    <option value="6">AB-Ve</option>
                    <option value="7">O+Ve</option>
                    <option value="8">O-Ve</option>
                  </select>
                </div>
                <div className=" col-12 col-sm-4">
                  <label for="Gender" className="control-label">GoI ID</label>
                  <select tabindex="1" name="goiid" onchange="goiddiv()" className="form-control">
                    <option value="-1">Select Value</option>
                    <option value="7#18#3">Aadhar Number</option>
                    <option value="4#18#2">Driving License</option>
                    <option value="5#18#2">Govt Authority Identifier</option>
                    <option value="1#10#2">PAN  </option>
                    <option value="2#8#2">Passport Number</option>
                    <option value="3#18#2">Voter Id</option>
                  </select>
                </div>
                <div className=" col-12 col-sm-4" id="goinumber" style={{ display: "none" }}>
                  <label for="password" className="control-label">GoI ID Number</label>
                  <Input type="text" name="goinumber" className="form-control" tabindex="1" maxlength="20" placeholder="GoI ID Number">
                    <div id="entergoi" sstyle={{ display: "none" }}>
                      <h4 className="text-danger">Please enter your GOI ID number</h4>
                    </div>
                  </Input>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12 col-sm-4">
                </div>
                <div className="col-12 col-sm-4">
                  <button type="submit" tabindex="1" onclick="signup()" className="btn btn-primary btn-block btn-danger">Save</button>
                </div>
                <div className="col-12 col-sm-4">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donateblood