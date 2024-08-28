import axios from "axios"
import { useFormik } from "formik"
import { ENDPOINT } from "../config"
import { useNavigate } from "react-router-dom"
import Footered from "./Footered"
import Navbared from "./Navbared"


function SubmitPr(){

    const navigate = useNavigate()
    const formik = useFormik({
        initialValues:{
            title:'',
            Description:'',
            Status:'',
            cars:'',
            Rooms:'',
            price:'',
            Aria:'',
            Address:'',
            City:'',
            State:'',
            Country:'',
            Latitude:'',
            Longitude:'',
            file:'',
            BuildingAge:'',
            BedRooms:'',
            BathRooms:'',
            name:'',
            Username:'',
            email:'',
            Phone:'',

        },

        validate: (values) => {
            let errors = {}

            if (!values.title) {
                errors.title = "Please enter title"
            }
            if (!values.Description) {
                errors.Description = "Please enter Description"
            }
            if (!values.Status) {
                errors.Status = "Please enter Status"
            }
            if (!values.cars) {
                errors.cars = "Please enter cars"
            }
            if (!values.Rooms) {
                errors.Rooms = "Please enter Rooms"
            }
            if (!values.price) {
                errors.price = "Please enter price"
            }
            if (!values.Aria) {
                errors.Aria = "Please enter Aria"
            }
            if (!values.Address) {
                errors.Address = "Please enter Address"
            }
            if (!values.City) {
                errors.City = "Please enter City"
            }
            if (!values.State) {
                errors.State = "Please enter State"
            }
            if (!values.Country) {
                errors.Country = "Please enter Country"
            }
            if (!values.Latitude) {
                errors.Latitude = "Please enter Latitude"
            }
            if (!values.Longitude) {
                errors.Longitude = "Please enter Longitude"
            }
            if (!values.file) {
                errors.file = "Please enter file"
            }
            if (!values.BuildingAge) {
                errors.BuildingAge = "Please enter BuildingAge"
            }
            if (!values.BedRooms) {
                errors.BedRooms = "Please enter BedRooms"
            }
            if (!values.BathRooms) {
                errors.BathRooms = "Please enter BathRooms"
            }
            if (!values.name) {
                errors.name = "Please enter name"                
            }
            if (!values.Username) {
                errors.Username = "Please enter Username"                
            }
            if (!values.email) {
                errors.email = "Please enter email"                
            }
            if (!values.Phone) {
                errors.Phone = "Please enter Phone"                
            }

            return errors
        },

        onSubmit: (values) => {
            try {
                const formdata = {
                    title:values.title,
                    Description:values.Description,
                    Status:values.Status,
                    cars:values.cars,
                    Rooms:values.Rooms,
                    price:values.price,
                    Aria:values.Aria,
                    Address:values.Address,
                    City:values.City,
                    State:values.State,
                    Country:values.Country,
                    Latitude:values.Latitude,
                    Longitude:values.Longitude,
                    file:values.file,
                    BuildingAge:values.BuildingAge,
                    BedRooms:values.BedRooms,
                    BathRooms:values.BathRooms,
                    name:values.name,
                    Username:values.Username,
                    email:values.email,
                    Phone:values.Phone,

                }

            
                localStorage.setItem('formnodata', JSON.stringify(formdata))
                navigate("/")


            } catch (error) {
                console.log(error.message);
            }
        }


    })
    

    return(
        <div>

            <Navbared />
        
            <h1 class="text-center mt-5">Submit Property</h1>

            <div class="container">
                <div class="row">
                    <div class="col-lg-12 mt-5">
                        <h3 class="text-success border-bottom border-3 pb-3">Property description And Price</h3>
                    </div>
                </div>
            </div>




            <form id="form" onSubmit={formik.handleSubmit}>

                <div className="container">
                    <div className="row">
                    
                        <div className="col-lg-12 mt-3">
                            <label for="title"><b>Property Title</b></label>
                            <input type="text" name="title" id="title" onChange={formik.handleChange} className="w-100 mt-2" />
                            {formik.errors.title && <p className="error-txt">{formik.errors.title}</p>}
                        </div>
                        <div className="col-lg-12 mt-3">
                            <label for="Description"><b>Property Description</b></label><br />
                            <textarea name="Description" id="Description" cols="20" rows="7" onChange={formik.handleChange} className="mt-2 w-100"></textarea>
                            {formik.errors.Description && <p className="error-txt">{formik.errors.Description}</p>}

                        </div>
                        <div className="col-lg-12  mt-3">
                            <div className="row text-center">
                                <div className="col-lg-4">
                                    <label for="Status"><b>Status</b></label> <br />
                                    <select id="Status" name="Statuslist" form="Statusform" onChange={(e) => formik.setFieldValue("Status", e.target.value)} className="p-5 pt-2 pb-2">
                                        <option value="Status">Select Status</option>
                                        <option value="saab">ClassNameic</option>
                                        <option value="opel">Luxurius</option>
                                        <option value="audi">Midium</option>
                                    </select>
                                    {formik.errors.Status && <p className="error-txt">{formik.errors.Status}</p>}

                                </div>
                                <div className="col-lg-4">
                                    <label for="cars"><b>Type</b></label> <br />
                                    <select id="cars" name="carlist" form="carform"  onChange={(e) => formik.setFieldValue("cars", e.target.value)} className="p-5 pt-2 pb-2">
                                        <option value="Status">Select Status</option>
                                        <option value="saab">Villa</option>
                                        <option value="opel">Apartment</option>
                                        <option value="audi">Office</option>
                                        <option value="audi">Shop</option>
                                        <option value="audi">Township</option>
                                    </select>
                                    {formik.errors.cars && <p className="error-txt">{formik.errors.cars}</p>}

                                </div>
                                <div className="col-lg-4">
                                    <label for="Rooms"><b>Rooms</b></label> <br />
                                    <select id="Rooms" name="Roomslist" form="Roomsform"  onChange={(e) => formik.setFieldValue("Rooms", e.target.value)} className="p-5 pt-2 pb-2">
                                        <option value="Status">Select Rooms</option>
                                        <option value="saab">1 bhk</option>
                                        <option value="saab">2 bhk</option>
                                        <option value="opel">3 bhk</option>
                                        <option value="audi">4 bhk</option>
                                        <option value="audi">5 bhk</option>
                                    </select>
                                    {formik.errors.Rooms && <p className="error-txt">{formik.errors.Rooms}</p>}

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-6 mt-3">
                                    <label for="price"><b>price</b></label><br />
                                    <input type="text" id="price" name="price" placeholder="USD" onChange={formik.handleChange} className="w-100 text" />
                                    {formik.errors.price && <p className="error-txt">{formik.errors.price}</p>}

                                </div>
                                <div className="col-lg-6 mt-3">
                                    <label for="Aria"><b>Aria</b></label><br />
                                    <input type="text" id="Aria" name="Aria" placeholder="SQFT" onChange={formik.handleChange} className="w-100" />
                                    {formik.errors.Aria && <p className="error-txt">{formik.errors.Aria}</p>}

                                </div>
                            </div>
                        </div>



                    </div>
                </div>


                <div className="container mt-5 ">
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <h3 className="text-success border-bottom border-3 pb-3">Property Media</h3>
                        </div>
                        <div className="row p-5">
                            <div className="col-lg-6 mt-3">
                                <label for="Address"><b>Address</b></label><br />
                                <input type="text" id="Address" name="Address" placeholder="Enter your Address" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.Address && <p className="error-txt">{formik.errors.Address}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="City"><b>City</b></label><br />
                                <input type="text" id="City" name="City" placeholder="Enter your City" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.City && <p className="error-txt">{formik.errors.City}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="State"><b>State</b></label><br />
                                <input type="text" id="State" name="State" placeholder="Enter your State" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.State && <p className="error-txt">{formik.errors.State}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="Country"><b>Country</b></label><br />
                                <input type="text" id="Country" name="Country" placeholder="Enter your Country" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.Country && <p className="error-txt">{formik.errors.Country}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="Latitude"><b>Google Maps Latitude</b></label><br />
                                <input type="text" id="Latitude" name="Latitude" placeholder="Google Maps Latitude"
                                   onChange={formik.handleChange} className="w-100"
                                />
                                {formik.errors.Latitude && <p className="error-txt">{formik.errors.Latitude}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="Longitude"><b>Google Maps Longitude</b></label><br />
                                <input type="text" id="Longitude" name="Longitude" placeholder="Google Maps Longitude"
                                    onChange={formik.handleChange} className="w-100" 
                                />
                                {formik.errors.Longitude && <p className="error-txt">{formik.errors.Longitude}</p>}

                            </div>
                        </div>
                    </div>
                </div>





                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mt-5 ">
                            <h3 className="text-success border-bottom border-3 pb-3">File upload</h3>
                        </div>
                        <div className="col-lg-12 text-center border border-3 p-3">
                            <i className="fa-solid fa-file-arrow-up" style={{fontSize: "50px"}}></i><br />
                            <input type="file" name="file" id="file" onChange={formik.handleChange} />
                            {formik.errors.file && <p className="error-txt">{formik.errors.file}</p>}

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 mb-5 mt-5">
                            <h3 className="text-success border-bottom border-3 pb-3">Extra Information</h3>
                        </div>
                        <div className="col-lg-4">
                            <label for="BuildingAge"><b>BuildingAge</b>(Optional)</label> <br />
                            <select id="BuildingAge" name="Biulding" form="Biuldingform" onChange={(e) => formik.setFieldValue("BuildingAge", e.target.value)} className=" pt-2 pb-2 w-100">
                                <option value="Status">Select Age</option>
                                <option value="saab">1 year</option>
                                <option value="opel">2 year</option>
                                <option value="audi">3 year & Above</option>
                            </select>
                            {formik.errors.BuildingAge && <p className="error-txt">{formik.errors.BuildingAge}</p>}

                        </div>  

                        <div className="col-lg-4">
                            <label for="BedRooms"><b>BedRooms</b>(Optional)</label> <br />
                            <select id="BedRooms" name="BedRooms" form="Bedform" onChange={(e) => formik.setFieldValue("BedRooms", e.target.value)} className="pt-2 pb-2 w-100">
                                <option value="Status">Select BedRooms</option>
                                <option value="saab">1</option>
                                <option value="opel">2</option>
                                <option value="audi">3 & Above</option>
                            </select>
                            {formik.errors.BedRooms && <p className="error-txt">{formik.errors.BedRooms}</p>}

                        </div>
                        <div className="col-lg-4">
                            <label for="BathRooms"><b>BathRooms</b>(Optional)</label> <br />
                            <select id="BathRooms" name="BathRooms" form="Bathform" onChange={(e) => formik.setFieldValue("BathRooms", e.target.value)} className="pt-2 pb-2 w-100">
                                <option value="Status">Select BathRooms</option>
                                <option value="saab">1</option>
                                <option value="opel">2</option>
                                <option value="audi">3 & Above</option>
                            </select>
                            {formik.errors.BathRooms && <p className="error-txt">{formik.errors.BathRooms}</p>}

                        </div>
                    </div>
                </div>


                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <h3 className="text-success border-bottom border-3 pb-3">Property Features</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" className="ms-lg-0" />
                                <label for="vehicle1">Air conditioner</label>

                                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" className="ms-lg-5" />
                                <label for="vehicle2">Swiming pool</label>

                                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" className="ms-lg-5" />
                                <label for="vehicle3">center heating</label>

                                <input type="checkbox" id="vehicle4" name="vehicle2" value="Car" className="ms-lg-5" />
                                <label for="vehicle2">Laundry room</label>

                                <input type="checkbox" id="vehicle5" name="vehicle3" value="Boat" className="ms-lg-5" />
                                <label for="vehicle3">Gym</label>

                                <input type="checkbox" id="vehicle6" name="vehicle2" value="Car" className="ms-lg-5" />
                                <label for="vehicle2">Alarm</label>

                                <input type="checkbox" id="vehicle7" name="vehicle3" value="Boat" className="ms-lg-5" />
                                <label for="vehicle3">Window covering</label>

                                <input type="checkbox" id="vehicle8" name="vehicle2" value="Car" className="ms-lg-5" />
                                <label for="vehicle2">Refrigerator</label> <br />

                                <input type="checkbox" id="vehicle9" name="vehicle3" value="Boat" className="ms-lg-0" />
                                <label for="vehicle3">TV cable & WIFI</label>

                                <input type="checkbox" id="vehicle10" name="vehicle2" value="Car" className="ms-lg-5" />
                                <label for="vehicle2">Microwave</label>


                            </div>
                        </div>
                    </div>
                </div>




                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <h3 className="text-success border-bottom border-3 pb-3">Contact Information</h3>
                        </div>
                        <div className="row p-5">
                            <div className="col-lg-6 mt-3">
                                <label for="name"><b>Name</b></label><br />
                                <input type="text" id="name" name="name" placeholder="Enter your name" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.name && <p className="error-txt">{formik.errors.name}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="Username"><b>Username</b></label><br />
                                <input type="text" id="Username" name="Username" placeholder="Enter your Username"
                                   onChange={formik.handleChange} className="w-100" />
                                {formik.errors.Username && <p className="error-txt">{formik.errors.Username}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="email"><b>Email</b></label><br />
                                <input type="text" id="email" name="email" placeholder="Enter your Email" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.email && <p className="error-txt">{formik.errors.email}</p>}

                            </div>
                            <div className="col-lg-6 mt-3">
                                <label for="Phone"><b>Phone - Number</b></label><br />
                                <input type="text" id="Phone" name="Phone" placeholder="Enter your Phone" onChange={formik.handleChange} className="w-100" />
                                {formik.errors.Phone && <p className="error-txt">{formik.errors.Phone}</p>}

                            </div>
                            
                        </div>
                    </div>
                </div>

                <div  className="col-lg-12 text-center mt-5 ">
                    <button className="bg-success px-4 py-2 rounded" style={{textDecoration: "none", color: "white"}}>Submit property</button>
                </div>


                {/* <div className="col-lg-12 text-center mt-5 ">
                        <a href="/home" type="button" className="bg-success px-4 py-2 rounded"
                            style={{textDecoration: "none", color: "white"}}>
                                Submit property
                        </a>
                </div> */}


            </form>


            <Footered />









        </div>
    )
}

export default SubmitPr