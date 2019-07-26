import { Container } from 'unstated';

class WaitingContainer extends Container {
    state = {
      // games always start at 8:00pm day of currently
      nextGameStarts: new Date(Date.now()).setHours(20, 0, 0, 0),
      moveIntoGame: false
    };

    setNextGame = () => {
      //set to tomorrow at 8 PM
      const nextDate = new Date(this.state.nextGameStarts);
      const tomorrow = nextDate.setDate(nextDate.getDate() + 1);

        this.setState({
          nextGameStarts: tomorrow,
          moveIntoGame: true
        })
    }

    //when in game turn move onto next game back to false
    inGame = () => {
      this.setState({
        moveIntoGame:false
      })
    }


}

export default WaitingContainer;