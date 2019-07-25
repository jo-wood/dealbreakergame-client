import React, {Component} from 'react';

/* Import Components */
import Select from '../FormComponents/Select';
import RangeInput from '../FormComponents/RangeInput'
import Button from '../FormComponents/Button';

class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        ageMonth: 9,
        ageDay: 2,
        ageYear: 2001,
        identifyAs: '',
        interestedIn: '',
        ageMin: this.age,
        ageMax: (this.age + 1)

      },

      identifyAs: ['Male', 'Female', 'Prefer not to say'],
      interestOptions: ['Females', 'Males', 'No Perference'],
      monthOptions: [1,2,3,4,5,6,7,8,9,10,11,12],
      dayOptions: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      yearOptions:[2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970]

    }
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.user;

    fetch(`${process.env.REACT_APP_SERVER_URL}/user/new`,{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }

 handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState( prevState => {
       return {
          newUser : {
                   ...prevState.newUser, [name]: value
                  }
       }
    }, () => console.log(this.state.newUser)
    )
}


  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        
        <label htmlFor={'birthdate'} className="form-label">Birthdate</label>

        <Select
                title={"Month"}
                name={'ageMonth'}
                options={this.state.monthOptions}
                value={this.state.user.ageMonth}
                handleChange={this.handleInput}
                /> {/* Birthmonth Selection */}
        
        <Select
                title={"Day"}
                name={'ageDay'}
                options={this.state.dayOptions}
                value={this.state.user.ageDay}
                handleChange={this.handleInput}
                /> {/* Birthday Selection */}
        
        <Select
                title={"Year"}
                name={'ageYear'}
                options={this.state.yearOptions}
                value={this.state.user.ageYear}
                handleChange={this.handleInput}
                /> {/* Interest Selection */}

        <br></br>
        <Select
                title={"Interested In:"}
                name={'interestedIn'}
                options={this.state.interestOptions}
                value={this.state.user.interestedIn}
                placeholder={'Select Interest'}
                handleChange={this.handleInput}
                /> {/* Interest Selection */}
        <br></br>
        <Select
                title={"Identify As:"}
                name={'identifyAs'}
                options={this.state.identifyAs}
                value={this.state.user.identifyAs}
                placeholder={'Select Identity'}
                handleChange={this.handleInput}
                 /> {/* Indentifcation Selection */}
        <br></br>
        <RangeInput
                type={'range'}
                title={'Max Age'}
                name={'ageMax'}
                value={this.state.user.ageMax}
                min={18}
                max={50}
                handleChange ={this.handleInput}
                /> {/* Age Perference Selection */}
        <br></br>
        <Button
                title={"Thats Me"}
            /> { /*Submit */ }
      </form>
    );
  }
}

export default UserDetails;
