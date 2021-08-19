import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//my styling
import "../Dashboard/DashboardMain.css";
import "./Applecations.css";
import { Create } from './popupElement.js'

//calendar
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';


const Applecations = (props) => {

  const { backendurl } = props;

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userName = urlParams.get('userName');
  const accessKey = urlParams.get('accessKey');


  const dashboard_url = `/dashboard/?userName=${userName}&accessKey=${accessKey}`;
  const analytics_url = `/dashboard/analytics/?userName=${userName}&accessKey=${accessKey}`;
  const profile_url = `/dashboard/profile/?userName=${userName}&accessKey=${accessKey}`;
  const applecations_url = `/dashboard/applecations/?userName=${userName}&accessKey=${accessKey}`;

  const [openCreate, setOpenCreate] = useState(false);

  //create new form
  const CreateNew = () => {

    //all form fields
    const [company, setCompany] = useState("");
    const [jobTitle, setjobTitle] = useState("");
    const [location, setLocation] = useState("");
    const [submittedDate, setSubmittedDate] = useState("")
    const [pending, setPending] = useState(true);
    const [rejected, setRejected] = useState(false);
    const [accepted, setAccepted] = useState(false);
    const [description, setDescription] = useState("")
    const [notes, setNotes] = useState("");

    const [selectedDate, setSelectedDate] = useState(new Date(2022, 0, 1))

    const [created, setCreated] = useState(false);


    // handle date data
    const handleDateChange = (date) => {
      console.log(date);
      const datestr = date.toString()
      setSelectedDate(date)
      //date data conversion to be API compatible

      const monthInt = datestr.substring(4, 7);
      const day = datestr.substring(8, 10);
      const year = datestr.substring(11, 15);
      console.log(`(${monthInt})`)

      const monthToInt = (month) => {
        if (month == "Jan") return "01";
        if (month == "Feb") return "02";
        if (month == "Mar") return "03";
        if (month == "Apr") return "04";
        if (month == "May") return "05";
        if (month == "Jun") return "06";
        if (month == "Jul") return "07";
        if (month == "Aug") return "08";
        if (month == "Sep") return "09";
        if (month == "Oct") return "10";
        if (month == "Nov") return "11";
        if (month == "Dev") return "12";
      };

      const month = monthToInt(monthInt);
      const finaldate = `${year}-${month}-${day}`
      setSubmittedDate(finaldate)
      console.log(finaldate)
      console.log(submittedDate)

    }



    // handle pop up
    const createClick = () => {
      setOpenCreate(!openCreate);
      console.log("popup open!")
    }

    const [submit, setSubmit] = useState(0);

    //handle submit
    const submitClick = () => {
      setSubmit(submit + 1);
    }

    //submit request
    useEffect(() => {

      const creationinfo = {
        "cat": accessKey,
        "company": company,
        "jobTitle": jobTitle,
        "location": location,
        "submittedDate": submittedDate,
        "pending": pending,
        "rejected": rejected,
        "accepted": accepted,
        "description": description,
        "notes": notes,
      }

      console.log(creationinfo)

      const requestInfo = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(creationinfo)
      };

      const newAppleAPI = `${backendurl}/NewApple`;

      fetch(newAppleAPI, requestInfo).then(response => response.json())
        .then(json => {
          console.log(json)

          if (json.cat == accessKey) {
            console.log("apple created!")
            setCreated(true)
          }
          else {
            console.log("apple creation unsuccessful :(")
          }
        })

    }, [submit])

    //some strings
    if (created) {
      return (
        <div id="create-new-cont">
          <div id="create-new-button">
            <p id="create-new-text" onClick={createClick}> Create New + </p>
            <Create openCreate={openCreate}>
              <div id="createApp">
                <h1 id="success-create-text"> Success! Your apple was created.</h1>
                <div id="cancel-button" onClick={createClick}>
                  <h1 id="cancel-button-label">ok</h1>
                </div>
              </div>
            </Create>
          </div>
        </div>
      )
    }

    return (
      <div id="create-new-cont">
        <div id="create-new-button">
          <p id="create-new-text" onClick={createClick}> Create New + </p>
          <Create openCreate={openCreate}>
            <div id="createApp">
              <h1 id="createApp-title">a new apple-cation.</h1>

              <div id="i">
                <input id="company-input"
                  placeHolder="company"
                  onChange={event => setCompany(event.target.value)}
                ></input>
              </div>

              <div id="i">
                <input id="jobTitle-input"
                  placeHolder="position title"
                  onChange={event => setjobTitle(event.target.value)}
                ></input>
              </div>

              <div id="i">
                <input id="location-input"
                  placeHolder="location"
                  onChange={event => setLocation(event.target.value)}
                ></input>
              </div>

              <div id="spacer"></div>

              <div id="checkbox-div">
                <input id="checkbox" type="checkbox" name="pending"
                  id="pending" defaultChecked
                  onChange={event => setPending(event.target.value)}
                ></input>
                <label for="pending" id="check-label">Pending</label>
              </div>

              <div id="checkbox-div">
                <input id="checkbox" type="checkbox" name="pending"
                  id="pending"
                  onChange={event => setAccepted(event.target.value)}
                ></input>
                <label for="pending" id="check-label">Accepted</label>
              </div>

              <div id="checkbox-div">
                <input id="checkbox" type="checkbox" name="pending"
                  id="pending"
                  onChange={event => setRejected(event.target.value)}
                ></input>
                <label for="pending" id="check-label">Rejected</label>
              </div>

              <div id="date-div">
                <p id="date-label"> Submitted: </p>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    value={selectedDate}
                    onChange={handleDateChange}
                  />
                </MuiPickersUtilsProvider>
              </div>

              <div id="cancel-button">
                <h1 id="cancel-button-label" onClick={submitClick}>Create</h1>
              </div>
              <div id="cancel-button" onClick={createClick}>
                <h1 id="cancel-button-label">Cancel</h1>
              </div>
            </div>
          </Create>
        </div>
      </div>
    )
  }


  const ApplesList = () => {

  }

  return (
    <>
      <div id="page1">
        <div id="bar">
          <div id="bar-items">
            <div id="logo"></div>
            <Link to={dashboard_url} id="bar-text">Dashboard</Link>
            <h1></h1>
            <h1 id="bar-text-current">Apple-cations</h1>
            <Link to={analytics_url} id="bar-text">Analytics</Link>
            <h1></h1>
            <Link to={profile_url} id="bar-text">AppleCat Profile</Link>
          </div>
        </div>
        <div id="dashboard">
          <CreateNew />
        </div>
      </div>
    </>
  )
}

export default Applecations;