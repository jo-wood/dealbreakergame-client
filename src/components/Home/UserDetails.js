import React, {Component} from 'react';
import { Redirect } from 'react-router-dom'
/* Import Components */
import Select from '../../UtilComponents/Select';
import RangeInput from '../../UtilComponents/RangeInput'
import Button from '../../UtilComponents/Button';
import Cookies from 'universal-cookie';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        instagram_id: null,
        username: null,
        full_name: null,
        access_token: null,
        profile_picture: null,
        profile_picture_hd: null,
        ageMonth: '',
        ageDay:'',
        ageYear: '',
        identifyAs: '',
        interestedIn: '',
        ageMin: 18,
        ageMax: 50
      },
      detailsUncompleted: true,
      formSubmitted: false,
      entriesSubmitted: new Set(),
      identifyAs: ['Male', 'Female', 'Prefer not to say'],
      interestOptions: ['Females', 'Males', 'No Perference'],
      monthOptions: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      dayOptions: ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
      yearOptions:[2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970]
    }
  }
  componentDidMount = () => {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser = JSON.parse(currentUserString);
    this.setState({
      user: {
        instagram_id: currentUser.instagram_id,
        username: currentUser.username,
        full_name: currentUser.full_name,
        access_token: currentUser.access_token,
        profile_picture: currentUser.profile_picture,
        profile_picture_hd: currentUser.profile_picture_hd
      }
    }) 
  }
  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.user;
    fetch(`${process.env.REACT_APP_SERVER_URL}/profile/new`,{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          const dataObject = JSON.parse(data);
          if (dataObject.status === "completed") {
            const cookies = new Cookies();
            cookies.set('user_id', dataObject.id, { path: '/' });
            // Re-save local userObject with user_id
            const currentUserString = localStorage.getItem('currentUser');
            const currentUser = JSON.parse(currentUserString);
            currentUser['user_id'] = dataObject.id;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            // Redirect to waiting room state-change
            this.setState({formSubmitted: true})
          }
        })
    })
  }
  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    let entries = this.state.entriesSubmitted;
    entries.add(name);
    this.setState( prevState => {
        return {
            user : {...prevState.user, [name]: value},
            entriesSubmitted: entries,
            detailsUncompleted: this.state.entriesSubmitted.size === 7 ? false : true
        }
      }, () => console.log(this.state.user)
    )
}
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        {this.state.formSubmitted ? <Redirect to='/waiting' /> : null}
        <label htmlFor={'birthdate'} className="form-label">Birthdate</label>
        <Select
                name={'ageMonth'}
                options={this.state.monthOptions}
                value={this.state.user.ageMonth}
                placeholder={'Month'}
                handleChange={this.handleInput}
                /> {/* Birthmonth Selection */}
        <Select
                name={'ageDay'}
                options={this.state.dayOptions}
                value={this.state.user.ageDay}
                placeholder={'Day'}
                handleChange={this.handleInput}
                /> {/* Birthday Selection */}
        <Select
                name={'ageYear'}
                options={this.state.yearOptions}
                value={this.state.user.ageYear}
                placeholder={'Year'}
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
                title={'Min Age'}
                name={'ageMin'}
                value={this.state.user.ageMin}
                min={18}
                max={80}
                handleChange ={this.handleInput}
                /> {/* Age Perference Selection */}
                <label>{this.state.ageMin}</label> 
        <RangeInput
                type={'range'}
                title={'Max Age'}
                name={'ageMax'}
                value={this.state.user.ageMax}
                min={18}
                max={80}
                handleChange ={this.handleInput}
                /> {/* Age Perference Selection */}
                <label>{this.state.ageMax}</label>
        <br></br>
        <Button
                title={"Thats Me"}
                action={this.handleFormSubmit}
                disabled={this.state.detailsUncompleted}
            /> { /*Submit */ }
      </form>
    );
  }
}
export default UserDetails;